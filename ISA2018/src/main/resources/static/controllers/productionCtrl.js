myModule.controller('productionCtrl', ['$rootScope', '$scope', '$timeout', '$window', 'dataService','$http', '$routeParams', 'appService', function ($rootScope, $scope, $timeout, $window, dataService,$http, $routeParams, appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in production ctrl');
    
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

