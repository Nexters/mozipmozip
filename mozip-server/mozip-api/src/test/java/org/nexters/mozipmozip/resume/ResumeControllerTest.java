package org.nexters.mozipmozip.resume;

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
import org.nexters.mozipmozip.resume.application.ResumeService;
import org.nexters.mozipmozip.resume.controller.ResumeController;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeAnswerItem;
import org.nexters.mozipmozip.resume.dto.ResumeCreateDto;
import org.nexters.mozipmozip.resume.dto.ResumeUpdateDto;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@DisplayName("지원서 API 테스트")
public class ResumeControllerTest {

    @InjectMocks
    private ResumeController resumeController;

    @Mock
    private ResumeService resumeService;

    private ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());

    private MockMvc mockMvc;
    private ResumeCreateDto resumeCreateDto = new EasyRandom().nextObject(ResumeCreateDto.class);
    private ResumeUpdateDto resumeUpdateDto = new EasyRandom().nextObject(ResumeUpdateDto.class);
    private Resume resumeFixture = new EasyRandom().nextObject(Resume.class);

    @BeforeEach
    public void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(resumeController)
                .alwaysDo(print())
                .build();
    }

    @Test
    @DisplayName("지원서 생성 API 테스트")
    void createResume() throws Exception {
        Resume resumeCreateDtoFixture = resumeCreateDto.of();

        given(resumeService.save(resumeCreateDtoFixture)).willReturn(this.resumeFixture);

        mockMvc.perform(post("/api/v1/resumes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(this.objectMapper.writeValueAsString(resumeCreateDto)))
                .andExpect(status().isCreated());
    }

    @Test
    @DisplayName("지원서 생성시 잘못된 파라미터가 들어오면 Bad Request로 리턴한다.")
    void createResumeInvalidParameter() throws Exception {
        this.resumeCreateDto.setEmail("");

        mockMvc.perform(post("/api/v1/resumes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(this.objectMapper.writeValueAsString(resumeCreateDto)))
                .andExpect(status().isBadRequest());
    }

    @Test
    @DisplayName("모든 지원서 조회 API 테스트")
    void getAll() throws Exception {
        given(resumeService.getResumes()).willReturn(Collections.singletonList(this.resumeFixture));

        mockMvc.perform(get("/api/v1/resumes")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].state").exists())
                .andExpect(jsonPath("$[0].occupation").exists())
                .andExpect(jsonPath("$[0].resumeJobType").exists());
    }

    @Test
    @DisplayName("resumeId로 특정 지원서 조회 API 테스트")
    void getById() throws Exception {
        Long resumeIdFixture = 1L;
        ResumeAnswerItem resumeAnswerItemFixture = new EasyRandom().nextObject(ResumeAnswerItem.class);
        resumeAnswerItemFixture.setResume(this.resumeFixture);
        this.resumeFixture.setResumeAnswerItems(Collections.singletonList(resumeAnswerItemFixture));

        given(resumeService.getResumeById(resumeIdFixture)).willReturn(this.resumeFixture);

        mockMvc.perform(get("/api/v1/resumes/" + resumeIdFixture)
                    .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value(this.resumeFixture.getName()))
                .andExpect(jsonPath("$.email").value(this.resumeFixture.getEmail()))
                .andExpect(jsonPath("$.phoneNumber").value(this.resumeFixture.getPhoneNumber()))
                .andExpect(jsonPath("$.blogURL").value(this.resumeFixture.getBlogURL()))
                .andExpect(jsonPath("$.githubURL").value(this.resumeFixture.getGithubURL()))
                .andExpect(jsonPath("$.portFolioURL").value(this.resumeFixture.getPortFolioURL()))
                .andExpect(jsonPath("$.state").exists())
                .andExpect(jsonPath("$.occupation").exists())
                .andExpect(jsonPath("$.resumeJobType").exists())
                .andExpect(jsonPath("$.resumeAnswerItems").exists());
    }

    @Test
    @DisplayName("noticeId로 모든 지원서 조회 API 테스트")
    void getAllByNoticeId() throws Exception {
        Long noticeFixtureId = 1L;

        given(resumeService.getResumesByNoticeId(noticeFixtureId)).willReturn(Collections.singletonList(this.resumeFixture));

        mockMvc.perform(
                get("/api/v1/resumes/notices/{noticeId}", noticeFixtureId)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk());
    }

    @Test
    @DisplayName("userId로 모든 지원서 조회 API 테스트")
    void getAllByUserId() throws Exception {
        Long userFixtureId = 1L;

        given(resumeService.getResumesByUserId(userFixtureId)).willReturn(Collections.singletonList(this.resumeFixture));

        mockMvc.perform(
                get("/api/v1/resumes/users/{userId}", userFixtureId)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk());
    }

    @Test
    @DisplayName("특정 지원서 수정 API 테스트")
    void modifyResume() throws Exception {
        Resume resumeFixture = resumeUpdateDto.of();

        given(resumeService.save(resumeFixture)).willReturn(resumeFixture);

        mockMvc.perform(
                patch("/api/v1/resumes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(this.objectMapper.writeValueAsString(resumeUpdateDto))
        ).andExpect(status().isOk());
    }
}
