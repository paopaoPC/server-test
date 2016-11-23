module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("vue");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filters__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_img_lazyload__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return app; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









// sync the router with the vuex store.
// this registers `store.state.route`
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]);

// register global utility filters.
Object.keys(__WEBPACK_IMPORTED_MODULE_5__filters__).forEach(function (key) {
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter(key, __WEBPACK_IMPORTED_MODULE_5__filters__[key]);
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6__directives_img_lazyload__["a" /* default */]);
// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(_extends({
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_1__App_vue___default.a));

// expose the app, the router and the store.
// note we not mounting the app here, since bootstrapping will be
// different depending on whether we are in browser or on the server.
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["a"]; });


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
  name: 'ListItem',
  methods: {
    clickListItem: function clickListItem(item, index) {
      this.$emit('listItemCallback', item, index);
    }
  },
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    classNames: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
  name: 'TB-RecommedList',
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ListItem_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ListItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ListItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_TB_TB_RecommedList_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_TB_TB_RecommedList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_TB_TB_RecommedList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_model_one_data_json__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_model_one_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_model_one_data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_model_two_data_json__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_model_two_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__data_model_two_data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_model_three_data_json__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_model_three_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__data_model_three_data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_TB_RecommedList_data_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_TB_RecommedList_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__data_TB_RecommedList_data_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// import Swipe from '../components/Swipe.vue'

// import { Swipe, SwipeItem } from 'vue-swipe'










/* harmony default export */ exports["default"] = {
  name: 'item-test',
  components: {
    ListItem: __WEBPACK_IMPORTED_MODULE_1__components_ListItem_vue___default.a,
    TBRecommedList: __WEBPACK_IMPORTED_MODULE_2__components_TB_TB_RecommedList_vue___default.a
  },
  methods: {
    modelOneCallback: function modelOneCallback(item, index) {
      var _this = this;

      // axios
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://incall.changan.com.cn/app/api/1.0/server/host?loginName=undefined').then(function (response) {
        console.log(response);
        _this.modelOneData.splice(index, 1, {
          "text": "天猫国际",
          "img": "https://gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar",
          "href": "https://www.tmall.com/wh/tmall/import/act/mp-pc-2015?locate=icon-3&spm=a215s.7406091.icons.3&scm=2027.4.1.16&wh_isTBHP=true"
        });
      });
    }
  },
  data: function data() {
    return {
      modelOneData: __WEBPACK_IMPORTED_MODULE_3__data_model_one_data_json___default.a,
      modelThreeData: __WEBPACK_IMPORTED_MODULE_5__data_model_three_data_json___default.a,
      modelTwoData: __WEBPACK_IMPORTED_MODULE_4__data_model_two_data_json___default.a,
      TBRecommedListData: __WEBPACK_IMPORTED_MODULE_6__data_TB_RecommedList_data_json___default.a

    };
  }
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var Promise = __webpack_require__(23).Promise;

