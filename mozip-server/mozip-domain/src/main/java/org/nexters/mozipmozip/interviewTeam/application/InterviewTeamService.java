package org.nexters.mozipmozip.interviewTeam.application;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeam;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeamRepository;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeRepository;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.user.domain.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class InterviewTeamService {

    private final InterviewTeamRepository interviewTeamRepository;
    private final ResumeRepository resumeRepository;
    private final UserRepository userRepository;

    //인터뷰팀생성
    public InterviewTeam createInterviewTeam(InterviewTeam interviewTeam, List<Long> usersIds, List<Long> resumesIds) {

        List<Resume> resumes = resumeRepository.findAllById(resumesIds);
        interviewTeam.setResumes(resumes);
        List<User> users = userRepository.findAllById(usersIds);
        interviewTeam.setUsers(users);
        InterviewTeam createTeam = interviewTeamRepository.save(interviewTeam);
        return createTeam;
    }

    //인터뷰팀 조회(인터뷰팀 아이디로)
    public InterviewTeam getInterviewTeam(Long id) {

        InterviewTeam interviewTeam = interviewTeamRepository.findById(id).orElseThrow(() -> new NoSuchElementException("해당 팀이 존재하지 않습니다"));

        return interviewTeam;
    }
}
