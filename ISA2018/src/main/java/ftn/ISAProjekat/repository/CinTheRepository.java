package ftn.ISAProjekat.repository;


import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.ISAProjekat.model.CinemaTheater;

public interface CinTheRepository extends JpaRepository<CinemaTheater, Long>{

	 Collection<CinemaTheater> findByIsCinema(boolean isCinema);
	 


	
}
