package org.nexters.mozipmozip;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@EqualsAndHashCode(of = "id", callSuper = false)
@Getter
public abstract class JpaBasePersistable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @Column(name = "deleted", nullable = false, columnDefinition = "BIT default 0")
    protected Boolean deleted = false;

    public void delete() {
        deleted = true;
    }
}
