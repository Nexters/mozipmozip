package org.nexters.mozipmozip.resume.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;
import org.nexters.mozipmozip.notice.domain.NoticeFormQuestionItem;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "resume_answer_item",
        indexes = {
                @Index(columnList = "resume_id", name = "IDX_RESUME_ID"),
                @Index(columnList = "notice_form_question_item_id", name = "IDX_NOTICE_FORM_QUESTION_ITEM_ID")
        }
)
@AttributeOverride(name = "id", column = @Column(name = "resume_answer_item_id"))
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class ResumeAnswerItem extends JpaBasePersistable {

    @ManyToOne
    @JoinColumn(name = "resume_id", nullable = false)
    @JsonBackReference
    private Resume resume;

    @ManyToOne
    @JoinColumn(name = "notice_form_question_item_id", nullable = false)
    private NoticeFormQuestionItem noticeFormQuestionItem;

    @Column(name = "answer", nullable = false)
    private String answer;

    @Builder
    public ResumeAnswerItem(final Long id,
                            final String answer) {
        this.id = id;
        this.answer = answer;
    }

}
