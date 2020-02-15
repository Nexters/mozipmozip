package org.nexters.mozipmozip.resume.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class ResumeAnswerScore {
    @Column(name = "user_id")
    private Long userId;
    @Column(name = "score")
    private Integer score;
}
