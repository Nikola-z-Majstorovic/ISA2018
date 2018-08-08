package ftn.ISAProjekat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.ISAProjekat.model.Production;

public interface ProductionRepository extends JpaRepository<Production, Long>{

	 List<Production> findByIsMovie(boolean isMovie);
}