/* harmony default export */ exports["a"] = function (Vue) {
    var Options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var DEFAULT_URL = 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==';

    var Init = {
        preLoad: Options.preLoad || 1,
        error: Options.error || DEFAULT_URL,
        loading: Options.loading || DEFAULT_URL,
        attempt: Options.attempt || 3,
        scrollLoadTime: Options.scrollLoadTime || 100
    };
    // 待加入的
    var Listeners = [];

    // 节流函数，防止调用太频繁
    var throttle = function throttle(action, delay) {
        var timeout = null;
        var lastRun = 0;
        return function () {
            if (timeout) {
                return;
            }
            var elapsed = +new Date() - lastRun;
            var context = this;
            var args = arguments;
            var runCallback = function runCallback() {
                lastRun = +new Date();
                timeout = false;
                action.apply(context, args);
            };
            if (elapsed >= delay) {
                runCallback();
            } else {
                timeout = setTimeout(runCallback, delay);
            }
        };
    };

    // 事件监听和解绑
    var _ = {
        on: function on(el, type, func) {
            el.addEventListener(type, func);
        },
        off: function off(el, type, func) {
            el.removeEventListener(type, func);
        }
    };

    // 绑定和解绑 页面的滚动监听
    var onListen = function onListen(el, start) {
        if (start) {
            _.on(el, 'scroll', scrollLoadHandler);
            _.on(el, 'wheel', scrollLoadHandler);
            _.on(el, 'mousewheel', scrollLoadHandler);
            _.on(el, 'resize', scrollLoadHandler);
            _.on(el, 'animationend', scrollLoadHandler);
            _.on(el, 'transitionend', scrollLoadHandler);
            // _.on(el, 'animationend', scrollLoadHandler)
            // _.on(el, 'transitionend', scrollLoadHandler)
        } else {
            Init.hasbind = false;
            _.off(el, 'scroll', scrollLoadHandler);
            _.off(el, 'wheel', scrollLoadHandler);
            _.off(el, 'mousewheel', scrollLoadHandler);
            _.off(el, 'resize', scrollLoadHandler);
            _.off(el, 'animationend', scrollLoadHandler);
            _.off(el, 'transitionend', scrollLoadHandler);
            // _.off(el, 'animationend', scrollLoadHandler)
            // _.off(el, 'transitionend', scrollLoadHandler)
        }
    };

    var timeout = false;

    var scrollLoadHandler = function scrollLoadHandler() {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            lazyLoadHandler();
        }, Init.scrollLoadTime);
    };

    var lazyLoadHandler = throttle(function () {
        // for( let i = 0, len = Listeners.length; i<len; i++ ){
        // 	checkCanShow(Listeners[i])
        // }
        Listeners.forEach(function (item) {
            checkCanShow(item);
        });
    }, 100);

    // 核心(检查是否可以在可视区域)
    var checkCanShow = function checkCanShow(listener) {
        // 检查元素的位置信息
        var rect = listener.el.getBoundingClientRect();
        // 判断是否在可是区域内
        // 只判断竖直方向
        if (listener.direction === 'Y') {
            if (rect.top < window.innerHeight * Init.preLoad && rect.bottom > 0) {
                render(listener);
            }
            // 只判断水平方向
        } else if (listener.direction === 'X') {
            if (rect.left < window.innerWidth * Init.preLoad && rect.right > 0) {
                render(listener);
            }
            // 同时判断两个方向
        } else {
            if (rect.top < window.innerHeight * Init.preLoad && rect.bottom > 0 && rect.left < window.innerWidth * Init.preLoad && rect.right > 0) {
                render(listener);
            }
        }
    };

    // 设置el状态
    var setElRender = function setElRender(el, bindType, src, state) {
        if (!bindType) {
            el.setAttribute('src', src);
        } else {
            el.setAttribute('style', bindType + ': url(' + src + ')');
        }
        el.setAttribute('lazy', state);
    };

    var loadImageAsync = function loadImageAsync(item) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.src = item.src;

            image.onload = function () {
                resolve({
                    src: item.src
                });
            };

            image.onerror = function () {
                reject();
            };
        });
    };

    // 加载图片 并渲染
    var render = function render(item) {
        if (item.attempt >= Init.attempt) return false;

        item.attempt++;

        loadImageAsync(item).then(function (image) {
            setElRender(item.el, item.bindType, item.src, 'loaded');
            Vue.util.remove(Listeners, item);
        }).catch(function (error) {
            setElRender(item.el, item.bindType, item.error, 'error');
        });
    };

    var checkElExist = function checkElExist(el) {
        var hasIt = false;

        Listeners.forEach(function (item) {
            if (item.el === el) hasIt = true;
        });

        if (hasIt) {
            return Vue.nextTick(function () {
                lazyLoadHandler();
            });
        }
        return hasIt;
    };

    var addListener = function addListener(el, binding, vnode) {
        // 被加载过 则直接return
        if (el.getAttribute('lazy') === 'loaded') return;
        if (checkElExist(el)) return;

        var parentEl = null;
        var imageSrc = binding.value;
        var imageLoading = Init.loading;
        var imageError = Init.error;

        if (typeof binding.value !== 'string' && binding.value) {
            imageSrc = binding.value.src;
            imageLoading = binding.value.loading || Init.loading;
            imageError = binding.value.error || Init.error;
        }

        setElRender(el, binding.arg, imageLoading, 'loading');

        Vue.nextTick(function () {
            Listeners.push({
                bindType: binding.arg,
                attempt: 0,
                parentEl: parentEl,
                el: el,
                error: imageError,
                src: imageSrc,
                directive: 'Y'
            });
            lazyLoadHandler();
            if (Listeners.length > 0 && !Init.hasbind) {
                Init.hasbind = true;
                onListen(window, true);
            }
            if (parentEl) {
                onListen(parentEl, true);
            }
        });
    };

    var componentWillUnmount = function componentWillUnmount(el, binding, vnode, oldVnode) {
        if (!el) {
            return;
        }
        for (var i = 0, len = Listeners.length; i < len; i++) {
            if (Listeners[i].el === el) {
                Listeners.splice(i, 1);
            }
        }
        // ????
        if (Init.hasbind && Listeners.length == 0) {
            onListen(window, false);
        }
    };

    Vue.directive('lazy', {
        bind: addListener,
        // update: addListener,
        // inserted: addListener,
        componentUpdated: lazyLoadHandler,
        unbind: componentWillUnmount
    });
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["host"] = host;
/* harmony export (immutable) */ exports["timeAgo"] = timeAgo;
function host(url) {
  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  var parts = host.split('.').slice(-3);
  if (parts[0] === 'www') parts.shift();
  return parts.join('.');
}

