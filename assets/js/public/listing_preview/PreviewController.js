angular.module('ListingModule').controller('PreviewController', function($scope, $http, $window, $location) {
  // PREVIEW
  $scope.preview = {};
  $scope.preview.calendar = $window.SAILS_LOCALS.listing.calendar;
  $scope.preview.title = $window.SAILS_LOCALS.listing.title;
  $scope.preview.summary = $window.SAILS_LOCALS.listing.summary;
  $scope.preview.extras = $window.SAILS_LOCALS.extras;

  console.log($scope.preview);
});
