myModule.controller('repertoireCtrl', ['$rootScope', '$scope', 'dataService', 'appService','$routeParams', function ($rootScope, $scope, dataService,appService,$routeParams) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in repertoire ctrl');
    $scope.selectedRepertoires = [];
    console.log($rootScope.loginuser.role);
    $scope.selectedEntityId =  Number($routeParams.cinTheId);
    $scope.refreshRepertoire = function () {

//    	$scope.selectedRepertoires = angular.copy(appService.lodashFilterBy($rootScope.repertoires, 'cinemaTheaterId', Number($routeParams.cinTheId)));
    	dataService.getAll('repertoire','getAll', $scope.selectedEntityId,function(res) {
        	if(res.status==200){        
        		console.log(res);
        		$scope.selectedRepertoires = res.data;
        	}else {
        		console.log(res);
        		
        	}	
    	});
    }
    
	$scope.deleteRepertoire = function (repertoireId) {
		//call dataService delete
		dataService.delete('repertoire', 'delete', repertoireId,function(res) {
        	if(res.status==200){        
        		$scope.refreshRepertoire();
        	}else {
        		console.log(res);        		
        	}	
    	});
	}

    $scope.refreshRepertoire();
    
    
    $scope.changeViewReservation = function(repertoireId, entityId){
    	
    		
    	  dataService.getAll('reservation','getAll', repertoireId,function(res) {

    		  $rootScope.allReservations = res.data;

    		  $rootScope.changeView('/ticketReservation/' + entityId + '/' + repertoireId);
  			
  		
  		});
    	
    	
    	
    }
}]);

