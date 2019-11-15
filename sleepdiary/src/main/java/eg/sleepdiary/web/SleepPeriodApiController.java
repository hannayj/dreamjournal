package eg.sleepdiary.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@PostMapping("/comments/")
	public ResponseEntity<?> postComment(@RequestBody Comment comment) {
		Comment createdComment = commentRepo.save(comment);
		return new ResponseEntity<Comment>(createdComment, HttpStatus.CREATED);
	}
	
	@PutMapping("/comments/{id}")
	public ResponseEntity<?> updateComment(@PathVariable Long id, @RequestBody Comment comment) {
		if(!commentRepo.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		return new ResponseEntity<Comment>(commentRepo.save(comment), HttpStatus.OK);
	}
	
	@DeleteMapping("/comments/{id}")
	public ResponseEntity<?> deleteComment(@PathVariable Long id) {
		if(!commentRepo.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		commentRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	//get all externals
	@GetMapping("/externals/")
	public ResponseEntity<Iterable<External>> getExternals() {
		Iterable<External> externals = externalRepo.findAll();
		return new ResponseEntity<Iterable<External>>(externals, HttpStatus.OK);
	}
	
	//create new external
	@PostMapping("/externals/")
	public ResponseEntity<?> postExternal(@RequestBody External external) {
		External createdExternal = externalRepo.save(external);
		return new ResponseEntity<External>(createdExternal, HttpStatus.CREATED);
	}
	
	//update external
	@PutMapping("/externals/{id}")
	public ResponseEntity<?> updateExternal(@PathVariable Long id, @RequestBody External external) {
		if(!externalRepo.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		return new ResponseEntity<External>(externalRepo.save(external), HttpStatus.OK);
	}
	
	//delete an external
	@DeleteMapping("/externals/{id}")
	public ResponseEntity<?> deleteExternal(@PathVariable Long id) {
		if(!externalRepo.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		externalRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PutMapping("/sleepperiods/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody SleepPeriod sleepPeriod) {
		log.info("Updating SleepPeriod: {}", sleepPeriod);
		if (!periodRepo.existsById(id)) {
			log.error("A SleepPeriod with id {} doesn't exist", id);
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		SleepPeriod createdSleepPeriod = periodRepo.save(sleepPeriod);
		return new ResponseEntity<SleepPeriod>(createdSleepPeriod, HttpStatus.OK);
	}

	@DeleteMapping("/sleepperiods/{id}")
	public ResponseEntity<?> remove(@PathVariable Long id) {
		log.info("Delete SleepPeriod with id {}", id);
		SleepPeriod sleepPeriod = periodRepo.findById(id).orElse(null);
		if (sleepPeriod == null) {
			log.error("SleepPeriod with id {} doesn't exist", id);
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		periodRepo.delete(sleepPeriod);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
