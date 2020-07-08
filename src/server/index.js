const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const routes = require("../routes/index");
var MongoClient = require('mongodb').MongoClient;

app.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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