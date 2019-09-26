(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var login_component_1 = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var oauth_component_1 = __webpack_require__(/*! ./components/oauth/oauth.component */ "./src/app/components/oauth/oauth.component.ts");
var auth_guard_1 = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var routes = [
    {
        path: 'notes',
        canActivate: [auth_guard_1.AuthGuard],
        loadChildren: function () { return Promise.resolve().then(function () { return __webpack_require__(/*! ./modules/note/note.module */ "./src/app/modules/note/note.module.ts"); }).then(function (value) { return value.NoteModule; }); }
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'oauth2/redirect',
        component: oauth_component_1.OAuthComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-menu></app-menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyNotesFront';
    }
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var primeng_1 = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
var menu_component_1 = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var login_component_1 = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var oauth_component_1 = __webpack_require__(/*! ./components/oauth/oauth.component */ "./src/app/components/oauth/oauth.component.ts");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                login_component_1.LoginComponent,
                oauth_component_1.OAuthComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                primeng_1.AccordionModule,
                primeng_1.TabMenuModule,
                primeng_1.ButtonModule,
                primeng_1.MenubarModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <div class=\"login-content\">\n    <h1 class=\"login-title\">Login to SpringSocial</h1>\n    <div class=\"social-login\">\n      <a class=\"btn btn-block social-btn google\" href=\"{{GOOGLE_AUTH_URL}}\">\n        <img src=\"../../../assets/google-logo.png\" alt=\"Google\" /> Log in with Google</a>\n      <a class=\"btn btn-block social-btn facebook\" href=\"{{FACEBOOK_AUTH_URL}}\">\n        <img src=\"../../../assets/fb-logo.png\"alt=\"Facebook\" /> Log in with Facebook</a>\n      <a class=\"btn btn-block social-btn github\" href=\"{{GITHUB_AUTH_URL}}\">\n        <img src=\"../../../assets/github-logo.png\" alt=\"Github\" /> Log in with Github</a>\n    </div>\n    <div class=\"or-separator\">\n      <span class=\"or-text\">OR</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  text-align: center; }\n\n.login-content {\n  background: #fff;\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\n  border-radius: 2px;\n  width: 500px;\n  display: inline-block;\n  margin-top: 30px;\n  vertical-align: middle;\n  position: relative;\n  padding: 35px; }\n\n.social-btn {\n  margin-bottom: 15px;\n  font-weight: 400;\n  font-size: 16px; }\n\n.social-btn img {\n  height: 32px;\n  float: left;\n  margin-top: 10px; }\n\n.social-btn.google {\n  margin-top: 7px; }\n\n.social-btn.facebook img {\n  height: 24px;\n  margin-left: 3px; }\n\n.social-btn.github img {\n  height: 24px;\n  margin-left: 3px; }\n\n.signup-link {\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px; }\n\n.login-title {\n  font-size: 1.5em;\n  font-weight: 500;\n  margin-top: 0;\n  margin-bottom: 30px;\n  color: rgba(0, 0, 0, 0.65); }\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 0 20px;\n  font-size: 14px;\n  border-radius: 4px;\n  height: 45px;\n  line-height: 45px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: transparent;\n  border-color: #e8e8e8;\n  outline: none; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-lg {\n  padding: 0 30px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #2098f3;\n  border-color: #2098f3; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active {\n  background-color: #40a9ff;\n  border-color: #40a9ff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #52c41a;\n  border-color: #52c41a; }\n\n.btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active {\n  background-color: #52c41a;\n  border-color: #52c41a; }\n\n.btn-link {\n  border: none;\n  height: 34px;\n  padding: 0 15px; }\n\n.btn-link:hover {\n  background-color: rgba(158, 158, 158, 0.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcnRlay9EZXYvRmFzdE5vdGVzL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBMEIsRUFBQTs7QUFJNUI7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUVsQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBRWpCLHlEQUFrRDtFQUNsRCxrQkFBa0I7RUFDbEIsMEJBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFJdkI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSwwQ0FBeUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5sb2dpbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDM1cHg7XG59XG5cbi5zb2NpYWwtYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc29jaWFsLWJ0biBpbWcge1xuICBoZWlnaHQ6IDMycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ0bi5nb29nbGUge1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5zb2NpYWwtYnRuLmZhY2Vib29rIGltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnNvY2lhbC1idG4uZ2l0aHViIGltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnNpZ251cC1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxvZ2luLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG59XG5cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC42NDUsLjA0NSwuMzU1LDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguNjQ1LC4wNDUsLjM1NSwxKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjZThlOGU4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLWxnIHtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwOThmMztcbiAgYm9yZGVyLWNvbG9yOiAjMjA5OGYzO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGE5ZmY7XG4gIGJvcmRlci1jb2xvcjogIzQwYTlmZjtcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM0MWE7XG4gIGJvcmRlci1jb2xvcjogIzUyYzQxYTtcbn1cblxuLmJ0bi1zdWNjZXNzOmhvdmVyLCAuYnRuLXN1Y2Nlc3M6Zm9jdXMsIC5idG4tc3VjY2VzczphY3RpdmUsIC5idG4tc3VjY2Vzcy5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJjNDFhO1xuICBib3JkZXItY29sb3I6ICM1MmM0MWE7XG59XG5cblxuLmJ0bi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLmJ0bi1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsMTU4LDE1OCwgMC4yMCk7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.API_BASE_URL = 'http://vps730380.ovh.net:8080';
        this.ACCESS_TOKEN = 'accessToken';
        this.OAUTH2_REDIRECT_URI = 'http://vps730380.ovh.net:80/oauth2/redirect';
        this.GOOGLE_AUTH_URL = this.API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
        this.FACEBOOK_AUTH_URL = this.API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
        this.GITHUB_AUTH_URL = this.API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>FastNote</h1>\n<span>Note everything faster</span>\n<p-menubar [model]=\"items\"></p-menubar>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcnRlay9EZXYvRmFzdE5vdGVzL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var note_service_1 = __webpack_require__(/*! ../../services/note.service */ "./src/app/services/note.service.ts");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(noteService) {
        this.noteService = noteService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Add', icon: 'pi pi-plus', command: function (event) { return _this.addNote(); } },
        ];
    };
    MenuComponent.prototype.addNote = function () {
        this.noteService.addNewNote();
    };
    MenuComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [note_service_1.NoteService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;


/***/ }),

