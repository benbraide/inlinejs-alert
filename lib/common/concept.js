"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertConcept = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
class AlertConcept {
    constructor() {
        this.name_ = '';
        this.handler_ = null;
    }
    Notify(options) {
        var _a;
        return (_a = this.ResolveHandler()) === null || _a === void 0 ? void 0 : _a.Notify(options);
    }
    Confirm(options) {
        var _a;
        return (_a = this.ResolveHandler()) === null || _a === void 0 ? void 0 : _a.Confirm(options);
    }
    Prompt(options) {
        var _a;
        return (_a = this.ResolveHandler()) === null || _a === void 0 ? void 0 : _a.Prompt(options);
    }
    SetName(name) {
        this.name_ = name;
    }
    GetName() {
        return this.name_;
    }
    SetHandler(handler) {
        this.handler_ = handler;
    }
    GetHandler() {
        return this.handler_;
    }
    ResolveHandler() {
        return (this.handler_ || (0, inlinejs_1.GetGlobal)().GetConcept(this.name_));
    }
}
exports.AlertConcept = AlertConcept;
