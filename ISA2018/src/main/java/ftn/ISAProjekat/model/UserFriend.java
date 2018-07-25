package ftn.ISAProjekat.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class UserFriend implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private boolean approved;

	@Column(nullable = false)
	private boolean requestSender;
	
	@ManyToOne(optional = false)
	private User user;
	
	public UserFriend() {
		// TODO Auto-generated constructor stub
	}

	public UserFriend(Long id, boolean approved, boolean requestSender) {
		super();
		this.id = id;
		this.approved = approved;
		this.requestSender = requestSender;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	public boolean isRequestSender() {
		return requestSender;
	}

	public void setRequestSender(boolean requestSender) {
		this.requestSender = requestSender;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}