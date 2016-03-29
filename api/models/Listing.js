/**
* Listing.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {
      type: 'Int',
      autoIncrement: true
    },
    calendar: {
      type: 'Int',
      default: 0
    },
    title: {
      type: 'String'
    },
    summary: {
      type: 'String'
    },
    extras: {
      type: 'array'
    }
  }
};
