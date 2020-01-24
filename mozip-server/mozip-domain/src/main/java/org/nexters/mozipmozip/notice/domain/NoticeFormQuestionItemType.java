package org.nexters.mozipmozip.notice.domain;

public enum NoticeFormQuestionItemType {
    LINK("링크"), FILE("파일"), SHORT("단답형"), LONG("서술형");

    NoticeFormQuestionItemType(String name) {
        this.name = name;
    }

    private String name;
}
