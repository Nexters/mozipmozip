package org.nexters.mozipmozip.member.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.member.application.UserService;
import org.nexters.mozipmozip.member.dto.UserCreateDto;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    final private UserService userCreateService;

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
                .body(userCreateService.createUser(UserCreateDto.of(userCreateDto)));
    }

}

