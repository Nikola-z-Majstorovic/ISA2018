myModule.controller('myReservationsCtrl', ['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in myReservations ctrl');
   
    //Call data service to return all reservations for this user (logged in user)
    
//    $scope.myAllReservations = appService.lodashFilterBy($rootScope.hcReservations, 'userID', $rootScope.loginuser.id);
	//console.log($rootScope.loginuser.id);
	
	
	
	dataService.getAll('repertoire','getEveryRepertoire',null,function(res) {
      	if(res.status==200){        
      		//console.log(res);
      		$scope.allRepertoires = res.data;
      	
      		$scope.getRepertoireInfo = function(repertoireId, optionInfo){
      				if(optionInfo == 'name'){
      					//console.log(appService.lodashFindBy($scope.allRepertoires, 'id', repertoireId));
      					return appService.lodashFindBy($scope.allRepertoires, 'id', repertoireId).production.name;
      				}else if(optionInfo == 'time'){
      					
      					return appService.lodashFindBy($scope.allRepertoires, 'id', repertoireId).timeOfDisplay;
      				}
      			}
      		
      		$scope.isPossibleToCancel = function(repertoireId){
      	    	var repertoire = appService.lodashFindBy($scope.allRepertoires, 'id', repertoireId);
      	    	
      	    	var currentDateTime = moment(new Date());
      	    	
      	    	var difference = currentDateTime.diff(moment(repertoire.timeOfDisplay), 'minutes');
      	    	
      	    	if(difference < 30){
      	    		return true;
      	    	}else{
      	    		return false;
      	    	}    	
      	    	
      	    }
      		
      		//Call data service to return all reservations for this user sent to him by other users and they are not approved
      		$scope.refreshReservations();
      			
      	}else {
      		console.log(res);         
      	}
      });

	
	$scope.reservationHistory = [];
	$scope.refreshReservations = function () {
		dataService.getAll('reservation','getAll',$rootScope.loginuser.id,function(res) {
	      	if(res.status==200){        
	      		//console.log(res);
	      		$scope.myAllReservations = res.data;
	      		
	      		console.log($scope.myAllReservations);
	      		
	      		//setTimeout(function(){
	      			for(var i=0; i <= $scope.myAllReservations.length - 1; i++){
		      			console.log($scope.allRepertoires);
		      			var repertoire = appService.lodashFindBy($scope.allRepertoires, 'id', $scope.myAllReservations[i].repertoireId);
		      			
		      			if($scope.myAllReservations[i].approved == true){
		      				if(moment() > moment(repertoire.timeOfDisplay)){
		      					$scope.reservationHistory.push($scope.myAllReservations[i]);
		      				}
						}
		      		}
	      			
	      			for(var i=0; i <= $scope.reservationHistory.length - 1; i++){
	      				console.log($scope.reservationHistory[i]);
	      				$scope.myAllReservations = _.without($scope.myAllReservations, $scope.reservationHistory[i]);
	      			}
	      		//}, 1200);
		
	      	}else {
	      		console.log(res);         
	      	}
	      });
	}
    
   //Confirm/Decline invitation
    $scope.confirmInvitation = function(invitation, yesNo){
	   
	   if(yesNo){//approve invitation
		   
		   //call data service update
		   var invitation = appService.lodashFindBy($scope.myAllReservations, 'id', invitation.id);
		   
		   if(invitation){
			   invitation.approved = true;
		   }
		  dataService.update('reservation','update',invitation,function(res) {
		      	if(res.status==200){        
		      		console.log(res);		 
		      	}else {
		      		console.log(res);         
		      	}
		      });
	   }else{//delete invitation
		   //call data service delete
		   console.log(invitation.id);
			  dataService.delete('reservation','delete',invitation.id,function(res) {
			      	if(res.status==200){        
			      		console.log(res);
			      		$scope.refreshReservations();
			      	}else {
			      		console.log(res);         
			      	}
			      });
//		   _.remove($scope.myAllReservations, invitation);
	   }
   }
    
    
    $scope.cancelReservation = function(reservationId){
    	console.log(reservationId);
    	//call dataservice delete reservation
    	dataService.delete('reservation','delete',reservationId,function(res) {
	      	if(res.status==200){        
	      		console.log(res);
	      		$scope.refreshReservations();
	      	}else {
	      		console.log(res);         
	      	}
	      });
    }
    
    $scope.getFriendName = function(userId){
   	 return appService.lodashFindBy($rootScope.users, 'id', userId);
   }
    
    
}]);

