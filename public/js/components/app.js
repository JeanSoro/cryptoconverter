webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(59);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement('img', { src: '/img/bitcoin-icon.png', className: 'bitcoin-logo' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'h2',
              null,
              'Enter Transaction'
            ),
            _react2.default.createElement(
              'label',
              null,
              'Crypto Amount'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'amount', onChange: this.props.onInputChange, value: this.props.globalState.cryptoAmount }),
            _react2.default.createElement(
              'label',
              null,
              'Date'
            ),
            _react2.default.createElement(_reactDatepicker2.default, {
              selected: this.props.globalState.startDate,
              onChange: this.props.handleDateChange

            }),
            _react2.default.createElement(
              'button',
              { type: 'submit', onClick: this.props.checkProfits },
              'check profits'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

    _this.state = {
      name: ''
    };

    _this.checkGains = _this.checkGains.bind(_this);
    return _this;
  }

  _createClass(Results, [{
    key: 'checkGains',
    value: function checkGains() {
      var percentage = this.props.globalState.totalStatus.percentage;


      if (this.props.globalState.status == 'gain') {
        return 'You made ' + percentage + '% profit';
      } else {
        return 'You made a lost of ' + percentage + '% off your current investment';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$globalState$to = this.props.globalState.totalStatus,
          percentage = _props$globalState$to.percentage,
          newCP = _props$globalState$to.newCP,
          newSP = _props$globalState$to.newSP;

      return _react2.default.createElement(
        'section',
        { id: 'results' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'h3',
              null,
              'Your ',
              newCP,
              ' dollar investment is now'
            ),
            _react2.default.createElement(
              'h1',
              null,
              '$',
              newSP
            ),
            _react2.default.createElement(
              'h4',
              null,
              this.checkGains()
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'main-btn active' },
              'Create Account to keep track of your records'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'main-btn active', onClick: this.props.landingPage },
              'Check another transaction'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' })
          )
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

exports.default = Results;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(59);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(229);

var _axios2 = _interopRequireDefault(_axios);

var _Home = __webpack_require__(230);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(231);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      location: 'home',
      startDate: (0, _moment2.default)(),
      data: '',
      cryptoAmount: 1,
      status: '',
      totalStatus: ''
    };

    _this.routingSystem = _this.routingSystem.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.checkProfits = _this.checkProfits.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.landingPage = _this.landingPage.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var self = this;

      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=' + (0, _moment2.default)().unix() + '&extraParams=cryptoconverter_js').then(function (response) {

        self.setState({
          btcToday: response.data.BTC
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'routingSystem',
    value: function routingSystem() {

      switch (this.state.location) {
        case 'home':
          return _react2.default.createElement(_Home2.default, { handleDateChange: this.handleDateChange, globalState: this.state, onInputChange: this.onInputChange, checkProfits: this.checkProfits });
          break;
        case 'results':
          return _react2.default.createElement(_Results2.default, { globalState: this.state, landingPage: this.landingPage });
          break;
        default:
          return _react2.default.createElement(_Home2.default, null);

      }
    }
  }, {
    key: 'handleDateChange',
    value: function handleDateChange(date) {
      var _this2 = this;

      this.setState({
        startDate: date
      }, function () {
        return console.log(_this2.state.startDate.unix());
      });
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(e) {
      this.setState({
        cryptoAmount: e.target.value
      });
    }
  }, {
    key: 'checkProfits',
    value: function checkProfits() {

      var self = this;

      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=' + self.state.startDate.unix() + '&extraParams=cryptoconverter_js').then(function (response) {

        self.setState({
          data: response.data.BTC
        }, function () {

          var costPrice = self.state.data.USD;

          var newCP = self.state.cryptoAmount * 100;

          newCP = newCP * costPrice / 100;
          var sellingPrice = self.state.btcToday.USD;
          var newSP = self.state.cryptoAmount * 100;
          newSP = newSP * sellingPrice / 100;

          if (newCP < newSP) {

            var gain = newSP - newCP;
            var gainPercentage = gain / newCP * 100;
            gainPercentage = gainPercentage.toFixed(2);

            self.setState({
              location: 'results',
              status: 'gain',
              totalStatus: {
                newCP: newCP.toFixed(2),
                costPrice: costPrice,
                newSP: newSP.toFixed(2),
                sellingPrice: sellingPrice,
                percentage: gainPercentage
              }
            });
          } else {

            var loss = newCP - newSP;
            var lossPercentage = loss / newCP * 100;
            lossPercentage = lossPercentage.toFixed(2);

            self.setState({
              location: 'results',
              status: 'loss',
              totalStatus: {
                newCP: newCP.toFixed(2),
                costPrice: costPrice,
                newSP: newSP.toFixed(2),
                sellingPrice: sellingPrice,
                percentage: lossPercentage
              }
            });
          }

          self.setState({
            location: 'results'
          });
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'landingPage',
    value: function landingPage() {
      this.setState({
        location: 'home',
        startDate: (0, _moment2.default)(),
        data: '',
        cryptoAmount: 1,
        status: '',
        totalStatus: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'div',
              { className: 'logo', onClick: this.checkProfits },
              'Crypto Converter'
            ),
            _react2.default.createElement(
              'nav',
              { className: 'menu' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'main-btn' },
                'Register'
              )
            )
          ),
          this.routingSystem()
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[250]);