package org.nexters.mozipmozip.interviewTeam.application;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeam;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeamRepository;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class InterviewTeamService {

    private final InterviewTeamRepository interviewTeamRepository;

    //인터뷰팀생성
    public void createInterviewTeam(InterviewTeam interviewTeam) {

        interviewTeamRepository.save(interviewTeam);
    }

    //인터뷰팀 조회(인터뷰팀 아이디로)
    public InterviewTeam getInterviewTeam(Long id) {

        InterviewTeam interviewTeam = interviewTeamRepository.findById(id).orElseThrow(() -> new NoSuchElementException("해당 팀이 존재하지 않습니다"));
        return interviewTeam;
    }
}
