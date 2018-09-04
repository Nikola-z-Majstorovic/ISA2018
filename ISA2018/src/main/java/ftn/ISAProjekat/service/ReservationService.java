package ftn.ISAProjekat.service;


import java.util.List;

import ftn.ISAProjekat.model.Reservation;

public interface ReservationService {

	void createReservation(Reservation reservation);

	List<Reservation> findByUserId(Long userId);

	void deleteReservation(Long id);

	void deleteExpiredReservations();

	List<Reservation> findById(Long repertoireId);


}
