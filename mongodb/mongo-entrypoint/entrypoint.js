var db = connect("mongodb://admin:pass@localhost:27017/admin");

db = db.getSiblingDB('test'); // we can not use "use" statement here to switch db

db.createUser(
    {
        user: "gurkan",
        pwd: "gurkan",
        roles: [ { role: "readWrite", db: "test"} ],
        passwordDigestor: "server",
    }
)