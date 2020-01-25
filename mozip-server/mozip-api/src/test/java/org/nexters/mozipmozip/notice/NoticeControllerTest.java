package org.nexters.mozipmozip.notice;

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
import org.nexters.mozipmozip.notice.application.NoticeService;
import org.nexters.mozipmozip.notice.controller.NoticeController;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.notice.dto.NoticeCreateDto;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@DisplayName("모집 공고 관련 api 테스트")
class NoticeControllerTest {

    @InjectMocks
    private NoticeController sut;

    @Mock
    private NoticeService noticeService;

    private MockMvc mockMvc;

    private ObjectMapper objectMapper = new ObjectMapper()
            .registerModule(new JavaTimeModule());

    private NoticeCreateDto noticeCreateDto = new EasyRandom().nextObject(NoticeCreateDto.class);

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(sut)
                .alwaysDo(print()).build();
    }

    @Test
    @DisplayName("모집 공고 생성 api 테스트")
    void createNotice() throws Exception {
        Notice noticeFixture = noticeCreateDto.of();
        given(noticeService.create(noticeFixture)).willReturn(noticeFixture);

        mockMvc.perform(
                post("/api/v1/notices")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                objectMapper.writeValueAsString(noticeCreateDto)
                        )
        ).andExpect(status().isCreated());
    }
}
