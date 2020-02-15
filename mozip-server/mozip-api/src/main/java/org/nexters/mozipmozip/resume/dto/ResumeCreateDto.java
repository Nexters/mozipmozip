package org.nexters.mozipmozip.resume.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeJobType;
import org.nexters.mozipmozip.resume.domain.ResumeOccupation;
import org.nexters.mozipmozip.resume.domain.ResumeState;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
public class ResumeCreateDto {

    private ResumeState state;
    private Long userId;
    private Long noticeId;
    @NotBlank(message = "지원서에서 지원자의 이름은 비어있을수 없다.")
    private String name;
    @NotBlank(message = "지원서의 이름은 비어있을수 없다.")
    private String phoneNumber;
    @NotBlank(message = "지원서의 이메일은 비어있을수 없다.")
    private String email;
    private ResumeOccupation occupation;
    private ResumeJobType resumeJobType;
    private List<String> jobTypes;
    private String blogURL;
    private String githubURL;
    private String portfolioURL;
    private List<ResumeAnswerItemCreateDto> resumeAnswerItems;

    public Resume of() {
        Resume resume = Resume.builder()
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
                .resumeAnswerItems(new ArrayList<>())
                .build();

        this.resumeAnswerItems.stream()
                .map(ResumeAnswerItemCreateDto::of)
                .forEach(resume::addResumeAnswerItem);

        return resume;
    }

}
