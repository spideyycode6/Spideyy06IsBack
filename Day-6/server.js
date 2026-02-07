const app = require("./scr/app.js");
const mongoose = require('mongoose');

mongoose.connect('nothing to connect')
.then(()=>{
    console.log('database connected!!!');
})

app.listen(3000,()=>{
    console.log(`server is running`);
})