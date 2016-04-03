angular.module('ListingModule').controller('PreviewController', function($scope, $http, $window, $location) {
  // PREVIEW
  $scope.preview = {};
  $scope.preview.calendar = JSON.parse($window.SAILS_LOCALS.listing.calendar);
  $scope.preview.title = $window.SAILS_LOCALS.listing.title;
  $scope.preview.summary = $window.SAILS_LOCALS.listing.summary;
  $scope.preview.extras = JSON.parse($window.SAILS_LOCALS.listing.extras);

  // TIME SLOT LOGIC //
  $scope.addTimeSlot = function() {
    console.log('Clicked add time slot');
    var newTimeSlotId = $scope.preview.calendar.timeSlots.length+1;
    $scope.preview.calendar.timeSlots.push({'id':'timeSlot'+newTimeSlotId});
    console.log($scope.preview.calendar.timeSlots[0]);
  };
  $scope.removeTimeSlot = function(timeSlot) {
    var index = $scope.preview.calendar.timeSlots.indexOf(timeSlot);
    $scope.preview.calendar.timeSlots.splice(index, 1);
  };

  // EXTRAS LOGIC //
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

    $window.location.href = '/create_listing_extras?title=' + $window.SAILS_LOCALS.listing.title +
    '&summary=' + $window.SAILS_LOCALS.listing.summary +
    '&extras=' + $window.SAILS_LOCALS.listing.extras;
  };

  $scope.publishListing = function() {
    console.log('Publishing listing');
    $http.post('/api/publish_listing', {
      listing: $scope.preview
    }).then(function(res) {
      console.log('Listing published successfully... redirecting to listings page');
      $window.location.href = '/listings';
    }).catch(function(err) {
      console.log('Error publishing the listing');
      console.log(err);
    })
  };
});
