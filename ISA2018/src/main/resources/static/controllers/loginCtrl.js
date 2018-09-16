myModule.controller('loginCtrl',['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in login ctrl');   
    
    //get all users from db that will be used as repository users in friendList
    //$rootScope.users= dataservice getAll users
    $rootScope.allEntityRatings=[];
    $rootScope.allProductionRatings=[];
    dataService.getAll('users','getAll',null,function(res) {
    	if(res.status==200){      
    		$rootScope.users=res.data;
    	}
    	else{
    		console.log(res);
    	}
    });    
	    dataService.getAll('cinThe','getAllRatings',null,function(res) {
	    	if(res.status==200){      
	    		for(var i=0;i<=res.data.length-1;i++) {
	    			var rating = {
	    				id : res.data[i].id,
	    				mark :  res.data[i].mark,
	    				cinemaTheaterId : res.data[i].cinemaTheater.id,
	    				userId : res.data[i].user.id    				
			};
    			$rootScope.allEntityRatings.push(rating);
    		}
//    		console.log($rootScope.allEntityRatings);
    		$rootScope.sumedEntityMarks = [];
    		var grouppedArray = [];
    		grouppedArray =_.groupBy($rootScope.allEntityRatings,'cinemaTheaterId');
    		for(var propertyName in grouppedArray) {
//    				console.log(grouppedArray[propertyName]);
    				var sum=0;
        			for(var j=0;j<=grouppedArray[propertyName].length-1;j++) {
//        				console.log('bingo');
//        				console.log(grouppedArray[propertyName][j]);
        				sum=sum+grouppedArray[propertyName][j].mark;
        			}
        			
        			var numbOfMarks=grouppedArray[propertyName].length;
        			var forMathedMark = {
        					sumedMark : Math.round(sum/numbOfMarks) ,
        					cinemaTheaterId : grouppedArray[propertyName][0].cinemaTheaterId
        			};
        			$rootScope.sumedEntityMarks.push(forMathedMark);
    		}    		       		
    	}
    	else{
    		console.log(res);
    	}
    });    
	    
	    dataService.getAll('production','getAllRatings',null,function(res) {
	    	if(res.status==200){      
	    		for(var i=0;i<=res.data.length-1;i++) {
	    			var rating = {
	    				id : res.data[i].id,
	    				mark :  res.data[i].mark,
	    				productionId : res.data[i].production.id,
	    				userId : res.data[i].user.id    				
	    			};
    			$rootScope.allProductionRatings.push(rating);
    		}
    		console.log($rootScope.allProductionRatings);
    		$rootScope.sumedProductionsMarks = [];
    		var grouppedArray = [];
    		grouppedArray =_.groupBy($rootScope.allProductionRatings,'productionId');
    		for(var propertyName in grouppedArray) {
    				var sum=0;
        			for(var j=0;j<=grouppedArray[propertyName].length-1;j++) {
        				sum=sum+grouppedArray[propertyName][j].mark;
        			}
        			
        			var numbOfMarks=grouppedArray[propertyName].length;
        			var forMathedMark = {
        					sumedMark : Math.round(sum/numbOfMarks) ,
        					productionId : grouppedArray[propertyName][0].productionId
        			};
        			$rootScope.sumedProductionsMarks.push(forMathedMark);
    		}    		 
    		console.log($rootScope.sumedProductionsMarks);
    	}
    	else{
    		console.log(res);
    	}
    });    
    //Delete all reservations that are not approved (0) and not in future(datetime<datetime.Now)
    //DELETE FROM reservation WHERE timeOfDisplay < GETDATE() AND approved = 0
    dataService.delete('reservation','delete',null,function(res) {
		if(res.status==200){  
			
		}else {
			console.log(res);
		}
	});
    
    $scope.login = function () {

        dataService.login($rootScope.loginuser,function(res) {
        	if(res.status==200){                		
        		$rootScope.loginuser= res.data;
        		        	
        		dataService.getAll('userFriend','getAllMyFriends',$rootScope.loginuser.id,function(res) {
        			if(res.status==200){          				
	        			$rootScope.myFriends = res.data;	            		
	            		
	            		//gett all friend requests where other users sent friend request to me but i still didnt accept
	            		dataService.getAll('userFriend','getAllMyFriendRequests',$rootScope.loginuser.id,function(res) {
	            			if(res.status==200){  
	    	        			$rootScope.myFriendRequests = res.data;	    	            		    	          
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

