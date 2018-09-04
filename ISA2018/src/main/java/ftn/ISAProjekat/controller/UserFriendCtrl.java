package ftn.ISAProjekat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ftn.ISAProjekat.model.UserFriend;
import ftn.ISAProjekat.service.UserFriendService;

@RestController
public class UserFriendCtrl {

	@Autowired
	private UserFriendService userFriendService;
	
	@RequestMapping(
			value = "/userFriend/getAllMyFriends/{myId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	public List<UserFriend> getAllMyFriends(@PathVariable int myId){
		return 	userFriendService.getByMyId(myId);
	}
	
	@RequestMapping(
			value = "/userFriend/getAllMyFriendRequests/{userId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE			
			)
	public List<UserFriend> getAllMyFriendRequsts(@PathVariable Long userId){
		return userFriendService.getByUserId(userId);
	}
	@RequestMapping(
			value = "/userFriend/create",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE			
			)
	public void createUserFriend(@RequestBody UserFriend userFriend){
		userFriendService.create(userFriend);
	}
	@RequestMapping(
			value = "/userFriend/update",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE			
			)
	public void editUserFriend(@RequestBody UserFriend userFriend){
		userFriendService.updateFriendForMe(userFriend.getUser().getId(), userFriend.getMyId());
		userFriendService.updateMeForFriend(userFriend.getMyId(), userFriend.getUser().getId());
	}
}
