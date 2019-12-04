package eg.sleepdiary;

import java.time.LocalDateTime;
import java.util.ArrayList;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.*;

import eg.sleepdiary.domain.Comment;
import eg.sleepdiary.domain.CommentRepository;
import eg.sleepdiary.domain.External;
import eg.sleepdiary.domain.ExternalRepository;
import eg.sleepdiary.domain.SleepPeriod;
import eg.sleepdiary.domain.SleepPeriodRepository;
import eg.sleepdiary.domain.User;
import eg.sleepdiary.domain.UserRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class RepositoryTests {
	@Autowired
	private CommentRepository commentRepo;
	@Autowired
	private ExternalRepository externalRepo;
	@Autowired
	private SleepPeriodRepository sleepRepo;
	@Autowired
	private UserRepository userRepo;

	@Before
	public void init() {
	}

	@Test
	public void commentRepoFindsComment() {
		ArrayList<Comment> comments = new ArrayList<Comment>();
		for (Comment c : commentRepo.findAll()) {
			comments.add(c);
		}
		assertThat(comments).isNotNull().hasSize(1);
	}

	@Test
	public void externalRepoFindsExternals() {
		ArrayList<External> externals = new ArrayList<External>();
		for (External e : externalRepo.findAll()) {
			externals.add(e);
		}
		assertThat(externals).isNotNull().hasSize(2);
	}

	@Test
	public void sleepRepoFindsSleeps() {
		ArrayList<SleepPeriod> sleeps = new ArrayList<SleepPeriod>();
		for (SleepPeriod s : sleepRepo.findAll()) {
			sleeps.add(s);
		}
		assertThat(sleeps).isNotNull().hasSize(3);
	}

	@Test
	public void sleepRepoFindsByStartTimeBetween() {
		LocalDateTime alku = LocalDateTime.of(2019, 9, 1, 0, 0);
		LocalDateTime loppu = LocalDateTime.of(2019, 9, 2, 0, 0);
		ArrayList<SleepPeriod> sleeps = new ArrayList<SleepPeriod>();
		for (SleepPeriod s : sleepRepo.findAllByStartTimeBetween(alku, loppu)) {
			sleeps.add(s);
		}
		assertThat(sleeps).isNotNull().hasSize(1);
	}

	@Test
	public void sleepRepoFindsbyStartTime() {
		LocalDateTime alku = LocalDateTime.of(2019, 9, 1, 22, 0);
		assertThat(sleepRepo.existsByStartTime(alku)).isTrue();
	}

	@Test
	public void userRepoFindsUsers() {
		ArrayList<User> users = new ArrayList<User>();
		for (User u : userRepo.findAll()) {
			users.add(u);
		}
		assertThat(users).isNotNull().hasSize(2);
	}
}
