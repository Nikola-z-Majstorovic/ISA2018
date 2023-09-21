package ftn.ISAProjekat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.model.Room;
import ftn.ISAProjekat.service.RoomService;

@RestController
public class RoomCtrl {
	
	@Autowired
	private RoomService roomService;
	
	@RequestMapping(
			value = "/room/findAll/{cinemaTheaterId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	public List<Room> getAll(@PathVariable Long cinemaTheaterId){
		return roomService.findAll(cinemaTheaterId);			
	}

}
