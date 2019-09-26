package eg.sleepdiary.domain;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class DayService {
	
	public List<SleepDay> getDay(String start, String end, SleepPeriodRepository sleepRepo, CommentRepository commentRepo) {
		Timestamp startTime = Timestamp.valueOf(start + " 12:00:00"), endTime = Timestamp.valueOf(end + " 12:00:00");
		LocalDateTime startDateTime = startTime.toLocalDateTime(), endDateTime = endTime.toLocalDateTime();
		List<SleepDay> days = new ArrayList<SleepDay>();

		for(long i = 0; i < ChronoUnit.DAYS.between(startDateTime, endDateTime); i++) {
			Timestamp daystart = Timestamp.valueOf(startDateTime.plusDays(i));
			Timestamp dayend = Timestamp.valueOf(startDateTime.plusDays(i + 1));
			days.add(new SleepDay((daystart + " - " + dayend), sleepRepo.findAllByStartTimeBetween(daystart, dayend),
					commentRepo.findAllByCommentDateBetween(daystart, dayend)));
		}
		
		return days;
	}

}
