package ftn.ISAProjekat.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.model.Production;
import ftn.ISAProjekat.repository.services.ProductionService;

@RestController
public class ProductionCtrl {

	@Autowired
	private ProductionService productionService;
	
	@RequestMapping(
			value = "/production/getAll/{isMovie}",
			method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE
			)
	@ResponseBody
	public Collection<Production> getProductions(@PathVariable boolean isMovie) {
		return productionService.findByIsMovie(isMovie);
	}
	
}
