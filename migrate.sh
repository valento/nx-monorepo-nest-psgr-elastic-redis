#!/bin/bash
# === !!! Check for your postgres-container ID !!! =============
cat dump.sql | docker exec -i e122ff1f7928 psql -U valento -d valentoDB