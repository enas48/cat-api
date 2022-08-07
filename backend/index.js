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
app.get('/get/:limit', (req, res) => {
  const {limit}=req.params;
getData(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=0`, req, res) 

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
  console.log(err);
    res.send(err);
})
};

module.exports = app;