const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.json());
const cors = require('cors');

app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:4200/students','http://localhost:4200/update/:id']
}));

app.use(express.static(__dirname + '/views'));

let app1 = express();  
app1.disable("x-powered-by");

let helmet = require("helmet");
let app2 = express();
app2.use(helmet.hidePoweredBy());

//Sequelize
const database = require("./models");
database.sequelize.sync()
  .then(() => {
    console.log("Database Synced successfully");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });

//Routes
app.use('/', require('./routes/registerRoute'));

app.listen(PORT,console.log("server running URL => http://localhost:" + PORT));
