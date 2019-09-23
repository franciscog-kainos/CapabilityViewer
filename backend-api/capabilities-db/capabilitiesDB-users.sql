DROP USER IF EXISTS janedoe@localhost;
CREATE USER janedoe@localhost IDENTIFIED WITH mysql_native_password BY 'password';

USE capabilitiesDB_test;
GRANT ALL PRIVILEGES ON capabilitiesDB_test TO root@localhost;

GRANT SELECT ON capabilitiesDB_test.Role TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_test.Band TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_test.Capability TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_test.Job_Family TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_test.User TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_test.Band_Training TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_test.Training TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_test.Training_Category TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_test.Role_Training TO janedoe@localhost;

USE capabilitiesDB_prod;
GRANT ALL PRIVILEGES ON capabilitiesDB_prod TO root@localhost;

GRANT SELECT ON capabilitiesDB_prod.Role TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_prod.Band TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_prod.Capability TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_prod.Job_Family TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_prod.User TO janedoe@localhost;


GRANT SELECT ON capabilitiesDB_prod.Band_Training TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_prod.Training TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_prod.Training_Category TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_prod.Role_Training TO janedoe@localhost;
