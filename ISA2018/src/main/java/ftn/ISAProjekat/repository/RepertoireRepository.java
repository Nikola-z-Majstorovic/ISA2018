package ftn.ISAProjekat.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.ISAProjekat.model.Repertoire;

public interface RepertoireRepository extends JpaRepository<Repertoire, Long>  {

	Collection<Repertoire> findByCinemaTheaterId(long cinemaTheaterId);

}
