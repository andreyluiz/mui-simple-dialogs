(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogActions = function (_Component) {
  _inherits(DialogActions, _Component);

  function DialogActions() {
    _classCallCheck(this, DialogActions);

    return _possibleConstructorReturn(this, (DialogActions.__proto__ || Object.getPrototypeOf(DialogActions)).apply(this, arguments));
  }

  _createClass(DialogActions, [{
    key: 'getActions',
    value: function getActions() {
      return this.props.children;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return DialogActions;
}(_react.Component);

exports.default = DialogActions;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogContent = function (_Component) {
  _inherits(DialogContent, _Component);

  function DialogContent() {
    _classCallCheck(this, DialogContent);

    return _possibleConstructorReturn(this, (DialogContent.__proto__ || Object.getPrototypeOf(DialogContent)).apply(this, arguments));
  }

  _createClass(DialogContent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return DialogContent;
}(_react.Component);

exports.default = DialogContent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showConfirm = exports.showInfo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _defer = __webpack_require__(5);

var _defer2 = _interopRequireDefault(_defer);

var _FlatButton = __webpack_require__(6);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(7);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _components = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cleanup = function cleanup(element) {
  _reactDom2.default.unmountComponentAtNode(element);
  document.body.removeChild(element);
};

/* eslint react/no-multi-comp: 0 */
var show = function show(dialog) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  var dlg = _reactDom2.default.render(dialog, div); // eslint-disable-line react/no-render-return-value

  return dlg.promise.then(function (result) {
    setTimeout(function () {
      return cleanup(div);
    }, 2000);
    return result;
  }).catch(function (e) {
    setTimeout(function () {
      return cleanup(div);
    }, 2000);
    throw e;
  });
};

var infoOptions = {
  buttonLabel: 'OK',
  width: 500,
  theme: null,
  id: 'info-dialog'
};

var showInfo = exports.showInfo = function showInfo(title, body) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var dialogOptions = Object.assign({}, infoOptions, options);

  var DialogContainer = function (_Component) {
    _inherits(DialogContainer, _Component);

    function DialogContainer() {
      _classCallCheck(this, DialogContainer);

      var _this = _possibleConstructorReturn(this, (DialogContainer.__proto__ || Object.getPrototypeOf(DialogContainer)).call(this));

      _this.deferred = (0, _defer2.default)();
      _this.promise = _this.deferred.promise;
      return _this;
    }

    _createClass(DialogContainer, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          _components.Wrapper,
          { id: dialogOptions.id, title: title, width: dialogOptions.width, theme: options.theme, ref: function ref(node) {
              _this2.dlg = node;
            } },
          _react2.default.createElement(
            _components.Content,
            null,
            body
          ),
          _react2.default.createElement(
            _components.Actions,
            null,
            _react2.default.createElement(_FlatButton2.default, {
              id: 'ok-action',
              primary: true,
              label: dialogOptions.buttonLabel,
              onClick: function onClick() {
                _this2.deferred.resolve();
                _this2.dlg.close();
              }
            })
          )
        );
      }
    }]);

    return DialogContainer;
  }(_react.Component);

  return show(_react2.default.createElement(DialogContainer, null));
};

var confirmOptions = {
  cancelButtonLabel: 'Cancel',
  confirmButtonLabel: 'Confirm',
  confirmButtonRaised: false,
  confirmButtonColor: '#5D99CA',
  width: 500,
  theme: null,
  id: 'confirm-dialog'
};

