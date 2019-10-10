package eg.sleepdiary.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import eg.sleepdiary.domain.User;
import eg.sleepdiary.domain.UserRepository;

/**
 * 
 * @author hannayj
 */

@Service
public class UserDetailServiceImpl implements UserDetailsService {
	private final UserRepository repository;
	
	@Autowired
	public UserDetailServiceImpl(UserRepository userRepository) {
		this.repository = userRepository;
	}
	@Override
	public UserDetails loadUserByUsername(String name) throws
	UsernameNotFoundException {
		User curruser = repository.findByName(name);
		UserDetails user = new org.springframework.security.core.userdetails.User(name, curruser.getPassword(),
				AuthorityUtils.createAuthorityList(curruser.getUserLevel().toString()));
		return user;
	}

}
