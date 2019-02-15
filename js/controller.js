"use strict";

angular
.module('jpangApp')

.controller("NavCtrl", ["$scope", function($scope) {
	// $scope.navbarCollapsed = true;
}])

.controller('SkillCtrl', ['$scope', function ($scope) {

}])

.controller('ScrollCtrl', ['$scope', '$location', 'anchorSmoothScroll', function($scope, $location, anchorSmoothScroll) {
	$scope.gotoElement = function (eID){
	  // set the location.hash to the id of
	  // the element you wish to scroll to.
	  $location.hash('bottom');
	  // call $anchorScroll()
	  anchorSmoothScroll.scrollTo(eID);
	};
}])
;

