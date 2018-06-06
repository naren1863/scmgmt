package com.naren.sms.util;

import com.naren.sms.entity.SubjectEntity;
import com.naren.sms.request.Subject;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

@Component
public class SubjectUtil {

    public SubjectEntity convertToEntity(Subject subject){
        SubjectEntity subjectEntity = new SubjectEntity();


        subjectEntity.setSubjectId(subject.getSubjectId());
        subjectEntity.setSubjectName(subject.getSubjectName());
        subjectEntity.setSubjectDescription(subject.getSubjectDescription());
        subjectEntity.setDeleted(subject.getDeleted());

        subjectEntity.setCreatedBy(subject.getCreatedBy());
        subjectEntity.setUpdatedBy(subject.getUpdatedBy());
        subjectEntity.setCreatedDate(subject.getCreatedDate());
        subjectEntity.setUpdatedDate(subject.getUpdatedDate());

        if(subject.getSubjectId() == null){
          subjectEntity.setCreatedDate(new Timestamp(System.currentTimeMillis()));
        } else {
            subjectEntity.setUpdatedDate(new Timestamp(System.currentTimeMillis()));
        }
        return subjectEntity;
    }

    public Subject convertToDataObject(SubjectEntity subjectEntity){
        Subject subject = new Subject();


        subject.setSubjectId(subjectEntity.getSubjectId());
        subject.setSubjectName(subjectEntity.getSubjectName());
        subject.setSubjectDescription(subjectEntity.getSubjectDescription());
        subject.setDeleted(subjectEntity.getDeleted());

        subject.setCreatedBy(subjectEntity.getCreatedBy());
        subject.setUpdatedBy(subjectEntity.getUpdatedBy());
        subject.setCreatedDate(subjectEntity.getCreatedDate());
        subject.setUpdatedDate(subjectEntity.getUpdatedDate());

        return subject;
    }
}
