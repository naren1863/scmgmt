export class InvoiceShipmentLinehaul {
    id: string;
    accessorialCode: string;
    description: string;
    charge: number;
    currencyCode: string;
    deletable: boolean;
    taxAccessorial : boolean;
    plannedCost : number;
    balanceDue : number ;
    included : boolean;
    accessorialCost : number;
    version : number;
    totalAmount : number;

    recommendedAccessorialCost : number;
    approvedAccessorialCost : number;
  constructor(
      obj: any,
      currencyCode: string,
      deletable: boolean
  ) {
      this.id = obj.id;
      this.accessorialCode = obj.accessorialCode;
      this.description = obj.description;
      this.charge = obj.accessorialCost;
      this.currencyCode = currencyCode;
      this.deletable = deletable;
      this.taxAccessorial = obj.taxAccessorial;
      this.plannedCost =obj.plannedCost;
      this.balanceDue = obj.balanceDue;
      this.included = obj.included;
      this.accessorialCost = obj.accessorialCost;
      this.version = obj.version;
      this.recommendedAccessorialCost = obj.recommendedAccessorialCost;
      this.approvedAccessorialCost = obj.approvedAccessorialCost;
      this.totalAmount=obj.accessorialCost;
  }
}
