app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'list/list.html',
		controller : 'listCtrl'
	})
	.when('/heroes/:hero', {
		templateUrl : 'heroes/calc.html',
		controller : 'heroesCtrl'
	})
});