"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Livestamp = function (_Component) {
  _inherits(Livestamp, _Component);

  function Livestamp(props) {
    _classCallCheck(this, Livestamp);

    // STATE

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Livestamp).call(this, props));

    _this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    };

    _this._second = 1000;
    _this._minute = _this._second * 60;
    _this._hour = _this._minute * 60;
    _this._day = _this._hour * 24;

    // end date
    _this.end_date = new Date(_this.props.end);

    // binding live method.
    _this.stamp = _this.stamp.bind(_this);
    return _this;
  }

  _createClass(Livestamp, [{
    key: "componentDidMount",
    value: function componentDidMount() {

      // Mount initialize second before.
      this.stamp();

      // interval live.
      this.timer = setInterval(this.stamp, this.props.interval);
    }
  }, {
    key: "stamp",
    value: function stamp() {
      var now = new Date();
      var distance = this.end_date - now;

      if (distance < 0) {

        // Clear interval
        clearInterval(this.timer);

        // distance then expired.
        return this.setState({
          expired: true
        });
      }

      this.setState({
        days: Math.floor(distance / this._day),
        hours: Math.floor(distance % this._day / this._hour),
        minutes: Math.floor(distance % this._hour / this._minute),
        seconds: Math.floor(distance % this._minute / this._second)
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      // Clear distance interval
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var renderStamp = _props.renderStamp;
      var renderExpired = _props.renderExpired;

      // if end date expired then render expiredRender.

      if (this.state.expired) {
        return renderExpired();
      }

      return renderStamp(this.state);
    }
  }]);

  return Livestamp;
}(_react.Component);

exports.default = Livestamp;


Livestamp.propTypes = {
  end: _react2.default.PropTypes.any.isRequired,
  interval: _react.PropTypes.number,
  renderStamp: _react2.default.PropTypes.func,
  renderExpired: _react2.default.PropTypes.func
};

Livestamp.defaultProps = {
  interval: 1000, // 1 second
  renderStamp: function renderStamp(_ref) {
    var days = _ref.days;
    var hours = _ref.hours;
    var minutes = _ref.minutes;
    var seconds = _ref.seconds;

    return _react2.default.createElement(
      "div",
      { className: "react-livestamp" },
      _react2.default.createElement(
        "b",
        null,
        days,
        " g ",
        hours,
        " s ",
        minutes,
        " dk ",
        seconds,
        " sn"
      )
    );
  },
  renderExpired: function renderExpired() {
    return _react2.default.createElement(
      "div",
      { className: "react-livestamp" },
      "Expired Datetime."
    );
  }
};