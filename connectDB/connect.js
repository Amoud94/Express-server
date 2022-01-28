const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/CRUD_test');

mongoose.connection.once('open', ()=>{
    console.log('connection is on..');
}).on('err',(err) =>{
    console.log(`there's an erre ${err}`);
});