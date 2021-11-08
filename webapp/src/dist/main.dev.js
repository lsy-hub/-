"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _request = _interopRequireDefault(require("./utils/request"));

var _vant = _interopRequireWildcard(require("vant"));

var _vuex = _interopRequireDefault(require("vuex"));

require("vant/lib/index.css");

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vant["default"]);

_vue["default"].prototype.$request = _request["default"];
_vue["default"].config.productionTip = false; //图片自动滚动

_vue["default"].use(_vant.Lazyload); // Vue.use(router)


_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_vuex["default"]);

new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app'); // liaousyang 11.5更新代码 上面也有更新代码 但是全部都是添加

var routerPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return routerPush.call(this, location)["catch"](function (error) {
    return error;
  });
};