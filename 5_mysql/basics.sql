-- Create a table named MT_MEMBERS with the following columns:
-- - ID: an auto-incrementing integer that serves as the primary key
-- - NAME: a non-null string that represents the member's name
-- - AGE: a non-null integer that represents the member's age
-- - ADDRESS: a string that represents the member's address
-- - SALARY: a decimal number with a precision of 18 and scale of 2 that represents the member's salary
CREATE TABLE
    MT_MEMBERS (
        ID INT NOT NULL AUTO_INCREMENT,
        NAME VARCHAR(20) NOT NULL,
        AGE INT NOT NULL,
        ADDRESS CHAR(25),
        SALARY DECIMAL(18, 2),
        PRIMARY KEY (ID)
    );

-- Describe the structure of the MT_MEMBERS table
DESC MT_MEMBERS;

-- Insert the following records into the MT_MEMBERS table:
-- - ID: 1, NAME: 'John Doe', AGE: 30, ADDRESS: '123 Main St', SALARY: 50000.00
-- - ID: 2, NAME: 'Jane Smith', AGE: 25, ADDRESS: '456 Elm St', SALARY: 60000.00
-- - ID: 3, NAME: 'Bob Johnson', AGE: 35, ADDRESS: '789 Oak St', SALARY: 70000.00
INSERT INTO
    MT_MEMBERS (ID, NAME, AGE, ADDRESS, SALARY)
VALUES
    (1, 'Jiki', 24, '123 Main St', 50000.00),
    (2, 'Jane Smith', 25, '456 Elm St', 60000.00),
    (3, 'Bob Johnson', 35, '789 Oak St', 70000.00);

-- Query all records from the MT_MEMBERS table
SELECT
    *
FROM
    MT_MEMBERS;

-- Update the salary of the member with ID 1 to 55000.00
UPDATE MT_MEMBERS
SET
    SALARY = 55000.00
WHERE
    ID = 1;

-- Update the salary of the member with ID 2 to 1111111111111111.00 (an invalid value)
UPDATE MT_MEMBERS
SET
    SALARY = 1111111111111111.00
WHERE
    ID = 2;

-- Create a table named LULU with the same structure as MT_MEMBERS
CREATE TABLE
    LULU (
        ID INT NOT NULL AUTO_INCREMENT,
        NAME VARCHAR(20) NOT NULL,
        AGE INT NOT NULL,
        ADDRESS CHAR(25),
        SALARY DECIMAL(18, 2),
        PRIMARY KEY (ID)
    );

-- Insert the same records into the LULU table
INSERT INTO
    LULU (ID, NAME, AGE, ADDRESS, SALARY)
VALUES
    (1, 'Jiki', 24, '123 Main St', 50000.00),
    (2, 'Jane Smith', 25, '456 Elm St', 60000.00),
    (3, 'Bob Johnson', 35, '789 Oak St', 70000.00);

-- Query all records from the LULU table
SELECT
    *
FROM
    LULU;

-- Update the salary, name, age, and address of the member with ID 3 in the LULU table
UPDATE LULU
SET
    SALARY = 55000.00,
    NAME = 'Beaver',
    AGE = 24,
    ADDRESS = '123 Main St'
WHERE
    ID = 3;

-- Truncate (delete all records from) the LULU table
TRUNCATE TABLE LULU;

-- Drop (delete) the LULU table
DROP TABLE LULU;

-- Add a new column named PHONE of type VARCHAR(20) to the MT_MEMBERS table
ALTER TABLE `MT_MEMBERS`
ADD COLUMN `PHONE` VARCHAR(20);

-- Describe the structure of the MT_MEMBERS table
DESC MT_MEMBERS;

-- Rename the MT_MEMBERS table to MACHETALK_MEMBERS
ALTER TABLE `MT_MEMBERS`
RENAME TO MACHETALK_MEMBERS;

-- Query all records from the MACHETALK_MEMBERS table
SELECT
    *
FROM
    `MACHETALK_MEMBERS`;

-- Insert new records into the MACHETALK_MEMBERS table
INSERT INTO
    `MACHETALK_MEMBERS` (ID, NAME, AGE, ADDRESS, SALARY, PHONE)
