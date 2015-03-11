angular.module('dropDownCtrl', [])

// controller for the Services drop down menu in the nav bar
.controller('servicesDropDown', function($scope, $log) {

	$scope.status = {
		isopen: false
	};

	$scope.toggled = function(open) {
		$log.log('Services dropdown is now: ', open);
	};

	$scope.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.status.isopen = !$scope.status.isopen;
	};
})

// controller for the My Account drop down menu in the nav bar
.controller('accountDropDown', function($scope, $log) {
	$scope.status = {
		isopen: false
	};

	$scope.toggled = function(open) {
		$log.log('My Account dropdown is now: ', open);
	};

	$scope.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.status.isopen = !$scope.status.isopen;
	};
});