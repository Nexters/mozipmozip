package org.nexters.mozipmozip.resume.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.ResumeAnswerItem;

@Setter
@Getter
public class ResumeAnswerItemViewDto {

    private String answer;

    @Builder
    public ResumeAnswerItemViewDto(final String answer) {
        this.answer = answer;
    }

    public static ResumeAnswerItemViewDto of(final ResumeAnswerItem resumeAnswerItem) {
        return ResumeAnswerItemViewDto.builder()
                .answer(resumeAnswerItem.getAnswer())
                .build();
    }
}
