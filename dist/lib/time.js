"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("moment-duration-format");

var time = {
  getTodaysDate: function getTodaysDate() {
    return (0, _moment2.default)().format("YYYY-MM-DD");
  },
  getRightNowTime: function getRightNowTime() {
    return (0, _moment2.default)().format("HH:mm");
  },
  getDateTimeLocalFormat: function getDateTimeLocalFormat() {
    return 'YYYY-MM-DDThh:mm';
  },
  getDateFormat: function getDateFormat() {
    return 'YYYY-MM-DD';
  },
  getTimeFormat: function getTimeFormat() {
    return 'HH:mm';
  },
  getDuration: function getDuration(_ref) {
    var startTime = _ref.startTime,
        startDate = _ref.startDate,
        endTime = _ref.endTime,
        endDate = _ref.endDate;

    var duration = Math.abs((0, _moment2.default)(endDate + " " + endTime, 'MM/DD/YYYY h:mm+a') - (0, _moment2.default)(startDate + " " + startTime, 'MM/DD/YYYY h:mm+a'));

    return _moment2.default.duration(duration).format("h [hrs], m [min]");
  }
};

exports.default = time;