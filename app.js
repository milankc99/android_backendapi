// //--------Automobile inventory management system WebApi-------//

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((db) => {
        console.log("Successfully connected mongodb server");
    });
 
 
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});




   