package eg.sleepdiary.domain;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface SleepPeriodRepository extends CrudRepository<SleepPeriod, Long> {
	
    List<SleepPeriod> findAllByStartTimeBetween(
    	      Timestamp start,
    	      Timestamp end);

	boolean existsByStartTime(Timestamp startTime);
}
