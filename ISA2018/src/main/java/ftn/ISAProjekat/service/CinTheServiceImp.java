package ftn.ISAProjekat.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.dto.CinTheSumIncom;
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
		return	cinTheRepository.incomeSummuryForPeriod();
//		List<CinemaTheater> list = cinTheRepository.incomeSummuryForPeriod();
//		return new ArrayList<CinTheSumIncom>();
		
	}





}
