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
import org.nexters.mozipmozip.resume.dto.ResumeCreateDto;
import org.nexters.mozipmozip.resume.dto.ResumeUpdateDto;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
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

    @BeforeEach
    public void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(resumeController)
                .alwaysDo(print())
                .build();
    }

    @Test
    @DisplayName("지원서 생성 API 테스트")
    void createResume() throws Exception {
        Resume resumeFixture = resumeCreateDto.of();

        given(resumeService.save(resumeFixture)).willReturn(resumeFixture);

        mockMvc.perform(
                post("/api/v1/resumes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(this.objectMapper.writeValueAsString(resumeCreateDto))
        ).andExpect(status().isOk());
    }

    @Test
    @DisplayName("특정 지원서 조회 API 테스트")
    void getResumeById() throws Exception {
        Resume resumeFixture = resumeCreateDto.of();
        Long idFixture = 1L;

        given(resumeService.getById(idFixture)).willReturn(resumeFixture);

        mockMvc.perform(
                get("/api/v1/resumes/" + idFixture)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(this.objectMapper.writeValueAsString(resumeUpdateDto))
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

    @Test
    @DisplayName("모든 지원서 조회 API 테스트")
    void getAllResume() throws Exception {
        List<Resume> resumeListFixture = new ArrayList<>();

        resumeListFixture.add(resumeCreateDto.of());
        resumeListFixture.add(resumeCreateDto.of());

        given(resumeService.getAll()).willReturn(resumeListFixture);

        mockMvc.perform(
                get("/api/v1/resumes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(this.objectMapper.writeValueAsString(resumeListFixture))
        ).andExpect(status().isOk());
    }

    @Test
    @DisplayName("특정 지원서 삭제 API 테스트")
    void deleteResume() throws Exception {
        Resume resumeFixture = resumeCreateDto.of();
        Long idFixture = 1L;

        given(resumeService.delete(idFixture)).willReturn(resumeFixture);

        mockMvc.perform(
                delete("/api/v1/resumes/" + idFixture)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(this.objectMapper.writeValueAsString(resumeFixture))
        ).andExpect(status().isOk());
    }

}
