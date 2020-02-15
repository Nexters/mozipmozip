package org.nexters.mozipmozip.user.application;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.user.domain.UserRepository;
import org.nexters.mozipmozip.utils.SessionUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpSession;
import java.util.NoSuchElementException;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public User createUser(User user, Boolean isAdmin) {
        user.encodePassword(bCryptPasswordEncoder);
        user.setIsAdmin(isAdmin);
        return userRepository.save(user);
    }

    public User signInUser(User user) {
        return userRepository.findByEmail(user.getEmail())
                .filter(u -> u.matchPassword(user.getPassword(), bCryptPasswordEncoder))
                .orElseThrow(() -> new IllegalArgumentException("아이디 혹은 비밀번호가 틀렸습니다"));
    }

    @Transactional(readOnly = true)
    public User getUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new NoSuchElementException("해당 회원이 없습니다"));
    }

    // 회원정보수정(세션에있는 이름으로 레포에서 회원찾기)
    public User updateUser(HttpSession session, User updateUserInfo) {
        User savedUser = userRepository.findById(SessionUtil.getUser(session).getId())
                .orElseThrow(() -> new NoSuchElementException("해당 회원이 없습니다"));

        savedUser.update(updateUserInfo, bCryptPasswordEncoder);
        SessionUtil.setUser(session, savedUser);

        return savedUser;
    }

    //회원탈퇴
    public void deleteUser(Long id) {
        userRepository.findById(id).orElseThrow(() -> new NoSuchElementException("해당 회원이 없습니다")).delete();
    }
}
