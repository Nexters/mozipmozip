package org.nexters.mozipmozip.user.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@NoArgsConstructor(access = AccessLevel.PACKAGE)
@Getter
@Setter
@Entity
@Table(name = "user")
@AttributeOverride(name = "id", column = @Column(name = "user_id"))
public class User extends JpaBasePersistable {
    @Column(name = "name", length = 30, nullable = false)
    private String name;
    @Column(name = "email", length = 50, nullable = false)
    private String email;
    @Column(name = "password", length = 30, nullable = false)
    @JsonIgnore
    private String password;
    @Column(name = "isAdmin", nullable = false, columnDefinition = "BIT default 0")
    protected Boolean isAdmin = false;  //원래는 모두 지원자 인증번호받으면 관리자로 플래그값 변경

    @Builder
    public User(final String name, final String email, final String password, final Boolean isAdmin) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
