
angular.module('movieapp').factory("myService", ['$http', function($http) {
	var myService={};
	myService.getResponders=function(path) {    
            return $http.get(path)
            .then(function(response) {
                console.log("coming from servicejs", response.data);
                return response.data;
            });
        }
    return myService;
}]);