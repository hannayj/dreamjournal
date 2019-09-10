package eg.sleepdiary.domain;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * 
 * @author jaripeks
 * A class that represents the SleepPeriod table in the database
 *
 */
@Entity
public class SleepPeriod {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long sleepperiodid;
	
	private Timestamp starttime;
	private Timestamp endtime;
	
	@ManyToOne
	@JoinColumn(name = "sleepqualityid")
	private SleepQuality sleepquality;
	
	public SleepPeriod() {
		super();
	}

	public SleepPeriod(Timestamp start, Timestamp end, SleepQuality quality) {
		super();
		this.starttime = start;
		this.endtime = end;
		this.setSleepquality(quality);
	}

	public long getSleepperiodid() {
		return sleepperiodid;
	}

	public void setSleepperiodid(long id) {
		this.sleepperiodid = id;
	}

	public Timestamp getStarttime() {
		return starttime;
	}

	public void setStarttime(Timestamp start) {
		this.starttime = start;
	}

	public Timestamp getEndtime() {
		return endtime;
	}

	public void setEndtime(Timestamp end) {
		this.endtime = end;
	}
	
	public SleepQuality getSleepquality() {
		return sleepquality;
	}

	public void setSleepquality(SleepQuality quality) {
		this.sleepquality = quality;
	}

	/**
	 * 
	 * @return the difference of endtime and starttime for SleepPeriod in Timestamp.
	 * The return value is in the following format "yy-MM-dd HH:mm:ss"
	 * 
	 */
	public Timestamp getDuration() {
		return new Timestamp(endtime.getTime() - starttime.getTime());
	}

	@Override
	public String toString() {
		return "SleepPeriod [sleepperiodid=" + sleepperiodid + ", starttime=" + starttime + ", endtime=" + endtime
				+ ", sleepquality=" + sleepquality + "]";
	}


}
