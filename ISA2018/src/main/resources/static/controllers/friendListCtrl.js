myModule.controller('friendListCtrl', ['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in friendList ctrl');

    $scope.refreshFriends = function (){
	    //Find all my friend requests that are not approved and they are sent by another user
	    $scope.friendRequests = appService.lodashFilterBy($rootScope.mainFriendRequests, 'friendID', $rootScope.loginuser.id);
	    
	    $scope.friendRequests = appService.lodashFilterBy($scope.friendRequests, 'approved', false);
	    
	    $scope.friendRequests = appService.lodashFilterBy($scope.friendRequests, 'sender', true);
	    
	    console.log('Friend requests');
	    console.log($scope.friendRequests);
	    
	    //Find all my friends (approved requests)
	    $scope.myFriends = appService.lodashFilterBy($rootScope.mainFriendRequests, 'userID', $rootScope.loginuser.id);
	    $scope.myFriends = appService.lodashFilterBy($scope.myFriends, 'approved', true);
	    
	    console.log('My friends');
	    console.log($scope.myFriends);
    }
    
    $scope.refreshFriends();
    
    $scope.searchUsers = function(){
    	$scope.foundUsers = [];
    	
    	for (var i = 0; i < $rootScope.users.length; i++) {
    		var username = $rootScope.users[i].name.toLowerCase();
    		var contains = username.includes($scope.findUser.toLowerCase());
    		
    		
    		if(contains){
    			
    			var myfriends = appService.lodashFilterBy($rootScope.mainFriendRequests, 'userID', $rootScope.loginuser.id);
    			
    		    var user = appService.lodashFindBy(myfriends, 'friendID', $rootScope.users[i].userID);
    		    
    		    if(!user){
    		    	if($rootScope.users[i].userID != $rootScope.loginuser.id){
    		    		$scope.foundUsers.push($rootScope.users[i]);
    		    	}
    		    }
        		
        	}
		 }  

    };
    
    
    
    $scope.sendFriendRequest = function(friend){
  
    	var friendRequest = {
    			userID: $rootScope.loginuser.id,
    			friendID: friend.userID,
    			approved: false,
    			sender: true
    	};

    	$rootScope.mainFriendRequests.push(friendRequest);
    	
    	friendRequest = {
    			userID: friend.userID,
    			friendID: $rootScope.loginuser.id,
    			approved: false,
    			sender: false
    	};
    	
    	$rootScope.mainFriendRequests.push(friendRequest);
    	
    	$scope.foundUsers = _.without($scope.foundUsers, friend);
    }
    
    $scope.confirmFriendRequest = function(friend){
    	
    	
    	$scope.friendRequests = _.without($scope.friendRequests, friend);
    	
    	console.log(friend);
    	
    	console.log($rootScope.loginuser.id);
    	
    	//First filter all friends table, and find all my friends that are not approved
    	var myNotApprovedFriends = appService.lodashFilterBy($rootScope.mainFriendRequests, 'userID', $rootScope.loginuser.id);
    	myNotApprovedFriends = appService.lodashFilterBy(myNotApprovedFriends, 'approved', false);
    	
    	console.log('My not approved users');
    	console.log(myNotApprovedFriends);
    	//Then filter all my friends, find friend user that i am confirming now
    	var user = appService.lodashFindBy(myNotApprovedFriends, 'friendID', friend.userID);
    	
    	//Update database and update my row for this friend that i am confirming
    	for (var i = 0; i < $rootScope.mainFriendRequests.length; i++) {
    		if($rootScope.mainFriendRequests[i].userID == user.userID){
    			$rootScope.mainFriendRequests[i].approved = true;
    		}    	
    	}
    	
    	//Now find all users where i am their friend 
    	var everyRowWhereIamFriend = appService.lodashFilterBy($rootScope.mainFriendRequests, 'friendID', $rootScope.loginuser.id);
    	
    	//Now find only one row where i am users friend whom i confirmed just now
    	var meAsHisFriend = appService.lodashFindBy(everyRowWhereIamFriend, 'userID', friend.userID);
    	
    	//Update database and update his row for this friend that i am confirming
    	for (var i = 0; i < $rootScope.mainFriendRequests.length; i++) {
    		if($rootScope.mainFriendRequests[i].userID == meAsHisFriend.userID){
    			$rootScope.mainFriendRequests[i].approved = true;
    		}    	
    	}	
    	
    	console.log($rootScope.mainFriendRequests);
    	
    	$scope.refreshFriends();
    }
}]);

