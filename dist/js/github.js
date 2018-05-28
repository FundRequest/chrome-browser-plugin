/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"github": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/content_scripts/github/Github.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=style&index=0&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-sm.btn-cancel {\n  margin-right: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=style&index=0&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.discussion-sidebar-item--fnd {\n  display: block;\n}\n.fnd-loader {\n  position: relative;\n  display: inline-block;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #000000 transparent #000000 transparent;\n  -webkit-animation: lds-dual-ring 1s linear infinite;\n  animation: lds-dual-ring 1s linear infinite;\n}\n.label-color .fnd-loader {\n  border-color: #ffffff transparent #ffffff transparent;\n}\n.label-blue {\n  color: white;\n  background-color: #1d76db;\n}\n@keyframes lds-dual-ring {\n0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes lds-dual-ring {\n0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=style&index=0&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubButtons.vue?vue&type=style&index=0&lang=css */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=style&index=0&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=style&index=0&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubSidebarWidget.vue?vue&type=style&index=0&lang=css */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=style&index=0&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/ts-loader/index.js??ref--5!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _classes_BrowserPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/BrowserPlugin */ "./src/classes/BrowserPlugin.ts");
/* harmony import */ var _Github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Github */ "./src/content_scripts/github/Github.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubButtons = (function (_super) {
    __extends(GithubButtons, _super);
    function GithubButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GithubButtons.prototype.fund = function () {
        var url = _Github__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentIssueUrl();
        _classes_BrowserPlugin__WEBPACK_IMPORTED_MODULE_1__["default"].fund(url);
    };
    GithubButtons.prototype.claim = function () {
        var url = _Github__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentIssueUrl();
        _classes_BrowserPlugin__WEBPACK_IMPORTED_MODULE_1__["default"].claim(url);
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Object)
    ], GithubButtons.prototype, "settings", void 0);
    GithubButtons = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]
    ], GithubButtons);
    return GithubButtons;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (GithubButtons);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??ref--5!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _classes_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Utils */ "./src/classes/Utils.ts");
/* harmony import */ var _Github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Github */ "./src/content_scripts/github/Github.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var GithubOverviewItemFunds = (function (_super) {
    __extends(GithubOverviewItemFunds, _super);
    function GithubOverviewItemFunds() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalFunding = null;
        _this.totalFunders = null;
        _this.yourFunding = null;
        return _this;
    }
    GithubOverviewItemFunds.prototype.mounted = function () {
        this.init();
    };
    GithubOverviewItemFunds.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _Github__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getRequestFundInfo(this.issueId)];
                    case 1:
                        result = _a.sent();
                        this.totalFunders = result[0].toString();
                        this.totalFunding = _classes_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].weiToString(result[1]);
                        this.yourFunding = _classes_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].weiToString(result[2]);
                        return [2];
                }
            });
        });
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Object)
    ], GithubOverviewItemFunds.prototype, "settings", void 0);
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], GithubOverviewItemFunds.prototype, "issueId", void 0);
    GithubOverviewItemFunds = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]
    ], GithubOverviewItemFunds);
    return GithubOverviewItemFunds;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (GithubOverviewItemFunds);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??ref--5!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _classes_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Utils */ "./src/classes/Utils.ts");
/* harmony import */ var _Github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Github */ "./src/content_scripts/github/Github.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var GithubSidebarWidget = (function (_super) {
    __extends(GithubSidebarWidget, _super);
    function GithubSidebarWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalFunding = null;
        _this.totalFunders = null;
        _this.yourFunding = null;
        return _this;
    }
    GithubSidebarWidget.prototype.mounted = function () {
        this.init();
    };
    GithubSidebarWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _Github__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getRequestFundInfo(this.issueId)];
                    case 1:
                        result = _a.sent();
                        this.totalFunders = result[0].toString();
                        this.totalFunding = _classes_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].weiToString(result[1]);
                        this.yourFunding = _classes_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].weiToString(result[2]);
                        return [2];
                }
            });
        });
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", Object)
    ], GithubSidebarWidget.prototype, "settings", void 0);
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])(),
        __metadata("design:type", String)
    ], GithubSidebarWidget.prototype, "issueId", void 0);
    GithubSidebarWidget = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]
    ], GithubSidebarWidget);
    return GithubSidebarWidget;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (GithubSidebarWidget);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=template&id=66464758":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=template&id=66464758 ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _c(
      "button",
      {
        staticClass: "btn btn-sm btn-danger",
        on: {
          click: function($event) {
            _vm.claim()
          }
        }
      },
      [_vm._v("\n        Claim\n    ")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btn-sm btn-blue",
        on: {
          click: function($event) {
            _vm.fund()
          }
        }
      },
      [_vm._v("\n        Fund\n    ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=template&id=2270c619":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=template&id=2270c619 ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _vm._v(" | Total Funding: " + _vm._s(_vm.totalFunding) + " FND ")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=template&id=690ebc52":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=template&id=690ebc52 ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "discussion-sidebar-heading text-bold" }, [
      _vm._v("FundRequest")
    ]),
    _vm._v(" "),
    _c("div", [
      _c("span", [_vm._v("Total Funding - ")]),
      _vm._v(" "),
      _c("span", { staticClass: "label label-color label-blue" }, [
        _vm.totalFunding == null
          ? _c("i", { staticClass: "fnd-loader fnd-loader--small" })
          : _vm._e(),
        _vm._v(" "),
        _vm.totalFunding != null
          ? _c("span", [_vm._v(_vm._s(_vm.totalFunding) + " FND")])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", [
      _c("span", [_vm._v("# Funders - ")]),
      _vm._v(" "),
      _vm.totalFunders == null
        ? _c("i", { staticClass: "fnd-loader fnd-loader--small" })
        : _vm._e(),
      _vm._v(" "),
      _vm.totalFunders != null
        ? _c("span", [_vm._v(_vm._s(_vm.totalFunders))])
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.yourFunding != null
      ? _c("div", [
          _c("span", [_vm._v("Your funding - ")]),
          _vm._v(" "),
          _vm.yourFunding == null
            ? _c("i", { staticClass: "fnd-loader fnd-loader--small" })
            : _vm._e(),
          _vm._v(" "),
          _vm.yourFunding != null
            ? _c("span", [_vm._v(_vm._s(_vm.yourFunding) + " FND")])
            : _vm._e()
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/classes/Contracts.ts":
/*!**********************************!*\
  !*** ./src/classes/Contracts.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Web3x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Web3x */ "./src/classes/Web3x.ts");
/* harmony import */ var _contracts_FundRequestContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contracts/FundRequestContract */ "./src/contracts/FundRequestContract.ts");
/* harmony import */ var _contracts_FundRequestToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/FundRequestToken */ "./src/contracts/FundRequestToken.ts");
/* harmony import */ var _contracts_FundRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/FundRepository */ "./src/contracts/FundRepository.ts");
/* harmony import */ var _contracts_MiniMeToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/MiniMeToken */ "./src/contracts/MiniMeToken.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Contracts = (function () {
    function Contracts() {
        this._tokenContract = null;
        this._frContract = null;
        this._erc20Contract = new Map();
        this._fundRepository = null;
        this._web3 = _Web3x__WEBPACK_IMPORTED_MODULE_0__["Web3x"].getInstance();
        this.tokenContractAddress = "0x02F96eF85cAd6639500CA1cc8356F0b5CA5bF1D2";
        this.frContractAddress = "0xC16a102813B7bD98b0BEF2dF28FFCaf1Fbee97c0";
    }
    Contracts.prototype.getTokenContract = function () {
        if (!this._tokenContract) {
            this._tokenContract = _contracts_FundRequestToken__WEBPACK_IMPORTED_MODULE_2__["FundRequestToken"].createAndValidate(this._web3, Contracts.getInstance().tokenContractAddress);
        }
        return this._tokenContract;
    };
    Contracts.prototype.getFrContract = function () {
        if (!this._frContract) {
            this._frContract = _contracts_FundRequestContract__WEBPACK_IMPORTED_MODULE_1__["FundRequestContract"].createAndValidate(this._web3, Contracts.getInstance().frContractAddress);
        }
        return this._frContract;
    };
    Contracts.prototype.getErc20Contract = function (address) {
        if (!this._erc20Contract.get(address)) {
            this._erc20Contract.set(address, _contracts_MiniMeToken__WEBPACK_IMPORTED_MODULE_4__["MiniMeToken"].createAndValidate(this._web3, address));
        }
        return this._erc20Contract.get(address);
    };
    Contracts.prototype.getFundRepository = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repositoryAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._fundRepository) return [3, 3];
                        return [4, this.getFrContract()];
                    case 1: return [4, (_a.sent()).fundRepository];
                    case 2:
                        repositoryAddress = _a.sent();
                        this._fundRepository = _contracts_FundRepository__WEBPACK_IMPORTED_MODULE_3__["FundRepository"].createAndValidate(this._web3, repositoryAddress);
                        _a.label = 3;
                    case 3: return [2, this._fundRepository];
                }
            });
        });
    };
    Contracts.getErc20Balance = function (account, token) {
        return __awaiter(this, void 0, void 0, function () {
            var erc20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!token) return [3, 3];
                        return [4, Contracts.getInstance().getErc20Contract(token.address)];
                    case 1:
                        erc20 = _a.sent();
                        return [4, erc20.balanceOf(account)];
                    case 2: return [2, (_a.sent()).toNumber()];
                    case 3: return [2, 0];
                }
            });
        });
    };
    Contracts.getInstance = function () {
        if (!Contracts.instance) {
            Contracts.instance = new Contracts();
        }
        return Contracts.instance;
    };
    return Contracts;
}());
/* harmony default export */ __webpack_exports__["default"] = (Contracts);


/***/ }),

/***/ "./src/classes/VueInitializer.ts":
/*!***************************************!*\
  !*** ./src/classes/VueInitializer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/classes/Utils.ts");


var VueInitializer = (function () {
    function VueInitializer() {
    }
    VueInitializer.createComponent = function (containerElement, classAttr, ComponentClass, props) {
        var vueInstance = VueInitializer._initComponent(containerElement, classAttr, ComponentClass, props);
        document.addEventListener('pjax:complete', function () {
            if (vueInstance) {
                vueInstance.$destroy();
            }
        });
    };
    VueInitializer._initComponent = function (containerElement, classAttr, ComponentClass, props) {
        var id = "a" + _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].generateUUID();
        if (containerElement) {
            var firstChild = containerElement.firstChild;
            var newElement = document.createElement('span');
            newElement.setAttribute('id', id);
            newElement.setAttribute('class', classAttr);
            containerElement.insertBefore(newElement, firstChild);
            return new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
                el: "#" + id,
                data: {},
                mounted: function () {
                    var VueComponentClass = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend(ComponentClass);
                    var instance = new VueComponentClass();
                    for (var prop in props) {
                        instance.$props[prop] = props[prop];
                    }
                    instance.$mount();
                    this.$el.appendChild(instance.$el);
                }
            });
        }
        else {
            return null;
        }
    };
    return VueInitializer;
}());
/* harmony default export */ __webpack_exports__["default"] = (VueInitializer);


/***/ }),

/***/ "./src/classes/Web3x.ts":
/*!******************************!*\
  !*** ./src/classes/Web3x.ts ***!
  \******************************/
/*! exports provided: Web3x */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3x", function() { return Web3x; });
var Web3x = (function () {
    function Web3x() {
        if (typeof window.web3 !== 'undefined') {
            this._web3 = new window.Web3(window.web3.currentProvider);
        }
        else {
            window.web3 = new window.Web3(new window.Web3.providers.HttpProvider('https://kovan.fundrequest.io'));
            this._web3 = window.web3;
        }
    }
    Web3x.getInstance = function () {
        if (Web3x.instance == null) {
            Web3x.instance = new Web3x();
        }
        return Web3x.instance._web3;
    };
    Web3x.getAccount = function () {
        return Web3x.getInstance().eth.defaultAccount;
    };
    Web3x.instance = null;
    return Web3x;
}());



/***/ }),

/***/ "./src/content_scripts/github/Github.ts":
/*!**********************************************!*\
  !*** ./src/content_scripts/github/Github.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GithubButtons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GithubButtons.vue */ "./src/content_scripts/github/GithubButtons.vue");
/* harmony import */ var _GithubSidebarWidget_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GithubSidebarWidget.vue */ "./src/content_scripts/github/GithubSidebarWidget.vue");
/* harmony import */ var _GithubOverviewItemFunds_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GithubOverviewItemFunds.vue */ "./src/content_scripts/github/GithubOverviewItemFunds.vue");
/* harmony import */ var _classes_VueInitializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/VueInitializer */ "./src/classes/VueInitializer.ts");
/* harmony import */ var _classes_BrowserPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/BrowserPlugin */ "./src/classes/BrowserPlugin.ts");
/* harmony import */ var _classes_Contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/Contracts */ "./src/classes/Contracts.ts");
/* harmony import */ var _classes_Web3x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../classes/Web3x */ "./src/classes/Web3x.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var Github = (function () {
    function Github() {
        var _this = this;
        this.settings = {
            accountAddress: '0x0000000000000000000000000000000000000000'
        };
        _classes_BrowserPlugin__WEBPACK_IMPORTED_MODULE_4__["default"].load(function (response) {
            _this.settings = Object.assign(_this.settings, response);
            var readyStateCheckInterval = setInterval(function () {
                if (document.readyState === "complete") {
                    clearInterval(readyStateCheckInterval);
                    Github.init(_this.settings);
                    document.addEventListener('pjax:complete', function () {
                        Github.init(_this.settings);
                    });
                }
            }, 10);
        });
    }
    Github.getInstance = function () {
        if (!Github.instance) {
            Github.instance = new Github();
        }
        return Github.instance;
    };
    Github.init = function (settings) {
        var props = [];
        props['settings'] = settings;
        props['issueId'] = Github.getCurrentPlatformId();
        _classes_VueInitializer__WEBPACK_IMPORTED_MODULE_3__["default"].createComponent(document.querySelector('#partial-discussion-sidebar'), 'fnd-sidebar-issue-funds discussion-sidebar-item discussion-sidebar-item--fnd', _GithubSidebarWidget_vue__WEBPACK_IMPORTED_MODULE_1__["default"], props);
        _classes_VueInitializer__WEBPACK_IMPORTED_MODULE_3__["default"].createComponent(document.querySelector('#partial-discussion-header .gh-header-actions'), 'fnd-action-buttons', _GithubButtons_vue__WEBPACK_IMPORTED_MODULE_0__["default"], props);
        var issues = document.querySelectorAll('.issues-listing ul.js-navigation-container.js-active-navigation-container [data-id]');
        if (issues.length > 0) {
            for (var i = 0; i < issues.length; i++) {
                var href = issues[i].querySelector('.js-navigation-open').href;
                var meta = issues[i].querySelector('.issue-meta-section');
                props['issueId'] = Github.getPlatformIdFromUrl(href);
                _classes_VueInitializer__WEBPACK_IMPORTED_MODULE_3__["default"].createComponent(meta, 'fnd-meta-issue-funds', _GithubOverviewItemFunds_vue__WEBPACK_IMPORTED_MODULE_2__["default"], props);
            }
        }
    };
    Github.prototype.getRequestFundInfo = function (issueId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _classes_Contracts__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().getFundRepository()];
                    case 1: return [2, (_a.sent()).getFundInfo(_classes_Web3x__WEBPACK_IMPORTED_MODULE_6__["Web3x"].getInstance().fromAscii("GITHUB"), String(issueId), this.settings.accountAddress, _classes_Contracts__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().tokenContractAddress)];
                }
            });
        });
    };
    Github.getCurrentIssueUrl = function () {
        var header = document.querySelector('#partial-discussion-header');
        if (header) {
            var url = "https://github.com" + header.dataset.url;
            return url.split('/show_partial')[0];
        }
        else {
            return null;
        }
    };
    Github.getCurrentPlatformId = function () {
        return this.getPlatformIdFromUrl(Github.getCurrentIssueUrl());
    };
    Github.getPlatformIdFromUrl = function (issueLink) {
        var matches = /^(https:\/\/github\.com)?\/(.+)\/(.+)\/issues\/(\d+)$/.exec(issueLink);
        if (matches && matches.length >= 4) {
            return matches[2] + '|FR|' + matches[3] + '|FR|' + matches[4];
        }
        else {
            return null;
        }
    };
    return Github;
}());
/* harmony default export */ __webpack_exports__["default"] = (Github);
Github.getInstance();


/***/ }),

/***/ "./src/content_scripts/github/GithubButtons.vue":
/*!******************************************************!*\
  !*** ./src/content_scripts/github/GithubButtons.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GithubButtons_vue_vue_type_template_id_66464758__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GithubButtons.vue?vue&type=template&id=66464758 */ "./src/content_scripts/github/GithubButtons.vue?vue&type=template&id=66464758");
/* harmony import */ var _GithubButtons_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GithubButtons.vue?vue&type=script&lang=ts */ "./src/content_scripts/github/GithubButtons.vue?vue&type=script&lang=ts");
/* empty/unused harmony star reexport *//* harmony import */ var _GithubButtons_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GithubButtons.vue?vue&type=style&index=0&lang=css */ "./src/content_scripts/github/GithubButtons.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GithubButtons_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GithubButtons_vue_vue_type_template_id_66464758__WEBPACK_IMPORTED_MODULE_0__["render"],
  _GithubButtons_vue_vue_type_template_id_66464758__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/content_scripts/github/GithubButtons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/content_scripts/github/GithubButtons.vue?vue&type=script&lang=ts":
/*!******************************************************************************!*\
  !*** ./src/content_scripts/github/GithubButtons.vue?vue&type=script&lang=ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubButtons.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??ref--5!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=script&lang=ts");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/content_scripts/github/GithubButtons.vue?vue&type=style&index=0&lang=css":
/*!**************************************************************************************!*\
  !*** ./src/content_scripts/github/GithubButtons.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubButtons.vue?vue&type=style&index=0&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/content_scripts/github/GithubButtons.vue?vue&type=template&id=66464758":
/*!************************************************************************************!*\
  !*** ./src/content_scripts/github/GithubButtons.vue?vue&type=template&id=66464758 ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_template_id_66464758__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubButtons.vue?vue&type=template&id=66464758 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubButtons.vue?vue&type=template&id=66464758");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_template_id_66464758__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubButtons_vue_vue_type_template_id_66464758__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/content_scripts/github/GithubOverviewItemFunds.vue":
/*!****************************************************************!*\
  !*** ./src/content_scripts/github/GithubOverviewItemFunds.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GithubOverviewItemFunds_vue_vue_type_template_id_2270c619__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GithubOverviewItemFunds.vue?vue&type=template&id=2270c619 */ "./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=template&id=2270c619");
