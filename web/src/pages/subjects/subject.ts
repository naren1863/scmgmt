export class Subject {
    subjectId?;
    subjectName?;
    subjectDescription?;
    deleted: boolean;
    createdBy: string;
    updatedBy: string;

    constructor(obj: any) {
        this.subjectId = obj.subjectId;
        this.subjectName = obj.subjectName;
        this.subjectDescription = obj.subjectDescription;
        this.deleted = obj.deleted;
        this.createdBy = obj.createdBy;
        this.updatedBy = obj.updatedBy;
    }
}