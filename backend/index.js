const express=require('express');
const bodyparser=require('body-parser');
 const cors =require('cors');

const app=express();
 app.use(cors());
 app.use(bodyparser.json());
require('dotenv').config();

//set external api
var axios = require('axios');


app.get('/', (req, res) => {
  res.send('Hello World!')
  getData
})
app.get('/get', (req, res) => {
getData('https://api.thecatapi.com/v1/images/search?format=json&limit=4', req, res) 

})

const getData = async (url = '', req, res) => {
 axios(url, {
    method: 'get',
    credentials: 'same-origin',
    headers: { 
      'Content-Type': 'application/json', 
      'x-api-key': process.env.SECRET_KEY
    }
  }).then(response => {
    res.send(JSON.stringify(response.data))
}).catch(err => {
    res.send(err);
})
};

module.exports = app;