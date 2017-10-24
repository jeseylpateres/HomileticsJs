webpackJsonp([3],{

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/history/history.module": [
		452,
		2
	],
	"../pages/settings/settings.module": [
		453,
		1
	],
	"../pages/signup/signup.module": [
		454,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotpasswordPage.prototype.reset = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotpasswordPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotpasswordPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    return ForgotpasswordPage;
}());
ForgotpasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgotpassword',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\forgotpassword\forgotpassword.html"*/'<ion-content padding id="forgotpassword">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n        <img src="assets/imgs/logo.png" class="logo"/>\n        <h2>study made fun</h2>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col center text-center col-8>\n        <h1>Forgot your Password?</h1>\n        <h2>Enter your email below to received your password reset instructions</h2>\n      </ion-col>\n      <ion-col col-4></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="email" value="" id="password"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n        <button ion-button block color="bg-homecolor" (click)="reset()">Reset Password</button>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n         Already have an account? <label stack item-center style="color: #1ebe67" color="bg-homecolor" (click)="login()">Log in</label>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n        No account yet? <label stack item-center style="color: #1ebe67" color="bg-homecolor" (click)="signup()">Sign up</label>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\forgotpassword\forgotpassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ForgotpasswordPage);

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__study_input_study_input__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__study_input_study_input__["a" /* StudyInputPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tabs-sml',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Menu" tabIcon="menu"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Add Study" tabIcon="add"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudyInputPage = (function () {
    function StudyInputPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudyInputPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyInputPage');
    };
    return StudyInputPage;
}());
StudyInputPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-study-input',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\study-input\study-input.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>StudyInput</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\nStudy\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\study-input\study-input.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], StudyInputPage);

//# sourceMappingURL=study-input.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    return HistoryPage;
}());
HistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-history',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\history\history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>history</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\history\history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HistoryPage);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(346);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forgotpassword_forgotpassword__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_onboarding_onboarding__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_study_input_study_input__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_history_history__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Basic Pages






// Main Pages



// Others




// Provider

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_study_input_study_input__["a" /* StudyInputPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_onboarding_onboarding__["a" /* OnboardingPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_study_input_study_input__["a" /* StudyInputPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_onboarding_onboarding__["a" /* OnboardingPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibleDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bible_data__ = __webpack_require__(370);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BibleDataService = (function (_super) {
    __extends(BibleDataService, _super);
    function BibleDataService() {
        return _super.call(this) || this;
    }
    /**
     * Get Abbreviation of OLD and New Testament
     *
     *
     * */
    /**
     * Get All Abbreviation of Old and New Testament
     */
    BibleDataService.prototype.getAllAbbvOfOldAndNewTestament = function () {
        var book = [];
        for (var i in this.bookdetails) {
            book.push(this.bookdetails[i].abbv);
        }
        //console.log("ONT - All Abbv Result: " + book);
        return book;
    };
    BibleDataService.prototype.getChapterByIdForOldAndNewTestament = function (id) {
        return this.bookdetails[id].chapters;
    };
    BibleDataService.prototype.getAllChaptersOfOldAndNewTestament = function () {
        var chapters = [];
        for (var i in this.bookdetails) {
            chapters.push(this.bookdetails[i].chapters);
        }
        //console.log("ONT - All Chapter Result: " + chapters);
        return chapters;
    };
    BibleDataService.prototype.getVerseByIdForOldAndNewTestament = function (id) {
        return this.bookdetails[id].verses;
    };
    BibleDataService.prototype.getAllVersesOfOldAndNewTestament = function () {
        var verses = [];
        for (var i in this.bookdetails) {
            verses.push(this.bookdetails[i].verses);
        }
        //console.log("ONT - All Verses Result: " + verses);
        return verses;
    };
    BibleDataService.prototype.getAllTitleOfOldAndNewTestament = function () {
        var title = [];
        for (var i in this.bookdetails) {
            title.push(this.bookdetails[i].title);
        }
        //console.log("ONT - All Title Result: " + title);
        return title;
    };
    BibleDataService.prototype.getTitleByIdForOldAndNewTestament = function (id) {
        return this.bookdetails[id].book;
    };
    BibleDataService.prototype.getTestamentByIdForOldAndNewTestament = function (id) {
        return this.bookdetails[id].testament;
    };
    /**
     * OLD Testament
     *
     *
     *
     * */
    BibleDataService.prototype.getAllAbbvOfOldTestament = function () {
        var book = [];
        for (var i = 0; i <= (this.bookdetails.length - 28); i++) {
            book.push(this.bookdetails[i].abbv);
        }
        //console.log("OT - All Abbv Result: " + book);
        return book;
    };
    BibleDataService.prototype.getChapterByIdForOldTestament = function (id) {
        return this.bookdetails[id].chapters;
    };
    BibleDataService.prototype.getAllChaptersOfOldTestament = function () {
        var chapters = [];
        for (var i = 0; i <= (this.bookdetails.length - 28); i++) {
            chapters.push(this.bookdetails[i].chapters);
        }
        //console.log("OT - All Chapters Result: " + chapters);
        return chapters;
    };
    BibleDataService.prototype.getAllVersesOfOldTestament = function () {
        var verses = [];
        for (var i = 0; i <= (this.bookdetails.length - 28); i++) {
            verses.push(this.bookdetails[i].verses);
        }
        //console.log("OT - All Verses Result: " + verses);
        return verses;
    };
    BibleDataService.prototype.getAllTitleOfOldTestament = function () {
        var title = [];
        for (var i = 0; i <= (this.bookdetails.length - 28); i++) {
            title.push(this.bookdetails[i].title);
        }
        //console.log("OT - All Title Result: " + title);
        return title;
    };
    BibleDataService.prototype.getTitleByIdForOldTestament = function (id) {
        return this.bookdetails[id].book;
    };
    BibleDataService.prototype.getTestamentByIdForOldTestament = function (id) {
        return this.bookdetails[id].testament;
    };
    /**
     * NEW Testament
     *
     *
     * */
    BibleDataService.prototype.getAllAbbvOfNewTestament = function () {
        var book = [];
        for (var i = 39; i <= (this.bookdetails.length - 1); i++) {
            book.push(this.bookdetails[i].abbv);
        }
        //console.log("NT - All Abbv Result: " + book);
        return book;
    };
    BibleDataService.prototype.getChapterByIdForNewTestament = function (id) {
        return this.bookdetails[id].chapters;
    };
    BibleDataService.prototype.getAllChaptersOfNewTestament = function () {
        var chapters = [];
        for (var i = 39; i <= (this.bookdetails.length - 1); i++) {
            chapters.push(this.bookdetails[i].chapters);
        }
        //console.log("NT - All Chapters Result: " + chapters);
        return chapters;
    };
    BibleDataService.prototype.getAllVersesOfNewTestament = function () {
        var verses = [];
        for (var i = 39; i <= (this.bookdetails.length - 1); i++) {
            verses.push(this.bookdetails[i].verses);
        }
        //console.log("NT - All Verses Result: " + verses);
        return verses;
    };
    BibleDataService.prototype.getAllTitleOfNewTestament = function () {
        var title = [];
        for (var i = 39; i <= (this.bookdetails.length - 1); i++) {
            title.push(this.bookdetails[i].title);
        }
        //console.log("NT - All Title Result: " + title);
        return title;
    };
    BibleDataService.prototype.getTitleByIdForNewTestament = function (id) {
        return this.bookdetails[id + 39].book;
    };
    BibleDataService.prototype.getTestamentByIdForNewTestament = function (id) {
        return this.bookdetails[id + 39].testament;
    };
    return BibleDataService;
}(__WEBPACK_IMPORTED_MODULE_0__bible_data__["a" /* BibleData */]));

