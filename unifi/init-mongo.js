db.getSiblingDB("MONGO_DBNAME").createUser({user: "MONGO_USER", pwd: "MONGO_PASS", roles: [{role: "dbOwner", db: "MONGO_DBNAME"}]});
db.getSiblingDB("MONGO_DBNAME_stat").createUser({user: "MONGO_USER", pwd: "MONGO_PASS", roles: [{role: "dbOwner", db: "MONGO_DBNAME_stat"}]});
