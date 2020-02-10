package org.nexters.mozipmozip.member.controller;

import org.jeasy.random.EasyRandom;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.user.application.UserService;
import org.nexters.mozipmozip.user.controller.UserController;
import org.nexters.mozipmozip.user.domain.User;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@DisplayName("유저 api 테스트")
class UserControllerTest {

    @InjectMocks
    private UserController sut;

    @Mock
    private UserService userService;

    private MockMvc mockMvc;

    private User userFixture = new EasyRandom().nextObject(User.class);

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(sut)
                .alwaysDo(print()).build();
    }

    @Test
    @DisplayName("현재 로그인 된 유저 정보를 받아온다")
    void updateNotice() throws Exception {

        MockHttpSession mockHttpSession = new MockHttpSession();
        mockHttpSession.setAttribute(UserController.SESSION_KEY, userFixture);

        mockMvc.perform(
                get("/api/v1/users/current")
                        .session(mockHttpSession)
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value(userFixture.getName()))
                .andExpect(jsonPath("$.email").value(userFixture.getEmail()))
                .andExpect(jsonPath("$.password").doesNotExist());
    }
}
