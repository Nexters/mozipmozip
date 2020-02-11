package org.nexters.mozipmozip.interviewTeam.domian;

import lombok.*;
import org.hibernate.annotations.Where;
import org.nexters.mozipmozip.JpaBasePersistable;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.user.domain.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@Table(name = "interviewTeam")
@AttributeOverride(name = "id", column = @Column(name = "interviewTeam_id"))
@Where(clause = "deleted=0")
@Getter
@Setter
public class InterviewTeam extends JpaBasePersistable {

    @Column(length = 30, nullable = false)
    private String title;

    @ManyToMany //다대다 단반향
    @JoinTable(name = "interview_interviewer")
    private List<User> users = new ArrayList<>();

    @OneToMany //단방향
    private List<Resume> resumes = new ArrayList<>();

    @Column(nullable = false)
    private LocalDate startDate;

    @Column(nullable = false)
    private LocalTime startTime;

    @Column(nullable = false)
    private LocalTime endTime;

    @Builder
    public InterviewTeam(String title, List<Resume> resumes, List<User> users, LocalDate startDate, LocalTime startTime, LocalTime endTime) {
        this.title = title;
        this.resumes = resumes;
        this.users = users;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
