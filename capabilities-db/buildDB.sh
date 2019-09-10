#!/bin/bash
mysql -u root -p -e "source capabilitiesDB-setup_prod.sql; source capabilitiesDB-setup_test.sql; source capabilitiesDB-populate.sql;"
