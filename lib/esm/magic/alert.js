import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, CreateReadonlyProxy } from "@benbraide/inlinejs";
import { AlertConceptName, AlertMagicName } from "../names";
function CreateAlertProxy() {
    const getConcept = () => GetGlobal().GetConcept(AlertConceptName);
    let methods = {
        getConcept: () => getConcept(),
        notify: (options) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Notify(options); },
        confirm: (options) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Confirm(options); },
        prompt: (options) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Prompt(options); },
    };
    return CreateReadonlyProxy(methods);
}
const AlertProxy = CreateAlertProxy();
export const AlertMagicHandler = CreateMagicHandlerCallback(AlertMagicName, () => AlertProxy);
export function AlertMagicHandlerCompact() {
    AddMagicHandler(AlertMagicHandler);
}
