 # Install
 ```shell
 yarn install
 ```
 
 # Run Container
 ```shell
 docker compose up -d
#  docker compose start/stop
```

 # Run Apps
 ```shell
 nx run-many --target=serve
 ```
 
 # Feed DB with some data
 ```bash
 bash ./seed.postgresql.sh
```
 
 # Explore
 ```shell
# This will show Swagger-docs for api
 http://localhost:3005/api

# This is the elastic port - no swagger yet
 http://localhost:9200
 ```

 # API endpoints -> open Swagger
 ```shell
 http://localhost:3005/api
#  Every new entry pokes elastic through redis and creates new index
 http://localhost:3005/api/webapi/create
 
 ```

 # Elasticsearch endpoints
 ```
http://localhost:9200/_aliases?pretty=true
http://localhost:9200/customers
http://localhost:9200/customers/_search
http://localhost:9200/customers/_search?q=expert|pro
http://localhost:9200/customers/_search?q=22|39|34
http://localhost:9200/customers/_search?q=Vergavarten|vputin

 ```