package eg.sleepdiary;

import static org.junit.Assert.assertThat;

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
import eg.sleepdiary.domain.ExternalType;
import eg.sleepdiary.domain.SleepPeriod;
import eg.sleepdiary.domain.SleepPeriodRepository;
import eg.sleepdiary.domain.SleepQuality;
import eg.sleepdiary.domain.User;
import eg.sleepdiary.domain.UserLevel;
import eg.sleepdiary.domain.UserRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class RepositoryTests {
	@Autowired
	private CommentRepository commentRepo;
	ArrayList<Comment> comments = new ArrayList<Comment>();
	@Autowired
	private ExternalRepository externalRepo;
	ArrayList<External> externals = new ArrayList<External>();
	@Autowired
	private SleepPeriodRepository sleepRepo;
	ArrayList<SleepPeriod> sleeps = new ArrayList<SleepPeriod>();
	@Autowired
	private UserRepository userRepo;
	ArrayList<User> users = new ArrayList<User>();
	
	@Before
	public void init() {
		for(Comment c : commentRepo.findAll()) {
			comments.add(c);
		}
		for(External e : externalRepo.findAll()) {
			externals.add(e);
		}
		for(SleepPeriod s : sleepRepo.findAll()) {
			sleeps.add(s);
		}
		for(User u : userRepo.findAll()) {
			users.add(u);
		}
	}

	@Test
	public void commentRepoFindsComment() {
		assertThat(comments).isNotNull().hasSize(1);
	}
	
	@Test
	public void commentRepoFindsRightComment() {
		assertThat(comments.get(0).getComment()).startsWith("Tämä").endsWith("kommentti");
	}
	
	@Test
	public void externalRepoFindsExternals() {
		assertThat(externals).isNotNull().hasSize(2);
	}
	
	@Test
	public void sleepRepoFindsSleeps() {
		assertThat(sleeps).isNotNull().hasSize(3);
	}
	
	@Test
	public void userRepoFindsUsers() {
		assertThat(users).isNotNull().hasSize(2);
	}
}
