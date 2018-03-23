webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cryptocurrency_service__ = __webpack_require__("./src/app/services/cryptocurrency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_my_currency_list_service__ = __webpack_require__("./src/app/services/my-currency-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_cryptocurrency_service__["a" /* cryptocurrencyServices */], __WEBPACK_IMPORTED_MODULE_2__services_my_currency_list_service__["a" /* MyCurrencyListService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loggin_loggin_component__ = __webpack_require__("./src/app/loggin/loggin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cryptocurrency_description_cryptocurrency_description_component__ = __webpack_require__("./src/app/cryptocurrency-description/cryptocurrency-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cryptocurrency_list_cryptocurrency_list_component__ = __webpack_require__("./src/app/cryptocurrency-list/cryptocurrency-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_cryptocurrency_my_cryptocurrency_component__ = __webpack_require__("./src/app/my-cryptocurrency/my-cryptocurrency.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__loggin_loggin_component__["a" /* LogginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__cryptocurrency_description_cryptocurrency_description_component__["a" /* CryptocurrencyDescriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_15__cryptocurrency_list_cryptocurrency_list_component__["a" /* CryptocurrencyListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__my_cryptocurrency_my_cryptocurrency_component__["a" /* MyCryptocurrencyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot([
                { path: 'loggin', component: __WEBPACK_IMPORTED_MODULE_7__loggin_loggin_component__["a" /* LogginComponent */] },
                {
                    path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                    children: [
                        { path: 'cryptocurrency-list', component: __WEBPACK_IMPORTED_MODULE_15__cryptocurrency_list_cryptocurrency_list_component__["a" /* CryptocurrencyListComponent */] },
                        { path: 'cryptocurrency-description/:cryptocurrencyId', component: __WEBPACK_IMPORTED_MODULE_14__cryptocurrency_description_cryptocurrency_description_component__["a" /* CryptocurrencyDescriptionComponent */] },
                        { path: 'my-cryptocurrency', component: __WEBPACK_IMPORTED_MODULE_16__my_cryptocurrency_my_cryptocurrency_component__["a" /* MyCryptocurrencyComponent */] },
                        { path: '', redirectTo: 'cryptocurrency-list', pathMatch: 'full' },
                    ]
                },
                { path: '', redirectTo: 'loggin', pathMatch: 'full' },
            ]),
            __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["b" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/cryptocurrency-description/cryptocurrency-description.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Cryptocurrency: {{cryptocurrencyItem.name}}</h1>\r\n<table>\r\n  <thead>\r\n    <tr>\r\n      <th rowspan=\"2\">Symbol</th>\r\n      <th rowspan=\"2\">Prise(USD)</th>\r\n      <th rowspan=\"2\">Rank</th>\r\n      <th colspan=\"3\">Changes (%)</th>\r\n\r\n    </tr>\r\n    <tr>\r\n      <th>for 1 hour</th>\r\n      <th>for 1 day</th>\r\n      <th>for 7 day</th>\r\n    </tr>\r\n\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>{{cryptocurrencyItem.symbol}}</td>\r\n      <td>{{cryptocurrencyItem.price_usd}}</td>\r\n      <td>{{cryptocurrencyItem.rank}}</td>\r\n      <td>{{cryptocurrencyItem.percent_change_1h}}</td>\r\n      <td>{{cryptocurrencyItem.percent_change_24h}}</td>\r\n      <td>{{cryptocurrencyItem.percent_change_7d}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/cryptocurrency-description/cryptocurrency-description.component.scss":
/***/ (function(module, exports) {

module.exports = "table, th, tr, td {\n  border: 2px solid #003380; }\n\nh1 {\n  margin-left: 10%;\n  color: #003380; }\n\ntable {\n  caption-side: top;\n  border-collapse: collapse;\n  width: 80%;\n  margin: 0 auto;\n  text-align: center; }\n\nth, td {\n  padding: 10px;\n  background-color: #b3d9ff; }\n"

/***/ }),

/***/ "./src/app/cryptocurrency-description/cryptocurrency-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptocurrencyDescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cryptocurrency_service__ = __webpack_require__("./src/app/services/cryptocurrency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CryptocurrencyDescriptionComponent = (function () {
    function CryptocurrencyDescriptionComponent(_route, _cryptocurrencyServices) {
        this._route = _route;
        this._cryptocurrencyServices = _cryptocurrencyServices;
    }
    CryptocurrencyDescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cryptocurrencyName = this._route.snapshot.paramMap.get('cryptocurrencyId');
        this._cryptocurrencyServices.getChosenCryptocurrencyItem(cryptocurrencyName)
            .subscribe(function (data) {
            _this.cryptocurrencyItem = data[0];
        });
    };
    return CryptocurrencyDescriptionComponent;
}());
CryptocurrencyDescriptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cryptocurrency-description',
        template: __webpack_require__("./src/app/cryptocurrency-description/cryptocurrency-description.component.html"),
        styles: [__webpack_require__("./src/app/cryptocurrency-description/cryptocurrency-description.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cryptocurrency_service__["a" /* cryptocurrencyServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cryptocurrency_service__["a" /* cryptocurrencyServices */]) === "function" && _b || Object])
], CryptocurrencyDescriptionComponent);

