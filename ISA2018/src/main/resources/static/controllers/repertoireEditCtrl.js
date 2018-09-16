myModule.controller('repertoireEditCtrl', ['$rootScope', '$scope', 'dataService', 'appService','$routeParams', function ($rootScope, $scope, dataService,appService,$routeParams) {
    //-----------------------------------------------------------------------------------------------------------
    console.log('we are in repertoireEdit ctrl');
   $scope.selectedProductions= [];
   var tmpData= [];
//   $scope.entity =  angular.copy(appService.lodashFindBy($rootScope.cinemasAndTheaters, 'cinemaTheaterId', Number($routeParams.entityId)));
   console.log($routeParams.entityId);
	 dataService.getAll('cinThe','find',$routeParams.entityId,function(res) {
      	if(res.status==200){        
//      		console.log(res);
      		$scope.entity = res.data;
      	//   $scope.selectedEntityRooms =  angular.copy(appService.lodashFilterBy($rootScope.rooms, 'cinemaTheaterId', Number($routeParams.entityId)));  
      		 dataService.getAll('room','findAll',$routeParams.entityId,function(res) {
      		      	if(res.status==200){        
//      		      		console.log(res);
      		      		var tmpRooms = res.data;      		      	      		    
      		      	   if($scope.entity.cinema ) {
//      		      	   $scope.selectedProductions= angular.copy(appService.lodashFilterBy($rootScope.productions,'isMovie',1));
      		      		 dataService.getAll('production','getAll',$scope.entity.cinema,function(res) {
      		      		      	if(res.status==200){        
//      		      		      		console.log(res);
      		      		      		$scope.selectedProductions = res.data;
      		      		        if ($routeParams.repertoireId == '00000000-0000-0000-0000-000000000000') {
      		      		        $scope.repertoire = {
      		      		        		id: $routeParams.repertoireId,
      		      		        };               
      		      		    }else{
//      		      		    	$scope.repertoire = angular.copy(appService.lodashFindBy($rootScope.repertoires, 'repertoireId', Number($routeParams.repertoireId)));
      		      				 dataService.getAll('repertoire','getAll',$routeParams.repertoireId,function(res) {
      		      				      	if(res.status==200){        
//      		      				      		console.log(res);
      		      				      		tmpData= res.data;
      		      				      		$scope.repertoire = appService.lodashFindBy(tmpData,'id',Number($routeParams.repertoireId));
      		      				      		console.log($scope.repertoire);
      		      				      		$scope.repertoire.productionId = $scope.repertoire.production.id;
      		      				      		$scope.repertoire.roomId = $scope.repertoire.room.id;
      		      				      		$scope.selectedEntityRooms = tmpRooms;
      		      				      		
      		      				      	}else {
      		      				      		console.log(res);         
      		      				      	}
      		      				      });
//      		      		    	console.log($scope.entity);
      		      		    	
      		      		    	//Load existing repertoire
      		      		    	//get repertoire for selected id from data service 
      		      		    	//$scope.repertoire = dataservice
      		      		    }
      		      		      	}else {
      		      		      		console.log(res);         
      		      		      	}
      		      		      });
      		      	   $scope.displayType = "Cinema";
      		         }
      		         else {
//      		      	   $scope.selectedProductions= angular.copy(appService.lodashFilterBy($rootScope.productions,'isMovie',0));
      		      		 dataService.getAll('production','getAll',$scope.entity.cinema,function(res) {
      		      		      	if(res.status==200){        
//      		      		      		console.log(res);
      		      		      		$scope.selectedProductions = res.data;
      		      		        if ($routeParams.repertoireId == '00000000-0000-0000-0000-000000000000') {
      		      		        $scope.repertoire = {
      		      		        		id: $routeParams.repertoireId,
      		      		        };               
      		      		    }else{
//      		      		    	$scope.repertoire = angular.copy(appService.lodashFindBy($rootScope.repertoires, 'repertoireId', Number($routeParams.repertoireId)));
      		      				 dataService.getAll('repertoire','getAll',$routeParams.repertoireId,function(res) {
      		      				      	if(res.status==200){        
//      		      				      		console.log(res);
      		      				      		tmpData= res.data;
      		      				      		$scope.repertoire = appService.lodashFindBy(tmpData,'id',Number($routeParams.repertoireId));
      		      				      		console.log($scope.repertoire);
      		      				      		$scope.repertoire.productionId = $scope.repertoire.production.id;
      		      				      		$scope.repertoire.roomId = $scope.repertoire.room.id;
      		      				      		$scope.selectedEntityRooms = tmpRooms;
      		      				      	}else {
      		      				      		console.log(res);         
      		      				      	}
      		      				      });
//      		      		    	console.log($scope.entity);
      		      		    	
      		      		    	//Load existing repertoire
      		      		    	//get repertoire for selected id from data service 
      		      		    	//$scope.repertoire = dataservice
      		      		    }
      		      		      	}else {
      		      		      		console.log(res);         
      		      		      	}
      		      		      });
      		      	   $scope.displayType = "Theater"
      		         }
      		      	}else {
      		      		console.log(res);         
      		      	}
      		      });
      	}else {
      		console.log(res);         
      	}
      });


 
    
    
    $scope.saveRepertoire = function(){
    	var newDateTry = moment($scope.repertoire.timeOfDisplay);
    	newDateTry = newDateTry.subtract(2, 'hours');
    	console.log(newDateTry);
//    	var date = moment($scope.repertoire.timeOfDisplay).format(),
//    	console.log(timestamp);
//    	console.log(moment(moment($scope.repertoire.timeOfDisplay).subtract(time)).format("YYYY-MM-DD HH:mm:ss"));
    	var newRepertoire = {
			id:null,
			active : true,
			price : $scope.repertoire.price,
			timeOfDisplay : newDateTry.format("YYYY-MM-DD HH:mm:ss"),// moment($scope.repertoire.timeOfDisplay).format("YYYY-MM-DD HH:mm:ss"),//moment($scope.repertoire.timeOfDisplay, 'YYYY-MM-DDTHH:mm:ss')._i,//new Date('2018-05-05 05:05:05'),//,
			cinemaTheater :  $scope.entity,
			room : appService.lodashFindBy($scope.selectedEntityRooms,'id',$scope.repertoire.roomId),
			production : appService.lodashFindBy($scope.selectedProductions,'id',$scope.repertoire.productionId)
			
    	};
    	console.log(newRepertoire);
    	if($routeParams.repertoireId == '00000000-0000-0000-0000-000000000000'){
//    		$scope.repertoire.repertoireId = $rootScope.repertoires.length + 1;
//    		$scope.repertoire.cinemaTheaterId=$scope.entity.cinemaTheaterId;
//    		console.log('bingo');
//    		console.log($scope.repertoire);
    		
    		dataService.create('repertoire','create',newRepertoire,function(res) {
		      	if(res.status==200){        
		      		console.log(res);
            		$rootScope.changeView('/repertoirelisting/'+$routeParams.entityId);
		      	}else {
		      		console.log(res);         
		      	}
		      });
    		
//    		$rootScope.repertoires.push($scope.repertoire);

    		//data service call, create repertoire, pass $scope.repertoire
    	}else{
//    		 for (var i = 0; i < $rootScope.repertoires.length; i++) {
//    			 if($rootScope.repertoires[i].repertoireId == $scope.repertoire.repertoireId){
//    				 $rootScope.repertoires[i] = angular.copy($scope.repertoire);    				     		
//    			 }
//    		 }    		 
    		//data service call, update repertoire, pass $scope.repertoire		
    		dataService.create('repertoire','update',newRepertoire,function(res) {
		      	if(res.status==200){        
//		      		console.log(res);C
//            		$rootScope.changeView('/repertoirelisting/'+$routeParams.entityId);
		        	$rootScope.changeView('/repertoirelisting/'+$scope.entity.cinemaTheaterId);
		      	}else {
		      		console.log(res);         
		      	}
		      });
    	}


    }
}]);

