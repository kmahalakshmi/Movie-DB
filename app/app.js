angular.module('movieapp',['ngRoute'])

.config(['$locationProvider', '$routeProvider',function($locationProvider,$routeProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider
		.when('/', {
			templateUrl: 'app/views/main.html',
			controller: 'mainController'
		})

		.when('/movies', {
			templateUrl: 'app/views/movieList.html',
			controller: 'movieslistController'
		})

		.when('/moviedetail/:movieId', {
			templateUrl: 'app/views/movieDetail.html',
			controller: 'moviedetailController'
		})
		
		.otherwise({
			redirectTo: '/'
		});
}]);



