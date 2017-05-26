angular.module('movieapp')
.controller('mainController',['$scope','$location','myService', function($scope, $location,myService){
	$scope.searchMovie=function(movieName){
		$location.path('/moviedetail/'+movieName);
		// myService.getResponders('https://api.themoviedb.org/3/search/movie?api_key=30447a7c3ad074d7cb10be58f59b517b&query='+movieName).then(function(response){
  //         $scope.results = response.results;
  //         console.log(response)
  //    });
	}
}])

