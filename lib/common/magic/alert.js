"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertMagicHandlerCompact = exports.AlertMagicHandler = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const names_1 = require("../names");
let AlertConceptName = '';
let AlertHandler = null;
function TransformNotifyOptions(options) {
    if ((0, inlinejs_1.IsObject)(options)) {
        options['icon'] = (options['icon'] || (options['error'] ? 'error' : (options['type'] || options['code'] || 'success')));
        options['text'] = (options['text'] || options['message']);
        options['toast'] = (!!options['toast'] || !!options['asToast']);
        options['position'] = (options['position'] || (options['toast'] ? 'top-end' : 'center'));
        options['timer'] = (options['timer'] || ((typeof options['duration'] === 'number') ? options['duration'] : ((options['duration'] === false) ? undefined : 5000)));
    }
    else {
        options = {
            icon: 'info',
            title: 'Information',
            text: options,
            position: 'center',
        };
    }
    return options;
}
function TransformConfirmOptions(options) {
    if ((0, inlinejs_1.IsObject)(options)) {
        options['icon'] = (options['icon'] || 'warning');
        options['title'] = (options['title'] || 'Please confirm your action');
        options['text'] = (options['text'] || options['message']);
        options['confirmButtonText'] = (options['confirmButtonText'] || 'Yes, continue');
        options['position'] = (options['position'] || 'center');
        options['toast'] = false;
        options['timer'] = undefined;
    }
    else {
        options = {
            icon: 'warning',
            title: 'Please confirm your action',
            text: options,
            confirmButtonText: 'Yes, continue',
            position: 'center',
        };
    }
    return options;
}
function TransformPromptOptions(options) {
    if ((0, inlinejs_1.IsObject)(options)) {
        options['icon'] = (options['icon'] || 'info');
        options['title'] = (options['title'] || 'Please enter details below');
        options['text'] = (options['text'] || options['message']);
        options['confirmButtonText'] = (options['confirmButtonText'] || 'Submit');
        options['position'] = (options['position'] || 'center');
        options['input'] = (options['input'] || options['type'] || 'text');
        options['toast'] = false;
        options['timer'] = undefined;
    }
    else {
        options = {
            icon: 'info',
            title: 'Please enter details below',
            text: options,
            confirmButtonText: 'Submit',
            position: 'center',
            input: 'text',
        };
    }
    return options;
}
function CreateAlertProxy() {
    const getConcept = () => (AlertConceptName ? (0, inlinejs_1.GetGlobal)().GetConcept(AlertConceptName) : null);
    let methods = {
        setConceptName: (name) => (AlertConceptName = name),
        setHandler: (handler) => (AlertHandler = handler),
        notify: (options) => { var _a; return (_a = (AlertHandler || getConcept())) === null || _a === void 0 ? void 0 : _a.Notify(TransformNotifyOptions(options)); },
        confirm: (options) => { var _a; return (_a = (AlertHandler || getConcept())) === null || _a === void 0 ? void 0 : _a.Confirm(TransformConfirmOptions(options)); },
        prompt: (options) => { var _a; return (_a = (AlertHandler || getConcept())) === null || _a === void 0 ? void 0 : _a.Prompt(TransformPromptOptions(options)); },
    };
    return (0, inlinejs_1.CreateReadonlyProxy)(methods);
}
const AlertProxy = CreateAlertProxy();
exports.AlertMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)(names_1.AlertMagicName, () => AlertProxy);
function AlertMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.AlertMagicHandler);
}
exports.AlertMagicHandlerCompact = AlertMagicHandlerCompact;
