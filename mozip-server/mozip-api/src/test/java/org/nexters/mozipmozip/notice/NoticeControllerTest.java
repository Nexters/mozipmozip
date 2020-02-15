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
import org.nexters.mozipmozip.notice.domain.NoticeForm;
import org.nexters.mozipmozip.notice.dto.NoticeCreateDto;
import org.nexters.mozipmozip.notice.dto.NoticeUpdateDto;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.utils.SessionUtil;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
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
    private User userFixture = new EasyRandom().nextObject(User.class);
    private Notice noticeFixture = new EasyRandom().nextObject(Notice.class);

    private MockHttpSession mockHttpSession = new MockHttpSession(){{
        setAttribute(SessionUtil.SESSION_KEY, userFixture);
    }};

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(sut)
                .alwaysDo(print()).build();
    }

    @Test
    @DisplayName("모집 공고 생성 api 테스트")
    void createNotice() throws Exception {
        Notice noticeFixture = noticeCreateDto.of();
        User user = SessionUtil.getUser(mockHttpSession);
        given(noticeService.create(noticeFixture, user.getId())).willReturn(noticeFixture);

        mockMvc.perform(
                post("/api/v1/notices")
                        .session(mockHttpSession)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                objectMapper.writeValueAsString(noticeCreateDto)
                        )
        )
                .andExpect(status().isCreated());
    }

    @Test
    @DisplayName("모집 공고 전체를 받아오는 api 테스트")
    void getNotices() throws Exception {
        Notice noticeFixture = noticeCreateDto.of();
        given(noticeService.getNotices()).willReturn(Arrays.asList(noticeFixture));

        mockMvc.perform(
                get("/api/v1/notices")
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value(noticeFixture.getTitle()))
                .andExpect(jsonPath("$[0].displayImagePath").value(noticeFixture.getDisplayImagePath()))
                .andExpect(jsonPath("$[0].startDateTime").exists())
                .andExpect(jsonPath("$[0].endDateTime").exists());
    }

    @Test
    @DisplayName("모집 공고 아이디를 통해 상세 내용을 불러오는 api 테스트")
    void getNotice() throws Exception {
        Long noticeIdFixture = 1L;
        NoticeForm noticeFormFixture = new EasyRandom().nextObject(NoticeForm.class);
        noticeFormFixture.setNotice(noticeFixture);
        noticeFixture.setNoticeForms(Arrays.asList(noticeFormFixture));
        given(noticeService.getById(noticeIdFixture)).willReturn(noticeFixture);

        mockMvc.perform(
                get("/api/v1/notices/{id}", noticeIdFixture)
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value(noticeFixture.getTitle()))
                .andExpect(jsonPath("$.displayImagePath").value(noticeFixture.getDisplayImagePath()))
                .andExpect(jsonPath("$.startDateTime").exists())
                .andExpect(jsonPath("$.endDateTime").exists());
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

        User user = (User) mockHttpSession.getAttribute(SessionUtil.SESSION_KEY);
        given(noticeService.create(updateNoticeFixture, user.getId())).willReturn(updateNoticeFixture);

        mockMvc.perform(
                patch("/api/v1/notices")
                        .session(mockHttpSession)
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
