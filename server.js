const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const items = require('./routes/api/items')

const app = express();

//body-parser usage 
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI

//connect to mongo
mongoose
        .connect(db , { useNewUrlParser : true  })
        .then(() => console.log('MongoDb connected ...'))
        .catch((err) => console.log(err))

//Use routes 
app.use('/api/items' , items);

//setting up listening PORT
const PORT = process.env.PORT || 5000;

//making the server to listen on the specific port
app.listen(PORT , () => console.log(
    `The server is up and running on ${PORT}`
))