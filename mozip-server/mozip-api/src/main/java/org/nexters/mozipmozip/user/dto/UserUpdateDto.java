package org.nexters.mozipmozip.user.dto;

import lombok.*;
import org.nexters.mozipmozip.user.domain.User;

@Getter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserUpdateDto {
    private String password;
    private String email;

    @Builder
    public UserUpdateDto(String password, String email) {
        this.password = password;
        this.email = email;
    }

    public static User toEntity(UserUpdateDto userUpdateDto) {
        User user = User.builder()
                .password(userUpdateDto.getPassword())
                .email(userUpdateDto.getEmail()).build();
        return user;

    }
}
