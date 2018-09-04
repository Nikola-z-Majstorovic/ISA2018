package ftn.ISAProjekat.service;

import java.util.List;

import ftn.ISAProjekat.model.UserFriend;


public interface UserFriendService  {

	List<UserFriend> getByMyId(int myId);

	List<UserFriend> getByUserId(Long userId);

	void create(UserFriend userFriend);

	void updateFriendForMe(Long id, int myId);

	void updateMeForFriend(int myId, Long id);

}
