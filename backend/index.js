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

})

app.get('/getbreeds/:limit', (req, res) => {
  const {limit}=req.params;
getData(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=0`, req, res) 

})

app.get('/getbreed/:id', (req, res) => {
  const {id}=req.params;
getData(`https://api.thecatapi.com/v1/breeds/${id}`, req, res) 

})


app.get('/getimage/:id', (req, res) => {
  const {id}=req.params;
getData(`https://api.thecatapi.com/v1/images/${id}`, req, res) 

})

app.get('/catimages/:id', (req, res) => {
  const {id}=req.params;
getData(`https://api.thecatapi.com/v1/images/search?format=json&limit=8&breed_ids=${id}`, req, res) 

})

app.get('/catbyname/:name', (req, res) => {
  const {name}=req.params;
getData(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, req, res) 

})


//custom function to get Async data
const getData = async (url = '', req, res) => {
 axios(url, {
    method: 'get',
    credentials: 'same-origin',
    headers: { 
      'Content-Type': 'application/json', 
      'x-api-key': 'ce08b7e5-01ca-450a-a1d3-abc9819bb15b'
    }
  }).then(response => {
    res.send(JSON.stringify(response.data))
}).catch(err => {
  console.log(err);
    res.send(err);
})
};

module.exports = app;