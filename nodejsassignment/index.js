const express  = require('express');
const bodyparser = require('body-parser');
const app= express();
const cors = require("cors"); 
const schoolroute = require('./routes/schoolroute.js')
app.use(bodyparser.json());
app.use(cors());



app.use('/' , schoolroute);


const port = 3000;
app.listen(port , ()=> console.log(`server is running on port ${port}`));