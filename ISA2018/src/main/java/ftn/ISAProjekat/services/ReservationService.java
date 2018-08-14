package ftn.ISAProjekat.services;


import java.util.List;

import ftn.ISAProjekat.model.Reservation;

public interface ReservationService {

	void createReservation(Reservation reservation);

	List<Reservation> findByRepertoireId(Long repertoireId);

}