/* harmony import */ var _GithubOverviewItemFunds_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GithubOverviewItemFunds.vue?vue&type=script&lang=ts */ "./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=script&lang=ts");
/* empty/unused harmony star reexport *//* harmony import */ var _GithubOverviewItemFunds_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css */ "./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GithubOverviewItemFunds_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GithubOverviewItemFunds_vue_vue_type_template_id_2270c619__WEBPACK_IMPORTED_MODULE_0__["render"],
  _GithubOverviewItemFunds_vue_vue_type_template_id_2270c619__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/content_scripts/github/GithubOverviewItemFunds.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=script&lang=ts":
/*!****************************************************************************************!*\
  !*** ./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubOverviewItemFunds.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??ref--5!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=script&lang=ts");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css":
/*!************************************************************************************************!*\
  !*** ./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=template&id=2270c619":
/*!**********************************************************************************************!*\
  !*** ./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=template&id=2270c619 ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_template_id_2270c619__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubOverviewItemFunds.vue?vue&type=template&id=2270c619 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubOverviewItemFunds.vue?vue&type=template&id=2270c619");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_template_id_2270c619__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubOverviewItemFunds_vue_vue_type_template_id_2270c619__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/content_scripts/github/GithubSidebarWidget.vue":
/*!************************************************************!*\
  !*** ./src/content_scripts/github/GithubSidebarWidget.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GithubSidebarWidget_vue_vue_type_template_id_690ebc52__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GithubSidebarWidget.vue?vue&type=template&id=690ebc52 */ "./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=template&id=690ebc52");
/* harmony import */ var _GithubSidebarWidget_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GithubSidebarWidget.vue?vue&type=script&lang=ts */ "./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=script&lang=ts");
/* empty/unused harmony star reexport *//* harmony import */ var _GithubSidebarWidget_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GithubSidebarWidget.vue?vue&type=style&index=0&lang=css */ "./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GithubSidebarWidget_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GithubSidebarWidget_vue_vue_type_template_id_690ebc52__WEBPACK_IMPORTED_MODULE_0__["render"],
  _GithubSidebarWidget_vue_vue_type_template_id_690ebc52__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/content_scripts/github/GithubSidebarWidget.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=script&lang=ts":
/*!************************************************************************************!*\
  !*** ./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=script&lang=ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubSidebarWidget.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??ref--5!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=script&lang=ts");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=style&index=0&lang=css":
/*!********************************************************************************************!*\
  !*** ./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubSidebarWidget.vue?vue&type=style&index=0&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=template&id=690ebc52":
/*!******************************************************************************************!*\
  !*** ./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=template&id=690ebc52 ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_template_id_690ebc52__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GithubSidebarWidget.vue?vue&type=template&id=690ebc52 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/content_scripts/github/GithubSidebarWidget.vue?vue&type=template&id=690ebc52");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_template_id_690ebc52__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GithubSidebarWidget_vue_vue_type_template_id_690ebc52__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/contracts/FundRepository.ts":
/*!*****************************************!*\
  !*** ./src/contracts/FundRepository.ts ***!
  \*****************************************/
/*! exports provided: FundRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundRepository", function() { return FundRepository; });
/* harmony import */ var _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typechain-runtime */ "./src/contracts/typechain-runtime.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var FundRepository = (function (_super) {
    __extends(FundRepository, _super);
    function FundRepository(web3, address) {
        var _this = this;
        var abi = [
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "totalBalance",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "callers",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "owner",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "requestsFunded",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_newOwner", type: "address" }],
                name: "changeOwner",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "totalFunded",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "totalNumberOfFunders",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                inputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "constructor"
            },
            { payable: false, stateMutability: "nonpayable", type: "fallback" },
            {
                constant: false,
                inputs: [
                    { name: "_from", type: "address" },
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" }
                ],
                name: "updateFunders",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_from", type: "address" },
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" },
                    { name: "_token", type: "address" },
                    { name: "_value", type: "uint256" }
                ],
                name: "updateBalances",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "platform", type: "bytes32" },
                    { name: "platformId", type: "string" },
                    { name: "_token", type: "address" }
                ],
                name: "claimToken",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "platform", type: "bytes32" },
                    { name: "platformId", type: "string" }
                ],
                name: "finishResolveFund",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" },
                    { name: "_funder", type: "address" },
                    { name: "_token", type: "address" }
                ],
                name: "getFundInfo",
                outputs: [
                    { name: "", type: "uint256" },
                    { name: "", type: "uint256" },
                    { name: "", type: "uint256" }
                ],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" }
                ],
                name: "getFundedTokenCount",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" },
                    { name: "_index", type: "uint256" }
                ],
                name: "getFundedTokensByIndex",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" }
                ],
                name: "getFunderCount",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" },
                    { name: "_funder", type: "address" },
                    { name: "_token", type: "address" }
                ],
                name: "amountFunded",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" },
                    { name: "_token", type: "address" }
                ],
                name: "balance",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_caller", type: "address" },
                    { name: "allowed", type: "bool" }
                ],
                name: "updateCaller",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            }
        ];
        _this = _super.call(this, web3, address, abi) || this;
        return _this;
    }
    FundRepository.createAndValidate = function (web3, address) {
        return __awaiter(this, void 0, void 0, function () {
            var contract, code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = new FundRepository(web3, address);
                        return [4, Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(web3.eth.getCode, [address])];
                    case 1:
                        code = _a.sent();
                        if (code === "0x0") {
                            throw new Error("Contract at " + address + " doesn't exist!");
                        }
                        return [2, contract];
                }
            });
        });
    };
    Object.defineProperty(FundRepository.prototype, "owner", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.owner, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRepository.prototype, "requestsFunded", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.requestsFunded, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRepository.prototype, "totalNumberOfFunders", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.totalNumberOfFunders, []);
        },
        enumerable: true,
        configurable: true
    });
    FundRepository.prototype.totalBalance = function (arg0) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.totalBalance, [arg0.toString()]);
    };
    FundRepository.prototype.callers = function (arg0) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.callers, [arg0.toString()]);
    };
    FundRepository.prototype.totalFunded = function (arg0) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.totalFunded, [arg0.toString()]);
    };
    FundRepository.prototype.getFundInfo = function (_platform, _platformId, _funder, _token) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.getFundInfo, [
            _platform.toString(),
            _platformId.toString(),
            _funder.toString(),
            _token.toString()
        ]);
    };
    FundRepository.prototype.getFundedTokenCount = function (_platform, _platformId) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.getFundedTokenCount, [
            _platform.toString(),
            _platformId.toString()
        ]);
    };
    FundRepository.prototype.getFundedTokensByIndex = function (_platform, _platformId, _index) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.getFundedTokensByIndex, [
            _platform.toString(),
            _platformId.toString(),
            _index.toString()
        ]);
    };
    FundRepository.prototype.getFunderCount = function (_platform, _platformId) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.getFunderCount, [
            _platform.toString(),
            _platformId.toString()
        ]);
    };
    FundRepository.prototype.amountFunded = function (_platform, _platformId, _funder, _token) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.amountFunded, [
            _platform.toString(),
            _platformId.toString(),
            _funder.toString(),
            _token.toString()
        ]);
    };
    FundRepository.prototype.balance = function (_platform, _platformId, _token) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.balance, [
            _platform.toString(),
            _platformId.toString(),
            _token.toString()
        ]);
    };
    FundRepository.prototype.changeOwnerTx = function (_newOwner) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "changeOwner", [
            _newOwner.toString()
        ]);
    };
    FundRepository.prototype.updateFundersTx = function (_from, _platform, _platformId) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "updateFunders", [
            _from.toString(),
            _platform.toString(),
            _platformId.toString()
        ]);
    };
    FundRepository.prototype.updateBalancesTx = function (_from, _platform, _platformId, _token, _value) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "updateBalances", [
            _from.toString(),
            _platform.toString(),
            _platformId.toString(),
            _token.toString(),
            _value.toString()
        ]);
    };
    FundRepository.prototype.claimTokenTx = function (platform, platformId, _token) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "claimToken", [
            platform.toString(),
            platformId.toString(),
            _token.toString()
        ]);
    };
    FundRepository.prototype.finishResolveFundTx = function (platform, platformId) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "finishResolveFund", [platform.toString(), platformId.toString()]);
    };
    FundRepository.prototype.updateCallerTx = function (_caller, allowed) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "updateCaller", [
            _caller.toString(),
            allowed.toString()
        ]);
    };
    return FundRepository;
}(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["TypeChainContract"]));



/***/ }),

/***/ "./src/contracts/FundRequestContract.ts":
/*!**********************************************!*\
  !*** ./src/contracts/FundRequestContract.ts ***!
  \**********************************************/
/*! exports provided: FundRequestContract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundRequestContract", function() { return FundRequestContract; });
/* harmony import */ var _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typechain-runtime */ "./src/contracts/typechain-runtime.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var FundRequestContract = (function (_super) {
    __extends(FundRequestContract, _super);
    function FundRequestContract(web3, address) {
        var _this = this;
        var abi = [
            {
                constant: true,
                inputs: [],
                name: "claimSignerAddress",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "uint256" }],
                name: "preconditions",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "fundRepository",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "owner",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "claimRepository",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_newOwner", type: "address" }],
                name: "changeOwner",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                inputs: [
                    { name: "_fundRepository", type: "address" },
                    { name: "_claimRepository", type: "address" }
                ],
                payable: false,
                stateMutability: "nonpayable",
                type: "constructor"
            },
            { payable: false, stateMutability: "nonpayable", type: "fallback" },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "from", type: "address" },
                    { indexed: false, name: "platform", type: "bytes32" },
                    { indexed: false, name: "platformId", type: "string" },
                    { indexed: false, name: "token", type: "address" },
                    { indexed: false, name: "value", type: "uint256" }
                ],
                name: "Funded",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "solverAddress", type: "address" },
                    { indexed: false, name: "platform", type: "bytes32" },
                    { indexed: false, name: "platformId", type: "string" },
                    { indexed: false, name: "solver", type: "string" },
                    { indexed: false, name: "token", type: "address" },
                    { indexed: false, name: "value", type: "uint256" }
                ],
                name: "Claimed",
                type: "event"
            },
            {
                constant: false,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" },
                    { name: "_token", type: "address" },
                    { name: "_value", type: "uint256" }
                ],
                name: "fund",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_from", type: "address" },
                    { name: "_amount", type: "uint256" },
                    { name: "_token", type: "address" },
                    { name: "_data", type: "bytes" }
                ],
                name: "receiveApproval",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "platform", type: "bytes32" },
                    { name: "platformId", type: "string" },
                    { name: "solver", type: "string" },
                    { name: "solverAddress", type: "address" },
                    { name: "r", type: "bytes32" },
                    { name: "s", type: "bytes32" },
                    { name: "v", type: "uint8" }
                ],
                name: "claim",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_precondition", type: "address" }],
                name: "addPrecondition",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_index", type: "uint256" }],
                name: "removePrecondition",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_repositoryAddress", type: "address" }],
                name: "setFundRepository",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_claimRepository", type: "address" }],
                name: "setClaimRepository",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_claimSignerAddress", type: "address" }],
                name: "setClaimSignerAddress",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            }
        ];
        _this = _super.call(this, web3, address, abi) || this;
        return _this;
    }
    FundRequestContract.createAndValidate = function (web3, address) {
        return __awaiter(this, void 0, void 0, function () {
            var contract, code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = new FundRequestContract(web3, address);
                        return [4, Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(web3.eth.getCode, [address])];
                    case 1:
                        code = _a.sent();
                        if (code === "0x0") {
                            throw new Error("Contract at " + address + " doesn't exist!");
                        }
                        return [2, contract];
                }
            });
        });
    };
    Object.defineProperty(FundRequestContract.prototype, "claimSignerAddress", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.claimSignerAddress, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestContract.prototype, "fundRepository", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.fundRepository, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestContract.prototype, "owner", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.owner, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestContract.prototype, "claimRepository", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.claimRepository, []);
        },
        enumerable: true,
        configurable: true
    });
    FundRequestContract.prototype.preconditions = function (arg0) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.preconditions, [arg0.toString()]);
    };
    FundRequestContract.prototype.changeOwnerTx = function (_newOwner) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "changeOwner", [
            _newOwner.toString()
        ]);
    };
    FundRequestContract.prototype.fundTx = function (_platform, _platformId, _token, _value) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "fund", [
            _platform.toString(),
            _platformId.toString(),
            _token.toString(),
            _value.toString()
        ]);
    };
    FundRequestContract.prototype.receiveApprovalTx = function (_from, _amount, _token, _data) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "receiveApproval", [
            _from.toString(),
            _amount.toString(),
            _token.toString(),
            _data.toString()
        ]);
    };
    FundRequestContract.prototype.claimTx = function (platform, platformId, solver, solverAddress, r, s, v) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "claim", [
            platform.toString(),
            platformId.toString(),
            solver.toString(),
            solverAddress.toString(),
            r.toString(),
            s.toString(),
            v.toString()
        ]);
    };
    FundRequestContract.prototype.addPreconditionTx = function (_precondition) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "addPrecondition", [
            _precondition.toString()
        ]);
    };
    FundRequestContract.prototype.removePreconditionTx = function (_index) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "removePrecondition", [_index.toString()]);
    };
    FundRequestContract.prototype.setFundRepositoryTx = function (_repositoryAddress) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "setFundRepository", [_repositoryAddress.toString()]);
    };
    FundRequestContract.prototype.setClaimRepositoryTx = function (_claimRepository) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "setClaimRepository", [_claimRepository.toString()]);
    };
    FundRequestContract.prototype.setClaimSignerAddressTx = function (_claimSignerAddress) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "setClaimSignerAddress", [_claimSignerAddress.toString()]);
    };
    return FundRequestContract;
}(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["TypeChainContract"]));



/***/ }),

/***/ "./src/contracts/FundRequestToken.ts":
/*!*******************************************!*\
  !*** ./src/contracts/FundRequestToken.ts ***!
  \*******************************************/
/*! exports provided: FundRequestToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundRequestToken", function() { return FundRequestToken; });
/* harmony import */ var _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typechain-runtime */ "./src/contracts/typechain-runtime.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var FundRequestToken = (function (_super) {
    __extends(FundRequestToken, _super);
    function FundRequestToken(web3, address) {
        var _this = this;
        var abi = [
            {
                constant: true,
                inputs: [],
                name: "name",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_spender", type: "address" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "approve",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "creationBlock",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "totalSupply",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_from", type: "address" },
                    { name: "_to", type: "address" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "transferFrom",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "decimals",
                outputs: [{ name: "", type: "uint8" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_newController", type: "address" }],
                name: "changeController",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_owner", type: "address" },
                    { name: "_blockNumber", type: "uint256" }
                ],
                name: "balanceOfAt",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "version",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_cloneTokenName", type: "string" },
                    { name: "_cloneDecimalUnits", type: "uint8" },
                    { name: "_cloneTokenSymbol", type: "string" },
                    { name: "_snapshotBlock", type: "uint256" },
                    { name: "_transfersEnabled", type: "bool" }
                ],
                name: "createCloneToken",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "_owner", type: "address" }],
                name: "balanceOf",
                outputs: [{ name: "balance", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "parentToken",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_owner", type: "address" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "generateTokens",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "symbol",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "_blockNumber", type: "uint256" }],
                name: "totalSupplyAt",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_to", type: "address" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "transfer",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "transfersEnabled",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "parentSnapShotBlock",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_spender", type: "address" },
                    { name: "_amount", type: "uint256" },
                    { name: "_extraData", type: "bytes" }
                ],
                name: "approveAndCall",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_owner", type: "address" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "destroyTokens",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_owner", type: "address" },
                    { name: "_spender", type: "address" }
                ],
                name: "allowance",
                outputs: [{ name: "remaining", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_token", type: "address" }],
                name: "claimTokens",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "tokenFactory",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_transfersEnabled", type: "bool" }],
                name: "enableTransfers",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "controller",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                inputs: [
                    { name: "_tokenFactory", type: "address" },
                    { name: "_parentToken", type: "address" },
                    { name: "_parentSnapShotBlock", type: "uint256" },
                    { name: "_tokenName", type: "string" },
                    { name: "_decimalUnits", type: "uint8" },
                    { name: "_tokenSymbol", type: "string" },
                    { name: "_transfersEnabled", type: "bool" }
                ],
                payable: false,
                stateMutability: "nonpayable",
                type: "constructor"
            },
            { payable: true, stateMutability: "payable", type: "fallback" },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "_token", type: "address" },
                    { indexed: true, name: "_controller", type: "address" },
                    { indexed: false, name: "_amount", type: "uint256" }
                ],
                name: "ClaimedTokens",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "_from", type: "address" },
                    { indexed: true, name: "_to", type: "address" },
                    { indexed: false, name: "_amount", type: "uint256" }
                ],
                name: "Transfer",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "_cloneToken", type: "address" },
                    { indexed: false, name: "_snapshotBlock", type: "uint256" }
                ],
                name: "NewCloneToken",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "_owner", type: "address" },
                    { indexed: true, name: "_spender", type: "address" },
                    { indexed: false, name: "_amount", type: "uint256" }
                ],
                name: "Approval",
                type: "event"
            },
            {
                constant: false,
                inputs: [
                    { name: "_spender", type: "address" },
                    { name: "_currentValue", type: "uint256" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "safeApprove",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "isFundRequestToken",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "pure",
                type: "function"
            }
        ];
        _this = _super.call(this, web3, address, abi) || this;
        return _this;
    }
    FundRequestToken.createAndValidate = function (web3, address) {
        return __awaiter(this, void 0, void 0, function () {
            var contract, code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = new FundRequestToken(web3, address);
                        return [4, Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(web3.eth.getCode, [address])];
                    case 1:
                        code = _a.sent();
                        if (code === "0x0") {
                            throw new Error("Contract at " + address + " doesn't exist!");
                        }
                        return [2, contract];
                }
            });
        });
    };
    Object.defineProperty(FundRequestToken.prototype, "name", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.name, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "creationBlock", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.creationBlock, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "totalSupply", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.totalSupply, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "decimals", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.decimals, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "version", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.version, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "parentToken", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.parentToken, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "symbol", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.symbol, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "transfersEnabled", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.transfersEnabled, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "parentSnapShotBlock", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.parentSnapShotBlock, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "tokenFactory", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.tokenFactory, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "controller", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.controller, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundRequestToken.prototype, "isFundRequestToken", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.isFundRequestToken, []);
        },
        enumerable: true,
        configurable: true
    });
    FundRequestToken.prototype.balanceOfAt = function (_owner, _blockNumber) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.balanceOfAt, [
            _owner.toString(),
            _blockNumber.toString()
        ]);
    };
    FundRequestToken.prototype.balanceOf = function (_owner) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.balanceOf, [_owner.toString()]);
    };
    FundRequestToken.prototype.totalSupplyAt = function (_blockNumber) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.totalSupplyAt, [
            _blockNumber.toString()
        ]);
    };
    FundRequestToken.prototype.allowance = function (_owner, _spender) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.allowance, [
            _owner.toString(),
            _spender.toString()
        ]);
    };
    FundRequestToken.prototype.approveTx = function (_spender, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "approve", [
            _spender.toString(),
            _amount.toString()
        ]);
    };
    FundRequestToken.prototype.transferFromTx = function (_from, _to, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "transferFrom", [
            _from.toString(),
            _to.toString(),
            _amount.toString()
        ]);
    };
    FundRequestToken.prototype.changeControllerTx = function (_newController) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "changeController", [
            _newController.toString()
        ]);
    };
    FundRequestToken.prototype.createCloneTokenTx = function (_cloneTokenName, _cloneDecimalUnits, _cloneTokenSymbol, _snapshotBlock, _transfersEnabled) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "createCloneToken", [
            _cloneTokenName.toString(),
            _cloneDecimalUnits.toString(),
            _cloneTokenSymbol.toString(),
            _snapshotBlock.toString(),
            _transfersEnabled.toString()
        ]);
    };
    FundRequestToken.prototype.generateTokensTx = function (_owner, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "generateTokens", [
            _owner.toString(),
            _amount.toString()
        ]);
    };
    FundRequestToken.prototype.transferTx = function (_to, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "transfer", [
            _to.toString(),
            _amount.toString()
        ]);
    };
    FundRequestToken.prototype.approveAndCallTx = function (_spender, _amount, _extraData) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "approveAndCall", [
            _spender.toString(),
            _amount.toString(),
            _extraData.toString()
        ]);
    };
    FundRequestToken.prototype.destroyTokensTx = function (_owner, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "destroyTokens", [
            _owner.toString(),
            _amount.toString()
        ]);
    };
    FundRequestToken.prototype.claimTokensTx = function (_token) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "claimTokens", [
            _token.toString()
        ]);
    };
    FundRequestToken.prototype.enableTransfersTx = function (_transfersEnabled) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "enableTransfers", [
            _transfersEnabled.toString()
        ]);
    };
    FundRequestToken.prototype.safeApproveTx = function (_spender, _currentValue, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "safeApprove", [
            _spender.toString(),
            _currentValue.toString(),
            _amount.toString()
        ]);
    };
    return FundRequestToken;
}(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["TypeChainContract"]));



