package org.nexters.mozipmozip.member.domain;

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
    @Column(name = "phone_number", length = 30, nullable = false)
    private String phoneNumber;
    @Column(name = "password", length = 30, nullable = false)
    private String password;
    @Column(name = "isAdmin", nullable = false, columnDefinition = "BIT default 0")
    protected Boolean isAdmin = false;

    @Builder
    public User(final String name, final String email, final String phoneNumber, final String password, final boolean isAdmin) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
