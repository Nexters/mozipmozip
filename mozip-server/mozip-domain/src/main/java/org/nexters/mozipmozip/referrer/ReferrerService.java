package org.nexters.mozipmozip.referrer;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReferrerService {
    private final ReferrerRepository referrerRepository;

    public Referrer createReferrer(Referrer referrer) {
        return referrerRepository.save(referrer);
    }
}
