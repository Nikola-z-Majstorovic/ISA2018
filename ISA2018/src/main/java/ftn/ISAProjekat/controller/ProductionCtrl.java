package ftn.ISAProjekat.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.model.Production;
import ftn.ISAProjekat.model.ProductionRating;
import ftn.ISAProjekat.service.ProductionService;

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
	@RequestMapping(
			value = "/production/findAll",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	public List<Production> findAll() {		
		return productionService.findAll();		
	}
	@RequestMapping(
			value = "/production/getAllRatings",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	public List<ProductionRating> getAllRatings(){
		return productionService.getAllRatings();			
	}
	@RequestMapping(
			value = "/production/giveRating",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE		
			)
	public ResponseEntity<List<ProductionRating>> create(@RequestBody ProductionRating rating) {
		List<ProductionRating> savedRating= productionService.createRating(rating);
		return new ResponseEntity<List<ProductionRating>>(savedRating,HttpStatus.CREATED);
	}
	@RequestMapping(
			value = "/production/create",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE
			)
	public void create(@RequestBody Production production) {		
		 productionService.create(production);		
	}
	@RequestMapping(
			value = "/production/update",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE
			)
	public ResponseEntity<Production> update(@RequestBody Production production) {		
		if(production.getId()!=null) {
			Production updatedProduction= productionService.create(production);
			return new ResponseEntity<Production>(updatedProduction,HttpStatus.CREATED);
		}else {
			return new ResponseEntity<Production>(HttpStatus.CONFLICT);
		}	
	}
	@RequestMapping(
			value = "/production/delete/{id}",
			method = RequestMethod.DELETE
			)
	public void delete(@PathVariable Long id) {		
		 productionService.delete(id);		
	}
}
