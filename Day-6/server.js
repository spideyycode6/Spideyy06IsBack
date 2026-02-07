const app = require("./scr/app.js");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://spideyycode_db_user:F0DaJbCuZ2xJC5Y0@cluster0.paeynny.mongodb.net/Day-6')
.then(()=>{
    console.log('database connected!!!');
})

app.listen(3000,()=>{
    console.log(`server is running`);
})