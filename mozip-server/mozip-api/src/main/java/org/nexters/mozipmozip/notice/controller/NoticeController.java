package org.nexters.mozipmozip.notice.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.notice.application.NoticeService;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.dto.NoticeCreateDto;
import org.nexters.mozipmozip.notice.dto.NoticeUpdateDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/api/v1/notices")
@RequiredArgsConstructor
public class NoticeController {
    private final NoticeService noticeService;

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
