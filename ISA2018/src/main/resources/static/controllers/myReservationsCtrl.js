myModule.controller('myReservationsCtrl', ['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in myReservations ctrl');
   
    //Call data service to return all reservations for this user (logged in user)
    
    $scope.myAllReservations = appService.lodashFilterBy($rootScope.hcReservations, 'userID', $rootScope.loginuser.id);

    //Call data service to return all reservations for this user sent to him by other users and they are not approved

   //Confirm/Decline invitation
   $scope.confirmInvitation = function(invitation, yesNo){
	   
	   if(yesNo){//approve invitation
		   
		   //call data service update
		   var invitation = appService.lodashFindBy($rootScope.hcReservations, 'id', invitation.id);
		   
		   if(invitation){
			   invitation.approved = true;
		   }
   
	   }else{//delete invitation
		   //call data service delete
		   
		   _.remove($scope.myAllReservations, invitation);
	   }
   }
}]);

