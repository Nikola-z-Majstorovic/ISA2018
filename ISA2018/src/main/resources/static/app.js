var myModule = angular.module('myModule', ['ngRoute', 'ngResource']);

myModule.config(['$routeProvider' ,'$locationProvider', function ($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider
        .when('/login',
            {
                controller: 'loginCtrl',
                templateUrl: 'view/login.html',
                resolve: {}
            })
        .when('/registration',
            {
                controller: 'registrationCtrl',
                templateUrl: 'view/registration.html',
                resolve: {}
            })
        .when('/cinematheaterlist',
            {
                controller: 'cinTheListingCtrl',
                templateUrl: 'view/cinTheListing.html',
                resolve: {}
            })
        .when('/cinematheater/edit/:entityid',
            {
                controller: 'cinTheEditCtrl',
                templateUrl: 'view/cinTheEdit.html',
                resolve: {}
            })
        .when('/repertoirelisting/:cinTheId',
            {
                controller: 'repertoireCtrl',
                templateUrl: 'view/repertoire.html',
                resolve: {}
            })
        .when('/repertoire/edit/:repertoireId/:entityId',
            {
                controller: 'repertoireEditCtrl',
                templateUrl: 'view/repertoireEdit.html',
                resolve: {}
            })            
        .when('/productionList',
            {
                controller: 'productionCtrl',
                templateUrl: 'view/production.html',
                resolve: {}
            })
        .when('/production/edit/:productionId',
            {
                controller: 'productionEditCtrl',
                templateUrl: 'view/productionEdit.html',
                resolve: {}
            })   
        .when('/friendList',
            {
                controller: 'friendListCtrl',
                templateUrl: 'view/friendList.html',
                resolve: {   
                	
                }
            })  
        .when('/ticketReservation/:repertoireId/:entityId',
            {
                controller: 'reservationCtrl',
                templateUrl: 'view/reservation.html',
                resolve: {
//                 	allReservations : function(dataService, $rootScope){
//                		//return "bingo";
//                 		console.log($rootScope.selectedRepertoire);
//                		  dataService.getAll('reservation','getAll', $rootScope.selectedRepertoire,function(res) {
//                			console.log(res.data);
//                			return res.data;
//                			
//                			
//                		
//                		});
//                	}
                	
                }
            })  
        .when('/myReservations',
            {
                controller: 'myReservationsCtrl',
                templateUrl: 'view/myReservations.html',
                resolve: {}
            })         
        .when('/incomeSummary',
            {
                controller: 'incomeSummaryCtrl',
                templateUrl: 'view/incomeSummary.html',
                resolve: {}
            }) 
            
}]);

myModule.run([ '$rootScope', '$location', 'appService', function ( $rootScope,$location, appService) {


    appService.init();
    $rootScope.changeView('/login');
    //-----------------------------------------------------------------------------------------------------
    $rootScope.$on('$locationChangeStart', function () {
        $rootScope.route = $location.path();

    });
}]);