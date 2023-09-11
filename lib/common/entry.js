"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineJSAlert = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const initialize_1 = require("./initialize");
function InlineJSAlert() {
    (0, inlinejs_1.WaitForGlobal)().then(() => (0, initialize_1.Initialize)());
}
exports.InlineJSAlert = InlineJSAlert;
