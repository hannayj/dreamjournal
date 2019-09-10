package eg.sleepdiary.domain;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface SleepQualityRepository extends CrudRepository<SleepQuality, Long>{
	List<SleepQuality> findBysleepquality(String sleepquality);
}
