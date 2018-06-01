import {Subject} from '../subjects/subject';
import {Staff} from '../staffs/staff';
export interface Class {
    classid?;
    classname?;
    classteacher: Staff;
    subjects: Subject[];
    deleted?;
    
}