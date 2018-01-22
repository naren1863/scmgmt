export class InvoiceBookingAccessorials {
    id: string;
    accessorialCode: string;
    description: string;
    accessorialCost: number;
    currencyCode: string;
    deletable: boolean;
    taxAccessorial : boolean;
    plannedCost : number = 0;
    balanceDue : number = 0;
    included : boolean;
    version : number;
    recommendedAccessorialCost : number;
	approvedAccessorialCost : number;
	totalAmount :number;
  constructor(
      obj: any,
      currencyCode: string,
      deletable: boolean
  ) {
      this.id = obj.id;
      this.accessorialCode = obj.accessorialCode;
      this.description = obj.description;
      this.accessorialCost = obj.accessorialCost;
      this.currencyCode = currencyCode;
      this.deletable = deletable;
      this.taxAccessorial = obj.taxAccessorial;
      this.plannedCost =obj.plannedCost;
      this.balanceDue = obj.balanceDue;
      this.included = obj.included;
      this.version =obj.version;
      this.recommendedAccessorialCost= obj.recommendedAccessorialCost;
	  this.approvedAccessorialCost= obj.approvedAccessorialCost;
	  this.totalAmount=obj.accessorialCost;
  }
}
