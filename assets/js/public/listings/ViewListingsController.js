angular.module('ListingModule').controller('ViewListingsController', function($scope, $http, $window, $location) {

  $scope.listings = /*[
    {id: 1,
    calendar: 1,
    title: 'A listing title boi!',
    summary: 'A listing summary boi!',
    extras: [{type: 'Number', field:'Some number'}]
    },
    {id: 2,
      calendar: 1,
      title: 'Another listing dawg',
      summary: 'Anoter listing summary dawg',
      extras: [{type: 'Number', field:'Some number'}]
    }];*/
  $window.SAILS_LOCALS.listings;

  $scope.yourListingTitle = 'Your listings';
  $scope.noListingTitle = 'You don\t have any listings';

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

  $scope.viewListing = function(listing) {
    console.log('Going to view listing');
    $window.location.href = '/view_listing?' + 'listing=' + JSON.stringify(listing);
  }
});
