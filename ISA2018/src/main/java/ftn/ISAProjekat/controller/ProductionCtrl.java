package ftn.ISAProjekat.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.model.Production;
import ftn.ISAProjekat.services.ProductionService;

@RestController
public class ProductionCtrl {

	@Autowired
	private ProductionService productionService;
	
	@RequestMapping(
			value = "/production/getAll/{isMovie}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	public List<Production> getProductions(@PathVariable boolean isMovie) {
		return productionService.findByIsMovie(isMovie);
	}
	
}
