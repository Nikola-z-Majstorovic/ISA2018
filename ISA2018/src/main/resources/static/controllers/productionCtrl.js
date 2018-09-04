myModule.controller('productionCtrl', ['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in production ctrl');
    
    $scope.refreshProductions = function() {
		 dataService.getAll('production','getAll',true,function(res){
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
    	console.log('usao');
    	console.log(productionId);
    	 dataService.delete('production','delete',productionId,function(res){
           	if(res.status==200){        
          		console.log(res);
          		$scope.productions = res.data;
           	}else {
           		console.log(res);
           	}          	
 		 });
    }
}]);