var _a, _b;
//# sourceMappingURL=cryptocurrency-description.component.js.map

/***/ }),

/***/ "./src/app/cryptocurrency-list/cryptocurrency-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter\">\r\n  <div>filter by:</div>\r\n  <div class = \"input-filter\">\r\n    <input type='text' [(ngModel)]='listFilter' />\r\n  </div>\r\n</div>\r\n<div class=\"items-collection\">\r\n  <div class=\"single-item\" *ngFor=\"let cry of viewItems1\" [routerLink]=\"['/home/cryptocurrency-description', cry.name]\">\r\n    <button (click)=\"onSelectToMyCurrensy(cry)\" class=\"btn-select\" [ngClass]=\"{'selected-button' : cry.isSelected === true }\"></button>\r\n    <p>{{cry.price_usd}}</p>\r\n    <a>{{cry.name}}</a>\r\n  </div>\r\n</div>\r\n<button class=\"laod-more-btn \" (click)=\"onAddMoreItems() \">Load More</button>"

/***/ }),

/***/ "./src/app/cryptocurrency-list/cryptocurrency-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".items-collection {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 60%;\n  margin: 0 auto; }\n\n.single-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 200px;\n  width: 200px;\n  margin: 30px 20px;\n  border: 2px solid #003380; }\n\ndiv.single-item > a {\n  text-align: center;\n  width: auto;\n  font-size: 36px;\n  margin: 0 auto;\n  text-decoration: none; }\n\ndiv.single-item > p {\n  text-align: center;\n  margin: 0;\n  padding: 0; }\n\n.single-item:hover {\n  background-color: #87CEFA; }\n\n.btn-select {\n  border: 2px solid #003380;\n  border-radius: 30px;\n  margin: 10px auto;\n  width: 60px;\n  height: 60px;\n  background: url('bitcoin.f5f9e121147ef34341ed.jpg');\n  background-size: 100%; }\n\n.single-item > button:hover {\n  background-color: #003380;\n  border: 4px solid #003380; }\n\n.selected-button {\n  background-image: none;\n  background-color: red; }\n\n.laod-more-btn {\n  position: fixed;\n  right: 40px;\n  top: 100px;\n  height: 50px;\n  width: 200px;\n  font-size: 18px;\n  background-color: #fff;\n  border: 2px solid #003380;\n  border-radius: 30px; }\n\n.laod-more-btn:hover {\n  background-color: #87CEFA; }\n\n.filter {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  left: 40px;\n  top: 100px;\n  height: 50px;\n  width: 280px; }\n\n.input-filter {\n  border: 2px solid #003380;\n  height: 30px;\n  font-size: 24px;\n  margin-left: 30px; }\n"

/***/ }),

