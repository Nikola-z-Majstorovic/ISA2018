package ftn.ISAProjekat.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import ftn.ISAProjekat.dto.CinTheSumIncom;
import ftn.ISAProjekat.model.CinemaTheater;

public interface CinTheRepository extends JpaRepository<CinemaTheater, Long>{

	 List<CinemaTheater> findByIsCinema(boolean isCinema);

	 @Query(value="SELECT CinThe.id AS CinTheId, CinThe.Name AS CinTheName, SUM(REP.price) As MoneySum FROM cinema_theater CinThe "
				+ "INNER JOIN repertoire REP ON REP.cinema_theater_id = CinThe.id "
				+ "INNER JOIN reservation RES ON RES.repertoire_id = REP.id  "
				+ "WHERE REP.time_of_display >= ?1 AND REP.time_of_display <= ?2 "
				+ "GROUP BY CinThe.id, CinThe.Name",nativeQuery=true)
	List<CinTheSumIncom> incomeSummuryForPeriod(Date startDate,Date endDate);

	 
}	