/***/ "./src/app/components/oauth/oauth.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/oauth/oauth.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  oauth works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/oauth/oauth.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/oauth/oauth.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2F1dGgvb2F1dGguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/oauth/oauth.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/oauth/oauth.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var authentication_service_1 = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var OAuthComponent = /** @class */ (function () {
    function OAuthComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    OAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (params) {
            return _this.getParams(params);
        });
    };
    OAuthComponent.prototype.getParams = function (param) {
        var _this = this;
        var token = param.get('token');
        var error = param.get('error');
        if (token) {
            console.log("Oauth token: ", token);
            sessionStorage.setItem('token', token);
            this.authenticationService.prepareUserValue()
                .pipe(operators_1.first())
                .subscribe(function (data) {
                console.log("Oauth przekirowanie.");
                _this.router.navigate(['/notes']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //TODO: Add action, maybe redirection.
            console.log(error);
        }
    };
    OAuthComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-oauth',
            template: __webpack_require__(/*! ./oauth.component.html */ "./src/app/components/oauth/oauth.component.html"),
            styles: [__webpack_require__(/*! ./oauth.component.scss */ "./src/app/components/oauth/oauth.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            authentication_service_1.AuthenticationService])
    ], OAuthComponent);
    return OAuthComponent;
}());
exports.OAuthComponent = OAuthComponent;


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var authentication_service_1 = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/modules/note/note-edit/note-edit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/note/note-edit/note-edit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"note\" class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g-6\">\n            <markdown class=\"variable-binding\" [data]=\"note.body\"></markdown>\n        </div>\n        <div class=\"ui-g-6 height-100\">\n            <textarea pInputTextarea class=\"width-100 height-100\" [(ngModel)]=\"note.body\"></textarea>\n        </div>\n    </div>\n    <div class=\"ui-g-12\" align=\"center\">\n        <p-button\n            label=\"Save\"\n            (onClick)=\"save()\"\n        ></p-button>\n    </div>\n    <div class=\"ui-g-12\" align=\"right\"> NOTE ID: {{note.id}}</div>\n</div>"

/***/ }),

