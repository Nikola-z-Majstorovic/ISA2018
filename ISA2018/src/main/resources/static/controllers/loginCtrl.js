myModule.controller('loginCtrl', ['$rootScope', '$scope', '$timeout', '$window', 'dataService','$http', function ($rootScope, $scope, $timeout, $window, dataService,$http) {
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

