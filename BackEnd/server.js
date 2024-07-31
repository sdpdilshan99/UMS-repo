const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port= 3001;
const host= '127.0.0.1';
const mongoose = require('mongoose');

const rauter = require('./rauter');



const uri = 'mongodb+srv://sdpdilshanrcc:Sadeep%2312345@cluster01.dqowlmt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error) {
        console.log('MongoDB Error',error);
    }
};

connect();

const server = app.listen(port, host , () => {
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api', rauter);