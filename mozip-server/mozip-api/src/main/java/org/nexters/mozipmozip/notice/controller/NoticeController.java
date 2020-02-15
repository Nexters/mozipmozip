package org.nexters.mozipmozip.notice.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.notice.application.NoticeService;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.dto.NoticeCreateDto;
import org.nexters.mozipmozip.notice.dto.NoticeUpdateDto;
import org.nexters.mozipmozip.notice.dto.NoticeViewDto;
import org.nexters.mozipmozip.user.domain.User;
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
//세션으로 현재 로그인되어있는 유저 아이디값 가져와서 서비스로 넘겨준다 -> 서비스에서 noticea 생성할 때 userrepository를 이용해서 찾아서 넣어주기
        User userInfo = (User) httpSession.getAttribute(SESSION_KEY);
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
