package org.nexters.mozipmozip.user.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.user.application.UserService;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.user.dto.UserCreateDto;
import org.nexters.mozipmozip.user.dto.UserLoginDto;
import org.nexters.mozipmozip.user.dto.UserUpdateDto;
import org.nexters.mozipmozip.user.dto.UserViewDto;
import org.nexters.mozipmozip.utils.SessionUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);
    private final UserService userService;


    @GetMapping("/current")
    public ResponseEntity getCurrentUser(HttpSession session) {
        return ResponseEntity.ok(UserViewDto.of(SessionUtil.getUser(session)));
    }

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

        return ResponseEntity.created(URI.create("users"))
                .body(userService.createUser(UserCreateDto.toEntity(userCreateDto), userCreateDto.getAdminCode().equals("임시관리자인증번호")));
    }

    //로그인 api (+ 쿠키로 세션아이디 전달)->톰캣이 세션만들때 자동으로 세션쿠키를 만들어서 전달한다!!
    @PostMapping(value = "/login")
    public ResponseEntity loginUser(@Valid @RequestBody UserLoginDto userLoginDto, HttpSession session) {
        //리턴받은 회원정보로 세션 생성 후 회원정보 저장하기
        User loginedUser = userService.signInUser(UserLoginDto.toEntity(userLoginDto));
        SessionUtil.setUser(session, loginedUser);
        return ResponseEntity.ok().build();
    }

    //로그아웃 api ->  쿠키값 초기화
    @PostMapping(value = "/logout")
    public ResponseEntity logoutUser(HttpSession session) {
        SessionUtil.logout(session);
        return ResponseEntity.ok().build();
    }

    //회원조회 api(쿠키로 세션아이디 값 찾고 세션아이디값으로 객체 찾기)
    @GetMapping(value = "/getUser/{id}")
    public UserViewDto getUser(@PathVariable Long id) {
        User userInfo = userService.getUser(id);
        return UserViewDto.builder()
                .name(userInfo.getName())
                .email(userInfo.getEmail())
                .isAdmin(userInfo.getIsAdmin())
                .build();
    }

    //회원정보 수정(수정된 회원정보(비밀번호,이메일,전화번호)와 기존 session 요청) api
    @PatchMapping(value = "/update")
    public ResponseEntity updateUser(HttpSession session, @RequestBody UserUpdateDto userUpdateDto) {
        User updateInfo = userService.updateUser(session, UserUpdateDto.toEntity(userUpdateDto));
        return ResponseEntity.ok().build();
    }

    //회원탈퇴 api
    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}

