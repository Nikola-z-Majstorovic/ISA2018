package ftn.ISAProjekat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.model.Room;
import ftn.ISAProjekat.repository.RoomRepository;

@Service
public class RoomServiceImp implements RoomService{

	@Autowired 
	private RoomRepository roomRepository;

	@Override
	public List<Room> findAll(Long cinemaTheaterId) {
		return roomRepository.findByCinemaTheaterId(cinemaTheaterId);
	}



	
}
