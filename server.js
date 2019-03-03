const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const routes = require('./routes/ProductRoute'); 

var mongoose = require("mongoose"); 

const db = mongoose
  .connect("mongodb://localhost/test")
  // .connect("mongodb://aramide:aramide98@ds111065.mlab.com:11065/fourvill")
  .then(() => {
    console.log("Database connection successful");
  })
  .catch(err => {
    console.error("Database connection error");
  });

  
const port = process.env.PORT || 9000;
const app = express();
  

app.use(bodyParser.json());  

app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.use(express.static('./public/uploads/'))


 
app.use(cors(), bodyParser.json());

app.use('/', routes);
 

app.listen(port, () => console.info(`Server started on port http://localhost:${port}`));
