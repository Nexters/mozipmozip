package org.nexters.mozipmozip.resume.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.nexters.mozipmozip.JpaBasePersistable;
import org.nexters.mozipmozip.user.domain.User;

import javax.persistence.AttributeOverride;
import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
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

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "notice_id", nullable = false)
    private Long noticeId;

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

    @ElementCollection(fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SELECT)
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
    @Fetch(value = FetchMode.SELECT)
    @JsonManagedReference
    private List<ResumeAnswerItem> resumeAnswerItems;

    @Builder
    public Resume(final Long id,
                  final User user,
                  final Long noticeId,
                  final ResumeState state,
                  final String name,
                  final String phoneNumber,
                  final String email,
                  final ResumeOccupation occupation,
                  final List<String> jobTypes,
                  final String blogURL,
                  final String githubURL,
                  final String portFolioURL,
                  final List<ResumeAnswerItem> resumeAnswerItems) {
        this.id = id;
        this.user = user;
        this.noticeId = noticeId;
        this.state = state;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.occupation = occupation;
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
