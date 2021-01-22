app.controller('listCtrl', function($scope) {
	$scope.heroes = heroesData;
	$scope.heroesNames = [];
	
	for ( let i = 0; i < heroesData.length; i++ ) {
		$scope.heroesNames[i] = heroesData[i].name;
	}

	$scope.searchHero = "";

	$scope.clear = function() {
		$scope.searchHero = "";
	}
});

app.controller('heroesCtrl', function($scope, $routeParams) {
	$scope.heroName = $routeParams.hero;
	$scope.hero = heroByName( $scope.heroName);
	$scope.level = 1;
	$scope.enemyArmor = 0;
	$scope.dps = Math.floor($scope.hero.attackDamage * $scope.hero.attackSpeed * Math.pow(1.04, $scope.level-1) * ((100 - $scope.enemyArmor) / 100 ));
	$scope.calculateDps = function() {
		$scope.dps = Math.floor($scope.hero.attackDamage * $scope.hero.attackSpeed * Math.pow(1.04, $scope.level-1) * ((100 - $scope.enemyArmor) / 100 ));
	}
});