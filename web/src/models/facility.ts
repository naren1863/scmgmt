export class FacilityModel {
    facilityName: string;
    address: string;
    city: string;
    county: string;
    stateProv: string;
    postalCode: string;
    countryCode: string;
    shipViaFacility: string;
    shipViaFacilityBUId: number;
    facilityBUId: number;
    facilityId: string;
    constructor(obj) {
        this.facilityName = obj.facilityName;
        this.address = obj.address;
        this.city = obj.city;
        this.county = obj.county;
        this.stateProv = obj.stateProv;
        this.postalCode = obj.postalCode;
        this.countryCode = obj.countryCode;
        this.shipViaFacility = obj.shipViaFacility;
        this.shipViaFacilityBUId = obj.shipViaFacilityBUId;
        this.facilityBUId = obj.facilityBUId;
        this.facilityId = obj.facilityId;
    }
}