/***/ }),

/***/ "./src/contracts/MiniMeToken.ts":
/*!**************************************!*\
  !*** ./src/contracts/MiniMeToken.ts ***!
  \**************************************/
/*! exports provided: MiniMeToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniMeToken", function() { return MiniMeToken; });
/* harmony import */ var _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typechain-runtime */ "./src/contracts/typechain-runtime.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var MiniMeToken = (function (_super) {
    __extends(MiniMeToken, _super);
    function MiniMeToken(web3, address) {
        var _this = this;
        var abi = [
            {
                constant: true,
                inputs: [],
                name: "name",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "creationBlock",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "decimals",
                outputs: [{ name: "", type: "uint8" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_newController", type: "address" }],
                name: "changeController",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "version",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "parentToken",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "symbol",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "transfersEnabled",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "parentSnapShotBlock",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "tokenFactory",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "controller",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                inputs: [
                    { name: "_tokenFactory", type: "address" },
                    { name: "_parentToken", type: "address" },
                    { name: "_parentSnapShotBlock", type: "uint256" },
                    { name: "_tokenName", type: "string" },
                    { name: "_decimalUnits", type: "uint8" },
                    { name: "_tokenSymbol", type: "string" },
                    { name: "_transfersEnabled", type: "bool" }
                ],
                payable: false,
                stateMutability: "nonpayable",
                type: "constructor"
            },
            { payable: true, stateMutability: "payable", type: "fallback" },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "_token", type: "address" },
                    { indexed: true, name: "_controller", type: "address" },
                    { indexed: false, name: "_amount", type: "uint256" }
                ],
                name: "ClaimedTokens",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "_from", type: "address" },
                    { indexed: true, name: "_to", type: "address" },
                    { indexed: false, name: "_amount", type: "uint256" }
                ],
                name: "Transfer",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "_cloneToken", type: "address" },
                    { indexed: false, name: "_snapshotBlock", type: "uint256" }
                ],
                name: "NewCloneToken",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "_owner", type: "address" },
                    { indexed: true, name: "_spender", type: "address" },
                    { indexed: false, name: "_amount", type: "uint256" }
                ],
                name: "Approval",
                type: "event"
            },
            {
                constant: false,
                inputs: [
                    { name: "_to", type: "address" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "transfer",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_from", type: "address" },
                    { name: "_to", type: "address" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "transferFrom",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "_owner", type: "address" }],
                name: "balanceOf",
                outputs: [{ name: "balance", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_spender", type: "address" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "approve",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_owner", type: "address" },
                    { name: "_spender", type: "address" }
                ],
                name: "allowance",
                outputs: [{ name: "remaining", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_spender", type: "address" },
                    { name: "_amount", type: "uint256" },
                    { name: "_extraData", type: "bytes" }
                ],
                name: "approveAndCall",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "totalSupply",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_owner", type: "address" },
                    { name: "_blockNumber", type: "uint256" }
                ],
                name: "balanceOfAt",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "_blockNumber", type: "uint256" }],
                name: "totalSupplyAt",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_cloneTokenName", type: "string" },
                    { name: "_cloneDecimalUnits", type: "uint8" },
                    { name: "_cloneTokenSymbol", type: "string" },
                    { name: "_snapshotBlock", type: "uint256" },
                    { name: "_transfersEnabled", type: "bool" }
                ],
                name: "createCloneToken",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_owner", type: "address" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "generateTokens",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_owner", type: "address" },
                    { name: "_amount", type: "uint256" }
                ],
                name: "destroyTokens",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_transfersEnabled", type: "bool" }],
                name: "enableTransfers",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_token", type: "address" }],
                name: "claimTokens",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            }
        ];
        _this = _super.call(this, web3, address, abi) || this;
        return _this;
    }
    MiniMeToken.createAndValidate = function (web3, address) {
        return __awaiter(this, void 0, void 0, function () {
            var contract, code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = new MiniMeToken(web3, address);
                        return [4, Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(web3.eth.getCode, [address])];
                    case 1:
                        code = _a.sent();
                        if (code === "0x0") {
                            throw new Error("Contract at " + address + " doesn't exist!");
                        }
                        return [2, contract];
                }
            });
        });
    };
    Object.defineProperty(MiniMeToken.prototype, "name", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.name, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniMeToken.prototype, "creationBlock", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.creationBlock, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniMeToken.prototype, "decimals", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.decimals, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniMeToken.prototype, "version", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.version, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniMeToken.prototype, "parentToken", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.parentToken, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniMeToken.prototype, "symbol", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.symbol, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniMeToken.prototype, "transfersEnabled", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.transfersEnabled, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniMeToken.prototype, "parentSnapShotBlock", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.parentSnapShotBlock, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniMeToken.prototype, "tokenFactory", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.tokenFactory, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniMeToken.prototype, "controller", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.controller, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniMeToken.prototype, "totalSupply", {
        get: function () {
            return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.totalSupply, []);
        },
        enumerable: true,
        configurable: true
    });
    MiniMeToken.prototype.balanceOf = function (_owner) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.balanceOf, [_owner.toString()]);
    };
    MiniMeToken.prototype.allowance = function (_owner, _spender) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.allowance, [
            _owner.toString(),
            _spender.toString()
        ]);
    };
    MiniMeToken.prototype.balanceOfAt = function (_owner, _blockNumber) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.balanceOfAt, [
            _owner.toString(),
            _blockNumber.toString()
        ]);
    };
    MiniMeToken.prototype.totalSupplyAt = function (_blockNumber) {
        return Object(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["promisify"])(this.rawWeb3Contract.totalSupplyAt, [
            _blockNumber.toString()
        ]);
    };
    MiniMeToken.prototype.changeControllerTx = function (_newController) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "changeController", [
            _newController.toString()
        ]);
    };
    MiniMeToken.prototype.transferTx = function (_to, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "transfer", [
            _to.toString(),
            _amount.toString()
        ]);
    };
    MiniMeToken.prototype.transferFromTx = function (_from, _to, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "transferFrom", [
            _from.toString(),
            _to.toString(),
            _amount.toString()
        ]);
    };
    MiniMeToken.prototype.approveTx = function (_spender, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "approve", [
            _spender.toString(),
            _amount.toString()
        ]);
    };
    MiniMeToken.prototype.approveAndCallTx = function (_spender, _amount, _extraData) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "approveAndCall", [
            _spender.toString(),
            _amount.toString(),
            _extraData.toString()
        ]);
    };
    MiniMeToken.prototype.createCloneTokenTx = function (_cloneTokenName, _cloneDecimalUnits, _cloneTokenSymbol, _snapshotBlock, _transfersEnabled) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "createCloneToken", [
            _cloneTokenName.toString(),
            _cloneDecimalUnits.toString(),
            _cloneTokenSymbol.toString(),
            _snapshotBlock.toString(),
            _transfersEnabled.toString()
        ]);
    };
    MiniMeToken.prototype.generateTokensTx = function (_owner, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "generateTokens", [
            _owner.toString(),
            _amount.toString()
        ]);
    };
    MiniMeToken.prototype.destroyTokensTx = function (_owner, _amount) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "destroyTokens", [
            _owner.toString(),
            _amount.toString()
        ]);
    };
    MiniMeToken.prototype.enableTransfersTx = function (_transfersEnabled) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "enableTransfers", [
            _transfersEnabled.toString()
        ]);
    };
    MiniMeToken.prototype.claimTokensTx = function (_token) {
        return new _typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["DeferredTransactionWrapper"](this, "claimTokens", [
            _token.toString()
        ]);
    };
    return MiniMeToken;
}(_typechain_runtime__WEBPACK_IMPORTED_MODULE_0__["TypeChainContract"]));



/***/ }),

/***/ "./src/contracts/typechain-runtime.ts":
/*!********************************************!*\
  !*** ./src/contracts/typechain-runtime.ts ***!
  \********************************************/
