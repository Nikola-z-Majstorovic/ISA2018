package ftn.ISAProjekat.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.model.Repertoire;
import ftn.ISAProjekat.repository.RepertoireRepository;

@Service
public class RepertoireServiceImp implements RepertoireService {

	@Autowired
	RepertoireRepository repertoireRepository;
	
	@Override
	public List<Repertoire> findAllByCinemaTheaterId(Long cinemaTheaterId) {
		return repertoireRepository.findByCinemaTheaterId(cinemaTheaterId);
	}

	@Override
	public Optional<Repertoire> findById(Long repertoireId) {
		return repertoireRepository.findById(repertoireId);	
	}



}
