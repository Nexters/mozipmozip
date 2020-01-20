package org.nexters.mozipmozip.member.domain;

import org.nexters.mozipmozip.member.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositoy extends JpaRepository<User, Long> {

}
