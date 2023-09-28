"use strict";
(self["webpackChunkGoCareer202302"] = self["webpackChunkGoCareer202302"] || []).push([["main"],{



/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _public_pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/pages/landing/landing.component */ 4577);
/* harmony import */ var _public_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/pages/not-found/not-found.component */ 9026);
/* harmony import */ var _public_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/components/login/login.component */ 3074);
/* harmony import */ var _public_components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/components/forgotpassword/forgotpassword.component */ 3864);
/* harmony import */ var _public_components_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public/components/newuser/newuser.component */ 7884);
/* harmony import */ var _gocareer_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gocareer/pages/home/home.component */ 7327);
/* harmony import */ var _gocareer_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gocareer/pages/profile/profile.component */ 9107);
/* harmony import */ var _specialist_pages_principal_page_specialist_principal_page_specialist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./specialist/pages/principal-page-specialist/principal-page-specialist.component */ 3767);
/* harmony import */ var _specialist_pages_users_of_specialist_users_of_specialist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./specialist/pages/users-of-specialist/users-of-specialist.component */ 5217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;












const routes = [{
  path: '',
  component: _public_pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
}, {
  path: 'register',
  component: _public_components_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_4__.NewuserComponent
}, {
  path: 'login',
  component: _public_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
}, {
  path: 'checkpoint',
  component: _public_components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_3__.ForgotpasswordComponent
}, {
  path: 'home',
  component: _gocareer_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent
}, {
  path: 'profile',
  component: _gocareer_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent
}, {
  path: 'specialist',
  component: _specialist_pages_principal_page_specialist_principal_page_specialist_component__WEBPACK_IMPORTED_MODULE_7__.PrincipalPageSpecialistComponent
}, {
  path: 'users-specialist',
  component: _specialist_pages_users_of_specialist_users_of_specialist_component__WEBPACK_IMPORTED_MODULE_8__.UsersOfSpecialistComponent
}, {
  path: '**',
  component: _public_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class AppComponent {
  constructor() {
    this.title = 'GoCareer202302';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/material.module */ 5789);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _public_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/components/header/header.component */ 7581);
/* harmony import */ var _public_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public/components/footer/footer.component */ 6700);
/* harmony import */ var _public_pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public/pages/landing/landing.component */ 4577);
/* harmony import */ var _gocareer_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gocareer/components/navbar/navbar.component */ 5742);
/* harmony import */ var _gocareer_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gocareer/pages/home/home.component */ 7327);
/* harmony import */ var _gocareer_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gocareer/pages/profile/profile.component */ 9107);
/* harmony import */ var _public_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./public/pages/not-found/not-found.component */ 9026);
/* harmony import */ var _public_components_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public/components/newuser/newuser.component */ 7884);
/* harmony import */ var _public_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./public/components/login/login.component */ 3074);
/* harmony import */ var _public_components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./public/components/forgotpassword/forgotpassword.component */ 3864);
/* harmony import */ var _gocareer_components_rectangular_card_rectangular_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gocareer/components/rectangular-card/rectangular-card.component */ 7587);
/* harmony import */ var _gocareer_components_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gocareer/components/search/search.component */ 4408);
/* harmony import */ var _specialist_pages_principal_page_specialist_principal_page_specialist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./specialist/pages/principal-page-specialist/principal-page-specialist.component */ 3767);
/* harmony import */ var _specialist_pages_users_of_specialist_users_of_specialist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./specialist/pages/users-of-specialist/users-of-specialist.component */ 5217);
/* harmony import */ var _specialist_components_card_user_card_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./specialist/components/card-user/card-user.component */ 718);
/* harmony import */ var _specialist_components_card_specialist_card_specialist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./specialist/components/card-specialist/card-specialist.component */ 2112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
























class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _shared_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _public_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _public_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _public_pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__.LandingComponent, _gocareer_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent, _gocareer_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent, _gocareer_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent, _public_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__.NotFoundComponent, _public_components_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_10__.NewuserComponent, _public_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent, _public_components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_12__.ForgotpasswordComponent, _gocareer_components_rectangular_card_rectangular_card_component__WEBPACK_IMPORTED_MODULE_13__.RectangularCardComponent, _gocareer_components_search_search_component__WEBPACK_IMPORTED_MODULE_14__.SearchComponent, _specialist_pages_principal_page_specialist_principal_page_specialist_component__WEBPACK_IMPORTED_MODULE_15__.PrincipalPageSpecialistComponent, _specialist_pages_users_of_specialist_users_of_specialist_component__WEBPACK_IMPORTED_MODULE_16__.UsersOfSpecialistComponent, _specialist_components_card_user_card_user_component__WEBPACK_IMPORTED_MODULE_17__.CardUserComponent, _specialist_components_card_specialist_card_specialist_component__WEBPACK_IMPORTED_MODULE_18__.CardSpecialistComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _shared_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 5742:
/*!****************************************************************!*\
  !*** ./src/app/gocareer/components/navbar/navbar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
var _class;




const _c0 = function () {
  return ["/notifications"];
};
const _c1 = function () {
  return ["/specialists"];
};
const _c2 = function () {
  return ["/test"];
};
const _c3 = function () {
  return ["/career"];
};
const _c4 = function () {
  return ["/profile"];
};
class NavbarComponent {
  constructor(router) {
    this.router = router;
  }
  signOut() {
    this.router.navigate(['']); // Redirige al componente de inicio de sesión
  }
}
_class = NavbarComponent;
_class.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-navbar"]],
  decls: 24,
  vars: 11,
  consts: [[1, "navbar"], [1, "btn-menu"], [1, "btn", 3, "matMenuTriggerFor"], [1, "fa-solid", "fa-bars-staggered", "fa-2xl"], [1, "menu"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "bg-light", 3, "routerLink"], ["mat-menu-item", "", 1, "bg-light", 3, "click"], [1, "logo"], ["src", "assets/images/logo-white.png", "alt", "Logo GoCareer", 1, "img-logo"], [1, "text-logo"], [1, "btn-profile"], ["aria-label", "Example icon-button with share icon", 1, "profile-icon", 3, "routerLink"], [1, "fa-solid", "fa-circle-user", "fa-2xl"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 4, 5)(6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Notificaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Conocer Especialistas");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Realizar Test");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Carreras");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_15_listener() {
        return ctx.signOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cerrar sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "GoCareer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar],
  styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  box-shadow: 0 10px var(--secondary-color);\n  height: 6rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 max(8%, 1rem);\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.img-logo[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n.text-logo[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ29jYXJlZXIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7RUFDdEMseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBoZWlnaHQ6IDZyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIG1heCg4JSwgMXJlbSk7XHJcbn1cclxuLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuLmltZy1sb2dvIHtcclxuICB3aWR0aDogM3JlbTtcclxufVxyXG4udGV4dC1sb2dvIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7587:
/*!************************************************************************************!*\
  !*** ./src/app/gocareer/components/rectangular-card/rectangular-card.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RectangularCardComponent: () => (/* binding */ RectangularCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 895);
