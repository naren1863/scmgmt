package com.naren.sms.entity;

import lombok.Data;
import lombok.ToString;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "SUBJECTS")
@DynamicUpdate
@ToString()

public class SubjectEntity {

    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="SUBJECT_ID", unique = true, updatable=false, nullable = false, precision = 8)
    private @Id Long subjectId;

    @Column(name="SUBJECT_NAME", updatable=true, nullable = false, length = 45)
    private String subjectName;

    @Column(name="SUBJECT_DESCRIPTION", updatable=true, nullable = false, length = 45)
    private String subjectDescription;

    @Column(name="IS_DELETED")
    private Boolean deleted;

    @Column(name="CREATED_DATE")
    private Timestamp createdDate;

    @Column(name="UPDATED_DATE")
    private Timestamp updatedDate;

    @Column(name="CREATED_BY", length = 45)
    private String createdBy;

    @Column(name="UPDATED_BY",  length = 45)
    private String updatedBy;

}
