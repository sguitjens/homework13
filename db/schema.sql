### Schema

CREATE DATABASE veggie_db;
USE veggie_db;

CREATE TABLE veggies
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
