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
  appVersion: Number(process.env.APP_VERSION) || null,
  dbName: process.env.IDB_NAME || null,
  initialStore: process.env.INITIAL_IDB_STORE || null,
  idb: Number(process.env.APP_VERSION) && process.env.IDB_NAME && process.env.INITIAL_IDB_STORE,
  isProd: process.env.NODE_ENV === 'production',
  nodeOnline: process.env.NODE_ONLINE === 'true',
  rollbarKeyClient: process.env.ROLLBAR_CLIENT_KEY || null,
  rollbarKeyServer: process.env.ROLLBAR_SERVER_KEY || null
};

/**
 * Set global variables on worker & main threads, else node
 * @type {[type]}
*/
var setAppConsts = function setAppConsts() {
  var mergedConstants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _seamlessImmutable2.default)(appConsts);

  var self = self || null;
  // set node app consts
  if (!self && global && !global.appConsts) global.appConsts = mergedConstants;
  // set main & worker threads
  else if (self && !self.appConsts) self.appConsts = mergedConstants;

  return self && self.appConsts || global && global.appConsts ? true : false;
};

function setConstants(_ref) {
  var _ref$yourConstants = _ref.yourConstants,
      yourConstants = _ref$yourConstants === undefined ? {} : _ref$yourConstants;

  setAppConsts((0, _seamlessImmutable2.default)(_lodash2.default.merge(appConsts, !_lodash2.default.isEmpty(yourConstants) ? yourConstants : {})));
}