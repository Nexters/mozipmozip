package org.nexters.mozipmozip.referrer;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ReferrerService {
    private final ReferrerRepository referrerRepository;

    public Referrer createReferrer(Referrer referrer) {
        return referrerRepository.save(referrer);
    }

    @Transactional(readOnly = true)
    public List<Referrer> getAllReferrers() {
        return referrerRepository.findAll();
    }
}
