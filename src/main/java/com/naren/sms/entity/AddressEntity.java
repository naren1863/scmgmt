package com.naren.sms.entity;

import lombok.Data;
import lombok.ToString;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Data
@Entity
@Table(name = "ADDRESS")
@DynamicUpdate
@ToString()
public class AddressEntity {

    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="PERSON_ID", unique = true, updatable=false, nullable = false, precision = 8)
    private @Id Long Id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PERSON_ID", updatable = false)
    private PersonEntity person;

    @Column(name="ADDRESS", updatable=true, nullable = true, length = 200)
    private String address;

    @Column(name="CITY", updatable=true, nullable = true, length = 45)
    private String city;

    @Column(name="STATE", updatable=true, nullable = true, length = 45)
    private String state;

    @Column(name="PIN_CODE", updatable=true, nullable = true, length = 10)
    private String pinCode;

    @Column(name="LAND_LINE", updatable=true, nullable = true, length = 15)
    private int landLine;

    @Column(name="MOBILE", updatable=true, nullable = true, length = 15)
    private int mobile;

    @Column(name="EMAIL", updatable=true, nullable = true, length = 225)
    private String email;
}


