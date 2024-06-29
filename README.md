 # Install
 ```shell
 yarn install
 ```
 
 # Run Container
 ```shell
 docker compose up -d
 #  docker compose start/stop
 ```

 # Generate Prisma Clients
 ```shell
 # This will generate 2-clients for 2db-schemas (webapi, tenant) 
 nx run-many --targets=gen-client
 # (by default, DB has 4 schemas: webapi | tenant | public | admin from dump.sql)
 ```

 # Run Apps: this lifts one webapi-server (with swagger-docs) and one microservice-server (elastic-api)
 ```shell
 #  All together
 nx run-many --targets=serve
 #  Or
 #  Individually
 nx serve api
 nx serve search-api
 ```
 
 # Feed DB with some data through the web-api
 ```bash
 # This curls the localhost:3000/api/webapi/create endpoint to create 'customer's
 bash ./seed.postgresql.sh
 # Check/edit/run again the code, for more entries
 ```
 
 # Explore
 ```shell
 # This will show Swagger-docs for api
 http://localhost:3005/api

 # This is the Elasticsearch port - no swagger yet
 http://localhost:9200
 ```

 # API endpoints -> open Swagger
 
  - [web-api](http://localhost:3005/api) 

 # Elasticsearch endpoints examples
 ```
 http://localhost:9200/_aliases?pretty=true
 http://localhost:9200/customers
 http://localhost:9200/customers/_search
 http://localhost:9200/customers/_search?q=expert|pro
 http://localhost:9200/customers/_search?q=22|39|34
 http://localhost:9200/customers/_search?q=Vergavarten|vputin

 ```
 # Notes:
 ### I've done 3 boilerplate reductions:
 Those are all experiments and just for show off. They seem usefull though
  - As required: Decorator for customer-dto filtering (only one) - the method could be implemented in sorting (I've got no more energy for that this week though)
  - Prisma-multi-client-generation - I experimented with NX-plugin-generator to generate new Prisma-schema-clients as libraries. This could be far more powerfull after some more experiments (devkit-powers). NX is greate!
  - I addded PrismaModel-types in (e.g. prisma-client-service-tenant.service) to catch Prisma.delegates from dynamic-routes (e.g /:entity/:id) and use it in service
 ### Additionally, for my own sake, I did:
  - NX-monorepo - lovelly tech
  - NestJS-microservice - to listen REDIS and update/create Elasticsearch indices - lovelly tech
  - NX-libs - to explore and learn the beauty of typed-monorepos
  - Not finished attempt: a single nest-app-boilerplate should be sufficient to lift ( bootstrap(app, options) ) both (or more) servers for api, listener, observers... etc. as libraries in monorepo