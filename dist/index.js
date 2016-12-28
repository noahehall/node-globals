'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Universal Functions made available to the entire application
                                                                                                                                                                                                                                                                   * @see https://www.hacksparrow.com/global-variables-in-node-js.html
                                                                                                                                                                                                                                                                   * @author @noahehall
                                                                                                                                                                                                                                                                   * @type {Object}
                                                                                                                                                                                                                                                                   */


exports.default = setGlobals;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _dom = require('./lib/dom.js');

var _dom2 = _interopRequireDefault(_dom);

var _errors = require('./lib/errors.js');

var _errors2 = _interopRequireDefault(_errors);

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _integrations = require('./lib/integrations.js');

var _integrations2 = _interopRequireDefault(_integrations);

var _math = require('./lib/math.js');

var _math2 = _interopRequireDefault(_math);

var _serviceworkers = require('./lib/serviceworkers.js');

var _serviceworkers2 = _interopRequireDefault(_serviceworkers);

var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

var _time = require('./lib/time.js');

var _time2 = _interopRequireDefault(_time);

var _utility = require('./lib/utility.js');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appFuncs = _extends({}, _dom2.default, _errors2.default, _integrations2.default, _math2.default, _serviceworkers2.default, _time2.default, _utility2.default);

var setFunctions = function setFunctions() {
  var mergedFunctions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var self = self || null; // eslint-disable-line
  // set node app consts
  if (!self && global) global.appFuncs = global.appFuncs ? _seamlessImmutable2.default.merge(global.appFuncs, mergedFunctions) : mergedFunctions;
  // set main & worker threads
  else if (self) self.appFuncs = self.appFuncs ? _seamlessImmutable2.default.merge(self.appFuncs, mergedFunctions) : mergedFunctions;

  return self && self.appFuncs || global && global.appFuncs;
};

function setGlobals(_ref) {
  var _ref$constants = _ref.constants,
      constants = _ref$constants === undefined ? {} : _ref$constants,
      _ref$functions = _ref.functions,
      functions = _ref$functions === undefined ? {} : _ref$functions;

  var constantsSet = (0, _constants2.default)({ constants: constants });

  var functionsSet = setFunctions((0, _seamlessImmutable2.default)(_lodash2.default.merge(appFuncs, functions)));

  return {
    constantsSet: constantsSet,
    functionsSet: functionsSet
  };
}