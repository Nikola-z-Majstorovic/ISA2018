package ftn.ISAProjekat.service;

import java.sql.Date;
import java.util.List;

import ftn.ISAProjekat.dto.CinTheSumIncom;
import ftn.ISAProjekat.model.CinemaTheater;
import ftn.ISAProjekat.model.Rating;

public interface CinTheService {

	List<CinemaTheater> findAll();
	
	List<CinemaTheater> findByIsCinema(boolean isCinema);
	
	CinemaTheater find(Long id);

	CinemaTheater create(CinemaTheater cinemaTheater);

	void delete(Long id);

	List<CinTheSumIncom> incomeSummuryForPeriod(Date startDate, Date endDate);

	List<Rating> getAllRatings();

	List<Rating> createRating(Rating rating);







	
}
