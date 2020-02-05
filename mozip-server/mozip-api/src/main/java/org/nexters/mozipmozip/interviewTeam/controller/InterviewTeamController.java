package org.nexters.mozipmozip.interviewTeam.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.interviewTeam.application.InterviewTeamService;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeam;
import org.nexters.mozipmozip.interviewTeam.dto.CreateInterviewTeamDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/interviewTeams")
@RequiredArgsConstructor
public class InterviewTeamController {
    private final InterviewTeamService interviewTeamService;

    //인터뷰팀 생성
    @PostMapping
    public ResponseEntity createInterviewTeam(@RequestBody CreateInterviewTeamDto createInterviewTeamDto) {
        interviewTeamService.createInterviewTeam(createInterviewTeamDto.toEntity());
        return ResponseEntity.ok().build();
    }

    //인터뷰팀 조회
    @GetMapping("/{id}")
    public CreateInterviewTeamDto getInterviewTeam(@PathVariable Long id) {
        InterviewTeam interviewTeam = interviewTeamService.getInterviewTeam(id);
        return CreateInterviewTeamDto.builder()
                .title(interviewTeam.getTitle())
                .resumes(interviewTeam.getResumes())
                .users(interviewTeam.getUsers())
                .interviewDate(interviewTeam.getInterviewDate())
                .startInterview(interviewTeam.getStartInterview())
                .endInterview(interviewTeam.getEndInterview()).build();
    }
}
