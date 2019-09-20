package eg.sleepdiary.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class External {

	@Id
	@GeneratedValue
	private Long id;
	private LocalDateTime time;
	private Integer quantity;
	@ManyToOne
	private User user;
	private ExternalType externalType;

	public External(LocalDateTime time, Integer quantity, User user, ExternalType externalType) {
		this.time = time;
		this.quantity = quantity;
		this.user = user;
		this.externalType = externalType;
	}
}
