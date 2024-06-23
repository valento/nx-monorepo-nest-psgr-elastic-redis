#!/bin/bash
pg_dump -c -U valento -d valentoDB > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql
# docker exec -i 7da275140d44 pg_dump -U valento -d valentoDB > dump_`date +%d-%m-%Y"_"%H_%M_%S`.psql