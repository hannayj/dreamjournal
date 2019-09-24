package eg.sleepdiary.domain;

import java.sql.Timestamp;
import java.time.Duration;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 
 * @author jaripeks A class that represents the SleepPeriod table in the database
 *
 */
@Entity
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

	public SleepPeriod() {
		super();
	}

	public SleepPeriod(Timestamp start, Timestamp end, User user) {
		super();
		this.startTime = start;
		this.endTime = end;
		this.user = user;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Timestamp getStartTime() {
		return startTime;
	}

	public void setStartTime(Timestamp start) {
		this.startTime = start;
	}

	public Timestamp getEndTime() {
		return endTime;
	}

	public void setEndTime(Timestamp end) {
		this.endTime = end;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
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

	@Override
	public String toString() {
		return "SleepPeriod [id=" + id + ", startTime=" + startTime + ", endTime=" + endTime + ", user=" + user + "]";
	}

}
