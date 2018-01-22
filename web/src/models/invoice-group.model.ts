import { InvoiceBooking } from './invoice-booking.model';
import {InvoiceShipment} from "./invoice-shipment.model";
import {ReferenceField} from "./reference-field.model";

export class InvoiceGroup {
    invoiceId: number;
    canEditInvoice: any;
    invoiceNumber: string;
    invoiceFor: string;
    invoiceDate: string;
    carrierCode: string;
    carrierBU: number;
    paymentDueDate: string;

    editableByStatus:boolean;
    invoiceTotal: number;
    currencyCode: string;
    hasBusinessValidationFailures : boolean;
    invoiceStatus: string;
	invoiceStatusInt: number;

    businessUnit: string;
    businessUnitName: string;
    businessUnitInt: number;
    receivedOn: string;
    billToFac: string;
    billToFacBU: number;
    paymentTerms: string;
    billingAccountNumber: string;
    notes: string;

    booking: InvoiceBooking[];
    shipments: InvoiceShipment[];
    refFields: ReferenceField[];
    refFieldsB: ReferenceField[];
    referenceField: ReferenceField[];
    bookingType: string;
    incotermCode: string;
    voyageFlightNumber: string;
    mode: string;
    billingMethod: string;
    secondaryCarrier: string;
    vesselName: string;
    shipDate: string;
    paymentMethod: string;
    tcShipmentIdList: string[] =[];

    paymentAmount: string;
    approvedDate: string;
    dateOfPayment: string;
    carrierCompanyId:number;
    lastUpdatedDTTM:string;
    taxAmount:number;
    constructor(
        invoiceData: any,
        bookingData: any,
        obj: any
    ) {
        this.invoiceId = invoiceData.invoiceId;
        this.invoiceNumber = invoiceData.invoiceNumber;
        this.invoiceFor = invoiceData.invoiceFor;
        this.invoiceDate = invoiceData.invoiceDate;
        this.carrierCode = invoiceData.carrierCode;
        this.carrierBU = invoiceData.carrierBU;
        this.paymentDueDate = invoiceData.paymentDueDate;
        this.canEditInvoice = invoiceData.canEditInvoice;
        this.invoiceTotal = invoiceData.invoiceTotal;
        this.currencyCode = invoiceData.currencyCode;
        this.hasBusinessValidationFailures = invoiceData.hasBusinessValidationFailures;
        this.invoiceStatus = invoiceData.invoiceStatus;
        this.invoiceStatusInt = invoiceData.invoiceStatusInt;

        this.businessUnit = invoiceData.businessUnit;
        this.businessUnitName = invoiceData.businessUnitName;
        this.businessUnitInt = invoiceData.businessUnitInt;
        this.receivedOn = invoiceData.receivedOn;
        this.billToFac = invoiceData.billToFac;
        this.billToFacBU = invoiceData.billToFacBU;
        this.paymentTerms = invoiceData.paymentTerms;
        this.billingAccountNumber = invoiceData.billingAccountNumber;
        this.notes = invoiceData.notes;
        this.editableByStatus = invoiceData.editableByStatus;

        this.paymentMethod = invoiceData.paymentMethod;
        this.paymentAmount = invoiceData.paymentAmount;
        this.approvedDate = invoiceData.approvedDate;
        this.dateOfPayment = invoiceData.dateOfPayment;

        this.bookingType = bookingData.bookingType;
        this.incotermCode = bookingData.incotermCode;
        this.voyageFlightNumber = bookingData.voyageFlightNumber;
        this.mode = bookingData.mode;
        this.billingMethod = bookingData.billingMethodCode;
        this.secondaryCarrier = bookingData.secondaryCarrier;
        this.vesselName = bookingData.vesselName;
        this.shipDate = bookingData.shipDate;
        
        this.booking = obj.booking;
        this.shipments = obj.shipments;
        this.refFields = obj.refFields;
        this.refFieldsB = obj.refFieldsB;
        this.referenceField = obj.referenceField;
        this.bookingType = obj.bookingType;
        this.incotermCode = obj.incotermCode;
        this.voyageFlightNumber = obj.voyageFlightNumber;
        this.mode = obj.mode;
        this.billingMethod = obj.billingMethodCode;
        this.secondaryCarrier = obj.secondaryCarrier;
        this.vesselName = obj.vesselName;
        this.shipDate = obj.shipDate;
        this.tcShipmentIdList = invoiceData.tcShipmentIdList;
        this.carrierCompanyId =  invoiceData.carrierCompanyId;
        this.lastUpdatedDTTM = invoiceData.lastUpdatedDTTM;
        this.taxAmount=0;
    }
}
