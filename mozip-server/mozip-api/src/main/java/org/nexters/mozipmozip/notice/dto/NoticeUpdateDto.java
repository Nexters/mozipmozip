package org.nexters.mozipmozip.notice.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeStatus;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class NoticeUpdateDto {
    @NotNull(message = "업데이트 시 아이디 정보가 반드시 포함되어야 합니다")
    private Long id;
    private String title;
    private String displayImagePath;
    private String description;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime startDateTime;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime endDateTime;
    private NoticeStatus noticeStatus;
    private List<NoticeFormUpdateDto> noticeForms = new ArrayList();

    public Notice of() {
        Notice notice = Notice.builder()
                .id(this.id)
                .description(this.description)
                .title(this.title)
                .startDateTime(this.startDateTime)
                .endDateTime(this.endDateTime)
                .noticeStatus(this.noticeStatus)
                .displayImagePath(this.displayImagePath)
                .build();

        this.noticeForms.stream()
                .map(NoticeFormUpdateDto::of)
                .forEach((noticeForm) -> notice.addNoticeForm(noticeForm));

        return notice;
    }
}
