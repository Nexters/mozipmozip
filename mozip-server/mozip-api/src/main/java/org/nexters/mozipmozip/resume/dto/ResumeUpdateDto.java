package org.nexters.mozipmozip.resume.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeOccupation;
import org.nexters.mozipmozip.resume.domain.ResumeState;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
public class ResumeUpdateDto {

    private Long id;
    private ResumeState state;
    private String name;
    private String phoneNumber;
    private String email;
    private ResumeOccupation occupation;
    private String blogURL;
    private String githubURL;
    private String portfolioURL;
    private List<String> jobTypes;
    private List<ResumeAnswerItemUpdateDto> resumeAnswerItems = new ArrayList<>();

    public Resume of() {
        Resume resume = Resume.builder()
                .id(this.id)
                .name(this.name)
                .phoneNumber(this.phoneNumber)
                .email(this.email)
                .state(this.state)
                .occupation(this.occupation)
                .blogURL(this.blogURL)
                .githubURL(this.githubURL)
                .portFolioURL(this.portfolioURL)
                .jobTypes(this.jobTypes)
                .build();

        this.resumeAnswerItems.stream()
                .map(ResumeAnswerItemUpdateDto::of)
                .forEach(resume::addResumeAnswerItem);

        return resume;
    }
}
