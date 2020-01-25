package org.nexters.mozipmozip.notice;

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

    public NoticeFormQuestionItemCreateDto(
            final String title,
            final Integer maxLength,
            final Integer questionScore,
            final String content,
            final NoticeFormQuestionItemType type
    ) {
        this.setTitle(title);
        this.setMaxLength(maxLength);
        this.setQuestionScore(questionScore);
        this.setContent(content);
        this.setType(type);
    }

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
