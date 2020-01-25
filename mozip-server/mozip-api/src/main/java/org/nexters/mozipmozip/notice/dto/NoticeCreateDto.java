package org.nexters.mozipmozip.notice.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeStatus;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime startDateTime;
    @NotNull(message = "공고 종료 날짜는 반드시 입력되어야 합니다")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime endDateTime;
    private NoticeStatus noticeStatus;
    private List<NoticeFormCreateDto> noticeForms;

    public Notice of() {
        return Notice.builder()
                .description(this.description)
                .title(this.title)
                .startDateTime(this.startDateTime)
                .endDateTime(this.endDateTime)
                .noticeStatus(this.noticeStatus)
                .displayImagePath(this.displayImagePath)
                .noticeForms(
                        this.noticeForms.stream()
                                .map(NoticeFormCreateDto::of)
                                .collect(Collectors.toList())
                ).build();
    }
}
