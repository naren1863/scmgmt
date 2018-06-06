package com.naren.sms.request;

import java.sql.Timestamp;

@lombok.Getter
@lombok.Setter
@lombok.ToString
public class Subject {

    Long subjectId;

    private String subjectName;

    private String subjectDescription;

    private Boolean deleted = false;

    private Timestamp createdDate;

    private Timestamp updatedDate;

    private String createdBy;

    private String updatedBy;

}
