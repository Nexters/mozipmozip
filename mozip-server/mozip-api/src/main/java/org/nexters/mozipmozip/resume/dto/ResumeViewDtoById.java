package org.nexters.mozipmozip.resume.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeAnswerItem;
import org.nexters.mozipmozip.resume.domain.ResumeOccupation;
import org.nexters.mozipmozip.resume.domain.ResumeState;

import java.util.List;

@Setter
@Getter
public class ResumeViewDtoById {

    private Long id;
    private Long noticeId;
    private ResumeState state;
    private String name;
    private String phoneNumber;
    private String email;
    private ResumeOccupation occupation;
    private List<String> jobTypes;
    private String blogURL;
    private String githubURL;
    private String portFolioURL;
    private List<ResumeAnswerItem> resumeAnswerItems;

    @Builder
    public ResumeViewDtoById(final Long id,
                             final Long noticeId,
                             final ResumeState state,
                             final String name,
                             final String phoneNumber,
                             final String email,
                             final ResumeOccupation occupation,
                             final List<String> jobTypes,
                             final String blogURL,
                             final String githubURL,
                             final String portFolioURL,
                             final List<ResumeAnswerItem> resumeAnswerItems) {
        this.id = id;
        this.noticeId = noticeId;
        this.state = state;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.occupation = occupation;
        this.jobTypes = jobTypes;
        this.blogURL = blogURL;
        this.githubURL = githubURL;
        this.portFolioURL = portFolioURL;
        this.resumeAnswerItems = resumeAnswerItems;
    }

    public static ResumeViewDtoById of(final Resume resume) {
        return ResumeViewDtoById.builder()
                .id(resume.getNoticeId())
                .noticeId(resume.getNoticeId())
                .state(resume.getState())
                .name(resume.getName())
                .phoneNumber(resume.getPhoneNumber())
                .email(resume.getEmail())
                .occupation(resume.getOccupation())
                .jobTypes(resume.getJobTypes())
                .blogURL(resume.getBlogURL())
                .githubURL(resume.getGithubURL())
                .portFolioURL(resume.getPortFolioURL())
                .resumeAnswerItems(resume.getResumeAnswerItems())
                .build();
    }
}
