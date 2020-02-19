package org.nexters.mozipmozip.resume.application;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeRepository;
import org.nexters.mozipmozip.resume.domain.ResumeState;
import org.nexters.mozipmozip.user.domain.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@Transactional
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<Resume> getResumes() {
        return this.resumeRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Resume getResumeById(final Long resumeId) {
        return this.resumeRepository
                .findById(resumeId)
                .orElseThrow(() -> new NoSuchElementException("존재 하지 않는 지원서입니다."));
    }

    @Transactional(readOnly = true)
    public List<Resume> getResumesByNoticeId(final Long noticeId) {
        return this.resumeRepository.findAllByNoticeId(noticeId);
    }

    @Transactional(readOnly = true)
    public List<Resume> getResumesByUserId(final Long userId) {
        return this.resumeRepository.findAllByUserId(userId);
    }

    public Resume save(final Long userId, final Long noticeId, final Resume resume) {
        resume.setUser(userRepository.findById(userId).orElseThrow(() -> new NoSuchElementException("해당 유저가 없습니다")));
        resume.setNoticeId(noticeId);
        return this.resumeRepository.save(resume);
    }

    public Resume modify(final Long resumeId, ResumeState resumeState) {
        Resume resume = getResumeById(resumeId);
        resume.setState(resumeState);
        return resume;
    }

    public Resume delete(final Long resumeId) {
        Resume deleteResume = getResumeById(resumeId);
        deleteResume.delete();
        return deleteResume;
    }

}
