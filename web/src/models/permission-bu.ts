export class PermissionBU {
    permissionCode: string;
    businessUnits: number[];
    constructor(obj: any) {
        this.permissionCode = obj.permissionCode;
        this.businessUnits = obj.businessUnits;
    }
}