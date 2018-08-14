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
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
public class CinemaTheater implements Serializable{

	/**
	 * Imamo 1 Cinema * repertoires 
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
	
	@OneToMany(mappedBy = "cinemaTheater")
	@JsonManagedReference("a")
	private Set<Repertoire> repertoires;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "cinemaTheater")
	@JsonManagedReference("b")
	private Set<Room> rooms;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JsonBackReference("c")
	private Set<User> user;
	
	public CinemaTheater() {
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

	public Set<Repertoire> getRepertoires() {
		return repertoires;
	}

	public void setRepertoires(Set<Repertoire> repertoires) {
		this.repertoires = repertoires;
	}

	public Set<Room> getRooms() {
		return rooms;
	}

	public void setRooms(Set<Room> rooms) {
		this.rooms = rooms;
	}

	public Set<User> getUser() {
		return user;
	}

	public void setUser(Set<User> user) {
		this.user = user;
	}

	
}
