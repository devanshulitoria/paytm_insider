(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar navbar-expand-lg  navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a href=\"../\" class=\"navbar-brand\">HackerNews API</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav\">\n      \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/topstories\">Top Stories</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/paststories\">Past Stories</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://github.com/devanshulitoria/paytm_insider\">Link for Source Code</a>\n        </li>\n     \n      </ul>\n\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"page-header\" id=\"banner\">\n  <router-outlet></router-outlet>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  \n    <hr>\n<h3>Here are the Top Comments</h3>\n<hr>\n<app-spinner *ngIf=\"showSpinner\"></app-spinner>\n<ul *ngFor=\"let comment of comments\">\n    <div class=\"mews\" >\n    <h5>{{comment.username}}</h5>\n    <p>{{comment.content}}</p>\n    <p><small>Sub-Comments  on  this    story   are   {{comment.kids}} </small></p>\n    </div>   \n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"notfound\">\n    <div class=\"notfound\">\n        <div class=\"notfound-404\">\n            <h3>Oops! Page not found</h3>\n            <h1><span>4</span><span>0</span><span>4</span></h1>\n        </div>\n        <h2>we are sorry, but the page you requested was not found</h2>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/past-stories/past-stories.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/past-stories/past-stories.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <hr>\n<h3>Past Stories</h3>\n<hr>\n<ul *ngFor=\"let story of stories\">\n    <div class=\"mews\" >\n    <h5>{{story.title}}</h5>\n    <p>Story By <b>{{story.username}}</b></p>\n    <a href=\"{{story.url}}\">Url to the Story  </a>\n    <a  (click)=\"onSelect(story)\">|  Comments on this story</a>\n    </div>   \n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sk-chase\">\n    <div class=\"sk-chase-dot\"></div>\n    <div class=\"sk-chase-dot\"></div>\n    <div class=\"sk-chase-dot\"></div>\n    <div class=\"sk-chase-dot\"></div>\n    <div class=\"sk-chase-dot\"></div>\n    <div class=\"sk-chase-dot\"></div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-stories/top-stories.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-stories/top-stories.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <hr>\n<h3>Here are the Top Stories</h3>\n<hr>\n<app-spinner *ngIf=\"showSpinner\"></app-spinner>\n<ul *ngFor=\"let story of stories\">\n    <div class=\"mews\" >\n    <h5>{{story.title}}</h5>\n    <p>Story By <b>{{story.username}}</b></p>\n    <a href=\"{{story.url}}\">Full Story  </a>\n    <a  (click)=\"onSelect(story)\">|  Comments </a>\n    </div>   \n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _top_stories_top_stories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-stories/top-stories.component */ "./src/app/top-stories/top-stories.component.ts");
/* harmony import */ var _past_stories_past_stories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./past-stories/past-stories.component */ "./src/app/past-stories/past-stories.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");







