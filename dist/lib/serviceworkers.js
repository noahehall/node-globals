'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var serviceWorkers = {
  getBlobType: function getBlobType(blob, url) {

    return url.includes('fonts.googleapis.com/css') ?
    // http://stackoverflow.com/questions/2871655/proper-mime-type-for-fonts
    'text/css' : url.includes('travis-ci.org/noahehall') ? 'image/svg+xml' : blob.type ? blob.type : 'text/html';
  },
  fakeResponse: function fakeResponse() {
    return new Response(new Blob(), {
      "status": 500, "statusText": "Sorry, you need to connect to the internet!"
    });
  }
};

exports.default = serviceWorkers;