var _class;


class RectangularCardComponent {}
_class = RectangularCardComponent;
_class.ɵfac = function RectangularCardComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-rectangular-card"]],
  inputs: {
    imageUrl: "imageUrl",
    textInfo: "textInfo"
  },
  decls: 13,
  vars: 2,
  consts: [[1, "rectangle-card", "layout"], [1, "start"], ["alt", "Photo of a Shiba Inu", 3, "src"], [1, "end"], [1, "title"], [1, "text"], [1, "actions"], ["mat-button", ""]],
  template: function RectangularCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Shiba Inu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ir");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Saber Mas");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textInfo);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton],
  styles: [".rectangle-card[_ngcontent-%COMP%] {\n  width: 40rem;\n  display: flex;\n  gap: 1rem;\n  background-color: var(--bg-div-color);\n  padding: 1rem;\n  border-radius: 20px;\n  .start {\n    min-width: 10rem;\n    max-width: 11rem;\n    & img {\n      border-radius: 10px;\n    }\n  }\n  .end {\n    .actions {\n      display: flex;\n      gap: 1rem;\n      & button {\n        background-color: var(--primary-color);\n      }\n    }\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ29jYXJlZXIvY29tcG9uZW50cy9yZWN0YW5ndWxhci1jYXJkL3JlY3Rhbmd1bGFyLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQjtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGO0VBQ0E7SUFDRTtNQUNFLGFBQWE7TUFDYixTQUFTO01BQ1Q7UUFDRSxzQ0FBc0M7TUFDeEM7SUFDRjtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjdGFuZ2xlLWNhcmQge1xyXG4gIHdpZHRoOiA0MHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kaXYtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAuc3RhcnQge1xyXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcclxuICAgIG1heC13aWR0aDogMTFyZW07XHJcbiAgICAmIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5lbmQge1xyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDFyZW07XHJcbiAgICAgICYgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4408:
/*!****************************************************************!*\
  !*** ./src/app/gocareer/components/search/search.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 5309);
var _class;







function SearchComponent_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const street_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", street_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", street_r2, " ");
  }
}
class SearchComponent {
  constructor() {
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
    this.streets = ['Ingenieria de Software', 'Arquitectura', 'Administracion de Empresas', 'Ciencias de la computacion'];
  }
  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => this._filter(value || '')));
  }
  _filter(value) {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }
  _normalizeValue(value) {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
_class = SearchComponent;
_class.ɵfac = function SearchComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-search"]],
  decls: 7,
  vars: 5,
  consts: [[1, "form", "layout"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "placeholder", "Busca tu carrera..", 1, "input-search", 3, "formControl", "matAutocomplete"], [1, "menu"], ["auto", "matAutocomplete"], ["class", "bg-light", 3, "value", 4, "ngFor", "ngForOf"], [1, "bg-light", 3, "value"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_mat_option_5_Template, 2, 2, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("matAutocomplete", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.filteredStreets));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: [".form[_ngcontent-%COMP%] {\n    max-width: min(40rem, 100%);\n    margin: 0 auto 7rem auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .fa-magnifying-glass {\n        padding: 1rem;\n        background-color: var(--primary-color);\n        font-size: 1.5em;\n        color: var(--font-color-bg-dark);\n    }\n}\n.input-search[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 1.1rem;\n    background-color: var(--primary-color);\n    color: var(--font-color-bg-dark);\n\n    &::placeholder {\n        color: var(--font-color-bg-dark);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ29jYXJlZXIvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CO1FBQ0ksYUFBYTtRQUNiLHNDQUFzQztRQUN0QyxnQkFBZ0I7UUFDaEIsZ0NBQWdDO0lBQ3BDO0FBQ0o7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGdDQUFnQzs7SUFFaEM7UUFDSSxnQ0FBZ0M7SUFDcEM7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICAgIG1heC13aWR0aDogbWluKDQwcmVtLCAxMDAlKTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDdyZW0gYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuZmEtbWFnbmlmeWluZy1nbGFzcyB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWJnLWRhcmspO1xyXG4gICAgfVxyXG59XHJcbi5pbnB1dC1zZWFyY2gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxLjFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWJnLWRhcmspO1xyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1iZy1kYXJrKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9954:
/*!************************************************!*\
  !*** ./src/app/gocareer/models/user.entity.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
class User {
  constructor() {
    this.name = "name";
    this.email = "email";
    this.phone = "phone";
    this.avatarUrl = "assets/images/home-test.jpg";
    this.bio = "bio";
  }
}

/***/ }),

/***/ 7327:
/*!*******************************************************!*\
  !*** ./src/app/gocareer/pages/home/home.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 5742);
/* harmony import */ var _components_rectangular_card_rectangular_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/rectangular-card/rectangular-card.component */ 7587);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/search/search.component */ 4408);
var _class;





