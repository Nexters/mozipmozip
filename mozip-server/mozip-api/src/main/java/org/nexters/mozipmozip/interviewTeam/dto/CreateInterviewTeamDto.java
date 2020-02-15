package org.nexters.mozipmozip.interviewTeam.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.nexters.mozipmozip.interviewTeam.domian.InterviewTeam;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class CreateInterviewTeamDto {
    private String title;
    private List<Long> resumesIds = new ArrayList<>();
    private List<Long> usersIds = new ArrayList<>();
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate startDate;
    @JsonFormat(pattern = "HH:mm:ss", timezone = "Asia/Seoul")
    private LocalTime startTime;
    @JsonFormat(pattern = "HH:mm:ss", timezone = "Asia/Seoul")
    private LocalTime endTime;

    @Builder
    public CreateInterviewTeamDto(String title, List<Long> resumesIds, List<Long> usersIds, LocalDate startDate, LocalTime startTime, LocalTime endTime) {
        this.title = title;
        this.resumesIds = resumesIds;
        this.usersIds = usersIds;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public static InterviewTeam toEntity(CreateInterviewTeamDto createInterviewTeamDto) {

        return InterviewTeam.builder()
                .title(createInterviewTeamDto.title)
                .startDate(createInterviewTeamDto.startDate)
                .startTime(createInterviewTeamDto.startTime)
                .endTime(createInterviewTeamDto.endTime).build();
    }
}
