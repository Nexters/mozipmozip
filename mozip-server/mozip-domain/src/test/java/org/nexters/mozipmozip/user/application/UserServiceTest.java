package org.nexters.mozipmozip.user.application;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.user.domain.UserRepository;
import org.nexters.mozipmozip.utils.SessionUtil;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
@DisplayName("유저 테스트")
class UserServiceTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @InjectMocks
    private UserService userService;

    private User userFixture = User.builder()
            .email("test@naver.com")
            .name("라영지")
            .password("1111").build();

    @Test
    @DisplayName("회원가입 성공")
    void createUserTest() {
        // given
        given(userRepository.save(userFixture)).willReturn(userFixture);

        // when
        User savedUser = userService.createUser(userFixture, false);

        // then
        assertThat(savedUser.getName()).isEqualTo(userFixture.getName());
        assertThat(savedUser.getEmail()).isEqualTo(userFixture.getEmail());
        assertThat(savedUser.getPassword()).isEqualTo(userFixture.getPassword());
    }

    @Test
    @DisplayName("유저 로그인 성공")
    void loginUserTest() {

        //given
        User login = User.builder()
                .email(userFixture.getEmail())
                .password(userFixture.getPassword())
                .build();
        given(userRepository.findByEmail(login.getEmail())).willReturn(Optional.of(userFixture));
        given(bCryptPasswordEncoder.matches(login.getPassword(), userFixture.getPassword())).willReturn(true);

        //when
        User loginUser = userService.signInUser(login);

        //then
        assertThat(loginUser.getName()).isEqualTo(userFixture.getName());
        assertThat(loginUser.getEmail()).isEqualTo(userFixture.getEmail());
        assertThat(loginUser.getPassword()).isEqualTo(userFixture.getPassword());

    }

    @Test
    @DisplayName("유저 정보 수정 성공")
    void updateUserTest() {

        //given - 테스트 준비
        String encodedPassword = "!@#$%";
        User updateInfo = User.builder()
                .email("qqq@naver.com")
                .password("2222")
                .build();

        MockHttpSession mockSession = new MockHttpSession() {{
            setAttribute(SessionUtil.SESSION_KEY, userFixture);
        }};

        given(userRepository.findById(Mockito.any())).willReturn(Optional.of(userFixture));
        given(bCryptPasswordEncoder.encode(updateInfo.getPassword())).willReturn(encodedPassword);

        //when
        User updateUser = userService.updateUser(mockSession, updateInfo);

        //that
        assertThat(updateUser.getPassword()).isEqualTo(encodedPassword);
    }

    @Test
    @DisplayName("유저 정보 조회 성공")
    void getUserTest() {
        //given
        Long userFixtureId = 1L;

        given(userRepository.findById(userFixtureId)).willReturn(Optional.of(userFixture));

        //when
        User getUser = userService.getUser(userFixtureId);

        assertThat(getUser.getName()).isEqualTo(userFixture.getName());
        assertThat(getUser.getEmail()).isEqualTo(userFixture.getEmail());
    }
}
