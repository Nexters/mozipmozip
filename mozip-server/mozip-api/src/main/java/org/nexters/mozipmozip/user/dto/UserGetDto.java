package org.nexters.mozipmozip.user.dto;

import lombok.*;
import org.nexters.mozipmozip.user.domain.User;

@Getter
@Setter
@NoArgsConstructor
public class UserGetDto {
    private String name;
    private String email;
    private boolean isAdmin;

    @Builder
    public UserGetDto(String name, String email, boolean isAdmin) {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }

    public static UserGetDto of(User user) {
        return UserGetDto.builder()
                .email(user.getEmail())
                .name(user.getName())
                .isAdmin(user.getIsAdmin())
                .build();
    }
}