//# sourceMappingURL=bible-data-service.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibleData; });
var BibleData = (function () {
    function BibleData() {
        /** DATA */
        this.bookdetails = [
            {
                id: 1,
                book: "Genesis",
                abbv: "Gen",
                title: "The First Book of Moses Called Genesis",
                testament: "Old Testament",
                chapters: 50,
                verses: [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 54, 33, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26]
            },
            {
                id: 2,
                book: "Exodus",
                abbv: "Exo",
                title: "The Second Book of Moses Called Exodus",
                testament: "Old Testament",
                chapters: 40,
                verses: [22, 25, 22, 31, 23, 30, 29, 28, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 37, 30, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38]
            },
            {
                id: 3,
                book: "Leviticus",
                abbv: "Lev",
                title: "The Third Book of Moses Called Leviticus",
                testament: "Old Testament",
                chapters: 27,
                verses: [17, 16, 17, 35, 26, 23, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34]
            },
            {
                id: 4,
                book: "Numbers",
                abbv: "Num",
                title: "The Fourth Book of Moses Called Numbers",
                testament: "Old Testament",
                chapters: 36,
                verses: [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 28, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13]
            },
            {
                id: 5,
                book: "Deuteronomy",
                abbv: "Deu",
                title: "The Fifth Book of Moses Called Deuteronomy",
                testament: "Old Testament",
                chapters: 34,
                verses: [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 31, 19, 29, 23, 22, 20, 22, 21, 20, 23, 29, 26, 22, 19, 19, 26, 69, 28, 20, 30, 52, 29, 12]
            },
            {
                id: 6,
                book: "Joshua",
                abbv: "Jos",
                title: "The Book of Joshua",
                testament: "Old Testament",
                chapters: 24,
                verses: [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33]
            },
            {
                id: 7,
                book: "Judges",
                abbv: "Jud",
                title: "The Book of Judges",
                testament: "Old Testament",
                chapters: 21,
                verses: [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25]
            },
            {
                id: 8,
                book: "Ruth",
                abbv: "Rut",
                title: "The Book of Ruth",
                testament: "Old Testament",
                chapters: 4,
                verses: [22, 23, 18, 22]
            },
            {
                id: 9,
                book: "1 Samuel",
                abbv: "1Sa",
                title: "The First Book of Samuel",
                testament: "Old Testament",
                chapters: 31,
                verses: [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 16, 23, 28, 23, 43, 25, 12, 25, 11, 31, 13]
            },
            {
                id: 10,
                book: "2 Samuel",
                abbv: "2Sa",
                title: "The Second Book of Samuel",
                testament: "Old Testament",
                chapters: 24,
                verses: [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 32, 44, 26, 22, 51, 39, 25]
            },
            {
                id: 11,
                book: "1 Kings",
                abbv: "1 Ki",
                title: "The First Book of Kings",
                testament: "Old Testament",
                chapters: 22,
                verses: [53, 46, 28, 20, 32, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 54]
            },
            {
                id: 12,
                book: "2 Kings",
                abbv: "2 Ki",
                title: "The Second Book of Kings",
                testament: "Old Testament",
                chapters: 25,
                verses: [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 20, 22, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30]
            },
            {
                id: 13,
                book: "1 Chronicles",
                abbv: "1 Ch",
                title: "The First Book of Chronicles",
                testament: "Old Testament",
                chapters: 29,
                verses: [54, 55, 24, 43, 41, 66, 40, 40, 44, 14, 47, 41, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30]
            },
            {
                id: 14,
                book: "2 Chronicles",
                abbv: "2 Ch",
                title: "The Second Book of Chronicles",
                testament: "Old Testament",
                chapters: 36,
                verses: [18, 17, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 23, 14, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 26, 23]
            },
            {
                id: 15,
                book: "Ezra",
                abbv: "Ezr",
                title: "The Book of Ezra",
                testament: "Old Testament",
                chapters: 10,
                verses: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44]
            },
            {
                id: 16,
                book: "Nehemiah",
                abbv: "Neh",
                title: "The Book of Nehemiah",
                testament: "Old Testament",
                chapters: 13,
                verses: [11, 20, 38, 17, 19, 19, 72, 18, 37, 40, 36, 47, 31]
            },
            {
                id: 17,
                book: "Esther",
                abbv: "Est",
                title: "The Book of Esther",
                testament: "Old Testament",
                chapters: 10,
                verses: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3, 17, 8, 30, 16, 24, 10]
            },
            {
                id: 18,
                book: "Job",
                abbv: "Job",
                title: "The Book of Job",
                testament: "Old Testament",
                chapters: 42,
                verses: [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 32, 26, 17]
            },
            {
                id: 19,
                book: "Psalms",
                abbv: "Psa",
                title: "The Book of Psalms",
                testament: "Old Testament",
                chapters: 150,
                verses: [6, 12, 8, 8, 12, 10, 17, 18, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 28, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 179, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6]
            },
            {
                id: 20,
                book: "Proverbs",
                abbv: "Pro",
                title: "The Book of Proverbs",
                testament: "Old Testament",
                chapters: 31,
                verses: [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31]
            },
            {
                id: 21,
                book: "Ecclesiastes",
                abbv: "Ecc",
                title: "The Book of Ecclesiastes",
                testament: "Old Testament",
                chapters: 12,
                verses: [18, 26, 22, 17, 19, 12, 29, 17, 18, 20, 10, 14]
            },
            {
                id: 22,
                book: "Song of Solomon",
                abbv: "Son",
                title: "The Song of Songs",
                testament: "Old Testament",
                chapters: 8,
                verses: [17, 17, 11, 16, 16, 12, 14, 14]
            },
            {
                id: 23,
                book: "Isaiah",
                abbv: "Isa",
                title: "The Book of Isaiah",
                testament: "Old Testament",
                chapters: 66,
                verses: [31, 22, 26, 6, 30, 13, 25, 23, 20, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 11, 25, 24]
            },
            {
                id: 24,
                book: "Jeremiah",
                abbv: "Jer",
                title: "The Book of Jeremiah",
                testament: "Old Testament",
                chapters: 52,
                verses: [19, 37, 25, 31, 31, 30, 34, 23, 25, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34]
            },
            {
                id: 25,
                book: "Lamentations",
                abbv: "Lam",
                title: "The Book of Lamentations",
                testament: "Old Testament",
                chapters: 5,
                verses: [22, 22, 66, 22, 22]
            },
            {
                id: 26,
                book: "Ezekiel",
                abbv: "Eze",
                title: "The Book of Ezekiel",
                testament: "Old Testament",
                chapters: 48,
                verses: [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 44, 37, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35]
            },
            {
                id: 27,
                book: "Daniel",
                abbv: "Dan",
                title: "The Book of Daniel",
                testament: "Old Testament",
                chapters: 12,
                verses: [21, 49, 100, 34, 30, 29, 28, 27, 27, 21, 45, 13, 64, 42]
            },
            {
                id: 28,
                book: "Hosea",
                abbv: "Hos",
                title: "The Book of Hosea",
                testament: "Old Testament",
                chapters: 14,
                verses: [9, 25, 5, 19, 15, 11, 16, 14, 17, 15, 11, 15, 15, 10]
            },
            {
                id: 29,
                book: "Joel",
                abbv: "Joe",
                title: "The Book of Joel",
                testament: "Old Testament",
                chapters: 3,
                verses: [20, 27, 5, 21]
            },
            {
                id: 30,
                book: "Amos",
                abbv: "Amo",
                title: "The Book of Amos",
                testament: "Old Testament",
                chapters: 9,
                verses: [15, 16, 15, 13, 27, 14, 17, 14, 15]
            },
            {
                id: 31,
                book: "Obadiah",
                abbv: "Oba",
                title: "The Book of Obadiah",
                testament: "Old Testament",
                chapters: 1,
                verses: [21]
            },
            {
                id: 32,
                book: "Jonah",
                abbv: "Jon",
                title: "The Book of Jonah",
                testament: "Old Testament",
                chapters: 4,
                verses: [16, 11, 10, 11]
            },
            {
                id: 33,
                book: "Micah",
                abbv: "Mic",
                title: "The Book of Micah",
                testament: "Old Testament",
                chapters: 7,
                verses: [16, 13, 12, 14, 14, 16, 20]
            },
            {
                id: 34,
                book: "Nahum",
                abbv: "Nah",
                title: "The Book of Nahum",
                testament: "Old Testament",
                chapters: 3,
                verses: [14, 14, 19]
            },
            {
                id: 35,
                book: "Habakkuk",
                abbv: "Hab",
                title: "The Book of Habakkuk",
                testament: "Old Testament",
                chapters: 3,
                verses: [17, 20, 19]
            },
            {
                id: 36,
                book: "Zephaniah",
                abbv: "Zep",
                title: "The Book of Zephaniah",
                testament: "Old Testament",
                chapters: 3,
                verses: [18, 15, 20]
            },
            {
                id: 37,
                book: "Haggai",
                abbv: "Hag",
                title: "The Book of Haggai",
                testament: "Old Testament",
                chapters: 2,
                verses: [15, 23]
            },
            {
                id: 38,
                book: "Zechariah",
                abbv: "Zech",
                title: "The Book of Zechariah",
                testament: "Old Testament",
                chapters: 14,
                verses: [17, 17, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21]
            },
            {
                id: 39,
                book: "Malachi",
                abbv: "Mal",
                title: "The Book of Malachi",
                testament: "Old Testament",
                chapters: 4,
                verses: [14, 17, 18, 6]
            },
            {
                id: 40,
                book: "Matthew",
                abbv: "Mat",
                title: "The Gospel According to Matthew",
                testament: "New Testament",
                chapters: 28,
                verses: [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20]
            },
            {
                id: 41,
                book: "Mark",
                abbv: "Mar",
                title: "The Gospel According to Mark",
                testament: "New Testament",
                chapters: 16,
                verses: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20]
            },
            {
                id: 42,
                book: "Luke",
                abbv: "Luk",
                title: "The Gospel According to Luke",
                testament: "New Testament",
                chapters: 24,
                verses: [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53]
            },
            {
                id: 43,
                book: "John",
                abbv: "Joh",
                title: "The Gospel According to John",
                testament: "New Testament",
                chapters: 21,
                verses: [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25]
            },
            {
                id: 44,
                book: "Acts",
                abbv: "Act",
                title: "The Acts of the Apostles",
                testament: "New Testament",
                chapters: 28,
                verses: [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 40, 38, 40, 30, 35, 27, 27, 32, 44, 31]
            },
            {
                id: 45,
                book: "Romans",
                abbv: "Rom",
                title: "The Epistle of Paul to the Romans",
                testament: "New Testament",
                chapters: 16,
                verses: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27]
            },
            {
                id: 46,
                book: "1 Corinthians",
                abbv: "1 Co",
                title: "The First Epistle of Paul to the Corinthians",
                testament: "New Testament",
                chapters: 16,
                verses: [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24]
            },
            {
                id: 47,
                book: "2 Corinthians",
                abbv: "2 Co",
                title: "The Second Epistle of Paul to the Corinthians",
                testament: "New Testament",
                chapters: 13,
                verses: [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 13]
            },
            {
                id: 48,
                book: "Galatians",
                abbv: "Gal",
                title: "The Epistle of Paul to the Galatians",
                testament: "New Testament",
                chapters: 6,
                verses: [24, 21, 29, 31, 26, 18]
            },
            {
                id: 49,
                book: "Ephesians",
                abbv: "Eph",
                title: "The Epistle of Paul to the Ephesians",
                testament: "New Testament",
                chapters: 6,
                verses: [23, 22, 21, 32, 33, 24]
            },
            {
                id: 50,
                book: "Philippians",
                abbv: "Phil",
                title: "The Epistle of Paul to the Philippians",
                testament: "New Testament",
                chapters: 4,
                verses: [30, 30, 21, 23]
            },
            {
                id: 51,
                book: "Colossians",
                abbv: "Col",
                title: "The Epistle of Paul to the Colossians",
                testament: "New Testament",
                chapters: 4,
                verses: [29, 23, 25, 18]
            },
            {
                id: 52,
                book: "1 Thessalonians",
                abbv: "1 Th",
                title: "The First Epistle of Paul to the Thessalonians",
                testament: "New Testament",
                chapters: 5,
                verses: [10, 20, 13, 18, 28]
            },
            {
                id: 53,
                book: "2 Thessalonians",
                abbv: "2 Th",
                title: "The Second Epistle of Paul to the Thessalonians",
                testament: "New Testament",
                chapters: 3,
                verses: [12, 17, 18]
            },
            {
                id: 54,
                book: "1 Timothy",
                abbv: "1 Ti",
                title: "The First Epistle of Paul to Timothy",
                testament: "New Testament",
                chapters: 6,
                verses: [20, 15, 16, 16, 25, 21]
            },
            {
                id: 55,
                book: "2 Timothy",
                abbv: "2 Ti",
                title: "The Second Epistle of Paul to Timothy",
                testament: "New Testament",
                chapters: 4,
                verses: [18, 26, 17, 22]
            },
            {
                id: 56,
                book: "Titus",
                abbv: "Tit",
                title: "The Epistle of Paul to Titus",
                testament: "New Testament",
                chapters: 3,
                verses: [16, 15, 15]
            },
            {
                id: 57,
                book: "Philemon",
                abbv: "Phm",
                title: "The Epistle of Paul to Philemon",
                testament: "New Testament",
                chapters: 4,
                verses: [25]
            },
            {
                id: 58,
                book: "Hebrews",
                abbv: "Heb",
                title: "The Epistle to the Hebrews",
                testament: "New Testament",
                chapters: 13,
                verses: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25]
            },
            {
                id: 59,
                book: "James",
                abbv: "Jam",
                title: "The General Epistle of James",
                testament: "New Testament",
                chapters: 5,
                verses: [27, 26, 18, 17, 20]
            },
            {
                id: 60,
                book: "1 Peter",
                abbv: "1 Pe",
                title: "The First Epistle of Peter",
                testament: "New Testament",
                chapters: 5,
                verses: [25, 25, 22, 19, 14]
            },
            {
                id: 61,
                book: "2 Peter",
                abbv: "2 Pe",
                title: "The Second Epistle of Peter",
                testament: "New Testament",
                chapters: 3,
                verses: [21, 22, 18]
            },
            {
                id: 62,
                book: "1 John",
                abbv: "1 Jo",
                title: "The First Epistle of John",
                testament: "New Testament",
                chapters: 5,
                verses: [10, 29, 24, 21, 21]
            },
            {
                id: 63,
                book: "2 John",
                abbv: "2 Jo",
                title: "The Second Epistle of John",
                testament: "New Testament",
                chapters: 1,
                verses: [13]
            },
            {
                id: 64,
                book: "3 John",
                abbv: "3 Jo",
                title: "The Third Epistle of John",
                testament: "New Testament",
                chapters: 1,
                verses: [15]
            },
            {
                id: 65,
                book: "Jude",
                abbv: "Jud",
                title: "The Epistle of Jude",
                testament: "New Testament",
                chapters: 1,
                verses: [25]
            },
            {
                id: 66,
                book: "Revelation",
                abbv: "Rev",
                title: "The Apocalypse of John",
                testament: "New Testament",
                chapters: 22,
                verses: [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21]
            }
        ];
    }
    return BibleData;
}());

