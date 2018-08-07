myModule.controller('repertoireCtrl', ['$rootScope', '$scope', '$timeout', '$window', 'dataService','$http', '$routeParams', 'appService', function ($rootScope, $scope, $timeout, $window, dataService,$http, $routeParams, appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in repertoire ctrl');
    $scope.selectedRepertoires = [];
    console.log($rootScope.loginuser.role);
    $scope.selectedEntityId =  Number($routeParams.cinTheId);
    $scope.refreshRepertoire = function () {

//    	$scope.selectedRepertoires = angular.copy(appService.lodashFilterBy($rootScope.repertoires, 'cinemaTheaterId', Number($routeParams.cinTheId)));
    	dataService.getAll('repertoire','getAll',null,function(res) {
        	if(res.status==200){        
        		console.log(res);
        		$scope.selectedRepertoires = res.data;
        	}else {
        		console.log(res);
        		
        	}	
    	});
    }
    
    $scope.getProductionNameForId = function(productionId) {
    	return appService.lodashFindBy($rootScope.productions,'idProduction',productionId);
    }
    
	$scope.deleteRepertoire = function (repertoireId) {
	//call dataService delete

	}
    $scope.roomNameForId = function(roomId) {
    	return appService.lodashFindBy($rootScope.rooms,'idRoom',roomId);
    }
    
    $scope.refreshRepertoire();
}]);

