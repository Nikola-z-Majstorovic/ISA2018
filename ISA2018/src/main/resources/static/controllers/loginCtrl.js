myModule.controller('loginCtrl',['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in login ctrl');
    $scope.errorLogin=false;

    $scope.login = function () {

        dataService.login($rootScope.loginuser,function(res) {
        	if(res.status==200){        
        		console.log(res);
        		$rootScope.loginuser= res.data;
        	    $rootScope.changeView('/cinematheaterlist');
        	}else {
        		console.log(res);
        		
        	}
        });
    }
}]);

