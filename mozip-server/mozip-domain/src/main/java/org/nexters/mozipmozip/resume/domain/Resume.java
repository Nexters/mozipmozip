package org.nexters.mozipmozip.resume.domain;

import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;
import org.nexters.mozipmozip.member.domain.User;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "resume")
@AttributeOverride(name = "id", column = @Column(name = "resume_id"))
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class Resume extends JpaBasePersistable {

    @Enumerated(EnumType.STRING)
    @Column(name = "state", nullable = false)
    private ResumeState state;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "email", nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "occupation", nullable = false)
    private ResumeOccupation occupation;

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
                  final ResumeState state,
                  final String name,
                  final String phoneNumber,
                  final String email,
                  final ResumeOccupation occupation,
                  final String blogURL,
                  final String githubURL,
                  final String portFolioURL,
                  final List<String> jobTypes,
                  final List<ResumeAnswerItem> resumeAnswerItems) {
        this.id = id;
        this.state = state;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.occupation = occupation;
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