/*! exports provided: TypeChainContract, DeferredTransactionWrapper, promisify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeChainContract", function() { return TypeChainContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredTransactionWrapper", function() { return DeferredTransactionWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promisify", function() { return promisify; });
var TypeChainContract = (function () {
    function TypeChainContract(web3, address, contractAbi) {
        this.contractAbi = contractAbi;
        this.address = address.toString();
        this.rawWeb3Contract = web3.eth.contract(contractAbi).at(address);
    }
    return TypeChainContract;
}());

var DeferredTransactionWrapper = (function () {
    function DeferredTransactionWrapper(parentContract, methodName, methodArgs) {
        this.parentContract = parentContract;
        this.methodName = methodName;
        this.methodArgs = methodArgs;
    }
    DeferredTransactionWrapper.prototype.send = function (params, customWeb3) {
        var method;
        if (customWeb3) {
            var tmpContract = customWeb3.eth
                .contract(this.parentContract.contractAbi)
                .at(this.parentContract.address);
            method = tmpContract[this.methodName].sendTransaction;
        }
        else {
            method = this.parentContract.rawWeb3Contract[this.methodName].sendTransaction;
        }
        return promisify(method, this.methodArgs.concat([params]));
    };
    DeferredTransactionWrapper.prototype.getData = function () {
        return (_a = this.parentContract.rawWeb3Contract[this.methodName]).getData.apply(_a, this.methodArgs);
        var _a;
    };
    return DeferredTransactionWrapper;
}());

function promisify(func, args) {
    return new Promise(function (res, rej) {
        func.apply(void 0, args.concat([function (err, data) {
                if (err)
                    return rej(err);
                return res(data);
            }]));
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9naXRodWIvR2l0aHViQnV0dG9ucy52dWU/ZTMzZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJPdmVydmlld0l0ZW1GdW5kcy52dWU/Y2M3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJTaWRlYmFyV2lkZ2V0LnZ1ZT9jZDI2Iiwid2VicGFjazovLy8uL3NyYy9jb250ZW50X3NjcmlwdHMvZ2l0aHViL0dpdGh1YkJ1dHRvbnMudnVlP2NkZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9naXRodWIvR2l0aHViT3ZlcnZpZXdJdGVtRnVuZHMudnVlP2Y3OWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9naXRodWIvR2l0aHViU2lkZWJhcldpZGdldC52dWU/Y2U0MyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJCdXR0b25zLnZ1ZT9lN2QwIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50X3NjcmlwdHMvZ2l0aHViL0dpdGh1Yk92ZXJ2aWV3SXRlbUZ1bmRzLnZ1ZT8yNjMxIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50X3NjcmlwdHMvZ2l0aHViL0dpdGh1YlNpZGViYXJXaWRnZXQudnVlPzViYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9naXRodWIvR2l0aHViQnV0dG9ucy52dWU/YzE0YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJPdmVydmlld0l0ZW1GdW5kcy52dWU/OWI4ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJTaWRlYmFyV2lkZ2V0LnZ1ZT8xNDYxIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0NvbnRyYWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9WdWVJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9XZWIzeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9naXRodWIvR2l0aHViQnV0dG9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9naXRodWIvR2l0aHViQnV0dG9ucy52dWU/OWRjMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJCdXR0b25zLnZ1ZT84OWI5Iiwid2VicGFjazovLy8uL3NyYy9jb250ZW50X3NjcmlwdHMvZ2l0aHViL0dpdGh1Yk92ZXJ2aWV3SXRlbUZ1bmRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJPdmVydmlld0l0ZW1GdW5kcy52dWU/Nzg2NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJPdmVydmlld0l0ZW1GdW5kcy52dWU/YjUwMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJTaWRlYmFyV2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJTaWRlYmFyV2lkZ2V0LnZ1ZT84NzczIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50X3NjcmlwdHMvZ2l0aHViL0dpdGh1YlNpZGViYXJXaWRnZXQudnVlPzJmOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyYWN0cy9GdW5kUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJhY3RzL0Z1bmRSZXF1ZXN0Q29udHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyYWN0cy9GdW5kUmVxdWVzdFRva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cmFjdHMvTWluaU1lVG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyYWN0cy90eXBlY2hhaW4tcnVudGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxz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TUFBTSxHQUFFLENBQUM7SUFDekQsQ0FBQztJQUVELDRDQUFPLEdBQVA7UUFDRSxPQUFPLFVBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxPQUFPLFdBQzlELElBQUksQ0FBQyxVQUFVLENBQ1QsQ0FBQzs7SUFDZCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDOztBQUVLLG1CQUFvQixJQUFTLEVBQUUsSUFBUztJQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7UUFDMUIsSUFBSSxlQUFJLElBQUksU0FBRSxVQUFDLEdBQVEsRUFBRSxJQUFTO2dCQUNoQyxJQUFJLEdBQUc7b0JBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLENBQUMsSUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsImZpbGUiOiJnaXRodWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiZ2l0aHViXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2NvbnRlbnRfc2NyaXB0cy9naXRodWIvR2l0aHViLnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5idG4tc20uYnRuLWNhbmNlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kaXNjdXNzaW9uLXNpZGViYXItaXRlbS0tZm5kIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZm5kLWxvYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOXB4O1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICMwMDAwMDAgdHJhbnNwYXJlbnQgIzAwMDAwMCB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsZHMtZHVhbC1yaW5nIDFzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi5sYWJlbC1jb2xvciAuZm5kLWxvYWRlciB7XFxuICBib3JkZXItY29sb3I6ICNmZmZmZmYgdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudDtcXG59XFxuLmxhYmVsLWJsdWUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNzZkYjtcXG59XFxuQGtleWZyYW1lcyBsZHMtZHVhbC1yaW5nIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViQnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViQnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dpdGh1YkJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViT3ZlcnZpZXdJdGVtRnVuZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dpdGh1Yk92ZXJ2aWV3SXRlbUZ1bmRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViT3ZlcnZpZXdJdGVtRnVuZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViU2lkZWJhcldpZGdldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViU2lkZWJhcldpZGdldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dpdGh1YlNpZGViYXJXaWRnZXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcblxuXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IHtDb21wb25lbnQsIFByb3AsIFZ1ZX0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBCcm93c2VyUGx1Z2luIGZyb20gXCIuLi8uLi9jbGFzc2VzL0Jyb3dzZXJQbHVnaW5cIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcIi4vR2l0aHViXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4uLy4uL21vZGVscy9TZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRodWJCdXR0b25zIGV4dGVuZHMgVnVlIHtcbiAgICBAUHJvcCgpIHNldHRpbmdzOiBTZXR0aW5ncztcblxuICAgIHB1YmxpYyBmdW5kKCkge1xuICAgICAgICBsZXQgdXJsID0gR2l0aHViLmdldEN1cnJlbnRJc3N1ZVVybCgpO1xuICAgICAgICBCcm93c2VyUGx1Z2luLmZ1bmQodXJsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xhaW0oKSB7XG4gICAgICAgIGxldCB1cmwgPSBHaXRodWIuZ2V0Q3VycmVudElzc3VlVXJsKCk7XG4gICAgICAgIEJyb3dzZXJQbHVnaW4uY2xhaW0odXJsKTtcbiAgICB9XG59XG4iLCJcblxuXG5cbmltcG9ydCB7Q29tcG9uZW50LCBQcm9wLCBWdWV9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL2NsYXNzZXMvVXRpbHNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vLi4vbW9kZWxzL1NldHRpbmdzXCI7XG5pbXBvcnQgR2l0aHViIGZyb20gXCIuL0dpdGh1YlwiO1xuXG5AQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRodWJPdmVydmlld0l0ZW1GdW5kcyBleHRlbmRzIFZ1ZSB7XG4gICAgQFByb3AoKSBzZXR0aW5nczogU2V0dGluZ3M7XG4gICAgQFByb3AoKSBpc3N1ZUlkOiBzdHJpbmc7XG4gICAgcHVibGljIHRvdGFsRnVuZGluZzogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgdG90YWxGdW5kZXJzOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyB5b3VyRnVuZGluZzogc3RyaW5nID0gbnVsbDtcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IEdpdGh1Yi5nZXRJbnN0YW5jZSgpLmdldFJlcXVlc3RGdW5kSW5mbyh0aGlzLmlzc3VlSWQpO1xuICAgICAgICB0aGlzLnRvdGFsRnVuZGVycyA9IHJlc3VsdFswXS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnRvdGFsRnVuZGluZyA9IFV0aWxzLndlaVRvU3RyaW5nKHJlc3VsdFsxXSk7XG4gICAgICAgIHRoaXMueW91ckZ1bmRpbmcgPSBVdGlscy53ZWlUb1N0cmluZyhyZXN1bHRbMl0pO1xuICAgIH1cbn1cbiIsIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQge0NvbXBvbmVudCwgUHJvcCwgVnVlfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9jbGFzc2VzL1V0aWxzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4uLy4uL21vZGVscy9TZXR0aW5nc1wiO1xuaW1wb3J0IEdpdGh1YiBmcm9tIFwiLi9HaXRodWJcIjtcblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0aHViU2lkZWJhcldpZGdldCBleHRlbmRzIFZ1ZSB7XG4gICAgQFByb3AoKSBzZXR0aW5nczogU2V0dGluZ3M7XG4gICAgQFByb3AoKSBpc3N1ZUlkOiBzdHJpbmc7XG4gICAgcHVibGljIHRvdGFsRnVuZGluZzogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgdG90YWxGdW5kZXJzOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyB5b3VyRnVuZGluZzogc3RyaW5nID0gbnVsbDtcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IEdpdGh1Yi5nZXRJbnN0YW5jZSgpLmdldFJlcXVlc3RGdW5kSW5mbyh0aGlzLmlzc3VlSWQpO1xuICAgICAgICB0aGlzLnRvdGFsRnVuZGVycyA9IHJlc3VsdFswXS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnRvdGFsRnVuZGluZyA9IFV0aWxzLndlaVRvU3RyaW5nKHJlc3VsdFsxXSk7XG4gICAgICAgIHRoaXMueW91ckZ1bmRpbmcgPSBVdGlscy53ZWlUb1N0cmluZyhyZXN1bHRbMl0pO1xuICAgIH1cblxufVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgW1xuICAgIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLmNsYWltKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBDbGFpbVxcbiAgICBcIildXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tYmx1ZVwiLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5mdW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBGdW5kXFxuICAgIFwiKV1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgW1xuICAgIF92bS5fdihcIiB8IFRvdGFsIEZ1bmRpbmc6IFwiICsgX3ZtLl9zKF92bS50b3RhbEZ1bmRpbmcpICsgXCIgRk5EIFwiKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlzY3Vzc2lvbi1zaWRlYmFyLWhlYWRpbmcgdGV4dC1ib2xkXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiRnVuZFJlcXVlc3RcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVG90YWwgRnVuZGluZyAtIFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWNvbG9yIGxhYmVsLWJsdWVcIiB9LCBbXG4gICAgICAgIF92bS50b3RhbEZ1bmRpbmcgPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm5kLWxvYWRlciBmbmQtbG9hZGVyLS1zbWFsbFwiIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnRvdGFsRnVuZGluZyAhPSBudWxsXG4gICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnRvdGFsRnVuZGluZykgKyBcIiBGTkRcIildKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIiMgRnVuZGVycyAtIFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS50b3RhbEZ1bmRlcnMgPT0gbnVsbFxuICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZuZC1sb2FkZXIgZm5kLWxvYWRlci0tc21hbGxcIiB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS50b3RhbEZ1bmRlcnMgIT0gbnVsbFxuICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udG90YWxGdW5kZXJzKSldKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ueW91ckZ1bmRpbmcgIT0gbnVsbFxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJZb3VyIGZ1bmRpbmcgLSBcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS55b3VyRnVuZGluZyA9PSBudWxsXG4gICAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZuZC1sb2FkZXIgZm5kLWxvYWRlci0tc21hbGxcIiB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS55b3VyRnVuZGluZyAhPSBudWxsXG4gICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueW91ckZ1bmRpbmcpICsgXCIgRk5EXCIpXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQge1dlYjN4fSBmcm9tIFwiLi9XZWIzeFwiO1xuaW1wb3J0IHtGdW5kUmVxdWVzdENvbnRyYWN0fSBmcm9tIFwiLi4vY29udHJhY3RzL0Z1bmRSZXF1ZXN0Q29udHJhY3RcIjtcbmltcG9ydCB7RnVuZFJlcXVlc3RUb2tlbn0gZnJvbSBcIi4uL2NvbnRyYWN0cy9GdW5kUmVxdWVzdFRva2VuXCI7XG5pbXBvcnQge0Z1bmRSZXBvc2l0b3J5fSBmcm9tIFwiLi4vY29udHJhY3RzL0Z1bmRSZXBvc2l0b3J5XCI7XG5pbXBvcnQge1Rva2VuSW5mb30gZnJvbSBcIi4vVG9rZW5JbmZvXCI7XG5pbXBvcnQge01pbmlNZVRva2VufSBmcm9tIFwiLi4vY29udHJhY3RzL01pbmlNZVRva2VuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyYWN0cyB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQ29udHJhY3RzO1xuXG4gICAgcHVibGljIHRva2VuQ29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG4gICAgcHVibGljIGZyQ29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdG9rZW5Db250cmFjdDogUHJvbWlzZTxGdW5kUmVxdWVzdFRva2VuPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZnJDb250cmFjdDogUHJvbWlzZTxGdW5kUmVxdWVzdENvbnRyYWN0PiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZXJjMjBDb250cmFjdDogTWFwPHN0cmluZywgUHJvbWlzZTxNaW5pTWVUb2tlbj4+ID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8TWluaU1lVG9rZW4+PigpO1xuICAgIHByaXZhdGUgX2Z1bmRSZXBvc2l0b3J5OiBQcm9taXNlPEZ1bmRSZXBvc2l0b3J5PiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfd2ViMzogYW55ID0gV2ViM3guZ2V0SW5zdGFuY2UoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRva2VuQ29udHJhY3RBZGRyZXNzID0gXCIweDAyRjk2ZUY4NWNBZDY2Mzk1MDBDQTFjYzgzNTZGMGI1Q0E1YkYxRDJcIjtcbiAgICAgICAgdGhpcy5mckNvbnRyYWN0QWRkcmVzcyA9IFwiMHhDMTZhMTAyODEzQjdiRDk4YjBCRUYyZEYyOEZGQ2FmMUZiZWU5N2MwXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRva2VuQ29udHJhY3QoKTogUHJvbWlzZTxGdW5kUmVxdWVzdFRva2VuPiB7XG4gICAgICAgIGlmICghdGhpcy5fdG9rZW5Db250cmFjdCkge1xuICAgICAgICAgICAgdGhpcy5fdG9rZW5Db250cmFjdCA9IEZ1bmRSZXF1ZXN0VG9rZW4uY3JlYXRlQW5kVmFsaWRhdGUodGhpcy5fd2ViMywgQ29udHJhY3RzLmdldEluc3RhbmNlKCkudG9rZW5Db250cmFjdEFkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlbkNvbnRyYWN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGckNvbnRyYWN0KCk6IFByb21pc2U8RnVuZFJlcXVlc3RDb250cmFjdD4ge1xuICAgICAgICBpZiAoIXRoaXMuX2ZyQ29udHJhY3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZyQ29udHJhY3QgPSBGdW5kUmVxdWVzdENvbnRyYWN0LmNyZWF0ZUFuZFZhbGlkYXRlKHRoaXMuX3dlYjMsIENvbnRyYWN0cy5nZXRJbnN0YW5jZSgpLmZyQ29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZnJDb250cmFjdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RXJjMjBDb250cmFjdChhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPE1pbmlNZVRva2VuPiB7XG4gICAgICAgIGlmICghdGhpcy5fZXJjMjBDb250cmFjdC5nZXQoYWRkcmVzcykpIHtcbiAgICAgICAgICAgIHRoaXMuX2VyYzIwQ29udHJhY3Quc2V0KGFkZHJlc3MsIE1pbmlNZVRva2VuLmNyZWF0ZUFuZFZhbGlkYXRlKHRoaXMuX3dlYjMsIGFkZHJlc3MpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZXJjMjBDb250cmFjdC5nZXQoYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldEZ1bmRSZXBvc2l0b3J5KCk6IFByb21pc2U8RnVuZFJlcG9zaXRvcnk+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9mdW5kUmVwb3NpdG9yeSkge1xuICAgICAgICAgICAgbGV0IHJlcG9zaXRvcnlBZGRyZXNzOiBzdHJpbmcgPSBhd2FpdCAoYXdhaXQgdGhpcy5nZXRGckNvbnRyYWN0KCkpLmZ1bmRSZXBvc2l0b3J5O1xuICAgICAgICAgICAgdGhpcy5fZnVuZFJlcG9zaXRvcnkgPSBGdW5kUmVwb3NpdG9yeS5jcmVhdGVBbmRWYWxpZGF0ZSh0aGlzLl93ZWIzLCByZXBvc2l0b3J5QWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2Z1bmRSZXBvc2l0b3J5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0RXJjMjBCYWxhbmNlKGFjY291bnQ6IHN0cmluZywgdG9rZW46IFRva2VuSW5mbyk6IFByb21pc2U8TnVtYmVyPiB7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgbGV0IGVyYzIwID0gYXdhaXQgQ29udHJhY3RzLmdldEluc3RhbmNlKCkuZ2V0RXJjMjBDb250cmFjdCh0b2tlbi5hZGRyZXNzKTtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgZXJjMjAuYmFsYW5jZU9mKGFjY291bnQpKS50b051bWJlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3B1YmxpYyBzdGF0aWMgZ2V0UG9zc2libGVUb2tlbnMocGxhdGZvcm1JZDogc3RyaW5nKTogUHJvbWlzZTxUb2tlbkluZm9bXT4ge1xuICAgIC8vICAgIHJldHVybiBVdGlscy5nZXRKU09OKFwiL3Jlc3QvZnVuZC9hbGxvd2VkLXRva2Vucz9wbGF0Zm9ybT1HSVRIVUImcGxhdGZvcm1JZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChwbGF0Zm9ybUlkKSk7XG4gICAgLy99XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIUNvbnRyYWN0cy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgQ29udHJhY3RzLmluc3RhbmNlID0gbmV3IENvbnRyYWN0cygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb250cmFjdHMuaW5zdGFuY2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IFZ1ZSwge1Z1ZUNvbnN0cnVjdG9yfSBmcm9tICd2dWUnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWdWVJbml0aWFsaXplciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNvbXBvbmVudChjb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NBdHRyOiBzdHJpbmcsIENvbXBvbmVudENsYXNzOiBWdWVDb25zdHJ1Y3RvciwgcHJvcHM6IEFycmF5PGFueT4pIHtcbiAgICAgICAgbGV0IHZ1ZUluc3RhbmNlID0gVnVlSW5pdGlhbGl6ZXIuX2luaXRDb21wb25lbnQoY29udGFpbmVyRWxlbWVudCwgY2xhc3NBdHRyLCBDb21wb25lbnRDbGFzcywgcHJvcHMpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BqYXg6Y29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodnVlSW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICB2dWVJbnN0YW5jZS4kZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5pdENvbXBvbmVudChjb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NBdHRyOiBzdHJpbmcsIENvbXBvbmVudENsYXNzOiBWdWVDb25zdHJ1Y3RvciwgcHJvcHM6IEFycmF5PGFueT4pOiBWdWUge1xuICAgICAgICBsZXQgaWQgPSBgYSR7VXRpbHMuZ2VuZXJhdGVVVUlEKCl9YDtcblxuICAgICAgICBpZiAoY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGZpcnN0Q2hpbGQgPSBjb250YWluZXJFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzQXR0cik7XG4gICAgICAgICAgICBjb250YWluZXJFbGVtZW50Lmluc2VydEJlZm9yZShuZXdFbGVtZW50LCBmaXJzdENoaWxkKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWdWUoe1xuICAgICAgICAgICAgICAgIGVsOiBgIyR7aWR9YCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgVnVlQ29tcG9uZW50Q2xhc3MgPSBWdWUuZXh0ZW5kKENvbXBvbmVudENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IFZ1ZUNvbXBvbmVudENsYXNzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS4kcHJvcHNbcHJvcF0gPSBwcm9wc1twcm9wXTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLiRtb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbC5hcHBlbmRDaGlsZChpbnN0YW5jZS4kZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgIHB1YmxpYyBzdGF0aWMgYXNzaWduQ29tcG9uZW50KHNlbGVjdG9yLCBDb21wb25lbnRDbGFzcywgc2V0dGluZ3MpIHtcbiAgICAgICAgbGV0IHZ1ZUluc3RhbmNlID0gVnVlSW5pdGlhbGl6ZXIuX2luaXRBc3NpZ25Db21wb25lbnQoc2VsZWN0b3IsIENvbXBvbmVudENsYXNzLCBzZXR0aW5ncyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGpheDpjb21wbGV0ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHZ1ZUluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgdnVlSW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZ1ZUluc3RhbmNlID0gVnVlSW5pdGlhbGl6ZXIuX2luaXRBc3NpZ25Db21wb25lbnQoc2VsZWN0b3IsIENvbXBvbmVudENsYXNzLCBzZXR0aW5ncyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9pbml0QXNzaWduQ29tcG9uZW50KHNlbGVjdG9yLCBDb21wb25lbnRDbGFzcywgc2V0dGluZ3MpOiBWdWUge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaXMnLCAnZ2l0aHViLW92ZXJ2aWV3LWl0ZW0nKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lubGluZS10ZW1wbGF0ZScsICd0cnVlJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgVnVlKHtcbiAgICAgICAgICAgICAgICBlbDogYCMke2NvbnRhaW5lci5pZH1gLFxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgKi9cbn0iLCJleHBvcnQgY2xhc3MgV2ViM3gge1xuICAgIHByaXZhdGUgX3dlYjM6IGFueTtcblxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBXZWIzeCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAodHlwZW9mICg8YW55PndpbmRvdykud2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlYjMgPSBuZXcgKDxhbnk+d2luZG93KS5XZWIzKCg8YW55PndpbmRvdykud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgKDxhbnk+d2luZG93KS53ZWIzID0gbmV3ICg8YW55PndpbmRvdykuV2ViMyhuZXcgKDxhbnk+d2luZG93KS5XZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoJ2h0dHBzOi8va292YW4uZnVuZHJlcXVlc3QuaW8nKSk7XG4gICAgICAgICAgICB0aGlzLl93ZWIzID0gKDxhbnk+d2luZG93KS53ZWIzO1xuICAgICAgICAgICAgLy8gVE9ETzogbWFrZSBhcHAgcmVhZG9ubHksIG5vIHRyYW5zYWN0aW9ucyBhcmUgcG9zc2libGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogYW55IHtcbiAgICAgICAgaWYgKFdlYjN4Lmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIFdlYjN4Lmluc3RhbmNlID0gbmV3IFdlYjN4KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFdlYjN4Lmluc3RhbmNlLl93ZWIzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QWNjb3VudCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gV2ViM3guZ2V0SW5zdGFuY2UoKS5ldGguZGVmYXVsdEFjY291bnQ7XG4gICAgfVxufSIsImltcG9ydCBHaXRodWJCdXR0b25zIGZyb20gXCIuL0dpdGh1YkJ1dHRvbnMudnVlXCI7XG5pbXBvcnQgR2l0aHViU2lkZWJhcldpZGdldCBmcm9tIFwiLi9HaXRodWJTaWRlYmFyV2lkZ2V0LnZ1ZVwiO1xuaW1wb3J0IEdpdGh1Yk92ZXJ2aWV3SXRlbUZ1bmRzIGZyb20gXCIuL0dpdGh1Yk92ZXJ2aWV3SXRlbUZ1bmRzLnZ1ZVwiO1xuaW1wb3J0IFZ1ZUluaXRpYWxpemVyIGZyb20gXCIuLi8uLi9jbGFzc2VzL1Z1ZUluaXRpYWxpemVyXCI7XG5pbXBvcnQgQnJvd3NlclBsdWdpbiBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9Ccm93c2VyUGx1Z2luXCI7XG5pbXBvcnQgQ29udHJhY3RzIGZyb20gXCIuLi8uLi9jbGFzc2VzL0NvbnRyYWN0c1wiO1xuaW1wb3J0IHtXZWIzeH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvV2ViM3hcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vLi4vbW9kZWxzL1NldHRpbmdzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdGh1YiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEdpdGh1YjtcblxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzID0ge1xuICAgICAgICBhY2NvdW50QWRkcmVzczogJzB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCdcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBHaXRodWIge1xuICAgICAgICBpZiAoIUdpdGh1Yi5pbnN0YW5jZSkge1xuICAgICAgICAgICAgR2l0aHViLmluc3RhbmNlID0gbmV3IEdpdGh1YigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHaXRodWIuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIEJyb3dzZXJQbHVnaW4ubG9hZCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHRoaXMuc2V0dGluZ3MsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxldCByZWFkeVN0YXRlQ2hlY2tJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVhZHlTdGF0ZUNoZWNrSW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIEdpdGh1Yi5pbml0KHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwamF4OmNvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgR2l0aHViLmluaXQodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5pdChzZXR0aW5nczogU2V0dGluZ3MpIHtcbiAgICAgICAgbGV0IHByb3BzID0gW107XG4gICAgICAgIHByb3BzWydzZXR0aW5ncyddID0gc2V0dGluZ3M7XG4gICAgICAgIHByb3BzWydpc3N1ZUlkJ10gPSBHaXRodWIuZ2V0Q3VycmVudFBsYXRmb3JtSWQoKTtcbiAgICAgICAgVnVlSW5pdGlhbGl6ZXIuY3JlYXRlQ29tcG9uZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXJ0aWFsLWRpc2N1c3Npb24tc2lkZWJhcicpLCAnZm5kLXNpZGViYXItaXNzdWUtZnVuZHMgZGlzY3Vzc2lvbi1zaWRlYmFyLWl0ZW0gZGlzY3Vzc2lvbi1zaWRlYmFyLWl0ZW0tLWZuZCcsIEdpdGh1YlNpZGViYXJXaWRnZXQsIHByb3BzKTtcbiAgICAgICAgVnVlSW5pdGlhbGl6ZXIuY3JlYXRlQ29tcG9uZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXJ0aWFsLWRpc2N1c3Npb24taGVhZGVyIC5naC1oZWFkZXItYWN0aW9ucycpLCAnZm5kLWFjdGlvbi1idXR0b25zJywgR2l0aHViQnV0dG9ucywgcHJvcHMpO1xuICAgICAgICBsZXQgaXNzdWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlzc3Vlcy1saXN0aW5nIHVsLmpzLW5hdmlnYXRpb24tY29udGFpbmVyLmpzLWFjdGl2ZS1uYXZpZ2F0aW9uLWNvbnRhaW5lciBbZGF0YS1pZF0nKTtcbiAgICAgICAgaWYgKGlzc3Vlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlzc3Vlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBocmVmID0gKDxIVE1MQW5jaG9yRWxlbWVudD5pc3N1ZXNbaV0ucXVlcnlTZWxlY3RvcignLmpzLW5hdmlnYXRpb24tb3BlbicpKS5ocmVmO1xuICAgICAgICAgICAgICAgIGxldCBtZXRhOiBIVE1MRWxlbWVudCA9IGlzc3Vlc1tpXS5xdWVyeVNlbGVjdG9yKCcuaXNzdWUtbWV0YS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgcHJvcHNbJ2lzc3VlSWQnXSA9IEdpdGh1Yi5nZXRQbGF0Zm9ybUlkRnJvbVVybChocmVmKTtcbiAgICAgICAgICAgICAgICBWdWVJbml0aWFsaXplci5jcmVhdGVDb21wb25lbnQobWV0YSwgJ2ZuZC1tZXRhLWlzc3VlLWZ1bmRzJywgR2l0aHViT3ZlcnZpZXdJdGVtRnVuZHMsIHByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRSZXF1ZXN0RnVuZEluZm8oaXNzdWVJZCk6IFByb21pc2U8W0JpZ051bWJlciwgQmlnTnVtYmVyLCBCaWdOdW1iZXJdPiB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgQ29udHJhY3RzLmdldEluc3RhbmNlKCkuZ2V0RnVuZFJlcG9zaXRvcnkoKSkuZ2V0RnVuZEluZm8oV2ViM3guZ2V0SW5zdGFuY2UoKS5mcm9tQXNjaWkoXCJHSVRIVUJcIiksIFN0cmluZyhpc3N1ZUlkKSwgdGhpcy5zZXR0aW5ncy5hY2NvdW50QWRkcmVzcywgQ29udHJhY3RzLmdldEluc3RhbmNlKCkudG9rZW5Db250cmFjdEFkZHJlc3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q3VycmVudElzc3VlVXJsKCkge1xuICAgICAgICBsZXQgaGVhZGVyOiBIVE1MRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcnRpYWwtZGlzY3Vzc2lvbi1oZWFkZXInKSk7XG4gICAgICAgIGlmKGhlYWRlcikge1xuICAgICAgICAgICAgbGV0IHVybCA9IGBodHRwczovL2dpdGh1Yi5jb20ke2hlYWRlci5kYXRhc2V0LnVybH1gO1xuICAgICAgICAgICAgcmV0dXJuIHVybC5zcGxpdCgnL3Nob3dfcGFydGlhbCcpWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRDdXJyZW50UGxhdGZvcm1JZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGxhdGZvcm1JZEZyb21VcmwoR2l0aHViLmdldEN1cnJlbnRJc3N1ZVVybCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRQbGF0Zm9ybUlkRnJvbVVybChpc3N1ZUxpbmspIHtcbiAgICAgICAgbGV0IG1hdGNoZXMgPSAvXihodHRwczpcXC9cXC9naXRodWJcXC5jb20pP1xcLyguKylcXC8oLispXFwvaXNzdWVzXFwvKFxcZCspJC8uZXhlYyhpc3N1ZUxpbmspO1xuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+PSA0KSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1syXSArICd8RlJ8JyArIG1hdGNoZXNbM10gKyAnfEZSfCcgKyBtYXRjaGVzWzRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkdpdGh1Yi5nZXRJbnN0YW5jZSgpOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR2l0aHViQnV0dG9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjY0NjQ3NThcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HaXRodWJCdXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9HaXRodWJCdXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dpdGh1YkJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3N0ZXZlL3dvcmsvZm5kL2Nocm9tZS1icm93c2VyLXBsdWdpbl9uZXcvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY2NDY0NzU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY2NDY0NzU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HaXRodWJCdXR0b25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NjQ2NDc1OFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY2NDY0NzU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29udGVudF9zY3JpcHRzL2dpdGh1Yi9HaXRodWJCdXR0b25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViQnV0dG9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HaXRodWJCdXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dpdGh1YkJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dpdGh1YkJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR2l0aHViT3ZlcnZpZXdJdGVtRnVuZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyNzBjNjE5XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR2l0aHViT3ZlcnZpZXdJdGVtRnVuZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dpdGh1Yk92ZXJ2aWV3SXRlbUZ1bmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dpdGh1Yk92ZXJ2aWV3SXRlbUZ1bmRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zdGV2ZS93b3JrL2ZuZC9jaHJvbWUtYnJvd3Nlci1wbHVnaW5fbmV3L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMjcwYzYxOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMjcwYzYxOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR2l0aHViT3ZlcnZpZXdJdGVtRnVuZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyNzBjNjE5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjI3MGM2MTknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb250ZW50X3NjcmlwdHMvZ2l0aHViL0dpdGh1Yk92ZXJ2aWV3SXRlbUZ1bmRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViT3ZlcnZpZXdJdGVtRnVuZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViT3ZlcnZpZXdJdGVtRnVuZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViT3ZlcnZpZXdJdGVtRnVuZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dpdGh1Yk92ZXJ2aWV3SXRlbUZ1bmRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dpdGh1YlNpZGViYXJXaWRnZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5MGViYzUyXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR2l0aHViU2lkZWJhcldpZGdldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vR2l0aHViU2lkZWJhcldpZGdldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9HaXRodWJTaWRlYmFyV2lkZ2V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zdGV2ZS93b3JrL2ZuZC9jaHJvbWUtYnJvd3Nlci1wbHVnaW5fbmV3L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OTBlYmM1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OTBlYmM1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR2l0aHViU2lkZWJhcldpZGdldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjkwZWJjNTJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2OTBlYmM1MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbnRlbnRfc2NyaXB0cy9naXRodWIvR2l0aHViU2lkZWJhcldpZGdldC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dpdGh1YlNpZGViYXJXaWRnZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2l0aHViU2lkZWJhcldpZGdldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HaXRodWJTaWRlYmFyV2lkZ2V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HaXRodWJTaWRlYmFyV2lkZ2V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCIvKiBHRU5FUkFURUQgQlkgVFlQRUNIQUlOIFZFUi4gMC4xLjQgKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCB7XG4gIFR5cGVDaGFpbkNvbnRyYWN0LFxuICBwcm9taXNpZnksXG4gIElUeFBhcmFtcyxcbiAgSVBheWFibGVUeFBhcmFtcyxcbiAgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXJcbn0gZnJvbSBcIi4vdHlwZWNoYWluLXJ1bnRpbWVcIjtcblxuZXhwb3J0IGNsYXNzIEZ1bmRSZXBvc2l0b3J5IGV4dGVuZHMgVHlwZUNoYWluQ29udHJhY3Qge1xuICBwdWJsaWMgcmVhZG9ubHkgcmF3V2ViM0NvbnRyYWN0OiBhbnk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHdlYjM6IGFueSwgYWRkcmVzczogc3RyaW5nIHwgQmlnTnVtYmVyKSB7XG4gICAgY29uc3QgYWJpID0gW1xuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgbmFtZTogXCJ0b3RhbEJhbGFuY2VcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBuYW1lOiBcImNhbGxlcnNcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJib29sXCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBuYW1lOiBcIm93bmVyXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgbmFtZTogXCJyZXF1ZXN0c0Z1bmRlZFwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFt7IG5hbWU6IFwiX25ld093bmVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBuYW1lOiBcImNoYW5nZU93bmVyXCIsXG4gICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgbmFtZTogXCJ0b3RhbEZ1bmRlZFwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwidG90YWxOdW1iZXJPZkZ1bmRlcnNcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgICB0eXBlOiBcImNvbnN0cnVjdG9yXCJcbiAgICAgIH0sXG4gICAgICB7IHBheWFibGU6IGZhbHNlLCBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLCB0eXBlOiBcImZhbGxiYWNrXCIgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX2Zyb21cIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3BsYXRmb3JtXCIsIHR5cGU6IFwiYnl0ZXMzMlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9wbGF0Zm9ybUlkXCIsIHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcInVwZGF0ZUZ1bmRlcnNcIixcbiAgICAgICAgb3V0cHV0czogW10sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIl9mcm9tXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9wbGF0Zm9ybVwiLCB0eXBlOiBcImJ5dGVzMzJcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfcGxhdGZvcm1JZFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl90b2tlblwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfdmFsdWVcIiwgdHlwZTogXCJ1aW50MjU2XCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcInVwZGF0ZUJhbGFuY2VzXCIsXG4gICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJwbGF0Zm9ybVwiLCB0eXBlOiBcImJ5dGVzMzJcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJwbGF0Zm9ybUlkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3Rva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJjbGFpbVRva2VuXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwidWludDI1NlwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJwbGF0Zm9ybVwiLCB0eXBlOiBcImJ5dGVzMzJcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJwbGF0Zm9ybUlkXCIsIHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcImZpbmlzaFJlc29sdmVGdW5kXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIl9wbGF0Zm9ybVwiLCB0eXBlOiBcImJ5dGVzMzJcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfcGxhdGZvcm1JZFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9mdW5kZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3Rva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJnZXRGdW5kSW5mb1wiLFxuICAgICAgICBvdXRwdXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQyNTZcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiXCIsIHR5cGU6IFwidWludDI1NlwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJfcGxhdGZvcm1cIiwgdHlwZTogXCJieXRlczMyXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3BsYXRmb3JtSWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiZ2V0RnVuZGVkVG9rZW5Db3VudFwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJfcGxhdGZvcm1cIiwgdHlwZTogXCJieXRlczMyXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3BsYXRmb3JtSWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfaW5kZXhcIiwgdHlwZTogXCJ1aW50MjU2XCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcImdldEZ1bmRlZFRva2Vuc0J5SW5kZXhcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX3BsYXRmb3JtXCIsIHR5cGU6IFwiYnl0ZXMzMlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9wbGF0Zm9ybUlkXCIsIHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcImdldEZ1bmRlckNvdW50XCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwidWludDI1NlwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIl9wbGF0Zm9ybVwiLCB0eXBlOiBcImJ5dGVzMzJcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfcGxhdGZvcm1JZFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9mdW5kZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3Rva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJhbW91bnRGdW5kZWRcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX3BsYXRmb3JtXCIsIHR5cGU6IFwiYnl0ZXMzMlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9wbGF0Zm9ybUlkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3Rva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJiYWxhbmNlXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwidWludDI1NlwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJfY2FsbGVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImFsbG93ZWRcIiwgdHlwZTogXCJib29sXCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcInVwZGF0ZUNhbGxlclwiLFxuICAgICAgICBvdXRwdXRzOiBbXSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfVxuICAgIF07XG4gICAgc3VwZXIod2ViMywgYWRkcmVzcywgYWJpKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVBbmRWYWxpZGF0ZShcbiAgICB3ZWIzOiBhbnksXG4gICAgYWRkcmVzczogc3RyaW5nIHwgQmlnTnVtYmVyXG4gICk6IFByb21pc2U8RnVuZFJlcG9zaXRvcnk+IHtcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBGdW5kUmVwb3NpdG9yeSh3ZWIzLCBhZGRyZXNzKTtcbiAgICBjb25zdCBjb2RlID0gYXdhaXQgcHJvbWlzaWZ5KHdlYjMuZXRoLmdldENvZGUsIFthZGRyZXNzXSk7XG4gICAgaWYgKGNvZGUgPT09IFwiMHgwXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ29udHJhY3QgYXQgJHthZGRyZXNzfSBkb2Vzbid0IGV4aXN0IWApO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJhY3Q7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG93bmVyKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5vd25lciwgW10pO1xuICB9XG4gIHB1YmxpYyBnZXQgcmVxdWVzdHNGdW5kZWQoKTogUHJvbWlzZTxCaWdOdW1iZXI+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LnJlcXVlc3RzRnVuZGVkLCBbXSk7XG4gIH1cbiAgcHVibGljIGdldCB0b3RhbE51bWJlck9mRnVuZGVycygpOiBQcm9taXNlPEJpZ051bWJlcj4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QudG90YWxOdW1iZXJPZkZ1bmRlcnMsIFtdKTtcbiAgfVxuICBwdWJsaWMgdG90YWxCYWxhbmNlKGFyZzA6IEJpZ051bWJlciB8IHN0cmluZyk6IFByb21pc2U8QmlnTnVtYmVyPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC50b3RhbEJhbGFuY2UsIFthcmcwLnRvU3RyaW5nKCldKTtcbiAgfVxuICBwdWJsaWMgY2FsbGVycyhhcmcwOiBCaWdOdW1iZXIgfCBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LmNhbGxlcnMsIFthcmcwLnRvU3RyaW5nKCldKTtcbiAgfVxuICBwdWJsaWMgdG90YWxGdW5kZWQoYXJnMDogQmlnTnVtYmVyIHwgc3RyaW5nKTogUHJvbWlzZTxCaWdOdW1iZXI+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LnRvdGFsRnVuZGVkLCBbYXJnMC50b1N0cmluZygpXSk7XG4gIH1cbiAgcHVibGljIGdldEZ1bmRJbmZvKFxuICAgIF9wbGF0Zm9ybTogQmlnTnVtYmVyLFxuICAgIF9wbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgX2Z1bmRlcjogQmlnTnVtYmVyIHwgc3RyaW5nLFxuICAgIF90b2tlbjogQmlnTnVtYmVyIHwgc3RyaW5nXG4gICk6IFByb21pc2U8W0JpZ051bWJlciwgQmlnTnVtYmVyLCBCaWdOdW1iZXJdPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5nZXRGdW5kSW5mbywgW1xuICAgICAgX3BsYXRmb3JtLnRvU3RyaW5nKCksXG4gICAgICBfcGxhdGZvcm1JZC50b1N0cmluZygpLFxuICAgICAgX2Z1bmRlci50b1N0cmluZygpLFxuICAgICAgX3Rva2VuLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgZ2V0RnVuZGVkVG9rZW5Db3VudChcbiAgICBfcGxhdGZvcm06IEJpZ051bWJlcixcbiAgICBfcGxhdGZvcm1JZDogc3RyaW5nXG4gICk6IFByb21pc2U8QmlnTnVtYmVyPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5nZXRGdW5kZWRUb2tlbkNvdW50LCBbXG4gICAgICBfcGxhdGZvcm0udG9TdHJpbmcoKSxcbiAgICAgIF9wbGF0Zm9ybUlkLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgZ2V0RnVuZGVkVG9rZW5zQnlJbmRleChcbiAgICBfcGxhdGZvcm06IEJpZ051bWJlcixcbiAgICBfcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIF9pbmRleDogQmlnTnVtYmVyIHwgbnVtYmVyXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5nZXRGdW5kZWRUb2tlbnNCeUluZGV4LCBbXG4gICAgICBfcGxhdGZvcm0udG9TdHJpbmcoKSxcbiAgICAgIF9wbGF0Zm9ybUlkLnRvU3RyaW5nKCksXG4gICAgICBfaW5kZXgudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBnZXRGdW5kZXJDb3VudChcbiAgICBfcGxhdGZvcm06IEJpZ051bWJlcixcbiAgICBfcGxhdGZvcm1JZDogc3RyaW5nXG4gICk6IFByb21pc2U8QmlnTnVtYmVyPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5nZXRGdW5kZXJDb3VudCwgW1xuICAgICAgX3BsYXRmb3JtLnRvU3RyaW5nKCksXG4gICAgICBfcGxhdGZvcm1JZC50b1N0cmluZygpXG4gICAgXSk7XG4gIH1cbiAgcHVibGljIGFtb3VudEZ1bmRlZChcbiAgICBfcGxhdGZvcm06IEJpZ051bWJlcixcbiAgICBfcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIF9mdW5kZXI6IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfdG9rZW46IEJpZ051bWJlciB8IHN0cmluZ1xuICApOiBQcm9taXNlPEJpZ051bWJlcj4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QuYW1vdW50RnVuZGVkLCBbXG4gICAgICBfcGxhdGZvcm0udG9TdHJpbmcoKSxcbiAgICAgIF9wbGF0Zm9ybUlkLnRvU3RyaW5nKCksXG4gICAgICBfZnVuZGVyLnRvU3RyaW5nKCksXG4gICAgICBfdG9rZW4udG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBiYWxhbmNlKFxuICAgIF9wbGF0Zm9ybTogQmlnTnVtYmVyLFxuICAgIF9wbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgX3Rva2VuOiBCaWdOdW1iZXIgfCBzdHJpbmdcbiAgKTogUHJvbWlzZTxCaWdOdW1iZXI+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LmJhbGFuY2UsIFtcbiAgICAgIF9wbGF0Zm9ybS50b1N0cmluZygpLFxuICAgICAgX3BsYXRmb3JtSWQudG9TdHJpbmcoKSxcbiAgICAgIF90b2tlbi50b1N0cmluZygpXG4gICAgXSk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlT3duZXJUeChcbiAgICBfbmV3T3duZXI6IEJpZ051bWJlciB8IHN0cmluZ1xuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJjaGFuZ2VPd25lclwiLCBbXG4gICAgICBfbmV3T3duZXIudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyB1cGRhdGVGdW5kZXJzVHgoXG4gICAgX2Zyb206IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfcGxhdGZvcm06IEJpZ051bWJlcixcbiAgICBfcGxhdGZvcm1JZDogc3RyaW5nXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPih0aGlzLCBcInVwZGF0ZUZ1bmRlcnNcIiwgW1xuICAgICAgX2Zyb20udG9TdHJpbmcoKSxcbiAgICAgIF9wbGF0Zm9ybS50b1N0cmluZygpLFxuICAgICAgX3BsYXRmb3JtSWQudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyB1cGRhdGVCYWxhbmNlc1R4KFxuICAgIF9mcm9tOiBCaWdOdW1iZXIgfCBzdHJpbmcsXG4gICAgX3BsYXRmb3JtOiBCaWdOdW1iZXIsXG4gICAgX3BsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBfdG9rZW46IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfdmFsdWU6IEJpZ051bWJlciB8IG51bWJlclxuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJ1cGRhdGVCYWxhbmNlc1wiLCBbXG4gICAgICBfZnJvbS50b1N0cmluZygpLFxuICAgICAgX3BsYXRmb3JtLnRvU3RyaW5nKCksXG4gICAgICBfcGxhdGZvcm1JZC50b1N0cmluZygpLFxuICAgICAgX3Rva2VuLnRvU3RyaW5nKCksXG4gICAgICBfdmFsdWUudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBjbGFpbVRva2VuVHgoXG4gICAgcGxhdGZvcm06IEJpZ051bWJlcixcbiAgICBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgX3Rva2VuOiBCaWdOdW1iZXIgfCBzdHJpbmdcbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KHRoaXMsIFwiY2xhaW1Ub2tlblwiLCBbXG4gICAgICBwbGF0Zm9ybS50b1N0cmluZygpLFxuICAgICAgcGxhdGZvcm1JZC50b1N0cmluZygpLFxuICAgICAgX3Rva2VuLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgZmluaXNoUmVzb2x2ZUZ1bmRUeChcbiAgICBwbGF0Zm9ybTogQmlnTnVtYmVyLFxuICAgIHBsYXRmb3JtSWQ6IHN0cmluZ1xuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4oXG4gICAgICB0aGlzLFxuICAgICAgXCJmaW5pc2hSZXNvbHZlRnVuZFwiLFxuICAgICAgW3BsYXRmb3JtLnRvU3RyaW5nKCksIHBsYXRmb3JtSWQudG9TdHJpbmcoKV1cbiAgICApO1xuICB9XG4gIHB1YmxpYyB1cGRhdGVDYWxsZXJUeChcbiAgICBfY2FsbGVyOiBCaWdOdW1iZXIgfCBzdHJpbmcsXG4gICAgYWxsb3dlZDogYm9vbGVhblxuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJ1cGRhdGVDYWxsZXJcIiwgW1xuICAgICAgX2NhbGxlci50b1N0cmluZygpLFxuICAgICAgYWxsb3dlZC50b1N0cmluZygpXG4gICAgXSk7XG4gIH1cbn1cbiIsIi8qIEdFTkVSQVRFRCBCWSBUWVBFQ0hBSU4gVkVSLiAwLjEuNCAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcImJpZ251bWJlci5qc1wiO1xuaW1wb3J0IHtcbiAgVHlwZUNoYWluQ29udHJhY3QsXG4gIHByb21pc2lmeSxcbiAgSVR4UGFyYW1zLFxuICBJUGF5YWJsZVR4UGFyYW1zLFxuICBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlclxufSBmcm9tIFwiLi90eXBlY2hhaW4tcnVudGltZVwiO1xuXG5leHBvcnQgY2xhc3MgRnVuZFJlcXVlc3RDb250cmFjdCBleHRlbmRzIFR5cGVDaGFpbkNvbnRyYWN0IHtcbiAgcHVibGljIHJlYWRvbmx5IHJhd1dlYjNDb250cmFjdDogYW55O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih3ZWIzOiBhbnksIGFkZHJlc3M6IHN0cmluZyB8IEJpZ051bWJlcikge1xuICAgIGNvbnN0IGFiaSA9IFtcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwiY2xhaW1TaWduZXJBZGRyZXNzXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICAgICAgbmFtZTogXCJwcmVjb25kaXRpb25zXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgbmFtZTogXCJmdW5kUmVwb3NpdG9yeVwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwib3duZXJcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBuYW1lOiBcImNsYWltUmVwb3NpdG9yeVwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFt7IG5hbWU6IFwiX25ld093bmVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBuYW1lOiBcImNoYW5nZU93bmVyXCIsXG4gICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX2Z1bmRSZXBvc2l0b3J5XCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9jbGFpbVJlcG9zaXRvcnlcIiwgdHlwZTogXCJhZGRyZXNzXCIgfVxuICAgICAgICBdLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJjb25zdHJ1Y3RvclwiXG4gICAgICB9LFxuICAgICAgeyBwYXlhYmxlOiBmYWxzZSwgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIiwgdHlwZTogXCJmYWxsYmFja1wiIH0sXG4gICAgICB7XG4gICAgICAgIGFub255bW91czogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgaW5kZXhlZDogdHJ1ZSwgbmFtZTogXCJmcm9tXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBpbmRleGVkOiBmYWxzZSwgbmFtZTogXCJwbGF0Zm9ybVwiLCB0eXBlOiBcImJ5dGVzMzJcIiB9LFxuICAgICAgICAgIHsgaW5kZXhlZDogZmFsc2UsIG5hbWU6IFwicGxhdGZvcm1JZFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgeyBpbmRleGVkOiBmYWxzZSwgbmFtZTogXCJ0b2tlblwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgaW5kZXhlZDogZmFsc2UsIG5hbWU6IFwidmFsdWVcIiwgdHlwZTogXCJ1aW50MjU2XCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcIkZ1bmRlZFwiLFxuICAgICAgICB0eXBlOiBcImV2ZW50XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFub255bW91czogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgaW5kZXhlZDogdHJ1ZSwgbmFtZTogXCJzb2x2ZXJBZGRyZXNzXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBpbmRleGVkOiBmYWxzZSwgbmFtZTogXCJwbGF0Zm9ybVwiLCB0eXBlOiBcImJ5dGVzMzJcIiB9LFxuICAgICAgICAgIHsgaW5kZXhlZDogZmFsc2UsIG5hbWU6IFwicGxhdGZvcm1JZFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgeyBpbmRleGVkOiBmYWxzZSwgbmFtZTogXCJzb2x2ZXJcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgaW5kZXhlZDogZmFsc2UsIG5hbWU6IFwidG9rZW5cIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IGluZGV4ZWQ6IGZhbHNlLCBuYW1lOiBcInZhbHVlXCIsIHR5cGU6IFwidWludDI1NlwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJDbGFpbWVkXCIsXG4gICAgICAgIHR5cGU6IFwiZXZlbnRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX3BsYXRmb3JtXCIsIHR5cGU6IFwiYnl0ZXMzMlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9wbGF0Zm9ybUlkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3Rva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl92YWx1ZVwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiZnVuZFwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcInN1Y2Nlc3NcIiwgdHlwZTogXCJib29sXCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIl9mcm9tXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9hbW91bnRcIiwgdHlwZTogXCJ1aW50MjU2XCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3Rva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9kYXRhXCIsIHR5cGU6IFwiYnl0ZXNcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwicmVjZWl2ZUFwcHJvdmFsXCIsXG4gICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJwbGF0Zm9ybVwiLCB0eXBlOiBcImJ5dGVzMzJcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJwbGF0Zm9ybUlkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwic29sdmVyXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwic29sdmVyQWRkcmVzc1wiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJyXCIsIHR5cGU6IFwiYnl0ZXMzMlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcInNcIiwgdHlwZTogXCJieXRlczMyXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwidlwiLCB0eXBlOiBcInVpbnQ4XCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcImNsYWltXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW3sgbmFtZTogXCJfcHJlY29uZGl0aW9uXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBuYW1lOiBcImFkZFByZWNvbmRpdGlvblwiLFxuICAgICAgICBvdXRwdXRzOiBbXSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFt7IG5hbWU6IFwiX2luZGV4XCIsIHR5cGU6IFwidWludDI1NlwiIH1dLFxuICAgICAgICBuYW1lOiBcInJlbW92ZVByZWNvbmRpdGlvblwiLFxuICAgICAgICBvdXRwdXRzOiBbXSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFt7IG5hbWU6IFwiX3JlcG9zaXRvcnlBZGRyZXNzXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBuYW1lOiBcInNldEZ1bmRSZXBvc2l0b3J5XCIsXG4gICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW3sgbmFtZTogXCJfY2xhaW1SZXBvc2l0b3J5XCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBuYW1lOiBcInNldENsYWltUmVwb3NpdG9yeVwiLFxuICAgICAgICBvdXRwdXRzOiBbXSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFt7IG5hbWU6IFwiX2NsYWltU2lnbmVyQWRkcmVzc1wiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgbmFtZTogXCJzZXRDbGFpbVNpZ25lckFkZHJlc3NcIixcbiAgICAgICAgb3V0cHV0czogW10sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH1cbiAgICBdO1xuICAgIHN1cGVyKHdlYjMsIGFkZHJlc3MsIGFiaSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlQW5kVmFsaWRhdGUoXG4gICAgd2ViMzogYW55LFxuICAgIGFkZHJlc3M6IHN0cmluZyB8IEJpZ051bWJlclxuICApOiBQcm9taXNlPEZ1bmRSZXF1ZXN0Q29udHJhY3Q+IHtcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBGdW5kUmVxdWVzdENvbnRyYWN0KHdlYjMsIGFkZHJlc3MpO1xuICAgIGNvbnN0IGNvZGUgPSBhd2FpdCBwcm9taXNpZnkod2ViMy5ldGguZ2V0Q29kZSwgW2FkZHJlc3NdKTtcbiAgICBpZiAoY29kZSA9PT0gXCIweDBcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb250cmFjdCBhdCAke2FkZHJlc3N9IGRvZXNuJ3QgZXhpc3QhYCk7XG4gICAgfVxuICAgIHJldHVybiBjb250cmFjdDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2xhaW1TaWduZXJBZGRyZXNzKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5jbGFpbVNpZ25lckFkZHJlc3MsIFtdKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGZ1bmRSZXBvc2l0b3J5KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5mdW5kUmVwb3NpdG9yeSwgW10pO1xuICB9XG4gIHB1YmxpYyBnZXQgb3duZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0Lm93bmVyLCBbXSk7XG4gIH1cbiAgcHVibGljIGdldCBjbGFpbVJlcG9zaXRvcnkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LmNsYWltUmVwb3NpdG9yeSwgW10pO1xuICB9XG4gIHB1YmxpYyBwcmVjb25kaXRpb25zKGFyZzA6IEJpZ051bWJlciB8IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5wcmVjb25kaXRpb25zLCBbYXJnMC50b1N0cmluZygpXSk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlT3duZXJUeChcbiAgICBfbmV3T3duZXI6IEJpZ051bWJlciB8IHN0cmluZ1xuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJjaGFuZ2VPd25lclwiLCBbXG4gICAgICBfbmV3T3duZXIudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBmdW5kVHgoXG4gICAgX3BsYXRmb3JtOiBCaWdOdW1iZXIsXG4gICAgX3BsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBfdG9rZW46IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfdmFsdWU6IEJpZ051bWJlciB8IG51bWJlclxuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJmdW5kXCIsIFtcbiAgICAgIF9wbGF0Zm9ybS50b1N0cmluZygpLFxuICAgICAgX3BsYXRmb3JtSWQudG9TdHJpbmcoKSxcbiAgICAgIF90b2tlbi50b1N0cmluZygpLFxuICAgICAgX3ZhbHVlLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgcmVjZWl2ZUFwcHJvdmFsVHgoXG4gICAgX2Zyb206IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfYW1vdW50OiBCaWdOdW1iZXIgfCBudW1iZXIsXG4gICAgX3Rva2VuOiBCaWdOdW1iZXIgfCBzdHJpbmcsXG4gICAgX2RhdGE6IEJpZ051bWJlcltdXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPih0aGlzLCBcInJlY2VpdmVBcHByb3ZhbFwiLCBbXG4gICAgICBfZnJvbS50b1N0cmluZygpLFxuICAgICAgX2Ftb3VudC50b1N0cmluZygpLFxuICAgICAgX3Rva2VuLnRvU3RyaW5nKCksXG4gICAgICBfZGF0YS50b1N0cmluZygpXG4gICAgXSk7XG4gIH1cbiAgcHVibGljIGNsYWltVHgoXG4gICAgcGxhdGZvcm06IEJpZ051bWJlcixcbiAgICBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgc29sdmVyOiBzdHJpbmcsXG4gICAgc29sdmVyQWRkcmVzczogQmlnTnVtYmVyIHwgc3RyaW5nLFxuICAgIHI6IEJpZ051bWJlcixcbiAgICBzOiBCaWdOdW1iZXIsXG4gICAgdjogQmlnTnVtYmVyIHwgbnVtYmVyXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPih0aGlzLCBcImNsYWltXCIsIFtcbiAgICAgIHBsYXRmb3JtLnRvU3RyaW5nKCksXG4gICAgICBwbGF0Zm9ybUlkLnRvU3RyaW5nKCksXG4gICAgICBzb2x2ZXIudG9TdHJpbmcoKSxcbiAgICAgIHNvbHZlckFkZHJlc3MudG9TdHJpbmcoKSxcbiAgICAgIHIudG9TdHJpbmcoKSxcbiAgICAgIHMudG9TdHJpbmcoKSxcbiAgICAgIHYudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBhZGRQcmVjb25kaXRpb25UeChcbiAgICBfcHJlY29uZGl0aW9uOiBCaWdOdW1iZXIgfCBzdHJpbmdcbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KHRoaXMsIFwiYWRkUHJlY29uZGl0aW9uXCIsIFtcbiAgICAgIF9wcmVjb25kaXRpb24udG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyByZW1vdmVQcmVjb25kaXRpb25UeChcbiAgICBfaW5kZXg6IEJpZ051bWJlciB8IG51bWJlclxuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4oXG4gICAgICB0aGlzLFxuICAgICAgXCJyZW1vdmVQcmVjb25kaXRpb25cIixcbiAgICAgIFtfaW5kZXgudG9TdHJpbmcoKV1cbiAgICApO1xuICB9XG4gIHB1YmxpYyBzZXRGdW5kUmVwb3NpdG9yeVR4KFxuICAgIF9yZXBvc2l0b3J5QWRkcmVzczogQmlnTnVtYmVyIHwgc3RyaW5nXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPihcbiAgICAgIHRoaXMsXG4gICAgICBcInNldEZ1bmRSZXBvc2l0b3J5XCIsXG4gICAgICBbX3JlcG9zaXRvcnlBZGRyZXNzLnRvU3RyaW5nKCldXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgc2V0Q2xhaW1SZXBvc2l0b3J5VHgoXG4gICAgX2NsYWltUmVwb3NpdG9yeTogQmlnTnVtYmVyIHwgc3RyaW5nXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPihcbiAgICAgIHRoaXMsXG4gICAgICBcInNldENsYWltUmVwb3NpdG9yeVwiLFxuICAgICAgW19jbGFpbVJlcG9zaXRvcnkudG9TdHJpbmcoKV1cbiAgICApO1xuICB9XG4gIHB1YmxpYyBzZXRDbGFpbVNpZ25lckFkZHJlc3NUeChcbiAgICBfY2xhaW1TaWduZXJBZGRyZXNzOiBCaWdOdW1iZXIgfCBzdHJpbmdcbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KFxuICAgICAgdGhpcyxcbiAgICAgIFwic2V0Q2xhaW1TaWduZXJBZGRyZXNzXCIsXG4gICAgICBbX2NsYWltU2lnbmVyQWRkcmVzcy50b1N0cmluZygpXVxuICAgICk7XG4gIH1cbn1cbiIsIi8qIEdFTkVSQVRFRCBCWSBUWVBFQ0hBSU4gVkVSLiAwLjEuNCAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcImJpZ251bWJlci5qc1wiO1xuaW1wb3J0IHtcbiAgVHlwZUNoYWluQ29udHJhY3QsXG4gIHByb21pc2lmeSxcbiAgSVR4UGFyYW1zLFxuICBJUGF5YWJsZVR4UGFyYW1zLFxuICBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlclxufSBmcm9tIFwiLi90eXBlY2hhaW4tcnVudGltZVwiO1xuXG5leHBvcnQgY2xhc3MgRnVuZFJlcXVlc3RUb2tlbiBleHRlbmRzIFR5cGVDaGFpbkNvbnRyYWN0IHtcbiAgcHVibGljIHJlYWRvbmx5IHJhd1dlYjNDb250cmFjdDogYW55O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih3ZWIzOiBhbnksIGFkZHJlc3M6IHN0cmluZyB8IEJpZ051bWJlcikge1xuICAgIGNvbnN0IGFiaSA9IFtcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcInN0cmluZ1wiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJfc3BlbmRlclwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfYW1vdW50XCIsIHR5cGU6IFwidWludDI1NlwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJhcHByb3ZlXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwic3VjY2Vzc1wiLCB0eXBlOiBcImJvb2xcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwiY3JlYXRpb25CbG9ja1wiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwidG90YWxTdXBwbHlcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIl9mcm9tXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl90b1wiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfYW1vdW50XCIsIHR5cGU6IFwidWludDI1NlwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJ0cmFuc2ZlckZyb21cIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJzdWNjZXNzXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgbmFtZTogXCJkZWNpbWFsc1wiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQ4XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbeyBuYW1lOiBcIl9uZXdDb250cm9sbGVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBuYW1lOiBcImNoYW5nZUNvbnRyb2xsZXJcIixcbiAgICAgICAgb3V0cHV0czogW10sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX293bmVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9ibG9ja051bWJlclwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiYmFsYW5jZU9mQXRcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBuYW1lOiBcInZlcnNpb25cIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJzdHJpbmdcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX2Nsb25lVG9rZW5OYW1lXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX2Nsb25lRGVjaW1hbFVuaXRzXCIsIHR5cGU6IFwidWludDhcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfY2xvbmVUb2tlblN5bWJvbFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9zbmFwc2hvdEJsb2NrXCIsIHR5cGU6IFwidWludDI1NlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl90cmFuc2ZlcnNFbmFibGVkXCIsIHR5cGU6IFwiYm9vbFwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJjcmVhdGVDbG9uZVRva2VuXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbeyBuYW1lOiBcIl9vd25lclwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgbmFtZTogXCJiYWxhbmNlT2ZcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJiYWxhbmNlXCIsIHR5cGU6IFwidWludDI1NlwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgbmFtZTogXCJwYXJlbnRUb2tlblwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX293bmVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9hbW91bnRcIiwgdHlwZTogXCJ1aW50MjU2XCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcImdlbmVyYXRlVG9rZW5zXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgbmFtZTogXCJzeW1ib2xcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJzdHJpbmdcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW3sgbmFtZTogXCJfYmxvY2tOdW1iZXJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIG5hbWU6IFwidG90YWxTdXBwbHlBdFwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX3RvXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9hbW91bnRcIiwgdHlwZTogXCJ1aW50MjU2XCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcInRyYW5zZmVyXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwic3VjY2Vzc1wiLCB0eXBlOiBcImJvb2xcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwidHJhbnNmZXJzRW5hYmxlZFwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImJvb2xcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwicGFyZW50U25hcFNob3RCbG9ja1wiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX3NwZW5kZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX2Ftb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfZXh0cmFEYXRhXCIsIHR5cGU6IFwiYnl0ZXNcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiYXBwcm92ZUFuZENhbGxcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJzdWNjZXNzXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJfb3duZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX2Ftb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiZGVzdHJveVRva2Vuc1wiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImJvb2xcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJfb3duZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3NwZW5kZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcImFsbG93YW5jZVwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcInJlbWFpbmluZ1wiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFt7IG5hbWU6IFwiX3Rva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICBuYW1lOiBcImNsYWltVG9rZW5zXCIsXG4gICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgbmFtZTogXCJ0b2tlbkZhY3RvcnlcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbeyBuYW1lOiBcIl90cmFuc2ZlcnNFbmFibGVkXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgICAgICBuYW1lOiBcImVuYWJsZVRyYW5zZmVyc1wiLFxuICAgICAgICBvdXRwdXRzOiBbXSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwiY29udHJvbGxlclwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIl90b2tlbkZhY3RvcnlcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3BhcmVudFRva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9wYXJlbnRTbmFwU2hvdEJsb2NrXCIsIHR5cGU6IFwidWludDI1NlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl90b2tlbk5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfZGVjaW1hbFVuaXRzXCIsIHR5cGU6IFwidWludDhcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfdG9rZW5TeW1ib2xcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfdHJhbnNmZXJzRW5hYmxlZFwiLCB0eXBlOiBcImJvb2xcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgICB0eXBlOiBcImNvbnN0cnVjdG9yXCJcbiAgICAgIH0sXG4gICAgICB7IHBheWFibGU6IHRydWUsIHN0YXRlTXV0YWJpbGl0eTogXCJwYXlhYmxlXCIsIHR5cGU6IFwiZmFsbGJhY2tcIiB9LFxuICAgICAge1xuICAgICAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IGluZGV4ZWQ6IHRydWUsIG5hbWU6IFwiX3Rva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBpbmRleGVkOiB0cnVlLCBuYW1lOiBcIl9jb250cm9sbGVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBpbmRleGVkOiBmYWxzZSwgbmFtZTogXCJfYW1vdW50XCIsIHR5cGU6IFwidWludDI1NlwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJDbGFpbWVkVG9rZW5zXCIsXG4gICAgICAgIHR5cGU6IFwiZXZlbnRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBpbmRleGVkOiB0cnVlLCBuYW1lOiBcIl9mcm9tXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBpbmRleGVkOiB0cnVlLCBuYW1lOiBcIl90b1wiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgaW5kZXhlZDogZmFsc2UsIG5hbWU6IFwiX2Ftb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiVHJhbnNmZXJcIixcbiAgICAgICAgdHlwZTogXCJldmVudFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IGluZGV4ZWQ6IHRydWUsIG5hbWU6IFwiX2Nsb25lVG9rZW5cIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IGluZGV4ZWQ6IGZhbHNlLCBuYW1lOiBcIl9zbmFwc2hvdEJsb2NrXCIsIHR5cGU6IFwidWludDI1NlwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJOZXdDbG9uZVRva2VuXCIsXG4gICAgICAgIHR5cGU6IFwiZXZlbnRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBpbmRleGVkOiB0cnVlLCBuYW1lOiBcIl9vd25lclwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgaW5kZXhlZDogdHJ1ZSwgbmFtZTogXCJfc3BlbmRlclwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgaW5kZXhlZDogZmFsc2UsIG5hbWU6IFwiX2Ftb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiQXBwcm92YWxcIixcbiAgICAgICAgdHlwZTogXCJldmVudFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJfc3BlbmRlclwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfY3VycmVudFZhbHVlXCIsIHR5cGU6IFwidWludDI1NlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9hbW91bnRcIiwgdHlwZTogXCJ1aW50MjU2XCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcInNhZmVBcHByb3ZlXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwic3VjY2Vzc1wiLCB0eXBlOiBcImJvb2xcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwiaXNGdW5kUmVxdWVzdFRva2VuXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInB1cmVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9XG4gICAgXTtcbiAgICBzdXBlcih3ZWIzLCBhZGRyZXNzLCBhYmkpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZUFuZFZhbGlkYXRlKFxuICAgIHdlYjM6IGFueSxcbiAgICBhZGRyZXNzOiBzdHJpbmcgfCBCaWdOdW1iZXJcbiAgKTogUHJvbWlzZTxGdW5kUmVxdWVzdFRva2VuPiB7XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgRnVuZFJlcXVlc3RUb2tlbih3ZWIzLCBhZGRyZXNzKTtcbiAgICBjb25zdCBjb2RlID0gYXdhaXQgcHJvbWlzaWZ5KHdlYjMuZXRoLmdldENvZGUsIFthZGRyZXNzXSk7XG4gICAgaWYgKGNvZGUgPT09IFwiMHgwXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ29udHJhY3QgYXQgJHthZGRyZXNzfSBkb2Vzbid0IGV4aXN0IWApO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJhY3Q7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0Lm5hbWUsIFtdKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGNyZWF0aW9uQmxvY2soKTogUHJvbWlzZTxCaWdOdW1iZXI+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LmNyZWF0aW9uQmxvY2ssIFtdKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHRvdGFsU3VwcGx5KCk6IFByb21pc2U8QmlnTnVtYmVyPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC50b3RhbFN1cHBseSwgW10pO1xuICB9XG4gIHB1YmxpYyBnZXQgZGVjaW1hbHMoKTogUHJvbWlzZTxCaWdOdW1iZXI+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LmRlY2ltYWxzLCBbXSk7XG4gIH1cbiAgcHVibGljIGdldCB2ZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC52ZXJzaW9uLCBbXSk7XG4gIH1cbiAgcHVibGljIGdldCBwYXJlbnRUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QucGFyZW50VG9rZW4sIFtdKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHN5bWJvbCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3Quc3ltYm9sLCBbXSk7XG4gIH1cbiAgcHVibGljIGdldCB0cmFuc2ZlcnNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QudHJhbnNmZXJzRW5hYmxlZCwgW10pO1xuICB9XG4gIHB1YmxpYyBnZXQgcGFyZW50U25hcFNob3RCbG9jaygpOiBQcm9taXNlPEJpZ051bWJlcj4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QucGFyZW50U25hcFNob3RCbG9jaywgW10pO1xuICB9XG4gIHB1YmxpYyBnZXQgdG9rZW5GYWN0b3J5KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC50b2tlbkZhY3RvcnksIFtdKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGNvbnRyb2xsZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LmNvbnRyb2xsZXIsIFtdKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGlzRnVuZFJlcXVlc3RUb2tlbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LmlzRnVuZFJlcXVlc3RUb2tlbiwgW10pO1xuICB9XG4gIHB1YmxpYyBiYWxhbmNlT2ZBdChcbiAgICBfb3duZXI6IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfYmxvY2tOdW1iZXI6IEJpZ051bWJlciB8IG51bWJlclxuICApOiBQcm9taXNlPEJpZ051bWJlcj4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QuYmFsYW5jZU9mQXQsIFtcbiAgICAgIF9vd25lci50b1N0cmluZygpLFxuICAgICAgX2Jsb2NrTnVtYmVyLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgYmFsYW5jZU9mKF9vd25lcjogQmlnTnVtYmVyIHwgc3RyaW5nKTogUHJvbWlzZTxCaWdOdW1iZXI+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LmJhbGFuY2VPZiwgW19vd25lci50b1N0cmluZygpXSk7XG4gIH1cbiAgcHVibGljIHRvdGFsU3VwcGx5QXQoX2Jsb2NrTnVtYmVyOiBCaWdOdW1iZXIgfCBudW1iZXIpOiBQcm9taXNlPEJpZ051bWJlcj4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QudG90YWxTdXBwbHlBdCwgW1xuICAgICAgX2Jsb2NrTnVtYmVyLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgYWxsb3dhbmNlKFxuICAgIF9vd25lcjogQmlnTnVtYmVyIHwgc3RyaW5nLFxuICAgIF9zcGVuZGVyOiBCaWdOdW1iZXIgfCBzdHJpbmdcbiAgKTogUHJvbWlzZTxCaWdOdW1iZXI+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LmFsbG93YW5jZSwgW1xuICAgICAgX293bmVyLnRvU3RyaW5nKCksXG4gICAgICBfc3BlbmRlci50b1N0cmluZygpXG4gICAgXSk7XG4gIH1cblxuICBwdWJsaWMgYXBwcm92ZVR4KFxuICAgIF9zcGVuZGVyOiBCaWdOdW1iZXIgfCBzdHJpbmcsXG4gICAgX2Ftb3VudDogQmlnTnVtYmVyIHwgbnVtYmVyXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPih0aGlzLCBcImFwcHJvdmVcIiwgW1xuICAgICAgX3NwZW5kZXIudG9TdHJpbmcoKSxcbiAgICAgIF9hbW91bnQudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyB0cmFuc2ZlckZyb21UeChcbiAgICBfZnJvbTogQmlnTnVtYmVyIHwgc3RyaW5nLFxuICAgIF90bzogQmlnTnVtYmVyIHwgc3RyaW5nLFxuICAgIF9hbW91bnQ6IEJpZ051bWJlciB8IG51bWJlclxuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJ0cmFuc2ZlckZyb21cIiwgW1xuICAgICAgX2Zyb20udG9TdHJpbmcoKSxcbiAgICAgIF90by50b1N0cmluZygpLFxuICAgICAgX2Ftb3VudC50b1N0cmluZygpXG4gICAgXSk7XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbnRyb2xsZXJUeChcbiAgICBfbmV3Q29udHJvbGxlcjogQmlnTnVtYmVyIHwgc3RyaW5nXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPih0aGlzLCBcImNoYW5nZUNvbnRyb2xsZXJcIiwgW1xuICAgICAgX25ld0NvbnRyb2xsZXIudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBjcmVhdGVDbG9uZVRva2VuVHgoXG4gICAgX2Nsb25lVG9rZW5OYW1lOiBzdHJpbmcsXG4gICAgX2Nsb25lRGVjaW1hbFVuaXRzOiBCaWdOdW1iZXIgfCBudW1iZXIsXG4gICAgX2Nsb25lVG9rZW5TeW1ib2w6IHN0cmluZyxcbiAgICBfc25hcHNob3RCbG9jazogQmlnTnVtYmVyIHwgbnVtYmVyLFxuICAgIF90cmFuc2ZlcnNFbmFibGVkOiBib29sZWFuXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPih0aGlzLCBcImNyZWF0ZUNsb25lVG9rZW5cIiwgW1xuICAgICAgX2Nsb25lVG9rZW5OYW1lLnRvU3RyaW5nKCksXG4gICAgICBfY2xvbmVEZWNpbWFsVW5pdHMudG9TdHJpbmcoKSxcbiAgICAgIF9jbG9uZVRva2VuU3ltYm9sLnRvU3RyaW5nKCksXG4gICAgICBfc25hcHNob3RCbG9jay50b1N0cmluZygpLFxuICAgICAgX3RyYW5zZmVyc0VuYWJsZWQudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBnZW5lcmF0ZVRva2Vuc1R4KFxuICAgIF9vd25lcjogQmlnTnVtYmVyIHwgc3RyaW5nLFxuICAgIF9hbW91bnQ6IEJpZ051bWJlciB8IG51bWJlclxuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJnZW5lcmF0ZVRva2Vuc1wiLCBbXG4gICAgICBfb3duZXIudG9TdHJpbmcoKSxcbiAgICAgIF9hbW91bnQudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyB0cmFuc2ZlclR4KFxuICAgIF90bzogQmlnTnVtYmVyIHwgc3RyaW5nLFxuICAgIF9hbW91bnQ6IEJpZ051bWJlciB8IG51bWJlclxuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJ0cmFuc2ZlclwiLCBbXG4gICAgICBfdG8udG9TdHJpbmcoKSxcbiAgICAgIF9hbW91bnQudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBhcHByb3ZlQW5kQ2FsbFR4KFxuICAgIF9zcGVuZGVyOiBCaWdOdW1iZXIgfCBzdHJpbmcsXG4gICAgX2Ftb3VudDogQmlnTnVtYmVyIHwgbnVtYmVyLFxuICAgIF9leHRyYURhdGE6IEJpZ051bWJlcltdXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPih0aGlzLCBcImFwcHJvdmVBbmRDYWxsXCIsIFtcbiAgICAgIF9zcGVuZGVyLnRvU3RyaW5nKCksXG4gICAgICBfYW1vdW50LnRvU3RyaW5nKCksXG4gICAgICBfZXh0cmFEYXRhLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgZGVzdHJveVRva2Vuc1R4KFxuICAgIF9vd25lcjogQmlnTnVtYmVyIHwgc3RyaW5nLFxuICAgIF9hbW91bnQ6IEJpZ051bWJlciB8IG51bWJlclxuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJkZXN0cm95VG9rZW5zXCIsIFtcbiAgICAgIF9vd25lci50b1N0cmluZygpLFxuICAgICAgX2Ftb3VudC50b1N0cmluZygpXG4gICAgXSk7XG4gIH1cbiAgcHVibGljIGNsYWltVG9rZW5zVHgoXG4gICAgX3Rva2VuOiBCaWdOdW1iZXIgfCBzdHJpbmdcbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KHRoaXMsIFwiY2xhaW1Ub2tlbnNcIiwgW1xuICAgICAgX3Rva2VuLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgZW5hYmxlVHJhbnNmZXJzVHgoXG4gICAgX3RyYW5zZmVyc0VuYWJsZWQ6IGJvb2xlYW5cbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KHRoaXMsIFwiZW5hYmxlVHJhbnNmZXJzXCIsIFtcbiAgICAgIF90cmFuc2ZlcnNFbmFibGVkLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgc2FmZUFwcHJvdmVUeChcbiAgICBfc3BlbmRlcjogQmlnTnVtYmVyIHwgc3RyaW5nLFxuICAgIF9jdXJyZW50VmFsdWU6IEJpZ051bWJlciB8IG51bWJlcixcbiAgICBfYW1vdW50OiBCaWdOdW1iZXIgfCBudW1iZXJcbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KHRoaXMsIFwic2FmZUFwcHJvdmVcIiwgW1xuICAgICAgX3NwZW5kZXIudG9TdHJpbmcoKSxcbiAgICAgIF9jdXJyZW50VmFsdWUudG9TdHJpbmcoKSxcbiAgICAgIF9hbW91bnQudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG59XG4iLCIvKiBHRU5FUkFURUQgQlkgVFlQRUNIQUlOIFZFUi4gMC4xLjQgKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCB7XG4gIFR5cGVDaGFpbkNvbnRyYWN0LFxuICBwcm9taXNpZnksXG4gIElUeFBhcmFtcyxcbiAgSVBheWFibGVUeFBhcmFtcyxcbiAgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXJcbn0gZnJvbSBcIi4vdHlwZWNoYWluLXJ1bnRpbWVcIjtcblxuZXhwb3J0IGNsYXNzIE1pbmlNZVRva2VuIGV4dGVuZHMgVHlwZUNoYWluQ29udHJhY3Qge1xuICBwdWJsaWMgcmVhZG9ubHkgcmF3V2ViM0NvbnRyYWN0OiBhbnk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHdlYjM6IGFueSwgYWRkcmVzczogc3RyaW5nIHwgQmlnTnVtYmVyKSB7XG4gICAgY29uc3QgYWJpID0gW1xuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwic3RyaW5nXCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBuYW1lOiBcImNyZWF0aW9uQmxvY2tcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBuYW1lOiBcImRlY2ltYWxzXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwidWludDhcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFt7IG5hbWU6IFwiX25ld0NvbnRyb2xsZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfV0sXG4gICAgICAgIG5hbWU6IFwiY2hhbmdlQ29udHJvbGxlclwiLFxuICAgICAgICBvdXRwdXRzOiBbXSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwidmVyc2lvblwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcInN0cmluZ1wiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgbmFtZTogXCJwYXJlbnRUb2tlblwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwic3ltYm9sXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwic3RyaW5nXCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBuYW1lOiBcInRyYW5zZmVyc0VuYWJsZWRcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJib29sXCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBuYW1lOiBcInBhcmVudFNuYXBTaG90QmxvY2tcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBuYW1lOiBcInRva2VuRmFjdG9yeVwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwiY29udHJvbGxlclwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIl90b2tlbkZhY3RvcnlcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX3BhcmVudFRva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9wYXJlbnRTbmFwU2hvdEJsb2NrXCIsIHR5cGU6IFwidWludDI1NlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl90b2tlbk5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfZGVjaW1hbFVuaXRzXCIsIHR5cGU6IFwidWludDhcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfdG9rZW5TeW1ib2xcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfdHJhbnNmZXJzRW5hYmxlZFwiLCB0eXBlOiBcImJvb2xcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgICB0eXBlOiBcImNvbnN0cnVjdG9yXCJcbiAgICAgIH0sXG4gICAgICB7IHBheWFibGU6IHRydWUsIHN0YXRlTXV0YWJpbGl0eTogXCJwYXlhYmxlXCIsIHR5cGU6IFwiZmFsbGJhY2tcIiB9LFxuICAgICAge1xuICAgICAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IGluZGV4ZWQ6IHRydWUsIG5hbWU6IFwiX3Rva2VuXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBpbmRleGVkOiB0cnVlLCBuYW1lOiBcIl9jb250cm9sbGVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBpbmRleGVkOiBmYWxzZSwgbmFtZTogXCJfYW1vdW50XCIsIHR5cGU6IFwidWludDI1NlwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJDbGFpbWVkVG9rZW5zXCIsXG4gICAgICAgIHR5cGU6IFwiZXZlbnRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBpbmRleGVkOiB0cnVlLCBuYW1lOiBcIl9mcm9tXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBpbmRleGVkOiB0cnVlLCBuYW1lOiBcIl90b1wiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgaW5kZXhlZDogZmFsc2UsIG5hbWU6IFwiX2Ftb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiVHJhbnNmZXJcIixcbiAgICAgICAgdHlwZTogXCJldmVudFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IGluZGV4ZWQ6IHRydWUsIG5hbWU6IFwiX2Nsb25lVG9rZW5cIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IGluZGV4ZWQ6IGZhbHNlLCBuYW1lOiBcIl9zbmFwc2hvdEJsb2NrXCIsIHR5cGU6IFwidWludDI1NlwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJOZXdDbG9uZVRva2VuXCIsXG4gICAgICAgIHR5cGU6IFwiZXZlbnRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBpbmRleGVkOiB0cnVlLCBuYW1lOiBcIl9vd25lclwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgaW5kZXhlZDogdHJ1ZSwgbmFtZTogXCJfc3BlbmRlclwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgaW5kZXhlZDogZmFsc2UsIG5hbWU6IFwiX2Ftb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiQXBwcm92YWxcIixcbiAgICAgICAgdHlwZTogXCJldmVudFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJfdG9cIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX2Ftb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwidHJhbnNmZXJcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJzdWNjZXNzXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJfZnJvbVwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfdG9cIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX2Ftb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwidHJhbnNmZXJGcm9tXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwic3VjY2Vzc1wiLCB0eXBlOiBcImJvb2xcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW3sgbmFtZTogXCJfb3duZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfV0sXG4gICAgICAgIG5hbWU6IFwiYmFsYW5jZU9mXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiYmFsYW5jZVwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX3NwZW5kZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX2Ftb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiYXBwcm92ZVwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcInN1Y2Nlc3NcIiwgdHlwZTogXCJib29sXCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX293bmVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9zcGVuZGVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJhbGxvd2FuY2VcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJyZW1haW5pbmdcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIl9zcGVuZGVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9hbW91bnRcIiwgdHlwZTogXCJ1aW50MjU2XCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX2V4dHJhRGF0YVwiLCB0eXBlOiBcImJ5dGVzXCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcImFwcHJvdmVBbmRDYWxsXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwic3VjY2Vzc1wiLCB0eXBlOiBcImJvb2xcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG5hbWU6IFwidG90YWxTdXBwbHlcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX293bmVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9ibG9ja051bWJlclwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiYmFsYW5jZU9mQXRcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFt7IG5hbWU6IFwiX2Jsb2NrTnVtYmVyXCIsIHR5cGU6IFwidWludDI1NlwiIH1dLFxuICAgICAgICBuYW1lOiBcInRvdGFsU3VwcGx5QXRcIixcbiAgICAgICAgb3V0cHV0czogW3sgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbnN0YW50OiBmYWxzZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIl9jbG9uZVRva2VuTmFtZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9jbG9uZURlY2ltYWxVbml0c1wiLCB0eXBlOiBcInVpbnQ4XCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX2Nsb25lVG9rZW5TeW1ib2xcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfc25hcHNob3RCbG9ja1wiLCB0eXBlOiBcInVpbnQyNTZcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJfdHJhbnNmZXJzRW5hYmxlZFwiLCB0eXBlOiBcImJvb2xcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiY3JlYXRlQ2xvbmVUb2tlblwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiX293bmVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIl9hbW91bnRcIiwgdHlwZTogXCJ1aW50MjU2XCIgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcImdlbmVyYXRlVG9rZW5zXCIsXG4gICAgICAgIG91dHB1dHM6IFt7IG5hbWU6IFwiXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgbmFtZTogXCJfb3duZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiX2Ftb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiZGVzdHJveVRva2Vuc1wiLFxuICAgICAgICBvdXRwdXRzOiBbeyBuYW1lOiBcIlwiLCB0eXBlOiBcImJvb2xcIiB9XSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgICAgICBpbnB1dHM6IFt7IG5hbWU6IFwiX3RyYW5zZmVyc0VuYWJsZWRcIiwgdHlwZTogXCJib29sXCIgfV0sXG4gICAgICAgIG5hbWU6IFwiZW5hYmxlVHJhbnNmZXJzXCIsXG4gICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIGlucHV0czogW3sgbmFtZTogXCJfdG9rZW5cIiwgdHlwZTogXCJhZGRyZXNzXCIgfV0sXG4gICAgICAgIG5hbWU6IFwiY2xhaW1Ub2tlbnNcIixcbiAgICAgICAgb3V0cHV0czogW10sXG4gICAgICAgIHBheWFibGU6IGZhbHNlLFxuICAgICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgICAgIH1cbiAgICBdO1xuICAgIHN1cGVyKHdlYjMsIGFkZHJlc3MsIGFiaSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlQW5kVmFsaWRhdGUoXG4gICAgd2ViMzogYW55LFxuICAgIGFkZHJlc3M6IHN0cmluZyB8IEJpZ051bWJlclxuICApOiBQcm9taXNlPE1pbmlNZVRva2VuPiB7XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgTWluaU1lVG9rZW4od2ViMywgYWRkcmVzcyk7XG4gICAgY29uc3QgY29kZSA9IGF3YWl0IHByb21pc2lmeSh3ZWIzLmV0aC5nZXRDb2RlLCBbYWRkcmVzc10pO1xuICAgIGlmIChjb2RlID09PSBcIjB4MFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbnRyYWN0IGF0ICR7YWRkcmVzc30gZG9lc24ndCBleGlzdCFgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyYWN0O1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5uYW1lLCBbXSk7XG4gIH1cbiAgcHVibGljIGdldCBjcmVhdGlvbkJsb2NrKCk6IFByb21pc2U8QmlnTnVtYmVyPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5jcmVhdGlvbkJsb2NrLCBbXSk7XG4gIH1cbiAgcHVibGljIGdldCBkZWNpbWFscygpOiBQcm9taXNlPEJpZ051bWJlcj4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QuZGVjaW1hbHMsIFtdKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LnZlcnNpb24sIFtdKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHBhcmVudFRva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5wYXJlbnRUb2tlbiwgW10pO1xuICB9XG4gIHB1YmxpYyBnZXQgc3ltYm9sKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5zeW1ib2wsIFtdKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHRyYW5zZmVyc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC50cmFuc2ZlcnNFbmFibGVkLCBbXSk7XG4gIH1cbiAgcHVibGljIGdldCBwYXJlbnRTbmFwU2hvdEJsb2NrKCk6IFByb21pc2U8QmlnTnVtYmVyPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5wYXJlbnRTbmFwU2hvdEJsb2NrLCBbXSk7XG4gIH1cbiAgcHVibGljIGdldCB0b2tlbkZhY3RvcnkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LnRva2VuRmFjdG9yeSwgW10pO1xuICB9XG4gIHB1YmxpYyBnZXQgY29udHJvbGxlcigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QuY29udHJvbGxlciwgW10pO1xuICB9XG4gIHB1YmxpYyBnZXQgdG90YWxTdXBwbHkoKTogUHJvbWlzZTxCaWdOdW1iZXI+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LnRvdGFsU3VwcGx5LCBbXSk7XG4gIH1cbiAgcHVibGljIGJhbGFuY2VPZihfb3duZXI6IEJpZ051bWJlciB8IHN0cmluZyk6IFByb21pc2U8QmlnTnVtYmVyPiB7XG4gICAgcmV0dXJuIHByb21pc2lmeSh0aGlzLnJhd1dlYjNDb250cmFjdC5iYWxhbmNlT2YsIFtfb3duZXIudG9TdHJpbmcoKV0pO1xuICB9XG4gIHB1YmxpYyBhbGxvd2FuY2UoXG4gICAgX293bmVyOiBCaWdOdW1iZXIgfCBzdHJpbmcsXG4gICAgX3NwZW5kZXI6IEJpZ051bWJlciB8IHN0cmluZ1xuICApOiBQcm9taXNlPEJpZ051bWJlcj4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QuYWxsb3dhbmNlLCBbXG4gICAgICBfb3duZXIudG9TdHJpbmcoKSxcbiAgICAgIF9zcGVuZGVyLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgYmFsYW5jZU9mQXQoXG4gICAgX293bmVyOiBCaWdOdW1iZXIgfCBzdHJpbmcsXG4gICAgX2Jsb2NrTnVtYmVyOiBCaWdOdW1iZXIgfCBudW1iZXJcbiAgKTogUHJvbWlzZTxCaWdOdW1iZXI+IHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5KHRoaXMucmF3V2ViM0NvbnRyYWN0LmJhbGFuY2VPZkF0LCBbXG4gICAgICBfb3duZXIudG9TdHJpbmcoKSxcbiAgICAgIF9ibG9ja051bWJlci50b1N0cmluZygpXG4gICAgXSk7XG4gIH1cbiAgcHVibGljIHRvdGFsU3VwcGx5QXQoX2Jsb2NrTnVtYmVyOiBCaWdOdW1iZXIgfCBudW1iZXIpOiBQcm9taXNlPEJpZ051bWJlcj4ge1xuICAgIHJldHVybiBwcm9taXNpZnkodGhpcy5yYXdXZWIzQ29udHJhY3QudG90YWxTdXBwbHlBdCwgW1xuICAgICAgX2Jsb2NrTnVtYmVyLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VDb250cm9sbGVyVHgoXG4gICAgX25ld0NvbnRyb2xsZXI6IEJpZ051bWJlciB8IHN0cmluZ1xuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJjaGFuZ2VDb250cm9sbGVyXCIsIFtcbiAgICAgIF9uZXdDb250cm9sbGVyLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgdHJhbnNmZXJUeChcbiAgICBfdG86IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfYW1vdW50OiBCaWdOdW1iZXIgfCBudW1iZXJcbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KHRoaXMsIFwidHJhbnNmZXJcIiwgW1xuICAgICAgX3RvLnRvU3RyaW5nKCksXG4gICAgICBfYW1vdW50LnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgdHJhbnNmZXJGcm9tVHgoXG4gICAgX2Zyb206IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfdG86IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfYW1vdW50OiBCaWdOdW1iZXIgfCBudW1iZXJcbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KHRoaXMsIFwidHJhbnNmZXJGcm9tXCIsIFtcbiAgICAgIF9mcm9tLnRvU3RyaW5nKCksXG4gICAgICBfdG8udG9TdHJpbmcoKSxcbiAgICAgIF9hbW91bnQudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBhcHByb3ZlVHgoXG4gICAgX3NwZW5kZXI6IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfYW1vdW50OiBCaWdOdW1iZXIgfCBudW1iZXJcbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KHRoaXMsIFwiYXBwcm92ZVwiLCBbXG4gICAgICBfc3BlbmRlci50b1N0cmluZygpLFxuICAgICAgX2Ftb3VudC50b1N0cmluZygpXG4gICAgXSk7XG4gIH1cbiAgcHVibGljIGFwcHJvdmVBbmRDYWxsVHgoXG4gICAgX3NwZW5kZXI6IEJpZ051bWJlciB8IHN0cmluZyxcbiAgICBfYW1vdW50OiBCaWdOdW1iZXIgfCBudW1iZXIsXG4gICAgX2V4dHJhRGF0YTogQmlnTnVtYmVyW11cbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KHRoaXMsIFwiYXBwcm92ZUFuZENhbGxcIiwgW1xuICAgICAgX3NwZW5kZXIudG9TdHJpbmcoKSxcbiAgICAgIF9hbW91bnQudG9TdHJpbmcoKSxcbiAgICAgIF9leHRyYURhdGEudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBjcmVhdGVDbG9uZVRva2VuVHgoXG4gICAgX2Nsb25lVG9rZW5OYW1lOiBzdHJpbmcsXG4gICAgX2Nsb25lRGVjaW1hbFVuaXRzOiBCaWdOdW1iZXIgfCBudW1iZXIsXG4gICAgX2Nsb25lVG9rZW5TeW1ib2w6IHN0cmluZyxcbiAgICBfc25hcHNob3RCbG9jazogQmlnTnVtYmVyIHwgbnVtYmVyLFxuICAgIF90cmFuc2ZlcnNFbmFibGVkOiBib29sZWFuXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPih0aGlzLCBcImNyZWF0ZUNsb25lVG9rZW5cIiwgW1xuICAgICAgX2Nsb25lVG9rZW5OYW1lLnRvU3RyaW5nKCksXG4gICAgICBfY2xvbmVEZWNpbWFsVW5pdHMudG9TdHJpbmcoKSxcbiAgICAgIF9jbG9uZVRva2VuU3ltYm9sLnRvU3RyaW5nKCksXG4gICAgICBfc25hcHNob3RCbG9jay50b1N0cmluZygpLFxuICAgICAgX3RyYW5zZmVyc0VuYWJsZWQudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBnZW5lcmF0ZVRva2Vuc1R4KFxuICAgIF9vd25lcjogQmlnTnVtYmVyIHwgc3RyaW5nLFxuICAgIF9hbW91bnQ6IEJpZ051bWJlciB8IG51bWJlclxuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJnZW5lcmF0ZVRva2Vuc1wiLCBbXG4gICAgICBfb3duZXIudG9TdHJpbmcoKSxcbiAgICAgIF9hbW91bnQudG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG4gIHB1YmxpYyBkZXN0cm95VG9rZW5zVHgoXG4gICAgX293bmVyOiBCaWdOdW1iZXIgfCBzdHJpbmcsXG4gICAgX2Ftb3VudDogQmlnTnVtYmVyIHwgbnVtYmVyXG4gICk6IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4ge1xuICAgIHJldHVybiBuZXcgRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPih0aGlzLCBcImRlc3Ryb3lUb2tlbnNcIiwgW1xuICAgICAgX293bmVyLnRvU3RyaW5nKCksXG4gICAgICBfYW1vdW50LnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgZW5hYmxlVHJhbnNmZXJzVHgoXG4gICAgX3RyYW5zZmVyc0VuYWJsZWQ6IGJvb2xlYW5cbiAgKTogRGVmZXJyZWRUcmFuc2FjdGlvbldyYXBwZXI8SVR4UGFyYW1zPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+KHRoaXMsIFwiZW5hYmxlVHJhbnNmZXJzXCIsIFtcbiAgICAgIF90cmFuc2ZlcnNFbmFibGVkLnRvU3RyaW5nKClcbiAgICBdKTtcbiAgfVxuICBwdWJsaWMgY2xhaW1Ub2tlbnNUeChcbiAgICBfdG9rZW46IEJpZ051bWJlciB8IHN0cmluZ1xuICApOiBEZWZlcnJlZFRyYW5zYWN0aW9uV3JhcHBlcjxJVHhQYXJhbXM+IHtcbiAgICByZXR1cm4gbmV3IERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPElUeFBhcmFtcz4odGhpcywgXCJjbGFpbVRva2Vuc1wiLCBbXG4gICAgICBfdG9rZW4udG9TdHJpbmcoKVxuICAgIF0pO1xuICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcImJpZ251bWJlci5qc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUeFBhcmFtcyB7XG4gIGZyb20/OiBzdHJpbmc7XG4gIGdhcz86IG51bWJlciB8IHN0cmluZyB8IEJpZ051bWJlcjtcbiAgZ2FzUHJpY2U/OiBudW1iZXIgfCBzdHJpbmcgfCBCaWdOdW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBheWFibGVUeFBhcmFtcyB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBCaWdOdW1iZXI7XG4gIGZyb20/OiBzdHJpbmc7XG4gIGdhcz86IG51bWJlciB8IHN0cmluZyB8IEJpZ051bWJlcjtcbiAgZ2FzUHJpY2U/OiBudW1iZXIgfCBzdHJpbmcgfCBCaWdOdW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlQ2hhaW5Db250cmFjdCB7XG4gIHB1YmxpYyByZWFkb25seSByYXdXZWIzQ29udHJhY3Q6IGFueTtcbiAgcHVibGljIHJlYWRvbmx5IGFkZHJlc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih3ZWIzOiBhbnksIGFkZHJlc3M6IHN0cmluZyB8IEJpZ051bWJlciwgcHVibGljIHJlYWRvbmx5IGNvbnRyYWN0QWJpOiBvYmplY3QpIHtcbiAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5yYXdXZWIzQ29udHJhY3QgPSB3ZWIzLmV0aC5jb250cmFjdChjb250cmFjdEFiaSkuYXQoYWRkcmVzcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlZmVycmVkVHJhbnNhY3Rpb25XcmFwcGVyPFQgZXh0ZW5kcyBJVHhQYXJhbXM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYXJlbnRDb250cmFjdDogVHlwZUNoYWluQ29udHJhY3QsXG4gICAgcHJpdmF0ZSByZWFkb25seSBtZXRob2ROYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZWFkb25seSBtZXRob2RBcmdzOiBhbnlbXSxcbiAgKSB7fVxuXG4gIHNlbmQocGFyYW1zOiBULCBjdXN0b21XZWIzPzogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBsZXQgbWV0aG9kOiBhbnk7XG5cbiAgICBpZiAoY3VzdG9tV2ViMykge1xuICAgICAgY29uc3QgdG1wQ29udHJhY3QgPSBjdXN0b21XZWIzLmV0aFxuICAgICAgICAuY29udHJhY3QodGhpcy5wYXJlbnRDb250cmFjdC5jb250cmFjdEFiaSlcbiAgICAgICAgLmF0KHRoaXMucGFyZW50Q29udHJhY3QuYWRkcmVzcyk7XG4gICAgICBtZXRob2QgPSB0bXBDb250cmFjdFt0aGlzLm1ldGhvZE5hbWVdLnNlbmRUcmFuc2FjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWV0aG9kID0gdGhpcy5wYXJlbnRDb250cmFjdC5yYXdXZWIzQ29udHJhY3RbdGhpcy5tZXRob2ROYW1lXS5zZW5kVHJhbnNhY3Rpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2lmeShtZXRob2QsIFsuLi50aGlzLm1ldGhvZEFyZ3MsIHBhcmFtc10pO1xuICB9XG5cbiAgZ2V0RGF0YSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcmVudENvbnRyYWN0LnJhd1dlYjNDb250cmFjdFt0aGlzLm1ldGhvZE5hbWVdLmdldERhdGEoXG4gICAgICAuLi50aGlzLm1ldGhvZEFyZ3MsXG4gICAgKSBhcyBzdHJpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb21pc2lmeShmdW5jOiBhbnksIGFyZ3M6IGFueSk6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBmdW5jKC4uLmFyZ3MsIChlcnI6IGFueSwgZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqKGVycik7XG4gICAgICByZXR1cm4gcmVzKGRhdGEpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=