package org.nexters.mozipmozip.resume.domain;

import lombok.Getter;

@Getter
public enum ResumeOccupation {
    PROGRAMMER("개발자"),
    DESIGNER("디자이너");

    private String name;

    ResumeOccupation(final String name) {
        this.name = name;
    }
}
