package eg.sleepdiary.domain;

import java.sql.Timestamp;
import java.time.Duration;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @author jaripeks A class that represents the SleepPeriod table in the database
 *
 */
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class SleepPeriod {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private Timestamp startTime;
	private Timestamp endTime;
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name="userid")
	private User user;


	public SleepPeriod(Timestamp start, Timestamp end, User user) {
		super();
		this.startTime = start;
		this.endTime = end;
		this.user = user;
	}

	/**
	 * 
	 * @return the difference of endtime and starttime for SleepPeriod in Timestamp.
	 *         The return value is in the following format "yy-MM-dd HH:mm:ss"
	 * 
	 */
	public long getDuration() {
		return Duration.between(startTime.toInstant(), endTime.toInstant()).toHours();
	}

}
