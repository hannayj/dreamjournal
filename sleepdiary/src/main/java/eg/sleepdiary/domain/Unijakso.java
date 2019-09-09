package eg.sleepdiary.domain;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 
 * @author jaripeks
 * A class that represents the UNIJAKSOT table in the database
 *
 */
@Entity
public class Unijakso {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private Timestamp alkuaika;
	private Timestamp loppuaika;
	private long unenlaatu;
	
	public Unijakso() {
		super();
	}

	public Unijakso(Timestamp alkuaika, Timestamp loppuaika, long unenlaatu) {
		super();
		this.alkuaika = alkuaika;
		this.loppuaika = loppuaika;
		this.unenlaatu = unenlaatu;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Timestamp getAlkuaika() {
		return alkuaika;
	}

	public void setAlkuaika(Timestamp alkuaika) {
		this.alkuaika = alkuaika;
	}

	public Timestamp getLoppuaika() {
		return loppuaika;
	}

	public void setLoppuaika(Timestamp loppuaika) {
		this.loppuaika = loppuaika;
	}

	public long getUnenlaatu() {
		return unenlaatu;
	}

	public void setUnenlaatu(long unenlaatu) {
		this.unenlaatu = unenlaatu;
	}
	
	/**
	 * 
	 * @return the difference of loppuaika and alkuaika for Unijakso in Timestamp.
	 * The return value is in the following format "yy-MM-dd HH:mm:ss"
	 * 
	 */
	public Timestamp getDuration() {
		Timestamp temp = new Timestamp(loppuaika.getTime() - alkuaika.getTime());
		return temp;
	}

	@Override
	public String toString() {
		return "Unijakso [id=" + id + ", alkuaika=" + alkuaika + ", loppuaika=" + loppuaika + ", unenlaatu=" + unenlaatu
				+ "]";
	}
}
