package org.nexters.mozipmozip.resume.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.ResumeAnswerItem;

@Setter
@Getter
@NoArgsConstructor
public class ResumeAnswerItemCreateDto {

    private String answer;

    public ResumeAnswerItem of() {
        return ResumeAnswerItem.builder()
                .answer(this.answer)
                .build();
    }
}
