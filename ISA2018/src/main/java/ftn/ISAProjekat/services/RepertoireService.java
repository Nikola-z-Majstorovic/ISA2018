package ftn.ISAProjekat.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;

import ftn.ISAProjekat.model.Repertoire;

public interface RepertoireService  {


	@Query("SELECT * FROM repertoire R where R.cinemaTheaterId = ?1")
	List<Repertoire> findAllByCinemaTheaterId(Long cinemaTheater);

	Optional<Repertoire> findById(Long repertoireId);
}
