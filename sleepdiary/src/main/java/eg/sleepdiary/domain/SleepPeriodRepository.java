package eg.sleepdiary.domain;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface SleepPeriodRepository extends CrudRepository<SleepPeriod, Long> {
	
    List<SleepPeriod> findAllByStartTimeBetween(
    	      LocalDateTime start,
    	      LocalDateTime end);

	boolean existsByStartTime(LocalDateTime startTime);
}
