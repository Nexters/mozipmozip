package org.nexters.mozipmozip.resume.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.resume.application.ResumeService;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.dto.ResumeCreateDto;
import org.nexters.mozipmozip.resume.dto.ResumeUpdateDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1/resumes")
public class ResumeController {

    private final ResumeService resumeService;

    @PostMapping
    public ResponseEntity createResume(@RequestBody @Valid ResumeCreateDto resumeCreateDTO) {
        Resume createdResume = resumeService.save(resumeCreateDTO.of());
        return ResponseEntity.ok().body(createdResume);
    }

    @GetMapping
    public ResponseEntity getAllResume() {
        List<Resume> resumeList = resumeService.getAll();
        return ResponseEntity.ok().body(resumeList);
    }

    @GetMapping("/{id}")
    public ResponseEntity getResumeById(@PathVariable @Valid Long id) {
        Resume resume = resumeService.getById(id);
        return ResponseEntity.ok().body(resume);
    }

    @PatchMapping
    public ResponseEntity modifyResume(@RequestBody @Valid ResumeUpdateDto resumeUpdateDto) {
        Resume modifiedResume = resumeService.save(resumeUpdateDto.of());
        return ResponseEntity.ok().body(modifiedResume);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteResume(@PathVariable @Valid Long id) {
        Resume deletedResume = resumeService.delete(id);
        return ResponseEntity.ok().body(deletedResume);
    }
}
