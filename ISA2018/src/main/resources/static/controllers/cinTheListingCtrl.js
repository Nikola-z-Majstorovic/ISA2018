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
    
    $scope.getRatingForEntityId = function (entityID) {
    	
    	if(appService.lodashFindBy($rootScope.sumedEntityMarks,'cinemaTheaterId',entityID)!=undefined) { 
    		return appService.lodashFindBy($rootScope.sumedEntityMarks,'cinemaTheaterId',entityID).sumedMark; 
    	} else {
    		return "not rated";
    	}
    }
   
    $scope.rate = function(entityID,rate) {

    	var cinemaTheaterID = appService.lodashFindBy($scope.selectedEntities,'id',entityID);
    	console.log(rate);
    	var rating = {
    		id : null,
    		cinemaTheater : cinemaTheaterID,
    		mark : rate,
    		user : $rootScope.loginuser
    	};
    	console.log(rating);
        dataService.create('cinThe','giveRating',rating,function(res) {
        	if(res.status==201){   
        		$rootScope.allEntityRatings = [];
        		console.log(res.data);
        		for(var i=0;i<=res.data.length-1;i++) {
        			var rating = {
        				id : res.data[i].id,
        				mark :  res.data[i].mark,
        				cinemaTheaterId : res.data[i].cinemaTheater.id,
        				userId : res.data[i].user.id    				
        			};
        			$rootScope.allEntityRatings.push(rating);
        		}
        		$rootScope.sumedEntityMarks = [];
        		var grouppedArray = [];
        		grouppedArray =_.groupBy($rootScope.allEntityRatings,'cinemaTheaterId');
        		for(var propertyName in grouppedArray) {
        				var sum=0;
            			for(var j=0;j<=grouppedArray[propertyName].length-1;j++) {

            				sum=sum+grouppedArray[propertyName][j].mark;
            			}
            			
            			var numbOfMarks=grouppedArray[propertyName].length;
            			var forMathedMark = {
            					sumedMark : Math.round(sum/numbOfMarks) ,
            					cinemaTheaterId : grouppedArray[propertyName][0].cinemaTheaterId
            			};
            			$rootScope.sumedEntityMarks.push(forMathedMark);
        		}
        		$scope.loadEntities($scope.entityTypeSelected);
        	}else {
        		console.log(res);
        		
        	}	
        });
    }
    
    $scope.checkIfRated = function(entityID) {
    	var entities = [];
    	entities = appService.lodashFilterBy($rootScope.allEntityRatings,'cinemaTheaterId',entityID);
    	if(entities.length > 0){
    		if(appService.lodashFindBy(entities,'userId',$rootScope.loginuser.id) != undefined) {
    			return false;
    		}else {
    			return true;
    		}
    	}else {
    		return true;
    	}
    }
}]);

