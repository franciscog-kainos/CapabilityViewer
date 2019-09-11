#!/bin/bash
mysql -u root -p -e "source capabilitiesDB-setup_prod.sql; use capabilitiesDB_prod; source capabilitiesDB-populate.sql; source capabilitiesDB-setup_test.sql;  use capabilitiesDB_test; source capabilitiesDB-populate.sql;"
