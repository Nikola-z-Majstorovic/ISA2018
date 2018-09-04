myModule.controller('incomeSummaryCtrl', ['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in incomeSummaryCtrl ctrl');
    $scope.selectedEntities = [];

	$scope.entityType = 'Cinema';  
    dataService.getAll('cinThe','findAll', null,function(res) {
    	if(res.status==200){        
    		console.log(res);
    		$scope.selectedEntities = res.data;
    	}else {
    		console.log(res);
    		
    	}	
    });
    
    var cinemaEarn = {
    		startDate: moment(new Date('2018-05-05')),
    		endDate: moment(new Date('2018-08-27'))
    }
    
    
//    $scope.cinemaEarn = {
//    		startDate: null,
//    		endDate: null
//    }
    
    $scope.getSummary = function(){
//    	console.log($scope.cinemaEarn.startDate);
//    	var date = new Date($scope.cinemaEarn.startDate);
//    	
//    	var day = date.getDate();
//    	var monthIndex = date.getMonth();
//    	var year = date.getFullYear();
//    	  
//    	$scope.cinemaEarn.startDate = year + '-' + monthIndex + '-' + day;
//    	
//    	date = new Date($scope.cinemaEarn.startDate);
//    	
//    	var day = date.getDate();
//    	var monthIndex = date.getMonth();
//    	var year = date.getFullYear();
//    	
//    	$scope.cinemaEarn.endDate = year + '-' + monthIndex + '-' + day;

    	console.log($scope.cinemaEarn);
	    dataService.update('cinThe','incomeSummuryForPeriod', $scope.cinemaEarn, function(res) {
	    	if(res.status==200){        
	    		console.log(res);
	    		
	    	}else {
	    		console.log(res);
	    		
	    	}	
	    });
    }
    
    
    
 
    
}]);

