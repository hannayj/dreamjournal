package eg.sleepdiary;

import java.sql.Timestamp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import eg.sleepdiary.domain.SleepPeriod;
import eg.sleepdiary.domain.SleepPeriodRepository;
import eg.sleepdiary.domain.SleepQuality;
import eg.sleepdiary.domain.SleepQualityRepository;

@SpringBootApplication
public class SleepdiaryApplication {

	public static void main(String[] args) {
		SpringApplication.run(SleepdiaryApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(SleepPeriodRepository periodRepo, SleepQualityRepository qualityRepo) {
		return (args) -> {
			qualityRepo.save(new SleepQuality("hyva"));
			qualityRepo.save(new SleepQuality("huono"));
			
			Timestamp jakso1alku = Timestamp.valueOf("2019-09-01 22:00:00");
			Timestamp jakso1loppu = Timestamp.valueOf("2019-09-02 06:00:00");
			Timestamp jakso2alku = Timestamp.valueOf("2019-09-02 21:00:00");
			Timestamp jakso2loppu = Timestamp.valueOf("2019-09-03 06:00:00");
			Timestamp jakso3alku = Timestamp.valueOf("2019-09-04 00:00:00");
			Timestamp jakso3loppu = Timestamp.valueOf("2019-09-04 05:00:00");
			
			SleepPeriod u1 = new SleepPeriod(jakso1alku, jakso1loppu, qualityRepo.findBysleepquality("hyva").get(0));
			SleepPeriod u2 = new SleepPeriod(jakso2alku, jakso2loppu, qualityRepo.findBysleepquality("hyva").get(0));
			SleepPeriod u3 = new SleepPeriod(jakso3alku, jakso3loppu, qualityRepo.findBysleepquality("huono").get(0));
			
			periodRepo.save(u1);
			periodRepo.save(u2);
			periodRepo.save(u3);
		};
	}

}
