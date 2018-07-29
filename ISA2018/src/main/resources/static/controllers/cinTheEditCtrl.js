myModule.controller('cinTheEditCtrl', ['$rootScope', '$scope', '$timeout', '$window', 'dataService','$http', '$routeParams', 'appService', function ($rootScope, $scope, $timeout, $window, dataService,$http, $routeParams, appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in cinTheEdit ctrl');
   
    $scope.showEntityType = true;
    if ($routeParams.entityid == '00000000-0000-0000-0000-000000000000') {
        $scope.entity = {
        	cinemaTheaterId: $routeParams.entityid,
        };               
    }else{
    	$scope.showEntityType = false;
    	$scope.entity = angular.copy(appService.lodashFindBy($rootScope.cinemasAndTheaters, 'cinemaTheaterId', Number($routeParams.entityid)));

    	console.log($scope.entity);
    	
    	
    	//Load existing theater or cinema
    	//get entity for selected id from data service 
    	//$scope.entity = dataservice
    }
    
    
    $scope.saveEntity = function(){
    	console.log($scope.entity);
    	
    	if($scope.entity.cinemaTheaterId == '00000000-0000-0000-0000-000000000000'){
    		$scope.entity.cinemaTheaterId = $rootScope.cinemasAndTheaters.length + 1;
    		console.log($scope.entity);
    		$scope.entity.isCinema = Number($scope.entity.isCinema);
    		$rootScope.cinemasAndTheaters.push($scope.entity);

            dataService.create('cinThe','create',$scope.entity,function(res) {
            	if(res.status==200){        
            		console.log(res);
            	}else {
            		console.log(res);
            		
            	}	
            });
    		//data service call, create entity, pass $scope.entity
    	}else{
//    		 for (var i = 0; i < $rootScope.cinemasAndTheaters.length; i++) {
//    			 if($rootScope.cinemasAndTheaters[i].cinemaTheaterId == $scope.entity.cinemaTheaterId){
//    				 $rootScope.cinemasAndTheaters[i] = angular.copy($scope.entity);    				     		
//    			 }
//    		 }    	
            dataService.update('cinThe','update',$scope.entity,function(res) {
            	if(res.status==200){        
            		console.log(res);
            	}else {
            		console.log(res);
            		
            	}	
            });
    		//data service call, update entity, pass $scope.entity		 
    	}
    	
    	$rootScope.changeView('/cinematheaterlist');
    }
}]);

