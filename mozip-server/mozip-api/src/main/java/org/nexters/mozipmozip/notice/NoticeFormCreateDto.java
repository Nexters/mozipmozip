package org.nexters.mozipmozip.notice;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.NoticeForm;
import org.nexters.mozipmozip.notice.domain.Occupation;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class NoticeFormCreateDto {
    private Occupation occupation;
    private List<String> jobTypes;
    private List<NoticeFormQuestionItemCreateDto> noticeFormQuestionItems;

    public NoticeFormCreateDto(
            final Occupation occupation,
            final List<String> jobTypes,
            final List<NoticeFormQuestionItemCreateDto> noticeFormQuestionItems
    ) {
        this.occupation = occupation;
        this.jobTypes = jobTypes;
        this.noticeFormQuestionItems = noticeFormQuestionItems;
    }

    public NoticeForm of() {
        return NoticeForm.builder()
                .occupation(this.occupation)
                .jobTypes(this.jobTypes)
                .noticeFormQuestionItems(
                        this.noticeFormQuestionItems.stream()
                                .map(NoticeFormQuestionItemCreateDto::of)
                                .collect(Collectors.toList())
                ).build();
    }
}
