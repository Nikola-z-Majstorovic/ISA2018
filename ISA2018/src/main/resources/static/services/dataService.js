myModule.factory('dataService', ['$http','$resource', '$window', '$routeParams', '$location', '$route', '$rootScope', 'appService', function ($http,$resource, $window, $routeParams, $location, $route, $rootScope, appService) {

    return {
        get: function (id) {
            
        },
        getAll: function (ctrl,method,param,cb) {
        	if(param==null) {
        	$http.get(ctrl+ '/' + method)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            }); 
        	} else {
            	$http.get(ctrl + '/' + method + '/' +param)
                .then(function (response) {
                	cb(response);
                }, function (reason) {
                	cb(reason);
                }); 
        	}
 
        },
        delete:function(method,param,cb){
        	$http.delete( method+ "/" + param)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
        },
        create:function(ctrl,method,param,cb){
        	$http.post(ctrl+ '/' + method , param)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
        },
        update:function(ctrl,method,param,cb){
        	$http.put(ctrl+ '/'+ method, param)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
        },
        login: function (user,cb) {
        	console.log(user);
        	$http.post('/users/login' ,user)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
        	
        	
        },
        registration : function(user,cb) {
        	$http.post('/users/registration' ,user)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            });
        }
    }
}]);