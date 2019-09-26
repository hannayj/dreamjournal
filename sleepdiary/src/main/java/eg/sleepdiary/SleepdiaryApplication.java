package eg.sleepdiary;

import java.sql.Timestamp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import eg.sleepdiary.domain.Comment;
import eg.sleepdiary.domain.CommentRepository;
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
	public CommandLineRunner demo(SleepPeriodRepository periodRepo, UserRepository userRepo, CommentRepository commentRepo) {
		return (args) -> {
			//1.9.2019-2.9.2019
			Timestamp jakso1alku = Timestamp.valueOf("2019-09-01 22:00:00");
			Timestamp jakso1loppu = Timestamp.valueOf("2019-09-02 06:00:00");
			Comment c1 = new Comment();
			c1.setCommentDate(jakso1alku);
			c1.setComment("Hello world!");
			//2.9. - 3.9
			Timestamp jakso2alku = Timestamp.valueOf("2019-09-02 21:00:00");
			Timestamp jakso2loppu = Timestamp.valueOf("2019-09-03 06:00:00");
			Comment c2 = new Comment();
			c2.setCommentDate(jakso2alku);
			c2.setComment("Parasta");
			//3.9. - 4.9.
			Timestamp jakso3alku = Timestamp.valueOf("2019-09-04 00:00:00");
			Timestamp jakso3loppu = Timestamp.valueOf("2019-09-04 05:00:00");
			Comment c3 = new Comment();
			c3.setCommentDate(jakso3alku);
			c3.setComment("Heräsin viideltä koska Robin Sharma käski");
			//4.9. - 5.9.
			Timestamp jakso4alku = Timestamp.valueOf("2019-09-04 20:00:00");
			Timestamp jakso4loppu = Timestamp.valueOf("2019-09-05 02:00:00");
			Timestamp jakso5alku = Timestamp.valueOf("2019-09-05 04:00:00");
			Timestamp jakso5loppu = Timestamp.valueOf("2019-09-05 06:00:00");
			Comment c4 = new Comment();
			c4.setCommentDate(jakso4alku);
			c4.setComment("Insert comment here");
			//5.9. - 6.9.
			Timestamp jakso6alku = Timestamp.valueOf("2019-09-05 16:00:00");
			Timestamp jakso6loppu = Timestamp.valueOf("2019-09-05 18:00:00");
			Timestamp jakso7alku = Timestamp.valueOf("2019-09-06 01:00:00");
			Timestamp jakso7loppu = Timestamp.valueOf("2019-09-06 06:00:00");
			Comment c5 = new Comment();
			c5.setCommentDate(jakso6alku);
			c5.setComment("nukuin päikkärit");

			User user1 = new User("user", "password", UserLevel.BASIC);
			User user2 = new User("examiner", "password", UserLevel.HIGHER);
			System.out.println(user1);

			userRepo.save(user1);
			userRepo.save(user2);

			SleepPeriod u1 = new SleepPeriod(jakso1alku, jakso1loppu, user1);
			SleepPeriod u2 = new SleepPeriod(jakso2alku, jakso2loppu, user1);
			SleepPeriod u3 = new SleepPeriod(jakso3alku, jakso3loppu, user1);
			SleepPeriod u4 = new SleepPeriod(jakso4alku, jakso4loppu, user1);
			SleepPeriod u5 = new SleepPeriod(jakso5alku, jakso5loppu, user1);
			SleepPeriod u6 = new SleepPeriod(jakso6alku, jakso6loppu, user1);
			SleepPeriod u7 = new SleepPeriod(jakso7alku, jakso7loppu, user1);

			periodRepo.save(u1);
			periodRepo.save(u2);
			periodRepo.save(u3);
			periodRepo.save(u4);
			periodRepo.save(u5);
			periodRepo.save(u6);
			periodRepo.save(u7);
			commentRepo.save(c1);
			commentRepo.save(c2);
			commentRepo.save(c3);
			commentRepo.save(c4);
			commentRepo.save(c5);
		};
	}

}
