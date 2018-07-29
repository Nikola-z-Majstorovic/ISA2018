package ftn.ISAProjekat.repository.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.model.CinemaTheater;
import ftn.ISAProjekat.repository.CinTheRepository;

@Service
public class CinTheServiceImp implements CinTheService {

	@Autowired
	CinTheRepository cinTheRepository;

	@Override
	public Collection<CinemaTheater> findByIsCinema(boolean isCinema) {
		return cinTheRepository.findByIsCinema(isCinema);
	}

	@Override
	public CinemaTheater create(CinemaTheater cinemaTheater) {
		CinemaTheater savedCinemaTheater = cinTheRepository.save(cinemaTheater);
		return savedCinemaTheater;
	}





	



}
