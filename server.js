const animalsDetails = {
    name:"Lion",
    age : 10,
    type : "Sauvage"
    };

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('Exercise3'));

const port = 5500;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// GET route
app.post('/fakeAnimalData', sendData);

function sendData (request, response) {
  response.send(animalsDetails);
};

// POST route
app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
}

// POST an animal
const data = [];

app.post('/animal', addAnimal);

function addAnimal (req,res){
    data.push(req.body);
};