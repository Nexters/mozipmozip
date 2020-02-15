package org.nexters.mozipmozip.user.dto;

import lombok.*;
import org.nexters.mozipmozip.user.domain.User;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserViewDto {
    private String name;
    private String email;
    private boolean isAdmin;

    @Builder
    public UserViewDto(String name, String email, boolean isAdmin) {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }

    public static UserViewDto of(User user) {
        return UserViewDto.builder()
                .email(user.getEmail())
                .name(user.getName())
                .isAdmin(user.getIsAdmin())
                .build();
    }
}
