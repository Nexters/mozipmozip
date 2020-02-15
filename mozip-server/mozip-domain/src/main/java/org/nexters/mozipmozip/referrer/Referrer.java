package org.nexters.mozipmozip.referrer;

import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;

import javax.persistence.*;

@Entity
@Setter
@Getter
@Table(name = "referrer")
@AttributeOverride(name = "id", column = @Column(name = "referrer_id"))
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class Referrer extends JpaBasePersistable {
    @Column(name = "path", nullable = false)
    private String path;

    @Builder
    public Referrer(String path) {
        this.path = path;
    }
}
