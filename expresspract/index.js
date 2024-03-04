const express = require('express');
const server = express();
// const router = require('./routes/allroute');
server.use(express.json());

// server.use('/api/todos', router);


const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/avisoftpract'


server.listen(6060, ()=>{
    console.log("Server is running at port no 6060");
})