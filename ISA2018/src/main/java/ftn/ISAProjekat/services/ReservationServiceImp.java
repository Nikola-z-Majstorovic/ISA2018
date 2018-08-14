package ftn.ISAProjekat.services;


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
	public List<Reservation> findByRepertoireId(Long repertoireId) {
		return reservationRepository.findByRepertoireId(repertoireId);
	
	}

	

}
