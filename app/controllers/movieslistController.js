angular.module('movieapp')


.controller('movieslistController',['$scope','myService', function($scope,myService)
{
	$scope.init=function(){
		$scope.goData();
	}

	$scope.defaultpath='http://image.tmdb.org/t/p/w185/';

	 $scope.goData = function(){
	 	
     myService.getResponders('https://api.themoviedb.org/3/discover/movie?api_key=30447a7c3ad074d7cb10be58f59b517b').then(function(response){
          $scope.results = response.results;
          
     });
 }
 }]);   

 
	
