package eg.sleepdiary;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import eg.sleepdiary.domain.SleepPeriod;
import eg.sleepdiary.domain.SleepPeriodRepository;
import eg.sleepdiary.domain.SleepQuality;
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

			DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
			LocalDateTime jakso1alku = LocalDateTime.parse("2019-09-01 22:00:00", format);
			LocalDateTime jakso1loppu = LocalDateTime.parse("2019-09-02 06:00:00", format);
			LocalDateTime jakso2alku = LocalDateTime.parse("2019-09-02 21:00:00", format);
			LocalDateTime jakso2loppu = LocalDateTime.parse("2019-09-03 06:00:00", format);
			LocalDateTime jakso3alku = LocalDateTime.parse("2019-09-04 00:00:00", format);
			LocalDateTime jakso3loppu = LocalDateTime.parse("2019-09-04 05:00:00", format);

			User user1 = new User("user", "password", UserLevel.BASIC);
			User user2 = new User("examiner", "password", UserLevel.HIGHER);

			userRepo.save(user1);
			userRepo.save(user2);

			SleepPeriod u1 = new SleepPeriod(jakso1alku, jakso1loppu, SleepQuality.HIGH, user1);
			SleepPeriod u2 = new SleepPeriod(jakso2alku, jakso2loppu, SleepQuality.HIGH, user1);
			SleepPeriod u3 = new SleepPeriod(jakso3alku, jakso3loppu, SleepQuality.LOW, user1);

			periodRepo.save(u1);
			periodRepo.save(u2);
			periodRepo.save(u3);
		};
	}

}
