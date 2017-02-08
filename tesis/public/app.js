var appDespe = angular.module('testTesis', ['ui.router']);

appDespe.factory('hotelsFactory',function($http){
	return{
		getHotelsByDestination: function(destination){
			return $http.get('/api/hotel/'+destination).then(function (response) {
				return response.data;
      		});
		}
	}
});

appDespe.controller('HotelController', function($scope,hotels){

  $scope.hotels = hotels;
  $scope.addHotel = function(){
  $scope.hotels.push({
	name: $scope.name,
        destination: $scope.destination,
	price: $scope.price,
	stars: $scope.stars,
	services: $scope.services});
  };
});

appDespe.controller('HomeController', function($scope,$stateParams,hotelsFactory){

	function init(){
		$scope.hotels = hotelsFactory.getHotelsByDestination("RIO");
	};
	init();
});



appDespe.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeController'
    });

  $stateProvider
    .state('hotel', {
      url: '/hotel',
      templateUrl: 'hotel.html',
      controller: 'HotelController'
    });

  $urlRouterProvider.otherwise('home');
}]);

appDespe.factory('hotels', [function(){
  var o = {
    hotels: []
  };
  return o;
}]);

