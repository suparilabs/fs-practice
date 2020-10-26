// server.js
require("dotenv").config("./env");
const express = require('express'); //Requires the Express module
const mongoose = require('mongoose'); //Requires the mongoose module
const userRouter = require('./contacts.route');
const cors = require('cors')

const app = express();
 
app.use(cors())
const port = 8000;

app.use(express.json());
app.use('/contacts', userRouter);

const uri = process.env.URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});