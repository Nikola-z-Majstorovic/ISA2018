package ftn.ISAProjekat.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class Repertoire implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private boolean active;
	
	@Column(nullable = false)
	private float price;
	
	//@JsonManagedReference(value="cinemaTheater")
	//@JsonBackReference
//	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL) 
	@ManyToOne(optional = false)
	private CinemaTheater cinemaTheater;
	

//	@JsonManagedReference
	@ManyToOne(optional = false)
	private Room room;
	
//	@JsonManagedReference
	@ManyToOne(optional = false)
	private Production production;

	/*
	//@JsonManagedReference(value="reservations")
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "repertoire")
	private Set<Reservation> reservations;
	*/
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
/*
	public Set<Reservation> getReservations() {
		return reservations;
	}

	public void setReservations(Set<Reservation> reservations) {
		this.reservations = reservations;
	}
	*/

}
