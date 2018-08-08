package ftn.ISAProjekat.dto;

import ftn.ISAProjekat.model.CinemaTheater;
import ftn.ISAProjekat.model.Production;
import ftn.ISAProjekat.model.Room;

public class DTOAll {

	public DTOAll() {
		// TODO Auto-generated constructor stub
	}
	
	private boolean active;
	
	private float price;
	
	private CinemaTheater cinemaTheater;
	
	private Room room;
	
	private Production production;

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public CinemaTheater getCinemaTheater() {
		return cinemaTheater;
	}

	public void setCinemaTheater(CinemaTheater cinemaTheater) {
		this.cinemaTheater = cinemaTheater;
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

	public Production getProduction() {
		return production;
	}

	public void setProduction(Production production) {
		this.production = production;
	}
	
	

}
