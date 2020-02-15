package org.nexters.mozipmozip.interviewTeam.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.interviewTeam.application.InterviewTeamService;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeam;
import org.nexters.mozipmozip.interviewTeam.dto.CreateInterviewTeamDto;
import org.nexters.mozipmozip.interviewTeam.dto.GetInterviewTeamDto;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.user.domain.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/interview")
@RequiredArgsConstructor
public class InterviewTeamController {
    private final InterviewTeamService interviewTeamService;

    //인터뷰팀 생성
    @PostMapping
    public ResponseEntity<InterviewTeam> interviewTeam(@RequestBody CreateInterviewTeamDto createInterviewTeamDto) {
        InterviewTeam team = interviewTeamService.createInterviewTeam(CreateInterviewTeamDto.toEntity(createInterviewTeamDto), createInterviewTeamDto.getUsersIds(), createInterviewTeamDto.getResumesIds());
        return ResponseEntity.created(URI.create("/api/v1/interview/" + team.getId()))
                .body(team);
    }

    //인터뷰팀 조회
    @GetMapping("/{id}")
    public GetInterviewTeamDto getInterviewTeam(@PathVariable Long id) {
        InterviewTeam interviewTeam = interviewTeamService.getInterviewTeam(id);
        List<User> users = new ArrayList<>();
        List<Resume> resumes = new ArrayList<>();
        for (int i = 0; i < interviewTeam.getUsers().size(); i++) {
            users.set(i, interviewTeam.getUsers().get(i));
        }
        for (int i = 0; i < interviewTeam.getResumes().size(); i++) {
            resumes.set(i, interviewTeam.getResumes().get(i));
        }
        return GetInterviewTeamDto.builder()
                .title(interviewTeam.getTitle())
                .users(users)
                .resumes(resumes)
                .startDate(interviewTeam.getStartDate())
                .startTime(interviewTeam.getStartTime())
                .endTime(interviewTeam.getEndTime()).build();
    }
}
