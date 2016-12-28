'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setConstants;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Universal Constants made available to entire application
 * @see https://www.hacksparrow.com/global-variables-in-node-js.html
 * @author @noahehall
 * @type {Object}
 */
var appConsts = {
  isProd: process.env.NODE_ENV === 'production'
};

/**
 * Set global variables on worker & main threads, else node
 * @type {[type]}
*/
var setAppConsts = function setAppConsts() {
  var mergedConstants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _seamlessImmutable2.default)(appConsts);

  var self = self || null; // eslint-disable-line
  // set node app consts
  if (!self && global) global.appConsts = global.appConsts ? _seamlessImmutable2.default.merge(global.appConsts, mergedConstants) : mergedConstants;
  // set main & worker threads
  else if (self) self.appConsts = self.appConsts ? _seamlessImmutable2.default.merge(self.appConsts, mergedConstants) : mergedConstants;

  return self && self.appConsts || global && global.appConsts;
};

function setConstants(_ref) {
  var _ref$constants = _ref.constants,
      constants = _ref$constants === undefined ? {} : _ref$constants;

  return setAppConsts((0, _seamlessImmutable2.default)(_lodash2.default.merge(appConsts, constants || {})));
}