package org.nexters.mozipmozip.member.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.member.application.UserService;
import org.nexters.mozipmozip.member.domain.User;
import org.nexters.mozipmozip.member.dto.UserCreateDto;
import org.nexters.mozipmozip.member.dto.UserGetDto;
import org.nexters.mozipmozip.member.dto.UserLoginDto;
import org.nexters.mozipmozip.member.dto.UserUpdateDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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

        if (error.hasErrors()) {
            error.getAllErrors()
                    .forEach(objectError -> {
                        log.error("Code: " + objectError.getCode());
                        log.error("defaultMessage: " + objectError.getDefaultMessage());
                        log.error("objectName: " + objectError.getObjectName());
                    });
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.created(URI.create("users"))
                .body(userService.createUser(UserCreateDto.toEntity(userCreateDto)));
    }

    //로그인 api
    @PostMapping(value = "/login")
    public String loginUser(@RequestBody UserLoginDto userLoginDto, HttpServletRequest request) {
        //리턴받은 회원정보로 세션 생성 후 회원정보 저장하기
        User user = userService.signInUser(UserLoginDto.toEntity(userLoginDto));
        HttpSession httpSession = request.getSession(true);
        httpSession.setAttribute("userInfo", user);
        User userInfo = (User) httpSession.getAttribute("userInfo");
        log.info(userInfo.getName());
        log.info(userInfo.getEmail());
        final String isLogin = "로그인 성공!!!";
        return isLogin;
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
                .phoneNumber(userInfo.getPhoneNumber())
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
                .password(updateInfo.getPassword())
                .phoneNumber(updateInfo.getPhoneNumber()).build();
        return updateDto;
    }

    //회원탈퇴 api
    @DeleteMapping(value = "/deleteUser")
    public String deleteUser(HttpSession session) {
        session.invalidate();
        userService.deleteUser(session);
        String delete = "탈퇴하였습니다";
        return delete;
    }
}

