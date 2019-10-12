package eg.sleepdiary.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eg.sleepdiary.domain.Comment;
import eg.sleepdiary.domain.CommentRepository;
import eg.sleepdiary.domain.External;
import eg.sleepdiary.domain.ExternalRepository;
import eg.sleepdiary.domain.SleepPeriod;
import eg.sleepdiary.domain.SleepPeriodRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class SleepPeriodApiController {

	@Autowired
	private SleepPeriodRepository periodRepo;
	@Autowired
	private CommentRepository commentRepo;
	
	@Autowired
	private ExternalRepository externalRepo;
	
	@GetMapping("/sleepperiods/")
	public ResponseEntity<Iterable<SleepPeriod>> findAll() {
		Iterable<SleepPeriod> sleepPeriods = periodRepo.findAll();
		return new ResponseEntity<Iterable<SleepPeriod>>(sleepPeriods, HttpStatus.OK);
	}

	@PostMapping("/sleepperiods/")
	public ResponseEntity<?> save(@RequestBody SleepPeriod sleepPeriod) {
		log.info("Creating SleepPeriod: {}", sleepPeriod);
		if (periodRepo.existsByStartTime(sleepPeriod.getStartTime())) {
			log.error("A SleepPeriod with start time {} already exists", sleepPeriod.getStartTime());
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		SleepPeriod createdSleepPeriod = periodRepo.save(sleepPeriod);
		return new ResponseEntity<SleepPeriod>(createdSleepPeriod, HttpStatus.OK);
	}
	
	@GetMapping("/comments/")
	public ResponseEntity<Iterable<Comment>> getComments() {
		Iterable<Comment> comments = commentRepo.findAll();
		return new ResponseEntity<Iterable<Comment>>(comments, HttpStatus.OK);
	}
	
	//pitäisi luoda aina uusi kommentti
	@PostMapping("/comments/")
	public ResponseEntity<?> postComment(@RequestBody Comment comment) {
		Comment createdComment = commentRepo.save(comment);
		return new ResponseEntity<Comment>(createdComment, HttpStatus.OK);
	}

	@GetMapping("/externals/")
	public ResponseEntity<Iterable<External>> getExternals() {
		Iterable<External> externals = externalRepo.findAll();
		return new ResponseEntity<Iterable<External>>(externals, HttpStatus.OK);
	}
	
	//pitäisi luoda aina uusi ext
	@PostMapping("/externals/")
	public ResponseEntity<?> postExternal(@RequestBody External external) {
		External createdExternal = externalRepo.save(external);
		return new ResponseEntity<External>(createdExternal, HttpStatus.OK);
	}
	
}
