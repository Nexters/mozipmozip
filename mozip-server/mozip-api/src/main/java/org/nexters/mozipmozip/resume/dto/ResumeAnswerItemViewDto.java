package org.nexters.mozipmozip.resume.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.ResumeAnswerItem;

@Setter
@Getter
public class ResumeAnswerItemViewDto {

    private Integer questionNo;
    private String answer;

    @Builder
    public ResumeAnswerItemViewDto(final Integer questionNo, final String answer) {
        this.questionNo = questionNo;
        this.answer = answer;
    }

    public static ResumeAnswerItemViewDto of(final ResumeAnswerItem resumeAnswerItem) {
        return ResumeAnswerItemViewDto.builder()
                .questionNo(resumeAnswerItem.getQuestionNo())
                .answer(resumeAnswerItem.getAnswer())
                .build();
    }
}
