angular.module('movieapp')
.controller('searchController', ['$scope','$location', function($scope, $location){
	$scope.searchMovie=function(movie){
		$location.path('/movies/'+movie);
	}
}])