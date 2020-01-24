package org.nexters.mozipmozip.notice.domain;


import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PACKAGE)
@Getter
@Setter
@Entity
@Table(name = "notice_form_question_item",
        indexes = {
                @Index(columnList = "notice_form_id", name = "IDX_NOTICE_FORM_ID")
        }
)
@AttributeOverride(name = "id", column = @Column(name = "notice_form_question_item_id"))
public class NoticeFormQuestionItem extends JpaBasePersistable {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "notice_form_id")
    private NoticeForm noticeForm;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "max_length", nullable = false)
    private Integer maxLength = 100;

    @Column(name = "question_score", nullable = false)
    private Integer questionScore = 10;

    @Lob
    @Column(name = "content", nullable = false)
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private NoticeFormQuestionItemType type;

    @Builder
    public NoticeFormQuestionItem(final String title,
                                  final Integer maxLength,
                                  final Integer questionScore,
                                  final String content,
                                  final NoticeFormQuestionItemType type) {
        NoticeFormQuestionItem noticeFormQuestionItem = new NoticeFormQuestionItem();
        noticeFormQuestionItem.setTitle(title);
        noticeFormQuestionItem.setMaxLength(maxLength);
        noticeFormQuestionItem.setQuestionScore(questionScore);
        noticeFormQuestionItem.setContent(content);
        noticeFormQuestionItem.setType(type);
    }
}
