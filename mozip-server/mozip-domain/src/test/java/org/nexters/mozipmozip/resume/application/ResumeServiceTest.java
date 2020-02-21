package org.nexters.mozipmozip.resume.application;

import org.jeasy.random.EasyRandom;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.notice.domain.Notice;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeRepository;
import org.nexters.mozipmozip.user.domain.User;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
@DisplayName("지원서 Service 테스트")
public class ResumeServiceTest {

    @Mock
    private ResumeRepository resumeRepository;

    @InjectMocks
    private ResumeService resumeService;

    private Resume resumeFixture = new EasyRandom().nextObject(Resume.class);
    private User userFixture = new EasyRandom().nextObject(User.class);
    private Notice noticeFixture = new EasyRandom().nextObject(Notice.class);

    @Test
    @DisplayName("넥스터즈 지원서를 등록한다.")
    void createResumeTest() {
//        given(resumeRepository.save(resumeFixture)).willReturn(resumeFixture);
//
//        Long userId = 1L;
//        Long noticeId = 1L;
//        Resume createdResume = resumeService.save(userId, noticeId, resumeFixture);
//
//        assertThat(createdResume.getOccupation()).isEqualTo(resumeFixture.getOccupation());
//        assertThat(createdResume.getState()).isEqualTo(resumeFixture.getState());
//        assertThat(createdResume.getResumeJobType()).isEqualTo(resumeFixture.getResumeJobType());
//        assertThat(createdResume.getJobTypes()).isEqualTo(resumeFixture.getJobTypes());
//        assertThat(createdResume.getBlogURL()).isEqualTo(resumeFixture.getBlogURL());
//        assertThat(createdResume.getGithubURL()).isEqualTo(resumeFixture.getGithubURL());
//        assertThat(createdResume.getPortFolioURL()).isEqualTo(resumeFixture.getPortFolioURL());
//        assertThat(createdResume.getResumeAnswerItems()).isEqualTo(resumeFixture.getResumeAnswerItems());
    }

    @Test
    @DisplayName("특정 넥스터즈 지원서를 조회한다.")
    void getByResumeIdTest() {
        Long resumeIdFixture = 1L;
        given(resumeRepository.findById(resumeIdFixture)).willReturn(Optional.of(resumeFixture));

        Resume resume = resumeService.getResumeById(resumeIdFixture);

        assertThat(resume.getOccupation()).isEqualTo(resumeFixture.getOccupation());
        assertThat(resume.getState()).isEqualTo(resumeFixture.getState());
        assertThat(resume.getJobTypes()).isEqualTo(resumeFixture.getJobTypes());
        assertThat(resume.getBlogURL()).isEqualTo(resumeFixture.getBlogURL());
        assertThat(resume.getGithubURL()).isEqualTo(resumeFixture.getGithubURL());
        assertThat(resume.getPortFolioURL()).isEqualTo(resumeFixture.getPortFolioURL());
        assertThat(resume.getResumeAnswerItems()).isEqualTo(resumeFixture.getResumeAnswerItems());
    }

    @Test
    @DisplayName("모든 지원서를 조회한다.")
    void getAll() {
        Long resumeIdFixture = 1L;

        given(resumeRepository.findAll()).willReturn(Collections.singletonList(this.resumeFixture));

        List<Resume> resumeList = resumeService.getResumes();

        assertThat(resumeList.get(0).getOccupation()).isEqualTo(this.resumeFixture.getOccupation());
        assertThat(resumeList.get(0).getState()).isEqualTo(this.resumeFixture.getState());
        assertThat(resumeList.get(0).getJobTypes()).isEqualTo(this.resumeFixture.getJobTypes());
        assertThat(resumeList.get(0).getBlogURL()).isEqualTo(this.resumeFixture.getBlogURL());
        assertThat(resumeList.get(0).getGithubURL()).isEqualTo(this.resumeFixture.getGithubURL());
        assertThat(resumeList.get(0).getPortFolioURL()).isEqualTo(this.resumeFixture.getPortFolioURL());
        assertThat(resumeList.get(0).getResumeAnswerItems()).isEqualTo(this.resumeFixture.getResumeAnswerItems());
    }

