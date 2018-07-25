package ftn.ISAProjekat.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String email;
	
	@Column(nullable = false)
	private String password;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private String surname;
	
	@Column(nullable = false)
	private String city;
	
	@Column(nullable = false)
	private String phone;
	
	@OneToMany(fetch = FetchType.LAZY)
	private Set<CinemaTheater> cinemaTheaters;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
	private Set<Reservation> reservations;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
	private Set<UserFriend> friends;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
	private Set<AuctionBiding> auctionBidings;
	
	@OneToMany(fetch = FetchType.LAZY)
	private Set<Prop> props;
	
	public User() {
		// TODO Auto-generated constructor stub
	}

	public User(Long id, String email, String password, String name, String surname, String city, String phone) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.surname = surname;
		this.city = city;
		this.phone = phone;

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}



}
