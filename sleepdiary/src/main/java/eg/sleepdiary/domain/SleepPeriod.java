package eg.sleepdiary.domain;

import java.time.Duration;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
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
@AllArgsConstructor
public class SleepPeriod {
	
	@Id
	@GeneratedValue
	private Long id;
	private LocalDateTime startTime;
	private LocalDateTime endTime;
	private SleepQuality sleepQuality;
	@ManyToOne
	private User user;

	public SleepPeriod(LocalDateTime startTime, LocalDateTime endTime, SleepQuality sleepQuality, User user) {
		this.startTime = startTime;
		this.endTime = endTime;
		this.sleepQuality = sleepQuality;
		this.user = user;
	}
	/**
	 * 
	 * @return the difference of endtime and starttime for SleepPeriod in Timestamp.
	 *         The return value is in the following format "yy-MM-dd HH:mm:ss"
	 * 
	 */
	public long getDuration() {
		return Duration.between(startTime, endTime).toHours();
	}

}
