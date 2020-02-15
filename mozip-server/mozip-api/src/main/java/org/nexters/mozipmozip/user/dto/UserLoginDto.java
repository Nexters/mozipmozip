package org.nexters.mozipmozip.user.dto;

import lombok.*;
import org.nexters.mozipmozip.user.domain.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Setter
@Getter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserLoginDto {
    @Email(message = "이메일 형식에 맞게 입력하여주세요")
    private String email;
    @NotBlank(message = "비밀번호는 필수 입력입니다")
    private String password;

    @Builder
    UserLoginDto(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public static User toEntity(UserLoginDto userLoginDto) {
        return User.builder()
                .email(userLoginDto.email)
                .password(userLoginDto.password)
                .build();
    }
}
