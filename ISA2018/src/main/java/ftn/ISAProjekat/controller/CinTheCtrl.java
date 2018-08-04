package ftn.ISAProjekat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;


import ftn.ISAProjekat.model.CinemaTheater;
import ftn.ISAProjekat.repository.services.CinTheService;

@RestController
public class CinTheCtrl {

	@Autowired
	private CinTheService cinTheService;
	
	@RequestMapping(
			value = "/cinThe/getAll/{isCinema}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	@ResponseBody
	public Collection<CinemaTheater> getAll(@PathVariable boolean isCinema){
		if(cinTheService.findByIsCinema(isCinema)!=null) {
			return cinTheService.findByIsCinema(isCinema);
		} 
			return null;
	}
	@RequestMapping(
			value = "/cinThe/create",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	@ResponseBody
	public ResponseEntity<CinemaTheater> create(CinemaTheater cinemaTheater) {
		CinemaTheater savedCinemaTheater= cinTheService.create(cinemaTheater);
		return new ResponseEntity<CinemaTheater>(savedCinemaTheater,HttpStatus.CREATED);
	}
	@RequestMapping(
			value = "/cinThe/update",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	@ResponseBody
	public ResponseEntity<CinemaTheater> update(CinemaTheater cinemaTheater) {
		if(cinemaTheater.getId()!=null) {
			CinemaTheater updatedCinemaTheater= cinTheService.create(cinemaTheater);
			return new ResponseEntity<CinemaTheater>(updatedCinemaTheater,HttpStatus.CREATED);
		}else {
			return new ResponseEntity<CinemaTheater>(HttpStatus.CONFLICT);
		}
	}
}
