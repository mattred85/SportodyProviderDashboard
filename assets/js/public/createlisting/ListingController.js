angular.module('ListingModule').controller('ListingController', function($scope, $http, $window){

  $scope.descriptionForm = {};

  $scope.clickedDescriptionNext = function() {
    if ($scope.descriptionForm.listingName && $scope.descriptionForm.listingSummary) {
      $window.location.href = '/create_listing_extras?listingName=' + $scope.descriptionForm.listingName + '&listingSummary=' + $scope.descriptionForm.listingSummary;
    }
  };
});
