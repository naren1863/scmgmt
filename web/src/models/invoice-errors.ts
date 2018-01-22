export class InvoiceUIError {
    description: string;
    severity  : string;
    code:string;
    constructor(obj: any) {
        this.description = obj.description;
        this.severity = obj.severity;
        this.code = obj.code;
    }
}