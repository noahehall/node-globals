'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  filterTable: _filtertable2.default
};

exports.default = integrations;