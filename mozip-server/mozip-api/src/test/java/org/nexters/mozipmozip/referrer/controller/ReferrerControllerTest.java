package org.nexters.mozipmozip.referrer.controller;

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
import org.nexters.mozipmozip.referrer.Referrer;
import org.nexters.mozipmozip.referrer.ReferrerService;
import org.nexters.mozipmozip.referrer.dto.ReferrerCreateDto;
import org.nexters.mozipmozip.resume.application.ResumeService;
import org.nexters.mozipmozip.resume.controller.ResumeController;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeAnswerItem;
import org.nexters.mozipmozip.resume.dto.ResumeCreateDto;
import org.nexters.mozipmozip.resume.dto.ResumeStateUpdateDto;
import org.nexters.mozipmozip.resume.dto.ResumeUpdateDto;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@DisplayName("Referrer api 테스트")
public class ReferrerControllerTest {

    @InjectMocks
    private ReferrerController referrerController;

    @Mock
    private ReferrerService referrerService;

    private ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());

    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(referrerController)
                .alwaysDo(print())
                .build();
    }

    @Test
    @DisplayName("Referrer 생성 api 테스트")
    void createResume() throws Exception {
        String path = "path";
        Referrer referrer = Referrer.builder().path(path).build();
        ReferrerCreateDto referrerCreateDto = ReferrerCreateDto.builder().path(path).build();
        given(referrerService.createReferrer(referrer)).willReturn(referrer);

        mockMvc.perform(
                post("/api/v1/resumes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(this.objectMapper.writeValueAsString(referrerCreateDto))
        ).andExpect(status().isCreated());
    }
}


