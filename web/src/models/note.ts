export class Notes {
    action: string;
    visibility  : string;
    note:string;
    invoiceId:number;
    timestamp : string;
    source : string;
    sourceType : string;
    addedBy:string;
    invoiceObjectId:string;
    objectType:string;
    firstname:string;
    lastname:string;
    companyName:string;
    reasonCode:string;
    reasonCodeBU:number
    constructor(obj: any) {
        this.visibility = obj.visibility;
        this.timestamp = obj.timestamp;
        this.source = obj.source;
        this.sourceType = obj.sourceType;
        this.note = obj.note;
        this.addedBy = obj.addedBy;
        this.invoiceObjectId=obj.invoiceObjectId;
        this.invoiceId=obj.invoiceId;
        this.objectType=obj.objectType;
        this.firstname=obj.firstname;
        this.lastname=obj.lastname;
        this.companyName=obj.companyName;
        this.reasonCode= obj.reasonCode;
        this.reasonCodeBU=obj.reasonCodeBU;
        this.action=obj.action;
    }
}