import { IAlertConcept } from "@benbraide/inlinejs";
export declare class AlertConcept implements IAlertConcept {
    private name_;
    private handler_;
    Notify(options: any): Promise<any>;
    Confirm(options: any): Promise<any>;
    Prompt(options: any): Promise<any>;
    SetName(name: string): void;
    GetName(): string;
    SetHandler(handler: IAlertConcept | null): void;
    GetHandler(): IAlertConcept | null;
    ResolveHandler(): IAlertConcept | null;
}
