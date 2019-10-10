package eg.sleepdiary.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
	@Column(name = "id", nullable = false, updatable = false)
	private long id;

	@Column(name = "name", nullable = false, unique = true)
	private String name;
	
	@Column(name = "password", nullable = false)
	private String password;
	
	@Column(name = "userLevel", nullable = false)
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