export class ObjectFacilityInfo {

    originFacilityName: string;
    originAddress: string;
    originCity: string;
    originCounty: string;
    originStateProv: string;
    originPostalCode: string;
    originCountryCode: string;
    originShipvia: string;
	originFacilityBUId: number;
    originFacilityId: string;
    destFacilityName: string;
    destFacilityId: string;
    destFacilityBUId: number;
    destAddress: string;
    destCity: string;
    destCounty: string;
    destStateProv: string;
    destPostalCode: string;
    destCountryCode: string;
    destShipvia: string;

    constructor(obj: any) {
        this.originFacilityName = obj.originFacilityName;
        this.originAddress = obj.originAddress;
        this.originCity = obj.originCity;
        this.originCounty = obj.originCounty;
        this.originStateProv = obj.originStateProv;
        this.originPostalCode = obj.originPostalCode;
        this.originCountryCode = obj.originCountryCode;
        this.originShipvia = obj.originShipvia;
        this.originFacilityBUId = obj.originFacilityBUId;
        this.originFacilityId = obj.originFacilityId;
        this.destFacilityName = obj.destFacilityName;
        this.destFacilityId = obj.destFacilityId;
        this.destFacilityBUId = obj.destFacilityBUId;
        this.destAddress = obj.destAddress;
        this.destCity = obj.destCity;
        this.destCounty = obj.destCounty;
        this.destStateProv = obj.destStateProv;
        this.destPostalCode = obj.destPostalCode;
        this.destCountryCode = obj.destCountryCode;
        this.destShipvia = obj.destShipvia;

    }
    
}