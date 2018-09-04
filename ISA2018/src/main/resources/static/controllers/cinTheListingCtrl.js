myModule.controller('cinTheListingCtrl', ['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService,appService) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in cinTheListing ctrl');
    $scope.selectedEntities = [];
    $scope.entityTypeSelected = null;
    
    $scope.loadEntities = function(entityType){
    	
    	$scope.entityTypeSelected = entityType;
    	
    	if(entityType == 1){
    		$scope.entityType = 'Cinema';  
            dataService.getAll('cinThe','getAll',entityType,function(res) {
            	if(res.status==200){        
            		console.log(res);
            		$scope.selectedEntities = res.data;
            	}else {
            		console.log(res);
            		
            	}	
            });
          	
    	}else{
    		$scope.entityType = 'Theater';
            dataService.getAll('cinThe','getAll',entityType,function(res) {
            	if(res.status==200){        
            		console.log(res);
            		$scope.selectedEntities = res.data;
            	}else {
            		console.log(res);
            		
            	}
            });

    	}
    };
    
    $scope.deleteEntity = function(entityId){
    	//call data service to delete entity for given id

    	//refresh entity data
//    	if($scope.entityType == 'Cinema'){
    		//Load cinemas using data service
            dataService.delete('cinThe','delete',entityId,function(res) {
            	if(res.status==200){        
//            		  $scope.loadEntities();

                    dataService.getAll('cinThe','getAll', $scope.entityTypeSelected,function(res) {
                    	if(res.status==200){        
                    		console.log(res);
                    		$scope.selectedEntities = res.data;
                    	}else {
                    		console.log(res);
                    		
                    	}	
                    });
	
            	}else {
            		console.log(res);          		
            	}
            });
//    	}else{
//    		//Load theaters using data service
//    		
//    	}
    }
    
    

    
    
}]);

