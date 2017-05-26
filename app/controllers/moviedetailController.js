angular.module('movieapp')
.controller('moviedetailController',['$scope','$location','myService','$routeParams', function($scope, $location,myService, $routeParams){
	console.log($routeParams.movieId);
	$scope.defaultpath='http://image.tmdb.org/t/p/w185/';
	$scope.init=function(){
	$scope.getMovieDetails($routeParams.movieId);
	}
	$scope.getMovieDetails=function(movieId){
		myService.getResponders('https://api.themoviedb.org/3/search/movie?api_key=30447a7c3ad074d7cb10be58f59b517b&query='+movieId).then(function(response){
           $scope.results = response.results;
          console.log(response)
      });
	}
}])

