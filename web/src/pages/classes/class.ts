import {Subject} from '../subjects/subject';
export interface Class {
    classid?;
    classname?;
    classteacher?;
    subjects: Subject[];
    
}