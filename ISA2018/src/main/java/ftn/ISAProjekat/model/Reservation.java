package ftn.ISAProjekat.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Reservation  implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
//	@ManyToOne
	//@JsonManagedReference
	private Long userId;
	
//	@ManyToOne
	//@JsonManagedReference
	private Long repertoireId;
	
	@Column(nullable = false)
	private boolean approved;
	
	@Column(nullable = false)
	private int sitNumber;
	
	@Column(nullable = false)
	private int rowNumber;
	
	@Column(nullable = true)
	private Long senderId;

	public Reservation() {
		super();
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

	public int getSitNumber() {
		return sitNumber;
	}

	public void setSitNumber(int sitNumber) {
		this.sitNumber = sitNumber;
	}

	public int getRowNumber() {
		return rowNumber;
	}

	public void setRowNumber(int rowNumber) {
		this.rowNumber = rowNumber;
	}

	public Long getSenderId() {
		return senderId;
	}

	public void setSenderId(Long senderId) {
		this.senderId = senderId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getRepertoireId() {
		return repertoireId;
	}

	public void setRepertoireId(Long repertoireId) {
		this.repertoireId = repertoireId;
	}


	
	

}
