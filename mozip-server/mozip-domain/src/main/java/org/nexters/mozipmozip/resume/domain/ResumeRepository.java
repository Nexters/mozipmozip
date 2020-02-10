package org.nexters.mozipmozip.resume.domain;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResumeRepository extends JpaRepository<Resume, Long> {
    List<Resume> findAllByNoticeId(Long noticeId);
    List<Resume> findAllByUserId(Long userId);
}
