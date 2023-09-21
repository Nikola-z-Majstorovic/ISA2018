package ftn.ISAProjekat.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import ftn.ISAProjekat.model.UserFriend;

public interface UserFriendRepository  extends JpaRepository<UserFriend, Long> {

	@Query(value="SELECT * FROM User_Friend where my_id= ?1",nativeQuery=true)
	List<UserFriend> findByMyId(int myId);

	@Query(value="SELECT * FROM User_Friend WHERE user_id = ?1  AND approved = 0",nativeQuery=true)
	List<UserFriend> find(Long userId);
	
	@Transactional
	@Modifying
	@Query(value="UPDATE User_Friend SET approved = true WHERE my_id = ?1 AND user_id = ?2",nativeQuery=true)
	void editMyRow(Long friendId,int myId );
	
	@Transactional
	@Modifying
	@Query(value="UPDATE User_Friend SET approved = true WHERE my_id = ?1 AND user_id = ?2",nativeQuery=true)
	void editFriendRow(int friendId, Long myId);
}
