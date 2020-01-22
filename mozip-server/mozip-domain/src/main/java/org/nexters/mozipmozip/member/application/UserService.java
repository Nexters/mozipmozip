package org.nexters.mozipmozip.member.application;

import com.sun.net.httpserver.Authenticator;
import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.member.domain.User;
import org.nexters.mozipmozip.member.domain.UserRepositoy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepositoy userRepository;

    //회원가입
    public User createUser(User user) {

        return userRepository.save(user);
    }

    /*로그인 - Cookie*/
    public String signInUser(User user, HttpServletResponse response) {

        User userLogin = userRepository.findByName(user.getName());

        System.err.println("name:" + user.getName());
        System.err.println("password:" + user.getPassword());
        System.err.println("passforDB" + userLogin.getPassword());

        if (userLogin.getName() == null) {
            System.err.println("존재하지 않는 회원입니다");
        }
        if (!userLogin.getPassword().equals(user.getPassword())) {
            System.err.println("비밀번호가 틀렸습니다");
        }

        Cookie cookie = new Cookie("user", userLogin.getName());
        cookie.setMaxAge(60 * 60 * 24);  //만료시간??
        cookie.setPath("/");  //모든 경로에서 접근가능
        response.addCookie(cookie);

        return userLogin.getName();
    }

    //로그아웃
    public void logout(HttpServletResponse response){
        Cookie cookie =new Cookie("user", null);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);

        System.out.println("Logout Successfully!");
    }

    /*로그인 - Session
    public String signInUser(HttpServletRequest request, User user) {

        User userInfo = userRepository.findByName(user.getName());

        if (userInfo.getName() == null) {
            System.err.println("존재하지 않는 회원입니다");
        }
        if (!userInfo.getPassword().equals(user.getPassword())) {
            System.err.println("비밀번호가 틀렸습니다");
        }

        return userInfo.getName();
    }*/
}
