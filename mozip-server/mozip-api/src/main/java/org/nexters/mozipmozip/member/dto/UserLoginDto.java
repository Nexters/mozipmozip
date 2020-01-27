package org.nexters.mozipmozip.member.dto;

import lombok.*;
import org.nexters.mozipmozip.member.domain.User;
import javax.validation.constraints.NotBlank;

@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserLoginDto {
    private String name;
    @NotBlank(message = "비밀번호는 필수 입력입니다")
    private String password;

    public static User toEntity(UserLoginDto userLoginDto) {
        return User.builder()
                .name(userLoginDto.name)
                .password(userLoginDto.password)
                .build();
    }
}
