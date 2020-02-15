package org.nexters.mozipmozip.notice.application;

import org.jeasy.random.EasyRandom;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class NoticeServiceTest {
    @InjectMocks
    private NoticeService noticeService;
    @Mock
    private NoticeRepository noticeRepository;

    private Notice noticeFixture = new EasyRandom().nextObject(Notice.class);

    @Test
    @DisplayName("모집 공고 저장에 성공한다")
    void createNoticeTest() {
        given(noticeRepository.save(noticeFixture)).willReturn(noticeFixture);

        Notice savedNotice = noticeService.create(noticeFixture);

        assertThat(savedNotice.getDescription()).isEqualTo(noticeFixture.getDescription());
        assertThat(savedNotice.getTitle()).isEqualTo(noticeFixture.getTitle());
        assertThat(savedNotice.getDisplayImagePath()).isEqualTo(noticeFixture.getDisplayImagePath());
        assertThat(savedNotice.getDescription()).isEqualTo(noticeFixture.getDescription());
        assertThat(savedNotice.getNoticeStatus()).isEqualTo(noticeFixture.getNoticeStatus());
        assertThat(savedNotice.getNoticeForms()).isEqualTo(noticeFixture.getNoticeForms());
    }

    @Test
    @DisplayName("아이디로 모집 공고 가져오기 성공")
    void getById() {
        Long noticeIdFixture = 1L;
        given(noticeRepository.findById(noticeIdFixture)).willReturn(Optional.of(noticeFixture));

        Notice notice = noticeService.getById(noticeIdFixture);

        assertThat(notice.getTitle()).isEqualTo(noticeFixture.getTitle());
    }

    @Test
    @DisplayName("모집 공고 삭제 성공")
    void deleteNotice() {
        Long noticeIdFixture = 1L;
        given(noticeRepository.findById(noticeIdFixture)).willReturn(Optional.of(noticeFixture));

        Notice deletedNotice = noticeService.delete(noticeIdFixture);

        assertThat(deletedNotice.getDeleted()).isTrue();
    }

    @Test
    @DisplayName("전체 리크루팅 리스트를 받아오는데 성공한")
    void getNotices() {
        given(noticeRepository.findAll()).willReturn(Arrays.asList(noticeFixture));

        List<Notice> notices = noticeService.getNotices();

        assertThat(notices.get(0).getTitle()).isEqualTo(noticeFixture.getTitle());
    }
}
