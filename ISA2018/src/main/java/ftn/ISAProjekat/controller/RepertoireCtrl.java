package ftn.ISAProjekat.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.dto.DTOAll;
import ftn.ISAProjekat.model.CinemaTheater;
import ftn.ISAProjekat.model.Repertoire;
import ftn.ISAProjekat.repository.CinTheRepository;
import ftn.ISAProjekat.repository.RepertoireRepository;

@RestController
public class RepertoireCtrl {

	@Autowired
	private RepertoireRepository repertoireRepository;
	
	@Autowired
	private CinTheRepository cinrep;

	@RequestMapping(value = "/repertoire/getAll", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<DTOAll> getRepertoire() {
//			List<Repertoire> repertoires =  repertoireRepository.findAll();
//			
//			List<RepertoireDTO> allRepertoires= new ArrayList<>();
//			
//		for (Repertoire repertoire : repertoires) {
//			RepertoireDTO repertoireDTO = new RepertoireDTO();
//			
//			repertoireDTO.setCinemaTheater(repertoire.getCinemaTheater());
//			
//			allRepertoires.add(repertoireDTO);
//		}
//		
//		return allRepertoires;
		
		List<DTOAll> listDtos = new ArrayList<>();

		for(Repertoire repertoire : repertoireRepository.findAll())
		{
			DTOAll dtoAll = new DTOAll();
			dtoAll.setActive(repertoire.isActive());
			dtoAll.setCinemaTheater(repertoire.getCinemaTheater());
			dtoAll.setPrice(repertoire.getPrice());
			dtoAll.setProduction(repertoire.getProduction());
			dtoAll.setProduction(repertoire.getProduction());
			dtoAll.setRoom(repertoire.getRoom());
			
			listDtos.add(dtoAll);
		}
		
		return  listDtos;
	}

}
