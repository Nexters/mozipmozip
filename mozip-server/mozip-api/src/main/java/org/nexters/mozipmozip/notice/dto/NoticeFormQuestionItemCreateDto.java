package org.nexters.mozipmozip.notice.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.NoticeFormQuestionItem;
import org.nexters.mozipmozip.notice.domain.NoticeFormQuestionItemType;

@Getter
@Setter
@NoArgsConstructor
public class NoticeFormQuestionItemCreateDto {
    private String title;
    private Integer maxLength = 100;
    private Integer questionScore = 10;
    private String content;
    private NoticeFormQuestionItemType type;

    public NoticeFormQuestionItem of() {
        return NoticeFormQuestionItem.builder()
                .title(this.title)
                .maxLength(this.maxLength)
                .questionScore(this.questionScore)
                .content(this.content)
                .type(this.type)
                .build();
    }
}
