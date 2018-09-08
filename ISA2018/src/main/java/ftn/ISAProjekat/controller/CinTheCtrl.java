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

import ftn.ISAProjekat.dto.CinTheSumIncom;
import ftn.ISAProjekat.dto.CinemaEarn;
import ftn.ISAProjekat.model.CinemaTheater;
import ftn.ISAProjekat.model.Rating;
import ftn.ISAProjekat.service.CinTheService;

@RestController
public class CinTheCtrl {

	@Autowired
	private CinTheService cinTheService;
	
//	public static Date parseDate(String date) {
//		try {
//			DateFormat f = new SimpleDateFormat("yyyy-MM-dd");
//			return f.parse(date);
//		} catch (ParseException e) {
//			return null;
//		}
//	}
		
	@RequestMapping(
			value = "/cinThe/getAll/{isCinema}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	public List<CinemaTheater> getAll(@PathVariable boolean isCinema){
		return cinTheService.findByIsCinema(isCinema);			
	}
	@RequestMapping(
			value = "/cinThe/find/{id}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	public CinemaTheater find(@PathVariable Long id){
		return cinTheService.find(id);			
	}
	@RequestMapping(
			value = "/cinThe/incomeSummuryForPeriod",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes= MediaType.APPLICATION_JSON_VALUE
			)
	public List<CinTheSumIncom> incomeSummuryForPeriod(@RequestBody CinemaEarn cinemaEarn){
		List<CinTheSumIncom> list=cinTheService.incomeSummuryForPeriod(cinemaEarn.getStartDate(), cinemaEarn.getEndDate());
		return 	list;		
	}
	@RequestMapping(
			value = "/cinThe/findAll",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	public List<CinemaTheater> findAll(){
		return cinTheService.findAll();			
	}
	@RequestMapping(
			value = "/cinThe/getAllRatings",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	public List<Rating> getAllRatings(){
		return cinTheService.getAllRatings();			
	}
	@RequestMapping(
			value = "/cinThe/giveRating",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE		
			)
	public ResponseEntity<List<Rating>> create(@RequestBody Rating rating) {
		List<Rating> savedRating= cinTheService.createRating(rating);
		return new ResponseEntity<List<Rating>>(savedRating,HttpStatus.CREATED);
	}
	
	@RequestMapping(
			value = "/cinThe/create",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE		
			)
	public ResponseEntity<CinemaTheater> create(@RequestBody CinemaTheater cinemaTheater) {
		CinemaTheater savedCinemaTheater= cinTheService.create(cinemaTheater);
		return new ResponseEntity<CinemaTheater>(savedCinemaTheater,HttpStatus.CREATED);
	}
	@RequestMapping(
			value = "/cinThe/update",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE		
			)
	public ResponseEntity<CinemaTheater> update(@RequestBody CinemaTheater cinemaTheater) {
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
