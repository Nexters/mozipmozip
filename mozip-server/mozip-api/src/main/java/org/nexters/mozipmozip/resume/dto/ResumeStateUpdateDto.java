package org.nexters.mozipmozip.resume.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.ResumeState;

import javax.validation.constraints.NotNull;

@Setter
@Getter
@NoArgsConstructor
public class ResumeStateUpdateDto {

    @NotNull(message = "업데이트시 상태는 반드시 존재해야 한다.")
    private ResumeState state;

}
