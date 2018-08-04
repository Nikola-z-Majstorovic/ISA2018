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
    
    
    console.log($scope.selectedRoom.numOfRows);
    for (var i = 1; i <= $scope.selectedRoom.numOfRows; i++) {
    	console.log('aaa');
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
    	console.log($scope.totalRowsInRoom);
	}  
    
    console.log($scope.totalRowsInRoom);
    $scope.myFriends = appService.lodashFilterBy($rootScope.mainFriendRequests, 'userID', $rootScope.loginuser.id);
    $scope.myFriends = appService.lodashFilterBy($scope.myFriends, 'approved', true);
    
    //console.log($scope.myFriends);
    $scope.tempReservations = [];
    $scope.checkSit = function(rowNo, sitNo){
    	
    	 var tempReservationID = '-' + rowNo + '-' + sitNo + '-';

    	 var tempReservation = {
    			 tempReservationID: tempReservationID,
    			 userID: $rootScope.loginuser.id,
    			 approved: false,
    			 rowNumber: rowNo,
    			 sitNumber: sitNo,
    			 repertoireId: $scope.repertoireId
    	 };
    	 
    	 if(appService.lodashFindBy($scope.tempReservations, 'tempReservationID', tempReservationID)){
    		 _.remove($scope.tempReservations, tempReservation);

    		 return false;
    	 }else{
    		 
    		 if($scope.tempReservations.length > 0){
    			 var friendID = null;
    			 do{
	    			 friendID = prompt("Please enter friend id for this sit", "");
	    			 console.log(friendID);
	    			 
	
	    			 
	    			 if(friendID == null){
	    				 
	    				 break;
	    			 }
	    			 
	    			 
	    			 
    			 }while(!appService.lodashFindBy($scope.myFriends, 'friendID', Number(friendID)))
    	
    			 if(friendID != null){
	    			 tempReservation.userID = friendID;
	    			
	    			 
	    			 var tempFriend = appService.lodashFindBy($scope.myFriends, friendID, Number(friendID));
	    			 _.remove($scope.myFriends, tempFriend);
	    			 
	    			 
	    			 $scope.tempReservations.push(tempReservation);
	        		 return true;
    			 }
    		 }else{
    			 $scope.tempReservations.push(tempReservation);
        		 return true;
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
    };
    
    
    
}]);

