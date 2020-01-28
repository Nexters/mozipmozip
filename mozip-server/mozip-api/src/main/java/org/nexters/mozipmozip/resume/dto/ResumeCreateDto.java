package org.nexters.mozipmozip.resume.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.member.domain.User;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeAnswerItem;
import org.nexters.mozipmozip.resume.domain.ResumeOccupation;
import org.nexters.mozipmozip.resume.domain.ResumeState;

import java.util.List;

@Setter
@Getter
@RequiredArgsConstructor
public class ResumeVO {

    private User user;
    private ResumeOccupation resumeOccupation;
    private ResumeState resumeState;
    private List<String> jobTypes;
    private String blogURL;
    private String githubURL;
    private String portfolioURL;
    private List<ResumeAnswerItem> resumeAnswerItems;

    public Resume toEntity() {
        return Resume.builder()
                .user(this.user)
                .occupation(this.resumeOccupation)
                .state(this.resumeState)
                .jobTypes(this.jobTypes)
                .blogURL(this.blogURL)
                .githubURL(this.githubURL)
                .portFolioURL(this.portfolioURL)
                .resumeAnswerItems(this.resumeAnswerItems)
                .build();
    }

}
