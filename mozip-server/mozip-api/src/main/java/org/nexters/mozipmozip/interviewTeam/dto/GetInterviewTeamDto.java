package org.nexters.mozipmozip.interviewTeam.dto;

import lombok.*;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.user.domain.User;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class GetInterviewTeamDto {

    private String title;
    private List<User> users = new ArrayList<>();
    private List<Resume> resumes = new ArrayList<>();
    private LocalDate startDate;
    private LocalTime startTime;
    private LocalTime endTime;

    @Builder
    public GetInterviewTeamDto(String title, List<User> users, List<Resume> resumes, LocalDate startDate, LocalTime startTime, LocalTime endTime) {
        this.title = title;
        this.users = users;
        this.resumes = resumes;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
