myModule.controller('loginCtrl',['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in login ctrl');   
    
    //get all users from db that will be used as repository users in friendList
    //$rootScope.users= dataservice getAll users
    dataService.getAll('users','getAll',null,function(res) {
    	if(res.status==200){      
    		$rootScope.users=res.data;
    	}
    	else{
    		console.log(res);
    	}
    });    
    
    //Delete all reservations that are not approved (0) and not in future(datetime<datetime.Now)
    //DELETE FROM reservation WHERE timeOfDisplay < GETDATE() AND approved = 0
    dataService.delete('reservation','delete',null,function(res) {
		if(res.status==200){  
			console.log(res);
		}else {
			console.log(res);
		}
	});
    
    $scope.login = function () {

        dataService.login($rootScope.loginuser,function(res) {
        	if(res.status==200){        
        		console.log(res.data);
        		$rootScope.loginuser= res.data;
        		        	
        		dataService.getAll('userFriend','getAllMyFriends',$rootScope.loginuser.id,function(res) {
        			if(res.status==200){  
        				console.log(res);
	        			$rootScope.myFriends = res.data;	            		
	            		
	            		//gett all friend requests where other users sent friend request to me but i still didnt accept
	            		dataService.getAll('userFriend','getAllMyFriendRequests',$rootScope.loginuser.id,function(res) {
	            			if(res.status==200){  
	    	        			$rootScope.myFriendRequests = res.data;	    	            		    	          
	    	        			console.log($rootScope.myFriendRequests);
	    	        			console.log(res.data);
	    	            		 $rootScope.changeView('/cinematheaterlist');
	                	    
	            			}else {
	                    		console.log(res);
	                    		
	                    	}
	            		});
	            		
//	            		$rootScope.changeView('/cinematheaterlist');
   
        			}else {
                		console.log(res);
                		
                	}
        		});
        		
        	}else {
        		console.log(res);
        		
        	}
        });
    }
}]);

