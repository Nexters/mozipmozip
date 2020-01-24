package org.nexters.mozipmozip.member.application;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.member.domain.User;
import org.nexters.mozipmozip.member.domain.UserRepositoy;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
@DisplayName("유저 테스트")
class UserServiceTest {

    @Mock
    private UserRepositoy memberRepository;
    @InjectMocks
    private UserService memberService;

    private User userFixture = User.builder()
            .email("test@naver.com")
            .name("kyunam")
            .phoneNumber("010-4453-8737")
            .password("1111").build();

    @Test
    @DisplayName("유저를 저장하는데 성공한다")
    void createUserTest() {
        // given
        given(memberRepository.save(userFixture)).willReturn(userFixture);

        // when
        User savedUser = memberService.createUser(userFixture);

        // then
        assertThat(savedUser.getName()).isEqualTo(userFixture.getName());
        assertThat(savedUser.getEmail()).isEqualTo(userFixture.getEmail());
        assertThat(savedUser.getPhoneNumber()).isEqualTo(userFixture.getPhoneNumber());
        assertThat(savedUser.getPassword()).isEqualTo(userFixture.getPassword());
    }
}
