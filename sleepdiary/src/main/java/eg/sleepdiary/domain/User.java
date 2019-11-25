package eg.sleepdiary.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String name, firstName, lastName, email;
	private String password;
	private UserLevel userLevel;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="user")
	private List<Comment> comments;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="user")
	private List<SleepPeriod> sleepPeriods;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="user")
	private List<External> externals;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Permission> users;
	
	@OneToMany(mappedBy = "supervisor", cascade = CascadeType.ALL)
	private List<Permission> supervisors = new ArrayList<>();
	
	public User(String name, String firstName, String lastName, String email, 
			String password, UserLevel userLevel) {
		this.name = name;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.userLevel = userLevel;
	}

	public User(String name, String firstName, String lastName, String email, 
			String password, UserLevel userLevel, Permission... permissions) {
		this.name = name;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.userLevel = userLevel;
		for(Permission p : permissions) {
			p.setUser(this);
		}
		this.supervisors = Stream.of(permissions).collect(Collectors.toList());
	}
	
}
