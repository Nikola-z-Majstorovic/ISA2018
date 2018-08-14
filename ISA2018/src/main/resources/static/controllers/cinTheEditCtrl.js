myModule.controller('cinTheEditCtrl', ['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in cinTheEdit ctrl');
   
    $scope.showEntityType = true;
    $scope.allEntities = [];
    if ($routeParams.entityid == '00000000-0000-0000-0000-000000000000') {
        $scope.entity = {
        	cinemaTheaterId: $routeParams.entityid,
        };               
    }else{
    	$scope.showEntityType = false;
    	 dataService.getAll('cinThe','getAll',null,function(res) {
         	if(res.status==200){        
         		console.log(res);
         		$scope.allEntities = res.data;
         		$scope.entity = angular.copy(appService.lodashFindBy($scope.allEntities, 'id', Number($routeParams.entityid)));
         	}else {
         		console.log(res);         
         	}
         });
    	 
    	 //console.log($scope.allEntities); // zasto je allEntities prazna niz
    	 
//    	$scope.entity = angular.copy(appService.lodashFindBy($rootScope.cinemasAndTheaters, 'cinemaTheaterId', Number($routeParams.entityid)));
    	
    	
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
    		console.log($scope.entity);
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

