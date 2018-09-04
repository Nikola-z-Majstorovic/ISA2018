package ftn.ISAProjekat.dto;

import java.util.Date;

public class RepertoireIncom {

	private Long id;
	
	private float price;
	
	private float sumPrice;
	
	private Date timeOfDisplay;

	public RepertoireIncom() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public float getSumPrice() {
		return sumPrice;
	}

	public void setSumPrice(float sumPrice) {
		this.sumPrice = sumPrice;
	}

	public Date getTimeOfDisplay() {
		return timeOfDisplay;
	}

	public void setTimeOfDisplay(Date timeOfDisplay) {
		this.timeOfDisplay = timeOfDisplay;
	}
	
	
}
