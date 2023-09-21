package ftn.ISAProjekat.service;

import java.sql.Date;
import java.util.List;

import ftn.ISAProjekat.dto.RepertoireIncom;
import ftn.ISAProjekat.model.Repertoire;

public interface RepertoireService  {


//	@Query("SELECT * FROM repertoire R where R.cinemaTheaterId = ?1")
//	List<Repertoire> findAllByCinemaTheaterId(Long cinemaTheater);

	List<Repertoire> getAll(Long cinemaTheaterId);

	Repertoire get(Long repertoireId);
	
//	Repertoire findById(Long repertoireId);

	void createRepertoire(Repertoire repertoire);
	
	void delete(Long id);

	List<Repertoire> getAll();

	List<RepertoireIncom> incomeSummuryForPeriod(Date startDate, Date endDate);



}
