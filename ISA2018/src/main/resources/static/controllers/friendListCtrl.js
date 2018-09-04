myModule.controller('friendListCtrl', ['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in friendList ctrl');

    $scope.refreshFriends = function (){
	    //Find all my friend requests that are not approved and they are sent by another user
    	 /*	
	    $scope.friendRequests = appService.lodashFilterBy($rootScope.myFriendRequests, 'userId', $rootScope.loginuser.id);
	 
	    $scope.friendRequests = appService.lodashFilterBy($scope.friendRequests, 'approved', false);
	    
	    $scope.friendRequests = appService.lodashFilterBy($scope.friendRequests, 'sender', true);
	 
	    console.log('Friend requests');
	    console.log($scope.friendRequests);
	    
	    //Find all my friends (approved requests)
	    $scope.myFriends = appService.lodashFilterBy($rootScope.mainFriendRequests, 'userID', $rootScope.loginuser.id);
	    $scope.myFriends = appService.lodashFilterBy($scope.myFriends, 'approved', true);
	   
	    console.log('My friends');
	    console.log($scope.myFriends);
	    
	    */
    	dataService.getAll('userFriend','getAllMyFriends',$rootScope.loginuser.id,function(res) {
        			if(res.status==200){  
        				//console.log(res);
	        			$rootScope.myFriends = res.data;	
        			}else {
        				console.log(res);
        			}
	        			
	    });
    	//zasto ovde nismo napisali	var myfriends = appService.lodashFilterBy($rootScope.myFriends, 'myId', $rootScope.loginuser.id); nego stalno proveravamo u bazi 
    }
    
    //$scope.refreshFriends();
   // console.log($rootScope.myFriends);
    
    
   
    $scope.searchUsers = function(){
    	$scope.foundUsers = [];
    	
    	
    	if($scope.findUser.length >= 3){
	    	for (var i = 0; i <= $rootScope.users.length - 1; i++) {
	    		var username = $rootScope.users[i].name.toLowerCase();
	    		var contains = username.includes($scope.findUser.toLowerCase());
	    		
	    		
	    		if(contains){
	    			
	    			var myfriends = appService.lodashFilterBy($rootScope.myFriends, 'myId', $rootScope.loginuser.id); 
	    			
	    			
	    			var user = null;
	    		    //var user = appService.lodashFindBy(myfriends, 'id', $rootScope.users[i].id);
	    			
	    			//Check if found user is already my friend. If he is, than dont count him as found user
	    		    for (var y = 0; y <= myfriends.length - 1; y++) {
	    		    	if(myfriends[y].user.id == $rootScope.users[i].id){
	    		    		user = myfriends[y];
	    		    	}
	    		    
	    		    }
	
	    		    if(!user){
	    		    	if($rootScope.users[i].id != $rootScope.loginuser.id){
	    		    		$scope.foundUsers.push($rootScope.users[i]);
	    		    	}
	    		    }
	        		
	        	}
			 }  
    	}

    };
    
    
    
    $scope.sendFriendRequest = function(friend){
  
    	var friendRequest = {
    			myId: $rootScope.loginuser.id,
    			userId: friend.userId,
    			approved: false,
    			requestSender: true
    	};

    	//Call dataservice to add friend for me
    	dataService.create('userFriend','create',friendRequest,function(res) {
			if(res.status==200){  
				console.log(res);
			}else {
				console.log(res);
			}
    			
    	});
    	
    	
    	friendRequest = {
    			myId: friend.userId,
    			userId: $rootScope.loginuser.id,
    			approved: false,
    			senderequestSenderr: false
    	};
    	
    	//Call dataservice to add me to the friendRequest list of user that i just added
    	
    	dataService.create('userFriend','create',friendRequest,function(res) {
			if(res.status==200){  
				console.log(res);
			}else {
				console.log(res);
			}
    			
    	});
    	//$rootScope.mainFriendRequests.push(friendRequest);
    	
    	$scope.foundUsers = _.without($scope.foundUsers, friend);
    }
    
    $scope.confirmFriendRequest = function(friend){
    	
    	
    	$rootScope.myFriendRequests = _.without($rootScope.myFriendRequests, friend);
 
    	//This is fix for returned users that are displayed like array with numbers instead of named properties
  
    	
        //Call data service update for myFriends table
    	//Update my row for this friend and set approved to true
    	dataService.update('userFriend','update',friend,function(res) {
			if(res.status==200){  
				console.log(res);
				$scope.refreshFriends();
			}else {
				console.log(res);
			}
    			
    	});
    	

    	
    	//Update his row for me, where i am his friend and set approved to true
    	
    	/*
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
    	
    	*/
    	
    	
    	
    }
    
    
    $scope.getFriendName = function(userId){
    	 return appService.lodashFindBy($rootScope.users, 'id', userId);
    }
}]);

