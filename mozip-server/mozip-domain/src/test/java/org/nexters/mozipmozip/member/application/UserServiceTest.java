package org.nexters.mozipmozip.member.application;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.member.domain.User;
import org.nexters.mozipmozip.member.domain.UserRepositoy;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
@DisplayName("멤버 테스트")
class UserServiceTest {

    @Mock
    private UserRepositoy memberRepository;
    @InjectMocks
    private UserCreateService memberService;

    private User userFixture = User.builder()
            .email("test@naver.com")
            .name("kyunam")
            .phoneNumber("010-4453-8737").build();

    @Test
    @DisplayName("멤버를 저장하는데 성공한다")
    void create() {
        // given
        given(memberRepository.save(userFixture)).willReturn(userFixture);

        // when
        User savedUser = memberService.create(userFixture);

        // then
        assertThat(savedUser.getEmail()).isEqualTo(userFixture.getEmail());
        assertThat(savedUser.getName()).isEqualTo(userFixture.getName());
        assertThat(savedUser.getPhoneNumber()).isEqualTo(userFixture.getPhoneNumber());
    }

    @Test
    @DisplayName("멤버를 아이디로 조회하는데 성공한다")
    void getMemberById() {
        // given
        Long memberIdFixture = 1L;
        given(memberRepository.findById(memberIdFixture)).willReturn(Optional.of(userFixture));

        // when
        User searchedUser = memberService.getMemberById(memberIdFixture);

        // then
        assertThat(searchedUser.getEmail()).isEqualTo(userFixture.getEmail());
        assertThat(searchedUser.getName()).isEqualTo(userFixture.getName());
        assertThat(searchedUser.getPhoneNumber()).isEqualTo(userFixture.getPhoneNumber());
    }
}
