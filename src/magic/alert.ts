import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, CreateReadonlyProxy, IAlertConcept } from "@benbraide/inlinejs";

import { AlertConceptName, AlertMagicName } from "../names";

function CreateAlertProxy(){
    const getConcept = () => GetGlobal().GetConcept<IAlertConcept>(AlertConceptName);
    let methods = {
        getConcept: () => getConcept(),
        notify: (options: any) => getConcept()?.Notify(options),
        confirm: (options: any) => getConcept()?.Confirm(options),
        prompt: (options: any) => getConcept()?.Prompt(options),
    };
    
    return CreateReadonlyProxy(methods);
}

const AlertProxy = CreateAlertProxy();

export const AlertMagicHandler = CreateMagicHandlerCallback(AlertMagicName, () => AlertProxy);

export function AlertMagicHandlerCompact(){
    AddMagicHandler(AlertMagicHandler);
}
