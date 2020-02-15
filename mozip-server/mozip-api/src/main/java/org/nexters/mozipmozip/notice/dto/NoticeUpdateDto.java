package org.nexters.mozipmozip.notice.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeStatus;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class NoticeUpdateDto {
    @NotNull(message = "업데이트 시 아이디 정보가 반드시 포함되어야 합니다")
    private Long id;
    private String title;
    private String displayImagePath;
    private String description;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate documentStartDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate documentEndDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate interviewStartDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate interviewEndDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate noticeEndDate;
    private NoticeStatus noticeStatus;
    private List<NoticeFormUpdateDto> noticeForms = new ArrayList();

    public Notice of() {
        Notice notice = Notice.builder()
                .id(this.id)
                .description(this.description)
                .title(this.title)
                .documentStartDate(this.documentStartDate)
                .documentEndDate(this.documentEndDate)
                .interviewStartDate(this.interviewStartDate)
                .interviewEndDate(this.interviewEndDate)
                .noticeEndDate(this.noticeEndDate)
                .noticeStatus(this.noticeStatus)
                .displayImagePath(this.displayImagePath)
                .build();

        this.noticeForms.stream()
                .map(NoticeFormUpdateDto::of)
                .forEach((noticeForm) -> notice.addNoticeForm(noticeForm));

        return notice;
    }
}