function HomeComponent_app_rectangular_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-rectangular-card", 3);
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageUrl", card_r1.imageUrl)("textInfo", card_r1.textInfo);
  }
}
class HomeComponent {
  constructor() {
    this.cardData = [{
      imageUrl: 'assets/images/home-test.jpg',
      textInfo: 'Asiste a nuestra charla sobre competencias digitales. Disponible para todos los usuarios'
    }, {
      imageUrl: 'assets/images/home-charla.jpg',
      textInfo: 'Texto de la tarjeta 2'
    }, {
      imageUrl: 'assets/images/home-specialists.jpg',
      textInfo: 'Texto de la tarjeta 3'
    }, {
      imageUrl: 'assets/images/home-especial.jpg',
      textInfo: 'Texto de la tarjeta 4'
    }];
  }
}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  decls: 6,
  vars: 1,
  consts: [[1, "container"], [1, "cards"], [3, "imageUrl", "textInfo", 4, "ngFor", "ngForOf"], [3, "imageUrl", "textInfo"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section")(2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-search");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HomeComponent_app_rectangular_card_5_Template, 1, 2, "app-rectangular-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cardData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_rectangular_card_rectangular_card_component__WEBPACK_IMPORTED_MODULE_1__.RectangularCardComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent],
  styles: [".cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 5rem;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ29jYXJlZXIvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUzs7QUFFWCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNXJlbTtcclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9107:
/*!*************************************************************!*\
  !*** ./src/app/gocareer/pages/profile/profile.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _models_user_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user.entity */ 9954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 5742);
var _class;





function ProfileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 6)(4, "li")(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li")(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Apellido: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li")(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Phone: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Bio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_4_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.editData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Editar Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.bio);
  }
}
function ProfileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_5_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.user.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_5_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.user.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tel\u00E9fono:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_5_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.user.phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Bio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_5_Template_textarea_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.user.bio = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_5_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.saveProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.user.bio);
  }
}
class ProfileComponent {
  constructor() {
    this.user = new _models_user_entity__WEBPACK_IMPORTED_MODULE_0__.User();
    this.userData = true;
    this.editMode = false;
  }
  editData() {
    this.editMode = true;
    this.userData = false;
  }
  saveProfile() {
    this.editMode = false;
    this.userData = true;
  }
}
_class = ProfileComponent;
_class.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-profile"]],
  decls: 6,
  vars: 3,
  consts: [[1, "container"], [1, "profile"], ["alt", "User Avatar", 3, "src"], ["class", "data", 4, "ngIf"], ["class", "end", 4, "ngIf"], [1, "data"], [1, "list"], [3, "click"], [1, "end"], ["for", "name"], ["id", "name", "placeholder", "Nombre", 3, "ngModel", "ngModelChange"], ["for", "email"], ["id", "email", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["id", "phone", "placeholder", "Tel\u00E9fono", 3, "ngModel", "ngModelChange"], ["for", "bio"], ["id", "bio", "placeholder", "Biograf\u00EDa", 3, "ngModel", "ngModelChange"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProfileComponent_div_4_Template, 26, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProfileComponent_div_5_Template, 15, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.user.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userData);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent],
  styles: [".profile[_ngcontent-%COMP%] {\n    width: 30rem;\n    margin: 7rem auto;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    background-color: #f0f0f0;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-width: 200px;\n    max-width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    margin-bottom: 10px;\n}\n\n.profile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 10px;\n}\n\n.profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    background-color: #007bff;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: #0056b3;\n}\n\nlabel[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-top: 10px;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    margin: 5px 0;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\nh1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n}\nul[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n    font-size: 1.2em;\n    line-height: 1.2em;\n}\n\n\n\ndiv[ngIf=\"editMode\"][_ngcontent-%COMP%] {\n    min-width: 50rem;\n    background-color: #fff;\n    padding: 2rem;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    margin-top: 10px;\n    & input {\n        min-width: 50rem;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ29jYXJlZXIvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBLHNDQUFzQztBQUN0QztJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSB7XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgICBtYXJnaW46IDdyZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4ucHJvZmlsZSBpbWcge1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb2ZpbGUgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb2ZpbGUgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxudWwge1xyXG4gICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxufVxyXG5cclxuLyogRXN0aWxvIHBhcmEgbG9zIGNhbXBvcyBkZSBlZGljacODwrNuICovXHJcbmRpdltuZ0lmPVwiZWRpdE1vZGVcIl0ge1xyXG4gICAgbWluLXdpZHRoOiA1MHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAmIGlucHV0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDUwcmVtO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6700:
/*!**************************************************************!*\
  !*** ./src/app/public/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class FooterComponent {}
_class = FooterComponent;
_class.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-footer"]],
  decls: 14,
  vars: 0,
  consts: [[1, "footer"], [1, "footer__logo"], [1, "footer__social"], ["href", "https://www.facebook.com", "target", "_blank"], [1, "fa-brands", "fa-facebook"], ["href", "https://twitter.com/", "target", "_blank"], [1, "fa-brands", "fa-twitter"], ["href", "https://www.instagram.com/", "target", "_blank"], [1, "fa-brands", "fa-instagram"], ["href", "https://linkedin.com/", "target", "_blank"], [1, "fa-brands", "fa-linkedin"], [1, "footer__copy"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GoCareer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A9 2023 GoCareer. Todos los derechos reservados.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #0288D1;\n  color: white;\n  text-align: center;\n  padding: 2rem 8%;\n}\n.footer__logo[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 800;\n}\n.footer__social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1rem 0;\n  font-size: 1.5em;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyODhEMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW0gOCU7XHJcbn1cclxuLmZvb3Rlcl9fbG9nbyB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uZm9vdGVyX19zb2NpYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3864:
/*!******************************************************************************!*\
  !*** ./src/app/public/components/forgotpassword/forgotpassword.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotpasswordComponent: () => (/* binding */ ForgotpasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
var _class;





class ForgotpasswordComponent {
  constructor() {
    this.hide = true;
  }
}
_class = ForgotpasswordComponent;
_class.ɵfac = function ForgotpasswordComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-forgotpassword"]],
  decls: 21,
  vars: 2,
  consts: [[1, "userlogin", "view"], [1, "registerfields"], ["matInput", ""], ["matInput", "", 3, "type"], [1, "btenter", 3, "routerLink"]],
  template: function ForgotpasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-content")(3, "div", 1)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "E-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1)(9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nueva contrase\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1)(14, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Confirmar contrase\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-footer")(19, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Ingresa ahora con nueva contrase\u00F1a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardFooter, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField],
  styles: ["*[_ngcontent-%COMP%]{\n  max-width: 100%;\n  max-height: 100%;\n}\nmat-card[_ngcontent-%COMP%]{\n  background-color: white;\n  width: 50.625rem;\n  height: 40rem;\n  border-radius: 3.563rem;\n  display: grid;\n  place-items: center;\n  padding: 2rem;\n}\nmat-form-field[_ngcontent-%COMP%]{\n  background-color: white;\n  width: 28.75rem;\n  height: 4.063rem;\n}\n.registerfields[_ngcontent-%COMP%]{\n  display: flex;\n  gap: 2.5rem;\n  margin-top: 2.688rem;\n}\n.registerfields[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n.userlogin[_ngcontent-%COMP%]{\n  background-color: var(--primary-color);\n  font-family: Roboto;\n  font-size: 1.563rem;\n  font-weight: bold;\n  align-items: center;\n  display: grid;\n  place-content: center;\n}\n.btuser[_ngcontent-%COMP%]{\n  width: 22.188rem;\n  height: 4.375rem;\n  background-color: var(--primary-color);\n  color: white;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  border-radius: 1.563rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL2NvbXBvbmVudHMvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxubWF0LWNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDUwLjYyNXJlbTtcclxuICBoZWlnaHQ6IDQwcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMuNTYzcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAyOC43NXJlbTtcclxuICBoZWlnaHQ6IDQuMDYzcmVtO1xyXG59XHJcbi5yZWdpc3RlcmZpZWxkc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMi41cmVtO1xyXG4gIG1hcmdpbi10b3A6IDIuNjg4cmVtO1xyXG59XHJcbi5yZWdpc3RlcmZpZWxkcyBoM3tcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcbi51c2VybG9naW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDEuNTYzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJ0dXNlcntcclxuICB3aWR0aDogMjIuMTg4cmVtO1xyXG4gIGhlaWdodDogNC4zNzVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBib3JkZXItcmFkaXVzOiAxLjU2M3JlbTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7581:
/*!**************************************************************!*\
  !*** ./src/app/public/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);
var _class;



class HeaderComponent {
  constructor(router) {
    this.router = router;
  }
  redirectToLogin() {
    this.router.navigate(['login']); // Redirige al componente de inicio de sesión
  }
}
_class = HeaderComponent;
_class.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-header"]],
  decls: 15,
  vars: 0,
  consts: [[1, "header"], [1, "header__container", "container"], [1, "header__logo"], ["src", "assets/images/logo.png"], [1, "header__navbar"], ["href", "#hero", 1, "active"], ["href", "#app"], ["href", "#contact"], ["mat-raised-button", "", 1, "btn__log-in", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GoCareer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 4)(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contacto");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() {
        return ctx.redirectToLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Abrir App");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
  styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: transparent;\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  width: 100%;\n  height: 7rem;\n  z-index: 10;\n}\n.header__container[_ngcontent-%COMP%] {\n  max-width: 1700px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  color: black;\n}\n.header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.header__logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: 800;\n}\n.header__navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4rem;\n}\n.header__navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  color: #0288D1;\n}\n.header__navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #212121;\n  font-weight: 600;\n}\n.header__navbar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.btn__log-in[_ngcontent-%COMP%] {\n  background-color: #0288D1 !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDdyZW07XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLmhlYWRlcl9fY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDE3MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5oZWFkZXJfX2xvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5oZWFkZXJfX2xvZ28gaW1nIHtcclxuICB3aWR0aDogNHJlbTtcclxufVxyXG4uaGVhZGVyX19sb2dvIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uaGVhZGVyX19uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDRyZW07XHJcbn1cclxuLmhlYWRlcl9fbmF2YmFyIGEge1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgY29sb3I6ICMwMjg4RDE7XHJcbn1cclxuLmhlYWRlcl9fbmF2YmFyIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmhlYWRlcl9fbmF2YmFyIGEuYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5idG5fX2xvZy1pbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyODhEMSAhaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3074:
/*!************************************************************!*\
  !*** ./src/app/public/components/login/login.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
var _class;





class LoginComponent {
  constructor() {
    this.hide = true;
  }
}
_class = LoginComponent;
_class.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-login"]],
  decls: 22,
  vars: 1,
  consts: [[1, "userlogin", "view"], [1, "registerfields"], ["matInput", ""], ["matInput", "", 3, "type"], [1, "recover"], ["routerLink", "/checkpoint"], ["routerLink", "/home", 1, "btenter"], ["routerLink", "/register", 1, "register"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-content")(3, "div", 1)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "E-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1)(9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contrase\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4)(14, "a", 5)(15, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00BFOlvid\u00F3 su contrase\u00F1a?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ingresa ahora");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-footer")(20, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Aun no tiene una cuenta? Registrese aqui!!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardFooter, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField],
  styles: ["*[_ngcontent-%COMP%]{\n  max-width: 100%;\n  max-height: 100%;\n}\nmat-card[_ngcontent-%COMP%]{\n  background-color: white;\n  width: 50.625rem;\n  height: 40rem;\n  border-radius: 3.563rem;\n  display: grid;\n  place-items: center;\n}\n\nmat-form-field[_ngcontent-%COMP%]{\n  background-color: white;\n  width: 28.75rem;\n  height: 4.063rem;\n}\n.registerfields[_ngcontent-%COMP%]{\n  display: flex;\n  gap: 2.5rem;\n  margin-top: 2.688rem;\n}\n.registerfields[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n.userlogin[_ngcontent-%COMP%]{\n  background-color: var(--primary-color);\n  font-family: Roboto;\n  font-size: 1.563rem;\n  font-weight: bold;\n  display: grid;\n  place-content: center;\n}\n.recover[_ngcontent-%COMP%]{\n  align-items: center;\n}\n.recover[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: normal;\n  color: #212121;\n}\n.btenter[_ngcontent-%COMP%]{\n  width: 22.188rem;\n  height: 4.375rem;\n  margin: 0 auto;\n  background-color: var(--primary-color);\n  color: white;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  border-radius: 1.563rem;\n}\n.register[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.8em;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5tYXQtY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNTAuNjI1cmVtO1xyXG4gIGhlaWdodDogNDByZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMy41NjNyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMjguNzVyZW07XHJcbiAgaGVpZ2h0OiA0LjA2M3JlbTtcclxufVxyXG4ucmVnaXN0ZXJmaWVsZHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAyLjY4OHJlbTtcclxufVxyXG4ucmVnaXN0ZXJmaWVsZHMgaDN7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG4udXNlcmxvZ2lue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxLjU2M3JlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucmVjb3ZlcntcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yZWNvdmVyIGgze1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG59XHJcbi5idGVudGVye1xyXG4gIHdpZHRoOiAyMi4xODhyZW07XHJcbiAgaGVpZ2h0OiA0LjM3NXJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNTYzcmVtO1xyXG59XHJcbi5yZWdpc3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7884:
/*!****************************************************************!*\
  !*** ./src/app/public/components/newuser/newuser.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewuserComponent: () => (/* binding */ NewuserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;






class NewuserComponent {
  constructor() {
    this.hide = true;
    this.user = {};
  }
}
_class = NewuserComponent;
_class.ɵfac = function NewuserComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-newuser"]],
  inputs: {
    user: "user"
  },
  decls: 28,
  vars: 5,
  consts: [[1, "userlogin", "view"], [1, "registerfields"], ["matInput", "", "placeholder", "Name", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Lastname", "name", "lastname", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "E-mail", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Password", "name", "password", "required", "", 3, "ngModel", "type", "ngModelChange"], [1, "usertype"], [1, "btuser"], ["routerLink", "/login", 1, "register"]],
  template: function NewuserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-content")(3, "form", 1)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ingresar nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field")(7, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewuserComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.user.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ingresar apellido");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field")(11, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewuserComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.user.lastname = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tu e-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field")(15, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewuserComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.user.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Crear contrase\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field")(19, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewuserComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.user.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6)(21, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Para estudiantes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Para expertos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-footer")(26, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ya tienes una cuenta? Inicie Sesion aqui!!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.lastname);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password)("type", ctx.hide ? "password" : "text");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardFooter, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: ["*[_ngcontent-%COMP%]{\n  max-width: 100%;\n  max-height: 100%;\n}\nmat-card[_ngcontent-%COMP%]{\n  background-color: white;\n  width: 50.625rem;\n  border-radius: 3.563rem;\n  display: grid;\n  place-items: center;\n  padding: 2rem;\n}\nmat-card-content[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n}\nmat-form-field[_ngcontent-%COMP%]{\n  background-color: white;\n  width: 28.75rem;\n  height: 4.063rem;\n}\n.registerfields[_ngcontent-%COMP%]{\n}\nmat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n.userlogin[_ngcontent-%COMP%]{\n  background-color: var(--primary-color);\n  font-family: Roboto;\n  font-size: 1.563rem;\n  font-weight: bold;\n  display: grid;\n  place-content: center;\n}\n.usertype[_ngcontent-%COMP%]{\n  align-items: center;\n  display: flex;\n  gap: 2.5rem;\n  margin-top: 2.688rem;\n}\n.btuser[_ngcontent-%COMP%]{\n  width: 16.875rem;\n  height: 4.375rem;\n  background-color: var(--primary-color);\n  color: white;\n  font-family: inherit;\n  font-weight: inherit;\n  border-radius: 1.563rem;\n}\n.register[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.8em;\n  padding-top: 2rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL2NvbXBvbmVudHMvbmV3dXNlci9uZXd1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm1hdC1jYXJke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA1MC42MjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMy41NjNyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxubWF0LWNhcmQtY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDI4Ljc1cmVtO1xyXG4gIGhlaWdodDogNC4wNjNyZW07XHJcbn1cclxuLnJlZ2lzdGVyZmllbGRze1xyXG59XHJcbm1hdC1jYXJkLWNvbnRlbnQgaDN7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG4udXNlcmxvZ2lue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxLjU2M3JlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udXNlcnR5cGV7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMi41cmVtO1xyXG4gIG1hcmdpbi10b3A6IDIuNjg4cmVtO1xyXG59XHJcbi5idHVzZXJ7XHJcbiAgd2lkdGg6IDE2Ljg3NXJlbTtcclxuICBoZWlnaHQ6IDQuMzc1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBib3JkZXItcmFkaXVzOiAxLjU2M3JlbTtcclxufVxyXG4ucmVnaXN0ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4577:
/*!***********************************************************!*\
  !*** ./src/app/public/pages/landing/landing.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/header/header.component */ 7581);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/footer/footer.component */ 6700);
var _class;




class LandingComponent {}
_class = LandingComponent;
_class.ɵfac = function LandingComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-landing"]],
  decls: 78,
  vars: 0,
  consts: [[1, "main"], ["id", "hero", 1, "hero"], [1, "hero__container", "container"], [1, "hero__content"], [1, "hero__img"], ["src", "assets/images/lp-hero.png", "alt", "imagen referencial de GoCarrer"], ["id", "app", 1, "app"], [1, "title"], [1, "app__container", "container"], [1, "card"], [1, "card__img"], ["src", "assets/images/lp-test.png", "alt", "test"], [1, "card__text"], ["src", "assets/images/lp-chats.png", "alt", "chats"], ["src", "assets/images/lp-article.png", "alt", "article"], ["id", "testimonials", 1, "testi"], [1, "container"], [1, "testi-content"], [1, "comment"], [1, "user"], ["id", "contact", 1, "contact"], [1, "contact__container", "container"], [1, "contact__img"], ["src", "assets/images/lp-duda.png", "alt", "contact"], [1, "contact__content"], ["action", "contact"], ["type", "text", "placeholder", "Nombre"], ["type", "text", "placeholder", "Correo"], ["type", "text", "placeholder", "Asunto"], ["placeholder", "Mensaje"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main", 0)(2, "section", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Estas listo para ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "tu futuro?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Actualmente existe una gran cantidad de j\u00F3venes que ignoran lo importante que es escoger una carrera universitaria. Creemos que provey\u00E9ndoles una opci\u00F3n simple para saberlo, lograremos reducir este n\u00FAmero. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section", 6)(14, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Features of the App");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "div", 9)(18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Prueba nuestro test de habilidades");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Disponemos de un test para conocer las preferencias y habilidades blandas de nuestros usuarios. De esta forma ofrecemos un servicio enfocado en cada tipo de usuario.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9)(26, "div", 12)(27, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Chatea con profesionales");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Tenemos a disposici\u00F3n un grupo de psic\u00F3logos especializados en el tema de orientaci\u00F3n vocacional. Donde podr\u00E1s obtener un servicio personalizado y una reunion virtual para mejores resultados");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 9)(34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 12)(37, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u00DAnete a nuestra comunidad de estudiantes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Podr\u00E1s encontrar art\u00EDculos e informaci\u00F3n de profesionales que ejerzan la carrera que sea adecuada para ti. Tendr\u00E1s datos de primera mano e incluso pueden resolver tus dudas mediante las publicaciones.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "section", 15)(42, "div", 16)(43, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "User Testimonials");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 17)(46, "div", 9)(47, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\"\u00A1Mi experiencia en GoCareer fue incre\u00EDble! Lorem ipsum dolor sit amet Aspernatur atque fugit mollitia neque numquam pariatur.\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "- Juan P\u00E9rez");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 9)(52, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque fugit mollitia neque numquam pariatur.\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "- Mar\u00EDa Gonz\u00E1lez");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 9)(57, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque fugit mollitia neque numquam pariatur.\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "- Alejandro Gustavo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "section", 20)(62, "div", 21)(63, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 24)(66, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "PONTE EN CONTACTO CON NOSOTROS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Rellena los siguientes campos y te responderemos lo m\u00E1s pronto posible");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "form", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 26)(72, "input", 27)(73, "input", 28)(74, "textarea", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "ENVIAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "app-footer");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: [".title[_ngcontent-%COMP%] {\n  font-size: 3em;\n  padding-bottom: 5rem;\n  font-weight: 800;\n  text-align: center;\n  text-transform: uppercase;\n}\n.hero[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-image: linear-gradient(#f6f6f6, #bad2ee);\n  padding-top: 14rem;\n}\n.hero__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5rem;\n  flex-wrap: wrap;\n}\n.hero__content[_ngcontent-%COMP%] {\n  width: min(35rem, 100%);\n  color: #808080;\n  margin: 0 auto;\n}\n.hero__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4.5em;\n  line-height: 1.2em;\n}\n.hero__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n  line-height: 0;\n}\n.hero__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  line-height: 1.3em;\n  padding: 1.3rem 0;\n}\n.hero__downloads[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1000px) and (min-width: 0px) {\n  .hero__downloads[_ngcontent-%COMP%] {\n    justify-content: center;\n    transform: translateX(0);\n  }\n}\n.hero__downloads[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: max(10rem, 35%);\n}\n.hero__downloads[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.hero__img[_ngcontent-%COMP%] {\n  width: max(25vw, 20rem);\n  margin: auto;\n}\n.hero__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_hero 2s infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_hero {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.2);\n  }\n}\n.app[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#bad2ee, #f6f6f6);\n}\n.app__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5rem;\n  width: min(70rem, 100%);\n}\n.app__container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5rem;\n  flex-wrap: wrap;\n}\n.app__container[_ngcontent-%COMP%]   .card__img[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: #0288D1;\n  border-radius: 20px;\n  margin: 0 auto;\n}\n.app__container[_ngcontent-%COMP%]   .card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  min-width: 12rem;\n  max-width: 12rem;\n}\n.app__container[_ngcontent-%COMP%]   .card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.app__container[_ngcontent-%COMP%]   .card__text[_ngcontent-%COMP%] {\n  color: #808080;\n  width: min(35rem, 100%);\n  margin: 0 auto;\n}\n.app__container[_ngcontent-%COMP%]   .card__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  padding: 1rem 0;\n  font-weight: 800;\n}\n.app__container[_ngcontent-%COMP%]   .card__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.testi[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#f6f6f6, #bad2ee);\n}\n.testi-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n.testi-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  max-width: 40rem;\n  background: #fff;\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  .comment {\n    font-size: 1.2em;\n    margin-bottom: 1rem;\n  }\n  .user {\n    font-size: 1em;\n    color: #777;\n  }\n}\n\n.contact[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#bad2ee, #f6f6f6);\n}\n.contact__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5rem;\n  flex-wrap: wrap;\n}\n.contact__img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: min(30rem, 100%);\n}\n.contact__content[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 2em;\n  border-radius: 20px;\n  width: min(40rem, 100%);\n  margin: 0 auto;\n}\n.contact__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 800;\n}\n.contact__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 1.5em 0;\n}\n.contact__content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contact__content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact__content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border-radius: 20px;\n  border: 1px solid #808080;\n  margin-bottom: 1rem;\n}\n.contact__content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.contact__content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0288D1;\n  padding: 1rem 2rem;\n  border-radius: 20px;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1EQUFtRDtFQUNuRCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsd0JBQXdCO0VBQzFCO0FBQ0Y7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFDQTtFQUNFLG1EQUFtRDtBQUNyRDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QztJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmhlcm8ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZjZmNmY2LCAjYmFkMmVlKTtcclxuICBwYWRkaW5nLXRvcDogMTRyZW07XHJcbn1cclxuLmhlcm9fX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDVyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5oZXJvX19jb250ZW50IHtcclxuICB3aWR0aDogbWluKDM1cmVtLCAxMDAlKTtcclxuICBjb2xvcjogIzgwODA4MDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uaGVyb19fY29udGVudCBoMSB7XHJcbiAgZm9udC1zaXplOiA0LjVlbTtcclxuICBsaW5lLWhlaWdodDogMS4yZW07XHJcbn1cclxuLmhlcm9fX2NvbnRlbnQgaDEgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogMDtcclxufVxyXG4uaGVyb19fY29udGVudCBwIHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcclxuICBwYWRkaW5nOiAxLjNyZW0gMDtcclxufVxyXG4uaGVyb19fZG93bmxvYWRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkgYW5kIChtaW4td2lkdGg6IDBweCkge1xyXG4gIC5oZXJvX19kb3dubG9hZHMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcbi5oZXJvX19kb3dubG9hZHMgaW1nIHtcclxuICB3aWR0aDogbWF4KDEwcmVtLCAzNSUpO1xyXG59XHJcbi5oZXJvX19kb3dubG9hZHMgaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuLmhlcm9fX2ltZyB7XHJcbiAgd2lkdGg6IG1heCgyNXZ3LCAyMHJlbSk7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5oZXJvX19pbWcgaW1nIHtcclxuICBhbmltYXRpb246IGhlcm8gMnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhlcm8ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxufVxyXG4uYXBwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2JhZDJlZSwgI2Y2ZjZmNik7XHJcbn1cclxuLmFwcF9fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDVyZW07XHJcbiAgd2lkdGg6IG1pbig3MHJlbSwgMTAwJSk7XHJcbn1cclxuLmFwcF9fY29udGFpbmVyIC5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmFwcF9fY29udGFpbmVyIC5jYXJkX19pbWcge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyODhEMTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5hcHBfX2NvbnRhaW5lciAuY2FyZF9faW1nIGltZyB7XHJcbiAgYXNwZWN0LXJhdGlvOiAxNi85O1xyXG4gIG1pbi13aWR0aDogMTJyZW07XHJcbiAgbWF4LXdpZHRoOiAxMnJlbTtcclxufVxyXG4uYXBwX19jb250YWluZXIgLmNhcmRfX2ltZyBpbWc6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG4uYXBwX19jb250YWluZXIgLmNhcmRfX3RleHQge1xyXG4gIGNvbG9yOiAjODA4MDgwO1xyXG4gIHdpZHRoOiBtaW4oMzVyZW0sIDEwMCUpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5hcHBfX2NvbnRhaW5lciAuY2FyZF9fdGV4dCBoMSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uYXBwX19jb250YWluZXIgLmNhcmRfX3RleHQgcCB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLnRlc3RpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2Y2ZjZmNiwgI2JhZDJlZSk7XHJcbn1cclxuLnRlc3RpLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG4udGVzdGktY29udGVudCAuY2FyZCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXgtd2lkdGg6IDQwcmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgLmNvbW1lbnQge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIC51c2VyIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNiYWQyZWUsICNmNmY2ZjYpO1xyXG59XHJcbi5jb250YWN0X19jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uY29udGFjdF9faW1nIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogbWluKDMwcmVtLCAxMDAlKTtcclxufVxyXG4uY29udGFjdF9fY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IG1pbig0MHJlbSwgMTAwJSk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmNvbnRhY3RfX2NvbnRlbnQgaDEge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmNvbnRhY3RfX2NvbnRlbnQgcCB7XHJcbiAgcGFkZGluZzogMS41ZW0gMDtcclxufVxyXG4uY29udGFjdF9fY29udGVudCBmb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFjdF9fY29udGVudCBmb3JtIGlucHV0LCAuY29udGFjdF9fY29udGVudCBmb3JtIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5jb250YWN0X19jb250ZW50IGZvcm0gdGV4dGFyZWEge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmNvbnRhY3RfX2NvbnRlbnQgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI4OEQxO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9026:
/*!***************************************************************!*\
  !*** ./src/app/public/pages/not-found/not-found.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);
var _class;



class NotFoundComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.invalidUrl = "";
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
  ngOnInit() {
    this.invalidUrl = this.route.snapshot.url[0].path;
  }
}
_class = NotFoundComponent;
_class.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-not-found"]],
  decls: 10,
  vars: 1,
  consts: [[1, "container"], ["mat-stroked-button", "", "color", "primary", "aria-label", "Go to Home", 3, "click"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404 Page Not Found");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The path ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " is not valid. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_8_listener() {
        return ctx.navigateToHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invalidUrl);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
  styles: ["div[_ngcontent-%COMP%] {\n  padding-top: 10rem;\n  text-align: center;\n  color: #808080;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzgwODA4MDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5789:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 3170);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 8355);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4362);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7792);
/* harmony import */ var _angular_cdk_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/listbox */ 9730);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/portal */ 3517);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/scrolling */ 275);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ 3507);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ 845);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ 6747);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ 5392);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 8740);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ 549);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ 7321);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ 2698);
/* harmony import */ var _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/menu */ 8576);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/dialog */ 3108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
















