/***/ "./src/app/modules/note/note-edit/note-edit.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/note/note-edit/note-edit.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90ZS9ub3RlLWVkaXQvbm90ZS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/note/note-edit/note-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/note/note-edit/note-edit.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var note_service_1 = __webpack_require__(/*! ../../../services/note.service */ "./src/app/services/note.service.ts");
var NoteEditComponent = /** @class */ (function () {
    function NoteEditComponent(noteService) {
        this.noteService = noteService;
        this.note = null;
    }
    NoteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteService.getHeaders();
        this.noteService.noteObserver.subscribe(function (value) {
            _this.note = value;
        });
    };
    NoteEditComponent.prototype.save = function () {
        this.note.id ? this.noteService.saveNote(this.note) : this.noteService.addNote(this.note);
    };
    NoteEditComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-note-edit',
            template: __webpack_require__(/*! ./note-edit.component.html */ "./src/app/modules/note/note-edit/note-edit.component.html"),
            styles: [__webpack_require__(/*! ./note-edit.component.scss */ "./src/app/modules/note/note-edit/note-edit.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [note_service_1.NoteService])
    ], NoteEditComponent);
    return NoteEditComponent;
}());
exports.NoteEditComponent = NoteEditComponent;


/***/ }),

/***/ "./src/app/modules/note/note-main-view/note-main-view.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/note/note-main-view/note-main-view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid height-100\">\n    <div class=\"p-col-2\">\n        <app-notes-list></app-notes-list>\n    </div>\n    <div class=\"p-col-9\">\n        <app-note-edit></app-note-edit>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/note/note-main-view/note-main-view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/note/note-main-view/note-main-view.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90ZS9ub3RlLW1haW4tdmlldy9ub3RlLW1haW4tdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/note/note-main-view/note-main-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/note/note-main-view/note-main-view.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var NoteMainViewComponent = /** @class */ (function () {
    function NoteMainViewComponent() {
    }
    NoteMainViewComponent.prototype.ngOnInit = function () {
    };
    NoteMainViewComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-note-main-view',
            template: __webpack_require__(/*! ./note-main-view.component.html */ "./src/app/modules/note/note-main-view/note-main-view.component.html"),
            styles: [__webpack_require__(/*! ./note-main-view.component.scss */ "./src/app/modules/note/note-main-view/note-main-view.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NoteMainViewComponent);
    return NoteMainViewComponent;
}());
exports.NoteMainViewComponent = NoteMainViewComponent;


/***/ }),

/***/ "./src/app/modules/note/note-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/note/note-routing.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var note_edit_component_1 = __webpack_require__(/*! ./note-edit/note-edit.component */ "./src/app/modules/note/note-edit/note-edit.component.ts");
var note_main_view_component_1 = __webpack_require__(/*! ./note-main-view/note-main-view.component */ "./src/app/modules/note/note-main-view/note-main-view.component.ts");
var routes = [
    {
        path: '',
        component: note_main_view_component_1.NoteMainViewComponent
    },
    {
        path: 'edit',
        component: note_edit_component_1.NoteEditComponent
    }
];
var NoteRoutingModule = /** @class */ (function () {
    function NoteRoutingModule() {
    }
    NoteRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], NoteRoutingModule);
    return NoteRoutingModule;
}());
exports.NoteRoutingModule = NoteRoutingModule;


/***/ }),

/***/ "./src/app/modules/note/note.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/note/note.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var note_routing_module_1 = __webpack_require__(/*! ./note-routing.module */ "./src/app/modules/note/note-routing.module.ts");
var note_edit_component_1 = __webpack_require__(/*! ./note-edit/note-edit.component */ "./src/app/modules/note/note-edit/note-edit.component.ts");
var ngx_markdown_1 = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
var primeng_1 = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var note_main_view_component_1 = __webpack_require__(/*! ./note-main-view/note-main-view.component */ "./src/app/modules/note/note-main-view/note-main-view.component.ts");
var notes_list_component_1 = __webpack_require__(/*! ./notes-list/notes-list.component */ "./src/app/modules/note/notes-list/notes-list.component.ts");
var NoteModule = /** @class */ (function () {
    function NoteModule() {
    }
    NoteModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                note_edit_component_1.NoteEditComponent,
                note_main_view_component_1.NoteMainViewComponent,
                notes_list_component_1.NotesListComponent
            ],
            imports: [
                common_1.CommonModule,
                note_routing_module_1.NoteRoutingModule,
                ngx_markdown_1.MarkdownModule.forRoot(),
                primeng_1.InputTextareaModule,
                forms_1.FormsModule,
                primeng_1.ButtonModule,
                primeng_1.PanelMenuModule,
                primeng_1.MenubarModule,
            ]
        })
    ], NoteModule);
    return NoteModule;
}());
exports.NoteModule = NoteModule;


/***/ }),

