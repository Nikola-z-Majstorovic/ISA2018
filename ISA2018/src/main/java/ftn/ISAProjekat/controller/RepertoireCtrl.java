package ftn.ISAProjekat.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.dto.RepertoireDTO;
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
	public List<RepertoireDTO> getRepertoire() {	
			List<Repertoire> repertoires =  repertoireService.findAll();
			
			List<RepertoireDTO> allRepertoires= new ArrayList<>();
			
		    for (Repertoire repertoire : repertoires) {
		    	RepertoireDTO repertoireDTO = new RepertoireDTO();
//				repertoireDTO.setCinemaTheater(repertoire.getCinemaTheater());
				repertoireDTO.setActive(repertoire.isActive());
				repertoireDTO.setPrice(repertoire.getPrice());
//				repertoireDTO.setProduction(repertoire.getProduction());
				repertoireDTO.setReservations(repertoire.getReservations());
//				repertoireDTO.setRoom(repertoire.getRoom());
				allRepertoires.add(repertoireDTO);
			}
			
			return allRepertoires;
		
		
	}

}
