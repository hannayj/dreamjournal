package eg.sleepdiary.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/**
 * 
 * @author jaripeks
 * A class that represents the SleepQuality table in the database
 *
 */
@Entity
public class SleepQuality {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long sleepqualityid;
	private String sleepquality;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "sleepquality")
	private List<SleepPeriod> sleepPeriods;
	
	public SleepQuality() {}
	
	public SleepQuality(String sleepquality) {
		super();
		this.sleepquality = sleepquality;
	}

	public long getSleepqualityid() {
		return sleepqualityid;
	}

	public void setSleepqualityid(long id) {
		this.sleepqualityid = id;
	}

	public String getSleepquality() {
		return sleepquality;
	}

	public void setSleepquality(String sleepquality) {
		this.sleepquality = sleepquality;
	}

	@Override
	public String toString() {
		return "SleepQuality [sleepqualityid=" + sleepqualityid + ", sleepquality=" + sleepquality + "]";
	}
	
}
