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
public class Comment {

	@Id
	@GeneratedValue
	private Long id;
	private String text;
	private LocalDateTime time;
	@ManyToOne
	private User user;

	public Comment(String text, LocalDateTime time, User user) {
		this.text = text;
		this.time = time;
		this.user = user;
	}
}
