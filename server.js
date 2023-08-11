const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const dbConfig = require("./config/dbConfig");
const userRoute = require('./routes/userRoute')

app.use(express.json());
//middlwares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// routes
app.use('/api/user', userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`)); 