function timeAgo(time) {
  var between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  } else {
    return pluralize(~~(between / 86400), ' day');
  }
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + 's';
}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_HomePage_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_HomePage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_HomePage_vue__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

// import { createListView } from '../views/CreateListView'
// import ItemView from '../views/ItemView.vue'
// import UserView from '../views/UserView.vue'


/* harmony default export */ exports["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__views_HomePage_vue___default.a }]
});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lru_cache__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lru_cache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lru_cache__);
/* harmony export (immutable) */ exports["a"] = fetchIdsByType;
/* unused harmony export fetchItem */
/* harmony export (immutable) */ exports["b"] = fetchItems;
/* harmony export (immutable) */ exports["c"] = fetchUser;
/* unused harmony export watchList */



var inBrowser = typeof window !== 'undefined';

// When using bundleRenderer, the server-side application code runs in a new
// context for each request. To allow caching across multiple requests, we need
// to attach the cache to the process which is shared across all requests.
var cache = inBrowser ? null : process.__API_CACHE__ || (process.__API_CACHE__ = createCache());

function createCache() {
  return __WEBPACK_IMPORTED_MODULE_1_lru_cache___default()({
    max: 1000,
    maxAge: 1000 * 60 * 15 // 15 min cache
  });
}

// create a single api instance for all server-side requests
var api = inBrowser ? new __WEBPACK_IMPORTED_MODULE_0_firebase___default.a('https://hacker-news.firebaseio.com/v0') : process.__API__ || (process.__API__ = createServerSideAPI());

function createServerSideAPI() {
  var api = new __WEBPACK_IMPORTED_MODULE_0_firebase___default.a('https://hacker-news.firebaseio.com/v0');

  // cache the latest story ids
  api.__ids__ = {};['top', 'new', 'show', 'ask', 'job'].forEach(function (type) {
    api.child(type + 'stories').on('value', function (snapshot) {
      api.__ids__[type] = snapshot.val();
    });
  });

  // warm the front page cache every 15 min
  warmCache();
  function warmCache() {
    fetchItems((api.__ids__.top || []).slice(0, 30));
    setTimeout(warmCache, 1000 * 60 * 15);
  }

  return api;
}

function fetch(child) {
  if (cache && cache.has(child)) {
    return Promise.resolve(cache.get(child));
  } else {
    return new Promise(function (resolve, reject) {
      api.child(child).once('value', function (snapshot) {
        var val = snapshot.val();
        // mark the timestamp when this item is cached
        val.__lastUpdated = Date.now();
        cache && cache.set(child, val);
        resolve(val);
      }, reject);
    });
  }
}

function fetchIdsByType(type) {
  return api.__ids__ && api.__ids__[type] ? Promise.resolve(api.__ids__[type]) : fetch(type + 'stories');
}

function fetchItem(id) {
  return fetch('item/' + id);
}

function fetchItems(ids) {
  return Promise.all(ids.map(function (id) {
    return fetchItem(id);
  }));
}

function fetchUser(id) {
  return fetch('user/' + id);
}

