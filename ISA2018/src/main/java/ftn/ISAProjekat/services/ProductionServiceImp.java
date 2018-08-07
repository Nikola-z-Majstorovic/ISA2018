package ftn.ISAProjekat.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.model.Production;
import ftn.ISAProjekat.repository.ProductionRepository;

@Service
public class ProductionServiceImp implements ProductionService{

	@Autowired
	private ProductionRepository productionRepository;
	
	@Override
	public Collection<Production> findByIsMovie(boolean isMovie) {
		return productionRepository.findByIsMovie(isMovie);
	}



}
