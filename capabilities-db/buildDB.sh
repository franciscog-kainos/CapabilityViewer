#!/bin/bash

# This script is meant to be run in the directory it's in.
# Ensure the script has the correct running permissions. If not do: chmod +x buildDB.sh
# Use: ./buildDB.sh
# This script will generate a mysql.config file. The user is expected to change the parameters in this file according to
# the users mysql setup.

echo "Starting Script..."
echo ""

# Check if mysql.config file exists
if [ ! -f "mysql.config" ]; then
  touch mysql.config
  { echo "[mysql]"; echo "user=root"; echo "password="; echo "database=capabilitiesDB_test"; } >> mysql.config
  echo "Config file created. Continue? (username and password may not match your settings) (y/n)"
  read -r CHOICE

  if [ "$CHOICE" = "y" ]; then
    echo "Continuing..."
  else
    echo "Exiting..."
    exit
  fi
fi

echo "Sourcing capabilitiesDB-setup_prod.sql..."
mysql --defaults-file="mysql.config" -e "source capabilitiesDB-setup_prod.sql;"

echo "Populating capabilitiesDB-setup_prod..."
mysql --defaults-file="mysql.config" -e "source capabilitiesDB-populate.sql;"

echo "Production Table Initialised!"

echo ""
echo "============================================================================"
echo ""

echo "Sourcing capabilitiesDB_test.sql..."
mysql --defaults-file="mysql.config" -e "source capabilitiesDB-setup_test.sql;"

echo "Populating capabilitiesDB_test..."
mysql --defaults-file="mysql.config" -e "source capabilitiesDB-populate.sql;"

echo "Test Table Initialised"

if [ -f "capabilitesDB-users.sql" ]; then
  echo "Giving user permissions."
  mysql --defaults-file="mysql.config" -e "source capabilitesDB-users.sql;"
fi

echo ""
echo "Script finished."
