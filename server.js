require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./models/contacts");
const contactRoutes = require("./routes/contacts");
const app = express();


const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Contacts API");
});

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/api', contactRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Connected to DB and listening on ${PORT}`);
    
  }
});

