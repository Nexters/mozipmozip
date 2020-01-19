package org.nexters.mozipmozip.notice.domain;


import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PACKAGE)
@Getter
@Setter
@Entity
@Table(name = "notice_form",
        indexes = {
                @Index(columnList = "notice_id", name = "IDX_NOTICE_ID")
        }
)
@AttributeOverride(name = "id", column = @Column(name = "notice_form_id"))
public class NoticeForm extends JpaBasePersistable {
    @Enumerated(EnumType.STRING)
    @Column(name = "occupation", nullable = false)
    private Occupation occupation;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(
            name = "notice_form_job_type",
            joinColumns = @JoinColumn(name = "notice_form_id")
    )
    @Column(name = "job_type")
    private List<String> jobTypes = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "notice_id")
    private Notice notice;

    @OneToMany(mappedBy = "noticeForm", fetch = FetchType.LAZY)
    private List<NoticeFormQuestionItem> noticeFormQuestionItems = new ArrayList<>();

    @Builder
    public NoticeForm(final String occupation, final List<String> jobTypes) {
        NoticeForm noticeForm = new NoticeForm();
        noticeForm.setJobTypes(jobTypes);
    }

    public void addNoticeFormQuestionItem(NoticeFormQuestionItem noticeFormQuestionItem) {
        this.noticeFormQuestionItems.add(noticeFormQuestionItem);
    }
}
