myModule.controller('registrationCtrl', ['$rootScope', '$scope', '$timeout', '$window', 'dataService', function ($rootScope, $scope, $timeout, $window, dataService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in reg ctrl');
    $scope.regUser = {
        email: "",
        password: "",
        name: "",
        surname: "",
        phone: "",
        city:""
    };
    $scope.submit = function () {
                 
           dataService.registration($scope.regUser,function(res) {
            	console.log(res);
            	if(res.status==201){
            		$rootScope.loginuser = res.data;
            	    $rootScope.changeView('/home');
            	}else {
            		console.log("greska");
            		$scope.errorLogin=true;
            	}
            });
            
    }
}]);