function watchList(type, cb) {
  var first = true;
  var ref = api.child(type + 'stories');
  var handler = function handler(snapshot) {
    if (first) {
      first = false;
    } else {
      cb(snapshot.val());
    }
  };
  ref.on('value', handler);
  return function () {
    ref.off('value', handler);
  };
}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(8);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
  state: {
    activeType: null,
    itemsPerPage: 20,
    items: {/* [id: number]: Item */},
    users: {/* [id: string]: User */},
    lists: {
      top: [/* number */],
      new: [],
      show: [],
      ask: [],
      job: []
    }
  },

  actions: {
    // ensure data for rendering given list type
    FETCH_LIST_DATA: function FETCH_LIST_DATA(_ref, _ref2) {
      var commit = _ref.commit;
      var dispatch = _ref.dispatch;
      var state = _ref.state;
      var type = _ref2.type;

      commit('SET_ACTIVE_TYPE', { type: type });
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["a" /* fetchIdsByType */])(type).then(function (ids) {
        return commit('SET_LIST', { type: type, ids: ids });
      }).then(function () {
        return dispatch('ENSURE_ACTIVE_ITEMS');
      });
    },

    // ensure all active items are fetched
    ENSURE_ACTIVE_ITEMS: function ENSURE_ACTIVE_ITEMS(_ref3) {
      var dispatch = _ref3.dispatch;
      var getters = _ref3.getters;

      return dispatch('FETCH_ITEMS', {
        ids: getters.activeIds
      });
    },

    FETCH_ITEMS: function FETCH_ITEMS(_ref4, _ref5) {
      var commit = _ref4.commit;
      var state = _ref4.state;
      var ids = _ref5.ids;

      // only fetch items that we don't already have.
      ids = ids.filter(function (id) {
        return !state.items[id];
      });
      if (ids.length) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["b" /* fetchItems */])(ids).then(function (items) {
          return commit('SET_ITEMS', { items: items });
        });
      } else {
        return Promise.resolve();
      }
    },

    FETCH_USER: function FETCH_USER(_ref6, _ref7) {
      var commit = _ref6.commit;
      var state = _ref6.state;
      var id = _ref7.id;

      return state.users[id] ? Promise.resolve(state.users[id]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["c" /* fetchUser */])(id).then(function (user) {
        return commit('SET_USER', { user: user });
      });
    }
  },

  mutations: {
    SET_ACTIVE_TYPE: function SET_ACTIVE_TYPE(state, _ref8) {
      var type = _ref8.type;

      state.activeType = type;
    },

    SET_LIST: function SET_LIST(state, _ref9) {
      var type = _ref9.type;
      var ids = _ref9.ids;

      state.lists[type] = ids;
    },

    SET_ITEMS: function SET_ITEMS(state, _ref10) {
      var items = _ref10.items;

      items.forEach(function (item) {
        if (item) {
          __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(state.items, item.id, item);
        }
      });
    },

    SET_USER: function SET_USER(state, _ref11) {
      var user = _ref11.user;

      __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(state.users, user.id, user);
    }
  },

  getters: {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    activeIds: function activeIds(state) {
      var activeType = state.activeType;
      var itemsPerPage = state.itemsPerPage;
      var lists = state.lists;

      var page = Number(state.route.params.page) || 1;
      if (activeType) {
        var start = (page - 1) * itemsPerPage;
        var end = page * itemsPerPage;
        return lists[activeType].slice(start, end);
      } else {
        return [];
      }
    },


    // items that should be currently displayed.
    // this Array may not be fully fetched.
    activeItems: function activeItems(state, getters) {
      return getters.activeIds.map(function (id) {
        return state.items[id];
      }).filter(function (_) {
        return _;
      });
    }
  }
});

