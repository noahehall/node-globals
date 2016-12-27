'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility.js');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errors = {
  logError: function logError(_ref) {
    var _ref$msg = _ref.msg,
        msg = _ref$msg === undefined ? '' : _ref$msg,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? null : _ref$data,
        _ref$err = _ref.err,
        err = _ref$err === undefined ? null : _ref$err,
        _ref$loc = _ref.loc,
        loc = _ref$loc === undefined ? '' : _ref$loc;

    if (msg) _utility2.default.console('error')(msg);
    if (err) _utility2.default.console('error')(err);
    if (loc) _utility2.default.console('error')(loc);
    if (data) _utility2.default.console('dir', true)({ dataAssociatedWithError: data });
  }
};

exports.default = errors;