package eg.sleepdiary.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import eg.sleepdiary.domain.SleepPeriodRepository;
import eg.sleepdiary.domain.UserRepository;

/**
 * 
 * @author jaripeks Class that handles incoming HTTP requests
 *
 */
@Controller
public class SleepPeriodController {

	@Autowired
	private SleepPeriodRepository periodRepo;

	/**
	 * @param model
	 * @return name of the html template that lists all SleepPeriods
	 */
	@GetMapping("/sleepperiods")
	public String getSleepPeriods(Model model) {
		model.addAttribute("sleepPeriods", periodRepo.findAll());
		return "diary";
	}
}