//# sourceMappingURL=bible-data.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            //splashScreen.hide();
            splashScreen.show();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnboardingPage = (function () {
    function OnboardingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.skipMsg = "Skip";
    }
    OnboardingPage.prototype.skip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    OnboardingPage.prototype.slideChange = function () {
        if (this.slides.isEnd()) {
            this.skipMsg = "Lets get started!";
        }
    };
    return OnboardingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], OnboardingPage.prototype, "slides", void 0);
OnboardingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-onboarding',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\onboarding\onboarding.html"*/'<ion-content padding id="onboarding">\n  <ion-slide pager (ionSlideDidChange)="slideChange()">\n    <ion-slide>\n      <div class="diag" color="bg-homecolor">\n        <ion-icon ios="ios-trophy" md="md-trophy" color="primary"></ion-icon>\n      </div>\n      <div>\n        <h2>3.1 Onboarding</h2>\n        <p>this is onboarding page.</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      3.2\n    </ion-slide>\n    <ion-slide>\n      3.3\n    </ion-slide>\n    <ion-slide>\n      3.4\n    </ion-slide>\n  </ion-slide>\n  <button (click)="skip()" id="skip">Next</button>\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\onboarding\onboarding.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], OnboardingPage);

//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 210,
	"./af.js": 210,
	"./ar": 211,
	"./ar-dz": 212,
	"./ar-dz.js": 212,
	"./ar-kw": 213,
	"./ar-kw.js": 213,
	"./ar-ly": 214,
	"./ar-ly.js": 214,
	"./ar-ma": 215,
	"./ar-ma.js": 215,
	"./ar-sa": 216,
	"./ar-sa.js": 216,
	"./ar-tn": 217,
	"./ar-tn.js": 217,
	"./ar.js": 211,
	"./az": 218,
	"./az.js": 218,
	"./be": 219,
	"./be.js": 219,
	"./bg": 220,
	"./bg.js": 220,
	"./bn": 221,
	"./bn.js": 221,
	"./bo": 222,
	"./bo.js": 222,
	"./br": 223,
	"./br.js": 223,
	"./bs": 224,
	"./bs.js": 224,
	"./ca": 225,
	"./ca.js": 225,
	"./cs": 226,
	"./cs.js": 226,
	"./cv": 227,
	"./cv.js": 227,
	"./cy": 228,
	"./cy.js": 228,
	"./da": 229,
	"./da.js": 229,
	"./de": 230,
	"./de-at": 231,
	"./de-at.js": 231,
	"./de-ch": 232,
	"./de-ch.js": 232,
	"./de.js": 230,
	"./dv": 233,
	"./dv.js": 233,
	"./el": 234,
	"./el.js": 234,
	"./en-au": 235,
	"./en-au.js": 235,
	"./en-ca": 236,
	"./en-ca.js": 236,
	"./en-gb": 237,
	"./en-gb.js": 237,
	"./en-ie": 238,
	"./en-ie.js": 238,
	"./en-nz": 239,
	"./en-nz.js": 239,
	"./eo": 240,
	"./eo.js": 240,
	"./es": 241,
	"./es-do": 242,
	"./es-do.js": 242,
	"./es.js": 241,
	"./et": 243,
	"./et.js": 243,
	"./eu": 244,
	"./eu.js": 244,
	"./fa": 245,
	"./fa.js": 245,
	"./fi": 246,
	"./fi.js": 246,
	"./fo": 247,
	"./fo.js": 247,
	"./fr": 248,
	"./fr-ca": 249,
	"./fr-ca.js": 249,
	"./fr-ch": 250,
	"./fr-ch.js": 250,
	"./fr.js": 248,
	"./fy": 251,
	"./fy.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./he": 255,
	"./he.js": 255,
	"./hi": 256,
	"./hi.js": 256,
	"./hr": 257,
	"./hr.js": 257,
	"./hu": 258,
	"./hu.js": 258,
	"./hy-am": 259,
	"./hy-am.js": 259,
	"./id": 260,
	"./id.js": 260,
	"./is": 261,
	"./is.js": 261,
	"./it": 262,
	"./it.js": 262,
	"./ja": 263,
	"./ja.js": 263,
	"./jv": 264,
	"./jv.js": 264,
	"./ka": 265,
	"./ka.js": 265,
	"./kk": 266,
	"./kk.js": 266,
	"./km": 267,
	"./km.js": 267,
	"./kn": 268,
	"./kn.js": 268,
	"./ko": 269,
	"./ko.js": 269,
	"./ky": 270,
	"./ky.js": 270,
	"./lb": 271,
	"./lb.js": 271,
	"./lo": 272,
	"./lo.js": 272,
	"./lt": 273,
	"./lt.js": 273,
	"./lv": 274,
	"./lv.js": 274,
	"./me": 275,
	"./me.js": 275,
	"./mi": 276,
	"./mi.js": 276,
	"./mk": 277,
	"./mk.js": 277,
	"./ml": 278,
	"./ml.js": 278,
	"./mr": 279,
	"./mr.js": 279,
	"./ms": 280,
	"./ms-my": 281,
	"./ms-my.js": 281,
	"./ms.js": 280,
	"./my": 282,
	"./my.js": 282,
	"./nb": 283,
	"./nb.js": 283,
	"./ne": 284,
	"./ne.js": 284,
	"./nl": 285,
	"./nl-be": 286,
	"./nl-be.js": 286,
	"./nl.js": 285,
	"./nn": 287,
	"./nn.js": 287,
	"./pa-in": 288,
	"./pa-in.js": 288,
	"./pl": 289,
	"./pl.js": 289,
	"./pt": 290,
	"./pt-br": 291,
	"./pt-br.js": 291,
	"./pt.js": 290,
	"./ro": 292,
	"./ro.js": 292,
	"./ru": 293,
	"./ru.js": 293,
	"./sd": 294,
	"./sd.js": 294,
	"./se": 295,
	"./se.js": 295,
	"./si": 296,
	"./si.js": 296,
	"./sk": 297,
	"./sk.js": 297,
	"./sl": 298,
	"./sl.js": 298,
	"./sq": 299,
	"./sq.js": 299,
	"./sr": 300,
	"./sr-cyrl": 301,
	"./sr-cyrl.js": 301,
	"./sr.js": 300,
	"./ss": 302,
	"./ss.js": 302,
	"./sv": 303,
	"./sv.js": 303,
	"./sw": 304,
	"./sw.js": 304,
	"./ta": 305,
	"./ta.js": 305,
	"./te": 306,
	"./te.js": 306,
	"./tet": 307,
	"./tet.js": 307,
	"./th": 308,
	"./th.js": 308,
	"./tl-ph": 309,
	"./tl-ph.js": 309,
	"./tlh": 310,
	"./tlh.js": 310,
	"./tr": 311,
	"./tr.js": 311,
	"./tzl": 312,
	"./tzl.js": 312,
	"./tzm": 313,
	"./tzm-latn": 314,
	"./tzm-latn.js": 314,
	"./tzm.js": 313,
	"./uk": 315,
	"./uk.js": 315,
	"./ur": 316,
	"./ur.js": 316,
	"./uz": 317,
	"./uz-latn": 318,
	"./uz-latn.js": 318,
	"./uz.js": 317,
	"./vi": 319,
	"./vi.js": 319,
	"./x-pseudo": 320,
	"./x-pseudo.js": 320,
	"./yo": 321,
	"./yo.js": 321,
	"./zh-cn": 322,
	"./zh-cn.js": 322,
	"./zh-hk": 323,
	"./zh-hk.js": 323,
	"./zh-tw": 324,
	"./zh-tw.js": 324
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 431;

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.login = function () {
        //navCtrl.push(TabsPage, {}, {animate: false});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.forgotpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\login\login.html"*/'<ion-content padding id="login">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n        <img src="assets/imgs/logo.png" class="logo"/>\n        <h2>study made fun</h2>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!--<form [ngFormModel]="authForm" (ngSubmit)="onSubmit(authForm.value)">-->\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input text="text" value="" id="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Password</ion-label>\n          <ion-input type="password" value="" id="password"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n        <button ion-button block color="bg-homecolor" (click)="login()">Log in</button>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n        <ion-list no-lines>\n         No account yet? <label stack item-center style="color: #1ebe67" (click)="signup()">Sign up</label>\n       </ion-list>\n       <ion-list>\n        <ion-label stacked color="bg-homecolor" (click)="forgotpassword()">Forgot Password?</ion-label>\n       </ion-list>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n<!--</form>-->\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_bible_bible_data_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(87);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, app) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.app = app;
        _this.segmentbook1 = "entirebible";
        _this.completeStudies = 2;
        _this.ongoingStudies = 5;
        _this.quizes = 0;
        _this.totalStudies = 0;
        _this.percentageCompletion = 0;
        _this.bibleTitleForONT = _this.getTitleByIdForOldAndNewTestament(0);
        _this.bibleTitleForOT = _this.getTitleByIdForOldTestament(0);
        _this.bibleTitleForNT = _this.getTitleByIdForNewTestament(0);
        _this.setAllChapterOfOldAndNewT = _this.getAllChaptersOfOldAndNewTestament();
        _this.setAllChapterOfOldT = _this.getAllChaptersOfOldTestament();
        _this.setAllChapterOfNewT = _this.getAllChaptersOfNewTestament();
        /**
         * Common for All BarChart
         * ONT - Old and New Testament
         * OT - Old Testament
         * NT - New Testament
         */
        _this.BarChartType = 'bar';
        _this.BarChartLegend = false;
        _this.BarChartColors = [
            {
                backgroundColor: 'rgba(61, 163, 108, 1)',
                borderColor: 'rgba(61, 163, 108, 1)'
            }
        ];
        /**
         * ENTIRE TESTAMENT : Start ===============================================
         */
        // Options for Bar Chart - ONT
        _this.BarChartOptionsForOldAndNew = {
            scaleShowVerticalLines: false,
            responsive: false,
            //maintainAspectRatio: true,
            title: {
                display: false,
                text: 'ENTIRE BIBLE'
            },
            scales: {
                xAxes: [{
                        stacked: true
                    }],
                yAxes: [{
                        stacked: false
                    }]
            }
        };
        // DataSet for Bar Chart - ONT
        _this.BarChartDataSetForOldAndNew = [
            {
                label: 'Complete Study',
                data: [
                    20, 40, 0, 10, 0, 0, 21, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
                    10, 2, 20, 0, 0, 0, 0, 0, 3, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 1, 1, 1, 1, 1
                ]
            },
            {
                label: 'Total Chapter',
                data: _this.setAllChapterOfOldAndNewT
            }
        ];
        // Labels for Bar Chart - ONT
        _this.BarChartLabelsForOldAndNew = _this.getAllAbbvOfOldAndNewTestament();
        // ENTIRE TESTAMENT : END ===============================================
        // OLD TESTAMENT : START ================================================
        // Options for Bar Chart - OT
        _this.BarChartOptionsForOld = {
            scaleShowVerticalLines: false,
            responsive: false,
            //maintainAspectRatio: true,
            title: {
                display: false,
                text: 'OLD TESTAMENT'
            },
            scales: {
                xAxes: [{
                        stacked: true
                    }],
                yAxes: [{
                        stacked: false
                    }]
            }
        };
        // DataSet for Bar Chart - OT
        _this.BarChartDataSetForOld = [
            {
                label: 'Complete Study',
                data: [
                    20, 0, 0, 10, 0, 0, 21, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 2, 2, 2, 2
                ]
            },
            {
                label: 'Total Chapter',
                data: _this.setAllChapterOfOldT
            }
        ];
        // Labels for Bar Chart - OT
        _this.BarChartLabelsForOld = _this.getAllAbbvOfOldTestament();
        // OLD TESTAMENT : END ================================================
        // NEW TESTAMENT : START ================================================
        // Options for Bar Chart - NT
        _this.BarChartOptionsForNew = {
            scaleShowVerticalLines: false,
            responsive: false,
            //maintainAspectRatio: true,
            title: {
                display: false,
                text: 'OLD TESTAMENT'
            },
            scales: {
                xAxes: [{
                        stacked: true
                    }],
                yAxes: [{
                        stacked: false
                    }]
            }
        };
        // DataSet for Bar Chart - NT
        _this.BarChartDataSetForNew = [
            {
                label: 'Complete Study',
                data: [
                    5, 10, 2, 20, 0, 0, 0, 0, 0, 3,
                    0, 0, 0, 0, 0, 0, 0, 0, 11, 0,
                    0, 0, 0, 0, 0, 0, 10
                ]
            },
            {
                label: 'Total Chapter',
                data: _this.setAllChapterOfNewT
            }
        ];
        // Labels for Bar Chart - NT
        _this.BarChartLabelsForNew = _this.getAllAbbvOfNewTestament();
        _this.bibleTestament = _this.getTestamentByIdForOldAndNewTestament(0);
        console.log(_this.bibleTestament);
        return _this;
    }
    // Events: Click for Bar Chart - ONT
    HomePage.prototype.clickChartForOldAndNew = function (e) {
        //console.log(e);
        var x = e.active[0];
        if (x !== undefined) {
            this.setStudy(x._index, this.BarChartDataSetForOldAndNew[0].data[x._index], this.BarChartDataSetForOldAndNew[1].data[x._index], State.OldAndNewTestament);
        }
    };
    // Events: Howevered for Bar Chart - ONT
    HomePage.prototype.howeveredChartForOldAndNew = function (e) {
        console.log("HowverResult: " + e);
    };
    HomePage.prototype.randomize = function (segment) {
        // Only Change 3 values
        var data = [
            Math.round((Math.random() * 100) % 50),
            10,
            0,
            Math.round((Math.random() * 100) % 36),
            0,
            Math.round((Math.random() * 100) % 24),
            21,
            4,
            Math.round((Math.random() * 100) % 20),
            3,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
            10, 2, 20, 0, 0, 0, 0, 0, 3, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1, 1, 1, 1, 1
        ];
        var clone = JSON.parse(JSON.stringify(this.BarChartDataSetForOldAndNew));
        clone[0].data = data;
        this.BarChartDataSetForOldAndNew = clone;
        //this.BarChartDataSetForNew = clone;
        //this.BarChartDataSetForOld = clone;
        switch (segment) {
            case 1:
                this.bibleTestament = this.getTestamentByIdForOldAndNewTestament(0);
                break;
            case 2:
                this.bibleTestament = this.getTestamentByIdForOldTestament(0);
                break;
            case 3:
                this.bibleTestament = this.getTestamentByIdForNewTestament(0);
            default:
                break;
        }
    };
    // Events: Click for Bar Chart - OT
    HomePage.prototype.clickChartForOld = function (e) {
        console.log(e);
        var x = e.active[0];
        if (x !== undefined) {
            console.log("Bar #: " + x._index);
            console.log(x._model.datasetLabel);
            console.log(x._model.label);
            this.completeStudies = x._index;
            console.log("getBarChartLevel: " + this.BarChartLabelsForOldAndNew[x._index]);
            this.setStudy(x._index, this.BarChartDataSetForOld[0].data[x._index], this.BarChartDataSetForOld[1].data[x._index], State.OldTestament);
        }
    };
    // Events: Howevered for Bar Chart - ONT
    HomePage.prototype.howeveredChartForOld = function (e) {
        console.log("HowverResult: " + e);
    };
    // Events: Click for Bar Chart - NT
    HomePage.prototype.clickChartForNew = function (e) {
        console.log(e);
        var x = e.active[0];
        if (x !== undefined) {
            console.log("Bar #: " + x._index);
            console.log(x._model.datasetLabel);
            console.log(x._model.label);
            this.completeStudies = x._index;
            console.log("getBarChartLevel: " + this.BarChartLabelsForOldAndNew[x._index]);
            this.setStudy(x._index, this.BarChartDataSetForNew[0].data[x._index], this.BarChartDataSetForNew[1].data[x._index], State.NewTestament);
        }
    };
    // Events: Howevered for Bar Chart - NT
    HomePage.prototype.howeveredChartForNew = function (e) {
        console.log("HowverResult: " + e);
    };
    // NEW TESTAMENT : END ================================================
    HomePage.prototype.menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    HomePage.prototype.setStudy = function (index, completestudy, totalchapter, state) {
        var ongoingstudy = totalchapter - completestudy;
        var getdecimalvalue = completestudy / totalchapter;
        var percentagecompletion;
        if (getdecimalvalue < 0) {
            percentagecompletion = 0;
        }
        else {
            percentagecompletion = Math.floor((getdecimalvalue) * 100);
        }
        this.completeStudies = completestudy;
        this.ongoingStudies = ongoingstudy;
        this.totalStudies = totalchapter;
        this.percentageCompletion = percentagecompletion;
        // set book title per sergment
        switch (state) {
            case 1:
                this.bibleTestament = this.getTestamentByIdForOldAndNewTestament(index);
                this.bibleTitleForONT = this.getTitleByIdForOldAndNewTestament(index);
                break;
            case 2:
                this.bibleTestament = this.getTestamentByIdForOldTestament(index);
                this.bibleTitleForOT = this.getTitleByIdForOldTestament(index);
                break;
            case 3:
                this.bibleTestament = this.getTestamentByIdForNewTestament(index);
                this.bibleTitleForNT = this.getTitleByIdForNewTestament(index);
            default:
                break;
        }
    };
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_2__model_bible_bible_data_service__["a" /* BibleDataService */]));
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\home\home.html"*/'<ion-content padding id="home">\n    <!-- HEADER -->\n    <!--\n      Completed Studies\n      Ongoing Studies\n      Quizes (Coming Soon)\n    -->\n    <!-- GROUP A : ROW 1 -->\n    <ion-grid class="study-summary">\n        <!-- TABLE HEADER -->\n        <div class="table-study-head-list">\n            <ion-row>\n                <ion-col col-4>\n                  <div class="text-result">{{ completeStudies }}</div>\n                  <div>Completed Studies</div>\n                </ion-col>\n                <ion-col col-4>\n                  <div class="text-result">{{ ongoingStudies }}</div>\n                  <div>ONGOING STUDIES</div>\n                </ion-col>\n                <ion-col col-4>\n                  <div class="text-result">{{ quizes }}</div>\n                  <div>QUIZES (Coming Soon)</div>\n                </ion-col>\n            </ion-row>\n        </div><!-- (eEND) TABLE HEADER -->\n    </ion-grid>\n\n\n    <!-- SEGMENT -->\n    <div padding>\n      <ion-segment [(ngModel)]="segmentbook1">\n        <ion-segment-button value="entirebible" (click)="randomize(1)">\n          <h6>ENTIRE BIBLES</h6>\n        </ion-segment-button>\n        <ion-segment-button value="oldtestament" (click)="randomize(2)">\n          <h6>OLD TESTAMENT</h6>\n        </ion-segment-button>\n        <ion-segment-button value="newtestament" (click)="randomize(3)">\n          <h6>NEW TESTAMENT</h6>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="segmentbook1">\n        <!-- SEGMENT A : ENTIRE TESTAMENT -->\n        <ion-list *ngSwitchCase="\'entirebible\'">\n\n            <div class="chart-content">\n                <div class="canvas-content">\n                    <canvas baseChart width="3500" height="200%"\n                        [chartType]="BarChartType"\n                        [legend]="BarChartLegend"\n                        [colors]="BarChartColors"\n                        [options]="BarChartOptionsForOldAndNew"\n\n                        [datasets]="BarChartDataSetForOldAndNew"\n                        [labels]="BarChartLabelsForOldAndNew"\n                        (chartHover)="howeveredChartForOldAndNew($event)"\n                        (chartClick)="clickChartForOldAndNew($event)">\n                    </canvas>\n                </div>\n            </div>\n        \n          \n        \n            <!-- GROUP C : book content, table list -->\n            <div id="entirebook-col1-row3">\n                <div class="table-study-header-list" padding>\n                <div class="bible-testament">{{ bibleTestament | uppercase }}</div>\n                <div class="bible-title"><strong>{{ bibleTitleForONT }}</strong></div>\n                <div class="div-study-status-detail">{{ totalStudies }} Studies * {{ completeStudies }} Completed ({{ percentageCompletion }} %)</div>\n            </div>\n\n            <!-- Header of Study List -->\n            <ion-grid class="table-content">\n                <!-- TABLE HEADER -->\n                <div class="table-study-head-list">\n                    <ion-row>\n                        <ion-col col-1>#</ion-col>\n                        <ion-col>\n                            <strong>Reference</strong>\n                        </ion-col>\n                        <ion-col col-6>\n                            <strong>Overall Subject Sentence</strong>\n                        </ion-col>\n                        <ion-col col-2></ion-col>\n                    </ion-row>\n                </div><!-- (END) TABLE HEADER -->\n                <!-- TABLE BODY -->\n                <div class="table-study-body-list">\n                    <ion-row>\n                        <ion-col col-1>\n                            <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                        </ion-col>\n                        <ion-col>\n                            Acts 1:1-26\n                        </ion-col>\n                        <ion-col col-6>\n                            Jesus Taken Up Into Heaven\n                        </ion-col>\n                        <ion-col col-2>\n                            2 days ago\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-1>\n                            <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                        </ion-col>\n                        <ion-col>\n                            Acts 1:1-26\n                        </ion-col>\n                        <ion-col col-6>\n                            Jesus Taken Up Into Heaven\n                        </ion-col>\n                        <ion-col col-2>\n                            2 days ago\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-1>\n                            <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                        </ion-col>\n                        <ion-col>\n                            Acts 1:1-26\n                        </ion-col>\n                        <ion-col col-6>\n                            Jesus Taken Up Into Heaven\n                        </ion-col>\n                        <ion-col col-2>\n                            2 days ago\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-1>\n                            <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                        </ion-col>\n                        <ion-col>\n                            Acts 1:1-26\n                        </ion-col>\n                        <ion-col col-6>\n                            Jesus Taken Up Into Heaven\n                        </ion-col>\n                        <ion-col col-2>\n                            2 days ago\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-1>\n                            <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                        </ion-col>\n                        <ion-col>\n                            Acts 1:1-26\n                        </ion-col>\n                        <ion-col col-6>\n                            Jesus Taken Up Into Heaven\n                        </ion-col>\n                        <ion-col col-2>\n                            2 days ago\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-1>\n                            <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                        </ion-col>\n                        <ion-col>\n                            Acts 1:1-26\n                        </ion-col>\n                        <ion-col col-6>\n                            Jesus Taken Up Into Heaven\n                        </ion-col>\n                        <ion-col col-2>\n                            2 days ago\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-1>\n                            <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                        </ion-col>\n                        <ion-col>\n                            Acts 1:1-26\n                        </ion-col>\n                        <ion-col col-6>\n                            Jesus Taken Up Into Heaven\n                        </ion-col>\n                        <ion-col col-2>\n                            2 days ago\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </ion-grid><!-- (END) Header of Study List -->\n        </div><!-- (END) ENTIRE TABLE : ROW1 -->\n      </ion-list><!-- (END) SEGMENT A : ENTIRE TESTAMENT -->\n      \n\n      \n      <!-- SEGMENT B : OLD Testament -->\n      <ion-list *ngSwitchCase="\'oldtestament\'">\n          <div class="chart-content">\n            <div class="canvas-content">\n              <canvas baseChart width="2000" height="200%"\n                  [chartType]="BarChartType"\n                  [legend]="BarChartLegend"\n                  [colors]="BarChartColors"\n                  [options]="BarChartOptionsForOld"\n\n                  [labels]="BarChartLabelsForOld"\n                  [datasets]="BarChartDataSetForOld"\n                  (chartHover)="howeveredChartForOld($event)"\n                  (chartClick)="clickChartForOld($event)">\n              </canvas>\n            </div>\n          </div>\n        \n          \n        \n        <!-- GROUP C : book content, table list -->\n        <div id="entirebook-col1-row3">\n          <div class="table-study-header-list" padding>\n            <div class="bible-testament">{{ bibleTestament | uppercase }}</div>\n            <div class="bible-title"><strong>{{ bibleTitleForOT }}</strong></div>\n            <div class="div-study-status-detail">{{ totalStudies }} Studies * {{ completeStudies }} Completed ({{ percentageCompletion }} %)</div>\n          </div>\n\n          <!-- Header of Study List -->\n          <ion-grid class="table-content">\n              <!-- TABLE HEADER -->\n              <div class="table-study-head-list">\n                  <ion-row>\n                      <ion-col col-1>#</ion-col>\n                      <ion-col>\n                          <strong>Reference</strong>\n                      </ion-col>\n                      <ion-col col-6>\n                          <strong>Overall Subject Sentence</strong>\n                      </ion-col>\n                      <ion-col col-2></ion-col>\n                  </ion-row>\n              </div><!-- (END) TABLE HEADER -->\n              <!-- TABLE BODY -->\n              <div class="table-study-body-list">\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n              </div>\n          </ion-grid><!-- (END) Header of Study List -->\n        </div><!-- (END) ENTIRE TABLE : ROW1 -->\n      </ion-list><!-- (END) SEGMENT B : OLD Testament -->\n\n\n\n      <!-- SEGMENT C : NEW Testament -->\n      <ion-list *ngSwitchCase="\'newtestament\'">\n            \n            <div class="chart-content">\n                <div class="canvas-content">\n                    <canvas baseChart width="1500" height="200%"\n                        [chartType]="BarChartType"\n                        [legend]="BarChartLegend"\n                        [colors]="BarChartColors"\n                        [options]="BarChartOptionsForNew"\n\n                        [datasets]="BarChartDataSetForNew"\n                        [labels]="BarChartLabelsForNew"\n                        (chartHover)="howeveredChartForNew($event)"\n                        (chartClick)="clickChartForNew($event)">\n                    </canvas>\n                </div>\n            </div>\n          \n            \n          \n          <!-- GROUP C : book content, table list -->\n          <div id="entirebook-col1-row3">\n            <div class="table-study-header-list" padding>\n              <div class="bible-testament">{{ bibleTestament | uppercase }}</div>\n              <div class="bible-title"><strong>{{ bibleTitleForNT }}</strong></div>\n              <div class="div-study-status-detail">{{ totalStudies }} Studies * {{ completeStudies }} Completed ({{ percentageCompletion }} %)</div>\n            </div>\n  \n            <!-- Header of Study List -->\n            <ion-grid class="table-content">\n                <!-- TABLE HEADER -->\n                <div class="table-study-head-list">\n                    <ion-row>\n                        <ion-col col-1>#</ion-col>\n                        <ion-col>\n                            <strong>Reference</strong>\n                        </ion-col>\n                        <ion-col col-6>\n                            <strong>Overall Subject Sentence</strong>\n                        </ion-col>\n                        <ion-col col-2></ion-col>\n                    </ion-row>\n                </div><!-- (END) TABLE HEADER -->\n                <!-- TABLE BODY -->\n                <div class="table-study-body-list">\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                </div>\n            </ion-grid><!-- (END) Header of Study List -->\n          </div><!-- (END) ENTIRE TABLE : ROW1 -->\n      </ion-list><!-- (END) SEGMENT C : NEW Testament -->\n    </div>\n\n    <!-- end-->\n\n  <!-- Button -->\n  <div class="button-study">\n    <ion-row>\n        <ion-col col-1></ion-col>\n        <ion-col center text-center col-10>\n        <button ion-button round large color="bg-homecolor" (click)="menu()">Start a New Study</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], HomePage);

