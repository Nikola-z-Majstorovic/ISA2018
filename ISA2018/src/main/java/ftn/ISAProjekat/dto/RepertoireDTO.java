package ftn.ISAProjekat.dto;


import java.util.Set;

import ftn.ISAProjekat.model.Reservation;

public class RepertoireDTO {

	private boolean active;
		
	private float price;
	
//	private CinemaTheater cinemaTheater;
//	
//	private Room room;
//	
//	private Production production;

	private Set<Reservation> reservations;
	
	public RepertoireDTO() {
		// TODO Auto-generated constructor stub
	}

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

//	public CinemaTheater getCinemaTheater() {
//		return cinemaTheater;
//	}
//
//	public void setCinemaTheater(CinemaTheater cinemaTheater) {
//		this.cinemaTheater = cinemaTheater;
//	}
//
//	public Room getRoom() {
//		return room;
//	}
//
//	public void setRoom(Room room) {
//		this.room = room;
//	}
//
//	public Production getProduction() {
//		return production;
//	}
//
//	public void setProduction(Production production) {
//		this.production = production;
//	}

	public Set<Reservation> getReservations() {
		return reservations;
	}

	public void setReservations(Set<Reservation> reservations) {
		this.reservations = reservations;
	}

}
