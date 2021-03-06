package org.nexters.mozipmozip.resume.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeOccupation;
import org.nexters.mozipmozip.resume.domain.ResumeState;

import java.util.List;

@Setter
@Getter
public class ResumeViewDto {

    private Long id;
    private ResumeState state;
    private String name;
    private ResumeOccupation occupation;
    private List<String> jobTypes;

    @Builder
    public ResumeViewDto(final Long id,
                         final ResumeState state,
                         final String name,
                         final ResumeOccupation occupation,
                         final List<String> jobTypes) {
        this.id = id;
        this.state = state;
        this.name = name;
        this.occupation = occupation;
        this.jobTypes = jobTypes;
    }

    public static ResumeViewDto of(final Resume resume) {
        return ResumeViewDto.builder()
                .id(resume.getId())
                .state(resume.getState())
                .occupation(resume.getOccupation())
                .jobTypes(resume.getJobTypes())
                .build();
    }
}
