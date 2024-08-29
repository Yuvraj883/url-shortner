const express = require('express');
const urlRoute = require('./router/url');

const connectToMongoose = require('./controller');

const app = express();
const PORT = 8000;
const url = 'mongodb+srv://kingyuvi88:<db_password>@cluster0.n6zna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
connectToMongoose(url).then(()=>{console.log("MongoDB connected")});
app.use('/url', urlRoute);
app.listen(PORT, ()=>{console.log(`Server running at port:${PORT}`)});
