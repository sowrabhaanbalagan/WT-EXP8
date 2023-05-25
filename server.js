const {connectdb} = require('./connect')
const faculty_controller = require('.faculty_controller')
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

connectdb()
    .then(()=> {console.log("database connected")})
    .catch((err)=>{console.log(err)})



const port = 1000;
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});
