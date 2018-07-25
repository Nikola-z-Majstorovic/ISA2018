package ftn.ISAProjekat.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class AuctionBiding implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private float bidingPrice;
	
	@ManyToOne(optional = false)
	private Auction auction;
	
	@ManyToOne(optional = false)
	private User user;

	public AuctionBiding() {
		// TODO Auto-generated constructor stub
	}

	public AuctionBiding(Auction auction, User user) {
		super();
		this.auction = auction;
		this.user = user;
	}


	public Auction getAuction() {
		return auction;
	}

	public void setAuction(Auction auction) {
		this.auction = auction;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
