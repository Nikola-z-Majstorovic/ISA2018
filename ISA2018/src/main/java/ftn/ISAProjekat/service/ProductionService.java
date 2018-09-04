package ftn.ISAProjekat.service;

import java.util.List;

import ftn.ISAProjekat.model.Production;

public interface ProductionService {

	List<Production> findByIsMovie(boolean isMovie);
	
	List<Production> findAll();

	Production create(Production production);

	void delete(Long id);
}
