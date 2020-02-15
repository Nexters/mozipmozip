package org.nexters.mozipmozip.interviewTeam.application;

import org.jeasy.random.EasyRandom;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeam;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeamRepository;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeRepository;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.user.domain.UserRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class InterviewTeamServiceTest {

    @InjectMocks
    private InterviewTeamService interviewTeamService;

    @Mock
    private InterviewTeamRepository interviewTeamRepository;
    @Mock
    private UserRepository userRepository;
    @Mock
    private ResumeRepository resumeRepository;

    private User userFixture = new EasyRandom().nextObject(User.class);
    private User userFixture2 = new EasyRandom().nextObject(User.class);
    private Resume resumeFixture = new EasyRandom().nextObject(Resume.class);
    private Resume resumeFixture2 = new EasyRandom().nextObject(Resume.class);
    private InterviewTeam interviewFixture = new EasyRandom().nextObject(InterviewTeam.class);


    @Test
    @DisplayName("인터뷰 팀 생성 성공")
    void interviewTeamTest() throws Exception {
        //given
        InterviewTeam interviewTeam = InterviewTeam.builder()
                .title("testTeam")
                .startDate(LocalDate.of(2020, 02, 20))
                .startTime(LocalTime.of(13, 30, 30))
                .endTime(LocalTime.of(14, 30, 30))
                .build();

        List<Long> userIds = new ArrayList<>();
        List<Long> resumeIds = new ArrayList<>();
        userIds.add(userFixture.getId());
        userIds.add(userFixture2.getId());
        resumeIds.add(resumeFixture.getId());
        resumeIds.add(resumeFixture2.getId());
        List<User> users = new ArrayList<>();
        users.add(userFixture);
        users.add(userFixture2);
        List<Resume> resumes = new ArrayList<>();
        resumes.add(resumeFixture);
        resumes.add(resumeFixture2);

        given(userRepository.findAllById(userIds)).willReturn(users);
        given(resumeRepository.findAllById(resumeIds)).willReturn(resumes);
        given(interviewTeamRepository.save(interviewTeam)).willReturn(interviewTeam);

        InterviewTeam createInterviewTeam = interviewTeamService.createInterviewTeam(interviewTeam, userIds, resumeIds);

        assertThat(createInterviewTeam.getTitle()).isEqualTo(interviewTeam.getTitle());
    }

    @Test
    @DisplayName("인터뷰팀 조회 성공")
    void getInterviewTeamTest() throws Exception {
        given(interviewTeamRepository.findById(interviewFixture.getId())).willReturn(java.util.Optional.ofNullable(interviewFixture));

        InterviewTeam getInterviewTeam = interviewTeamService.getInterviewTeam(interviewFixture.getId());

        assertThat(getInterviewTeam.getTitle()).isEqualTo(interviewFixture.getTitle());
        assertThat(getInterviewTeam.getStartDate()).isEqualTo(interviewFixture.getStartDate());
    }

}
