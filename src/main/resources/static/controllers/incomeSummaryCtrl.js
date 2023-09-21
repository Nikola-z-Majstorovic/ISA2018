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
    
//    var cinemaEarn = {
//    		startDate: moment(new Date('2018-05-05')),
//    		endDate: moment(new Date('2018-08-27'))
//    }
    
    $scope.showChart=false;
    $scope.getSummary = function(){

    	console.log($scope.cinemaEarn);
	    dataService.update('cinThe','incomeSummuryForPeriod', $scope.cinemaEarn, function(res) {
	    	if(res.status==200){        
	    		console.log(res);
	    		$scope.allIncome = res.data;
	    		var namesArray= [];
	    		var numbersArray= [];
	    		for(var i=0;i<=$scope.allIncome.length-1;i++) {
	    			console.log($scope.allIncome[i]);
	    			namesArray.push($scope.allIncome[i].cinTheName);
	    			numbersArray.push($scope.allIncome[i].moneySum);
	    		}
	    		
	    		Highcharts.chart('container', {
	    		    chart: {
	    		        type: 'column'
	    		    },
	    		    title: {
	    		        text: 'Income'
	    		    },
	    		    subtitle: {
	    		        text: 'For selected period'
	    		    },
	    		    xAxis: {
	    		        categories: namesArray,
	    		        crosshair: true
	    		    },
	    		    yAxis: {
	    		        min: 0,
	    		        title: {
	    		            text: 'Price  '
	    		        }
	    		    },
//	    		    tooltip: {
//	    		        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//	    		        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//	    		            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
//	    		        footerFormat: '</table>',
//	    		        shared: true,
//	    		        useHTML: true
//	    		    },
	    		    plotOptions: {
	    		        column: {
	    		            pointPadding: 0.2,
	    		            borderWidth: 0
	    		        }
	    		    },
	    		    series: [{
	    		    	name: 'income',
	    		        data: numbersArray

	    		    }]
	    		});
	    		$scope.showChart=true;
	    		$scope.getIncomeForEntity = function (entityId) {
	    			if(appService.lodashFindBy($scope.allIncome,'cinTheId',entityId)!=undefined){
	    			return appService.lodashFindBy($scope.allIncome,'cinTheId',entityId).moneySum;
	    			}else {
	    				return 0;
	    			}
	    		}
	    		
	    	}else {
	    		console.log(res);
	    		
	    	}	
	    });
    }

    
}]);

