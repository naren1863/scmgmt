package com.naren.sms.entity;

import lombok.Data;
import lombok.ToString;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "PERSON")
@DynamicUpdate
@ToString()
public class PersonEntity {

    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="PERSON_ID", unique = true, updatable=false, nullable = false, precision = 8)
    private @Id Long personId;

    @Column(name="FIRST_NAME", updatable=true, nullable = false, length = 45)
    private String firstName;

    @Column(name="LAST_NAME", updatable=true, nullable = false, length = 45)
    private String lastName;

    @Column(name="GENDER", updatable=true, nullable = false, length = 10)
    private String gender;

    @Column(name="BIRTH_DATE", updatable=true, nullable = false)
    private Timestamp dateOfBirth;

    @Column(name="EDU_METRIC", updatable=true, nullable = true, length = 45)
    private String eduMetric;

    @Column(name="EDU_PUC", updatable=true, nullable = true, length = 45)
    private String eduPreUniversity;

    @Column(name="EDU_GRADUATION", updatable=true, nullable = true, length = 45)
    private String eduGraduation;

    @Column(name="EDU_MASTERS", updatable=true, nullable = true, length = 45)
    private String eduMasters;

    @Column(name="OCCUPATION", updatable=true, nullable = true, length = 45)
    private String occupation;

    @Column(name="IS_DELETED")
    private Boolean isDeleted;

    @Column(name="CREATED_DATE")
    private Timestamp createdDate;

    @Column(name="UPDATED_DATE")
    private Timestamp updatedDate;

    @Column(name="CREATED_BY", length = 45)
    private Timestamp createdBy;

    @Column(name="UPDATED_BY",  length = 45)
    private Timestamp updatedBy;

    @OneToOne(mappedBy= "person", cascade = CascadeType.ALL, orphanRemoval=true,fetch = FetchType.EAGER)
    private AddressEntity address;

}


