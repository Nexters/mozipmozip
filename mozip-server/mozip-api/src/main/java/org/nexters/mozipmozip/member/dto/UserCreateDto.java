package org.nexters.mozipmozip.member.dto;

import lombok.*;
import org.nexters.mozipmozip.member.domain.User;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserCreateDto {

    private String name;
    private String email;
    private String phoneNumber;
    private String password;
    private boolean isAdmin;

    @Builder
    public UserCreateDto(final String name, final String email, final String phoneNumber, final String password, final boolean isAdmin){
        this.name=name;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.password=password;
        this.isAdmin=isAdmin;
    }

    //dto->entity로 바꿔주기
    public static User of(UserCreateDto userCreateDto) {
        return User.builder()
                .name(userCreateDto.name)
                .email(userCreateDto.email)
                .password(userCreateDto.password)
                .phoneNumber(userCreateDto.phoneNumber)
                .isAdmin(userCreateDto.isAdmin)
                .build();
    }
}