package org.nexters.mozipmozip.notice.domain;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.Where;
import org.nexters.mozipmozip.JpaBasePersistable;
import org.nexters.mozipmozip.user.domain.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PACKAGE)
@Getter
@Setter
@Entity
@Table(name = "notice")
@AttributeOverride(name = "id", column = @Column(name = "notice_id"))
@Where(clause = "deleted=0")
public class Notice extends JpaBasePersistable {
    @Column(name = "title", length = 50, nullable = false)
    private String title;

    @Column(name = "display_image_path", nullable = false)
    private String displayImagePath;

    @Lob
    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "document_start_date", nullable = false)
    private LocalDate documentStartDate = null;

    @Column(name = "document_end_date", nullable = false)
    private LocalDate documentEndDate = null;

    @Column(name = "interview_start_date", nullable = false)
    private LocalDate interviewStartDate = null;

    @Column(name = "interview_end_date", nullable = false)
    private LocalDate interviewEndDate = null;

    @Column(name = "notice_end_date", nullable = false)
    private LocalDate noticeEndDate = null;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private NoticeStatus noticeStatus = NoticeStatus.DRAFT;

    @OneToMany(mappedBy = "notice", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<NoticeForm> noticeForms = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Notice(
            final Long id,
            final String title,
            final String displayImagePath,
            final String description,
            final LocalDate interviewStartDate,
            final LocalDate interviewEndDate,
            final LocalDate documentStartDate,
            final LocalDate documentEndDate,
            final LocalDate noticeEndDate ,
            final NoticeStatus noticeStatus,
            final List<NoticeForm> noticeForms,
            final User user
    ) {
        this.id = id;
        this.title = title;
        this.displayImagePath = displayImagePath;
        this.description = description;
        this.interviewStartDate = interviewStartDate;
        this.interviewEndDate = interviewEndDate;
        this.documentStartDate = documentStartDate;
        this.documentEndDate = documentEndDate;
        this.noticeEndDate = noticeEndDate;
        this.noticeStatus = noticeStatus;
        this.noticeForms = noticeForms;
        this.user = user;
    }

    public void addNoticeForm(NoticeForm noticeForm) {
        this.noticeForms.add(noticeForm);
        noticeForm.setNotice(this);
    }
}
