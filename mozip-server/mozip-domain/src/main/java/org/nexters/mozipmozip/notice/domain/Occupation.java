package org.nexters.mozipmozip.notice.domain;

import lombok.Getter;

@Getter
public enum Occupation {
    PROGRAMMER("개발자"), DESIGNER("디자이너");

    Occupation(String name) {
        this.name = name;
    }

    private String name;
}
