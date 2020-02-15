package org.nexters.mozipmozip.referrer.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReferrerCreateDto {
    private String path;

    @Builder
    public ReferrerCreateDto(String path) {
        this.path = path;
    }
}
