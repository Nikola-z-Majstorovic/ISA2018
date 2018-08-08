myModule.controller('productionEditCtrl', ['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in productionEditCtrl ctrl');
   
    $scope.showProductionType = true;
    if ($routeParams.productionId == '00000000-0000-0000-0000-000000000000') {
        $scope.production = {
        		idProduction: $routeParams.productionId,
        };               
    }else{
    	$scope.showProductionType = false;
    	console.log($routeParams.productionId);
    	$scope.production = angular.copy(appService.lodashFindBy($rootScope.productions, 'idProduction', Number($routeParams.productionId)));

    	console.log($scope.production);
    	//Load existing prodution
    	//get prodution for selected id from data service 
    	//$scope.prodution = dataservice
    }
    
    
    $scope.saveProduction = function(){
    	console.log($scope.production);
    	
    	if($scope.production.idProduction == '00000000-0000-0000-0000-000000000000'){
    		$scope.production.idProduction = $rootScope.productions.length + 1;
    		console.log('bingo');
    		console.log($scope.production);
    		$scope.production.isMovie = Number($scope.production.isMovie);
    		$rootScope.productions.push($scope.production);


    		//data service call, create production, pass $scope.production
    	}else{
    		 for (var i = 0; i < $rootScope.productions.length; i++) {
    			 if($rootScope.productions[i].idProduction == $scope.production.idProduction){
    				 $rootScope.productions[i] = angular.copy($scope.production);    				     		
    			 }
    		 }    		 
    		//data service call, update production, pass $scope.production		 
    	}
    	
    	$rootScope.changeView('/productionList');
    }
}]);

