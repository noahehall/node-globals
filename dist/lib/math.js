"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var math = {
  // Returns a random number between min (inclusive) and max (exclusive)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomArbitrary: function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },


  // Returns a random integer between min (included) and max (excluded)
  // Using Math.round() will give you a non-uniform distribution!
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomInt: function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  },


  // Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomIntInclusive: function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

exports.default = math;