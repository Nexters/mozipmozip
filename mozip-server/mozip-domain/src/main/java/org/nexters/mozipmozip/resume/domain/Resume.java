package org.nexters.mozipmozip.resume.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;
import org.nexters.mozipmozip.member.domain.User;
import org.nexters.mozipmozip.notice.domain.Notice;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "resume",
        indexes = {
                @Index(columnList = "user_id", name = "IDX_USER_ID"),
                @Index(columnList = "notice_id", name = "IDX_NOTICE_ID")
        }
)
@AttributeOverride(name = "id", column = @Column(name = "resume_id"))
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class Resume extends JpaBasePersistable {

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(targetEntity = Notice.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "notice_id", nullable = false)
    private Notice notice;

    @Enumerated(EnumType.STRING)
    @Column(name = "state", nullable = false)
    private ResumeState state = ResumeState.DRAFT;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "email", nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "occupation", nullable = false)
    private ResumeOccupation occupation = ResumeOccupation.PROGRAMMER;

    @Enumerated(EnumType.STRING)
    @Column(name = "job", nullable = false)
    private ResumeJobType resumeJobType = ResumeJobType.STUDENT;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(
            name = "resume_job_type",
            joinColumns = @JoinColumn(name = "resume_id")
    )
    @Column(name = "job_type", nullable = false)
    private List<String> jobTypes = new ArrayList<>();

    @Column(name = "blog_url")
    private String blogURL;

    @Column(name = "github_url")
    private String githubURL;

    @Column(name = "portfolio_url")
    private String portFolioURL;

    @OneToMany(mappedBy = "resume", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<ResumeAnswerItem> resumeAnswerItems;

    @Builder
    public Resume(final Long id,
                  final User user,
                  final Notice notice,
                  final ResumeState state,
                  final String name,
                  final String phoneNumber,
                  final String email,
                  final ResumeOccupation occupation,
                  final ResumeJobType resumeJobType,
                  final List<String> jobTypes,
                  final String blogURL,
                  final String githubURL,
                  final String portFolioURL,
                  final List<ResumeAnswerItem> resumeAnswerItems) {
        this.id = id;
        this.user = user;
        this.notice = notice;
        this.state = state;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.occupation = occupation;
        this.resumeJobType = resumeJobType;
        this.jobTypes = jobTypes;
        this.blogURL = blogURL;
        this.githubURL = githubURL;
        this.portFolioURL = portFolioURL;
        this.resumeAnswerItems = resumeAnswerItems;
    }

    public void addResumeAnswerItem(final ResumeAnswerItem resumeAnswerItem) {
        this.resumeAnswerItems.add(resumeAnswerItem);
        resumeAnswerItem.setResume(this);
    }

}
