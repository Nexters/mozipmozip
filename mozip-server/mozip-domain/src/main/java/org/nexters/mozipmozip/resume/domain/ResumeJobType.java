package org.nexters.mozipmozip.resume.domain;

import lombok.Getter;

@Getter
public enum ResumeJobType {
    STUDENT("학생"),
    WORKER("직장인");

    private String name;

    ResumeJobType(final String name) {
        this.name = name;
    }
}
