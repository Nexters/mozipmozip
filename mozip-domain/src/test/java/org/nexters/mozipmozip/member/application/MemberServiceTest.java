package org.nexters.mozipmozip.member.application;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.member.domain.Member;
import org.nexters.mozipmozip.member.domain.MemberRepository;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
@DisplayName("멤버 테스트")
class MemberServiceTest {

    @Mock
    private MemberRepository memberRepository;
    @InjectMocks
    private MemberService memberService;

    private Member memberFixture = Member.builder()
            .email("test@naver.com")
            .name("kyunam")
            .phoneNumber("010-4453-8737").build();

    @Test
    @DisplayName("멤버를 저장하는데 성공한다")
    void create() {
        // given
        given(memberRepository.save(memberFixture)).willReturn(memberFixture);

        // when
        Member savedMember = memberService.create(memberFixture);

        // then
        assertThat(savedMember.getEmail()).isEqualTo(memberFixture.getEmail());
        assertThat(savedMember.getName()).isEqualTo(memberFixture.getName());
        assertThat(savedMember.getPhoneNumber()).isEqualTo(memberFixture.getPhoneNumber());
    }

    @Test
    @DisplayName("멤버를 아이디로 조회하는데 성공한다")
    void getMemberById() {
        // given
        Long memberIdFixture = 1L;
        given(memberRepository.findById(memberIdFixture)).willReturn(Optional.of(memberFixture));

        // when
        Member searchedMember = memberService.getMemberById(memberIdFixture);

        // then
        assertThat(searchedMember.getEmail()).isEqualTo(memberFixture.getEmail());
        assertThat(searchedMember.getName()).isEqualTo(memberFixture.getName());
        assertThat(searchedMember.getPhoneNumber()).isEqualTo(memberFixture.getPhoneNumber());
    }
}
