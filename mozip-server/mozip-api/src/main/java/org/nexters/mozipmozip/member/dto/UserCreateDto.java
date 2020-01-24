package org.nexters.mozipmozip.member.dto;

import lombok.*;
import org.nexters.mozipmozip.member.domain.User;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserCreateDto {

    @NotBlank(message = "이름은 필수 입력입니다")
    private String name;
    @Email(message = "이메일 형식을 맞춰주세요")
    private String email;
    private String phoneNumber;
    @NotBlank(message = "비밀번호는 필수 입력입니다")
    private String password;
    private boolean isAdmin;

    @Builder
    public UserCreateDto(final String name, final String email, final String phoneNumber, final String password, final boolean isAdmin) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    //dto를 entity로 변환
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
