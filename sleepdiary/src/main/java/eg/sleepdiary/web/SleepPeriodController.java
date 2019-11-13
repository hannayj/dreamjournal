package eg.sleepdiary.web;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import eg.sleepdiary.domain.SleepPeriod;
import eg.sleepdiary.domain.SleepPeriodRepository;

/**
 * 
 * @author jaripeks Class that handles incoming HTTP requests
 * @author marhyvar
 */
@Controller
public class SleepPeriodController {

	@Autowired
	private SleepPeriodRepository periodRepo;
	
	@GetMapping("/test")
	public String testJavas() {
		return "dbTest";
	}
	
	@GetMapping("/testPrint")
	public String testPrint(@RequestParam("startTime") String start,
			@RequestParam("endTime") String end){
		System.out.println(Timestamp.valueOf(start + " 00:00:00") + " " + Timestamp.valueOf(end + " 00:00:00"));
		return "redirect:test";
	}
	
	/**
	 * @param model
	 * @return name of the html template that lists all SleepPeriods
	 */
	@GetMapping("/sleepperiods")
	public String getSleepPeriods(Model model) {
		model.addAttribute("sleepPeriods", periodRepo.findAll());
		return "diary";
	}

	@GetMapping("/sleepperiodsperday")
	public String findSleepPeriods(@RequestParam("startTime") String start,
			@RequestParam("endTime") String end, Model model){
		model.addAttribute("sleepPeriods", periodRepo.findAllByStartTimeBetween(LocalDateTime.parse(start), LocalDateTime.parse(end)));
		return "diary";
	}
	
	// Add sleepPeriod
	@GetMapping("/addSP")
	public String addSleepPeriod(Model model) {
		model.addAttribute("sleepPeriod", new SleepPeriod());
		return "addSleepPeriod";
	}
	
	// Save a sleepPeriod
	@PostMapping("/saveSP")
	public String saveSleepPeriod(SleepPeriod sleepPeriod) {
		periodRepo.save(sleepPeriod);
		return "redirect:diary";
	}
	
	// Edit a sleepPeriod
	@GetMapping("/editSP/{id}")
	public String updateSleepPeriod(@PathVariable("id") Long id, Model model) {
		SleepPeriod sleepPeriod = periodRepo.findById(id).get();
		System.out.println("update sleepPeriod " + sleepPeriod.toString());
		model.addAttribute("sleepPeriod", sleepPeriod);
		return "editSleepPeriod";
	}
	
	// Delete a sleepPeriod
	@GetMapping("/deleteSP/{id}")
	public String deleteSleepPeriod(@PathVariable("id") Long id, Model model) {
    	System.out.println("sleepPeriod "  + id);
    	periodRepo.deleteById(id);
    	return "redirect:../diary";
	}
}