class MaterialModule {}
_class = MaterialModule;
_class.ɵfac = function MaterialModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule, _angular_cdk_listbox__WEBPACK_IMPORTED_MODULE_4__.CdkListboxModule, _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_5__.CdkMenuModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__.MatTreeModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__.ScrollingModule, _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_47__.DialogModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule, _angular_cdk_listbox__WEBPACK_IMPORTED_MODULE_4__.CdkListboxModule, _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_5__.CdkMenuModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__.MatTreeModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__.ScrollingModule, _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_47__.DialogModule]
  });
})();

/***/ }),

/***/ 2112:
/*!************************************************************************************!*\
  !*** ./src/app/specialist/components/card-specialist/card-specialist.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardSpecialistComponent: () => (/* binding */ CardSpecialistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
var _class;




class CardSpecialistComponent {}
_class = CardSpecialistComponent;
_class.ɵfac = function CardSpecialistComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-card-specialist"]],
  inputs: {
    image: "image",
    textbutton: "textbutton",
    pathforbutton: "pathforbutton",
    text: "text"
  },
  decls: 10,
  vars: 4,
  consts: [[1, "card"], [2, "border-radius", "20px", "box-shadow", "0 10px 12px 0 rgba(0, 0, 0, 0.1)"], [1, "flex", 2, "background-color", "white", "border-radius", "20px"], [1, "avatar"], ["alt", "userimage", 3, "src"], [1, "name"], ["mat-button", "", 2, "background-color", "#135E88CC", 3, "routerLink"]],
  template: function CardSpecialistComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-content", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.pathforbutton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textbutton);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent],
  styles: [".card[_ngcontent-%COMP%]{\n  margin: 2rem;\n  width: 40rem;\n}\n\n.avatar[_ngcontent-%COMP%]{\n  max-width: 40%;\n}\n\nimg[_ngcontent-%COMP%]{\n  padding: 1rem;\n}\n\n.flex[_ngcontent-%COMP%]{\n  display: flex;\n\n}\n\n.name[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3BlY2lhbGlzdC9jb21wb25lbnRzL2NhcmQtc3BlY2lhbGlzdC9jYXJkLXNwZWNpYWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgd2lkdGg6IDQwcmVtO1xyXG59XHJcblxyXG4uYXZhdGFye1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmZsZXh7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbi5uYW1le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 718:
/*!************************************************************************!*\
  !*** ./src/app/specialist/components/card-user/card-user.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardUserComponent: () => (/* binding */ CardUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 8497);
