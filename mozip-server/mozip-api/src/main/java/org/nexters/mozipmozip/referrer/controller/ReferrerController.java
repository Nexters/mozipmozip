package org.nexters.mozipmozip.referrer.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.referrer.Referrer;
import org.nexters.mozipmozip.referrer.ReferrerService;
import org.nexters.mozipmozip.referrer.dto.ReferrerCreateDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api/v1/referrers")
@RequiredArgsConstructor
public class ReferrerController {
    private final ReferrerService referrerService;

    @PostMapping
    public ResponseEntity create(@RequestBody ReferrerCreateDto referrerCreateDto) {
        Referrer savedReferrer = referrerService.createReferrer(Referrer.builder().path(referrerCreateDto.getPath()).build());
        return ResponseEntity.created(URI.create("/api/v1/referrers/" + savedReferrer.getId()))
                .body(savedReferrer);
    }
}
