package ftn.ISAProjekat.dto;

import java.sql.Date;

public class CinemaEarn {

	private Date startDate;
	
	private Date endDate;

	public CinemaEarn() {
		super();
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	
}
