angular.module('tabsCtrl', []).controller('tabsController', function($scope, $window) {

	$scope.tabs = [

		{ 
			title: 'Dynamic Title 1', 

			subtitle: 'Dynamic Subtitle 1',

			author: 'Batou',

			date: '04/05/0006',

			time: '02:00',

			timezone: 'PST',

			img: 'https://placehold.it/140',

			content: 

				'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
				' tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
				' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
				' consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
				' cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
				' proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
		},

		{ 
			title: 'Dynamic Title 2', 

			subtitle: 'Dynamic Subtitle 2',

			author: 'Ishikawa',

			date: '01/02/0003',

			time: '01:00',

			timezone: 'EST',

			img: 'https://placehold.it/140',

			content: 

				'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
				' tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
				' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
				' consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
				' cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
				' proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
		},


	];

	$scope.alertMe = function() {
		setTimeout(function() {
			$window.alert('You\'ve selected the alert tab!');
		});
	};

});