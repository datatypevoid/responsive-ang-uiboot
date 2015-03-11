angular.module('carouselCtrl', []).controller('carouselController', function($scope) {

	$scope.carouselInterval = 5000;

	var slides = $scope.slides = [

		{
			image: 'images/carousel_large_01.jpg',

			title: 'Bootstrap 3',

			text: 'Learn how to build your first responsive website with the brand new Twitter Bootstrap 3!'
		},

		{
			image: 'images/carousel_large_02.jpg',

			title: 'Learn to Code a Website in Four Hours!',
			
			text: 'PSD to HTML5 & CSS3 is a popular Udemy course that has helped thousands of aspiring web designers launch their web design career.'
		},

		{
			image: 'images/carousel_large_03.jpg',

			title: 'Web Hosting 101',
			
			text: 'Learn how to buy a perfect domain name and hosting package, and get your website live on the web with ease.'
		}
	];

});