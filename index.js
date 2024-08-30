const express = require('express');
const urlRoute = require('./router/url');

const connectToMongoose = require('./connection');
// const connectDB = require('./connection')

const app = express();

const PORT = 8001;
const url = "mongodb+srv://kingyuvi88:TheGodYuvi@cluster0.n6zna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
connectToMongoose(url).then(()=>{console.log("MongoDB connected")});

app.use(express.json()); //middleware to parse json
app.use('/url', urlRoute);
app.listen(PORT, ()=>{console.log(`Server running at port:${PORT}`)});
