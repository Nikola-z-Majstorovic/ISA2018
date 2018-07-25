myModule.controller('repertoireEditCtrl', ['$rootScope', '$scope', '$timeout', '$window', 'dataService','$http', '$routeParams', 'appService', function ($rootScope, $scope, $timeout, $window, dataService,$http, $routeParams, appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in repertoireEdit ctrl');
   $scope.selectedProductions= [];
   $scope.entity =  angular.copy(appService.lodashFindBy($rootScope.cinemasAndTheaters, 'cinemaTheaterId', Number($routeParams.entityId)));
   $scope.selectedEntityRooms =  angular.copy(appService.lodashFilterBy($rootScope.rooms, 'cinemaTheaterId', Number($routeParams.entityId)));  
   if($scope.entity.isCinema ) {
	   $scope.selectedProductions= angular.copy(appService.lodashFilterBy($rootScope.productions,'isMovie',1));
	   $scope.displayType = "Cinema";
   }
   else {
	   $scope.selectedProductions= angular.copy(appService.lodashFilterBy($rootScope.productions,'isMovie',0));
	   $scope.displayType = "Theater"
   }
    if ($routeParams.repertoireId == '00000000-0000-0000-0000-000000000000') {
        $scope.repertoire = {
        		repertoireId: $routeParams.repertoireId,
        };               
    }else{
    	$scope.repertoire = angular.copy(appService.lodashFindBy($rootScope.repertoires, 'repertoireId', Number($routeParams.repertoireId)));

    	console.log($scope.entity);
    	
    	//Load existing repertoire
    	//get repertoire for selected id from data service 
    	//$scope.repertoire = dataservice
    }
    
    
    $scope.saveRepertoire = function(){
    	console.log($scope.entity);
    	
    	if($scope.repertoire.repertoireId == '00000000-0000-0000-0000-000000000000'){
    		$scope.repertoire.repertoireId = $rootScope.repertoires.length + 1;
    		$scope.repertoire.cinemaTheaterId=$scope.entity.cinemaTheaterId;
    		console.log('bingo');
    		console.log($scope.repertoire);
    		$rootScope.repertoires.push($scope.repertoire);
    		console.log($scope.repertoires);

    		//data service call, create repertoire, pass $scope.repertoire
    	}else{
    		 for (var i = 0; i < $rootScope.repertoires.length; i++) {
    			 if($rootScope.repertoires[i].repertoireId == $scope.repertoire.repertoireId){
    				 $rootScope.repertoires[i] = angular.copy($scope.repertoire);    				     		
    			 }
    		 }    		 
    		//data service call, update repertoire, pass $scope.repertoire		 
    	}
    	
    	$rootScope.changeView('/repertoirelisting/'+$scope.entity.cinemaTheaterId);
    }
}]);