const routes = [
    { path: 'topstories', component: _top_stories_top_stories_component__WEBPACK_IMPORTED_MODULE_3__["TopStoriesComponent"] },
    { path: 'paststories', component: _past_stories_past_stories_component__WEBPACK_IMPORTED_MODULE_4__["PastStoriesComponent"] },
    { path: 'comments/:id', component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_5__["CommentsComponent"] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'paytmFrontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_stories_top_stories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-stories/top-stories.component */ "./src/app/top-stories/top-stories.component.ts");
/* harmony import */ var _past_stories_past_stories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./past-stories/past-stories.component */ "./src/app/past-stories/past-stories.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _top_stories_top_stories_component__WEBPACK_IMPORTED_MODULE_5__["TopStoriesComponent"],
            _past_stories_past_stories_component__WEBPACK_IMPORTED_MODULE_6__["PastStoriesComponent"],
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
            _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mews {\r\n    width: 80%;\r\n    border-style: solid;\r\n    padding: 12px;\r\n    border-color:whitesmoke;\r\n    border-radius: 4px;\r\n    margin-left: 0px;\r\n    border-width: 1px;\r\n  }\r\n  \r\n.mews > div {\r\n    \r\n    padding: 12px;\r\n    border-radius: 4px;\r\n    \r\n\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFRjs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCOzs7RUFHcEIiLCJmaWxlIjoic3JjL2FwcC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1ld3Mge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOndoaXRlc21va2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4ubWV3cyA+IGRpdiB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBcclxuXHJcbiAgfVxyXG4gIFxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_commentfrom_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../get-commentfrom-backend.service */ "./src/app/get-commentfrom-backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CommentsComponent = class CommentsComponent {
    constructor(_backendService, route) {
        this._backendService = _backendService;
        this.route = route;
        this.comments = [];
        this.showSpinner = true;
    }
    ngOnInit() {
        let id = parseInt(this.route.snapshot.paramMap.get('id'));
        this._backendService.getData(id)
            .subscribe(data => { this.comments = data, console.log(data), this.showSpinner = false; });
    }
};
CommentsComponent.ctorParameters = () => [
    { type: _get_commentfrom_backend_service__WEBPACK_IMPORTED_MODULE_2__["GetCommentfromBackendService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")).default]
    })
], CommentsComponent);



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  #notfound {\r\n    position: relative;\r\n    height: 100vh;\r\n  }\r\n  \r\n  #notfound .notfound {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  \r\n  .notfound {\r\n    max-width: 520px;\r\n    width: 100%;\r\n    line-height: 1.4;\r\n    text-align: center;\r\n  }\r\n  \r\n  .notfound .notfound-404 {\r\n    position: relative;\r\n    height: 240px;\r\n  }\r\n  \r\n  .notfound .notfound-404 h1 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 252px;\r\n    font-weight: 900;\r\n    margin: 0px;\r\n    color: #262626;\r\n    text-transform: uppercase;\r\n    letter-spacing: -40px;\r\n    margin-left: -20px;\r\n  }\r\n  \r\n  .notfound .notfound-404 h1>span {\r\n    text-shadow: -8px 0px 0px #fff;\r\n  }\r\n  \r\n  .notfound .notfound-404 h3 {\r\n    font-family: 'Cabin', sans-serif;\r\n    position: relative;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    color: #262626;\r\n    margin: 0px;\r\n    letter-spacing: 3px;\r\n    padding-left: 6px;\r\n  }\r\n  \r\n  .notfound h2 {\r\n    font-family: 'Cabin', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    color: #000;\r\n    margin-top: 0px;\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  @media only screen and (max-width: 767px) {\r\n    .notfound .notfound-404 {\r\n      height: 200px;\r\n    }\r\n    .notfound .notfound-404 h1 {\r\n      font-size: 200px;\r\n    }\r\n  }\r\n  \r\n  @media only screen and (max-width: 480px) {\r\n    .notfound .notfound-404 {\r\n      height: 162px;\r\n    }\r\n    .notfound .notfound-404 h1 {\r\n      font-size: 162px;\r\n      height: 150px;\r\n      line-height: 162px;\r\n    }\r\n    .notfound h2 {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBR0EsZ0NBQWdDO0VBQzFDOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFHQSxnQ0FBZ0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAjbm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgI25vdGZvdW5kIC5ub3Rmb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIHtcclxuICAgIG1heC13aWR0aDogNTIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMjUycHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogIzI2MjYyNjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxPnNwYW4ge1xyXG4gICAgdGV4dC1zaGFkb3c6IC04cHggMHB4IDBweCAjZmZmO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0NhYmluJywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xyXG4gICAgICBoZWlnaHQ6IDE2MnB4O1xyXG4gICAgfVxyXG4gICAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xyXG4gICAgICBmb250LXNpemU6IDE2MnB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTYycHg7XHJcbiAgICB9XHJcbiAgICAubm90Zm91bmQgaDIge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/get-commentfrom-backend.service.ts":
/*!****************************************************!*\
  !*** ./src/app/get-commentfrom-backend.service.ts ***!
  \****************************************************/
/*! exports provided: GetCommentfromBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCommentfromBackendService", function() { return GetCommentfromBackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GetCommentfromBackendService = class GetCommentfromBackendService {
    constructor(http) {
        this.http = http;
        this._url = "http://localhost:5000/comments/";
    }
    getData(ide) {
        return this.http.get(this._url + ide);
    }
};
GetCommentfromBackendService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetCommentfromBackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetCommentfromBackendService);



/***/ }),

