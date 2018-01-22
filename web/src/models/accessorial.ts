export class AccessorialUI {
    id : string;
    code  : string;
    description:string;
    companyId:number;
    cost : number;
    invoiceObjectId : number;
	isTaxAccessorial : boolean;
    constructor(obj: any) {
        this.code = obj.code;
        this.description = obj.description;
        this.companyId = obj.companyId;
        this.cost = obj.cost;
        this.invoiceObjectId = obj.invoiceObjectId;
        this.isTaxAccessorial = obj.isTaxAccessorial;
        this.id = obj.id;
        }
}