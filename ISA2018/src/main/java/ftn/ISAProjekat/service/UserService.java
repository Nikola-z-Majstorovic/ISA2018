package ftn.ISAProjekat.service;

import java.util.List;

import ftn.ISAProjekat.model.User;

public interface UserService {

	public User getUser(String email,String password);
	
	public User create(User user) throws Exception;

	public List<User> findAll(); 
}
