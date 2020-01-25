package org.nexters.mozipmozip.notice;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeStatus;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class NoticeCreateDto {
    private String title;
    private String displayImagePath;
    private String description;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime startDateTime;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime endDateTime;
    private NoticeStatus noticeStatus;
    private List<NoticeFormCreateDto> noticeForms;

    @Builder
    public NoticeCreateDto(
            final String title,
            final String displayImagePath,
            final String description,
            final LocalDateTime startDateTime,
            final LocalDateTime endDateTime,
            final NoticeStatus noticeStatus,
            final List<NoticeFormCreateDto> noticeForms
    ) {
        this.title = title;
        this.displayImagePath = displayImagePath;
        this.description = description;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.noticeStatus = noticeStatus;
        this.noticeForms = noticeForms;
    }

    public Notice of() {
        return Notice.builder()
                .description(this.description)
                .title(this.title)
                .startDateTime(this.startDateTime)
                .endDateTime(this.endDateTime)
                .displayImagePath(this.displayImagePath)
                .noticeStatus(this.noticeStatus)
                .noticeForms(
                        this.noticeForms.stream()
                                .map(NoticeFormCreateDto::of)
                                .collect(Collectors.toList())
                ).build();
    }
}
