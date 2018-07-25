myModule.factory('dataService', ['$http','$resource', '$window', '$routeParams', '$location', '$route', '$rootScope', 'appService', function ($http,$resource, $window, $routeParams, $location, $route, $rootScope, appService) {

    return {
        get: function (id) {
            
        },
        getAll: function (method,cb) {
        	$http.get('/users/' + method)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
 
        },
        delete:function(method,param,cb){
        	$http.delete('/rest/' + method+ "/" + param)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
        },
        create:function(method,param,cb){
        	$http.post('/rest/'+  method, param)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
        },
        update:function(ctrl,method,param,cb){
        	$http.put('/WebFoodDelivery/rest/' +ctrl+ '/'+ method, param)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
        },
        login: function (user,cb) {
        	$http.post('/WebFoodDelivery/rest/users/signIn', user)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
        	
        	
        },
        reg : function(user,cb) {
        	$http.post('/WebFoodDelivery/rest/users/signUp', user)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
        }
    }
}]);