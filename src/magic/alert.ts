import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, CreateReadonlyProxy, IAlertConcept } from "@benbraide/inlinejs";

import { AlertMagicName, SwalConceptName } from "../names";

let AlertConceptName = SwalConceptName;

function CreateAlertProxy(){
    const getConcept = () => GetGlobal().GetConcept<IAlertConcept>(AlertConceptName);
    let methods = {
        setConceptName: (name: string) => (AlertConceptName = name),
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
