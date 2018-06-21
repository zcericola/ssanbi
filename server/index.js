//dependencies
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const {test} = require('./controllers/searchCtrl');

//server port
const port = 3002;
//creates instance of express server
const app = express();
//MiddleWares
app.use(cors());
app.use(json());

//endpoints
app.get('/test', test);

//Checking that server is running
app.listen(port, () => {
console.log('Listening on ' + port);
});