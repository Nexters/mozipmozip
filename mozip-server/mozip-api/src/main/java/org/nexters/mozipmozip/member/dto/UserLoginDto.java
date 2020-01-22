package org.nexters.mozipmozip.member.dto;

import lombok.*;
import org.nexters.mozipmozip.member.domain.User;


@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserLoginDto {

    private String name;
    private String password;

    @Builder
    public UserLoginDto(final String name, final String password) {
        this.name = name;
        this.password = password;
    }

    public static User of(UserLoginDto userLoginDto) {
        return User.builder()
                .password(userLoginDto.password)
                .name(userLoginDto.name).build();
    }
}
