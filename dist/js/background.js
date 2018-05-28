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
/******/ 		"background": 0
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
/******/ 	deferredModules.push(["./src/Background.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Background.ts":
/*!***************************!*\
  !*** ./src/Background.ts ***!
  \***************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var _classes_BrowserPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/BrowserPlugin */ "./src/classes/BrowserPlugin.ts");
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

var Background = (function () {
    function Background() {
        this.settings = {
            accountAddress: '',
            tokenContractAddress: '0x23b98d4ff90a169d88bfab8b8829f0b0c0e3bce0',
            fundRequestContractAddress: '0xc1b66749fe5e2a15034b882da9e690490d5a1336',
            providerApi: 'https://kovan.fundrequest.io',
            fundUrlPrefix: 'http://localhost:8080/fund/github?url=',
            claimUrlPrefix: 'http://localhost:8080/requests?url=',
            optionsUrl: chrome.runtime.getURL("options.html"),
        };
        this.init();
    }
    Background.prototype.generateUUID = function () {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    Background.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.settings;
                        return [4, _classes_BrowserPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].get('ethAddress')];
                    case 1:
                        _a.accountAddress = _b.sent();
                        _classes_BrowserPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].addOnMessageListener(function (request, sender, sendResponse) {
                            var id = _this.generateUUID();
                            var currentTabId = sender.tab.id;
                            switch (request.action) {
                                case 'load':
                                    chrome.pageAction.show(sender.tab.id);
                                    sendResponse(_this.settings);
                                    break;
                                case 'openOptions':
                                    chrome.tabs.create({ url: _this.settings.optionsUrl }, function (tab) {
                                        chrome.tabs.sendMessage(tab.id, { id: id }, function (response) {
                                        });
                                    });
                                    break;
                                case 'claim':
                                    _this.openClaimTab(currentTabId, id, request, sendResponse);
                                case 'fund':
                                    _this.openFundTab(currentTabId, id, request, sendResponse);
                            }
                            return true;
                        });
                        return [2];
                }
            });
        });
    };
    Background.prototype.openClaimTab = function (currentTabId, id, request, sendResponse) {
        chrome.tabs.create({ url: this.settings.claimUrlPrefix + encodeURI(request.url) }, function (tab) {
            chrome.tabs.executeScript(tab.id, { file: 'js/fundrequest.js' }, function () {
                chrome.tabs.sendMessage(tab.id, { id: id }, function (response) {
                    response = typeof response !== 'undefined' ? response : {};
                    if (response.id === id) {
                        if (chrome.runtime.lastError) {
                            response.done = false;
                            response.message = chrome.runtime.lastError;
                        }
                        else {
                            response.done = true;
                        }
                        chrome.tabs.remove([tab.id]);
                        chrome.tabs.update(currentTabId, { 'active': true, 'highlighted': true });
                        sendResponse(response);
                    }
                });
            });
        });
    };
    Background.prototype.openFundTab = function (currentTabId, id, request, sendResponse) {
        chrome.tabs.create({ url: this.settings.fundUrlPrefix + encodeURI(request.url) }, function (tab) {
            chrome.tabs.executeScript(tab.id, { file: 'js/fundrequest.js' }, function () {
                chrome.tabs.sendMessage(tab.id, { id: id }, function (response) {
                    response = typeof response !== 'undefined' ? response : {};
                    if (response.id === id) {
                        if (chrome.runtime.lastError) {
                            response.done = false;
                            response.message = chrome.runtime.lastError;
                        }
                        else {
                            response.done = true;
                        }
                        chrome.tabs.remove([tab.id]);
                        chrome.tabs.update(currentTabId, { 'active': true, 'highlighted': true });
                        sendResponse(response);
                    }
                });
            });
        });
    };
    return Background;
}());

