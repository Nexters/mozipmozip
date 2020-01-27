package org.nexters.mozipmozip.notice.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.NoticeForm;
import org.nexters.mozipmozip.notice.domain.Occupation;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class NoticeFormUpdateDto {
    private Long id;
    private Occupation occupation;
    private List<String> jobTypes;
    private List<NoticeFormQuestionItemUpdateDto> noticeFormQuestionItems;

    public NoticeForm of() {
        return NoticeForm.builder()
                .id(this.id)
                .occupation(this.occupation)
                .jobTypes(this.jobTypes)
                .noticeFormQuestionItems(
                        this.noticeFormQuestionItems.stream()
                                .map(NoticeFormQuestionItemUpdateDto::of)
                                .collect(Collectors.toList())
                ).build();
    }
}
