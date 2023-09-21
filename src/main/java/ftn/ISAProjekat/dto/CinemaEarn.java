package ftn.ISAProjekat.dto;

import java.io.Serializable;
import java.sql.Date;

public class CinemaEarn implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Date startDate;
	
	private Date endDate;
	
	public CinemaEarn() {
		// TODO Auto-generated constructor stub
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
