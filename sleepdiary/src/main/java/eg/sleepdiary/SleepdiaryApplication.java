package eg.sleepdiary;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.Month;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import eg.sleepdiary.domain.Comment;
import eg.sleepdiary.domain.CommentRepository;
import eg.sleepdiary.domain.ExternalRepository;
import eg.sleepdiary.domain.ExternalType;
import eg.sleepdiary.domain.External;
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
	public CommandLineRunner demo(SleepPeriodRepository periodRepo, UserRepository userRepo,
			CommentRepository commentRepo, ExternalRepository extRepo) {
		return (args) -> {

			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
			LocalDateTime jakso1alku = LocalDateTime.parse("2019-09-01 22:00:00", formatter);
			LocalDateTime jakso1loppu = LocalDateTime.parse("2019-09-02 06:00:00", formatter);
			LocalDateTime jakso2alku = LocalDateTime.parse("2019-09-02 21:00:00", formatter);
			LocalDateTime jakso2loppu = LocalDateTime.parse("2019-09-03 06:00:00", formatter);
			LocalDateTime jakso3alku = LocalDateTime.parse("2019-09-04 00:00:00", formatter);
			LocalDateTime jakso3loppu = LocalDateTime.parse("2019-09-04 05:00:00", formatter);
			
			LocalDateTime dateTime1 = LocalDateTime.of(2019, Month.SEPTEMBER, 1, 16, 15, 00);
			LocalDateTime dateTime2 = LocalDateTime.of(2019, Month.SEPTEMBER, 2, 16, 15, 00);
			

			User user1 = new User("user", "Masa", "Aho", "ma@com", "password", UserLevel.BASIC);
			User user2 = new User("examiner", "Eva", "Oras", "eo@com","password", UserLevel.HIGHER);

			userRepo.save(user1);
			userRepo.save(user2);

			SleepPeriod u1 = new SleepPeriod(jakso1alku, jakso1loppu, user1);
			SleepPeriod u2 = new SleepPeriod(jakso2alku, jakso2loppu, user1);
			SleepPeriod u3 = new SleepPeriod(jakso3alku, jakso3loppu, user1);
			
			Comment comment = new Comment("This is a comment", jakso1loppu, user1, SleepQuality.HIGH);
			Comment comment2 = new Comment("Sleep sleep sleep!", jakso3loppu, user1, SleepQuality.LOW);
			
			commentRepo.save(comment);
			commentRepo.save(comment2);
			periodRepo.save(u1);
			periodRepo.save(u2);
			periodRepo.save(u3);
			
			extRepo.save(new External(user1, dateTime1, ExternalType.COFFEE, 2));
			extRepo.save(new External(user1, dateTime2, ExternalType.ALCOHOL, 1));
		};
	}

}
