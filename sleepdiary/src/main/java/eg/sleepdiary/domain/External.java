package eg.sleepdiary.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;

/**
 * 
 * @author marhyvar A class that represents the External table in the database
 *
 */

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class External {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name="userid")
	private User user;
	private Timestamp dateTime;
	private ExternalType externalType;
	private int quantity;
	
	public External(User user, Timestamp dateTime, ExternalType externalType, int quantity) {
		super();
		this.user = user;
		this.dateTime = dateTime;
		this.externalType = externalType;
		this.quantity = quantity;
	}
		
}
