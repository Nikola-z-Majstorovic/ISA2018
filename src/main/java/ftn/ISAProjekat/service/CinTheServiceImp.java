package ftn.ISAProjekat.service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.dto.CinTheSumIncom;
import ftn.ISAProjekat.model.CinemaTheater;
import ftn.ISAProjekat.model.Rating;
import ftn.ISAProjekat.repository.CinTheRepository;
import ftn.ISAProjekat.repository.RatingRepository;

@Service
public class CinTheServiceImp implements CinTheService {

	@Autowired
	private CinTheRepository cinTheRepository;
	@Autowired
	private RatingRepository ratingRepository;
	
	@Override
	public List<CinemaTheater> findAll() {
		return cinTheRepository.findAll();
		
	}
	@Override
	public List<CinemaTheater> findByIsCinema(boolean isCinema) {
		return cinTheRepository.findByIsCinema(isCinema);
	}
	@Override
	public CinemaTheater find(Long id) {
		return cinTheRepository.findOne(id);
	}
	@Override
	public CinemaTheater create(CinemaTheater cinemaTheater) {
		CinemaTheater savedCinemaTheater = cinTheRepository.saveAndFlush(cinemaTheater);
		return savedCinemaTheater;
	}

	@Override
	public void delete(Long id) {
		cinTheRepository.delete(id);
	}
	@Override
	public List<CinTheSumIncom> incomeSummuryForPeriod(Date startDate, Date endDate) {
		return cinTheRepository.incomeSummuryForPeriod(startDate,endDate);
	
	}
	@Override
	public List<Rating> getAllRatings() {
		return ratingRepository.findAll();
	}
	@Override
	public List<Rating> createRating(Rating rating) {
		ratingRepository.save(rating);
		return ratingRepository.findAll();
	}

}
