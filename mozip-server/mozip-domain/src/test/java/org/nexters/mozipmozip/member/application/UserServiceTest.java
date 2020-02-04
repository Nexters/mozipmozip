package org.nexters.mozipmozip.member.application;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.user.application.UserService;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.user.domain.UserRepositoy;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpSession;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
@DisplayName("유저 테스트")
class UserServiceTest {

    @Mock
    private UserRepositoy userRepositoy;
    @InjectMocks
    private UserService userService;

    private User userFixture = User.builder()
            .email("test@naver.com")
            .name("라영지")
            .password("1111").build();

    private MockHttpSession mockSession;
    private MockHttpServletRequest request;

    @Test
    @DisplayName("회원가입 성공")
    void createUserTest() {
        // given
        given(userRepositoy.save(userFixture)).willReturn(userFixture);

        // when
        User savedUser = userService.createUser(userFixture, true);

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
                .name("라영지")
                .password("1111")
                .build();
        given(userRepositoy.findByEmail(login.getEmail())).willReturn(userFixture);

        //when
        User loginUser = userService.signInUser(login);

        //then
        assertThat(loginUser.getName()).isEqualTo(userFixture.getName());
        assertThat(loginUser.getEmail()).isEqualTo(userFixture.getEmail());
        assertThat(loginUser.getPassword()).isEqualTo(userFixture.getPassword());

    }

    @Test
    @DisplayName("로그아웃 테스트")
    void logoutUser() {
        //컨트롤러에서 test 해야될듯?
    }

    @Test
    @DisplayName("유저 정보 수정 테스트 하는중->실패뜸 ㅜㅜ")
    void updateUserTest() {

        //given - 테스트 준비
        Long userFixtureId = 1L;
        User updateInfo = User.builder()
                .email("qqq@naver.com")
                .password("2222").build();
//        mockSession = (MockHttpSession) request.getSession(true);
//        mockSession.setAttribute("userInfo",userFixture);
//        mockSession.getAttribute("userInfo");

        mockSession = null;
        given(userRepositoy.findById(userFixtureId)).willReturn(Optional.of(userFixture));

        //when
        User updateUser = userService.updateUser(mockSession, updateInfo);

        //that
        assertThat(updateUser.getPassword()).isEqualTo(updateInfo.getPassword());
        assertThat(updateUser.getEmail()).isEqualTo(updateInfo.getEmail());
        //assertThat(mockSession.getAttribute("userInfo")).isEqualTo(updateUser);
    }

    //회원 조회,수정,탈퇴는 세션있어서 알아보고 다시 해볼예정//
}
