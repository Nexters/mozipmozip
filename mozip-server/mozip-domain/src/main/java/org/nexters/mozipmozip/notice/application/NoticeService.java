package org.nexters.mozipmozip.notice.application;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeRepository;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.user.domain.UserRepositoy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class NoticeService {
    private final NoticeRepository noticeRepository;
    private final UserRepositoy userRepositoy;

    public Notice create(Notice notice, Long id) {
        User noticeUser = userRepositoy.findById(id).orElseThrow(() -> new NoSuchElementException("해당 유저가 없습니다"));
        notice.setUser(noticeUser);
        return noticeRepository.save(notice);
    }

    @Transactional(readOnly = true)
    public Notice getById(Long noticeId) {
        return noticeRepository.findById(noticeId)
                .orElseThrow(() -> new NoSuchElementException("해당 모집 공고가 없습니다"));
    }

    @Transactional(readOnly = true)
    public List<Notice> getNotices() {
        return noticeRepository.findAll();
    }

    public Notice delete(Long noticeId) {
        Notice deleteTargetNotice = getById(noticeId);
        deleteTargetNotice.delete();
        return deleteTargetNotice;
    }

    public Optional<Notice> getNoticeByUserId(Long id) {
        return noticeRepository.findByUserId(id);
    }
}
