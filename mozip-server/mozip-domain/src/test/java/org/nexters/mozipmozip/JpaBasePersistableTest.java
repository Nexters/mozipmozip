package org.nexters.mozipmozip;


import org.jeasy.random.EasyRandom;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.nexters.mozipmozip.config.JpaAuditTestConfig;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.user.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@Import(JpaAuditTestConfig.class)
class JpaBasePersistableTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    @DisplayName("JPA Auditing을 통해 생성 시간, 생성자 등의 정보가 자동으로 매핑된다")
    void jpaBasePersistableTest() {
        User userFixture = new EasyRandom().nextObject(User.class);

        User savedUser = userRepository.save(userFixture);

        assertThat(savedUser.getCreateAt()).isNotNull();
        assertThat(savedUser.getCreatedBy()).isNotBlank();
        assertThat(savedUser.getLastModifiedAt()).isNotNull();
        assertThat(savedUser.getLastModifiedBy()).isNotBlank();
    }
}
