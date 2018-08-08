package ftn.ISAProjekat.services;

import java.util.List;

import ftn.ISAProjekat.model.CinemaTheater;

public interface CinTheService {

	List<CinemaTheater> findByIsCinema(boolean isCinema);

	CinemaTheater create(CinemaTheater cinemaTheater);

	void delete(Long id);

	List<CinemaTheater> findAll();



	
}
