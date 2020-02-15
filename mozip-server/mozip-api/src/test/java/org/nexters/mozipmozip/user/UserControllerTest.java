package org.nexters.mozipmozip.user;

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
import org.nexters.mozipmozip.user.application.UserService;
import org.nexters.mozipmozip.user.controller.UserController;
import org.nexters.mozipmozip.user.domain.User;
import org.nexters.mozipmozip.user.dto.UserCreateDto;
import org.nexters.mozipmozip.user.dto.UserLoginDto;
import org.nexters.mozipmozip.user.dto.UserUpdateDto;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
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
    private UserCreateDto userCreateDto = UserCreateDto.builder()
            .name("rayoungji")
            .email("dudwl7676@naver.com")
            .password("1111")
            .adminCode("관리자비밀번호").build();
    User user = UserCreateDto.toEntity(userCreateDto);

    private ObjectMapper objectMapper = new ObjectMapper()
            .registerModule(new JavaTimeModule());

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

    @Test
    @DisplayName("유저 회원가입 성공")
    void createUserTest() throws Exception {
        given(userService.createUser(user, user.getIsAdmin())).willReturn(user);
        mockMvc.perform(
                post("/api/v1/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                objectMapper.writeValueAsString(userCreateDto)  //object to json in string
                        )
        )
                .andExpect(status().isCreated());
    }

    @Test
    @DisplayName("유저 로그인 성공")
    void loginUserTest() throws Exception {
        MockHttpSession mockHttpSession = new MockHttpSession();
        mockHttpSession.setAttribute(UserController.SESSION_KEY, user);
        UserLoginDto userLoginDto = UserLoginDto.builder()
                .email(user.getEmail())
                .password(user.getPassword()).build();
        User loginUser = UserLoginDto.toEntity(userLoginDto);
        given(userService.signInUser(loginUser)).willReturn(user);

        mockMvc.perform(
                post("/api/v1/users/login")
                        .session(mockHttpSession)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                objectMapper.writeValueAsString(userLoginDto)
                        )
        )
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("유저 로그아웃 성공")
    void logoutUserTest() throws Exception {
        MockHttpSession mockHttpSession = new MockHttpSession();
        mockHttpSession.setAttribute(UserController.SESSION_KEY, userFixture);

        mockMvc.perform(
                post("/api/v1/users/logout")
                        .session(mockHttpSession)
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("유저 정보 조회 성공")
    void getUserTest() throws Exception {

        given(userService.getUser(userFixture.getId())).willReturn(userFixture);

        mockMvc.perform(
                get("/api/v1/users/getUser/{id}", userFixture.getId())
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value(userFixture.getName()))
                .andExpect(jsonPath("$.email").value(userFixture.getEmail()));
    }

    @Test
    @DisplayName("유저 정보 수정 성공")
    void updateUserTest() throws Exception {
        MockHttpSession mockHttpSession = new MockHttpSession();
        mockHttpSession.setAttribute(UserController.SESSION_KEY, userFixture);

        UserUpdateDto userUpdateDto = UserUpdateDto.builder()
                .email("jeaho214@naver.com").build();
        User updateUser = UserUpdateDto.toEntity(userUpdateDto);

        given(userService.updateUser(mockHttpSession, updateUser)).willReturn(updateUser);


        mockMvc.perform(
                patch("/api/v1/users/update")
                        .session(mockHttpSession)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(userUpdateDto))
        )
                .andExpect(status().isOk());
    }
}
