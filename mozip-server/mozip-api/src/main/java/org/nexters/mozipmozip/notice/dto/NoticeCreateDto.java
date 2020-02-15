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
    @NotNull(message = "공고 시작 날짜는 반드시 입력되어야 합니다")
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime startDateTime;
    @NotNull(message = "공고 종료 날짜는 반드시 입력되어야 합니다")
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime endDateTime;
    private NoticeStatus noticeStatus;
    private List<NoticeFormCreateDto> noticeForms = new ArrayList();

    public Notice of() {
        Notice notice = Notice.builder()
                .description(this.description)
                .title(this.title)
                .noticeForms(new ArrayList<>())
                .startDateTime(this.startDateTime)
                .endDateTime(this.endDateTime)
                .noticeStatus(this.noticeStatus)
                .displayImagePath(this.displayImagePath)
                .build();

        this.noticeForms.stream()
                .map(NoticeFormCreateDto::of)
                .forEach((noticeForm) -> notice.addNoticeForm(noticeForm));

        return notice;
    }
}