var State;
(function (State) {
    State[State["OldAndNewTestament"] = 1] = "OldAndNewTestament";
    State[State["OldTestament"] = 2] = "OldTestament";
    State[State["NewTestament"] = 3] = "NewTestament";
})(State || (State = {}));
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = { "name": "", "email": "", "password": "" };
    }
    SignupPage.prototype.signup = function () {
        //authService
        // here...
        //redirect to LoginPage
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\signup\signup.html"*/'<ion-content padding id="signup">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n        <img src="assets/imgs/logo.png" class="logo"/>\n        <h2>study made fun</h2>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col center text-center col-10>\n\n        <ion-item>\n          <ion-label stacked>Name</ion-label>\n          <ion-input type="text" [(ngModel)]="userData.name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="text" [(ngModel)]="userData.email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n        </ion-item>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1></ion-col>\n	     <ion-col center text-center col-10>\n  		   I agree to the <a href="#">Terms and Conditions </a>\n         <button ion-button full  color="bg-homecolor" (click)="signup()" type="submit">Sign up</button>\n         Already have an account?<ion-label stacked color="bg-homecolor" (click)="login()">Login Page</ion-label>\n         </ion-col>\n	   <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    MenuPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MenuPage.prototype.others = function () {
        var msg = "OTHER PAGE";
        console.log(msg);
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-menu',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\menu\menu.html"*/'\n<ion-content padding id="menu">\n  <ion-grid>\n    <ion-list>\n        <button ion-item block menuToggle text-center color="bg-homecolor-dark" (click)="home()">Home</button>\n        <button ion-item block menuToggle text-center color="bg-homecolor-dark" (click)="others()">History</button>\n        <button ion-item block menuToggle text-center color="bg-homecolor-dark" (click)="others()">Profile</button>\n        <button ion-item block menuToggle text-center color="bg-homecolor-dark" (click)="others()">Settings</button>\n        <button ion-item block menuToggle text-center color="bg-homecolor-dark" (click)="login()">Logout</button>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map