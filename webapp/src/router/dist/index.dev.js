"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Newslist = _interopRequireDefault(require("../views/Newslist.vue"));

var _NewsDetail = _interopRequireDefault(require("../views/NewsDetail.vue"));

var _login = _interopRequireDefault(require("../views/login.vue"));

var _goods = _interopRequireDefault(require("../views/goods.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: '/Home',
    component: _Home["default"],
    name: 'Home'
  }, {
    path: '/',
    redirect: '/Home'
  }, {
    path: '/Newslist',
    component: _Newslist["default"],
    name: 'Newslist'
  }, {
    path: '/NewsDetail',
    component: _NewsDetail["default"],
    name: 'NewsDetail'
  }, {
    path: '/login',
    component: _login["default"],
    name: 'login'
  }, {
    path: '/goods',
    component: _goods["default"],
    name: 'goods'
  }],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      x: 0,
      y: 0
    };
  }
});
router.beforeEach(function (to, from, next) {
  var userInfo = JSON.parse(localStorage.getItem('userInfo'));
  console.log('beforeEach');

  if (['/cart'].includes(to.path)) {
    if (userInfo) {
      next();
    } else {
      next({
        path: '/home'
      });
    }
  } else if ('/login' === to.path) {
    if (!userInfo) {
      next();
    } else {
      next('/Home');
    }
  } else {
    next();
  }
});
var _default = router;
exports["default"] = _default;