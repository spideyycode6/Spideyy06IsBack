require('dotenv').config()
const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.Mongo_URl)
    .then(()=>{
        console.log("Connected to DB");
    })
}

module.exports = connectToDb;