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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.output = 'Hello World !!';
    }
    AppComponent.prototype.insertInTo = function () {
        console.log('username :: ', this.username);
        this.headers = new http_1.Headers({ 'Content-Type': 'text/html' });
        this.options = new http_1.RequestOptions({
            headers: this.headers
        });
        var a = { username: this.username };
        this.http.post("//localhost/angularServer/select.php", a, this.options).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err.json().message); }, function () { return console.log('Authentication Complete'); });
        this.username = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'init-app',
            template: "{{data}}!\n    Name :: <input type=\"text\" [(ngModel)]=\"username\"/>\n    Insert :: <button (click)=\"insertInTo()\">insert</button>"
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map