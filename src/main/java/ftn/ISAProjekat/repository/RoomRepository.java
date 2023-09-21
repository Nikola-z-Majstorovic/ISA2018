package ftn.ISAProjekat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.ISAProjekat.model.Room;

public interface RoomRepository extends  JpaRepository<Room, Long>{

	List<Room> findByCinemaTheaterId(Long cinemaTheaterId);

	
}
