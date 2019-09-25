package eg.sleepdiary.web;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import eg.sleepdiary.domain.SleepPeriod;
import eg.sleepdiary.domain.SleepPeriodRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api")
public class SleepPeriodApiController {

	@Autowired
	private SleepPeriodRepository periodRepo;
	
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
}
