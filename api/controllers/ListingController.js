/**
 * ListingController
 *
 * @description :: Server-side logic for managing Listings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  listings: function(req, res) {
    var params = req.params.all();
    console.log('==============================');
    console.log('ListingController.listings');
    console.log(params);

    res.view('listings');
  },

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
  },

  publishListing: function(req, res) {
    console.log('==============================');
    console.log('ListingController.publishListing');
    var params = req.params.all();
    console.log('Listing:');
    console.log(params.listing);

    Listing.create({
      calendar: params.listing.calendar,
      title: params.listing.title,
      summary: params.listing.summary,
      extras: params.listing.extras
    }).exec(function(err, listing) {
      if (err) {
        console.log('ERROR: <ListingsController.publishListing>');
        console.log(err);
        res.serverError(err);
        return;
      }

      console.log('<ListingController.publishListing ----> Successfully created listing');
      console.log(listing);
      res.send({message: 'ok', listing: listing});
    });

  }
};

