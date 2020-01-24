package org.nexters.mozipmozip.member.application;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.member.domain.User;
import org.nexters.mozipmozip.member.domain.UserRepositoy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepositoy userRepository;

    public User createUser(User user) {

        return userRepository.save(user);
    }
}
