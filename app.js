const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');
require('dotenv/config');

app.use(bodyParser.json());

//Midlle Ware
app.use('/post',postRoutes);

app.get('/',(req,res)=>{
    res.send('we are running now');
});

//Connection
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true , useUnifiedTopology: true });

mongoose.connection.once('open', ()=>{
    console.log('connection is on..');
}).on('err',(err) =>{
    console.log(`there's an erre ${err}`);
});

app.listen(process.env.PORT || "3003");





