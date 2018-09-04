package ftn.ISAProjekat.service;

import java.util.List;

import ftn.ISAProjekat.model.Room;

public interface RoomService {

	List<Room> findAll(Long cinemaTheaterId);

}
