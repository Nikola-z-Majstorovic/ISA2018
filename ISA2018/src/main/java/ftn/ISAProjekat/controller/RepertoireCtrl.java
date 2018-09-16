package ftn.ISAProjekat.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.dto.CinemaEarn;
import ftn.ISAProjekat.dto.RepertoireIncom;
import ftn.ISAProjekat.model.Repertoire;
import ftn.ISAProjekat.service.RepertoireService;

@RestController
public class RepertoireCtrl {

	@Autowired
	private RepertoireService repertoireService;

	@RequestMapping(
			value = "/repertoire/getAll/{cinemaTheaterId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	public List<Repertoire> getRepertoires(@PathVariable Long cinemaTheaterId) {		
		 return repertoireService.getAll(cinemaTheaterId);
	}
	@RequestMapping(
			value = "/repertoire/incomeSummuryForPeriod",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	private List<RepertoireIncom> incomeSummuryForPeriod(@RequestBody CinemaEarn cinemaEarn) {
		return repertoireService.incomeSummuryForPeriod(cinemaEarn.getStartDate(),cinemaEarn.getEndDate());
	}
	@RequestMapping(
			value = "/repertoire/get/{repertoireId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	private Repertoire getRepertoire(@PathVariable Long repertoireId) {
		return repertoireService.get(repertoireId);
	}
	@RequestMapping(
			value = "/repertoire/getEveryRepertoire",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	private List<Repertoire> getEveryRepertopire() {
		return repertoireService.getAll();
	}
	@RequestMapping(
			value = "/repertoire/create",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE
			)
	private void createRepertopire(@RequestBody Repertoire repertoire) {
		repertoireService.createRepertoire(repertoire);
	}
	@RequestMapping(
			value = "/repertoire/update",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE
			)
	private void updateRepertoire(@RequestBody Repertoire repertoire) {
		 repertoireService.createRepertoire(repertoire);
	}
	@RequestMapping(
			value = "/repertoire/delete/{id}",
			method = RequestMethod.DELETE,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	private void deleteRepertoire(@PathVariable Long id) {
		 repertoireService.delete(id);
	}
}

