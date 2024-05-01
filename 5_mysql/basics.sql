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