var _class;



class CardUserComponent {}
_class = CardUserComponent;
_class.ɵfac = function CardUserComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-card-user"]],
  inputs: {
    user: "user",
    userImage: "userImage"
  },
  decls: 10,
  vars: 2,
  consts: [[1, "card"], [1, "flex", 2, "background-color", "white"], [1, "avatar"], ["alt", "userimage", 3, "src"], [1, "name"], ["mat-button", "", 2, "background-color", "#135E88CC"]],
  template: function CardUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-content", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ir");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user, " ");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent],
  styles: [".card[_ngcontent-%COMP%]{\n  margin: 2rem;\n}\n\n.avatar[_ngcontent-%COMP%]{\n  max-width: 40%;\n}\n\nimg[_ngcontent-%COMP%]{\n  padding: 1rem;\n}\n\n.flex[_ngcontent-%COMP%]{\n  display: flex;\n\n}\n\n.name[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3BlY2lhbGlzdC9jb21wb25lbnRzL2NhcmQtdXNlci9jYXJkLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhOztBQUVmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIG1hcmdpbjogMnJlbTtcclxufVxyXG5cclxuLmF2YXRhcntcclxuICBtYXgtd2lkdGg6IDQwJTtcclxufVxyXG5cclxuaW1ne1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5mbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4ubmFtZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3767:
/*!***************************************************************************************************!*\
  !*** ./src/app/specialist/pages/principal-page-specialist/principal-page-specialist.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrincipalPageSpecialistComponent: () => (/* binding */ PrincipalPageSpecialistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _gocareer_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../gocareer/components/navbar/navbar.component */ 5742);
