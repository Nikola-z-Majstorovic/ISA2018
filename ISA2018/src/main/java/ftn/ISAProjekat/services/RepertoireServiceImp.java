package ftn.ISAProjekat.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.model.Repertoire;
import ftn.ISAProjekat.repository.RepertoireRepository;

@Service
public class RepertoireServiceImp implements RepertoireService {

	@Autowired
	RepertoireRepository repertoireRepository;
	
	@Override
	public Collection<Repertoire> findAll() {
		return repertoireRepository.findAll();
		
	}



}
