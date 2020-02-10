package org.nexters.mozipmozip.resume.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeJobType;
import org.nexters.mozipmozip.resume.domain.ResumeOccupation;
import org.nexters.mozipmozip.resume.domain.ResumeState;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
public class ResumeUpdateDto {

    @NotNull(message = "업데이트시 반드시 아이디는 있어야 한다.")
    private Long id;
    private ResumeState state;
    private String name;
    private String phoneNumber;
    private String email;
    private ResumeOccupation occupation;
    private ResumeJobType resumeJobType;
    private List<String> jobTypes;
    private String blogURL;
    private String githubURL;
    private String portfolioURL;
    private List<ResumeAnswerItemUpdateDto> resumeAnswerItems = new ArrayList<>();

    public Resume of() {
        Resume resume = Resume.builder()
                .id(this.id)
                .state(this.state)
                .name(this.name)
                .phoneNumber(this.phoneNumber)
                .email(this.email)
                .occupation(this.occupation)
                .resumeJobType(this.resumeJobType)
                .jobTypes(this.jobTypes)
                .blogURL(this.blogURL)
                .githubURL(this.githubURL)
                .portFolioURL(this.portfolioURL)
                .build();

        this.resumeAnswerItems.stream()
                .map(ResumeAnswerItemUpdateDto::of)
                .forEach(resume::addResumeAnswerItem);

        return resume;
    }
}