new Background();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhY2tncm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSW9EO0FBSXBEO0lBd0JJO1FBdEJPLGFBQVEsR0FBYTtZ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Q0FBQztxQkFDMUI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQzs7QUFFRCxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYmFja2dyb3VuZFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9CYWNrZ3JvdW5kLnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vbW9kZWxzL1NldHRpbmdzXCI7XHJcbmltcG9ydCBCcm93c2VyUGx1Z2luIGZyb20gXCIuL2NsYXNzZXMvQnJvd3NlclBsdWdpblwiO1xyXG5cclxuZGVjbGFyZSBsZXQgY2hyb21lOiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XHJcbi8vbGV0IHN0b3JlID0gbmV3IFN0b3JlKCdzZXR0aW5ncycpO1xyXG4gICAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncyA9IHtcclxuICAgICAgICBhY2NvdW50QWRkcmVzczogJycsIC8vc3RvcmUuZ2V0KCdmbmRBY2NvdW50QWRkcmVzcycpLFxyXG4gICAgICAgIHRva2VuQ29udHJhY3RBZGRyZXNzOiAnMHgyM2I5OGQ0ZmY5MGExNjlkODhiZmFiOGI4ODI5ZjBiMGMwZTNiY2UwJyxcclxuICAgICAgICBmdW5kUmVxdWVzdENvbnRyYWN0QWRkcmVzczogJzB4YzFiNjY3NDlmZTVlMmExNTAzNGI4ODJkYTllNjkwNDkwZDVhMTMzNicsXHJcbiAgICAgICAgcHJvdmlkZXJBcGk6ICdodHRwczovL2tvdmFuLmZ1bmRyZXF1ZXN0LmlvJyxcclxuICAgICAgICBmdW5kVXJsUHJlZml4OiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Z1bmQvZ2l0aHViP3VybD0nLFxyXG4gICAgICAgIGNsYWltVXJsUHJlZml4OiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlcXVlc3RzP3VybD0nLFxyXG4gICAgICAgIG9wdGlvbnNVcmw6IGNocm9tZS5ydW50aW1lLmdldFVSTChcIm9wdGlvbnMuaHRtbFwiKSxcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdlbmVyYXRlVVVJRCgpIHsgLy8gUHVibGljIERvbWFpbi9NSVRcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIGxldCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xyXG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY2NvdW50QWRkcmVzcyA9IGF3YWl0IEJyb3dzZXJQbHVnaW4uZ2V0KCdldGhBZGRyZXNzJyk7XHJcbiAgICAgICAgQnJvd3NlclBsdWdpbi5hZGRPbk1lc3NhZ2VMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5nZW5lcmF0ZVVVSUQoKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYWJJZCA9IHNlbmRlci50YWIuaWQ7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlcXVlc3QuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkJzpcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUucGFnZUFjdGlvbi5zaG93KHNlbmRlci50YWIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ29wZW5PcHRpb25zJzpcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUudGFicy5jcmVhdGUoe3VybDogdGhpcy5zZXR0aW5ncy5vcHRpb25zVXJsfSwgdGFiID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7aWQ6IGlkfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsYWltJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5DbGFpbVRhYihjdXJyZW50VGFiSWQsIGlkLCByZXF1ZXN0LCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZnVuZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgLyoqKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIC0gQ3JlYXRlIGEgbmV3IHRhYiB3aXRoIGZ1bmRpbmcgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAqIC0tIEluamVjdCBzY3JpcHQgdG8gZnVuZGluZyBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICogLS0gU2VuZCBtZXNzYWdlIHRvIG5ldyB0YWJcclxuICAgICAgICAgICAgICAgICAgICAgKiAtIFdoZW4gZnVuZGluZyBzdWNjZWVkZWQsIGNsb3NlIHRhYiwgYWRkIG5vdGlmaWNhdGlvbiwgcmVsb2FkIGZ1bmRlZCBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgKiAtIFdoZW4gZnVuZGluZyBmYWlscywgY2xvc2UgdGFiIGFuZCBhZGQgbm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuRnVuZFRhYihjdXJyZW50VGFiSWQsIGlkLCByZXF1ZXN0LCBzZW5kUmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9wZW5DbGFpbVRhYihjdXJyZW50VGFiSWQsIGlkLCByZXF1ZXN0LCBzZW5kUmVzcG9uc2UpIHtcclxuICAgICAgICBjaHJvbWUudGFicy5jcmVhdGUoe3VybDogdGhpcy5zZXR0aW5ncy5jbGFpbVVybFByZWZpeCArIGVuY29kZVVSSShyZXF1ZXN0LnVybCl9LCB0YWIgPT4ge1xyXG4gICAgICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwge2ZpbGU6ICdqcy9mdW5kcmVxdWVzdC5qcyd9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtpZDogaWR9LCByZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdHlwZW9mIHJlc3BvbnNlICE9PSAndW5kZWZpbmVkJyA/IHJlc3BvbnNlIDoge307XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5tZXNzYWdlID0gY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMucmVtb3ZlKFt0YWIuaWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKGN1cnJlbnRUYWJJZCwgeydhY3RpdmUnOiB0cnVlLCAnaGlnaGxpZ2h0ZWQnOiB0cnVlfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9wZW5GdW5kVGFiKGN1cnJlbnRUYWJJZCwgaWQsIHJlcXVlc3QsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7dXJsOiB0aGlzLnNldHRpbmdzLmZ1bmRVcmxQcmVmaXggKyBlbmNvZGVVUkkocmVxdWVzdC51cmwpfSwgdGFiID0+IHtcclxuICAgICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHtmaWxlOiAnanMvZnVuZHJlcXVlc3QuanMnfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7aWQ6IGlkfSwgcmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHR5cGVvZiByZXNwb25zZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXNwb25zZSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UubWVzc2FnZSA9IGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLnJlbW92ZShbdGFiLmlkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShjdXJyZW50VGFiSWQsIHsnYWN0aXZlJzogdHJ1ZSwgJ2hpZ2hsaWdodGVkJzogdHJ1ZX0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBCYWNrZ3JvdW5kKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==