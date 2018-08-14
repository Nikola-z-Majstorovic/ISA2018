package ftn.ISAProjekat.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity
public class Repertoire implements Serializable {

	
	/**
	 * 1 Repertoire 1 Cinema 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private boolean active;
	
	@Column(nullable = false)
	private float price;
	
	@ManyToOne(optional = false)
	@JoinColumn(name="cinema_theater_id")
	@JsonBackReference("a")
	private CinemaTheater cinemaTheater;
	
	@ManyToOne(optional = false)
	@JoinColumn(name="room_id")
	@JsonBackReference("b")
	private Room room;
	
	@ManyToOne(optional = false)
	@JoinColumn(name="production_id")
	@JsonBackReference("p")
	private Production production;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "repertoire")
	@JsonManagedReference("r")
	private Set<Reservation> reservations;
	
	public Repertoire() {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Set<Reservation> getReservations() {
		return reservations;
	}

	public void setReservations(Set<Reservation> reservations) {
		this.reservations = reservations;
	}

}