/***/ "./src/app/get-data-from-backend.service.ts":
/*!**************************************************!*\
  !*** ./src/app/get-data-from-backend.service.ts ***!
  \**************************************************/
/*! exports provided: GetDataFromBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataFromBackendService", function() { return GetDataFromBackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GetDataFromBackendService = class GetDataFromBackendService {
    constructor(http) {
        this.http = http;
        this._url = "http://localhost:5000/top-stories";
    }
    getData() {
        return this.http.get(this._url);
    }
};
GetDataFromBackendService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetDataFromBackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetDataFromBackendService);



/***/ }),

/***/ "./src/app/get-past-stories.service.ts":
/*!*********************************************!*\
  !*** ./src/app/get-past-stories.service.ts ***!
  \*********************************************/
/*! exports provided: GetPastStoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPastStoriesService", function() { return GetPastStoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GetPastStoriesService = class GetPastStoriesService {
    constructor(http) {
        this.http = http;
        this._url = "http://localhost:5000/paststories";
    }
    getData() {
        return this.http.get(this._url);
    }
};
GetPastStoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetPastStoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetPastStoriesService);



/***/ }),

/***/ "./src/app/past-stories/past-stories.component.css":
/*!*********************************************************!*\
  !*** ./src/app/past-stories/past-stories.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mews {\r\n    width: 80%;\r\n    border-style: solid;\r\n    padding: 12px;\r\n    border-color:whitesmoke;\r\n    border-radius: 4px;\r\n    margin-left: 0px;\r\n    border-width: 1px;\r\n  }\r\n  \r\n.mews > div {\r\n    \r\n    padding: 12px;\r\n    border-radius: 4px;\r\n    \r\n\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzdC1zdG9yaWVzL3Bhc3Qtc3Rvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVGOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7OztFQUdwQiIsImZpbGUiOiJzcmMvYXBwL3Bhc3Qtc3Rvcmllcy9wYXN0LXN0b3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXdzIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjp3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIH1cclxuICBcclxuLm1ld3MgPiBkaXYge1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgXHJcblxyXG4gIH1cclxuICBcclxuIl19 */");

/***/ }),

/***/ "./src/app/past-stories/past-stories.component.ts":
/*!********************************************************!*\
  !*** ./src/app/past-stories/past-stories.component.ts ***!
  \********************************************************/
