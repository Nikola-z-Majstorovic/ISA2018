package ftn.ISAProjekat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.model.CinemaTheater;
import ftn.ISAProjekat.services.CinTheService;

@RestController
public class CinTheCtrl {

	@Autowired
	private CinTheService cinTheService;
	
	@RequestMapping(
			value = "/cinThe/getAll/{isCinema}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	public List<CinemaTheater> getAll(@PathVariable boolean isCinema){

		List<CinemaTheater>cinema= cinTheService.findByIsCinema(isCinema);
		return cinema;
	}
	
//	@RequestMapping(
//			value = "/cinThe/getAll",
//			method = RequestMethod.GET,
//			produces = MediaType.APPLICATION_JSON_VALUE			
//			)
//	public List<CinemaTheater> getAll(){ 
//			return cinTheService.findAll(); 
//	}
	@RequestMapping(
			value = "/cinThe/create",
			method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE		
			)
	public ResponseEntity<CinemaTheater> create(CinemaTheater cinemaTheater) {
		CinemaTheater savedCinemaTheater= cinTheService.create(cinemaTheater);
		return new ResponseEntity<CinemaTheater>(savedCinemaTheater,HttpStatus.CREATED);
	}
	@RequestMapping(
			value = "/cinThe/update",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE		
			)
	public ResponseEntity<CinemaTheater> update(CinemaTheater cinemaTheater) {
		if(cinemaTheater.getId()!=null) {
			CinemaTheater updatedCinemaTheater= cinTheService.create(cinemaTheater);
			return new ResponseEntity<CinemaTheater>(updatedCinemaTheater,HttpStatus.CREATED);
		}else {
			return new ResponseEntity<CinemaTheater>(HttpStatus.CONFLICT);
		}
	}
	@RequestMapping(
			value = "/cinThe/delete/{id}",
			method = RequestMethod.DELETE		
			)
	public void deleteEntity(@PathVariable long id) {
		cinTheService.delete(id);
	}
}
