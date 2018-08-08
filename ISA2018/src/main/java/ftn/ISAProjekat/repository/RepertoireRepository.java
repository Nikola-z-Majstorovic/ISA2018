package ftn.ISAProjekat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.ISAProjekat.model.Repertoire;

public interface RepertoireRepository extends JpaRepository<Repertoire, Long>  {

	List<Repertoire> findByCinemaTheaterId(Long cinemaTheaterId);

}
