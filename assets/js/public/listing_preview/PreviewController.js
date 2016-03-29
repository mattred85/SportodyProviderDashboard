angular.module('ListingModule').controller('PreviewController', function($scope, $http, $window, $location) {
  // PREVIEW
  $scope.preview = {};
  $scope.preview.calendar = $window.SAILS_LOCALS.listing.calendar;
  $scope.preview.title = $window.SAILS_LOCALS.listing.title;
  $scope.preview.summary = $window.SAILS_LOCALS.listing.summary;
  $scope.preview.extras = JSON.parse($window.SAILS_LOCALS.listing.extras);

  $scope.addExtra = function() {
    var newExtraId = $scope.preview.extras.length+1;
    $scope.preview.extras.push({'id':'extra'+newExtraId});
    console.log($scope.preview.extras[0]);
  };
  $scope.removeExtra = function(extra) {
    var index = $scope.preview.extras.indexOf(extra);
    $scope.preview.extras.splice(index, 1);
  };

  $scope.clickedCalendarBack = function() {
    $window.location.href = '/create_listing_calendar'
  };

  $scope.clickedDescriptionBack = function() {
    $window.location.href = '/create_listing_description?title=' + $window.SAILS_LOCALS.listing.title + '&summary=' + $window.SAILS_LOCALS.listing.summary;
  };

  $scope.clickedExtrasBack = function() {
    $window.location.href = '/create_listing_preview?title=' + $window.SAILS_LOCALS.listing.title +
    '&summary=' + $window.SAILS_LOCALS.listing.summary +
    '&extras=' + $scope.extrasForm.extras;
  }
});
