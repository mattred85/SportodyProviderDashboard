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
        calendar: params.calendar,
        title: params.title,
        summary: params.summary,
        extras: params.extras
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
        calendar: params.calendar,
        title: params.title,
        summary: params.summary,
        extras: params.extras
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
        calendar: params.calendar,
        title: params.title,
        summary: params.summary,
        extras: params.extras
      }
    });
  }
};

