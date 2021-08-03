


var MeaningCloud = require('meaning-cloud');
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');

const app = express()
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const textapi = process.env.API_KEY

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('dist'))
console.log(__dirname)
var meaning = MeaningCloud({
    key: process.env.API_KEY, // API Key. Required.
    endpoints: {
        topics_extraction: '/topics-1.1'
      }
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.post('/apicloud', async function(req, res) {
    
    const urltoCheck = req.body.url;
    const apiURL = `${baseURL}key=${textapi}&url=${urltoCheck}&lang=en`

    const response1 = await fetch(meaning)
    const response = await fetch(apiURL)
    const analysis = await response.json()
    
    
    res.send(analysis)
  
})