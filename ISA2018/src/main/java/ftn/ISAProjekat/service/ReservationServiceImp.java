package ftn.ISAProjekat.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.model.Reservation;
import ftn.ISAProjekat.repository.ReservationRepository;

@Service
public class ReservationServiceImp implements ReservationService{

	@Autowired
	private ReservationRepository reservationRepository;
	
	@Override
	public void createReservation(Reservation reservation) {
		reservationRepository.save(reservation);
	}

	@Override
	public List<Reservation> findByUserId(Long repertoireId) {
		return reservationRepository.findByUserId(repertoireId);
	
	}

	@Override
	public void deleteReservation(Long id) {
		reservationRepository.delete(id);
	}

	@Override
	public void deleteExpiredReservations() {
		reservationRepository.deleteExpiredReservations();		
	}

	@Override
	public List<Reservation> findById(Long repertoireId) {
		return reservationRepository.findByRepertoireId(repertoireId);
	}

	

}
