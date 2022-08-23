import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, CreateReadonlyProxy } from "@benbraide/inlinejs";
import { AlertMagicName } from "../names";
let AlertConceptName = '';
let AlertHandler = null;
export function SetAlertConceptName(name) {
    AlertConceptName = name;
}
export function SetAlertHandler(handler) {
    AlertHandler = handler;
}
function CreateAlertProxy() {
    const getConcept = () => (AlertConceptName ? GetGlobal().GetConcept(AlertConceptName) : null);
    let methods = {
        setConceptName: (name) => (AlertConceptName = name),
        setHandler: (handler) => (AlertHandler = handler),
        notify: (options) => { var _a; return (_a = (AlertHandler || getConcept())) === null || _a === void 0 ? void 0 : _a.Notify(options); },
        confirm: (options) => { var _a; return (_a = (AlertHandler || getConcept())) === null || _a === void 0 ? void 0 : _a.Confirm(options); },
        prompt: (options) => { var _a; return (_a = (AlertHandler || getConcept())) === null || _a === void 0 ? void 0 : _a.Prompt(options); },
    };
    return CreateReadonlyProxy(methods);
}
const AlertProxy = CreateAlertProxy();
export const AlertMagicHandler = CreateMagicHandlerCallback(AlertMagicName, () => AlertProxy);
export function AlertMagicHandlerCompact() {
    AddMagicHandler(AlertMagicHandler);
}
