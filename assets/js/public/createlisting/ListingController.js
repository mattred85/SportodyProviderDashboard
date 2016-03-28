angular.module('ListingModule').controller('ListingController', function($scope, $http, $window, $location){

  // DESCRIPTION FORM
  $scope.descriptionForm = {};

  $scope.clickedDescriptionNext = function() {
    if ($scope.descriptionForm.listingName && $scope.descriptionForm.listingSummary) {
      $window.location.href = '/create_listing_extras?listingName=' + $scope.descriptionForm.listingName + '&listingSummary=' + $scope.descriptionForm.listingSummary;
    }
  };

  // EXTRAS FORM
  $scope.extrasForm = {};
  $scope.extrasForm.extras = [{id: 'extra1'}];
  $scope.addExtra = function() {
    var newExtraId = $scope.extrasForm.extras.length+1;
    $scope.extrasForm.extras.push({'id':'extra'+newExtraId});
    console.log($scope.extrasForm.extras[0]);
  };
  $scope.removeExtra = function(extra) {
    var index = $scope.extrasForm.extras.indexOf(extra);
    $scope.extrasForm.extras.splice(index, 1);
  };

  $scope.clickedExtrasNext = function() {
    var params = $location.search();

    console.log('Scope listing::::');
    console.log($window.SAILS_LOCALS.listing);

    $window.location.href = '/create_listing_preview?listingName=' + $window.SAILS_LOCALS.listing.listingName +
                            '&listingSummary=' + $window.SAILS_LOCALS.listing.listingSummary +
                            '&extras=' + $scope.extrasForm.extras;
  }
});
