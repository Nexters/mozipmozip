package org.nexters.mozipmozip.interviewTeam;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.jeasy.random.EasyRandom;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.interviewTeam.application.InterviewTeamService;
import org.nexters.mozipmozip.interviewTeam.controller.InterviewTeamController;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeam;
import org.nexters.mozipmozip.interviewTeam.dto.CreateInterviewTeamDto;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@DisplayName("인터뷰팀 컨트롤러 테스트")
class InterviewTeamControllerTest {

    @InjectMocks
    private InterviewTeamController interviewTeamController;

    @Mock
    private InterviewTeamService interviewTeamService;

    private MockMvc mockMvc;

    private ObjectMapper objectMapper = new ObjectMapper()
            .registerModule(new JavaTimeModule());

    private InterviewTeam interviewTeam = new EasyRandom().nextObject(InterviewTeam.class);
    private List<Long> userId = new ArrayList<>();
    private List<Long> resumeId = new ArrayList<>();

    @BeforeEach

    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(interviewTeamController)
                .alwaysDo(print()).build();
    }

    @Test
    @DisplayName("인터뷰팀 생성")
    void interviewTeam() throws Exception {
        userId.add(1L);
        userId.add(2L);
        resumeId.add(0L);
        resumeId.add(1L);
        CreateInterviewTeamDto createInterviewTeamDto = CreateInterviewTeamDto.builder()
                .title("A")
                .usersIds(userId)
                .resumesIds(resumeId)
                .startDate(LocalDate.now())
                .startTime(LocalTime.now())
                .endTime(LocalTime.now()).build();

        InterviewTeam createInterviewTeam = CreateInterviewTeamDto.toEntity(createInterviewTeamDto);

        given(interviewTeamService.createInterviewTeam(createInterviewTeam, createInterviewTeamDto.getUsersIds(), createInterviewTeamDto.getResumesIds())).willReturn(createInterviewTeam);

        mockMvc.perform(
                post("/api/v1/interview")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(createInterviewTeamDto))
        )
                .andExpect(status().isCreated());
    }

    @Test
    @DisplayName("인터뷰팀 조회")
    void getInterviewTeam() throws Exception {
        userId.add(1L);
        userId.add(2L);
        resumeId.add(0L);
        resumeId.add(1L);
        CreateInterviewTeamDto createInterviewTeamDto = CreateInterviewTeamDto.builder()
                .title("A")
                .usersIds(userId)
                .resumesIds(resumeId)
                .startDate(LocalDate.now())
                .startTime(LocalTime.now())
                .endTime(LocalTime.now()).build();

        InterviewTeam createInterviewTeam = CreateInterviewTeamDto.toEntity(createInterviewTeamDto);
        given(interviewTeamService.getInterviewTeam(interviewTeam.getId())).willReturn(interviewTeam);

        mockMvc.perform(
                get("/api/v1/interview/{id}", interviewTeam.getId())
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value(interviewTeam.getTitle()));
    }
}
