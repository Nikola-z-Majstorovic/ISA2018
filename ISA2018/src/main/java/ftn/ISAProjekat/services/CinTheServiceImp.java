package ftn.ISAProjekat.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.model.CinemaTheater;
import ftn.ISAProjekat.repository.CinTheRepository;

@Service
public class CinTheServiceImp implements CinTheService {

	@Autowired
	CinTheRepository cinTheRepository;

	@Override
	public List<CinemaTheater> findAll() {
		return cinTheRepository.findAll();
		
	}
	@Override
	public List<CinemaTheater> findByIsCinema(boolean isCinema) {
		return cinTheRepository.findByIsCinema(isCinema);
	}

	@Override
	public CinemaTheater create(CinemaTheater cinemaTheater) {
		CinemaTheater savedCinemaTheater = cinTheRepository.save(cinemaTheater);
		return savedCinemaTheater;
	}

	@Override
	public void delete(Long id) {
		cinTheRepository.deleteById(id);
	}




}
