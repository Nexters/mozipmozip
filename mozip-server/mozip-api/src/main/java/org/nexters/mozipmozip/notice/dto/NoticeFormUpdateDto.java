package org.nexters.mozipmozip.notice.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.NoticeForm;
import org.nexters.mozipmozip.notice.domain.Occupation;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class NoticeFormUpdateDto {
    private Long id;
    private Occupation occupation;
    private List<String> jobTypes;
    private List<NoticeFormQuestionItemUpdateDto> noticeFormQuestionItems = new ArrayList();

    public NoticeForm of() {
        NoticeForm noticeForm = NoticeForm.builder()
                .id(this.id)
                .occupation(this.occupation)
                .jobTypes(this.jobTypes)
                .build();

        this.noticeFormQuestionItems.stream()
                .map(NoticeFormQuestionItemUpdateDto::of)
                .forEach((noticeFormQuestionItem) -> noticeForm.addNoticeFormQuestionItem(noticeFormQuestionItem));

        return noticeForm;
    }
}
