DROP USER IF EXISTS janedoe@localhost;
CREATE USER janedoe@localhost IDENTIFIED WITH mysql_native_password BY 'password';

GRANT SELECT ON capabilitiesDB_test.Role TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_test.Band TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_test.Capability TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_test.Job_Family TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_test.User TO janedoe@localhost;



GRANT SELECT ON capabilitiesDB_prod.Role TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_prod.Band TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_prod.Capability TO janedoe@localhost;
GRANT SELECT ON capabilitiesDB_prod.Job_Family TO janedoe@localhost;

GRANT SELECT ON capabilitiesDB_prod.User TO janedoe@localhost;