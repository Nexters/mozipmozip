package org.nexters.mozipmozip.member.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.member.application.UserCreateService;
import org.nexters.mozipmozip.member.dto.UserCreateDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping(value = "/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    final private UserCreateService userCreateService;

    //회원가입
    @PostMapping("/signUp")
    public ResponseEntity createUser(@RequestBody UserCreateDto userCreateDto) {
        return ResponseEntity.created(URI.create("users"))
                .body(userCreateService.createUser(UserCreateDto.of(userCreateDto)));
    }
}

