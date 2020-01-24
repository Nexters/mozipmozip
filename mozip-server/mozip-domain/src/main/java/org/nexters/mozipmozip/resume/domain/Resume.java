package org.nexters.mozipmozip.resume.domain;

import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;
import org.nexters.mozipmozip.member.domain.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder
@Setter
@Getter
@Entity
@Table(name = "resume", indexes = { @Index(columnList = "user_id", name = "IDX_USER_ID")})
@AttributeOverride(name = "id", column = @Column(name = "resume_id"))
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class Resume extends JpaBasePersistable {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "occupation", nullable = false)
    private ResumeOccupation occupation;

    @Enumerated(EnumType.STRING)
    @Column(name = "state", nullable = false)
    private ResumeState state = ResumeState.DRAFT;

    @Column(name = "job_type")
    private List<String> jobTypes = new ArrayList<>();

    @Column(name = "blog_url")
    private String blogURL;

    @Column(name = "github_url")
    private String githubURL;

    @Column(name = "portfolio_url")
    private String portFolioURL;

    @OneToMany(mappedBy = "resume", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ResumeAnswerItem> resumeAnswerItems = new ArrayList<>();

    public void addResumeAnswerItem(final ResumeAnswerItem resumeAnswerItem) {
        this.resumeAnswerItems.add(resumeAnswerItem);
    }

}