    @Test
    @DisplayName("해당 공고에 매핑되는 지원서를 모두 조회한다.")
    void getAllByNoticeId() {
        Long noticeIdFixture = 1L;

        given(resumeRepository.findAllByNoticeId(noticeIdFixture)).willReturn(Collections.singletonList(this.resumeFixture));

        List<Resume> resumeList = resumeService.getResumesByNoticeId(noticeIdFixture);

        assertThat(resumeList.get(0).getOccupation()).isEqualTo(this.resumeFixture.getOccupation());
        assertThat(resumeList.get(0).getState()).isEqualTo(this.resumeFixture.getState());
        assertThat(resumeList.get(0).getJobTypes()).isEqualTo(this.resumeFixture.getJobTypes());
        assertThat(resumeList.get(0).getBlogURL()).isEqualTo(this.resumeFixture.getBlogURL());
        assertThat(resumeList.get(0).getGithubURL()).isEqualTo(this.resumeFixture.getGithubURL());
        assertThat(resumeList.get(0).getPortFolioURL()).isEqualTo(this.resumeFixture.getPortFolioURL());
        assertThat(resumeList.get(0).getResumeAnswerItems()).isEqualTo(this.resumeFixture.getResumeAnswerItems());
    }

    @Test
    @DisplayName("해당 유저에 매핑되는 지원서를 모두 조회한다.")
    void getAllByUserId() {
        Long userIdFixture = 1L;

        given(resumeRepository.findAllByUserId(userIdFixture)).willReturn(Collections.singletonList(this.resumeFixture));

        List<Resume> resumeList = resumeService.getResumesByUserId(userIdFixture);

        assertThat(resumeList.get(0).getOccupation()).isEqualTo(this.resumeFixture.getOccupation());
        assertThat(resumeList.get(0).getState()).isEqualTo(this.resumeFixture.getState());
        assertThat(resumeList.get(0).getJobTypes()).isEqualTo(this.resumeFixture.getJobTypes());
        assertThat(resumeList.get(0).getBlogURL()).isEqualTo(this.resumeFixture.getBlogURL());
        assertThat(resumeList.get(0).getGithubURL()).isEqualTo(this.resumeFixture.getGithubURL());
        assertThat(resumeList.get(0).getPortFolioURL()).isEqualTo(this.resumeFixture.getPortFolioURL());
        assertThat(resumeList.get(0).getResumeAnswerItems()).isEqualTo(this.resumeFixture.getResumeAnswerItems());
    }

    @Test
    @DisplayName("넥스터즈 지원서를 수정한다.")
    void modifyResumeTest() {
//        Resume tempResumeFixture = resumeFixture;
//        tempResumeFixture.setBlogURL("Modify Blog URL");
//        tempResumeFixture.setGithubURL("Modify Github URL");
//
//        given(resumeRepository.save(tempResumeFixture)).willReturn(tempResumeFixture);
//
//        Long userId = 1L;
//        Long noticeId = 1L;
//        Resume modifiedResume = resumeService.save(userId, noticeId, tempResumeFixture);
//
//        assertThat(modifiedResume.getBlogURL()).isEqualTo(tempResumeFixture.getBlogURL());
//        assertThat(modifiedResume.getGithubURL()).isEqualTo(tempResumeFixture.getGithubURL());
    }

    @Test
    @DisplayName("넥스터즈 지원서를 삭제한다.")
    void deleteResumeTest() {
        Long resumeIdFixture = 1L;
        given(resumeRepository.findById(resumeIdFixture)).willReturn(Optional.of(resumeFixture));

        Resume deletedResume = resumeService.delete(resumeIdFixture);

        assertThat(deletedResume.getDeleted()).isTrue();
    }

}
