package ftn.ISAProjekat.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.model.Reservation;
import ftn.ISAProjekat.services.ReservationService;

@RestController
public class ReservationCtrl {

	@Autowired
	private ReservationService reservationService;
	
	@RequestMapping(
			value = "/reservation/makeReservation",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE
			)
	public void makeReservation(@RequestBody Reservation reservation) {	
		reservationService.createReservation(reservation);		
	}
	@RequestMapping(
			value = "/reservation/getAll/{repertoireId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	public List<Reservation> getAll(@PathVariable Long repertoireId) {	
		return reservationService.findByRepertoireId(repertoireId);
	}
}
