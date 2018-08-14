package ftn.ISAProjekat.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
	
	/*
	@JsonManagedReference
	@OneToMany(mappedBy = "cinemaTheater", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<Repertoire> repertoires;
	*/
	/*
	@JsonManagedReference
	@OneToMany(mappedBy = "cinemaTheater", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<Room> rooms;
	*/
	
	//@ManyToMany(mappedBy = "cinemaTheater", fetch = FetchType.EAGER)
	@ManyToMany
//	@JsonIgnore
	@JsonBackReference
	//@ManyToMany(fetch = FetchType.LAZY)
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
/*
	public Set<Repertoire> getRepertoires() {
		return repertoires;
	}

	public void setRepertoires(Set<Repertoire> repertoires) {
		this.repertoires = repertoires;
	}
	*/
/*
	public Set<Room> getRooms() {
		return rooms;
	}

	public void setRooms(Set<Room> rooms) {
		this.rooms = rooms;
	}
*/

	public Set<User> getUser() {
		return user;
	}

	public void setUser(Set<User> user) {
		this.user = user;
	}

	
}
