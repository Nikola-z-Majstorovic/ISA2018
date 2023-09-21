package ftn.ISAProjekat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ftn.ISAProjekat.model.UserFriend;
import ftn.ISAProjekat.repository.UserFriendRepository;

@Service
public class UserFriendServiceImp implements UserFriendService{
	
	@Autowired
	private UserFriendRepository userFriendRepository;

	@Override
	public List<UserFriend> getByMyId(int myId) {
		return userFriendRepository.findByMyId(myId);
	}

	@Override
	public List<UserFriend> getByUserId(Long userId) {
		return userFriendRepository.find(userId);
	}

	@Override
	public void create(UserFriend userFriend) {
		userFriendRepository.save(userFriend);
	}

	@Override
	public void updateFriendForMe(Long id, int myId) {
		userFriendRepository.editMyRow(id,myId);
	}

	@Override
	public void updateMeForFriend(int myId, Long id) {
		userFriendRepository.editFriendRow(myId, id);
	}

	
	
}
