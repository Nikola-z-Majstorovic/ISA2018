myModule.controller('productionEditCtrl', ['$rootScope', '$scope', 'dataService', 'appService','$routeParams', function ($rootScope, $scope, dataService,appService,$routeParams) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in productionEditCtrl ctrl');
   
    $scope.showProductionType = true;
    if ($routeParams.productionId == '00000000-0000-0000-0000-000000000000') {
        $scope.production = {
        		id:null
        };               
    }else{
    	$scope.showProductionType = false;
//    	console.log($routeParams.productionId);
//    	$scope.production = angular.copy(appService.lodashFindBy($rootScope.productions, 'idProduction', Number($routeParams.productionId)));
	   	 dataService.getAll('production','findAll',null,function(res) {
	      	if(res.status==200){        
	      		console.log(res);
	      		$scope.allProductions = res.data;
	      		$scope.production = angular.copy(appService.lodashFindBy($scope.allProductions, 'id',Number($routeParams.productionId)));
	      	}else {
	      		console.log(res);         
	      	}
	      });
//    	console.log($scope.production);
    	//Load existing prodution
    	//get prodution for selected id from data service 
    	//$scope.prodution = dataservice
    }
    
    
    $scope.saveProduction = function(){

    	if($routeParams.productionId == '00000000-0000-0000-0000-000000000000'){

//    		$scope.production.idProduction = $rootScope.productions.length + 1;
//    		console.log($scope.production);
    		$scope.production.movie = Number($scope.production.movie);
//    		$rootScope.productions.push($scope.production);
    		dataService.create('production','create',$scope.production,function(res) {
    	      	if(res.status==200){        
    	      		console.log(res);
    	      		$rootScope.changeView('/productionList');
    	      	}else {
    	      		console.log(res);         
    	      	}
    	      });

    		//data service call, create production, pass $scope.production
    	}else{
    		$scope.production.movie = Number($scope.production.movie);
    		dataService.update('production','update',$scope.production,function(res) {
    	      	if(res.status==200){        
    	      		console.log(res);
    	      		$rootScope.changeView('/productionList');
    	      	}else {
    	      		console.log(res);         
    	      	}
    	      });
//    		 for (var i = 0; i < $rootScope.productions.length; i++) {
//    			 if($rootScope.productions[i].idProduction == $scope.production.idProduction){
//    				 $rootScope.productions[i] = angular.copy($scope.production);    				     		
//    			 }
//    		 }    		 
    		//data service call, update production, pass $scope.production		 
    	}
    	
    	
    }
}]);

