myModule.controller('cinTheEditCtrl', ['$rootScope', '$scope', 'dataService', 'appService','$routeParams', function ($rootScope, $scope, dataService,appService,$routeParams) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in cinTheEdit ctrl');
   
    $scope.showEntityType = true;
    $scope.allEntities = [];
    if ($routeParams.entityid == '00000000-0000-0000-0000-000000000000') {
        $scope.entity = {
        	id: null
        };               
    }else{
    	$scope.showEntityType = false;
    	 dataService.getAll('cinThe','findAll',null,function(res) {
         	if(res.status==200){               
         		$scope.allEntities = res.data;
         		$scope.entity = angular.copy(appService.lodashFindBy($scope.allEntities, 'id', Number($routeParams.entityid)));
         	}else {
         		console.log(res);         
         	}
         });
    	 
 
    }
    
    
    $scope.saveEntity = function(){
    	
    	if($routeParams.entityid == '00000000-0000-0000-0000-000000000000'){
 
    		$scope.entity.cinema = Number($scope.entity.cinema);
   
            dataService.create('cinThe','create',$scope.entity,function(res) {
            	if(res.status==201){                
            		$rootScope.changeView('/cinematheaterlist');
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
    		$scope.entity.cinema = Number($scope.entity.cinema);
            dataService.update('cinThe','update',$scope.entity,function(res) {
            	if(res.status==201){        
            		$rootScope.changeView('/cinematheaterlist');
            	}else {
            		console.log(res);
            		
            	}	
            });
    		//data service call, update entity, pass $scope.entity		 
    	}
    	
    	
    }
}]);

