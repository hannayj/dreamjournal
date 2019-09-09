package eg.sleepdiary.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import eg.sleepdiary.domain.UnijaksoRepository;

/**
 * 
 * @author jaripeks
 * Class that handles incoming HTTP requests
 *
 */
@Controller
public class UnijaksoController {

	@Autowired
	private UnijaksoRepository repo;
	
	/**
	 * @param model
	 * @return name of the html template that lists all unijaksot
	 */
	@GetMapping
	public String getUnijaksot(Model model) {
		model.addAttribute("unijaksot", repo.findAll());
		return "dbTest";
	}
}
