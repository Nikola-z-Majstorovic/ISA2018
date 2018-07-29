package ftn.ISAProjekat.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class CinemaTheater implements Serializable{

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
	private String address;

	@Column(nullable = false)
	private String description;
	
	@Column(nullable = false)
	private boolean isCinema;
	
	@Column(nullable = false)
	private int entityRate;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "cinemaTheater")
	private Set<Repertoire> repertoires;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "cinemaTheater")
	private Set<Room> rooms;
	
	@ManyToMany()
	private Set<User> user;
	
	public CinemaTheater() {
		// TODO Auto-generated constructor stub
	}

	public CinemaTheater(Long id, String name, String address, String description, boolean isCinema,
			int entityRate) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.description = description;
		this.isCinema = isCinema;
		this.entityRate = entityRate;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isCinema() {
		return isCinema;
	}

	public void setCinema(boolean isCinema) {
		this.isCinema = isCinema;
	}

	public int getEntityRate() {
		return entityRate;
	}

	public void setEntityRate(int entityRate) {
		this.entityRate = entityRate;
	}

	
}
