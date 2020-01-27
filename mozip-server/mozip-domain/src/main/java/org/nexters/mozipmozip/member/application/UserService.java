package org.nexters.mozipmozip.member.application;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.member.domain.User;
import org.nexters.mozipmozip.member.domain.UserRepositoy;
import org.nexters.mozipmozip.member.exception.UserDefineException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpSession;
import java.util.NoSuchElementException;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepositoy userRepository;
    private final Logger logger = LoggerFactory.getLogger(UserService.class);

    //회원가입
    public User createUser(User user) {

        return userRepository.save(user);
    }

    //로그인(이름, 비밀번호)
    public User signInUser(User user) {

        User userInfo = userRepository.findByName(user.getName());

        //예외처리
        if (userInfo.getName() == null) {
            logger.info("존재하지 않는 회원입니다");
            throw new UserDefineException("이름을 입력하세요");
        }
        if (!userInfo.getName().equals(user.getName())) {
            logger.info("존재하지 않는 회원입니다");
            throw new UserDefineException("존재하지 않는 회원입니다");
        }
        if (!userInfo.getPassword().equals(user.getPassword())) {
            logger.info("비밀번호가 틀렸습니다");
            throw new UserDefineException("비밀번호가 틀렸습니다");
        }

        return userInfo;
    }

    //로그아웃
    public String logoutUser() {
        final String logout = "정상적으로 로그아웃되었습니다";
        return logout;
    }

    //회원조회
    @Transactional(readOnly = true)
    public User getUser(HttpSession session) {
        User userInfo = (User) session.getAttribute("userInfo");
        User getUSer = userRepository.findById(userInfo.getId())
                .orElseThrow(() -> new NoSuchElementException("해당 회원이 없습니다"));
        return getUSer;
    }

    //회원정보수정(세션에있는 이름으로 레포에서 회원찾기)
    public User updateUser(HttpSession session, User user) {
        //세션에 저장된 기존 회원정보가져오기
        User userInfo = (User) session.getAttribute("userInfo");
        User updateInfo = userRepository.findById(userInfo.getId())
                .orElseThrow(() -> new NoSuchElementException("해당 회원이 없습니다"));
        //데이터 수정 후 db에 저장
        updateInfo.setPassword(user.getPassword());
        updateInfo.setEmail(user.getEmail());
        updateInfo.setPhoneNumber(user.getPhoneNumber());
        userRepository.save(updateInfo);
        //세션의 정보도 수정
        session.setAttribute("userInfo", updateInfo);
        User isupdate = (User) session.getAttribute("userInfo");
        //수정되었는지 확인
        logger.info(isupdate.getName());
        logger.info(isupdate.getPassword());
        return updateInfo;
    }

    //회원탈퇴
    public User deleteUser(HttpSession session) {
        User sessionInfo = (User) session.getAttribute("userInfo");
        User deleteUser = userRepository.findById(sessionInfo.getId())
                .orElseThrow(() -> new NoSuchElementException("해당 회원이 없습니다"));
        deleteUser.delete();
        return deleteUser;
    }
}