/***/ "./src/app/cryptocurrency-list/cryptocurrency-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptocurrencyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cryptocurrency_service__ = __webpack_require__("./src/app/services/cryptocurrency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_my_currency_list_service__ = __webpack_require__("./src/app/services/my-currency-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CryptocurrencyListComponent = (function () {
    function CryptocurrencyListComponent(_cryptocurrencyServices, _MyCurrencyListService, authService) {
        this._cryptocurrencyServices = _cryptocurrencyServices;
        this._MyCurrencyListService = _MyCurrencyListService;
        this.authService = authService;
    }
    Object.defineProperty(CryptocurrencyListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.viewItems1 = this.listFilter ? this.performFilter(this.listFilter) : this.viewItems;
        },
        enumerable: true,
        configurable: true
    });
    CryptocurrencyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._MyCurrencyListService.currentUserData.subscribe(function (myUserData) { return _this.myUser = myUserData; });
        this._cryptocurrencyServices.getCryptocurrencies()
            .subscribe(function (data) {
            _this.cryptocurrency = data;
            for (var n = 0; n < _this.myUser.userList.length; n++) {
                for (var m = 0; m < _this.cryptocurrency.length; m++) {
                    if (_this.myUser.userList[n].id === _this.cryptocurrency[m].id) {
                        _this.cryptocurrency[m].isSelected = true;
                    }
                }
            }
            _this.viewItems = _this.cryptocurrency.slice(0, 12);
            _this.viewItems1 = _this.viewItems;
        });
    };
    CryptocurrencyListComponent.prototype.onSelectToMyCurrensy = function (item) {
        // this.authService.sentData (item)
        if (this.myUser.userList.length > 0) {
            var ite = void 0;
            for (var _i = 0, _a = this.myUser; _i < _a.length; _i++) {
                ite = _a[_i];
                if (ite.name === item.name) {
                    return;
                }
            }
        }
        event.stopPropagation();
        item.isSelected = true;
        this.myUser.userList.push(item);
        this.authService.updateUserData(this.myUser);
        localStorage.setItem('my_currency', JSON.stringify(this.myUser));
    };
    CryptocurrencyListComponent.prototype.onAddMoreItems = function () {
        // this.authService.getData();
        var currentItemsArray = this.viewItems1;
        var lastIndex = currentItemsArray.length;
        var newItemsArray = this.cryptocurrency.slice(lastIndex, lastIndex + 8);
        this.viewItems1 = currentItemsArray.concat(newItemsArray);
    };
    CryptocurrencyListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.cryptocurrency.filter(function (item) {
            return item.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    return CryptocurrencyListComponent;
}());
CryptocurrencyListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cryptocurrency-list',
        template: __webpack_require__("./src/app/cryptocurrency-list/cryptocurrency-list.component.html"),
        styles: [__webpack_require__("./src/app/cryptocurrency-list/cryptocurrency-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cryptocurrency_service__["a" /* cryptocurrencyServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cryptocurrency_service__["a" /* cryptocurrencyServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_my_currency_list_service__["a" /* MyCurrencyListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_my_currency_list_service__["a" /* MyCurrencyListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], CryptocurrencyListComponent);

var _a, _b, _c;
//# sourceMappingURL=cryptocurrency-list.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <h1>Cryptocurrencies</h1>\r\n  <ul class=\"navigation\">\r\n    <li>\r\n      <a [routerLink]=\"['cryptocurrency-list']\">Currency List</a>\r\n    </li>\r\n    <!-- <li>\r\n      <a [routerLink]=\"['my-cryptocurrency']\">My currency</a>\r\n    </li> -->\r\n    <li>\r\n      <a [routerLink]=\"['my-cryptocurrency']\">{{myItems.userName}}</a>\r\n    </li>\r\n    <li id=\"my-currency-amount\">\r\n      <a [routerLink]=\"['my-cryptocurrency']\">{{myItems.userList.length}}</a>\r\n    </li>\r\n  </ul>\r\n  <button (click)=\"logOut($event)\">log Out</button>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "nav {\n  border-bottom: 4px solid #003380;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  padding: 0 100px;\n  background-color: #033863;\n  color: #e0e0e0; }\n\nnav > h1 {\n  font-style: italic;\n  letter-spacing: 1.1em;\n  font-size: 24px; }\n\n.navigation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin-right: -500px; }\n\n.navigation > li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 17px;\n  width: 150px;\n  text-align: center; }\n\n.navigation > li > a {\n  margin: auto;\n  text-decoration: none;\n  color: #e0e0e0; }\n\n#my-currency-amount {\n  margin: auto 0px;\n  border-radius: 20px;\n  width: 40px;\n  height: 40px;\n  border: 2px solid #e0e0e0; }\n\n.navigation > li:hover {\n  font-weight: bold; }\n\nnav > button {\n  border: 1px solid #e0e0e0;\n  background: none;\n  color: #e0e0e0;\n  width: 120px;\n  height: 40px;\n  margin: auto 0;\n  margin-right: -50px;\n  font-size: 17px; }\n\nnav > button:hover {\n  border: 2px solid #e0e0e0; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_my_currency_list_service__ = __webpack_require__("./src/app/services/my-currency-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(_MyCurrencyListService, _route, _router, authService) {
        this._MyCurrencyListService = _MyCurrencyListService;
        this._route = _route;
        this._router = _router;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._MyCurrencyListService.currentUserData.subscribe(function (myUserData) { return _this.myItems = myUserData; });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        console.log("1");
    };
    HomeComponent.prototype.logOut = function (event) {
        event.preventDefault();
        this.authService.logout();
        // this._router.navigate(['loggin']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_my_currency_list_service__["a" /* MyCurrencyListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_my_currency_list_service__["a" /* MyCurrencyListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/loggin/loggin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loggin-form\">\r\n  <!-- <form [formGroup]=\"myform\" (ngSubmit)=\" onSubmit ()\">\r\n    <fieldset>\r\n      <label class=\"log-label\">Loggin Name</label>\r\n      <input type=\"text\" class=\"log-field\" formControlName=\"logginName\">\r\n    </fieldset>\r\n    <fieldset>\r\n      <label class=\"log-label\">Password</label>\r\n      <input type=\"password\" class=\"log-field\" formControlName=\"password\">\r\n    </fieldset>\r\n    <!-- <button class=\"submit-button\" type=\"submit\" [routerLink] = \"['/home']\" >log In</button> -->\r\n    <!-- <button class=\"submit-button\">sing in</button>\r\n  </form> --> \r\n  <button class=\"google-button\" (click)=\"signInWithGoogle()\">google</button>\r\n</div>"

/***/ }),

