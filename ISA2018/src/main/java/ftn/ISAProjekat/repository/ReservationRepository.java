package ftn.ISAProjekat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.ISAProjekat.model.Reservation;

public interface ReservationRepository extends  JpaRepository<Reservation, Long>{

	List<Reservation> findByRepertoireId(Long repertoireId);

}
