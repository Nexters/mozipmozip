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
import org.nexters.mozipmozip.notice.dto.NoticeUpdateDto;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
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
    private NoticeUpdateDto noticeUpdateDto = new EasyRandom().nextObject(NoticeUpdateDto.class);

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
        )
                .andExpect(status().isCreated());
    }

    @Test
    @DisplayName("모집 공고 생성 시 잘못된 파라미터가 포함된 경우 400 Bad Request를 리턴한다")
    void createNoticeInvalidParameterResponseBadRequest() throws Exception {
        noticeCreateDto.setDescription("");

        mockMvc.perform(
                post("/api/v1/notices")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                objectMapper.writeValueAsString(noticeCreateDto)
                        )
        )
                .andExpect(status().isBadRequest());
    }

    @Test
    @DisplayName("모집 공고 업데이트 api 테스트")
    void updateNotice() throws Exception {
        Notice updateNoticeFixture = noticeUpdateDto.of();
        given(noticeService.create(updateNoticeFixture)).willReturn(updateNoticeFixture);

        mockMvc.perform(
                patch("/api/v1/notices")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                objectMapper.writeValueAsString(noticeUpdateDto)
                        )
        )
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("모집 공고 업데이트시 id가 포함되지 않은 경우 400 Bad Request를 리턴한다")
    void updateNoticeMissingIdResponseBadRequest() throws Exception {
        Notice updateNoticeFixture = noticeUpdateDto.of();
        noticeUpdateDto.setId(null);

        mockMvc.perform(
                patch("/api/v1/notices")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                objectMapper.writeValueAsString(noticeUpdateDto)
                        )
        )
                .andExpect(status().isBadRequest());
    }
}