/***/ "./src/app/loggin/loggin.component.scss":
/***/ (function(module, exports) {

module.exports = ".loggin-form {\n  margin: 100px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border: 3px solid #003380;\n  height: 450px;\n  width: 350px;\n  -webkit-box-shadow: 10px 10px #d9d9d9;\n          box-shadow: 10px 10px #d9d9d9;\n  border-radius: 30px;\n  color: #e0e0e0; }\n\nfieldset {\n  font-size: 18px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.log-field {\n  font-size: 18px;\n  padding: 5px;\n  width: 200px;\n  height: 35px;\n  border: 3px solid #00004d; }\n\n.log-label {\n  text-transform: lowercase;\n  margin: 10px 0; }\n\nbutton {\n  width: 140px;\n  height: 35px;\n  border: 3px solid #00004d; }\n\n.submit-button {\n  margin: 20px 0 40px 50px; }\n"

/***/ }),

/***/ "./src/app/loggin/loggin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogginComponent = (function () {
    function LogginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    LogginComponent.prototype.ngOnInit = function () {
        this.myform = this.fb.group({
            logginName: { value: '', disabled: false },
            password: { value: '', disabled: false }
        });
    };
    LogginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function (res) {
            _this.userData = {};
            _this.userData.userName = res.user.displayName;
            _this.userData.userList = [];
            if (_this.authService.getUserData(_this.userData)) {
                _this.userData = _this.authService.getUserData(_this.userData);
            }
            else {
                _this.authService.sentData(_this.userData);
            }
            ;
            _this.router.navigate(['home']);
            localStorage.setItem("my_currency", JSON.stringify(_this.userData));
        })
            .catch(function (err) { return console.log(err); });
    };
    // signInWithFacebook() {
    //   this.authService.signInWithFacebook()
    //   .then((res) => { 
    //     this.userData.userName = res.user.displayName;
    //     this.userData.userList = [];
    //     this.router.navigate(['home']);
    //     localStorage.setItem(`my_currency`, JSON.stringify(this.userData));
    //   })
    //   .catch((err) => console.log(err));
    // }
    LogginComponent.prototype.logOut = function (event) {
        this.authService.logout();
    };
    return LogginComponent;
}());
LogginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-loggin',
        template: __webpack_require__("./src/app/loggin/loggin.component.html"),
        styles: [__webpack_require__("./src/app/loggin/loggin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LogginComponent);

var _a, _b, _c;
//# sourceMappingURL=loggin.component.js.map

/***/ }),

/***/ "./src/app/my-cryptocurrency/my-cryptocurrency.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"items-collection\">\r\n  <div class=\"single-item\" *ngFor=\"let item of userData.userList\"  [routerLink]=\"['/home/cryptocurrency-description', item.name]\"><button (click)=\"onDeleteItem(item)\" class=\"btn-select\"></button><a>{{item.name}}</a></div>\r\n</div>"

/***/ }),

/***/ "./src/app/my-cryptocurrency/my-cryptocurrency.component.scss":
/***/ (function(module, exports) {

module.exports = ".items-collection {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 60%;\n  margin: 0 auto; }\n\n.single-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 200px;\n  width: 200px;\n  margin: 30px 20px;\n  border: 1px solid #003380; }\n\ndiv.single-item > a {\n  text-align: center;\n  width: auto;\n  font-size: 36px;\n  margin: auto;\n  text-decoration: none; }\n\n.btn-select {\n  border: 2px solid #003380;\n  border-radius: 20px;\n  margin: 10px 0 0 10px;\n  width: 40px;\n  height: 40px;\n  background: none; }\n\n.single-item > button:hover {\n  background-color: #ff4d4d;\n  border: 3px solid #003380; }\n\n.selected-button {\n  background-color: #ff4d4d; }\n"

/***/ }),