var showConfirm = exports.showConfirm = function showConfirm(title, body) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var dialogOptions = Object.assign({}, confirmOptions, options);

  var DialogContainer = function (_React$Component) {
    _inherits(DialogContainer, _React$Component);

    function DialogContainer() {
      _classCallCheck(this, DialogContainer);

      var _this3 = _possibleConstructorReturn(this, (DialogContainer.__proto__ || Object.getPrototypeOf(DialogContainer)).call(this));

      _this3.deferred = (0, _defer2.default)();
      _this3.promise = _this3.deferred.promise;
      return _this3;
    }

    _createClass(DialogContainer, [{
      key: 'render',
      value: function render() {
        var _this4 = this;

        var PrimaryButton = dialogOptions.confirmButtonRaised ? _RaisedButton2.default : _FlatButton2.default;
        return _react2.default.createElement(
          _components.Wrapper,
          { id: dialogOptions.id, title: title, width: dialogOptions.width, theme: options.theme, ref: function ref(node) {
              _this4.dlg = node;
            } },
          _react2.default.createElement(
            _components.Content,
            null,
            _react2.default.createElement(
              'div',
              null,
              body
            )
          ),
          _react2.default.createElement(
            _components.Actions,
            null,
            _react2.default.createElement(_FlatButton2.default, {
              id: 'cancel-action',
              primary: true,
              label: dialogOptions.cancelButtonLabel,
              onClick: function onClick() {
                _this4.deferred.resolve(false);
                _this4.dlg.close();
              }
            }),
            _react2.default.createElement(PrimaryButton, {
              id: 'confirm-action',
              primary: dialogOptions.confirmButtonColor === '#5D99CA',
              labelColor: dialogOptions.confirmButtonRaised ? '#FFFFFF' : null,
              style: { marginLeft: 8 },
              backgroundColor: dialogOptions.confirmButtonRaised ? dialogOptions.confirmButtonColor : null,
              label: dialogOptions.confirmButtonLabel,
              onClick: function onClick() {
                _this4.deferred.resolve(true);
                _this4.dlg.close();
              }
            })
          )
        );
      }
    }]);

    return DialogContainer;
  }(_react2.default.Component);

  return show(_react2.default.createElement(DialogContainer, null));
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _resolve = void 0,
      _reject = void 0;
  var promise = new Promise(function (resolve, reject) {
    _resolve = resolve;
    _reject = reject;
  });

  return Object.freeze(Object.create({}, {
    resolve: {
      value: _resolve,
      enumerable: true
    },
    reject: {
      value: _reject,
      enumerable: true
    },
    promise: {
      value: promise,
      enumerable: true
    }
  }));
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FlatButton");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Content = exports.Actions = undefined;

var _DialogActions = __webpack_require__(1);

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = __webpack_require__(2);

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogWrapper = __webpack_require__(9);

var _DialogWrapper2 = _interopRequireDefault(_DialogWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Actions = _DialogActions2.default;
exports.Content = _DialogContent2.default;
exports.Wrapper = _DialogWrapper2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dialog = __webpack_require__(10);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _MuiThemeProvider = __webpack_require__(11);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(12);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _arrify = __webpack_require__(13);

var _arrify2 = _interopRequireDefault(_arrify);

var _DialogActions = __webpack_require__(1);

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = __webpack_require__(2);

var _DialogContent2 = _interopRequireDefault(_DialogContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = { open: true };
    return _this;
  }

  _createClass(_class, [{
    key: 'close',
    value: function close() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          width = _props.width,
          theme = _props.theme,
          id = _props.id;

      var _arrify$filter = (0, _arrify2.default)(children).filter(function (c) {
        return c.type === _DialogContent2.default;
      }),
          _arrify$filter2 = _slicedToArray(_arrify$filter, 1),
          content = _arrify$filter2[0];

      var _arrify$filter3 = (0, _arrify2.default)(children).filter(function (c) {
        return c.type === _DialogActions2.default;
      }),
          _arrify$filter4 = _slicedToArray(_arrify$filter3, 1),
          actions = _arrify$filter4[0];

      var muiTheme = (0, _getMuiTheme2.default)(theme);

      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: muiTheme },
        _react2.default.createElement(
          _Dialog2.default,
          {
            id: id,
            open: this.state.open,
            actions: (0, _arrify2.default)(actions.props.children),
            title: title,
            contentStyle: { width: width }
          },
          _react2.default.cloneElement(content, { ref: 'content' })
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (val) {
	if (val === null || val === undefined) {
		return [];
	}

	return Array.isArray(val) ? val : [val];
};


/***/ })
/******/ ])));