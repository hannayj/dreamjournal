package eg.sleepdiary.domain;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Long>{

	List<Comment> findAllByCommentDateBetween(Timestamp start, Timestamp end);
}
