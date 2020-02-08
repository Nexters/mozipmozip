package org.nexters.mozipmozip.notice.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeStatus;

import java.time.LocalDateTime;

@Getter
@Setter
public class NoticeViewDto {
    private Long id;
    private String title;
    private String displayImagePath;
    private String description;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime startDateTime;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime endDateTime;
    private NoticeStatus noticeStatus;

    @Builder
    public NoticeViewDto(
            final Long id,
            final String title,
            final String displayImagePath,
            final String description,
            final LocalDateTime startDateTime,
            final LocalDateTime endDateTime,
            final NoticeStatus noticeStatus
    ) {
        this.id = id;
        this.title = title;
        this.displayImagePath = displayImagePath;
        this.description = description;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.noticeStatus = noticeStatus;
    }

    public static NoticeViewDto of(Notice notice) {
       return NoticeViewDto.builder()
               .id(notice.getId())
               .title(notice.getTitle())
               .displayImagePath(notice.getDisplayImagePath())
               .description(notice.getDescription())
               .startDateTime(notice.getStartDateTime())
               .endDateTime(notice.getEndDateTime())
               .noticeStatus(notice.getNoticeStatus())
               .build();
    }
}
