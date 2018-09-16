package ftn.ISAProjekat.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import ftn.ISAProjekat.dto.RepertoireIncom;
import ftn.ISAProjekat.model.Repertoire;

public interface RepertoireRepository extends JpaRepository<Repertoire, Long>  {

	List<Repertoire> findByCinemaTheaterId(Long cinemaTheaterId);
	
	
	@Query(value= "SELECT SUM(REP.price) AS MoneySum, REP.price AS Price  ,PROD.name AS ProductionName, REP.id AS RepertoireId , REP.time_of_display AS TimeOfDisplay FROM repertoire REP " + 
			"INNER JOIN reservation RES ON RES.repertoire_id = REP.id " + 
			"INNER JOIN production PROD ON PROD.id = REP.production_id " +
			"WHERE RES.approved = 1 AND REP.time_of_display >= ?1 AND REP.time_of_display <= ?2 "  + 
			"GROUP BY REP.id, REP.price,PROD.name",nativeQuery=true)
	List<RepertoireIncom> incomeSummuryForPeriod(Date startDate, Date endDate);

}
