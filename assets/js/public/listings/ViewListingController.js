angular.module('ListingModule').controller('ViewListingController', function($scope, $http, $window, $location) {


  $scope.listing = JSON.parse($window.SAILS_LOCALS.listing);
  console.log($scope.listing.title);

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
