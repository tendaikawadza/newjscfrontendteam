"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(userService) {
        this.userService = userService;
        this.subscriptions = [];
    }
    PeopleComponent.prototype.getUsers = function (showNotification) {
        this.refreshing = true;
        this.subscriptions.push;
    };
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent = __decorate([
        core_1.Component({
            selector: 'app-people',
            templateUrl: './people.component.html',
            styleUrls: ['./people.component.css']
        })
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;

//# sourceMappingURL=people.component.js.map
