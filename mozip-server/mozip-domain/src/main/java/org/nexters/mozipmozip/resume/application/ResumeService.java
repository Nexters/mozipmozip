package org.nexters.mozipmozip.resume.application;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@Transactional
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;

    @Transactional(readOnly = true)
    public List<Resume> getAll() {
        return this.resumeRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Resume getById(final Long resumeId) {
        return this.resumeRepository
                .findById(resumeId)
                .orElseThrow(() -> new NoSuchElementException("존재 하지 않는 지원서입니다."));
    }

    public Resume save(final Resume resume) {
        return this.resumeRepository.save(resume);
    }

    public Resume delete(final Long resumeId) {
        Resume deleteResume = getById(resumeId);
        deleteResume.delete();
        return deleteResume;
    }

}
