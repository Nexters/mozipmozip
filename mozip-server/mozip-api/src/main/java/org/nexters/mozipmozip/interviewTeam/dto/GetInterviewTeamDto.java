package org.nexters.mozipmozip.interviewTeam.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class GetInterviewTeamDto {

    private String title;
    private List<Long> usersIds = new ArrayList<>();
    private List<Long> resumesIds = new ArrayList<>();
    private LocalDate startDate;
    private LocalTime startTime;
    private LocalTime endTime;

    @Builder
    public GetInterviewTeamDto(String title, List<Long> usersIds, List<Long> resumesIds, LocalDate startDate, LocalTime startTime, LocalTime endTime) {
        this.title = title;
        this.usersIds = usersIds;
        this.resumesIds = resumesIds;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
