package eg.sleepdiary.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
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

import eg.sleepdiary.domain.User;
import eg.sleepdiary.domain.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")

public class UserApiController {
	
	@Autowired
	private UserRepository userRepo;
	
	//get user by id
	@GetMapping("/users/{id}")
	public ResponseEntity<?> getUserById(@PathVariable Long id) {

	        User user = userRepo.findById(id).orElse(null);
			if (user == null) {
				log.error("User with id {} doesn't exist", id);
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
	        return new ResponseEntity<User>(user, HttpStatus.OK);
	    }
	
	//get all users
	@GetMapping("/users/")
	public ResponseEntity<Iterable<User>> findAll() {
		Iterable<User> users = userRepo.findAll();
		return new ResponseEntity<Iterable<User>>(users, HttpStatus.OK);
	}
	
	//create new user
	@PostMapping("/users/")
	public ResponseEntity<?> postUser(@RequestBody User user) {
		User createdUser = userRepo.save(user);
		return new ResponseEntity<User>(createdUser, HttpStatus.CREATED);
	}
	
	//update user
	@PutMapping("/users/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody User user) {
		log.info("Updating User: {}", user);
		if (!userRepo.existsById(id)) {
			log.error("An user with id {} doesn't exist", id);
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		User createdUser = userRepo.save(user);
		return new ResponseEntity<User>(createdUser, HttpStatus.OK);
	}
	
	//delete user
	@DeleteMapping("/users/{id}")
	public ResponseEntity<?> remove(@PathVariable Long id) {
		log.info("Delete User with id {}", id);
		User user = userRepo.findById(id).orElse(null);
		if (user == null) {
			log.error("User with id {} doesn't exist", id);
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		userRepo.delete(user);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
}
