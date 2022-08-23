import { GetGlobal, IAlertConcept } from "@benbraide/inlinejs";

export class AlertConcept implements IAlertConcept{
    private name_ = '';
    private handler_: IAlertConcept | null = null;

    public Notify(options: any): Promise<any>{
        return (this.ResolveHandler()?.Notify(options) as Promise<any>);
    }

    public Confirm(options: any): Promise<any>{
        return (this.ResolveHandler()?.Confirm(options) as Promise<any>);
    }

    public Prompt(options: any): Promise<any>{
        return (this.ResolveHandler()?.Prompt(options) as Promise<any>);
    }
    
    public SetName(name: string){
        this.name_ = name;
    }

    public GetName(){
        return this.name_;
    }

    public SetHandler(handler: IAlertConcept | null){
        this.handler_ = handler;
    }

    public GetHandler(){
        return this.handler_;
    }

    public ResolveHandler(){
        return (this.handler_ || GetGlobal().GetConcept<IAlertConcept>(this.name_));
    }
}
