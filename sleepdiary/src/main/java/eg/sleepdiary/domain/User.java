package eg.sleepdiary.domain;

import java.util.List;

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

	private String name;
	private String password;
	private UserLevel userLevel;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="user")
	private List<Comment> comments;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="user")
	private List<SleepPeriod> sleepPeriods;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="user")
	private List<External> externals;

	public User(String name, String password, UserLevel userLevel) {
		this.name = name;
		this.password = password;
		this.userLevel = userLevel;
	}
	
}
