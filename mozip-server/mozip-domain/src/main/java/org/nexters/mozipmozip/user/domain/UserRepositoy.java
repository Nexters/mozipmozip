package org.nexters.mozipmozip.user.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositoy extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
