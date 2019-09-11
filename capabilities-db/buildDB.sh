#!/bin/bash

# This script is meant to be run in the directory it's in.
# Ensure the script has the correct running permissions. If not do: chmod +x buildDB.sh
# Use: ./buildDB.sh <your_mysql_root_password>

echo "Starting Script..."
echo ""

if [ $# -eq 0 ]
  then
    echo "No password to root supplied."
    echo "./buildDB.sh <your_mysql_root_password>"
    exit
fi

PASS=$1

if [ $PASS = "none" ]
  then
    echo "Using empty password."
    PASS=""
fi

echo "Sourcing capabilitiesDB-setup_prod.sql..."
mysql -u root --password="$PASS" -e "source capabilitiesDB-setup_prod.sql;"

echo "Populating capabilitiesDB-setup_prod..."
mysql -u root --password="$PASS" -e "use capabilitiesDB_prod; source capabilitiesDB-populate.sql;"

echo "Production Table Initialised!"

echo ""
echo "============================================================================"
echo ""

echo "Sourcing capabilitiesDB_test.sql..."
mysql -u root --password="$PASS" -e "source capabilitiesDB-setup_test.sql;"

echo "Populating capabilitiesDB_test..."
mysql -u root --password="$PASS" -e "use capabilitiesDB_test; capabilitiesDB-populate.sql;"

echo "Test Table Initialised"

echo ""
echo "Script finished."
