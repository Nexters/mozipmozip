package org.nexters.mozipmozip.resume.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.ResumeAnswerItem;

@Setter
@Getter
@NoArgsConstructor
public class ResumeAnswerItemUpdateDto {

    private Long id;
    private Integer questionNo;
    private String answer;

    public ResumeAnswerItem of() {
        return ResumeAnswerItem.builder()
                .id(this.id)
                .questionNo(this.questionNo)
                .answer(this.answer)
                .build();
    }

}
