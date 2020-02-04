package org.nexters.mozipmozip.notice.domain;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.Where;
import org.nexters.mozipmozip.JpaBasePersistable;

import javax.persistence.*;
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

    @Column(name = "start_date_time", nullable = false)
    private LocalDateTime startDateTime = null;

    @Column(name = "end_date_time", nullable = false)
    private LocalDateTime endDateTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private NoticeStatus noticeStatus = NoticeStatus.DRAFT;

    @OneToMany(mappedBy = "notice", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<NoticeForm> noticeForms = new ArrayList<>();

    @Builder
    public Notice(
            final Long id,
            final String title,
            final String displayImagePath,
            final String description,
            final LocalDateTime startDateTime,
            final LocalDateTime endDateTime,
            final NoticeStatus noticeStatus,
            final List<NoticeForm> noticeForms
    ) {
        this.id = id;
        this.title = title;
        this.displayImagePath = displayImagePath;
        this.description = description;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.noticeStatus = noticeStatus;
        this.noticeForms = noticeForms;
    }

    public void addNoticeForm(NoticeForm noticeForm) {
        this.noticeForms.add(noticeForm);
        noticeForm.setNotice(this);
    }
}
