import { InvoiceBookingAccessorials } from './invoice-booking-acc.model';
import {ReferenceField} from "./reference-field.model";


export class InvoiceBooking {
    invoiceObjectId: string;
    shipperBookingID: string;
    shipperBookingRefIdBU: number;
    carrierBookingID: string;
    masterBOLNumber: string;
    bookingType: string;
    incotermCode: string;
    mode: string;
    vesselName: string;
    voyageFlightNumber: string;
    shipDate: string;
    billingMethod: string;
    secondaryCarrier: string;
    secondaryCarrierBU: number;
    charge: number;
    currencyCode: string;
    deletable: boolean;
    accessorials: InvoiceBookingAccessorials[];
    referenceField: ReferenceField[];

    originAddress: string;
    originCity: string;
    originCounty: string;
    originStateProv: string;
    originPostalCode: string;
    originCountryCode: string;
    originFacilityId: string;
    originFacilityBUId: number;
    originFacilityName: string;
    originShipViaFacility: string;
    originShipViaFacilityBU: number;
    destAddress: string;
    destCity: string;
    destCounty: string;
    destStateProv: string;
    destPostalCode: string;
    destCountryCode: string;
    destFacilityBUId: number;
    destFacilityId: string;
    destFacilityName: string;
    destShipViaFacility: string;
    destShipViaFacilityBU: number;
    invoiceId:string;
    invoiceCarrier: string;
    invoiceCarrierBU: number;
    constructor(
        bookingObj: any,
        obj: any,
    ) {
        this.invoiceObjectId = bookingObj.invoiceObjectId;
        this.shipperBookingID = bookingObj.shipperBookingRefId;
        this.shipperBookingRefIdBU = bookingObj.shipperBookingRefIdBU;
        this.carrierBookingID = bookingObj.carrierBookingRefId;
        this.masterBOLNumber = bookingObj.masterBOLNumber;
        this.bookingType = bookingObj.bookingType;
        this.incotermCode = bookingObj.incotermCode;
        this.mode = bookingObj.mode;
        this.vesselName = bookingObj.vesselName;
        this.voyageFlightNumber = bookingObj.voyageFlightNumber;
        this.shipDate = bookingObj.shipDate;
        this.billingMethod = bookingObj.billingMethod;
        this.secondaryCarrier = bookingObj.secondaryCarrier;
        this.secondaryCarrierBU = bookingObj.secondaryCarrierBU;
        this.originAddress = bookingObj.originAddress;
        this.originCity = bookingObj.originCity;
        this.originCounty = bookingObj.originCounty;
        this.originStateProv = bookingObj.originStateProv;
        this.originPostalCode = bookingObj.originPostalCode;
        this.originCountryCode = bookingObj.originCountryCode;
        this.originFacilityBUId = bookingObj.originFacilityBUId;
        this.originFacilityId = bookingObj.originFacilityId;
        this.originFacilityName = bookingObj.originFacilityName;
        this.originShipViaFacility = bookingObj.originShipvia;
        this.originShipViaFacilityBU = bookingObj.originShipviaBU;
        this.destAddress = bookingObj.destAddress;
        this.destCity = bookingObj.destCity;
        this.destCounty = bookingObj.destCounty;
        this.destStateProv = bookingObj.destStateProv;
        this.destPostalCode = bookingObj.destPostalCode;
        this.destCountryCode = bookingObj.destCountryCode;
        this.destFacilityId = bookingObj.destFacilityId;
        this.destFacilityBUId = bookingObj.destFacilityBUId;
        this.destFacilityName = bookingObj.destFacilityName;
        this.destShipViaFacility = bookingObj.destShipvia;
        this.destShipViaFacilityBU = bookingObj.destShipviaBU;
        this.referenceField = bookingObj.referenceField;
        this.charge = obj.charge;
        this.currencyCode = obj.currencyCode;
        this.deletable = obj.deletable;
        this.accessorials = obj.accessorials;
        this.invoiceId = obj.invoiceId;
        this.invoiceCarrier = bookingObj.invoiceCarrier;
        this.invoiceCarrierBU = bookingObj.invoiceCarrierBU;
    }
}
