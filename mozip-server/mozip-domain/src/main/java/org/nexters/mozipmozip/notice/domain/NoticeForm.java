package org.nexters.mozipmozip.notice.domain;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @JsonBackReference
    private Notice notice;

    @OneToMany(mappedBy = "noticeForm", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<NoticeFormQuestionItem> noticeFormQuestionItems = new ArrayList<>();

    @Builder
    public NoticeForm(
            final Long id,
            final Occupation occupation,
            final List<String> jobTypes,
            final List<NoticeFormQuestionItem> noticeFormQuestionItems
    ) {
        this.id = id;
        this.occupation = occupation;
        this.jobTypes = jobTypes;
        this.noticeFormQuestionItems = noticeFormQuestionItems;
    }

    public void addNoticeFormQuestionItem(NoticeFormQuestionItem noticeFormQuestionItem) {
        this.noticeFormQuestionItems.add(noticeFormQuestionItem);
        noticeFormQuestionItem.setNoticeForm(this);
    }
}
