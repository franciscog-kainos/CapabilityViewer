#!/bin/bash
echo "Starting Script..."
echo ""

echo "Sourcing capabilitiesDB-setup_prod.sql..."
mysql -u root -e "source capabilities-db/capabilitiesDB-setup_prod.sql;"

echo "Populating capabilitiesDB-setup_prod..."
mysql -u root -e "use capabilitiesDB_prod; source capabilities-db/capabilitiesDB-populate.sql;"

echo "Production Table Initialised!"

echo ""
echo "============================================================================"
echo ""

echo "Sourcing capabilitiesDB_test.sql..."
mysql -u root -e "source capabilities-db/capabilitiesDB-setup_test.sql;"

echo "Populating capabilitiesDB_test..."
mysql -u root -e "use capabilitiesDB_test; source capabilities-db/capabilitiesDB-populate.sql;"

echo "Test Table Initialised"

echo ""
echo "Script finished."