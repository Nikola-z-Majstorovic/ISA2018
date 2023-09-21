package ftn.ISAProjekat.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import ftn.ISAProjekat.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
	
}
