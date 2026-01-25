const express = require('express');

const app = express(); // server instinc started

app.get('/',(request,response)=>{
    response.send("Hello Pritesh")
})
app.get('/pritesh',(request,response)=>{
    response.send("Hello billioner")
})

// listen used for start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')

})