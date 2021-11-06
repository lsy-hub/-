"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _login = _interopRequireDefault(require("../views/login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: '/home',
    component: _Home["default"],
    name: 'Home',
    props: true
  }, {
    path: '/',
    redirect: '/home'
  }, {
    path: '/login',
    component: _login["default"],
    name: 'Login'
  }]
});
var _default = router;
exports["default"] = _default;