/***/ "./src/app/modules/note/notes-list/notes-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/note/notes-list/notes-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p-panelMenu [model]=\"items\"></p-panelMenu>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/note/notes-list/notes-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/note/notes-list/notes-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90ZS9ub3Rlcy1saXN0L25vdGVzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/note/notes-list/notes-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/note/notes-list/notes-list.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var note_service_1 = __webpack_require__(/*! ../../../services/note.service */ "./src/app/services/note.service.ts");
var NotesListComponent = /** @class */ (function () {
    function NotesListComponent(noteService) {
        this.noteService = noteService;
        this.notes = [];
    }
    NotesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteService.getHeaders();
        this.noteService.listObserver.subscribe(function (value) {
            console.log("Odebrałem info o: ", value);
            _this.items = value;
        });
    };
    NotesListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-notes-list',
            template: __webpack_require__(/*! ./notes-list.component.html */ "./src/app/modules/note/notes-list/notes-list.component.html"),
            styles: [__webpack_require__(/*! ./notes-list.component.scss */ "./src/app/modules/note/notes-list/notes-list.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [note_service_1.NoteService])
    ], NotesListComponent);
    return NotesListComponent;
}());
exports.NotesListComponent = NotesListComponent;


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        var item = sessionStorage.getItem('token');
        this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.prepareUserValue = function () {
        var _this = this;
        var headers = new http_1.HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        console.log("Pobieram usera z hederem: ", headers);
        return (this.http.get('/user/me', { headers: headers })
            .pipe(operators_1.map(function (user) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        })));
    };
    //TODO: Check endpoint address.
    //TODO: Move to constance
    /*loginUser(username: string, password: string) {
        return this.httpClient.post<[]>(`/auth/login`, { name, password })
            .pipe(map((user: User) => {
                if (user && user.token) {
                    sessionStorage.setItem('token', JSON.stringify(user.token));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }*/
    AuthenticationService.prototype.getUser = function () {
        var headers = new http_1.HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return this.http.get('/user/me', { headers: headers });
    };
    AuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem('token');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ "./src/app/services/note.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/note.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var NoteService = /** @class */ (function () {
    function NoteService(http) {
        this.http = http;
        this.note = new rxjs_1.Subject();
        this.noteObserver = this.note.asObservable();
        this.noteList = new rxjs_1.Subject();
        this.listObserver = this.noteList.asObservable();
    }
    NoteService.prototype.getBaseUrl = function () {
        return '/api/notes';
    };
    NoteService.prototype.addNote = function (note) {
        var _this = this;
        var headers = new http_1.HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        this.http.post(this.getBaseUrl(), note, { headers: headers }).subscribe(function (value) { return _this.addNoteHeader(value); });
    };
    NoteService.prototype.saveNote = function (note) {
        var headers = new http_1.HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        this.http.put(this.getBaseUrl(), note, { headers: headers }).subscribe(function (value) { return console.log(value); });
    };
    NoteService.prototype.loadNote = function (id) {
        var _this = this;
        var headers = new http_1.HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        this.http.get(this.getBaseUrl() + '/?id=' + id, { headers: headers }).subscribe(function (value) { return _this.note.next(value); });
    };
    NoteService.prototype.addNewNote = function () {
        var note = { id: null, body: '## New note!' };
        this.note.next(note);
    };
    NoteService.prototype.getHeaders = function () {
        var _this = this;
        var headers = new http_1.HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        var notesItems = [];
        //TODO: Poprawić do obsługi kategori. notesItems - musi być na pewno poprawione.
        this.http.get(this.getBaseUrl() + '/all', { headers: headers })
            .subscribe(function (notes) {
            notes.forEach(function (note) {
                notesItems.push({
                    label: note.body,
                    icon: 'pi pi-align-justify',
                    command: function (event) { return _this.loadNote(note.id); }
                });
            });
            _this.notesHeaders = [
                {
                    label: 'Notes',
                    icon: 'pi pi-pw pi-file',
                    expanded: true,
                    items: notesItems
                },
            ];
            _this.noteList.next(_this.notesHeaders);
        });
    };
    NoteService.prototype.addNoteHeader = function (note) {
        var _this = this;
        var menuItem = [{
                label: note.body,
                icon: 'pi pi-align-justify',
                command: function (event) { return _this.loadNote(note.id); }
            }];
        this.loadNote(note.id);
        this.notesHeaders.forEach(function (value) {
            var items = value.items;
            items.push.apply(items, menuItem);
        });
        this.noteList.next(this.notesHeaders);
    };
    NoteService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bartek/Dev/FastNotes/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map