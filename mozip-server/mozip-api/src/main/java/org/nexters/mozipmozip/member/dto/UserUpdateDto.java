package org.nexters.mozipmozip.member.dto;

import lombok.*;
import org.nexters.mozipmozip.member.domain.User;

@Getter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserUpdateDto {
    private String password;
    private String email;
    private String phoneNumber;

    @Builder
    public UserUpdateDto(String password, String email, String phoneNumber) {
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public static User toEntity(UserUpdateDto userUpdateDto) {
        User user = User.builder()
                .password(userUpdateDto.getPassword())
                .email(userUpdateDto.getEmail())
                .phoneNumber(userUpdateDto.getPhoneNumber()).build();
        return user;

    }
}
