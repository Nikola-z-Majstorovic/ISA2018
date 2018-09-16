package ftn.ISAProjekat.service;

import java.util.List;

import ftn.ISAProjekat.model.Production;
import ftn.ISAProjekat.model.ProductionRating;

public interface ProductionService {

	List<Production> findByIsMovie(boolean isMovie);
	
	List<Production> findAll();

	Production create(Production production);

	void delete(Long id);

	List<ProductionRating> getAllRatings();

	List<ProductionRating> createRating(ProductionRating rating);
}
