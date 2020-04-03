const express = require('express')
const app = express();
var MongoClient = require('mongodb').MongoClient;
const port = 3001;

const routes = require("../routes/index");
app.use("/", routes);

// catch 404 and forward to error handler
require("dotenv").config({ path: "../../variables.env" });


const uri = process.env.URL;

MongoClient.connect(uri, { promiseLibrary: Promise }, (err, db) => {
    if (err) {
      logger.warn(`Failed to connect to the database. ${err.stack}`);
    }
    app.locals.db = db.db('aclookup');
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
});