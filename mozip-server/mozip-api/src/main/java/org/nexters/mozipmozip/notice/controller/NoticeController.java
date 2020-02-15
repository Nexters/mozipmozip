package org.nexters.mozipmozip.notice.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.notice.application.NoticeService;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.dto.NoticeCreateDto;
import org.nexters.mozipmozip.notice.dto.NoticeUpdateDto;
import org.nexters.mozipmozip.notice.dto.NoticeViewDto;
import org.nexters.mozipmozip.user.domain.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.net.URI;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/notices")
@RequiredArgsConstructor
public class NoticeController {
    public static final String SESSION_KEY = "userInfo";
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
    public ResponseEntity createNotice(@RequestBody @Valid NoticeCreateDto noticeCreateDto, HttpSession httpSession) {
        User userInfo = (User) httpSession.getAttribute(SESSION_KEY);

        if (!userInfo.getIsAdmin()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        Notice savedNotice = noticeService.create(noticeCreateDto.of(), userInfo.getId());
        return ResponseEntity.created(URI.create("/api/v1/notices/" + savedNotice.getId()))
                .body(savedNotice);
    }

    @PatchMapping
    public ResponseEntity updateNotice(@RequestBody @Valid NoticeUpdateDto noticeUpdateDto, HttpSession httpSession) {
        User userInfo = (User) httpSession.getAttribute(SESSION_KEY);
        Notice savedNotice = noticeService.create(noticeUpdateDto.of(), userInfo.getId());
        return ResponseEntity.ok().body(savedNotice);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity getNoticeByUserId(@PathVariable Long id) {
        Notice getNotice = noticeService.getNoticeByUserId(id).orElse(null);
        if (getNotice == null) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.ok().body(NoticeViewDto.of(getNotice));
        }
    }
}
