package ftn.ISAProjekat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import ftn.ISAProjekat.model.Reservation;

public interface ReservationRepository extends  JpaRepository<Reservation, Long>{

	List<Reservation> findByUserId(Long repertoireId);
	
	@Transactional
	@Modifying
	@Query(value= "DELETE R FROM reservation R INNER JOIN repertoire REP ON REP.id = R.repertoire_id WHERE REP.time_of_display < CURDATE() AND R.approved = false",nativeQuery=true)
	void deleteExpiredReservations();

	@Query(value= "SELECT * FROM Reservation WHERE repertoire_id=?1",nativeQuery=true)
	List<Reservation> findByRepertoireId(Long repertoireId);
	

}
