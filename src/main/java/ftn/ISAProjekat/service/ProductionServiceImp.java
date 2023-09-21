package ftn.ISAProjekat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.model.Production;
import ftn.ISAProjekat.model.ProductionRating;
import ftn.ISAProjekat.repository.ProductionRatingRepository;
import ftn.ISAProjekat.repository.ProductionRepository;

@Service
public class ProductionServiceImp implements ProductionService{

	@Autowired
	private ProductionRepository productionRepository;

	@Autowired
	private ProductionRatingRepository productionRatingRepository;
	
	@Override
	public List<Production> findByIsMovie(boolean isMovie) {
		return productionRepository.findByIsMovie(isMovie);
	}
	@Override
	public List<Production> findAll() {
		return productionRepository.findAll();
	}

	@Override
	public void delete(Long id) {
		productionRepository.delete(id);
	}
	@Override
	public Production create(Production production) {
		return  productionRepository.save(production);
	}
	@Override
	public List<ProductionRating> getAllRatings() {
		return productionRatingRepository.findAll();
	}
	@Override
	public List<ProductionRating> createRating(ProductionRating rating) {
		productionRatingRepository.save(rating);
		return productionRatingRepository.findAll();
	}



}
