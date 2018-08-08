myModule.controller('registrationCtrl',['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
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
            	    $rootScope.changeView('/cinematheaterlist');
            	}else {
            		console.log("greska");
            		$scope.errorLogin=true;
            	}
            });
            
    }
}]);
