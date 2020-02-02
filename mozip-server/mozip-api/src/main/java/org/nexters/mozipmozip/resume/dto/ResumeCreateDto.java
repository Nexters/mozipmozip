package org.nexters.mozipmozip.resume.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeOccupation;
import org.nexters.mozipmozip.resume.domain.ResumeState;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
public class ResumeCreateDto {

    private ResumeOccupation occupation;
    private ResumeState state;
    private String blogURL;
    private String githubURL;
    private String portfolioURL;
    private List<String> jobTypes;
    private List<ResumeAnswerItemCreateDto> resumeAnswerItems = new ArrayList<>();

    public Resume of() {
        Resume resume = Resume.builder()
                .occupation(this.occupation)
                .state(this.state)
                .blogURL(this.blogURL)
                .githubURL(this.githubURL)
                .portFolioURL(this.portfolioURL)
                .jobTypes(this.jobTypes)
                .build();

        this.resumeAnswerItems.stream()
                .map(ResumeAnswerItemCreateDto::of)
                .forEach(resume::addResumeAnswerItem);

        return resume;
    }

}
