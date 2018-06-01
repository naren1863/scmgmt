-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema db_institute
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `db_institute` ;

-- -----------------------------------------------------
-- Schema db_institute
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_institute` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
-- -----------------------------------------------------
-- Schema deviceintegration
-- -----------------------------------------------------
SHOW WARNINGS;
USE `db_institute` ;

-- -----------------------------------------------------
-- Table `db_institute`.`SUBJECTS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_institute`.`SUBJECTS` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `db_institute`.`SUBJECTS` (
  `subject_id` INT NOT NULL,
  `subject_Name` VARCHAR(45) NULL,
  `subject_description` VARCHAR(45) NULL,
  `is_deleted` TINYINT NULL DEFAULT 0,
  `created_date` DATETIME NULL,
  `created_by` VARCHAR(45) NULL,
  `updated_date` DATETIME NULL,
  `updated_by` VARCHAR(45) NULL,
  PRIMARY KEY (`subject_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `db_institute`.`PERSON`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_institute`.`PERSON` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `db_institute`.`PERSON` (
  `person_id` INT NOT NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `gender` VARCHAR(45) NULL,
  `birth_date` VARCHAR(45) NULL,
  `edu_metric` VARCHAR(200) NULL,
  `edu_pre_university` VARCHAR(200) NULL,
  `edu_graduation` VARCHAR(200) NULL,
  `edu_masters` VARCHAR(200) NULL,
  `ocuupation` VARCHAR(45) NULL,
  `address` VARCHAR(200) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `pin_code` VARCHAR(45) NULL,
  `land_line` VARCHAR(45) NULL,
  `mobile` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `blood_group` VARCHAR(45) NULL,
  `height` VARCHAR(45) NULL,
  `weight` VARCHAR(45) NULL,
  PRIMARY KEY (`person_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `db_institute`.`STAFF`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_institute`.`STAFF` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `db_institute`.`STAFF` (
  `staff_id` INT NOT NULL,
  `person_id` INT NOT NULL,
  `created_date` DATETIME NULL,
  `created_by` VARCHAR(45) NULL,
  `updated_date` DATETIME NULL,
  `updated_by` VARCHAR(45) NULL,
  PRIMARY KEY (`staff_id`),
  CONSTRAINT `fk_STAFF_PERSON1`
    FOREIGN KEY (`person_id`)
    REFERENCES `db_institute`.`PERSON` (`person_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_STAFF_PERSON1_idx` ON `db_institute`.`STAFF` (`person_id` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `db_institute`.`CLASS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_institute`.`CLASS` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `db_institute`.`CLASS` (
  `class_id` INT NOT NULL,
  `class_name` VARCHAR(45) NULL,
  `class_type` VARCHAR(45) NULL,
  `class_teacher` INT NOT NULL,
  `is_deleted` TINYINT NULL DEFAULT 0,
  `creted_date` DATETIME NULL,
  `created_by` VARCHAR(45) NULL,
  `updated_date` DATETIME NULL,
  `updated_by` VARCHAR(45) NULL,
  PRIMARY KEY (`class_id`),
  CONSTRAINT `fk_Class_STAFF1`
    FOREIGN KEY (`class_teacher`)
    REFERENCES `db_institute`.`STAFF` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_Class_STAFF1_idx` ON `db_institute`.`CLASS` (`class_teacher` ASC);

SHOW WARNINGS;
CREATE UNIQUE INDEX `class_id_UNIQUE` ON `db_institute`.`CLASS` (`class_id` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `db_institute`.`CLASS_SUBJECTS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_institute`.`CLASS_SUBJECTS` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `db_institute`.`CLASS_SUBJECTS` (
  `class_id` INT NOT NULL,
  `subject_id` INT NOT NULL,
  PRIMARY KEY (`class_id`, `subject_id`),
  CONSTRAINT `fk_Class_has_Subjects_Class`
    FOREIGN KEY (`class_id`)
    REFERENCES `db_institute`.`CLASS` (`class_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Class_has_Subjects_Subjects1`
    FOREIGN KEY (`subject_id`)
    REFERENCES `db_institute`.`SUBJECTS` (`subject_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_Class_has_Subjects_Subjects1_idx` ON `db_institute`.`CLASS_SUBJECTS` (`subject_id` ASC);

SHOW WARNINGS;
CREATE INDEX `fk_Class_has_Subjects_Class_idx` ON `db_institute`.`CLASS_SUBJECTS` (`class_id` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `db_institute`.`STUDENT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_institute`.`STUDENT` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `db_institute`.`STUDENT` (
  `student_id` INT NOT NULL,
  `person_id` INT NOT NULL,
  `parent_id` INT NOT NULL,
  `created_date` DATETIME NULL,
  `created_by` VARCHAR(45) NULL,
  `updated_date` DATETIME NULL,
  `updated_by` VARCHAR(45) NULL,
  PRIMARY KEY (`student_id`),
  CONSTRAINT `fk_STUDENT_PERSON1`
    FOREIGN KEY (`person_id`)
    REFERENCES `db_institute`.`PERSON` (`person_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_STUDENT_PERSON2`
    FOREIGN KEY (`parent_id`)
    REFERENCES `db_institute`.`PERSON` (`person_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_STUDENT_PERSON1_idx` ON `db_institute`.`STUDENT` (`person_id` ASC);

SHOW WARNINGS;
CREATE INDEX `fk_STUDENT_PERSON2_idx` ON `db_institute`.`STUDENT` (`parent_id` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `db_institute`.`LOG_EVENTS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_institute`.`LOG_EVENTS` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `db_institute`.`LOG_EVENTS` (
  `log_event_id` INT,
  `message` VARCHAR(500) NULL,
  `table_name` VARCHAR(45) NULL,
  `log_date` DATETIME,
  PRIMARY KEY (`log_event_id`))
ENGINE = InnoDB;

SHOW WARNINGS;
USE `db_institute`;

DELIMITER $$

USE `db_institute`$$
DROP TRIGGER IF EXISTS `db_institute`.`SUBJECTS_AFTER_INSERT` $$
SHOW WARNINGS$$
USE `db_institute`$$
CREATE DEFINER = CURRENT_USER TRIGGER `db_institute`.`SUBJECTS_AFTER_INSERT` AFTER INSERT ON `SUBJECTS` FOR EACH ROW
BEGIN
		
 INSERT INTO `db_institute`.`LOG_EVENTS`
		(`log_event_id`, `message`, `table_name`, `log_date`) 
	VALUES 
		(
				1001, 
				concat('test message' , NEW.SUBJECT_ID, NEW.SUBJECT_NAME), 
				'SUBJECT' ,
				sysdate()
		);   
END$$

SHOW WARNINGS$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
