require("dotenv").config();
const router = require('./routes');
const express = require('express');
const cors = require('cors')
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cors());
app.use(router);
app.listen(process.env.PORT, (err) => {
    if (err) return console.log(`con not listen to port: ${process.env.PORT}`);
    console.log(`server is listening to port: ${process.env.PORT}/`);
});