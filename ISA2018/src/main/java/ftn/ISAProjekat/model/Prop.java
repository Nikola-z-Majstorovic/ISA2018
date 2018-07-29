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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Prop implements Serializable {

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
	private String description;
	
	@Column(nullable = false)
	private boolean isNew;
	
	@ManyToMany
	private Set<User> user;
	
	@ManyToOne(optional = false)
	private FanZone fanZone;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "prop")
	private Set<Auction> auctions;
	
	public Prop() {
		// TODO Auto-generated constructor stub
	}

	public Prop(Long id, String name, String description, boolean isNew) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.isNew = isNew;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isNew() {
		return isNew;
	}

	public void setNew(boolean isNew) {
		this.isNew = isNew;
	}

	public FanZone getFanZone() {
		return fanZone;
	}

	public void setFanZone(FanZone fanZone) {
		this.fanZone = fanZone;
	}




}
