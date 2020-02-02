package org.nexters.mozipmozip.resume.domain;

import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;
import org.nexters.mozipmozip.member.domain.User;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "resume",
        indexes = {
                @Index(columnList = "user_id", name = "IDX_USER_ID")
        }
)
@AttributeOverride(name = "id", column = @Column(name = "resume_id"))
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class Resume extends JpaBasePersistable {

    @Enumerated(EnumType.STRING)
    @Column(name = "occupation", nullable = false)
    private ResumeOccupation occupation;

    @Enumerated(EnumType.STRING)
    @Column(name = "state", nullable = false)
    private ResumeState state;

    @Column(name = "blog_url")
    private String blogURL;

    @Column(name = "github_url")
    private String githubURL;

    @Column(name = "portfolio_url")
    private String portFolioURL;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(
            name = "resume_job_type",
            joinColumns = @JoinColumn(name = "resume_id")
    )
    @Column(name = "job_type", nullable = false)
    private List<String> jobTypes;

    @OneToMany(mappedBy = "resume", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ResumeAnswerItem> resumeAnswerItems;

    @Builder
    public Resume(final Long id,
                  final ResumeOccupation occupation,
                  final ResumeState state,
                  final String blogURL,
                  final String githubURL,
                  final String portFolioURL,
                  final List<String> jobTypes,
                  final List<ResumeAnswerItem> resumeAnswerItems) {
        this.id = id;
        this.occupation = occupation;
        this.state = state;
        this.blogURL = blogURL;
        this.githubURL = githubURL;
        this.portFolioURL = portFolioURL;
        this.jobTypes = jobTypes;
        this.resumeAnswerItems = resumeAnswerItems;
    }

    public void addResumeAnswerItem(final ResumeAnswerItem resumeAnswerItem) {
        this.resumeAnswerItems.add(resumeAnswerItem);
        resumeAnswerItem.setResume(this);
    }

}
