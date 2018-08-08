package ftn.ISAProjekat.services;

import java.util.List;

import ftn.ISAProjekat.model.Production;

public interface ProductionService {

	List<Production> findByIsMovie(boolean isMovie);

}
