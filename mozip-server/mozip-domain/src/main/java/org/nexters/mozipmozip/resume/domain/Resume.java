package org.nexters.mozipmozip.resume.domain;

import lombok.*;
import org.nexters.mozipmozip.JpaBasePersistable;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder
@Setter
@Getter
@Entity
@Table(name = "resume")
@AttributeOverride(name = "id", column = @Column(name = "resume_id"))
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class Resume extends JpaBasePersistable {

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
