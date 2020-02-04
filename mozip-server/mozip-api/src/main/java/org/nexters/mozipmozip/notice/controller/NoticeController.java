package org.nexters.mozipmozip.notice.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.notice.application.NoticeService;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.dto.NoticeCreateDto;
import org.nexters.mozipmozip.notice.dto.NoticeUpdateDto;
import org.nexters.mozipmozip.notice.dto.NoticeViewDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/notices")
@RequiredArgsConstructor
public class NoticeController {
    private final NoticeService noticeService;

    @GetMapping
    public ResponseEntity getNotices() {
        return ResponseEntity.ok()
                .body(noticeService.getNotices()
                        .stream()
                        .map(NoticeViewDto::of)
                        .collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity getNotice(@PathVariable Long id) {
        // 모든 정보를 다 내려야 하기 때문에 dto를 만들지 않고 그냥 반환한다.
        return ResponseEntity.ok().body(noticeService.getById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteNotice(@PathVariable Long id) {
        noticeService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity createNotice(@RequestBody @Valid NoticeCreateDto noticeCreateDto) {
        Notice savedNotice = noticeService.create(noticeCreateDto.of());
        return ResponseEntity.created(URI.create("/api/v1/notices/" + savedNotice.getId()))
                .body(savedNotice);
    }

    @PatchMapping
    public ResponseEntity updateNotice(@RequestBody @Valid NoticeUpdateDto noticeUpdateDto) {
        Notice savedNotice = noticeService.create(noticeUpdateDto.of());
        return ResponseEntity.ok().body(savedNotice);
    }
}
