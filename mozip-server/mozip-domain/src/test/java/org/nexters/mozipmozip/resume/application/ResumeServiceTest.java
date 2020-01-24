package org.nexters.mozipmozip.resume.application;

import org.jeasy.random.EasyRandom;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeRepository;

import java.util.ArrayList;
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

    @Test
    @DisplayName("넥스터즈 지원서를 등록한다.")
    void createResumeTest() {
        given(resumeRepository.save(resumeFixture)).willReturn(resumeFixture);

        Resume createdResume = resumeService.create(resumeFixture);

        assertThat(createdResume.getOccupation()).isEqualTo(resumeFixture.getOccupation());
        assertThat(createdResume.getState()).isEqualTo(resumeFixture.getState());
        assertThat(createdResume.getJobTypes()).isEqualTo(resumeFixture.getJobTypes());
        assertThat(createdResume.getBlogURL()).isEqualTo(resumeFixture.getBlogURL());
        assertThat(createdResume.getGithubURL()).isEqualTo(resumeFixture.getGithubURL());
        assertThat(createdResume.getPortFolioURL()).isEqualTo(resumeFixture.getPortFolioURL());
        assertThat(createdResume.getResumeAnswerItems()).isEqualTo(resumeFixture.getResumeAnswerItems());
    }

    @Test
    @DisplayName("특정 넥스터즈 지원서를 조회한다.")
    void getAllResumeTest() {
        Long resumeIdFixture = 1L;
        given(resumeRepository.findById(resumeIdFixture)).willReturn(Optional.of(resumeFixture));

        Resume resume = resumeService.getById(resumeIdFixture);

        assertThat(resume.getOccupation()).isEqualTo(resumeFixture.getOccupation());
        assertThat(resume.getState()).isEqualTo(resumeFixture.getState());
        assertThat(resume.getJobTypes()).isEqualTo(resumeFixture.getJobTypes());
        assertThat(resume.getBlogURL()).isEqualTo(resumeFixture.getBlogURL());
        assertThat(resume.getGithubURL()).isEqualTo(resumeFixture.getGithubURL());
        assertThat(resume.getPortFolioURL()).isEqualTo(resumeFixture.getPortFolioURL());
        assertThat(resume.getResumeAnswerItems()).isEqualTo(resumeFixture.getResumeAnswerItems());
    }

    @Test
    @DisplayName("넥스터즈 지원서를 수정한다.")
    void modifyResumeTest() {
        Resume tempResumeFixture = resumeFixture;
        tempResumeFixture.setBlogURL("Modify Blog URL");
        tempResumeFixture.setGithubURL("Modify Github URL");

        given(resumeRepository.save(tempResumeFixture)).willReturn(tempResumeFixture);

        Resume modifiedResume = resumeService.create(tempResumeFixture);

        assertThat(modifiedResume.getBlogURL()).isEqualTo(tempResumeFixture.getBlogURL());
        assertThat(modifiedResume.getGithubURL()).isEqualTo(tempResumeFixture.getGithubURL());
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