/***/ "./src/app/my-cryptocurrency/my-cryptocurrency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCryptocurrencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_my_currency_list_service__ = __webpack_require__("./src/app/services/my-currency-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyCryptocurrencyComponent = (function () {
    function MyCryptocurrencyComponent(_MyCurrencyListService, authService) {
        this._MyCurrencyListService = _MyCurrencyListService;
        this.authService = authService;
    }
    MyCryptocurrencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._MyCurrencyListService.currentUserData.subscribe(function (myUserData) { return _this.userData = myUserData; });
    };
    MyCryptocurrencyComponent.prototype.onDeleteItem = function (item) {
        var currentItem;
        var index;
        item.isSelected = false;
        index = this.userData.userList.indexOf(item);
        event.stopPropagation();
        this.userData.userList.splice(index, 1);
        this.authService.updateUserData(this.userData);
        localStorage.setItem('my_currency', JSON.stringify(this.userData));
    };
    return MyCryptocurrencyComponent;
}());
MyCryptocurrencyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-cryptocurrency',
        template: __webpack_require__("./src/app/my-cryptocurrency/my-cryptocurrency.component.html"),
        styles: [__webpack_require__("./src/app/my-cryptocurrency/my-cryptocurrency.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_my_currency_list_service__["a" /* MyCurrencyListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_my_currency_list_service__["a" /* MyCurrencyListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], MyCryptocurrencyComponent);

var _a, _b;
//# sourceMappingURL=my-cryptocurrency.component.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(_firebaseAuth, router, afs) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.afs = afs;
        this.userData = null;
        this.itemsCollection = afs.collection('users');
        this.item = this.itemsCollection.valueChanges();
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                console.log(_this.userData);
            }
            else {
                _this.userData = null;
            }
        });
    }
    AuthService.prototype.sentData = function (item) {
        this.itemsCollection.doc(item.userName).set(item);
    };
    AuthService.prototype.getUserData = function (currentUserData) {
        this.itemsCollection.doc(currentUserData.userName).valueChanges()
            .subscribe(function (res) { return res; });
    };
    AuthService.prototype.updateUserData = function (item) {
        this.itemsCollection.doc(item.userName).set(item);
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userData == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut()
            .then(function (res) { return _this.router.navigate(['loggin']); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/services/cryptocurrency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cryptocurrencyServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var cryptocurrencyServices = (function () {
    function cryptocurrencyServices(_http) {
        this._http = _http;
        this._cryptocurrencyUrl = 'https://api.coinmarketcap.com/v1/ticker/';
    }
    cryptocurrencyServices.prototype.getCryptocurrencies = function () {
        return this._http.get(this._cryptocurrencyUrl)
            .catch(this.hendleError);
    };
    cryptocurrencyServices.prototype.getChosenCryptocurrencyItem = function (cryptocurrencyId) {
        var cryptocurrencyItemUrl = this._cryptocurrencyUrl + cryptocurrencyId;
        return this._http.get(cryptocurrencyItemUrl)
            .catch(this.hendleError);
    };
    cryptocurrencyServices.prototype.hendleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    return cryptocurrencyServices;
}());
cryptocurrencyServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], cryptocurrencyServices);

var _a;
//# sourceMappingURL=cryptocurrency.service.js.map

/***/ }),

/***/ "./src/app/services/my-currency-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCurrencyListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyCurrencyListService = (function () {
    function MyCurrencyListService() {
        this.storageItems = JSON.parse(localStorage.getItem('my_currency'));
        this._userData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.storageItems);
        this.currentUserData = this._userData.asObservable();
    }
    MyCurrencyListService.prototype.changeMyItemsList = function (myUserData) {
        this._userData.next(myUserData);
    };
    return MyCurrencyListService;
}());
MyCurrencyListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MyCurrencyListService);

//# sourceMappingURL=my-currency-list.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCbUgGZ0IsMdjYEuHMscUVprnUV6HrKU7Y",
        authDomain: "cryptocurrencies-b4f03.firebaseapp.com",
        databaseURL: "https://cryptocurrencies-b4f03.firebaseio.com",
        projectId: "cryptocurrencies-b4f03",
        storageBucket: "cryptocurrencies-b4f03.appspot.com",
        messagingSenderId: "568056852563"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map