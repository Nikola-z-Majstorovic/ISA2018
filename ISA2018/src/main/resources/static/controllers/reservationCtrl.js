myModule.controller('reservationCtrl', ['$rootScope', '$scope', '$timeout', '$window', 'dataService','$http', '$routeParams', 'appService', function ($rootScope, $scope, $timeout, $window, dataService,$http, $routeParams, appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in reservation ctrl');
   
    $scope.entityId=Number($routeParams.entityId);
    $scope.repertoireId = Number($routeParams.repertoireId);
    
    $scope.selectedRepertoire = appService.lodashFindBy($rootScope.repertoires,'repertoireId',$scope.repertoireId);
    
    $scope.selectedRoom = appService.lodashFindBy($rootScope.rooms,'idRoom', $scope.selectedRepertoire.idRoom);
    
    
    $scope.totalRowsInRoom = [];
    $scope.totalSitsInRow = [];
    
    for (var i = 1; i <= $scope.selectedRoom.numOfSits; i++) {
    	$scope.totalSitsInRow.push(i);
	}   
    
//    for (var i = 1; i <= $scope.selectedRoom.numOfRows; i++) {
//    	$scope.totalRowsInRoom.push(i);
//	}   
    
    
  
    for (var i = 1; i <= $scope.selectedRoom.numOfRows; i++) {

    	var tempSits = [];
    	
    	
    	for (var y = 1; y <= $scope.selectedRoom.numOfSits; y++) {
    		var tempSit = {
    				sitNo: y,
    				checked: false
    		};
    		tempSits.push(tempSit);
    	}  
    	
    	var row = {
    			rowNo: i,
    			sits: tempSits
    	};
    	$scope.totalRowsInRoom.push(row);

	}  
    
    console.log($scope.totalRowsInRoom);
    $scope.myFriends = appService.lodashFilterBy($rootScope.mainFriendRequests, 'userID', $rootScope.loginuser.id);
    $scope.myFriends = appService.lodashFilterBy($scope.myFriends, 'approved', true);
    
    
    for (var y = 0; y < $scope.myFriends.length; y++) {
    	 $scope.myFriends[y].active = true;
		
	} 
    
    
    //console.log($scope.myFriends);
    $scope.tempReservations = [];
    $scope.checkSit = function(row, sitNo, event){


    	
    	 var tempReservationID = '-' + row.rowNo + '-' + sitNo + '-';

    	 var tempReservation = {
    			 tempReservationID: tempReservationID,
    			 userID: $rootScope.loginuser.id,
    			 approved: false,
    			 rowNumber: row.rowNo,
    			 sitNumber: sitNo,
    			 repertoireId: $scope.repertoireId
    	 };
    	 
    	 if(appService.lodashFindBy($scope.tempReservations, 'tempReservationID', tempReservationID)){
    		 console.log('delete');
    		 
    		 var reservation = appService.lodashFindBy($scope.tempReservations, 'tempReservationID', tempReservationID);
    		
    			 _.remove($scope.tempReservations, reservation);
    		
    			 
    			 if(reservation.userID != $rootScope.loginuser.id){
    				 
    				 var tempFriend = appService.lodashFindBy($scope.myFriends, 'friendID', Number(reservation.userID));
	    			 
     			 	tempFriend.active = true;
    			 }
    			 
    		
    	 }else{
    		 
    		 
    		 console.log($scope.tempReservations);
    		 if($scope.tempReservations.length >= 1){//code for adding sit for friend
    			 var friendID = null;
    			 do{
	    			 friendID = prompt("Please enter friend id for this sit", "");
	    			 console.log(friendID);
	    			 
	
	    			 
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
	    			 
	    			 
	    			 
    			 }while(!appService.lodashFindBy($scope.myFriends, 'friendID', Number(friendID)))
    	
    			 if(friendID != null && friendID.trim() != ''){
	    			 tempReservation.userID = Number(friendID);
	    			
	    			 
	    			 var tempFriend = appService.lodashFindBy($scope.myFriends, 'friendID', Number(friendID));
	    			 
	    			 tempFriend.active = false;
	    			 //_.remove($scope.myFriends, tempFriend);
	    			 
	    			 
	    			 $scope.tempReservations.push(tempReservation);
	        		
    			 }
    		 }else{//asign sit for logged user
    			 $scope.tempReservations.push(tempReservation);
        		
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
    	console.log($scope.tempReservations);
    	
    	var valid = false;
    	for (var y = 0; y < $scope.tempReservations.length; y++) {
    		if($scope.tempReservations.userID == $rootScope.loginuser.id){
    			valid = true;
    		}
    	
    	}
    	
    	
    	
    	if(valid){
    		//save and send reservations - db call

    		for (var y = 0; y < $scope.tempReservations.length; y++) {
        		if($scope.tempReservations.userID == $rootScope.loginuser.id){
        			$scope.tempReservations[y].approved = true;
        			$scope.tempReservations[y].senderId = null;        			        		
        		}else{
        			$scope.tempReservations[y].approved = false;
        			$scope.tempReservations[y].senderId = $rootScope.loginuser.id;
        		}
        		
        		delete $scope.tempReservations[y].tempReservationID;
        		//data service call
        		
        		
        		$rootScope.hcReservations.push($scope.tempReservations[y]);
        	}
    		
    		
    	}else{
    		alert("Please choose one sit for yourself!");
    	}
    
    };
    
    
    $scope.isReserved = function(row, sitNo){
    	//console.log($rootScope.hcReservations);
    	for (var y = 0; y < $rootScope.hcReservations.length; y++) {
    		if($scope.hcReservations[y].rowNumber == row.rowNo && $scope.hcReservations[y].sitNumber == sitNo && $scope.hcReservations[y].repertoireId == $scope.repertoireId){
    			console.log('aaaaa');
    			return true;
    			
    		}else{
    			return false;
    		}
    	}
    
    }
    
}]);

