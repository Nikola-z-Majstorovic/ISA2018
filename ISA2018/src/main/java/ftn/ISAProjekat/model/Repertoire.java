package ftn.ISAProjekat.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import javax.persistence.TemporalType;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Repertoire implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	private boolean active;
	
	@Column(nullable = false)
	private float price;
	
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
//	@Temporal(TemporalType.TIMESTAMP)
	private Date timeOfDisplay;
	
    @ManyToOne
	private CinemaTheater cinemaTheater;
	
    @ManyToOne
    private Room room;

    @ManyToOne
    private Production production;
    
	public Repertoire() {
		super();
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

	public Date  getTimeOfDisplay() {
		return timeOfDisplay;
	}

	public void setTimeOfDisplay(Date  timeOfDisplay) {
		this.timeOfDisplay = timeOfDisplay;
	}
    
    
}
