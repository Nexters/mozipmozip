package org.nexters.mozipmozip.resume.domain;

import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;

import javax.persistence.*;

@Builder
@Setter
@Getter
@Entity
@Table(name = "resume_answer_item", indexes = { @Index(columnList = "resume_id", name = "IDX_RESUME_ID")})
@AttributeOverride(name = "id", column = @Column(name = "resume_answer_item_id"))
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
public class ResumeAnswerItem extends JpaBasePersistable {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id", nullable = false)
    private Resume resume;

    @Column(name = "answer", nullable = false)
    private String answer;

}
