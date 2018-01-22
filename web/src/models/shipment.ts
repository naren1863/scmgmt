export class ShipmentModel {
    tcShipmentId: string;
	shipmentBU: number;
	totalCost: number;
	currencyCode: string;
	containerId: string;
	containerType: string;
    constructor(obj: any) {
        this.tcShipmentId = obj.tcShipmentId;
        this.shipmentBU = obj.shipmentBU;
        this.totalCost = obj.totalCost;
        this.currencyCode = obj.currencyCode;
        this.containerId = obj.containerId;
        this.containerType = obj.containerType;
    }
}