/* harmony import */ var _gocareer_components_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../gocareer/components/search/search.component */ 4408);
/* harmony import */ var _components_card_specialist_card_specialist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card-specialist/card-specialist.component */ 2112);
var _class;





function PrincipalPageSpecialistComponent_app_card_specialist_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-card-specialist", 3);
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("image", card_r1.imageUrl)("textbutton", card_r1.textbutton)("pathforbutton", card_r1.pathbutton)("text", card_r1.text);
  }
}
class PrincipalPageSpecialistComponent {
  constructor() {
    this.cards = [{
      imageUrl: "https://pic.onlinewebfonts.com/thumbnails/icons_503713.svg",
      text: 'Tienes una nueva prueba para calificar',
      textbutton: "Revisar Prueba",
      pathbutton: "/404"
    }, {
      imageUrl: "https://pic.onlinewebfonts.com/thumbnails/icons_319579.svg",
      text: 'Conoce a los nuevos alumnos que se registraron contigo',
      textbutton: "Conocer Mas",
      pathbutton: "/users-specialist"
    }];
  }
}
_class = PrincipalPageSpecialistComponent;
_class.ɵfac = function PrincipalPageSpecialistComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-principal-page-specialist"]],
  decls: 5,
  vars: 1,
  consts: [[1, "search"], [1, "cards"], [3, "image", "textbutton", "pathforbutton", "text", 4, "ngFor", "ngForOf"], [3, "image", "textbutton", "pathforbutton", "text"]],
  template: function PrincipalPageSpecialistComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-search");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrincipalPageSpecialistComponent_app_card_specialist_4_Template, 1, 4, "app-card-specialist", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cards);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _gocareer_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _gocareer_components_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _components_card_specialist_card_specialist_component__WEBPACK_IMPORTED_MODULE_2__.CardSpecialistComponent],
  styles: [".cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  margin-bottom: 3rem;\n\n\n}\n\n\n\n.search[_ngcontent-%COMP%]{\n  margin-top: 2rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3BlY2lhbGlzdC9wYWdlcy9wcmluY2lwYWwtcGFnZS1zcGVjaWFsaXN0L3ByaW5jaXBhbC1wYWdlLXNwZWNpYWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1COzs7QUFHckI7Ozs7QUFJQTtFQUNFLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4uc2VhcmNoe1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5217:
/*!***************************************************************************************!*\
  !*** ./src/app/specialist/pages/users-of-specialist/users-of-specialist.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersOfSpecialistComponent: () => (/* binding */ UsersOfSpecialistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _gocareer_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../gocareer/components/navbar/navbar.component */ 5742);
