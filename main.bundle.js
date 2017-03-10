webpackJsonp([0,3],{

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfolioService = (function () {
    function PortfolioService(http) {
        this.http = http;
        this.baseUrl = 'http://dev-angularjs2-material-design-drupal-8.pantheonsite.io/';
    }
    PortfolioService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        return headers;
    };
    PortfolioService.prototype.getArticles = function () {
        this.data = this.http.get(this.baseUrl + '/api/article', { headers: this.getHeaders() }).map(this.extractData)
            .catch(this.handleError);
        return this.data;
    };
    PortfolioService.prototype.getArticle = function (nid) {
        if (nid) {
            this.data = this.http.get(this.baseUrl + '/api/article/' + nid, { headers: this.getHeaders() }).map(this.extractData)
                .catch(this.handleError);
            return this.data;
        }
    };
    PortfolioService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    PortfolioService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    PortfolioService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], PortfolioService);
    return PortfolioService;
    var _a;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/portfolio.service.js.map

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 540;


/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(699);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/main.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_service__ = __webpack_require__(697);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(aboutservice) {
        this.aboutservice = aboutservice;
        this.abouts = [];
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.getAboutData();
    };
    AboutComponent.prototype.getAboutData = function () {
        var _this = this;
        this.about = [];
        //this.about = this.aboutservice.getData().subscribe(data => {this.about = data;});
        this.aboutservice.getData().subscribe(function (data) {
            _this.about = data,
                console.log('data----> ' + data);
        }, function (err) { return console.error(err); }, function () { return console.log('done loading about ---> ' + _this.about); });
        console.log(this.about);
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(868),
            providers: [__WEBPACK_IMPORTED_MODULE_1__about_service__["a" /* AboutService */]],
            styles: [__webpack_require__(861)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__about_service__["a" /* AboutService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__about_service__["a" /* AboutService */]) === 'function' && _a) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/about.component.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutService = (function () {
    function AboutService(http) {
        this.http = http;
        this.baseUrl = 'http://dev-angularjs2-material-design-drupal-8.pantheonsite.io';
    }
    AboutService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        return headers;
    };
    AboutService.prototype.getData = function () {
        this.data = this.http.get(this.baseUrl + '/api/about', { headers: this.getHeaders() }).map(this.extractData)
            .catch(this.handleError);
        ;
        //console.log('in getdata ---> '+this.http.get(this.baseUrl+'/node/2?_format=json', {headers: this.getHeaders()}));
        return this.data;
    };
    AboutService.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    AboutService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('in service res obj ---->' + body);
        //console.log('in service res.json ---->'+body);
        return body;
    };
    AboutService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    AboutService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AboutService);
    return AboutService;
    var _a;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/about.service.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(869),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/app.component.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__html_pipe__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__comments_comments_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comments_addcomment_addcomment_component__ = __webpack_require__(701);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routingComponents */],
                __WEBPACK_IMPORTED_MODULE_7__html_pipe__["a" /* HtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_8__comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__comments_addcomment_addcomment_component__["a" /* AddcommentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["b" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/app.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portfolio_article_article_component__ = __webpack_require__(705);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routingComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'portfolio' },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'article/:id', component: __WEBPACK_IMPORTED_MODULE_5__portfolio_article_article_component__["a" /* ArticleComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
var routingComponents = [__WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__["a" /* PortfolioComponent */], __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_5__portfolio_article_article_component__["a" /* ArticleComponent */]];
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/app.routing.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddcommentComponent = (function () {
    function AddcommentComponent() {
    }
    AddcommentComponent.prototype.ngOnInit = function () {
    };
    AddcommentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-addcomment',
            template: __webpack_require__(870),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddcommentComponent);
    return AddcommentComponent;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/addcomment.component.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentsComponent = (function () {
    function CommentsComponent() {
    }
    CommentsComponent.prototype.ngOnInit = function () {
    };
    CommentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-comments',
            template: __webpack_require__(871),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [])
    ], CommentsComponent);
    return CommentsComponent;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/comments.component.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(872),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/contact.component.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HtmlPipe = (function () {
    function HtmlPipe() {
    }
    HtmlPipe.prototype.transform = function (value, args) {
        return null;
    };
    HtmlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
            name: 'html'
        }), 
        __metadata('design:paramtypes', [])
    ], HtmlPipe);
    return HtmlPipe;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/html.pipe.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleComponent = (function () {
    function ArticleComponent(portfolioservice, route) {
        this.portfolioservice = portfolioservice;
        this.route = route;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
        this.getArticle();
    };
    ArticleComponent.prototype.getArticle = function () {
        var _this = this;
        //this.article = [];
        //this.about = this.aboutservice.getData().subscribe(data => {this.about = data;});
        this.portfolioservice.getArticle(this.id).subscribe(function (data) {
            _this.article = data,
                console.log('data---->' + data);
        }, function (err) { return console.error(err); }, function () { return console.log('done loading about ---> ' + _this.article); });
        console.log(this.article);
    };
    ArticleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-article',
            template: __webpack_require__(873),
            styles: [__webpack_require__(866)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ArticleComponent);
    return ArticleComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/article.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__(463);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = (function () {
    function PortfolioComponent(portfolioservice) {
        this.portfolioservice = portfolioservice;
        this.articles = [];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getArticleData();
    };
    PortfolioComponent.prototype.getArticleData = function () {
        var _this = this;
        this.articles = [];
        //this.about = this.aboutservice.getData().subscribe(data => {this.about = data;});
        this.portfolioservice.getArticles().subscribe(function (data) {
            _this.articles = data;
        }, function (err) { return console.error(err); });
        //console.log(this.articles);
    };
    PortfolioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__(874),
            providers: [__WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]],
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]) === 'function' && _a) || Object])
    ], PortfolioComponent);
    return PortfolioComponent;
    var _a;
}());
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/portfolio.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/environment.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=E:/Projects/wedeploy/drupal-angular2/src/polyfills.js.map

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid portfolio-max-width\">\n    <div class=\"mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp\" *ngFor=\"let item of about\">\n        <div class=\"mdl-card__title\">\n            <h2 class=\"mdl-card__title-text\">{{item.title}}</h2>\n        </div>\n        <div class=\"mdl-card__media\">\n            <img class=\"article-image\" src=\"images/about-header.jpg\" border=\"0\" alt=\"\">\n        </div>\n        \n        <div class=\"mdl-grid portfolio-copy\" [innerHTML]='item.body'>\n            \n        </div>\n    </div>\n\n</div>\n<footer class=\"mdl-mini-footer\">\n    <div class=\"mdl-mini-footer__left-section\">\n        <div class=\"mdl-logo\">Demo: AngularJS 2 + Material Design + Drupal 8 (Design Credit: <a href=\"https://getmdl.io/templates/index.html\" target=\"_blank\">https://getmdl.io/templates/index.html</a>)</div>\n    </div>\n    <div class=\"mdl-mini-footer__right-section\">\n        <ul class=\"mdl-mini-footer__link-list\">\n            <li><a href=\"#\">Help</a></li>\n            <li><a href=\"#\">Privacy & Terms</a></li>\n        </ul>\n    </div>\n</footer>"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n    \n    <header class=\"mdl-layout__header mdl-layout__header--waterfall portfolio-header\">\n        <div class=\"mdl-layout__header-row portfolio-logo-row\">\n            <span class=\"mdl-layout__title\">\n                <div class=\"portfolio-logo\"></div>\n                <span class=\"mdl-layout__title\">Demo: AngularJS 2 + Material Design + Drupal 8</span>\n            </span>\n        </div>\n        <div class=\"mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only\">\n            <nav class=\"mdl-navigation mdl-typography--body-1-force-preferred-font\">\n                <a class=\"mdl-navigation__link\" routerLinkActive=\"is-active\" routerLink=\"/portfolio\">Home</a>\n                <a class=\"mdl-navigation__link\" routerLinkActive=\"is-active\" routerLink=\"/about\">About</a>\n                <a class=\"mdl-navigation__link\" routerLinkActive=\"is-active\" routerLink=\"/contact\">Contact</a>\n            </nav>\n        </div>\n    </header>\n    \n    <div class=\"mdl-layout__drawer mdl-layout--small-screen-only\">\n        <nav class=\"mdl-navigation mdl-typography--body-1-force-preferred-font\">\n            <a class=\"mdl-navigation__link\" routerLink=\"/portfolio\" routerLinkActive=\"is-active\">Home</a>\n            <a class=\"mdl-navigation__link\" routerLinkActive=\"is-active\" routerLink=\"/about\">About</a>\n            <a class=\"mdl-navigation__link\" routerLinkActive=\"is-active\" routerLink=\"/contact\">Contact</a>\n        </nav>\n    </div>\n    \n    <router-outlet></router-outlet>\n    \n    <main class=\"mdl-layout__content\">\n        \n    </main>\n</div>"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "<p>\n  addcomment works!\n</p>\n"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = "<p>\n  comments works!\n</p>\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid portfolio-max-width portfolio-contact\">\n                <div class=\"mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp\">\n                    <div class=\"mdl-card__title\">\n                        <h2 class=\"mdl-card__title-text\">Contact</h2>\n                    </div>\n                    <div class=\"mdl-card__media\">\n                        <img class=\"article-image\" src=\" images/contact-image.jpg\" border=\"0\" alt=\"\">\n                    </div>\n                    <div class=\"mdl-card__supporting-text\">\n                        <p>\n                            Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.\n                        </p>\n                        <p>\n                            Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet.\n                        </p>\n                        <form action=\"#\" class=\"\">\n                            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                                <input class=\"mdl-textfield__input\" pattern=\"[A-Z,a-z, ]*\" type=\"text\" id=\"Name\">\n                                <label class=\"mdl-textfield__label\" for=\"Name\">Name...</label>\n                                <span class=\"mdl-textfield__error\">Letters and spaces only</span>\n                            </div>\n                            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                                <input class=\"mdl-textfield__input\" type=\"text\" id=\"Email\">\n                                <label class=\"mdl-textfield__label\" for=\"Email\">Email...</label>\n                            </div>\n                            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                                <textarea class=\"mdl-textfield__input\" type=\"text\" rows=\"5\" id=\"note\"></textarea>\n                                <label class=\"mdl-textfield__label\" for=\"note\">Enter note</label>\n                            </div>\n                            <p>\n                                <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\" type=\"submit\">\n                                    Submit\n                                </button>\n                            </p>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <footer class=\"mdl-mini-footer\">\n                <div class=\"mdl-mini-footer__left-section\">\n                    <div class=\"mdl-logo\">Demo: AngularJS 2 + Material Design + Drupal 8 (Design Credit: <a href=\"https://getmdl.io/templates/index.html\" target=\"_blank\">https://getmdl.io/templates/index.html</a>)</div>\n                </div>\n                <div class=\"mdl-mini-footer__right-section\">\n                    <ul class=\"mdl-mini-footer__link-list\">\n                        <li><a href=\"#\">Help</a></li>\n                        <li><a href=\"#\">Privacy & Terms</a></li>\n                    </ul>\n                </div>\n            </footer>"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid portfolio-max-width\" *ngIf=\"article\">\n    <div class=\"mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp\" *ngFor=\"let item of article\">\n        <div class=\"mdl-card__title\">\n            <h2 class=\"mdl-card__title-text\">{{item.title}}</h2>\n        </div>\n        <div class=\"mdl-card__media\">\n            <img class=\"article-image\" src=\"images/about-header.jpg\" border=\"0\" alt=\"\">\n        </div>\n        \n        <div class=\"mdl-grid portfolio-copy\" [innerHTML]='item.body'>\n\n        </div>\n    </div>\n\n</div>\n<footer class=\"mdl-mini-footer\">\n    <div class=\"mdl-mini-footer__left-section\">\n        <div class=\"mdl-logo\">Demo: AngularJS 2 + Material Design + Drupal 8 (Design Credit: <a href=\"https://getmdl.io/templates/index.html\" target=\"_blank\">https://getmdl.io/templates/index.html</a>)</div>\n    </div>\n    <div class=\"mdl-mini-footer__right-section\">\n        <ul class=\"mdl-mini-footer__link-list\">\n            <li><a href=\"#\">Help</a></li>\n            <li><a href=\"#\">Privacy & Terms</a></li>\n        </ul>\n    </div>\n</footer>"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid portfolio-max-width\">\n    <div class=\"mdl-cell mdl-card mdl-shadow--4dp portfolio-card\" *ngFor=\"let item of articles\">\n        <div class=\"mdl-card__media\">\n            <img class=\"article-image\" src=\"{{item.image}}\" border=\"0\" alt=\"\">\n        </div>\n\n        <div class=\"mdl-card__title\">\n            <h2 class=\"mdl-card__title-text\">{{item.title}}</h2>\n        </div>\n        <div class=\"mdl-card__supporting-text\" [innerHTML]='item.body'>\n            \n        </div>\n        <div class=\"mdl-card__actions mdl-card--border\">\n           \n            <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent\" routerLink=\"/article/{{item.nid}}\">Read more</a>\n        </div>\n    </div>\n</div>\n\n<footer class=\"mdl-mini-footer\">\n    <div class=\"mdl-mini-footer__left-section\">\n        <div class=\"mdl-logo\">Demo: AngularJS 2 + Material Design + Drupal 8 (Design Credit: <a href=\"https://getmdl.io/templates/index.html\" target=\"_blank\">https://getmdl.io/templates/index.html</a>)</div>\n    </div>\n    <div class=\"mdl-mini-footer__right-section\">\n        <ul class=\"mdl-mini-footer__link-list\">\n            <li><a href=\"#\">Help</a></li>\n            <li><a href=\"#\">Privacy & Terms</a></li>\n        </ul>\n    </div>\n</footer>"

/***/ })

},[1132]);
//# sourceMappingURL=main.bundle.map