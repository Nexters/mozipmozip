package org.nexters.mozipmozip.member.controller;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.member.application.UserService;
import org.nexters.mozipmozip.member.dto.UserCreateDto;
import org.nexters.mozipmozip.member.dto.UserLoginDto;
import org.nexters.mozipmozip.member.dto.UserSessionDto;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

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

    //회원가입 api
    @PostMapping
    public ResponseEntity createUser(@RequestBody @Valid UserCreateDto userCreateDto, BindingResult error) {

        if (error.hasErrors()) {
            error.getAllErrors()
                    .forEach(objectError -> {
                        System.err.println("Code: " + objectError.getCode());
                        System.err.println("defaultMessage: " + objectError.getDefaultMessage());
                        System.err.println("objectName: " + objectError.getObjectName());
                    });
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.created(URI.create("users"))
                .body(userService.createUser(UserCreateDto.of(userCreateDto)));
    }

    // 로그인 - Cookie
    @GetMapping(value = "/login")
    public String loginUser(@RequestBody UserLoginDto userLoginDto, HttpServletResponse response) {

        return userService.signInUser(UserLoginDto.of(userLoginDto), response);

    }

    // 로그아웃
    @GetMapping(value = "/logout")
    public ResponseEntity logout(HttpServletResponse response){
        userService.logout(response);
        return ResponseEntity.ok().build();
    }

   /* 로그인 - Session
    @GetMapping(value = "/login")
    public String loginUser(@RequestBody UserLoginDto userLoginDto, HttpServletRequest request){

        UserSessionDto userSessionDto=UserSessionDto.builder().build();

        userSessionDto.setName(userLoginDto.getName());
        userSessionDto.setPassword(userLoginDto.getPassword());

        HttpSession httpSession=request.getSession(true);
        httpSession.setAttribute("User",userSessionDto);

        return userService.signInUser(request,UserLoginDto.of(userLoginDto));
    }*/

}