/* harmony default export */ exports["a"] = store;

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = [
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/TB10DXkKXXXXXb0XFXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "isfdsd",
		"describe": "[为你推荐]三全一碗饭自加热米饭4口味4盒三全自热方便米饭套餐375g*4盒",
		"href": "http://www.baidu.com"
	},
	{
		"img": "http://img.alicdn.com/bao/uploaded/i2/347996494/TB2R.DrbA1M.eBjSZFFXXc3vVXa_!!347996494.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/TB12Nt5KFXXXXaxaXXXYXGcGpXX_M2.SS2",
		"price": "是的范德萨发",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/63738935/TB2mLxcqpXXXXaOXXXXXXXXXXXX_!!63738935.jpg_q50.jpg",
		"price": "啥地方",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/TB1UeHCJXXXXXcJXpXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "isfdsd",
		"describe": "[为你推荐]三全一碗饭自加热米饭4口味4盒三全自热方便米饭套餐375g*4盒",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i1/48282554/TB2bsbUmpXXXXXOXXXXXXXXXXXX_!!48282554.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i1/72206881/TB2IBgbnpXXXXatXXXXXXXXXXXX_!!72206881.jpg_q50.jpg",
		"price": "是的范德萨发",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/407673356/TB2.PlPmFXXXXbgXpXXXXXXXXXX_!!407673356.jpg_q50.jpg",
		"price": "啥地方",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/TB10DXkKXXXXXb0XFXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "isfdsd",
		"describe": "[为你推荐]三全一碗饭自加热米饭4口味4盒三全自热方便米饭套餐375g*4盒",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i3/23739472/TB2SUhctVXXXXXZXpXXXXXXXXXX_!!23739472.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/1657614521/TB2uuW5XdYA11Bjy0FhXXbIwVXa_!!1657614521.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/T1Ik0XFv8cXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "是的范德萨发",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/TB16CIGKpXXXXXqXFXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "啥地方",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/2592324551/TB2U0yYXxbxQeBjy1XdXXXVBFXa_!!2592324551.jpg_q50.jpg",
		"price": "isfdsd",
		"describe": "[为你推荐]三全一碗饭自加热米饭4口味4盒三全自热方便米饭套餐375g*4盒",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i1/2048853556/TB2kUS9hVXXXXcaXpXXXXXXXXXX_!!2048853556.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i3/36518818/TB27ZcOtVXXXXbbXXXXXXXXXXXX_!!36518818.jpg_q50.jpg",
		"price": "是的范德萨发",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/TB1bDg.MpXXXXbpXpXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "啥地方",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i1/199410453/TB2KNs2mFXXXXXhXXXXXXXXXXXX_!!199410453.jpg_q50.jpg",
		"price": "isfdsd",
		"describe": "[为你推荐]三全一碗饭自加热米饭4口味4盒三全自热方便米饭套餐375g*4盒",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/919630073/TB2H4tgXYWJ.eBjSspdXXXiXFXa_!!919630073.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i1/1905258978/TB2cElKbMCN.eBjSZFoXXXj0FXa_!!1905258978.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/1658222454/TB2KQNiaenAQeBjSZFkXXaC5FXa_!!1658222454.jpg_q50.jpg",
		"price": "是的范德萨发",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/409600715/TB2RdhZXBLzQeBjSZFCXXXmtXXa_!!409600715.jpg_q50.jpg",
		"price": "啥地方",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/2445978287/TB2uHlesFXXXXaaXpXXXXXXXXXX_!!2445978287.jpg_q50.jpg",
		"price": "isfdsd",
		"describe": "[为你推荐]三全一碗饭自加热米饭4口味4盒三全自热方便米饭套餐375g*4盒",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i1/TB1QI7KMVXXXXXbXVXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/TB1pT84LpXXXXXNXFXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "是的范德萨发",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i3/404087628/TB23mnrspXXXXcUXpXXXXXXXXXX_!!404087628.jpg_q50.jpg",
		"price": "啥地方",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/tps/TB1csJ0LVXXXXczXpXXXXXXXXXX-164-42.png",
		"price": "isfdsd",
		"describe": "[为你推荐]三全一碗饭自加热米饭4口味4盒三全自热方便米饭套餐375g*4盒",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i1/70875278/TB2arZ0sXXXXXXBXFXXXXXXXXXX_!!70875278.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/TB1whkHGVXXXXapaXXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/34250693/TB2Ogv6pVXXXXbrXpXXXXXXXXXX_!!34250693.jpg_q50.jpg",
		"price": "是的范德萨发",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i3/TB1Pzu6KVXXXXbJXXXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "啥地方",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/134102423/TB2cClWaqm5V1BjSspbXXX6sXXa_!!134102423.jpg_q50.jpg",
		"price": "isfdsd",
		"describe": "[为你推荐]三全一碗饭自加热米饭4口味4盒三全自热方便米饭套餐375g*4盒",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/TB1Azd4JFXXXXbYXpXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/832317976/TB2O3UPpVXXXXaPXpXXXXXXXXXX_!!832317976.jpg_q50.jpg",
		"price": "是的范德萨发",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i3/TB1oJ_PIXXXXXabXVXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "啥地方",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i4/885580320/TB21eAYnpXXXXaAXpXXXXXXXXXX_!!885580320.jpg_q50.jpg",
		"price": "isfdsd",
		"describe": "[为你推荐]三全一碗饭自加热米饭4口味4盒三全自热方便米饭套餐375g*4盒",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/19666036373344351/T13VViFXXgXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/TB1OyyNLXXXXXawXVXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg",
		"price": "电风扇",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i8/TB1hlmgJFXXXXbVXVXXYXGcGpXX_M2.SS2",
		"price": "是的范德萨发",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/i2/835879392/TB20snTkVXXXXbYXXXXXXXXXXXX_!!835879392.jpg_q50.jpg",
		"price": "是的范德萨发",
		"describe": "sdf",
		"href": "http://www.baidu.com"
	}
];

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = [
	{
		"text": "天猫",
		"img": "https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar",
		"href": "https://www.tmall.com/?locate=icon-1&spm=a215s.7406091.icons.1&scm=2027.1.2.1000&force=m&wh_from=tbc"
	},
	{
		"text": "聚划算",
		"img": "https://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar",
		"href": "https://jhs.m.taobao.com/m/index.htm?locate=icon-2&spm=a215s.7406091.icons.2&scm=2027.1.2.1001"
	},
	{
		"text": "天猫国际",
		"img": "https://gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar",
		"href": "https://www.tmall.com/wh/tmall/import/act/mp-pc-2015?locate=icon-3&spm=a215s.7406091.icons.3&scm=2027.4.1.16&wh_isTBHP=true"
	},
	{
		"text": "外卖",
		"img": "https://gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar",
		"href": "https://h5.m.taobao.com/app/waimai/index.html?locate=icon-4&spm=a215s.7406091.icons.4&scm=2027.1.2.10021"
	},
	{
		"text": "天猫超市",
		"img": "https://gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar",
		"href": "https://chaoshi.m.tmall.com/?locate=icon-5&spm=a215s.7406091.icons.5&scm=2027.1.2.1007&_ig=shoutao"
	},
	{
		"text": "充值中心",
		"img": "https://img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png",
		"href": "https://h5.m.taobao.com/app/cz/cost.html?locate=icon-6&spm=a215s.7406091.icons.6&scm=2027.1.2.1003&clientSource=stcz_1"
	},
	{
		"text": "阿里旅行",
		"img": "https://gw.alicdn.com/tps/i3/TB1Ewu2KVXXXXXkapXXN4ls0XXX-183-129.png",
		"href": "https://h5.m.taobao.com/app/triphome/pages/home/index.html?locate=icon-7&spm=a215s.7406091.icons.7&scm=2027.1.2.1008&ttid=12mtb0000155"
	},
	{
		"text": "领金币",
		"img": "http://gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar",
		"href": "https://h5.m.taobao.com/app/tjb/www/index3.html?locate=icon-8&spm=a215s.7406091.icons.8&scm=2027.1.2.1004"
	},
	{
		"text": "到家",
		"img": "http://img.alicdn.com/tps/TB1caopLVXXXXaDaXXXXXXXXXXX-183-129.png",
		"href": "https://h5.m.taobao.com/app/daojia/www/index/index.html?locate=icon-9&spm=a215s.7406091.icons.9&scm=2027.1.2.1006"
	},
	{
		"text": "分类",
		"img": "http://gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar",
		"href": "https://h5.m.taobao.com/s-nx-catmap/index/index.html?locate=icon-10&spm=a215s.7406091.icons.10&scm=2027.1.2.1005&_s_nx_orange_key=catmap"
	}
];

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = [
	{
		"img": "https://gw.alicdn.com/tps/TB1u_5AKVXXXXaGXFXXXXXXXXXX-432-330.jpg_q50.jpg",
		"href": "https://www.taobao.com/market/ju/ppj.php?scm=2027.4.1.2&jhsstyle=fcdp&spm=a215s.7406091.specialcard1.1&locate=SpecialCard1-1"
	},
	{
		"img": "https://img.alicdn.com/imgextra/i1/39/TB2qjxLXxmI.eBjy0FlXXbgkVXa_!!2-subaru.png",
		"href": "https://ju.taobao.com/m/jusp/nv/haiwaiju/mtp.htm?scm=2027.4.1.3&itemId=527351054805&spm=a215s.7406091.specialcard1.2&locate=SpecialCard1-2"
	},
	{
		"img": "https://img.alicdn.com/imgextra/i2/2/TB2.0dKXY5K.eBjy0FnXXaZzVXa_!!2-subaru.png",
		"href": "https://ju.taobao.com/m/jusp/other/liangfan/mtp.htm?scm=2027.4.1.4&itemId=536441083519&spm=a215s.7406091.specialcard1.3&locate=SpecialCard1-3"
	},
	{
		"img": "https://img.alicdn.com/tps/TB1vfKANVXXXXbXaXXXXXXXXXXX-231-330.jpg_q50.jpg",
		"href": "https://ju.taobao.com/m/jusp/nv/mingpin2016/mtp.htm?scm=2027.4.1.13&spm=a215s.7406091.specialcard1.4&locate=SpecialCard1-4"
	},
	{
		"img": "https://img.alicdn.com/imgextra/i2/37/TB2VBIrXSKI.eBjy1zcXXXIOpXa_!!2-subaru.png",
		"href": "https://h5.m.taobao.com/app/tejia/www/index/index.html?scm=2027.4.1.5&itemId=538713225675&spm=a215s.7406091.specialcard1.5&locate=SpecialCard1-5"
	},
	{
		"img": "https://img.alicdn.com/bao/uploaded/TB1GWNZMFXXXXafXpXXwu0bFXXX.png",
		"href": "https://pages.tmall.com/wow/brand/act/celebration?scm=2027.4.1.6&spm=a215s.7406091.specialcard1.6&locate=SpecialCard1-6"
	},
	{
		"img": "https://img.alicdn.com/imgextra/i1/78/TB2qDD3XyGO.eBjSZFjXXcU9FXa_!!2-subaru.png",
		"href": "https://ladygo.m.tmall.com/m/index.htm?scm=2027.4.1.15&from=tao_wap&hybrid=true&itemId=523181482925&spm=a215s.7406091.specialcard1.7&locate=SpecialCard1-7"
	},
	{
		"img": "https://img.alicdn.com/imgextra/i2/25/TB2gakIXOGO.eBjSZFPXXcKCXXa_!!2-subaru.png",
		"href": "https: //h5.m.taobao.com/qingcang/index.html?scm=2027.4.1.8&itemId=532684557216&spm=a215s.7406091.specialcard1.8&locate=SpecialCard1-8"
	}
];

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = [
	{
		"img": "https://gw.alicdn.com/tps/i2/TB1nQXGJVXXXXcEXXXXKKOh2VXX-432-567.jpg_q50.jpg?imgtag=avatar"
	},
	{
		"img": "https://img.alicdn.com/tps/TB19RaGLpXXXXcDXpXXXXXXXXXX-333-261.jpg_q50.jpg?imgtag=avatar"
	},
	{
		"img": "https://img.alicdn.com/imgextra/i3/86/TB2qNxya9iJ.eBjSspiXXbqAFXa_!!2-subaru.png"
	},
	{
		"img": "https://gw.alicdn.com/tps/TB1MzfaLpXXXXaXXXXXXXXXXXXX-345-306.jpg_q50.jpg"
	},
	{
		"img": "https://img.alicdn.com/imgextra/i3/27/TB21MzojFXXXXXbXpXXXXXXXXXX_!!27-2-subaru.png"
	}
];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(21)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    attrs: {
      "id": "app"
    }
  }, [_m(0), " ", _h('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_h('router-view', {
    staticClass: "view"
  })])])
}},staticRenderFns: [function (){with(this) {
  return _h('div', {
    staticClass: "header"
  })
}}]}

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', [_m(0), " ", _h('div', {
    staticClass: "model-one"
  }, [_h('ListItem', {
    attrs: {
      "items": modelOneData
    },
    inlineTemplate: {
      render: function() {
        with(this) {
          return _h('ul', [(items) && _l((items), function(item) {
            return _h('li', [_h('a', {
              attrs: {
                "href": item.href
              }
            }, [_h('img', {
              attrs: {
                "src": item.img,
                "alt": item.text
              }
            }), " ", _h('p', [_s(item.text)])])])
          })])
        }
      },
      staticRenderFns: []
    }
  })]), " ", _h('div', {
    staticClass: "model-one"
  }, [_h('ListItem', {
    attrs: {
      "items": modelOneData
    },
    on: {
      "listItemCallback": modelOneCallback
    },
    inlineTemplate: {
      render: function() {
        with(this) {
          return _h('ul', [(items) && _l((items), function(item, index) {
            return _h('li', {
              on: {
                "click": function($event) {
                  clickListItem(item, index)
                }
              }
            }, [_h('div', {
              attrs: {
                "href": item.href
              }
            }, [_h('img', {
              attrs: {
                "src": item.img,
                "alt": item.text
              }
            }), " ", _h('p', [_s(item.text)])])])
          })])
        }
      },
      staticRenderFns: []
    }
  })]), " ", " ", _h('div', {
    staticClass: "model-three"
  }, [_h('ListItem', {
    attrs: {
      "items": modelThreeData,
      "classNames": ['border-1px-rb', 'border-1px-rb', 'border-1px-rb', 'border-1px-rb', ['border-1px-rb', 'flex-grow-1'], 'border-1px-rb', 'border-1px-rb', 'border-1px-rb']
    }
  })]), " ", _h('TBRecommedList', {
    attrs: {
      "items": TBRecommedListData
    }
  }), " "])
}},staticRenderFns: [function (){with(this) {
  return _h('div', {
    staticClass: "mint-swipe my-swipe"
  }, [_h('div', {
    staticClass: "mint-swipe-items-wrap"
  }, [_h('div', {
    staticClass: "mint-swipe-item slide1"
  }, ["1"]), " ", _h('div', {
    staticClass: "mint-swipe-item slide2"
  }, ["2"]), " ", _h('div', {
    staticClass: "mint-swipe-item slide3"
  }, ["3"])]), " ", _h('div', {
    staticClass: "mint-swipe-indicators"
  }, [_h('div', {
    staticClass: "mint-swipe-indicator"
  }), " ", _h('div', {
    staticClass: "mint-swipe-indicator"
  }), " ", _h('div', {
    staticClass: "mint-swipe-indicator"
  })])])
}}]}

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "tb-recommed-list"
  }, [_m(0), " ", _h('ul', {
    staticClass: "tb-recommed-list-content"
  }, [(items) && _l((items), function(item) {
    return _h('li', [_h('a', {
      attrs: {
        "href": item.href
      }
    }, [_h('img', {
      directives: [{
        name: "lazy",
        value: (item.img),
        expression: "item.img"
      }],
      staticClass: "tb-recommed-list-img"
    }), " ", _h('div', {
      staticClass: "tb-recommed-list-desc"
    }, [_s(item.describe)]), " ", _h('div', {
      staticClass: "tb-recommed-list-price"
    }, ["￥", _h('span', [_s(item.price)])])])])
  })])])
}},staticRenderFns: [function (){with(this) {
  return _h('div', {
    staticClass: "tb-recommed-list-header"
  }, [_h('span', {
    staticClass: "tb-recommed-list-title"
  }, ["猜你喜欢"]), " ", _h('div', {
    staticClass: "tb-recommed-list-info"
  }, ["实时推荐最适合你的宝贝"])])
}}]}

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('ul', {
    staticClass: "flex flex-wrap"
  }, [(items) && _l((items), function(item, index) {
    return _h('li', {
      class: classNames[index]
    }, [_h('a', {
      attrs: {
        "href": item.href
      }
    }, [_h('img', {
      attrs: {
        "src": item.img
      }
    })])])
  })])
}},staticRenderFns: []}

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("axios");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("es6-promise");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("firebase");

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("lru-cache");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("vue-router");

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("vuex");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("vuex-router-sync");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(1);


var isDev = "production" !== 'production';

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ exports["default"] = function (context) {
  // set router's location
  __WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].push(context.url);

  var s = isDev && Date.now();

  // Call preFetch hooks on components matched by the route.
  // A preFetch hook dispatches a store action and returns a Promise,
  // which is resolved when the action is complete and store state has been
  // updated.
  return Promise.all(__WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].getMatchedComponents().map(function (component) {
    if (component.preFetch) {
      return component.preFetch(__WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */]);
    }
  })).then(function () {
    isDev && console.log('data pre-fetch: ' + (Date.now() - s) + 'ms');
    // After all preFetch hooks are resolved, our store is now
    // filled with the state needed to render the app.
    // Expose the state on the render context, and let the request handler
    // inline the state in the HTML response. This allows the client-side
    // store to pick-up the server-side state without having to duplicate
    // the initial data fetching on the client.
    context.initialState = __WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */].state;
    return __WEBPACK_IMPORTED_MODULE_0__app__["c" /* app */];
  });
};

/***/ }
/******/ ]);