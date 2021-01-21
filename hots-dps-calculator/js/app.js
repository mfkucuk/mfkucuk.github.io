var app = angular.module('hots-dps-calculator', ['ngRoute']);

let heroByName = function(heroName) {
	var hero_;

	for ( let i = 0; i < heroesData.length; i++ ) {
		if ( heroesData[i].name == heroName ) {
			hero_ = heroesData[i];
		}
	} 

	return hero_;
}