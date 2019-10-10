package eg.sleepdiary;

import java.sql.Timestamp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import eg.sleepdiary.domain.SleepPeriod;
import eg.sleepdiary.domain.SleepPeriodRepository;
import eg.sleepdiary.domain.User;
import eg.sleepdiary.domain.UserLevel;
import eg.sleepdiary.domain.UserRepository;

@SpringBootApplication
public class SleepdiaryApplication {

	public static void main(String[] args) {
		SpringApplication.run(SleepdiaryApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(SleepPeriodRepository periodRepo, UserRepository userRepo) {
		return (args) -> {

			Timestamp jakso1alku = Timestamp.valueOf("2019-09-01 22:00:00");
			Timestamp jakso1loppu = Timestamp.valueOf("2019-09-02 06:00:00");
			Timestamp jakso2alku = Timestamp.valueOf("2019-09-02 21:00:00");
			Timestamp jakso2loppu = Timestamp.valueOf("2019-09-03 06:00:00");
			Timestamp jakso3alku = Timestamp.valueOf("2019-09-04 00:00:00");
			Timestamp jakso3loppu = Timestamp.valueOf("2019-09-04 05:00:00");

			// user user / examiner examiner
			User user1 = new User("user", "$2a$06$3jYRJrg0ghaaypjZ/.g4SethoeA51ph3UD4kZi9oPkeMTpjKU5uo6", "USER");
			User user2 = new User("examiner", "$2a$10$kWeUzwHsV2kzwHbE8ZHw/eiy13oMWRDG4c2t297VOwEG8nqZjwFNm", "EXAMINER");
			
			//User user1 = new User("user", "$2a$06$3jYRJrg0ghaaypjZ/.g4SethoeA51ph3UD4kZi9oPkeMTpjKU5uo6", UserLevel.BASIC);
			//User user2 = new User("examiner", "$2a$10$kWeUzwHsV2kzwHbE8ZHw/eiy13oMWRDG4c2t297VOwEG8nqZjwFNm", UserLevel.HIGHER);
			
			userRepo.save(user1);
			userRepo.save(user2);

			SleepPeriod u1 = new SleepPeriod(jakso1alku, jakso1loppu, user1);
			SleepPeriod u2 = new SleepPeriod(jakso2alku, jakso2loppu, user1);
			SleepPeriod u3 = new SleepPeriod(jakso3alku, jakso3loppu, user1);

			periodRepo.save(u1);
			periodRepo.save(u2);
			periodRepo.save(u3);
		};
	}

}
