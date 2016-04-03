angular.module('ListingModule').controller('ViewListingController', function($scope, $http, $window, $location) {


  $scope.listing = JSON.parse($window.SAILS_LOCALS.listing);
  console.log($scope.listing.title);

  // TIME SLOT LOGIC //
  $scope.addTimeSlot = function() {
    console.log('Clicked add time slot');
    var newTimeSlotId = $scope.listing.calendar.timeSlots.length+1;
    $scope.listing.calendar.timeSlots.push({'id':'timeSlot'+newTimeSlotId});
    console.log($scope.listing.calendar.timeSlots[0]);
  };
  $scope.removeTimeSlot = function(timeSlot) {
    var index = $scope.listing.calendar.timeSlots.indexOf(timeSlot);
    $scope.listing.calendar.timeSlots.splice(index, 1);
  };

  // EXTRAS LOGIC //
  $scope.addExtra = function() {
    var newExtraId = $scope.listing.extras.length+1;
    $scope.listing.extras.push({'id':'extra'+newExtraId});
    console.log($scope.listing.extras[0]);
  };
  $scope.removeExtra = function(extra) {
    var index = $scope.listing.extras.indexOf(extra);
    $scope.listing.extras.splice(index, 1);
  };

  $scope.clickedBack = function() {
    $window.location.href = '/listings';
  };

  $scope.updateListing = function() {
    console.log('Updating listing');
    $http.post('/api/update_listing', {
      listing: $scope.listing
    }).then(function(res) {
      console.log('Updated listing successfully... redirecting to listings page');
      $window.location.href = '/listings';
    }).catch(function(err) {
      console.log('Error updating the listing');
      console.log(err);
    })
  };

  $scope.removeListing = function(listing) {
    var index = $scope.listings.indexOf(listing);
    $scope.listings.splice(index, 1);

    console.log('Deleting listing');
    console.log(listing);
    $http.post('/api/delete-listing', {
      listing: listing
    }).then(function(res) {
      console.log('Deleted listing');
    }).catch(function(err) {
      console.log('Error deleting the listing');
      console.log(err);
    })
  };

});
