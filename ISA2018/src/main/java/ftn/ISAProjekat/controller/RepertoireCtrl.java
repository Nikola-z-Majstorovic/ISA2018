package ftn.ISAProjekat.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.model.Repertoire;
import ftn.ISAProjekat.services.RepertoireService;

@RestController
public class RepertoireCtrl {

	@Autowired
	private RepertoireService repertoireService;
	
	@RequestMapping(
			value = "/repertoire/getAll",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	@ResponseBody
	public Collection<Repertoire> getRepertoire() {
		
		if(repertoireService.findAll()!=null) {
			Collection<Repertoire> pera =  repertoireService.findAll();
			
			return pera;
		} 
			return null;
		
	}

}
