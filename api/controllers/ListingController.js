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

    Listing.find().exec(function(err, listings) {
      if (err) {
        console.log('Error finding listings');
        console.log(err);
        res.view('listings');
        return;
      }

      console.log('Found listings:');
      console.log(listings);
      res.view('listings', {
        listings: listings
      });
    })

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

    res.view('createlisting_preview_v2', {
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

  },

  deleteListing: function(req, res) {
    console.log('==============================');
    console.log('ListingController.deleteListing');
    var params = req.params.all();
    console.log('Listing:');
    console.log(params.listing);

    Listing.destroy({
      id: params.listing.id
    }).exec(function(err) {
      if (err) {
        res.serverError(err);
        return;
      }
      res.send({message: 'ok'});
    })
  },

  viewListing: function(req, res) {
    console.log('==============================');
    console.log('ListingController.viewListing');
    var params = req.params.all();
    console.log('Listing:');
    console.log(params.listing);

    res.view('view_listing', {
      listing: params.listing
    });
  },

  updateListing: function(req, res) {
    console.log('==============================');
    console.log('ListingController.updateListing');
    var params = req.params.all();
    var listing = params.listing;
    console.log('Listing:');
    console.log(listing);

    Listing.update({id: listing.id}, listing).exec(function(err, updated) {
      if (err) {
        console.log('Error updating listing');
        console.log(err);
        res.serverError(err);
        return;
      }
      console.log('Updated listing successfully');
      res.send({message: 'ok', listing: updated});
    })
  }
};

