import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, CreateReadonlyProxy, IAlertConcept, IsObject } from "@benbraide/inlinejs";

import { AlertMagicName } from "../names";

let AlertConceptName = '';
let AlertHandler: any = null;

export function SetAlertConceptName(name: string){
    AlertConceptName = name;
}

export function SetAlertHandler(handler: any){
    AlertHandler = handler;
}

function CreateAlertProxy(){
    const getConcept = () => (AlertConceptName ? GetGlobal().GetConcept<IAlertConcept>(AlertConceptName) : null);
    let methods = {
        setConceptName: (name: string) => (AlertConceptName = name),
        setHandler: (handler: any) => (AlertHandler = handler),
        notify: (options: any) => (AlertHandler || getConcept())?.Notify(options),
        confirm: (options: any) => (AlertHandler || getConcept())?.Confirm(options),
        prompt: (options: any) => (AlertHandler || getConcept())?.Prompt(options),
    };
    
    return CreateReadonlyProxy(methods);
}

const AlertProxy = CreateAlertProxy();

export const AlertMagicHandler = CreateMagicHandlerCallback(AlertMagicName, () => AlertProxy);

export function AlertMagicHandlerCompact(){
    AddMagicHandler(AlertMagicHandler);
}
