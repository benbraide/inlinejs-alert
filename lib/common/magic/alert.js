"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertMagicHandlerCompact = exports.AlertMagicHandler = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const names_1 = require("../names");
function CreateAlertProxy() {
    const getConcept = () => (0, inlinejs_1.GetGlobal)().GetConcept(names_1.AlertConceptName);
    let methods = {
        getConcept: () => getConcept(),
        notify: (options) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Notify(options); },
        confirm: (options) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Confirm(options); },
        prompt: (options) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Prompt(options); },
    };
    return (0, inlinejs_1.CreateReadonlyProxy)(methods);
}
const AlertProxy = CreateAlertProxy();
exports.AlertMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)(names_1.AlertMagicName, () => AlertProxy);
function AlertMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.AlertMagicHandler);
}
exports.AlertMagicHandlerCompact = AlertMagicHandlerCompact;
