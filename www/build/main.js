webpackJsonp([4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/history/history.module": [
		450,
		3
	],
	"../pages/profile/profile.module": [
		451,
		2
	],
	"../pages/settings/settings.module": [
		452,
		1
	],
	"../pages/signup/signup.module": [
		453,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(110);
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
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Menu" tabIcon="menu"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Add Study" tabIcon="add"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forgotpassword_forgotpassword__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_onboarding_onboarding__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_history_history__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__ = __webpack_require__(447);
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
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
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
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
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

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(206);
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

/***/ 395:
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

/***/ 429:
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
webpackContext.id = 429;

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(449);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(162);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.segmentbook1 = "entirebible";
        this.completeStudies = 2;
        this.ongoingStudies = 5;
        this.quizes = 0;
        this.totalStudies = 0;
        this.percentageCompletion = 0;
        this.bibleTitleBook = "The First Book of Moses Called Genesis";
        this.bibleTitleBookOT = "The First Book of Moses Called Genesis";
        this.bibleTitleBookNT = "The Gospel According to Matthew";
        // ENTIRE TESTAMENT : Start ===============================================
        this.ebBarChartType = 'bar';
        this.ebBarChartLegend = false;
        this.ebBarChartColors = [
            {
                backgroundColor: 'rgba(61, 163, 108, 1)',
                borderColor: 'rgba(61, 163, 108, 1)'
            }
        ];
        this.ebBarChartOptions = {
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
        this.ebBarChartDataSet = [
            {
                label: 'Complete Study',
                data: [20, 40, 0, 10, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    5, 10, 2, 20, 0, 0, 0, 0, 0, 3, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ]
            },
            {
                label: 'Total Chapter',
                data: [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10,
                    42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4,
                    28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 33,
                    1, 13, 5, 5, 3, 5, 1, 1, 1, 22
                ]
            }
        ];
        this.ebBarChartLabels = [
            'GEN',
            'EXO',
            'LEV',
            'NUM',
            'DEU',
            'JOSH',
            'JUDG',
            'RUTH',
            '1 SAM',
            '2 SAM',
            '1 KIN',
            '2 KIN',
            '1 CHR',
            '2 CHR',
            'EZRA',
            'NEHE',
            'ESTH',
            'JOB',
            'PSAL',
            'PROV',
            'ECCL',
            'SONG',
            'ISAI',
            'JERE',
            'LAME',
            'EZEK',
            'DANI',
            'HOSE',
            'JOEL',
            'AMOS',
            'OBAD',
            'JONAH',
            'MICA',
            'NAHU',
            'HABAK',
            'ZEPH',
            'HAGG',
            'ZECH',
            'MALAC',
            'MATT',
            'MARK',
            'LUKE',
            'JOHN',
            'ACTS',
            'ROM',
            '1 COR',
            '2 COR',
            'GAL',
            'EPH',
            'PHIL',
            'COL',
            '1 THES',
            '2 THES',
            '1 TIM',
            '2 TIM',
            'TIT',
            'PHILE',
            'HEB',
            'JAM',
            '1 PET',
            '2 PET',
            '1 JOH',
            '2 JOH',
            '3 JOH',
            'JUD',
            'REV'
        ];
        // ENTIRE TESTAMENT : END ===============================================
        // OLD TESTAMENT : START ================================================
        this.obBarChartOptions = {
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
        this.obBarChartDataSet = [
            {
                label: 'Complete Study',
                data: [20, 40, 0, 10, 0, 0, 25, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ]
            },
            {
                label: 'Total Chapter',
                data: [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10,
                    42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4]
            }
        ];
        this.obBarChartLabels = [
            'GEN', 'EXO', 'LEV', 'NUM', 'DEU', 'JOSH',
            'JUDG', 'RUTH', '1 SAM', '2 SAM', '1 KIN',
            '2 KIN', '1 CHR', '2 CHR', 'EZRA', 'NEHE', 'ESTH',
            'JOB', 'PSAL', 'PROV', 'ECCL', 'SONG', 'ISAI',
            'JERE', 'LAME', 'EZEK', 'DANI', 'HOSE',
            'JOEL', 'AMOS', 'OBAD', 'JONAH', 'MICA',
            'NAHU', 'HABAK', 'ZEPH', 'HAGG', 'ZECH', 'MALAC'
        ];
        // OLD TESTAMENT : END ================================================
        // NEW TESTAMENT : START ================================================
        this.ntBarChartOptions = {
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
        this.ntBarChartDataSet = [
            {
                label: 'Complete Study',
                data: [5, 10, 2, 20, 0, 0, 0, 0, 0, 3, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                label: 'Total Chapter',
                data: [28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 33,
                    1, 13, 5, 5, 3, 5, 1, 1, 1, 22
                ]
            }
        ];
        this.ntBarChartLabels = [
            'MATT',
            'MARK',
            'LUKE',
            'JOHN',
            'ACTS',
            'ROM',
            '1 COR',
            '2 COR',
            'GAL',
            'EPH',
            'PHIL',
            'COL',
            '1 THES',
            '2 THES',
            '1 TIM',
            '2 TIM',
            'TIT',
            'PHILE',
            'HEB',
            'JAM',
            '1 PET',
            '2 PET',
            '1 JOH',
            '2 JOH',
            '3 JOH',
            'JUD',
            'REV'
        ];
        // NEW TESTAMENT : END ================================================
        this.bookTitle = [
            'The First Book of Moses Called Genesis',
            'The Second Book of Moses Called Exodus',
            'The Third Book of Moses Called Leviticus',
            'The Fourth Book of Moses Called Numbers',
            'The Fifth Book of Moses Called Deuteronomy',
            'The Book of Joshua',
            'The Book of Judges',
            'The Book of Ruth',
            'The First Book of Samuel',
            'The Second Book of Samuel',
            'The First Book of Kings',
            'The Second Book of Kings',
            'The First Book of Chronicles',
            'The Second Book of Chronicles',
            'The Book of Ezra',
            'The Book of Nehemiah',
            'The Book of Esther',
            'The Book of Job',
            'The Book of Psalms',
            'The Book of Proverbs',
            'The Book of Ecclesiastes',
            'The Song of Songs',
            'The Book of Isaiah',
            'The Book of Jeremiah',
            'The Book of Lamentations',
            'The Book of Ezekiel',
            'The Book of Daniel',
            'The Book of Hosea',
            'The Book of Joel',
            'The Book of Amos',
            'The Book of Obadiah',
            'The Book of Jonah',
            'The Book of Micah',
            'The Book of Nahum',
            'The Book of Habakkuk',
            'The Book of Zephaniah',
            'The Book of Haggai',
            'The Book of Zechariah',
            'The Book of Malachi',
            'The Gospel According to Matthew',
            'The Gospel According to Mark',
            'The Gospel According to Luke',
            'The Gospel According to John',
            'The Acts of the Apostles',
            'The Epistle of Paul to the Romans',
            'The First Epistle of Paul to the Corinthians',
            'The Second Epistle of Paul to the Corinthians',
            'The Epistle of Paul to the Galatians',
            'The Epistle of Paul to the Ephesians',
            'The Epistle of Paul to the Philippians',
            'The Epistle of Paul to the Colossians',
            'The First Epistle of Paul to the Thessalonians',
            'The Second Epistle of Paul to the Thessalonians',
            'The First Epistle of Paul to Timothy',
            'The Second Epistle of Paul to Timothy',
            'The Epistle of Paul to Titus',
            'The Epistle of Paul to Philemon',
            'The Epistle to the Hebrews',
            'The General Epistle of James',
            'The First Epistle of Peter',
            'The Second Epistle of Peter',
            'The First Epistle of John',
            'The Second Epistle of John',
            'The Third Epistle of John',
            'The Epistle of Jude',
            'The Apocalypse of John'
        ];
        //this.book = new Book();
    }
    HomePage.prototype.menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    // Entire Bible Events
    HomePage.prototype.chartClickedForEB = function (e) {
        console.log(e);
        var x = e.active[0];
        if (x !== undefined) {
            //console.log("Bar #: " + x._index);
            //console.log(x._model.datasetLabel);
            //console.log(x._model.label);
            //this.completeStudies = x._index;
            //console.log("getBarChartLevel: " + this.ebBarChartLabels[x._index]);
            //console.log("getCompleteStudyData: " + this.ebBarChartDataSet[0].data[x._index]);
            this.setStudy(x._index, this.ebBarChartDataSet[0].data[x._index], this.ebBarChartDataSet[1].data[x._index]);
        }
    };
    HomePage.prototype.chartHoveredForEB = function (e) {
        console.log("HowverResult: " + e);
    };
    HomePage.prototype.setStudy = function (index, completestudy, totalchapter) {
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
        this.bibleTitleBook = this.bookTitle[index];
        this.bibleTitleBookOT = this.bookTitle[index];
        this.bibleTitleBookNT = this.bookTitle[index + 39];
    };
    HomePage.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round((Math.random() * 100) % 50),
            40,
            0,
            Math.round((Math.random() * 100) % 36),
            0,
            Math.round((Math.random() * 100) % 24),
            21,
            4,
            Math.round((Math.random() * 100) % 20)
        ];
        var clone = JSON.parse(JSON.stringify(this.ebBarChartDataSet));
        clone[0].data = data;
        this.ebBarChartDataSet = clone;
        this.ntBarChartDataSet = clone;
        this.obBarChartDataSet = clone;
    };
    // Entire Bible Events
    HomePage.prototype.chartClickedForOB = function (e) {
        console.log(e);
        var x = e.active[0];
        if (x !== undefined) {
            console.log("Bar #: " + x._index);
            console.log(x._model.datasetLabel);
            console.log(x._model.label);
            this.completeStudies = x._index;
            console.log("getBarChartLevel: " + this.ebBarChartLabels[x._index]);
            this.setStudy(x._index, this.ebBarChartDataSet[0].data[x._index], this.ebBarChartDataSet[1].data[x._index]);
        }
    };
    HomePage.prototype.chartHoveredForOB = function (e) {
        console.log("HowverResult: " + e);
    };
    // Entire Bible Events
    HomePage.prototype.chartClickedForNT = function (e) {
        console.log(e);
        var x = e.active[0];
        if (x !== undefined) {
            console.log("Bar #: " + x._index);
            console.log(x._model.datasetLabel);
            console.log(x._model.label);
            this.completeStudies = x._index;
            console.log("getBarChartLevel: " + this.ebBarChartLabels[x._index]);
            this.setStudy(x._index, this.ebBarChartDataSet[0].data[x._index], this.ebBarChartDataSet[1].data[x._index]);
        }
    };
    HomePage.prototype.chartHoveredForNT = function (e) {
        console.log("HowverResult: " + e);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\home\home.html"*/'<ion-content padding id="home">\n    <!-- HEADER -->\n    <!--\n      Completed Studies\n      Ongoing Studies\n      Quizes (Coming Soon)\n    -->\n    <!-- GROUP A : ROW 1 -->\n    <ion-grid class="study-summary">\n        <!-- TABLE HEADER -->\n        <div class="table-study-head-list">\n            <ion-row>\n                <ion-col col-4>\n                  <div class="text-result">{{ completeStudies }}</div>\n                  <div>Completed Studies</div>\n                </ion-col>\n                <ion-col col-4>\n                  <div class="text-result">{{ ongoingStudies }}</div>\n                  <div>ONGOING STUDIES</div>\n                </ion-col>\n                <ion-col col-4>\n                  <div class="text-result">{{ quizes }}</div>\n                  <div>QUIZES (Coming Soon)</div>\n                </ion-col>\n            </ion-row>\n        </div><!-- (eEND) TABLE HEADER -->\n    </ion-grid>\n\n\n    <!-- SEGMENT -->\n    <div padding>\n      <ion-segment [(ngModel)]="segmentbook1">\n        <ion-segment-button value="entirebible" (click)="randomize()">\n          <h6>ENTIRE BIBLES</h6>\n        </ion-segment-button>\n        <ion-segment-button value="oldtestament" (click)="randomize()">\n          <h6>OLD TESTAMENT</h6>\n        </ion-segment-button>\n        <ion-segment-button value="newtestament" (click)="randomize()">\n          <h6>NEW TESTAMENT</h6>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="segmentbook1">\n      <!-- SEGMENT A : ENTIRE TESTAMENT -->\n      <ion-list *ngSwitchCase="\'entirebible\'">\n          <div class="chart-content">\n            <div class="canvas-content">\n              <canvas baseChart width="3500" height="200%"\n                  [chartType]="ebBarChartType"\n                  [datasets]="ebBarChartDataSet"\n                  [labels]="ebBarChartLabels"\n                  [legend]="ebBarChartLegend"\n                  [options]="ebBarChartOptions"\n                  [colors]="ebBarChartColors"\n                  (chartHover)="chartHoveredForEB($event)"\n                  (chartClick)="chartClickedForEB($event)">\n              </canvas>\n            </div>\n          </div>\n        \n          \n        \n        <!-- GROUP C : book content, table list -->\n        <div id="entirebook-col1-row3">\n          <div class="table-study-header-list" padding>\n            <div class="bible-testament">BOOK OF TESTAMENT</div>\n            <div class="bible-title"><strong>{{ bibleTitleBook }}</strong></div>\n            <div class="div-study-status-detail">{{ totalStudies }} Studies * {{ completeStudies }} Completed ({{ percentageCompletion }} %)</div>\n          </div>\n\n          <!-- Header of Study List -->\n          <ion-grid class="table-content">\n              <!-- TABLE HEADER -->\n              <div class="table-study-head-list">\n                  <ion-row>\n                      <ion-col col-1>#</ion-col>\n                      <ion-col>\n                          <strong>Reference</strong>\n                      </ion-col>\n                      <ion-col col-6>\n                          <strong>Overall Subject Sentence</strong>\n                      </ion-col>\n                      <ion-col col-2></ion-col>\n                  </ion-row>\n              </div><!-- (END) TABLE HEADER -->\n              <!-- TABLE BODY -->\n              <div class="table-study-body-list">\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n              </div>\n          </ion-grid><!-- (END) Header of Study List -->\n        </div><!-- (END) ENTIRE TABLE : ROW1 -->\n      </ion-list><!-- (END) SEGMENT A : ENTIRE TESTAMENT -->\n      \n\n      \n      <!-- SEGMENT B : OLD Testament -->\n      <ion-list *ngSwitchCase="\'oldtestament\'">\n          <div class="chart-content">\n            <div class="canvas-content">\n              <canvas baseChart width="2000" height="200%"\n                  [chartType]="ebBarChartType"\n                  [colors]="ebBarChartColors"\n                  [legend]="ebBarChartLegend"\n\n                  [labels]="obBarChartLabels"\n                  [datasets]="obBarChartDataSet"\n                  [options]="obBarChartOptions"\n                  (chartHover)="chartHoveredForOB($event)"\n                  (chartClick)="chartClickedForOB($event)">\n              </canvas>\n            </div>\n          </div>\n        \n          \n        \n        <!-- GROUP C : book content, table list -->\n        <div id="entirebook-col1-row3">\n          <div class="table-study-header-list" padding>\n            <div class="bible-testament">OLD TESTAMENT</div>\n            <div class="bible-title"><strong>{{ bibleTitleBookOT }}</strong></div>\n            <div class="div-study-status-detail">{{ totalStudies }} Studies * {{ completeStudies }} Completed ({{ percentageCompletion }} %)</div>\n          </div>\n\n          <!-- Header of Study List -->\n          <ion-grid class="table-content">\n              <!-- TABLE HEADER -->\n              <div class="table-study-head-list">\n                  <ion-row>\n                      <ion-col col-1>#</ion-col>\n                      <ion-col>\n                          <strong>Reference</strong>\n                      </ion-col>\n                      <ion-col col-6>\n                          <strong>Overall Subject Sentence</strong>\n                      </ion-col>\n                      <ion-col col-2></ion-col>\n                  </ion-row>\n              </div><!-- (END) TABLE HEADER -->\n              <!-- TABLE BODY -->\n              <div class="table-study-body-list">\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                    </ion-col>\n                    <ion-col>\n                        Acts 1:1-26\n                    </ion-col>\n                    <ion-col col-6>\n                        Jesus Taken Up Into Heaven\n                    </ion-col>\n                    <ion-col col-2>\n                      2 days ago\n                    </ion-col>\n                </ion-row>\n              </div>\n          </ion-grid><!-- (END) Header of Study List -->\n        </div><!-- (END) ENTIRE TABLE : ROW1 -->\n      </ion-list><!-- (END) SEGMENT B : OLD Testament -->\n\n\n\n      <!-- SEGMENT C : NEW Testament -->\n      <ion-list *ngSwitchCase="\'newtestament\'">\n        \n          <div class="chart-content">\n              <div class="canvas-content">\n                <canvas baseChart width="1500" height="200%"\n                    [chartType]="ebBarChartType"\n                    [colors]="ebBarChartColors"\n                    [legend]="ebBarChartLegend"\n\n                    [labels]="ntBarChartLabels"\n                    [datasets]="ntBarChartDataSet"\n                    [options]="ntBarChartOptions"\n                    (chartHover)="chartHoveredForNT($event)"\n                    (chartClick)="chartClickedForNT($event)">\n                </canvas>\n              </div>\n            </div>\n          \n            \n          \n          <!-- GROUP C : book content, table list -->\n          <div id="entirebook-col1-row3">\n            <div class="table-study-header-list" padding>\n              <div class="bible-testament">NEW TESTAMENT</div>\n              <div class="bible-title"><strong>{{ bibleTitleBookNT }}</strong></div>\n              <div class="div-study-status-detail">{{ totalStudies }} Studies * {{ completeStudies }} Completed ({{ percentageCompletion }} %)</div>\n            </div>\n  \n            <!-- Header of Study List -->\n            <ion-grid class="table-content">\n                <!-- TABLE HEADER -->\n                <div class="table-study-head-list">\n                    <ion-row>\n                        <ion-col col-1>#</ion-col>\n                        <ion-col>\n                            <strong>Reference</strong>\n                        </ion-col>\n                        <ion-col col-6>\n                            <strong>Overall Subject Sentence</strong>\n                        </ion-col>\n                        <ion-col col-2></ion-col>\n                    </ion-row>\n                </div><!-- (END) TABLE HEADER -->\n                <!-- TABLE BODY -->\n                <div class="table-study-body-list">\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-1>\n                          <span id="item-status"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon></span>\n                      </ion-col>\n                      <ion-col>\n                          Acts 1:1-26\n                      </ion-col>\n                      <ion-col col-6>\n                          Jesus Taken Up Into Heaven\n                      </ion-col>\n                      <ion-col col-2>\n                        2 days ago\n                      </ion-col>\n                  </ion-row>\n                </div>\n            </ion-grid><!-- (END) Header of Study List -->\n          </div><!-- (END) ENTIRE TABLE : ROW1 -->\n      </ion-list><!-- (END) SEGMENT C : NEW Testament -->\n    </div>\n\n    <!-- end-->\n\n  <!-- Button -->\n  <div class="button-study">\n    <ion-row>\n        <ion-col col-1></ion-col>\n        <ion-col center text-center col-10>\n        <button ion-button round large color="bg-homecolor" (click)="menu()">Start a New Study</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], HomePage);

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
        this.pages = [
            { id: 1, title: 'Home', page: __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */] },
            { id: 2, title: 'Login', page: __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */] }
        ];
    }
    MenuPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    MenuPage.prototype.logout = function () {
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
        selector: 'page-menu',template:/*ion-inline-start:"D:\GitHub\Homiletics\trunk\src\pages\menu\menu.html"*/'\n<ion-content padding id="menu">\n  <ion-grid>\n    <ion-list>\n        <button ion-item block menuToggle text-center color="bg-homecolor-dark" (click)="home()">Home</button>\n        <button ion-item block menuToggle text-center color="bg-homecolor-dark" (click)="others()">History</button>\n        <button ion-item block menuToggle text-center color="bg-homecolor-dark" (click)="others()">Profile</button>\n        <button ion-item block menuToggle text-center color="bg-homecolor-dark" (click)="others()">Settings</button>\n        <button ion-item block menuToggle text-center color="bg-homecolor-dark" (click)="logout()">Logout</button>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Homiletics\trunk\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map