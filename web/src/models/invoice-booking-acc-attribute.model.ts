import { SelectItem } from 'primeng/primeng';

export class InvoiceBookingAccessorialsAttributeType implements SelectItem {
  label: string;
  value: string;
  operatorType: string;
  valueType: string;

  constructor(
    label: string,
    value: string,
    operatorType: string,
    valueType: string,
  ) {
    this.label = label;
    this.value = value;
    this.operatorType = operatorType;
    this.valueType = valueType;
  }
}

export class InvoiceBookingAccessorialsOperatorType implements SelectItem {
  label: string;
  value: string;
  valueCount: number;

  constructor(
    label: string,
    value: string,
    valueCount: number,
  ) {
    this.label = label;
    this.value = value;
    this.valueCount = valueCount;
  }
}
