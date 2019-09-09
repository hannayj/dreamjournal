package eg.sleepdiary.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * 
 * @author jaripeks
 * A class that represents the UNENLAADUT table in the database
 *
 */
@Entity
public class Unenlaatu {
	
	@Id
	private long id;
	private String unenlaatu;
	
	public Unenlaatu(long id, String unenlaatu) {
		super();
		this.id = id;
		this.unenlaatu = unenlaatu;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUnenlaatu() {
		return unenlaatu;
	}

	public void setUnenlaatu(String unenlaatu) {
		this.unenlaatu = unenlaatu;
	}

	@Override
	public String toString() {
		return "Unenlaatu [id=" + id + ", unenlaatu=" + unenlaatu + "]";
	}
	
}
