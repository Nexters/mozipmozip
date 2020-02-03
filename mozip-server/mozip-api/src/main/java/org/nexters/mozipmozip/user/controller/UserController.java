package org.nexters.mozipmozip.user.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.user.application.UserService;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.user.dto.UserCreateDto;
import org.nexters.mozipmozip.user.dto.UserGetDto;
import org.nexters.mozipmozip.user.dto.UserLoginDto;
import org.nexters.mozipmozip.user.dto.UserUpdateDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    final private UserService userService;
    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    //회원가입 api
    @PostMapping
    public ResponseEntity createUser(@RequestBody @Valid UserCreateDto userCreateDto, BindingResult error) {

        //Valid검증
        if (error.hasErrors()) {
            error.getAllErrors()
                    .forEach(objectError -> {
                        log.error("Code: " + objectError.getCode());
                        log.error("defaultMessage: " + objectError.getDefaultMessage());
                        log.error("objectName: " + objectError.getObjectName());
                    });
            return ResponseEntity.badRequest().build();
        }

        //비밀번호 확인
        if (userCreateDto.passwordConfirm().equals("incorrect")) {
            return ResponseEntity.badRequest().build();
        }

        //관리자 인증번호 처리
        if (userCreateDto.getAdminCode().equals("임시관라지인증번호")) {
            userCreateDto.setAdmin(true);
        }

        return ResponseEntity.created(URI.create("users"))
                .body(userService.createUser(UserCreateDto.toEntity(userCreateDto)));
    }

    //로그인 api
    @PostMapping(value = "/login")
    public ResponseEntity loginUser(@RequestBody UserLoginDto userLoginDto, HttpSession httpSession, HttpServletResponse response) {
        //리턴받은 회원정보로 세션 생성 후 회원정보 저장하기
        User user = userService.signInUser(UserLoginDto.toEntity(userLoginDto));
        httpSession.setAttribute("userInfo", user);
        httpSession.getId();
        log.info(httpSession.getId());
        //쿠키 생성 후 세션아이디 저장
        Cookie cookie = new Cookie("loginCookie", httpSession.getId());
        cookie.setPath("/");
        cookie.setMaxAge(60*60*24*7);
        response.addCookie(cookie);
        User userInfo = (User) httpSession.getAttribute("userInfo");
        log.info(userInfo.getName());
        log.info(userInfo.getEmail());
        final String isLogin = "로그인 성공!!!";
        return ResponseEntity.ok().build();
    }

    //로그아웃 api
    @PostMapping(value = "/logout")
    public String logoutUser(HttpServletRequest request) {
        request.getSession();
        //세션 초기화
        request.getSession().invalidate();
        request.getSession();
        return userService.logoutUser();
    }

    //회원조회 api
    @GetMapping(value = "/getUser")
    public UserGetDto getUser(HttpSession session) {
        User userInfo = userService.getUser(session);
        //세션에 저장되어있던 회원정보 dto로 변환하여 응답하기
        UserGetDto userGetDto = UserGetDto.builder()
                .name(userInfo.getName())
                .email(userInfo.getEmail())
                .isAdmin(userInfo.getIsAdmin())
                .build();
        return userGetDto;
    }

    //회원정보 수정(수정된 회원정보(비밀번호,이메일,전화번호)와 기존 session 요청) api
    @PutMapping(value = "/updateUser")
    public UserUpdateDto updateUser(HttpSession session, @RequestBody UserUpdateDto userUpdateDto) {
        User updateInfo = userService.updateUser(session, UserUpdateDto.toEntity(userUpdateDto));
        UserUpdateDto updateDto = UserUpdateDto.builder()
                .email(updateInfo.getEmail())
                .password(updateInfo.getPassword()).build();
        return updateDto;
    }

    //회원탈퇴 api
    @DeleteMapping(value = "/deleteUser/{id}")
    public String deleteUser(HttpSession session) {
        session.invalidate();
        userService.deleteUser(session);
        String delete = "탈퇴하였습니다";
        return delete;
    }
}

