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
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Room implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private int numOfRows;
	
	@Column(nullable = false)
	private int numOfSitsInRow;
	
//	@OneToMany(fetch = FetchType.LAZY, mappedBy = "room")
//	private Set<Repertoire> repertoires; 
	
	@ManyToOne(optional = false)
	@JoinColumn(name="cinema_theater_id")
	@JsonBackReference("b")
	private CinemaTheater cinemaTheater;
	
	public Room() {
		// TODO Auto-generated constructor stub
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNumOfRows() {
		return numOfRows;
	}

	public void setNumOfRows(int numOfRows) {
		this.numOfRows = numOfRows;
	}

	public int getNumOfSitsInRow() {
		return numOfSitsInRow;
	}

	public void setNumOfSitsInRow(int numOfSitsInRow) {
		this.numOfSitsInRow = numOfSitsInRow;
	}

//	public Set<Repertoire> getRepertoires() {
//		return repertoires;
//	}
//
//	public void setRepertoires(Set<Repertoire> repertoires) {
//		this.repertoires = repertoires;
//	}

	public CinemaTheater getCinemaTheater() {
		return cinemaTheater;
	}

	public void setCinemaTheater(CinemaTheater cinemaTheater) {
		this.cinemaTheater = cinemaTheater;
	}

}
