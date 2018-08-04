package ftn.ISAProjekat.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.ISAProjekat.model.Production;

public interface ProductionRepository extends JpaRepository<Production, Long>{

	 Collection<Production> findByIsMovie(boolean isMovie);
}
