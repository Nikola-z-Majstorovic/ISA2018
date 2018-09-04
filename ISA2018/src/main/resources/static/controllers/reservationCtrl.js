myModule.controller('reservationCtrl', ['$rootScope', '$scope', '$routeParams', 'dataService', 'appService', '$http', function ($rootScope, $scope, $routeParams, dataService,appService,$http) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in reservation ctrl');
   
    $scope.entityId = Number($routeParams.entityId);
    $scope.repertoireId = Number($routeParams.repertoireId);
    

   //Room for repertoire drawings
    dataService.getAll('repertoire','get', $scope.repertoireId,function(res) {
    	if(res.status==200){        
    		
    		$scope.selectedRepertoire = res.data;

    		$scope.selectedRoom = $scope.selectedRepertoire.room;

    	    $scope.totalRowsInRoom = [];
    	    $scope.totalSitsInRow = [];
    	    
    	    for (var i = 1; i <= $scope.selectedRoom.numOfSitsInRow; i++) {
    	    	$scope.totalSitsInRow.push(i);
    		}       	    
    	  
    	    for (var i = 1; i <= $scope.selectedRoom.numOfRows; i++) {

    	    	var tempSits = [];
    	    	
    	    	
    	    	for (var y = 1; y <= $scope.selectedRoom.numOfSitsInRow; y++) {
    	    		var tempSit = {
    	    				sitNo: y,
    	    				checked: false,
    	    				disabled: false
    	    		};
    	    		
   		
    	    		tempSits.push(tempSit);
    	    	}  
    	    	
    	    	var row = {
    	    			rowNo: i,
    	    			sits: tempSits
    	    	};
    	    	$scope.totalRowsInRoom.push(row);

    		}  
    	    
    	    
//    	    $scope.myFriends = appService.lodashFilterBy($rootScope.mainFriendRequests, 'userID', $rootScope.loginuser.id);
//    	    $scope.myFriends = appService.lodashFilterBy($scope.myFriends, 'approved', true);
    	    
    	    
    	    dataService.getAll('reservation','findAll',$scope.repertoireId,function(res) {
    			if(res.status==200){  
    				$scope.allReservationsForThisRep = res.data;
    				
    				console.log($rootScope.myFriends);
    				
    				
    				
    				for (var y = 0; y <= $rootScope.myFriends.length - 1; y++) {
    					$rootScope.myFriends[y].userId = $rootScope.myFriends[y].user.id;	    
    					
    					if(appService.lodashFindBy($scope.allReservationsForThisRep, 'userId', $rootScope.myFriends[y].userId)){   				    	 
    						$rootScope.myFriends[y].active = false;
    					}else{
    						$rootScope.myFriends[y].active = true;
    					}    			
    	    		} 	
    				
    				$scope.displayFriends = false;
    				
    				if(appService.lodashFindBy($scope.allReservationsForThisRep, 'userId', $rootScope.loginuser.id)){
    					$scope.displayFriends = true;
    				}

    				$scope.tempReservations = [];
    				
    	    	    $scope.recheckSits();
    			}else {
    				console.log(res);
    			}   
    	    });

    	    
    	}else {
    		console.log(res);
    		
    	}	
	});
  //Room for repertoire drawings end
    
    
   // $scope.selectedRepertoire = appService.lodashFindBy($rootScope.repertoires,'repertoireId',$scope.repertoireId);
    
    //$scope.selectedRoom = appService.lodashFindBy($rootScope.rooms,'idRoom', $scope.selectedRepertoire.idRoom);
    
  
    $scope.checkSit = function(row, sitNo, event){

    	 var tempReservationID = '-' + row.rowNo + '-' + sitNo + '-';
    	 
    	 console.log(tempReservationID);
    	 
    	 var tempReservation = {
    			 tempReservationID: tempReservationID,
    			 userId: $rootScope.loginuser.id,
    			 approved: false,
    			 rowNumber: row.rowNo,
    			 sitNumber: sitNo,
    			 repertoireId: $scope.repertoireId
    	 };
    	 
    	 if(appService.lodashFindBy($scope.tempReservations, 'tempReservationID', tempReservationID)){
    		 console.log('delete');
    		 
    		 var reservation = appService.lodashFindBy($scope.tempReservations, 'tempReservationID', tempReservationID);
    		
    			 _.remove($scope.tempReservations, reservation);
    		
    			 
    			 if(reservation.userId != $rootScope.loginuser.id){

    				 var tempFriend = appService.lodashFindBy($rootScope.myFriends, 'userId', Number(reservation.userId));
	    			 
     			 		  tempFriend.active = true;
    			 }else{
    				 $scope.displayFriends = false;
    			 }

    	 }else{
    		 
    		 var isForFriend = false;
    		 
    		 for (var y = 0; y < $scope.tempReservations.length; y++) {

    	    		if($scope.tempReservations[y].userId == $rootScope.loginuser.id){

    	    			isForFriend = true;
    	    		}
    	    	
    	    	}
    		 if(appService.lodashFindBy($scope.allReservationsForThisRep, 'userId', $rootScope.loginuser.id)){
    			 isForFriend = true;
    		 }
    		 
    		 if(isForFriend){//code for adding sit for friend
    			 var friendID = null;
    			 
    			 do{
	    			 friendID = prompt("Please enter friend id for this sit", "");
	    			 console.log(friendID);

	    			 //Uncheck checkbox for seat if user clicked cancel on alert or didnt enter user id
	    			 if(friendID == null){
	    				 for (var y = 0; y < $scope.totalRowsInRoom.length; y++) {
	    			    		if($scope.totalRowsInRoom[y].rowNo == row.rowNo){
	    			    			
	    			    			for (var k = 0; k < $scope.totalRowsInRoom[y].sits.length; k++) {
	    			    					if($scope.totalRowsInRoom[y].sits[k].sitNo == sitNo)
	    			    					$scope.totalRowsInRoom[y].sits[k].checked = false;
	    			    					event.preventDefault();   	    			    						    			    				
	    			    				}
	    			    			}
	    			    			
	    			    		}
	    			 
	    				 break;
	    			 }
	    			 
	    			 
	    			 
    			 }while(!appService.lodashFindBy($rootScope.myFriends, 'userId', Number(friendID)))
    	
    			 if(friendID != null && friendID.trim() != ''){
	    			 tempReservation.userId = Number(friendID);
	    			
	    			 
	    			 var tempFriend = appService.lodashFindBy($rootScope.myFriends, 'userId', Number(friendID));
	    			 
	    			 tempFriend.active = false;
	    			 //_.remove($scope.myFriends, tempFriend);
	    			 
	    			 
	    			 $scope.tempReservations.push(tempReservation);
	        		
    			 }
    		 }else{//asign sit for logged user
    			 $scope.tempReservations.push(tempReservation);
    			 $scope.displayFriends = true;
        		
    		 }
    			 
    		 
    		 
    		 
//    		 if($scope.tempReservations.length == 0){
//    			 $scope.tempReservations.push(tempReservation);
//  
//    			 return true;
//    		 }else{
//    			 if($scope.tempReservations.length + 1 <= $scope.myFriends.length){
//    		
//    				 $scope.tempReservations.push(tempReservation);
//    				 return true;
//    			 }else{
//
//    				 return false;
//    			 }
//
//    		 }

    		 
    	 }
    };
   
    $scope.saveReservation = function(){
    	    	
    	var valid = false;
    	
    	//Check if tempReservations array has login user in it, reservation will be valid if yes
    	for (var y = 0; y < $scope.tempReservations.length; y++) {
    		if($scope.tempReservations[y].userId == $rootScope.loginuser.id){
    			valid = true;
    		}
    	
    	}
	
    	//Check if allReservationsForThisRep array has login user in it, if user returned to same repertoire for reservation again
    	if(appService.lodashFindBy($scope.allReservationsForThisRep, 'userId', $rootScope.loginuser.id)){
    		valid = true;
    	}
    	
    	if(valid){
    		//save and send reservations - db call

    		for (var y = 0; y < $scope.tempReservations.length; y++) {
        		if($scope.tempReservations[y].userId == $rootScope.loginuser.id){
        			$scope.tempReservations[y].approved = true;
        			$scope.tempReservations[y].senderId = null;        			        		
        		}else{
        			$scope.tempReservations[y].approved = false;
        			$scope.tempReservations[y].senderId = $rootScope.loginuser.id;
        		}
        		
        		//Deleting not needed propertie on object
        		delete $scope.tempReservations[y].tempReservationID;
        		
        		//data service call
        		//Storing object in new variable because of name to be like one in backend
        		var reservation = $scope.tempReservations[y];


        		//Call data service to create reservation
        		dataService.create('reservation','makeReservation', reservation, function(res) {
                	if(res.status==200){        
                		console.log(res);
                		
                		
                		//redirect
                		$rootScope.changeView('/cinematheaterlist');
                		
                		
                	}else {
                		console.log(res);
                		
                	}	
            	});

        		//$rootScope.hcReservations.push($scope.tempReservations[y]);

        	}
    		
    		
    		//Izmestiti data service makeReservation ovde ispod ovog komentara, i napraviti novi data servic method koji ce da prima niz reservacija, obrisati 253 liniju.

    	}else{
    		alert("Please choose one sit for yourself!");
    	}
    
    };
    
    
//    dataService.getAll('reservation','getAll', $scope.repertoireId,function(res) {
//		$scope.allReservations = res.data;
//		console.log($scope.allReservations);
//		
//	
//	});
//	

    /*
    	 $scope.isReserved = function(row, sitNo){
    		 console.log('bingo');
 	    	for (var y = 0; y < $scope.allReservationsForThisRep.length; y++) {
 	    		

 	    		if($scope.allReservationsForThisRep[y].rowNumber == row.rowNo && $scope.allReservationsForThisRep[y].sitNumber == sitNo){

 	    			return true;
 	    			
 	    		}else{
 	    			return false;
 	    		}
 	    	}

 	    
 	    }
     */
	  
	  
	  //Check sits in view. This function is called when object array with rows and sits is ready
	  $scope.recheckSits = function(){

		  console.log($scope.allReservationsForThisRep);
	    	for (var y = 0; y < $scope.allReservationsForThisRep.length; y++) {
	    		
	    		
	    		if(appService.lodashFindBy($scope.totalRowsInRoom, 'rowNo', $scope.allReservationsForThisRep[y].rowNumber)){
	    			
	    			var row = appService.lodashFindBy($scope.totalRowsInRoom, 'rowNo', $scope.allReservationsForThisRep[y].rowNumber);
	    			
	    	
	    				for (var k = 0; k < row.sits.length; k++) {

	    					  if(row.sits[k].sitNo == $scope.allReservationsForThisRep[y].sitNumber){	    						  	    						 
	    						  row.sits[k].checked = true;
	    						  row.sits[k].disabled = true;
	    					  }
	    					  
	    				  }
	    		}

	    	}

	    
	    }
	  
	  $scope.getFriendName = function(userId){
	    	 return appService.lodashFindBy($rootScope.users, 'id', userId);
	    }
    
}]);

