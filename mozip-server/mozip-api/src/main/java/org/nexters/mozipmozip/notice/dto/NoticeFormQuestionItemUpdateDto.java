package org.nexters.mozipmozip.notice.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.NoticeFormQuestionItem;
import org.nexters.mozipmozip.notice.domain.NoticeFormQuestionItemType;

@Getter
@Setter
@NoArgsConstructor
public class NoticeFormQuestionItemUpdateDto {
    private Long id;
    private String title;
    private Integer maxLength;
    private Integer questionScore;
    private String content;
    private NoticeFormQuestionItemType type;

    public NoticeFormQuestionItem of() {
        return NoticeFormQuestionItem.builder()
                .id(this.id)
                .title(this.title)
                .maxLength(this.maxLength)
                .questionScore(this.questionScore)
                .content(this.content)
                .type(this.type)
                .build();
    }
}
