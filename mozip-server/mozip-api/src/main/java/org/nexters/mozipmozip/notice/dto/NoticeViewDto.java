package org.nexters.mozipmozip.notice.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeStatus;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class NoticeViewDto {
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

    @Builder
    public NoticeViewDto(
            final Long id,
            final String title,
            final String displayImagePath,
            final String description,
            final LocalDate documentStartDate,
            final LocalDate documentEndDate,
            final LocalDate interviewStartDate,
            final LocalDate interviewEndDate,
            final LocalDate noticeEndDate,
            final NoticeStatus noticeStatus
    ) {
        this.id = id;
        this.title = title;
        this.displayImagePath = displayImagePath;
        this.description = description;
        this.documentStartDate = documentStartDate;
        this.documentEndDate = documentEndDate;
        this.interviewStartDate = interviewStartDate;
        this.interviewEndDate = interviewEndDate;
        this.noticeEndDate = noticeEndDate;
        this.noticeStatus = noticeStatus;
    }

    public static NoticeViewDto of(Notice notice) {
        return NoticeViewDto.builder()
                .id(notice.getId())
                .title(notice.getTitle())
                .displayImagePath(notice.getDisplayImagePath())
                .description(notice.getDescription())
                .documentStartDate(notice.getDocumentStartDate())
                .documentEndDate(notice.getDocumentEndDate())
                .interviewStartDate(notice.getInterviewStartDate())
                .interviewEndDate(notice.getInterviewEndDate())
                .noticeEndDate(notice.getNoticeEndDate())
                .noticeStatus(notice.getNoticeStatus())
                .build();
    }
}
