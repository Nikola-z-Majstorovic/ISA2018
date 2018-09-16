package ftn.ISAProjekat.service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.dto.RepertoireIncom;
import ftn.ISAProjekat.model.Repertoire;
import ftn.ISAProjekat.repository.RepertoireRepository;

@Service
public class RepertoireServiceImp implements RepertoireService {

	@Autowired
	RepertoireRepository repertoireRepository;
	
//	@Override
//	public Repertoire findById(Long repertoireId) {
//		return repertoireRepository.findOne(repertoireId);	
//	}


	@Override
	public List<Repertoire> getAll(Long cinemaTheaterId) {
		return repertoireRepository.findByCinemaTheaterId(cinemaTheaterId);
	}



	@Override
	public Repertoire get(Long repertoireId) {
		return repertoireRepository.findOne(repertoireId);
	}



	@Override
	public void createRepertoire(Repertoire repertoire) {
		repertoireRepository.save(repertoire);
	}



	@Override
	public void delete(Long id) {
		repertoireRepository.delete(id);
	}



	@Override
	public List<Repertoire> getAll() {
		return repertoireRepository.findAll();
	}



	@Override
	public List<RepertoireIncom> incomeSummuryForPeriod(Date startDate, Date endDate) {
		 List<RepertoireIncom> list = repertoireRepository.incomeSummuryForPeriod(startDate,endDate); 
		return list;
	}



}
