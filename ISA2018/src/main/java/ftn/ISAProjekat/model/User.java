package ftn.ISAProjekat.model;

import java.io.Serializable;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
//@Table(name = "users")
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
	
	@Enumerated(EnumType.STRING)
	private Role role;
/*
//	@ManyToMany(fetch = FetchType.EAGER)
	@JsonManagedReference
	@ManyToMany(mappedBy = "user")
//	@JsonIgnore
	private Set<CinemaTheater> cinemaTheaters;
*/
	/*
	@JsonManagedReference(value="reservations")
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
	private Set<Reservation> reservations;
	*/
	/*
	@JsonManagedReference(value="friends")
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
	private Set<UserFriend> friends;
	*/
/*
	@JsonManagedReference
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
	private Set<AuctionBiding> auctionBidings;
*/
/*
	@ManyToMany(mappedBy = "user")
	private Set<Prop> props;
*/
	public User() {
		// TODO Auto-generated constructor stub
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

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
/*
	public Set<CinemaTheater> getCinemaTheaters() {
		return cinemaTheaters;
	}

	public void setCinemaTheaters(Set<CinemaTheater> cinemaTheaters) {
		this.cinemaTheaters = cinemaTheaters;
	}
*/
	/*
	public Set<Reservation> getReservations() {
		return reservations;
	}

	public void setReservations(Set<Reservation> reservations) {
		this.reservations = reservations;
	}

	public Set<UserFriend> getFriends() {
		return friends;
	}

	public void setFriends(Set<UserFriend> friends) {
		this.friends = friends;
	}
*/
//	public Set<AuctionBiding> getAuctionBidings() {
//		return auctionBidings;
//	}
//
//	public void setAuctionBidings(Set<AuctionBiding> auctionBidings) {
//		this.auctionBidings = auctionBidings;
//	}
//
//	
//	public Set<Prop> getProps() {
//		return props;
//	}
//
//	public void setProps(Set<Prop> props) {
//		this.props = props;
//	}
//	

}
