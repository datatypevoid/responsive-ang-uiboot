angular.module('alertCtrl', []).controller('alertController', function($scope) {

	$scope.alerts = [

	];

	$scope.addAlert = function() {

		$scope.alerts.push({
			type: 'success',

			title: 'Success!',

			msg: 'You just made this alert display by using AngularJS with UI Bootstrap. Click the "x" in the top right corner to close this bad boy.'
		});
	};

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};

});