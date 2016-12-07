"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ChildComponent = (function () {
    function ChildComponent() {
    }
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "userName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ChildComponent.prototype, "userAge", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'binding-input-child-comp',
        template: "<div>\n                <p>\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F {{userName}}</p>\n                <p>\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F {{userAge}}</p>\n              </div>",
        styles: ["div { background-color: WhiteSmoke }"]
    }),
    __metadata("design:paramtypes", [])
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map