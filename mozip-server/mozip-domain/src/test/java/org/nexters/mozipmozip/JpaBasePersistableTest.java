package org.nexters.mozipmozip;


import org.jeasy.random.EasyRandom;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.nexters.mozipmozip.config.JpaAuditTestConfig;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.domain.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@Import(JpaAuditTestConfig.class)
class JpaBasePersistableTest {

    @Autowired
    private NoticeRepository noticeRepository;

    @Test
    @DisplayName("JPA Auditing을 통해 생성 시간, 생성자 등의 정보가 자동으로 매핑된다")
    void jpaBasePersistableTest() {
        Notice noticeFixture = new EasyRandom().nextObject(Notice.class);

        Notice savedNotice = noticeRepository.save(noticeFixture);

        assertThat(savedNotice.getCreateAt()).isNotNull();
        assertThat(savedNotice.getCreatedBy()).isNotBlank();
        assertThat(savedNotice.getLastModifiedAt()).isNotNull();
        assertThat(savedNotice.getLastModifiedBy()).isNotBlank();
    }
}