/*! exports provided: PastStoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastStoriesComponent", function() { return PastStoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_past_stories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../get-past-stories.service */ "./src/app/get-past-stories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PastStoriesComponent = class PastStoriesComponent {
    constructor(_backendService, router) {
        this._backendService = _backendService;
        this.router = router;
        this.stories = [];
        this.showSpinner = true;
    }
    ngOnInit() {
        this._backendService.getData()
            .subscribe(data => { this.stories = data, console.log(data), this.showSpinner = false; });
    }
    onSelect(department) {
        this.router.navigate(['/comments', department._id]);
    }
};
PastStoriesComponent.ctorParameters = () => [
    { type: _get_past_stories_service__WEBPACK_IMPORTED_MODULE_2__["GetPastStoriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PastStoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-past-stories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./past-stories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/past-stories/past-stories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./past-stories.component.css */ "./src/app/past-stories/past-stories.component.css")).default]
    })
], PastStoriesComponent);



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-chase {\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    -webkit-animation: sk-chase 2.5s infinite linear both;\r\n            animation: sk-chase 2.5s infinite linear both;\r\n  }\r\n  \r\n  .sk-chase-dot {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0; \r\n    -webkit-animation: sk-chase-dot 2.0s infinite ease-in-out both; \r\n            animation: sk-chase-dot 2.0s infinite ease-in-out both; \r\n  }\r\n  \r\n  .sk-chase-dot:before {\r\n    content: '';\r\n    display: block;\r\n    width: 25%;\r\n    height: 25%;\r\n    background-color: #fff;\r\n    border-radius: 100%;\r\n    -webkit-animation: sk-chase-dot-before 2.0s infinite ease-in-out both;\r\n            animation: sk-chase-dot-before 2.0s infinite ease-in-out both; \r\n  }\r\n  \r\n  .sk-chase-dot:nth-child(1) { -webkit-animation-delay: -1.1s; animation-delay: -1.1s; }\r\n  \r\n  .sk-chase-dot:nth-child(2) { -webkit-animation-delay: -1.0s; animation-delay: -1.0s; }\r\n  \r\n  .sk-chase-dot:nth-child(3) { -webkit-animation-delay: -0.9s; animation-delay: -0.9s; }\r\n  \r\n  .sk-chase-dot:nth-child(4) { -webkit-animation-delay: -0.8s; animation-delay: -0.8s; }\r\n  \r\n  .sk-chase-dot:nth-child(5) { -webkit-animation-delay: -0.7s; animation-delay: -0.7s; }\r\n  \r\n  .sk-chase-dot:nth-child(6) { -webkit-animation-delay: -0.6s; animation-delay: -0.6s; }\r\n  \r\n  .sk-chase-dot:nth-child(1):before { -webkit-animation-delay: -1.1s; animation-delay: -1.1s; }\r\n  \r\n  .sk-chase-dot:nth-child(2):before { -webkit-animation-delay: -1.0s; animation-delay: -1.0s; }\r\n  \r\n  .sk-chase-dot:nth-child(3):before { -webkit-animation-delay: -0.9s; animation-delay: -0.9s; }\r\n  \r\n  .sk-chase-dot:nth-child(4):before { -webkit-animation-delay: -0.8s; animation-delay: -0.8s; }\r\n  \r\n  .sk-chase-dot:nth-child(5):before { -webkit-animation-delay: -0.7s; animation-delay: -0.7s; }\r\n  \r\n  .sk-chase-dot:nth-child(6):before { -webkit-animation-delay: -0.6s; animation-delay: -0.6s; }\r\n  \r\n  @-webkit-keyframes sk-chase {\r\n    100% { transform: rotate(360deg); } \r\n  }\r\n  \r\n  @keyframes sk-chase {\r\n    100% { transform: rotate(360deg); } \r\n  }\r\n  \r\n  @-webkit-keyframes sk-chase-dot {\r\n    80%, 100% { transform: rotate(360deg); } \r\n  }\r\n  \r\n  @keyframes sk-chase-dot {\r\n    80%, 100% { transform: rotate(360deg); } \r\n  }\r\n  \r\n  @-webkit-keyframes sk-chase-dot-before {\r\n    50% {\r\n      transform: scale(0.4); \r\n    } 100%, 0% {\r\n      transform: scale(1.0); \r\n    } \r\n  }\r\n  \r\n  @keyframes sk-chase-dot-before {\r\n    50% {\r\n      transform: scale(0.4); \r\n    } 100%, 0% {\r\n      transform: scale(1.0); \r\n    } \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxREFBNkM7WUFBN0MsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTiw4REFBc0Q7WUFBdEQsc0RBQXNEO0VBQ3hEOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUVBQTZEO1lBQTdELDZEQUE2RDtFQUMvRDs7RUFFQSw2QkFBNkIsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUNyRCw2QkFBNkIsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUNyRCw2QkFBNkIsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUNyRCw2QkFBNkIsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUNyRCw2QkFBNkIsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUNyRCw2QkFBNkIsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUNyRCxvQ0FBb0MsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUM1RCxvQ0FBb0MsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUM1RCxvQ0FBb0MsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUM1RCxvQ0FBb0MsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUM1RCxvQ0FBb0MsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUM1RCxvQ0FBb0MsOEJBQXNCLEVBQXRCLHNCQUFzQixFQUFFOztFQUU1RDtJQUNFLE9BQU8seUJBQXlCLEVBQUU7RUFDcEM7O0VBRkE7SUFDRSxPQUFPLHlCQUF5QixFQUFFO0VBQ3BDOztFQUVBO0lBQ0UsWUFBWSx5QkFBeUIsRUFBRTtFQUN6Qzs7RUFGQTtJQUNFLFlBQVkseUJBQXlCLEVBQUU7RUFDekM7O0VBRUE7SUFDRTtNQUNFLHFCQUFxQjtJQUN2QixFQUFFO01BQ0EscUJBQXFCO0lBQ3ZCO0VBQ0Y7O0VBTkE7SUFDRTtNQUNFLHFCQUFxQjtJQUN2QixFQUFFO01BQ0EscUJBQXFCO0lBQ3ZCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1jaGFzZSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbjogc2stY2hhc2UgMi41cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLnNrLWNoYXNlLWRvdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7IFxyXG4gICAgYW5pbWF0aW9uOiBzay1jaGFzZS1kb3QgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoOyBcclxuICB9XHJcbiAgXHJcbiAgLnNrLWNoYXNlLWRvdDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiBzay1jaGFzZS1kb3QtYmVmb3JlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDsgXHJcbiAgfVxyXG4gIFxyXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDEpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgfVxyXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMS4wczsgfVxyXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC45czsgfVxyXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDQpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC44czsgfVxyXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC43czsgfVxyXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDYpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC42czsgfVxyXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDEpOmJlZm9yZSB7IGFuaW1hdGlvbi1kZWxheTogLTEuMXM7IH1cclxuICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCgyKTpiZWZvcmUgeyBhbmltYXRpb24tZGVsYXk6IC0xLjBzOyB9XHJcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMyk6YmVmb3JlIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC45czsgfVxyXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDQpOmJlZm9yZSB7IGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cclxuICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCg1KTpiZWZvcmUgeyBhbmltYXRpb24tZGVsYXk6IC0wLjdzOyB9XHJcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNik6YmVmb3JlIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC42czsgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stY2hhc2Uge1xyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stY2hhc2UtZG90IHtcclxuICAgIDgwJSwgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stY2hhc2UtZG90LWJlZm9yZSB7XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7IFxyXG4gICAgfSAxMDAlLCAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTsgXHJcbiAgICB9IFxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css")).default]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/app/top-stories/top-stories.component.css":
/*!*******************************************************!*\
  !*** ./src/app/top-stories/top-stories.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mews {\r\n    width: 80%;\r\n    border-style: solid;\r\n    padding: 12px;\r\n    border-color:whitesmoke;\r\n    border-radius: 4px;\r\n    margin-left: 0px;\r\n    border-width: 1px;\r\n  }\r\n  \r\n.mews > div {\r\n    \r\n    padding: 12px;\r\n    border-radius: 4px;\r\n    \r\n\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLXN0b3JpZXMvdG9wLXN0b3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFRjs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCOzs7RUFHcEIiLCJmaWxlIjoic3JjL2FwcC90b3Atc3Rvcmllcy90b3Atc3Rvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1ld3Mge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOndoaXRlc21va2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4ubWV3cyA+IGRpdiB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBcclxuXHJcbiAgfVxyXG4gIFxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/top-stories/top-stories.component.ts":
/*!******************************************************!*\
  !*** ./src/app/top-stories/top-stories.component.ts ***!
  \******************************************************/
/*! exports provided: TopStoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopStoriesComponent", function() { return TopStoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_data_from_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../get-data-from-backend.service */ "./src/app/get-data-from-backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TopStoriesComponent = class TopStoriesComponent {
    constructor(_backendService, router) {
        this._backendService = _backendService;
        this.router = router;
        this.stories = [];
        this.showSpinner = true;
    }
    ngOnInit() {
        this._backendService.getData()
            .subscribe(data => { this.stories = data, console.log(data), this.showSpinner = false; });
    }
    onSelect(department) {
        this.router.navigate(['/comments', department._id]);
    }
};
TopStoriesComponent.ctorParameters = () => [
    { type: _get_data_from_backend_service__WEBPACK_IMPORTED_MODULE_2__["GetDataFromBackendService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TopStoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-stories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-stories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-stories/top-stories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-stories.component.css */ "./src/app/top-stories/top-stories.component.css")).default]
    })
], TopStoriesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\node project\paytm_insider\frontend\paytmFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map