DROP DATABASE IF EXISTS capabilitiesDB_test;
CREATE DATABASE IF NOT EXISTS capabilitiesDB_test;
USE capabilitiesDB_test;

CREATE TABLE IF NOT EXISTS Job_Family(
	job_family_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    job_family_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS Band(
	band_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    band_name VARCHAR(50) NOT NULL UNIQUE,
    band_competency TEXT NOT NULL,
    band_responsibilities VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS User(
	user_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	user_f_name VARCHAR(50) NOT NULL,
    user_l_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Role(
	role_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(50) NOT NULL,
    role_summary VARCHAR(200) NOT NULL,
    role_responsibilities VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS Capability(
	capability_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    capability_name VARCHAR(50) NOT NULL
);

ALTER TABLE User
ADD role_id SMALLINT UNSIGNED NOT NULL,
ADD FOREIGN KEY(role_id) REFERENCES Role(role_id);

ALTER TABLE Role
ADD capability_id SMALLINT UNSIGNED NOT NULL,
ADD band_id SMALLINT UNSIGNED NOT NULL,
ADD FOREIGN KEY(capability_id) REFERENCES Capability(capability_id),
ADD FOREIGN KEY(band_id) REFERENCES Band(band_id);

ALTER TABLE Capability
ADD leader_id SMALLINT UNSIGNED UNIQUE,
ADD job_family_id SMALLINT UNSIGNED NOT NULL,
ADD FOREIGN KEY(leader_id) REFERENCES User(user_id),
ADD FOREIGN KEY(job_family_id) REFERENCES Job_Family(job_family_id);

CREATE TABLE IF NOT EXISTS Training_Category(
	training_category_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    training_category_name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Training(
	training_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    training_name VARCHAR(50) NOT NULL,
    training_link VARCHAR(500) NOT NULL,
    training_category_id SMALLINT UNSIGNED NOT NULL,
	FOREIGN KEY(training_category_id) REFERENCES Training_Category(training_category_id)
);

CREATE TABLE IF NOT EXISTS Role_Training(
	role_id SMALLINT UNSIGNED NOT NULL,
    training_id SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (role_id, training_id),
    FOREIGN KEY(role_id) REFERENCES Role(role_id),
    FOREIGN KEY(training_id) REFERENCES Training(training_id)
);

CREATE TABLE IF NOT EXISTS Band_Training(
	band_id SMALLINT UNSIGNED NOT NULL,
    training_id SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (band_id, training_id),
    FOREIGN KEY(band_id) REFERENCES Band(band_id),
    FOREIGN KEY(training_id) REFERENCES Training(training_id)
);