VALUES
    (NULL, 'Jiki', 24, '123 Main St', 50000.00, NULL),
    (
        NULL,
        'Jane Smith',
        25,
        '456 Elm St',
        60000.00,
        NULL
    ),
    (
        NULL,
        'Bob Johnson',
        35,
        '789 Oak St',
        70000.00,
        NULL
    ),
    (NULL, 'KAAALI', 24, '123 Main St', 50000.00, NULL);

-- Query distinct records for NAME, AGE, and ADDRESS from the MACHETALK_MEMBERS table, ordered by NAME in descending order
SELECT DISTINCT
    NAME,
    AGE,
    `ADDRESS`
FROM
    `MACHETALK_MEMBERS`
ORDER BY
    `NAME` DESC;

-- Query NAME and AGE from the MACHETALK_MEMBERS table where salary is greater than 10000
SELECT
    NAME,
    AGE
FROM
    `MACHETALK_MEMBERS`
WHERE
    salary > 10000;

-- Query the average salary from the MACHETALK_MEMBERS table
SELECT
    AVG(SALARY) AS AVG_SALARY
FROM
    MACHETALK_MEMBERS;

-- Query NAME, AGE, and SALARY from the MACHETALK_MEMBERS table where salary is greater than 10000 and age is less than 70
SELECT
    NAME,
    AGE,
    SALARY
FROM
    MACHETALK_MEMBERS
WHERE
    SALARY > 10000
    AND AGE < 70;

-- Query all records from the MACHETALK_MEMBERS table where age is 25, 30, or 35
SELECT
    *
FROM
    MACHETALK_MEMBERS
WHERE
    AGE IN (25, 30, 35);

-- Query NAME and MEMBER_AGE (renamed from AGE) from the MACHETALK_MEMBERS table where age is between 25 and 35
SELECT
    NAME,
    AGE AS `MEMBER_AGE`
FROM
    `MACHETALK_MEMBERS`
WHERE
    `AGE` BETWEEN 25 AND 35;

-- Query all records from the MACHETALK_MEMBERS table where salary starts with "5%"
SELECT
    *
FROM
    `MACHETALK_MEMBERS`
WHERE
    SALARY LIKE "5%";

-- Query all records from the MACHETALK_MEMBERS table where name contains "J"
SELECT
    NAME, AGE
FROM
    `MACHETALK_MEMBERS`
WHERE
    NAME LIKE "%J%";


SELECT * FROM MACHETALK_MEMBERS ORDER BY AGE ASC;

SELECT  ADDRESS, AGE, SUM(SALARY) 
AS TOTAL_SALARY FROM MACHETALK_MEMBERS 
GROUP BY ADDRESS, AGE;

select * from MACHETALK_MEMBERS

-- INSERT INTO MACHETALK_MEMBERS (ID, NAME, AGE, ADDRESS, SALARY, PHONE) VALUES (NULL, 'Jiki', 24, '123 Main St', 50000.00, NULL), (NULL, 'Jane Smith', 25, '456 Elm St', 60000.00, NULL), (NULL, 'Bob Johnson', 35, '789 Oak St', 70000.00, NULL), (NULL, 'KAAALI', 24, '123 Main St', 50000.00, NULL);

SELECT NAME, AGE, COUNT(NAME) as age_count FROM MACHETALK_MEMBERS GROUP BY AGE;


SELECT  ADDRESS, AGE, SUM(SALARY) AS 
TOTAL_SALARY, COUNT(AGE) FROM MACHETALK_MEMBERS GROUP BY 
ADDRESS, AGE HAVING TOTAL_SALARY >=5000 
ORDER BY TOTAL_SALARY DESC;


-- Create an index on the NAME column of the MACHETALK_MEMBERS table
CREATE INDEX idx_name ON MACHETALK_MEMBERS (NAME);

-- Query the MACHETALK_MEMBERS table using the index
SELECT *
FROM MACHETALK_MEMBERS
WHERE NAME = 'Jiki';

-- Drop the index on the NAME column
DROP INDEX idx_name ON MACHETALK_MEMBERS;