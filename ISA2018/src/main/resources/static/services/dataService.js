myModule.factory('dataService', ['$http', function ($http) {

    return {
        getAll: function (ctrl,method,param,cb) {
        	if(param==null) {
        	$http.get(ctrl+ '/' + method)
            .then(function (response) {
            	cb(response);
            }, function (reason) {
            	cb(reason);
            }); 
        	} else {
//        		console.log(ctrl + '/' + method + '/' + param);
            	$http.get(ctrl + '/' + method + '/' + param)
                .then(function (response) {
                	cb(response);
                }, function (reason) {
                	cb(reason);
                }); 
        	}
 
        },
        delete:function(ctrl,method,param,cb){
        	if(param==null) {
	        	$http.delete(ctrl+ '/' + method)
	            .then(function (response) {
	            	cb(response);
	            }, function (reason) {
	            	cb(reason);
	            });
        	} else {
        		$http.delete(ctrl + '/' + method + '/' +param)
                .then(function (response) {
                	cb(response);
                }, function (reason) {
                	cb(reason);
                }); 
        	}
        },
        create:function(ctrl,method,param,cb){
        	$http.post(ctrl+ '/' + method, param)
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