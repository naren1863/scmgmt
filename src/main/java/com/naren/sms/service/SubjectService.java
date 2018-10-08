package com.naren.sms.service;

import com.naren.sms.entity.SubjectEntity;
import com.naren.sms.repository.SubjectRepository;
import com.naren.sms.request.Subject;
import com.naren.sms.util.SubjectUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubjectService {

    @Autowired
    SubjectRepository subjectRepository;

    @Autowired
    SubjectUtil subjectUtil;

    public Subject saveSubject(Subject subject){
        SubjectEntity subjectEntity = subjectUtil.convertToEntity(subject);
        subjectEntity = subjectRepository.save(subjectEntity);

        subject = subjectUtil.convertToDataObject(subjectEntity);
        return subject;
    }

    public List<Subject> getSubjects(){
        //SubjectEntity subjectEntity = subjectUtil.convertToEntity(subject);
        List<SubjectEntity> subjectEntityList = subjectRepository.findAll();

        List<Subject> subjectList = new ArrayList<Subject>();
        subjectEntityList.forEach(subEntity -> {

            subjectList.add(subjectUtil.convertToDataObject(subEntity));
        });
        System.out.println("getSubjects: " + subjectList);
        return subjectList;
    }
}
