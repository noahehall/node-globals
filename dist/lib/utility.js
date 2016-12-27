'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var utility = {
  /**
  * available console types, dependent on env
  * @see https://developer.mozilla.org/en-US/docs/Web/API/Console
  * @method consoleTypes
  * @param  {String}     type   type of console request
  * @param  {boolean}     bypass whether to bypass environment check
  * @return {String|undefined} the requested console method or undefined
  */
  consoleTypes: function consoleTypes(type, bypass) {
    // permitted console logging in production
    var prod = {
      debug: 'debug',
      error: 'error',
      exception: 'exception',
      trace: 'trace'
    };

    // permitted console logging
    var notprod = {
      assert: 'assert',
      clear: 'clear',
      count: 'count',
      dir: 'dir',
      dirxml: 'dirxml',
      group: 'group',
      groupCollapsed: 'groupCollapsed',
      groupEnd: 'groupEnd',
      info: 'info',
      log: 'log',
      profile: 'profile',
      profileEnd: 'profileEnd',
      table: 'table',
      time: 'time',
      timeEnd: 'timeEnd',
      timeStamp: 'timeStamp',
      warn: 'warn'
    };

    return !appConsts.isProd || bypass ? prod[type] || notprod[type] : prod[type];
  },


  /**
  * consoles data dependent on env
  * @see https://developer.mozilla.org/en-US/docs/Web/API/Console
  * @method console
  * @param  {*}    data something to console
  * @param  {String}    [type='log']   console method to use
  * @param  {Boolean}   [bypass=false] should we bypass env check
  * @return {Function} console.method, console.log, or null function
  */
  console: function (_console) {
    function console() {
      return _console.apply(this, arguments);
    }

    console.toString = function () {
      return _console.toString();
    };

    return console;
  }(function () {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'log';
    var bypass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var thisType = this.consoleTypes(type, bypass);

    return !thisType ? function (f) {
      null;
    } : console[thisType] ? console[thisType] : console.log;
  }),


  /**
   * gets the unique values from an array
   * @method uniqueArray
   * @param {Array} [array=[]] non empty array
   * @returns {Array} filled with unique values
   */
  uniqueArray: function uniqueArray() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return Array.isArray(array) && array.length ? [].concat(_toConsumableArray(new Set(array))) : [];
  }
};

exports.default = utility;