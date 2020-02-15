package org.nexters.mozipmozip.notice.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeStatus;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class NoticeCreateDto {
    @NotBlank(message = "제목은 비어있을 수 없습니다")
    private String title;
    private String displayImagePath;
    @NotBlank(message = "설명은 비어있을 수 없습니다")
    private String description;
    @NotNull(message = "서류 모집 기간은 반드시 입력되어야 합니다")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate documentStartDate;
    @NotNull(message = "서류 모집 종료 기간은 반드시 입력되어야 합니다")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate documentEndDate;
    @NotNull(message = "면접 시작 기간은 반드시 입력되어야 합니다")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate interviewStartDate;
    @NotNull(message = "면접 종료 기간은 반드시 입력되어야 합니다")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate interviewEndDate;
    @NotNull(message = "공고 종료 날짜는 반드시 입력되어야 합니다")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate noticeEndDate;
    private NoticeStatus noticeStatus;
    private List<NoticeFormCreateDto> noticeForms = new ArrayList();

    public Notice of() {
        Notice notice = Notice.builder()
                .description(this.description)
                .title(this.title)
                .noticeForms(new ArrayList<>())
                .documentStartDate(this.documentStartDate)
                .documentEndDate(this.documentEndDate)
                .interviewStartDate(this.interviewStartDate)
                .interviewEndDate(this.interviewEndDate)
                .noticeEndDate(this.noticeEndDate)
                .noticeStatus(this.noticeStatus)
                .displayImagePath(this.displayImagePath)
                .build();

        this.noticeForms.stream()
                .map(NoticeFormCreateDto::of)
                .forEach((noticeForm) -> notice.addNoticeForm(noticeForm));

        return notice;
    }
}
