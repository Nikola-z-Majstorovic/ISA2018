package ftn.ISAProjekat.repository.services;

import java.util.Collection;

import ftn.ISAProjekat.model.CinemaTheater;

public interface CinTheService {

	Collection<CinemaTheater> findByIsCinema(boolean isCinema);

	CinemaTheater create(CinemaTheater cinemaTheater);



	
}
