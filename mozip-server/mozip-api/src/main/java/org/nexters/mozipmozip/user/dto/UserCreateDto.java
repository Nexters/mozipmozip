package org.nexters.mozipmozip.user.dto;

import lombok.*;
import org.nexters.mozipmozip.user.domain.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserCreateDto {

    @NotBlank(message = "이름은 필수 입력입니다")
    private String name;
    @Email(message = "이메일 형식을 맞춰주세요")
    private String email;
    @NotBlank(message = "비밀번호는 필수 입력입니다")
    private String password;
    private String adminCode = "관리자가 아닙니다";

    @Builder
    public UserCreateDto(final String name, final String email, final String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public static User toEntity(UserCreateDto userCreateDto) {
        return User.builder()
                .name(userCreateDto.name)
                .email(userCreateDto.email)
                .password(userCreateDto.password)
                .build();
    }
}