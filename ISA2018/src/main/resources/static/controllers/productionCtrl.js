myModule.controller('productionCtrl', ['$rootScope', '$scope', '$timeout', '$window', 'dataService','$http', '$routeParams', 'appService', function ($rootScope, $scope, $timeout, $window, dataService,$http, $routeParams, appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in production ctrl');
    
    $scope.refreshProductions = function() {
		 dataService.getAll('production','getAll',productionType,function(res){
          	if(res.status==200){        
         		console.log(res);
         		$scope.productions = res.data;
          	}else {
          		console.log(res);
          	}          	
		 });
    };
    $scope.refreshProductions();
    $scope.getProductionType = function (productionType) {
    	 if (productionType == 1 ) {

    		 return "movie";
    	 }else {
    		 return "display";
    	 }
    }
    $scope.deleteProduction = function (productionId) {
    	//calling data service delete
    }
}]);

