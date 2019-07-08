const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path=require('path');

const app = express();
const port = process.env.PORT || 5000;

const items=require('./routes/api/items');
const designers = require('./routes/api/designers');
const think = require('./routes/api/think');
const feel = require('./routes/api/feel');
const generateempathymap = require('./routes/api/generateempathymap');
const session = require('./routes/api/session');
const finalThink=require('./routes/api/finalthink');
const users=require('./routes/api/users');

//BodyPareser Middleware
app.use(bodyParser.json());

//Db COnfig
const db=require('./config/keys').mongoURI;

//Connect to DB
mongoose
    .connect(process.env.MONGODB_URI || db)
    .then(()=>console.log('MOngo Db connected'))
    .catch(err=>console.log(err));

;

//Use Routes
app.use('/api/designers',designers);
app.use('/api/items',items);
app.use('/api/think',think);
app.use('/api/feel',feel);
app.use('/api/session',session);
app.use('/api/generateempathymap',generateempathymap);
app.use('/api/finalthink',finalThink);
app.use('/api/users',users);


if(process.env.NODE_ENV==='production'){
   app.use(express.static('client/build'));
   
   app.get('*',(req,res)=>{
       res.sendFile(path.join(__dirname,'client','build','index.html'));
   })
}

app.listen(port,()=>console.log(`Server started on port ${port}`));