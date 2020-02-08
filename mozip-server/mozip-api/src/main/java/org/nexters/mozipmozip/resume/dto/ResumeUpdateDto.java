package org.nexters.mozipmozip.resume.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.nexters.mozipmozip.resume.domain.Resume;
import org.nexters.mozipmozip.resume.domain.ResumeState;

@Setter
@Getter
@NoArgsConstructor
public class ResumeUpdateDto {

    private Long id;
    private ResumeState state;

    public Resume of() {
        return Resume.builder()
                .id(this.id)
                .state(this.state)
                .build();
    }
}
