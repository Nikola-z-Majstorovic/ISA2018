package ftn.ISAProjekat.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import ftn.ISAProjekat.model.Rating;

public interface RatingRepository  extends JpaRepository<Rating,Long>{
	
}
