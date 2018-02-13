webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Components/chat/chat-home/chat-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/chat/chat-home/chat-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-3\"></div>\n  <div class=\"col-xs-6\">\n    <form (ngSubmit)=\"searchPeople(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n          <input\n          type=\"text\"\n          name=\"username\"\n          class=\"form-control\"\n          placeholder=\"Search Friends\"\n          ngModel>\n          <button type=\"submit\" name=\"search\" class=\"btn btn-primary\">Search</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Components/chat/chat-home/chat-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_chat_service__ = __webpack_require__("../../../../../src/app/Services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatHomeComponent = /** @class */ (function () {
    function ChatHomeComponent(chatSer) {
        this.chatSer = chatSer;
    }
    ChatHomeComponent.prototype.ngOnInit = function () {
    };
    ChatHomeComponent.prototype.searchPeople = function (f) {
        console.log(f.value.username);
        this.chatSer.addFriend(f.value.username).subscribe(function (res) {
            console.log('Added as friend');
        }, function (err) {
            console.log('Couldnot add friend');
        });
    };
    ChatHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-home',
            template: __webpack_require__("../../../../../src/app/Components/chat/chat-home/chat-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/chat/chat-home/chat-home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_chat_service__["a" /* ChatService */]])
    ], ChatHomeComponent);
    return ChatHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button,\r\nbutton:hover {\r\n  border: none;\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n.chat__messages,\r\n.chat__sidebar ul {\r\n  list-style-type: none;\r\n}\r\n* {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: HelveticaNeue-Light, \"Helvetica Neue Light\", \"Helvetica Neue\",\r\n    Helvetica, Arial, \"Lucida Grande\", sans-serif;\r\n  font-weight: 300;\r\n  font-size: 0.95rem;\r\n}\r\nli,\r\nul {\r\n  list-style-position: inside;\r\n}\r\nh3 {\r\n  font-weight: 600;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\nbutton {\r\n  background: #265f82;\r\n  cursor: pointer;\r\n  -webkit-transition: background 0.3s ease;\r\n  transition: background 0.3s ease;\r\n}\r\nbutton:hover {\r\n  background: #1f4c69;\r\n}\r\nbutton:disabled {\r\n  cursor: default;\r\n  background: #698ea5;\r\n}\r\n.centered-form {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  background: linear-gradient(\r\n    325deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n}\r\n.centered-form__form {\r\n  background: rgba(250, 250, 250, 0.9);\r\n  border: 1px solid #e1e1e1;\r\n  border-radius: 5px;\r\n  padding: 0 20px;\r\n  margin: 20px;\r\n  width: 230px;\r\n}\r\n.form-field {\r\n  margin: 20px 0;\r\n}\r\n.form-field > * {\r\n  width: 100%;\r\n}\r\n.form-field label {\r\n  display: block;\r\n  margin-bottom: 7px;\r\n}\r\n.form-field input,\r\n.form-field select {\r\n  border: 1px solid #e1e1e1;\r\n  padding: 10px;\r\n}\r\n.chat {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.chat__sidebar {\r\n  overflow-y: scroll;\r\n  width: 20%;\r\n  float: left;\r\n  height: 90vh;\r\n  background: linear-gradient(\r\n    325deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n}\r\n.chat__footer,\r\n.chat__sidebar li {\r\n  background: #e6eaee;\r\n  padding: 10px;\r\n}\r\n.chat__sidebar h3 {\r\n  color: #e6eaee;\r\n  margin: 10px 20px;\r\n  text-align: left;\r\n}\r\n.chat__sidebar li {\r\n  border: 1px solid #e1e1e1;\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n}\r\n.chat__main {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  float: left;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 90vh;\r\n  width: 80%;\r\n}\r\n.chat__messages {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  overflow-y: scroll;\r\n  -webkit-overflow-scrolling: touch;\r\n  padding: 10px;\r\n}\r\n.chat__footer {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n}\r\n.chat__footer form {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.chat__footer form * {\r\n  margin-right: 10px;\r\n}\r\n.chat__footer input {\r\n  border: none;\r\n  padding: 10px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n}\r\n.message {\r\n  padding: 10px;\r\n}\r\n.message__title {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-bottom: 5px;\r\n}\r\n.message__title h4 {\r\n  font-weight: 600;\r\n  margin-right: 10px;\r\n}\r\n.message__title span {\r\n  color: #999;\r\n}\r\n@media (max-width: 600px) {\r\n  * {\r\n    font-size: 1rem;\r\n  }\r\n  .chat__sidebar {\r\n    /* display: none; */\r\n    width: 100%;\r\n  }\r\n  .chat__footer {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  .chat__footer form {\r\n    margin-bottom: 10px;\r\n  }\r\n  .chat__footer button {\r\n    margin-right: 0;\r\n  }\r\n  .chat__main {\r\n    width: 100%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat__sidebar\">\n  <h3>People</h3>\n  <div id=\"users\">\n    <ul>\n      <li\n      *ngFor=\"let user of friends\"\n      [routerLink]=\"[user.username]\"\n      routerLinkActive=\"active\"\n      style= \"cursor: pointer\"\n      >{{user.username}}</li>\n    </ul>\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/Components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_chat_service__ = __webpack_require__("../../../../../src/app/Services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatSer) {
        this.chatSer = chatSer;
        this.friends = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.chatSer.init();
        this.chatSer.friendsEmit.subscribe(function (friends) {
            _this.friends = friends;
        });
        this.chatSer.getFriends();
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/Components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_chat_service__["a" /* ChatService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/chat/chatbox/chatbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .fenn {\r\n  display: none;\r\n  color: #000000;\r\n\r\n}\r\n\r\n\r\n\r\n\r\nh3 {\r\n  font-weight: 600;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\nbutton {\r\n  background: #265f82;\r\n  cursor: pointer;\r\n  transition: background 0.3s ease;\r\n}\r\nbutton:hover {\r\n  background: #1f4c69;\r\n}\r\n\r\n.centered-form {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  justify-content: center;\r\n  background: -moz-linear-gradient(\r\n    125deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n  background: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    right bottom,\r\n    color-stop(0, rgba(49, 84, 129, 1)),\r\n    color-stop(100%, rgba(39, 107, 130, 1))\r\n  );\r\n  background: -webkit-linear-gradient(\r\n    125deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n  background: -o-linear-gradient(\r\n    125deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n  background: -ms-linear-gradient(\r\n    125deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n  background: linear-gradient(\r\n    325deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n}\r\n.centered-form__form {\r\n  background: rgba(250, 250, 250, 0.9);\r\n  border: 1px solid #e1e1e1;\r\n  border-radius: 5px;\r\n  padding: 0 20px;\r\n  margin: 20px;\r\n  width: 230px;\r\n}\r\n.form-field {\r\n  margin: 20px 0;\r\n}\r\n.form-field > * {\r\n  width: 100%;\r\n}\r\n.form-field label {\r\n  display: block;\r\n  margin-bottom: 7px;\r\n}\r\n.form-field input,\r\n.form-field select {\r\n  border: 1px solid #e1e1e1;\r\n  padding: 10px;\r\n}\r\n.chat {\r\n  display: flex;\r\n}\r\n.chat__sidebar {\r\n  overflow-y: scroll;\r\n  width: 20%;\r\n  float: left;\r\n  height: 90vh;\r\n  background: -moz-linear-gradient(\r\n    125deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n  background: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    right bottom,\r\n    color-stop(0, rgba(49, 84, 129, 1)),\r\n    color-stop(100%, rgba(39, 107, 130, 1))\r\n  );\r\n  background: -webkit-linear-gradient(\r\n    125deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n  background: -o-linear-gradient(\r\n    125deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n  background: -ms-linear-gradient(\r\n    125deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n  background: linear-gradient(\r\n    325deg,\r\n    rgba(39, 107, 130, 1) 0,\r\n    rgba(49, 84, 129, 1) 100%\r\n  );\r\n}\r\n.chat__footer,\r\n.chat__sidebar li {\r\n  background: #e6eaee;\r\n  padding: 10px;\r\n}\r\n.chat__sidebar h3 {\r\n  color: #e6eaee;\r\n  margin: 10px 20px;\r\n  text-align: left;\r\n}\r\n.chat__sidebar li {\r\n  border: 1px solid #e1e1e1;\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n}\r\n.chat__main {\r\n  display: flex;\r\n  float: left;\r\n  flex-direction: column;\r\n  height: 90vh;\r\n  width: 80%;\r\n}\r\n.chat__messages {\r\n  flex-grow: 1;\r\n  overflow-y: scroll;\r\n  -webkit-overflow-scrolling: touch;\r\n  padding: 10px;\r\n}\r\n.chat__footer {\r\n  display: flex;\r\n  flex-shrink: 0;\r\n}\r\n.chat__footer form {\r\n  flex-grow: 1;\r\n  display: flex;\r\n}\r\n.chat__footer form * {\r\n  margin-right: 10px;\r\n}\r\n.chat__footer input {\r\n  border: none;\r\n  padding: 10px;\r\n  flex-grow: 1;\r\n}\r\n.message {\r\n  padding: 10px;\r\n}\r\n.message__title {\r\n  display: flex;\r\n  margin-bottom: 5px;\r\n}\r\n.message__title h4 {\r\n  font-weight: 600;\r\n  margin-right: 10px;\r\n}\r\n.message__title span {\r\n  color: #999;\r\n}\r\n\r\nli {\r\n  background: rgb(185, 212, 247);\r\n  margin: 8px;\r\n  border-radius: 10px;\r\n  padding: 8px;\r\n  width: 45%;\r\n\r\n} */\r\n* {\r\n  font-family: HelveticaNeue-Light, \"Helvetica Neue Light\", \"Helvetica Neue\",\r\n    Helvetica, Arial, \"Lucida Grande\", sans-serif;\r\n}\r\nli,\r\nul {\r\n  list-style-type: none;\r\n  /* display: flex; */\r\n}\r\n/* ul li {\r\n  display: inline-block;\r\n} */\r\n#curruser {\r\n  background: #265f82;\r\n  padding: 0.8rem;\r\n  text-align: center;\r\n  color: white;\r\n  width: 100%;\r\n  font-weight: 600;\r\n  font-size: 1.3rem;\r\n}\r\n#messages {\r\n  width: 100%;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  overflow-y: scroll;\r\n  -webkit-overflow-scrolling: touch;\r\n  padding: 10px;\r\n}\r\n#message {\r\n  font-size: 0.9rem;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n#timestamp {\r\n  font-size: 0.6rem;\r\n  padding: 0;\r\n  margin: 0;\r\n  text-align: right;\r\n}\r\n.chat-card {\r\n  width: 95%;\r\n  margin: 0.5rem 1.2rem;\r\n  padding: 0.1rem 0.1rem;\r\n}\r\n.chat-div {\r\n  background: #e6f7ff;\r\n  border-radius: 0.8rem;\r\n  padding: 0.5rem 1rem;\r\n}\r\n.chat-box {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  float: left;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 90vh;\r\n  width: 80%;\r\n}\r\n.chat-footer  {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n}\r\n.chat-footer form {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.chat-footer form * {\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n  margin-top: 0px;\r\n}\r\n.chat-footer input {\r\n  border: none;\r\n  padding: 10px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n}\r\n/* @media (max-width: 600px) {\r\n  * {\r\n    font-size: 1rem;\r\n  }\r\n  .chat__sidebar {\r\n    width: 100%;\r\n    display: none;\r\n  }\r\n  .chat__footer {\r\n    flex-direction: column;\r\n  }\r\n  .chat__footer form {\r\n    margin-bottom: 10px;\r\n  }\r\n  .chat__footer button {\r\n    margin-right: 0;\r\n  }\r\n   .chat__main {\r\n    width: 100%;\r\n  }\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/chat/chatbox/chatbox.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"chat__main\">\n  <p id=\"curruser\">{{messageObject.toUser}}</p>\n  <ol id=\"messages\" class=\"chat__messages list-group\">\n    <li *ngFor=\"let mess of messages\" >\n      <div ngClass=\"'fenn': mess.fromUser\" >\n          <span id=\"user\">{{mess.fromUser}}\n          </span>\n            :\n          <span id=\"message\">\n            {{mess.message}}\n          </span>\n          <span id=\"timestamp\"> {{mess.timeStamp | date:'shortTime'}}</span>\n      </div>\n    </li>\n  </ol>\n\n  <div class=\"chat__footer\">\n    <form id=\"message-form\">\n      <input name=\"message\" type=\"text\" placeholder=\"Message\" [(ngModel)]=\"message\" autofocus autocomplete=\"off\"/>\n      <button (click)=\"sendMessage()\">Send</button>\n    </form>\n  </div>\n</div> -->\n\n<div class=\"chat-box\">\n    <p id=\"curruser\">{{messageObject.toUser}}</p>\n      <ol #scroll id=\"messages\" ngx-auto-scroll lock-y-offset='10' observe-attributes>\n          <li *ngFor=\"let mess of messages\" class=\"chat-card\" >\n            <div class=\"row\">\n                <div [ngClass] = \"{'col-md-8': mess.toUser==friend}\"></div>\n                <div class=\"chat-div col-md-4\">\n                    <p id=\"message\">\n                      {{mess.message}}\n                    </p>\n                    <p id=\"timestamp\"> {{mess.timeStamp | date:'shortTime'}}</p>\n                </div>\n            </div>\n          </li>\n        </ol>\n\n\n\n    <div class=\"chat-footer\">\n      <form id=\"message-form\">\n        <input name=\"message\" type=\"text\" placeholder=\"Message\" [(ngModel)]=\"message\" autofocus autocomplete=\"off\"/>\n        <button class=\"btn btn-primary\" (click)=\"sendMessage()\">Send</button>\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/Components/chat/chatbox/chatbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_chat_service__ = __webpack_require__("../../../../../src/app/Services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatboxComponent = /** @class */ (function () {
    function ChatboxComponent(chatSer, route_name) {
        this.chatSer = chatSer;
        this.route_name = route_name;
        this.messages = [];
        this.messageObject = {
            toUser: String,
            fromUser: String,
            timeStamp: new Date(),
            message: String
        };
    }
    ChatboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route_name.params.subscribe(function (params) {
            _this.friend = params['userid'];
            _this.messageObject.toUser = _this.friend;
            _this.connection = _this.chatSer.oldMess.subscribe(function (message) {
                console.log('Messages11:', message);
                _this.messages = message[_this.friend];
                console.log('Messages1old:', _this.messages);
            });
            _this.chatSer.getMessageEmit();
        });
        this.chatSer.currUser.subscribe(function (currUser) {
            _this.messageObject.fromUser = currUser.username;
            console.log('Current User', currUser);
        });
    };
    ChatboxComponent.prototype.sendMessage = function () {
        console.log(this.message);
        this.messageObject.timeStamp = new Date();
        this.messageObject.message = this.message;
        this.addToChat(this.messageObject);
        this.chatSer.sendMessage(this.messageObject);
        console.log(this.messageObject);
        this.message = '';
    };
    ChatboxComponent.prototype.addToChat = function (mssg) {
        console.log('added to chat');
        if (this.messages) {
            this.messages.push(Object.assign({}, mssg));
        }
        else {
            this.messages = [this.messageObject];
        }
    };
    ChatboxComponent.prototype.ngOnDestroy = function () {
        this.messages = [];
        this.connection.unsubscribe();
    };
    ChatboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chatbox',
            template: __webpack_require__("../../../../../src/app/Components/chat/chatbox/chatbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/chat/chatbox/chatbox.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ChatboxComponent);
    return ChatboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n<br><br><br>\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n"

/***/ }),

/***/ "../../../../../src/app/Components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/Components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 430px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n#login {\r\n  margin-top: 60px;\r\n}\r\n\r\nbutton {\r\n  max-width: 400px;\r\n  margin: auto;\r\n}\r\n\r\np {\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"login\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-sm-6 col-sm-offset-2\">\r\n\r\n      <form class=\"form-signin\" (ngSubmit)=\"onLoginSubmit(f)\" #f=\"ngForm\">\r\n        <h2 class=\"form-signin-heading display-4\">LOGIN</h2>\r\n\r\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n        <input\r\n          type=\"username\"\r\n          id=\"username\"\r\n          class=\"form-control\"\r\n          placeholder=\"Email address\"\r\n          name=\"username\"\r\n          ngModel\r\n          required\r\n          autofocus>\r\n\r\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n        <input\r\n          type=\"password\"\r\n          id=\"inputPassword\"\r\n          class=\"form-control\"\r\n          placeholder=\"Password\"\r\n          name=\"password\"\r\n          ngModel\r\n          required>\r\n\r\n        <p class=\"help-block\" *ngIf=\"submitted\">{{ Mssg }}</p>\r\n\r\n        <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Sign in</button>\r\n      </form>\r\n\r\n      <hr>\r\n      <button class=\"btn btn-lg btn-info btn-block\"\r\n      type=\"button\"\r\n      routerLink=\"/register\">New User? Register Here</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__ = __webpack_require__("../../../../../src/app/Services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_chat_service__ = __webpack_require__("../../../../../src/app/Services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authSer, router, chatSer) {
        this.authSer = authSer;
        this.router = router;
        this.chatSer = chatSer;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function (f) {
        var _this = this;
        var User = {
            username: f.value.username,
            password: f.value.password
        };
        this.authSer.loginUser(User).subscribe(function (res) {
            var token = res.headers.get('Authorization');
            var userObj = res.json().user;
            _this.authSer.storeUserData(token, userObj);
            _this.chatSer.init();
            _this.router.navigate(['/chat']);
        }, function (err) {
            _this.submitted = true;
            _this.Mssg = JSON.parse(err._body).msg;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/Components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__Services_chat_service__["a" /* ChatService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\" >\n    <a class=\"navbar-brand mb-0 h1\" href=\"#\">PIGEON</a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n      data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item \" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" routerLink=\"/\">Home </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"checkLoggedIn()\">\n          <a class=\"nav-link\"routerLink=\"/chat\">Chat</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"checkLoggedIn()\">\n          <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!checkLoggedIn()\">\n          <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!checkLoggedIn()\">\n          <a class=\"nav-link\" routerLink=\"/login\">LogIn</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"checkLoggedIn()\">\n          <a class=\"nav-link\" (click)=\"logout()\">LogOut</a>\n        </li>\n      </ul>\n\n    </div>\n\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/Components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__ = __webpack_require__("../../../../../src/app/Services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authSer, router) {
        this.authSer = authSer;
        this.router = router;
        this.loggedIn = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.loggedIn = this.authSer.loggedIn();
    };
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        this.authSer.logout().subscribe(function (data) {
            _this.router.navigate(['/']);
            _this.loggedIn = false;
        }, function (err) {
            _this.router.navigate(['/']);
            _this.loggedIn = false;
        });
    };
    NavBarComponent.prototype.checkLoggedIn = function () {
        return this.authSer.loggedIn();
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/Components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/people/people.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  people works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleComponent = /** @class */ (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-people',
            template: __webpack_require__("../../../../../src/app/Components/people/people.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/Components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 430px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"text\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: -1px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n#retypepass {\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n#register {\r\n  margin-top: 30px;\r\n}\r\n\r\np {\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"register\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-sm-6 col-sm-offset-2\">\r\n        <form class=\"form-signin\" #f=\"ngForm\" (ngSubmit)=\"onRegisterSubmit(f)\" >\r\n          <h2 class=\"form-signin-heading display-4\">REGISTER</h2>\r\n          <input\r\n            type=\"text\"\r\n            name=\"name\"\r\n            class=\"form-control\"\r\n            placeholder=\"Enter Name\"\r\n            required\r\n            ngModel\r\n            autofocus>\r\n          <input\r\n            type=\"text\"\r\n            name=\"username\"\r\n            class=\"form-control\"\r\n            placeholder=\"Enter username\"\r\n            [(ngModel)]=\"username\"\r\n            ngModel\r\n            minlength=\"5\"\r\n            required>\r\n          <input\r\n            type=\"email\"\r\n            name=\"email\"\r\n            class=\"form-control\"\r\n            placeholder=\"Email address\"\r\n            [(ngModel)]=\"email\"\r\n            ngModel\r\n            email\r\n            required>\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            placeholder=\"Type Password\"\r\n            name=\"password\"\r\n            minlength=\"6\"\r\n            ngModel\r\n            required>\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            id=\"retypepass\"\r\n            name=\"retypepass\"\r\n            placeholder=\"Retype Password\"\r\n            ngModel\r\n            minlength=\"6\"\r\n            required>\r\n            <p class=\"help-block\" *ngIf=\"submitted\">{{ Mssg }}</p>\r\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Register</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__ = __webpack_require__("../../../../../src/app/Services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authSer, router) {
        this.authSer = authSer;
        this.router = router;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log('Init');
    };
    RegisterComponent.prototype.onRegisterSubmit = function (f) {
        var _this = this;
        var User = {
            name: f.value.name,
            username: f.value.username,
            email: f.value.email,
            password: f.value.password,
        };
        console.log(this.signUpForm);
        this.authSer.registerUser(User).subscribe(function (data) {
            _this.submitted = false;
            _this.router.navigate(['/login']);
        }, function (err) {
            if (err) {
                _this.Mssg = JSON.parse(err._body).msg;
                var code = JSON.parse(err._body).code;
                if (code === 4) {
                    _this.email = null;
                }
                if (code === 5) {
                    _this.username = null;
                }
                _this.submitted = true;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], RegisterComponent.prototype, "signUpForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/Components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__ = __webpack_require__("../../../../../src/app/Services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authSer, router) {
        this.authSer = authSer;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authSer.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/Services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.loadToken();
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AuthenticationService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/login', user, { headers: headers });
    };
    AuthenticationService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.storeUserData = function (token, user) {
        this.authToken = token;
        this.user = user;
        localStorage.setItem('id_token', this.authToken);
        localStorage.setItem('user', JSON.stringify(this.user));
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthenticationService.prototype.loggedIn = function () {
        if (localStorage.getItem('user')) {
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.logout = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.delete('users/logout', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/Services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService(authSer, http) {
        this.authSer = authSer;
        this.http = http;
        this.url = 'http://192.168.1.45:8080';
        this.messages = [];
        this.oldMessages = [];
        this.myMessages = [];
        this.friends = [];
        this.newMess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.oldMess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.currUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.friendsEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.init();
    }
    ChatService.prototype.init = function () {
        var _this = this;
        this.authSer.getProfile().subscribe(function (res) {
            _this.currUser.emit(res.user);
            _this.currUsername = res.user;
            console.log(res.user.username);
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__({
                query: {
                    username: res.user.username
                }
            });
            _this.getOldMessages();
        }, function (err) {
            console.log(err);
        });
    };
    ChatService.prototype.sendMessage = function (message) {
        message.fromUser = this.currUsername.username;
        // this.messages[message.toUser].push(message);
        console.log('Message obj Service', message);
        console.log('Message obj Service2', this.messages);
        this.socket.emit('add-message', message);
    };
    ChatService.prototype.addFriend = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        var userObj = {
            username: this.currUsername,
            newfriend: username,
            name: 'Fenn'
        };
        headers.append('Content-Type', 'application/json');
        return this.http.post('addFriend', userObj, { headers: headers });
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        this.socket.on('message', function (data) {
            console.log('new emitt mess ser init', _this.messages);
            console.log('Service recieved text', data);
            var name = data.fromUser;
            data.timeStamp = new Date(data.timeStamp);
            if (_this.messages[name]) {
                _this.messages[name].push(data);
            }
            else {
                _this.messages[name] = [data];
            }
            console.log('new emitt mess ser', _this.messages);
        });
        this.socket.on('disconnect', function () {
            _this.messages = [];
            _this.myMessages = [];
            _this.oldMessages = [];
            _this.oldMess.emit(_this.messages);
        });
    };
    ChatService.prototype.getOldMessages = function () {
        var _this = this;
        this.socket.on('old-messages', function (data) {
            console.log('old-message service', data);
            // Olds chats from others
            if (data.chat) {
                for (var _i = 0, _a = data.chat.chats; _i < _a.length; _i++) {
                    var chat = _a[_i];
                    chat.timeStamp = new Date(chat.timeStamp);
                    console.log('each chat', chat);
                    var name_1 = chat.fromUser;
                    if (_this.oldMessages[name_1]) {
                        _this.oldMessages[name_1].push(chat);
                    }
                    else {
                        _this.oldMessages[name_1] = [chat];
                    }
                    console.log('for loop1', _this.oldMessages);
                }
                // my old chats
                for (var _b = 0, _c = data.chat.myChats; _b < _c.length; _b++) {
                    var chat = _c[_b];
                    chat.timeStamp = new Date(chat.timeStamp);
                    console.log('each mychat', chat);
                    var name_2 = chat.toUser;
                    if (_this.myMessages[name_2]) {
                        _this.myMessages[name_2].push(chat);
                    }
                    else {
                        _this.myMessages[name_2] = [chat];
                    }
                    console.log('for loop', _this.myMessages);
                }
                _this.friends = data.chat.friends;
                _this.sortMessage();
                _this.friendsEmit.emit(_this.friends);
            }
            console.log('Friends Service', _this.friends);
            console.log('Messages Service', _this.messages);
        });
        this.getMessages();
    };
    ChatService.prototype.getFriends = function () {
        this.friendsEmit.emit(this.friends);
    };
    ChatService.prototype.getMessageEmit = function () {
        this.oldMess.emit(this.messages);
    };
    ChatService.prototype.sortMessage = function () {
        console.log('sortinginside...');
        var i, j;
        for (var _i = 0, _a = this.friends; _i < _a.length; _i++) {
            var user = _a[_i];
            var who = user.username;
            if (this.oldMessages[who] && this.myMessages[who]) {
                console.log('oldmes sort');
                for (i = 0, j = 0; i < this.oldMessages[who].length
                    && j < this.myMessages[who].length;) {
                    if (this.oldMessages[who][i].timeStamp <
                        this.myMessages[who][j].timeStamp) {
                        if (this.messages[who]) {
                            this.messages[who].push(this.oldMessages[who][i]);
                        }
                        else {
                            this.messages[who] = [this.oldMessages[who][i]];
                        }
                        i++;
                    }
                    else {
                        if (this.messages[who]) {
                            this.messages[who].push(this.myMessages[who][j]);
                        }
                        else {
                            this.messages[who] = [this.myMessages[who][j]];
                        }
                        j++;
                    }
                }
                while (i < this.oldMessages[who].length) {
                    this.messages[who].push(this.oldMessages[who][i]);
                    i++;
                }
                while (j < this.myMessages[who].length) {
                    this.messages[who].push(this.myMessages[who][j]);
                    j++;
                }
            }
            else if (this.messages[who]) {
                this.messages[who].push(this.oldMessages[who]);
            }
            else if (this.messages[who]) {
                this.messages[who].push(this.myMessages[who]);
            }
            else {
                this.messages[who] = [];
                console.log('strange');
            }
        }
        console.log('sorting...');
        this.oldMess.emit(this.messages);
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-nav-bar></app-nav-bar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__ = __webpack_require__("../../../../../src/app/Services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_chat_service__ = __webpack_require__("../../../../../src/app/Services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authSer, chatSer) {
        this.authSer = authSer;
        this.chatSer = chatSer;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authSer.loadToken();
        // this.chatSer.init();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__Services_chat_service__["a" /* ChatService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Guards_auth_guard__ = __webpack_require__("../../../../../src/app/Guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/Components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_login_login_component__ = __webpack_require__("../../../../../src/app/Components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_register_register_component__ = __webpack_require__("../../../../../src/app/Components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_people_people_component__ = __webpack_require__("../../../../../src/app/Components/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Components_home_home_component__ = __webpack_require__("../../../../../src/app/Components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Components_profile_profile_component__ = __webpack_require__("../../../../../src/app/Components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Services_authentication_service__ = __webpack_require__("../../../../../src/app/Services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Components_chat_chat_component__ = __webpack_require__("../../../../../src/app/Components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Services_chat_service__ = __webpack_require__("../../../../../src/app/Services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Components_chat_chatbox_chatbox_component__ = __webpack_require__("../../../../../src/app/Components/chat/chatbox/chatbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Components_chat_chat_home_chat_home_component__ = __webpack_require__("../../../../../src/app/Components/chat/chat-home/chat-home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { FlashMessagesModule } from 'angular2-flash-messages';

// import { NgxAutoScrollModule } from 'ngx-auto-scroll';













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__Components_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__Components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__Components_login_login_component__["a" /* LoginComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_14__Components_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__Guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_17__Components_chat_chat_home_chat_home_component__["a" /* ChatHomeComponent */] },
            { path: ':userid', component: __WEBPACK_IMPORTED_MODULE_16__Components_chat_chatbox_chatbox_component__["a" /* ChatboxComponent */] }
        ] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__Components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__Guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Components_people_people_component__["a" /* PeopleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__Components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__Components_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_16__Components_chat_chatbox_chatbox_component__["a" /* ChatboxComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Components_chat_chat_home_chat_home_component__["a" /* ChatHomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__Services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_5__Guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_15__Services_chat_service__["a" /* ChatService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map