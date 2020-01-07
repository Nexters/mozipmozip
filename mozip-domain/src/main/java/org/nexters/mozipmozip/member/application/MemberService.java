package org.nexters.mozipmozip.member.application;

import lombok.AllArgsConstructor;
import org.nexters.mozipmozip.member.domain.Member;
import org.nexters.mozipmozip.member.domain.MemberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Service
@Transactional
@AllArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Member create(final Member member) {
        return memberRepository.save(member);
    }

    @Transactional(readOnly = true)
    public Member getMemberById(final Long memberId) {
        return memberRepository.findById(memberId).orElseThrow(() -> new NoSuchElementException("그런거 없음"));
    }
}
