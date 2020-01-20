package org.nexters.mozipmozip.member.application;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.member.domain.User;
import org.nexters.mozipmozip.member.domain.UserRepositoy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserCreateService {
    private final UserRepositoy userRepository;

    public User createUser(User user) {

        System.out.println(user.getName());
        return userRepository.save(user);
    }

   /* @Transactional(readOnly = true)
    public User getMemberById(final Long memberId) {
        return memberRepository.findById(memberId).orElseThrow(() -> new NoSuchElementException("그런거 없음"));
    }*/
}