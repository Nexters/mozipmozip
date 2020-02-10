package org.nexters.mozipmozip.resume.dto;

import lombok.Getter;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeState;

import javax.validation.constraints.NotNull;

@Setter
@Getter
public class ResumeStateUpdateDto {

    @NotNull(message = "업데이트시 반드시 아이디는 있어야 한다.")
    private Long id;
    private ResumeState state;

    public Resume of() {
        return Resume.builder()
                .id(this.id)
                .state(this.state)
                .build();
    }

}
