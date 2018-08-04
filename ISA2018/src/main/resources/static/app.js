var myModule = angular.module('myModule', ['ngRoute', 'ngResource']);

myModule.config(['$routeProvider', '$httpProvider','$locationProvider', function ($routeProvider, $httpProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
    //#region Routes 
    $routeProvider
//        .when('/home',
//            {
//                controller: 'homeCtrl',
//                templateUrl: 'view/home.html',
//                resolve: {}
//            })
//            	
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
                resolve: {}
            })  
        .when('/ticketReservation/:repertoireId/:entityId',
            {
                controller: 'reservationCtrl',
                templateUrl: 'view/reservation.html',
                resolve: {}
            })  
            
}]);

myModule.run(['$resource', '$rootScope', '$window', '$timeout', '$location', '$routeParams', 'appService', 'dataService', function ($resource, $rootScope, $window, $timeout, $location, $routeParams, appService, dataService) {


    appService.init();
    $rootScope.changeView('/login');
    //-----------------------------------------------------------------------------------------------------
    $rootScope.$on('$locationChangeStart', function () {
        $rootScope.route = $location.path();

    });
}]);