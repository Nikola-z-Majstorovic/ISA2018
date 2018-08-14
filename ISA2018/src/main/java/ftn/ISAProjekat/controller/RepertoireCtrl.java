package ftn.ISAProjekat.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.model.Repertoire;
import ftn.ISAProjekat.services.RepertoireService;

@RestController
public class RepertoireCtrl {

	@Autowired
	private RepertoireService repertoireService;
	
	@RequestMapping(
			value = "/repertoire/getAll/{cinemaTheaterId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	public List<Repertoire> getRepertoires(@PathVariable Long cinemaTheaterId) {	
			List<Repertoire> repertoires=repertoireService.findAllByCinemaTheaterId(cinemaTheaterId);
			return repertoires;
	}
	@RequestMapping(
			value = "/repertoire/get/{repertoireId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	public  Optional<Repertoire> getRepertoire(@PathVariable Long repertoireId) {	
			return repertoireService.findById(repertoireId);		
	}
}

