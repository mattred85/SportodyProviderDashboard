/**
 * ListingController
 *
 * @description :: Server-side logic for managing Listings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  listingDescription: function(req, res) {
    var params = req.params.all();
    console.log('==============================');
    console.log('ListingController.listingDescription');
    console.log(params);

    res.view('createlisting_description', {
      listing: {
        calendar: 1
      }
    });
  },

  listingExtras: function(req, res) {
    console.log('==============================');
    console.log('ListingController.listingExtras');
    var params = req.params.all();
    console.log(params);

    res.view('createlisting_extras', {
      listing: {
        calendar: 1,
        title: 'some title',
        summary: 'some summary'
      }
    });
  },

  listingPreview: function(req, res) {
    console.log('==============================');
    console.log('ListingController.listingPreview');
    var params = req.params.all();
    console.log(params);

    res.view('createlisting_preview', {
      listing: {
        calendar: 1,
        title: 'some title',
        summary: 'some summary',
        extras: [{type: 'Number'}, {type: 'String'}]
      }
    });
  }
};

