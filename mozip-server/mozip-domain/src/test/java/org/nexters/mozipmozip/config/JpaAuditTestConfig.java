package org.nexters.mozipmozip.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.util.Optional;

@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@Configuration
public class JpaAuditTestConfig {
    @Bean
    public AuditorAware<String> auditorAware() {
        return () -> Optional.of("System");
    }
}
