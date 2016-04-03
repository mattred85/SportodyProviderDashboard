angular.module('ListingModule').controller('ListingController', function($scope, $http, $window, $location){


  /////// CALENDAR FORM ///////
  $scope.calendarForm = {};
  $scope.calendarForm.timeSlots = [{id: 'timeSlot1'}];

  $scope.addTimeSlot = function() {
    console.log('Clicked add time slot');
    var newTimeSlotId = $scope.calendarForm.timeSlots.length+1;
    $scope.calendarForm.timeSlots.push({'id':'timeSlot'+newTimeSlotId});
    console.log($scope.calendarForm.timeSlots[0]);
  };
  $scope.removeTimeSlot = function(timeSlot) {
    var index = $scope.calendarForm.timeSlots.indexOf(timeSlot);
    $scope.calendarForm.timeSlots.splice(index, 1);
  };

  $scope.clickedCalendarNext = function() {
    $window.location.href = '/create_listing_description?calendar=' + $scope.calendarForm;
  };

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
      console.log($window.SAILS_LOCALS.listing.calendar);
      $window.location.href = '/create_listing_extras?' + 'calendar=' + $window.SAILS_LOCALS.listing.calendar + '&title=' + $scope.descriptionForm.title + '&summary=' + $scope.descriptionForm.summary;
    }
  };

  /////// EXTRAS FORM ///////
  $scope.extrasForm = {};
  if (!$window.SAILS_LOCALS) {
  } else {
    if ($window.SAILS_LOCALS.listing.extras) {
      $scope.extrasForm.extras = JSON.parse($window.SAILS_LOCALS.listing.extras);
    } else {
      $scope.extrasForm.extras = [{id: 'extra1'}];
    }
  }
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
    $window.location.href = '/create_listing_description?' + 'calendar=' + $window.SAILS_LOCALS.listing.calendar + '&title=' + $window.SAILS_LOCALS.listing.title + '&summary=' + $window.SAILS_LOCALS.listing.summary;
  };

  $scope.clickedExtrasNext = function() {
    console.log($scope.extrasForm.extras);
    var extrasString = JSON.stringify($scope.extrasForm.extras);
    console.log(extrasString);

    $window.location.href = '/create_listing_preview?' + 'calendar='+ $window.SAILS_LOCALS.listing.calendar + '&title=' + $window.SAILS_LOCALS.listing.title +
                            '&summary=' + $window.SAILS_LOCALS.listing.summary +
                            '&extras=' + extrasString;
  };
});
