#!/bin/bash
# pg_dump -c -U valento -d valentoDB > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql

# === !!! Check for your postgres-container ID !!! =============
docker exec -i e122ff1f7928 pg_dump -U valento -d valentoDB > dump_`date +%d-%m-%Y"_"%H_%M_%S`.psql