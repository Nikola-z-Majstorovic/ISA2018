package ftn.ISAProjekat.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

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
	
	@ManyToOne(optional = false)
	private CinemaTheater cinemaTheater;
	
	@ManyToOne(optional = false)
	private Room room;
	
	@ManyToOne(optional = false)
	private Production production;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "repertoire")
	private Set<Reservation> reservations;
	
	public Repertoire() {
		// TODO Auto-generated constructor stub
	}

	public Repertoire(Long id, boolean active, float price, CinemaTheater cinemaTheater) {
		super();
		this.id = id;
		this.active = active;
		this.price = price;
		this.cinemaTheater = cinemaTheater;
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

}
