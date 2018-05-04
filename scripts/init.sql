CREATE TABLE contacts (id INT NOT NULL, firstName VARCHAR(20), lastName VARCHAR(20), age INT, countryCode VARCHAR(2), PRIMARY KEY (id));

INSERT INTO contacts (id, firstName, lastName, age, countryCode) VALUES (1, 'John','Smith', 40, 'US');
INSERT INTO contacts (id, firstName, lastName, age, countryCode) VALUES (2, 'Ivan','Ivanov', 50, 'BG');
