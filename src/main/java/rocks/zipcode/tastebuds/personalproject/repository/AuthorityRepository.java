package rocks.zipcode.tastebuds.personalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rocks.zipcode.tastebuds.personalproject.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
