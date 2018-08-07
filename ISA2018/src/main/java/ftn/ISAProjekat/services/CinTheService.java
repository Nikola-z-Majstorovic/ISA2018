package ftn.ISAProjekat.services;

import java.util.Collection;

import ftn.ISAProjekat.model.CinemaTheater;

public interface CinTheService {

	Collection<CinemaTheater> findByIsCinema(boolean isCinema);

	CinemaTheater create(CinemaTheater cinemaTheater);

	void delete(long id);

	Collection<CinemaTheater> findAll();



	
}
