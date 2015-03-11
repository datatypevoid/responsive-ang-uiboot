angular.module('modalCtrl', []).controller('modalController', function($scope, $modal, $log) {

	$scope.items = ['Item One', 'Item Two', 'Item Three'];

  	$scope.open = function (size) {

    var modalInstance = $modal.open({

      	templateUrl: 'myModalContent.html',

      	controller: 'modalInstanceController',

      	size: size,

     	 resolve: {

       		 items: function () {

        		  return $scope.items;
        	}
     	}
    });

    modalInstance.result.then(function (selectedItem) {

    	$scope.selected = selectedItem;

	    }, function () {
	    	$log.info('Modal dismissed at: ' + new Date());
	    });
	  };
	})

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

.controller('modalInstanceController', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});