/**
 * @date 21-01-2020
*@author UKB
 */
// Entry
require('dotenv').config()
const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000

//express server init
const app = express()

//local server init
require('./server')(app)

app.use(express.static("client"));

//Listen on port
app.listen(port, () =>{ console.log( `Running on ${port}`)})
