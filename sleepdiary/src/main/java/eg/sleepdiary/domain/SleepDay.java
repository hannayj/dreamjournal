package eg.sleepdiary.domain;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class SleepDay {
	
	private String day;
	private List<SleepPeriod> periods;
	private Comment comment;
	
	public SleepDay(String day, List<SleepPeriod> periods, List<Comment> comments) {
		this.day = day;
		this.periods = periods;
		this.comment = comments.get(0);
	}
}
