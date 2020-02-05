package org.nexters.mozipmozip.interviewTeam.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeam;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.user.domain.User;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class CreateInterviewTeamDto {
    private String title;
    private List<Resume> resumes = new ArrayList<>();
    private List<User> users = new ArrayList<>();
    @JsonFormat(pattern = "MM/dd")
    private LocalDate interviewDate;
    @JsonFormat(pattern = "HH:mm")
    private LocalTime startInterview;
    @JsonFormat(pattern = "HH:mm")
    private LocalTime endInterview;

    @Builder
    public CreateInterviewTeamDto(String title, List<Resume> resumes, List<User> users, LocalDate interviewDate, LocalTime startInterview, LocalTime endInterview) {
        this.title = title;
        this.resumes = resumes;
        this.users = users;
        this.interviewDate = interviewDate;
        this.startInterview = startInterview;
        this.endInterview = endInterview;
    }

    public InterviewTeam toEntity() {
        return InterviewTeam.builder()
                .title(title)
                .resumes(resumes)
                .users(users)
                .interviewDate(interviewDate)
                .startInterview(startInterview)
                .endInterview(endInterview).build();
    }
}
