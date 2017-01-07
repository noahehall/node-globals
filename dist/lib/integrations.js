'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _sorttable = require('./thirdparty/sorttable.js');

var _sorttable2 = _interopRequireDefault(_sorttable);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _filtertable = require('./thirdparty/filtertable.js');

var _filtertable2 = _interopRequireDefault(_filtertable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var integrations = {
  _: _lodash2.default,
  sortTable: _sorttable2.default,
  filterTable: _filtertable2.default,
  rollbar: function rollbar() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'reportMessage';
    var env = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'client';

    try {
      console.log(require.resolve("rollbar"));
      if ((typeof XMLHttpRequest === 'undefined' ? 'undefined' : _typeof(XMLHttpRequest)) !== undefined) {

        if (!this.rb) {
          this.rb = require('rollbar');
          this.rb.init(appConsts.rollbarKeyClient);
        }

        if (this.rb[type]) return this.rb[type];
      }
    } catch (noRollbar) {
      // do nothing;
    }
    return function (f) {
      return null;
    };
  }
};

exports.default = integrations;