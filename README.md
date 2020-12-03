# docker-file
Docker compose files

kafka
--------
```bash
docker-compose up
```
[kafdrop](http://localhost:9000)

mongodb
--------
```bash
docker-compose up
```
[mongo-express](http://localhost:8082)
```bash
user: gurkan
password: gurkan
database: test
```
create db, user, password
```js
var db = connect("mongodb://admin:pass@localhost:27017/admin");

db = db.getSiblingDB('DB_NAME'); // we can not use "use" statement here to switch db

db.createUser(
    {
        user: "DB_USER",
        pwd: "DB_PASSW",
        roles: [ { role: "readWrite", db: "DB_NAME"} ],
        passwordDigestor: "server",
    }
)
```

rabbitmq
--------
```bash
docker-compose up
```
[rabbitmq login](http://localhost:15672)
