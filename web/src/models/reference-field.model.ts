export class ReferenceField {
    name: string;
    value: string;
    type: string;
    constructor(
        obj: any
    ) {
        this.name = obj.name;
        this.value = obj.value;
        this.type = obj.type;
    }
}