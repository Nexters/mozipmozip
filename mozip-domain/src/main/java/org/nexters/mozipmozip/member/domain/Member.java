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
@Table(name = "member")
@AttributeOverride(name = "id", column = @Column(name = "member_id"))
public class Member extends JpaBasePersistable {
    @Column(name = "email", length = 50, nullable = false)
    private String email;
    @Column(name = "name", length = 30, nullable = false)
    private String name;
    @Column(name = "phone_number", length = 30, nullable = false)
    private String phoneNumber;

    @Builder
    public Member(final String email, final String name, final String phoneNumber) {
        Member member = new Member();
        member.setEmail(email);
        member.setEmail(name);
        member.setEmail(phoneNumber);
    }
}