/* harmony import */ var _gocareer_components_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../gocareer/components/search/search.component */ 4408);
/* harmony import */ var _components_card_user_card_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card-user/card-user.component */ 718);
var _class;





function UsersOfSpecialistComponent_app_card_user_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-card-user", 3);
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("user", user_r1.name)("userImage", user_r1.image);
  }
}
class UsersOfSpecialistComponent {
  constructor() {
    this.users = [{
      name: "Leo",
      image: "https://thispersondoesnotexist.com/"
    }, {
      name: "Marco",
      image: "https://thispersondoesnotexist.com/"
    }, {
      name: "Mateo",
      image: "https://thispersondoesnotexist.com/"
    }, {
      name: "Luis",
      image: "https://thispersondoesnotexist.com/"
    }, {
      name: "Raul",
      image: "https://thispersondoesnotexist.com/"
    }, {
      name: "Lorenzo",
      image: "https://thispersondoesnotexist.com/"
    }];
  }
}
_class = UsersOfSpecialistComponent;
_class.ɵfac = function UsersOfSpecialistComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-users-of-specialist"]],
  decls: 5,
  vars: 1,
  consts: [[1, "search"], [1, "cards"], [3, "user", "userImage", 4, "ngFor", "ngForOf"], [3, "user", "userImage"]],
  template: function UsersOfSpecialistComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-search");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UsersOfSpecialistComponent_app_card_user_4_Template, 1, 2, "app-card-user", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.users);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _gocareer_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _gocareer_components_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _components_card_user_card_user_component__WEBPACK_IMPORTED_MODULE_2__.CardUserComponent],
  styles: [".search[_ngcontent-%COMP%]{\n  margin-top: 2rem;\n}\n\n.cards[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: repeat(3, 1fr); \n\n  max-width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3BlY2lhbGlzdC9wYWdlcy91c2Vycy1vZi1zcGVjaWFsaXN0L3VzZXJzLW9mLXNwZWNpYWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUMsRUFBRSxvQ0FBb0M7RUFDM0UsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2h7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLmNhcmRze1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgLyogQ3JlYXIgMyBjb2x1bW5hcyBkZSBpZ3VhbCBhbmNobyAqL1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
