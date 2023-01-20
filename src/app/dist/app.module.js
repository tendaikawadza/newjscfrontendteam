"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var auth_interceptor_1 = require("./interceptor/auth.interceptor");
var user_service_1 = require("./service/user.service");
var authentication_guard_1 = require("./guard/authentication.guard");
var notification_module_1 = require("./notification.module");
var notification_service_1 = require("./service/notification.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var user_component_1 = require("./user/user.component");
var shared_module_1 = require("./shared/shared.module");
var stock_component_1 = require("./stock/stock.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                user_component_1.UserComponent,
                stock_component_1.StockComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule,
                http_1.HttpClientModule,
                notification_module_1.NotificationModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule
            ],
            providers: [notification_service_1.NotificationService, authentication_guard_1.AuthenticationGuard, AuthenticatorResponse, user_service_1.UserService,
                { provide: http_1.HTTP_INTERCEPTORS, useClass: auth_interceptor_1.AuthInterceptor, multi: true }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
