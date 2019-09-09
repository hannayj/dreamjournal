package eg.sleepdiary;

import java.sql.Timestamp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import eg.sleepdiary.domain.Unijakso;
import eg.sleepdiary.domain.UnijaksoRepository;

@SpringBootApplication
public class SleepdiaryApplication {

	public static void main(String[] args) {
		SpringApplication.run(SleepdiaryApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(UnijaksoRepository repo) {
		return (args) -> {
			Timestamp jakso1alku = Timestamp.valueOf("2019-09-01 22:00:00");
			Timestamp jakso1loppu = Timestamp.valueOf("2019-09-02 06:00:00");
			Timestamp jakso2alku = Timestamp.valueOf("2019-09-02 21:00:00");
			Timestamp jakso2loppu = Timestamp.valueOf("2019-09-03 06:00:00");
			Timestamp jakso3alku = Timestamp.valueOf("2019-09-04 00:00:00");
			Timestamp jakso3loppu = Timestamp.valueOf("2019-09-04 05:00:00");
			Unijakso u1 = new Unijakso(jakso1alku, jakso1loppu, 2);
			Unijakso u2 = new Unijakso(jakso2alku, jakso2loppu, 5);
			Unijakso u3 = new Unijakso(jakso3alku, jakso3loppu, 1);
			
			repo.save(u1);
			repo.save(u2);
			repo.save(u3);
		};
	}

}
