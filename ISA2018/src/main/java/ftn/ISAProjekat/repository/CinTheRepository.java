package ftn.ISAProjekat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.ISAProjekat.model.CinemaTheater;

public interface CinTheRepository extends JpaRepository<CinemaTheater, Long>{

	 List<CinemaTheater> findByIsCinema(boolean isCinema);
	 


	
}
