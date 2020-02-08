package org.nexters.mozipmozip.resume.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.resume.application.ResumeService;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.dto.ResumeCreateDto;
import org.nexters.mozipmozip.resume.dto.ResumeUpdateDto;
import org.nexters.mozipmozip.resume.dto.ResumeViewDto;
import org.nexters.mozipmozip.resume.dto.ResumeViewDtoByNoticeId;
import org.nexters.mozipmozip.resume.dto.ResumeViewDtoByUserId;
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
import java.net.URI;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1/resumes")
public class ResumeController {

    private final ResumeService resumeService;

    @GetMapping
    public ResponseEntity getAll() {
        return ResponseEntity.ok().body(resumeService.getResumes()
                .stream()
                .map(ResumeViewDto::of)
                .collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable Long id) {
        return ResponseEntity.ok().body(resumeService.getResumeById(id));
    }

    @GetMapping("/notices/{id}")
    public ResponseEntity getAllByNoticeId(@PathVariable Long id) {
        return ResponseEntity.ok().body(resumeService.getResumesByNoticeId(id)
                .stream()
                .map(ResumeViewDtoByNoticeId::of)
                .collect(Collectors.toList()));
    }

    @GetMapping("/users/{id}")
    public ResponseEntity getAllByUserId(@PathVariable Long id) {
        return ResponseEntity.ok().body(resumeService.getResumesByUserId(id)
                .stream()
                .map(ResumeViewDtoByUserId::of)
                .collect(Collectors.toList()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteResume(@PathVariable Long id) {
        resumeService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity createResume(@RequestBody @Valid ResumeCreateDto resumeCreateDTO) {
        Resume createdResume = resumeService.save(resumeCreateDTO.of());
        return ResponseEntity.created(URI.create("/api/v1/resumes/" + createdResume.getId()))
                .body(createdResume);
    }

    @PatchMapping
    public ResponseEntity modifyResume(@RequestBody @Valid ResumeUpdateDto resumeUpdateDto) {
        return ResponseEntity.ok().body(resumeService.save(resumeUpdateDto.of()));
    }

}
