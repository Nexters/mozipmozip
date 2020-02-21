package org.nexters.mozipmozip.resume.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.resume.application.ResumeService;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.dto.ResumeCreateDto;
import org.nexters.mozipmozip.resume.dto.ResumeStateUpdateDto;
import org.nexters.mozipmozip.resume.dto.ResumeUpdateDto;
import org.nexters.mozipmozip.resume.dto.ResumeViewDto;
import org.nexters.mozipmozip.resume.dto.ResumeViewDtoById;
import org.nexters.mozipmozip.resume.dto.ResumeViewDtoByNoticeId;
import org.nexters.mozipmozip.resume.dto.ResumeViewDtoByUserId;
import org.nexters.mozipmozip.user.domain.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1/resumes")
public class ResumeController {

    public static final String SESSION_KEY = "userInfo";
    private final ResumeService resumeService;

    @GetMapping
    public ResponseEntity getAll() {
        return ResponseEntity.ok().body(resumeService.getResumes()
                .stream()
                .map(ResumeViewDto::of)
                .collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResumeViewDtoById getById(@PathVariable Long id) {
        Resume resume = resumeService.getResumeById(id);
        return ResumeViewDtoById.builder()
                .id(resume.getId())
                .noticeId(resume.getNoticeId())
                .state(resume.getState())
                .name(resume.getName())
                .phoneNumber(resume.getPhoneNumber())
                .email(resume.getEmail())
                .occupation(resume.getOccupation())
                .resumeJobType(resume.getResumeJobType())
                .jobTypes(resume.getJobTypes())
                .blogURL(resume.getBlogURL())
                .githubURL(resume.getGithubURL())
                .portFolioURL(resume.getPortFolioURL())
                .resumeAnswerItems(resume.getResumeAnswerItems())
                .build();
    }

    @GetMapping("/notices/{id}")
    public ResponseEntity getAllByNoticeId(@PathVariable Long id) {
        return ResponseEntity.ok().body(resumeService.getResumesByNoticeId(id)
                .stream()
                .map(ResumeViewDtoByNoticeId::of)
                .collect(Collectors.toList()));
    }

    @GetMapping("/users")
    public ResponseEntity getAllByUserId(HttpSession httpSession) {
        User userInfo = (User) httpSession.getAttribute(SESSION_KEY);
        return ResponseEntity.ok().body(resumeService.getResumesByUserId(userInfo.getId())
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
    public ResponseEntity createResume(HttpSession httpSession,
                                       @RequestBody @Valid ResumeCreateDto resumeCreateDTO) {
        User userInfo = (User) httpSession.getAttribute(SESSION_KEY);
        Long noticeId = resumeCreateDTO.getNoticeId();
        Resume createdResume = resumeService.save(userInfo.getId(), noticeId, resumeCreateDTO.of());
        return ResponseEntity.ok().body(createdResume);
    }

    @PatchMapping
    public ResponseEntity modifyResume(HttpSession httpSession,
                                       @RequestBody @Valid ResumeUpdateDto resumeUpdateDto) {
        User userInfo = (User) httpSession.getAttribute(SESSION_KEY);
        Long noticeId = resumeUpdateDto.getNoticeId();
        return ResponseEntity.ok().body(resumeService.save(userInfo.getId(), noticeId, resumeUpdateDto.of()));
    }

    @PatchMapping("/state")
    public ResponseEntity modifyResumeState(HttpSession httpSession,
                                            @RequestBody @Valid ResumeStateUpdateDto resumeStateUpdateDto) {
        User userInfo = (User) httpSession.getAttribute(SESSION_KEY);
        if (!userInfo.getIsAdmin()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        
        return ResponseEntity.ok().body(resumeService.modifyState(userInfo.getId(), resumeStateUpdateDto.getState()));
    }

}
