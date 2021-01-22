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

	// Get the hero object
	$scope.heroName = $routeParams.hero;
	$scope.hero = heroByName( $scope.heroName);

	// DPS related stats
	$scope.level = 1;
	$scope.enemyArmor = 0;
	$scope.baseDamage = $scope.hero.attackDamage * Math.pow(1.04, $scope.level - 1);
	$scope.baseSpeed = $scope.hero.attackSpeed;
	$scope.dps = Math.floor($scope.baseSpeed * $scope.baseDamage * ((100 - $scope.enemyArmor) / 100 ));

	// Buffs
	$scope.stimDrone = false;
	$scope.adrenalOverload = false;
	$scope.bloodlust = false;
	$scope.willOfHeaven = false;

	// Calculate the DPS
	$scope.calculateDps = function() {
		$scope.baseDamage = $scope.hero.attackDamage * Math.pow(1.04, $scope.level - 1);
		$scope.baseSpeed = $scope.hero.attackSpeed;

		// Check buffs
		if ( $scope.stimDrone ) {
			$scope.baseSpeed *= 1.75;
		}

		if ( $scope.adrenalOverload ) {
			$scope.baseSpeed *= 1.25;
		}

		if ( $scope.bloodlust ) {
			$scope.baseSpeed *= 1.4;
		}

		if ( $scope.willOfHeaven ) {
			$scope.baseSpeed *= 1.2;
		}

		$scope.dps = Math.floor($scope.baseSpeed * $scope.baseDamage * ((100 - $scope.enemyArmor) / 100 ));
	}
});