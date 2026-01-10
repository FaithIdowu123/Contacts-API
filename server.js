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
  // swagger.tag=["Hello World"];
    res.send("Welcome to the Contacts API");
});



app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  })
  .use('/api', contactRoutes);

app.use("/", require("./routes/swagger")); 

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Connected to DB and listening on ${PORT}`);
    
  }
});

