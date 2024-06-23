FROM postgres

ARG BUILD_DATE
LABEL org.label-schema.build-date=$BUILD_DATE
LABEL org.label-schema.description="Postgresql dev image for valento-api with schemas template"

RUN mkdir -p /docker-entrypoint-initdb.d
#files copied will be executed upon container run if PGDATA dir is empty
COPY ./src/db/dump/dump.sql /docker-entrypoint-initdb.d/dump.sql

EXPOSE 5432
