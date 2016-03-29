angular.module('ListingModule').controller('ListingController', function($scope, $http, $window, $location){

  /////// DESCRIPTION FORM ///////
  $scope.descriptionForm = {};

  if ($window.SAILS_LOCALS) {
    if ($window.SAILS_LOCALS.listing.title) {
      $scope.descriptionForm.title =  $window.SAILS_LOCALS.listing.title;
    }

    if ($window.SAILS_LOCALS.listing.summary) {
      $scope.descriptionForm.summary = $window.SAILS_LOCALS.listing.summary;
    }
  }

  $scope.clickedDescriptionNext = function() {
    if ($scope.descriptionForm.title && $scope.descriptionForm.summary) {
      $window.location.href = '/create_listing_extras?title=' + $scope.descriptionForm.title + '&summary=' + $scope.descriptionForm.summary;
    }
  };

  /////// EXTRAS FORM ///////
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

  $scope.clickedCalendarBack = function() {
    $window.location.href = '/create_listing_calendar'
  };

  $scope.clickedDescriptionBack = function() {
    $window.location.href = '/create_listing_description?title=' + $window.SAILS_LOCALS.listing.title + '&summary=' + $window.SAILS_LOCALS.listing.summary;
  };

  $scope.clickedExtrasNext = function() {
    console.log($scope.extrasForm.extras);
    var extrasString = JSON.stringify($scope.extrasForm.extras);
    console.log(extrasString);

    $window.location.href = '/create_listing_preview?title=' + $window.SAILS_LOCALS.listing.title +
                            '&summary=' + $window.SAILS_LOCALS.listing.summary +
                            '&extras=' + extrasString;
  };
});
