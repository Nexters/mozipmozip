package org.nexters.mozipmozip.notice.application;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
@Transactional
public class NoticeService {
    private final NoticeRepository noticeRepository;

    public Notice create(Notice notice) {
        return noticeRepository.save(notice);
    }

    @Transactional(readOnly = true)
    public Notice getById(Long noticeId) {
        return noticeRepository.findById(noticeId)
                .orElseThrow(() -> new NoSuchElementException("해당 모집 공고가 없습니다"));
    }

    public Notice delete(Long noticeId) {
        Notice deleteTargetNotice = getById(noticeId);
        deleteTargetNotice.delete();
        return deleteTargetNotice;
    }
}
