package org.nexters.mozipmozip.notice.domain;

public enum NoticeFormQuestionItemType {
    LINK("링크"), LONG("서술형");

    NoticeFormQuestionItemType(String name) {
        this.name = name;
    }

    private String name;
}
