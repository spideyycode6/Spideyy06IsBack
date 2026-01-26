const express = require("express");

let app = express();
app.use(express.json());

const note = [];

app.post("/note",(request,response)=>{
    console.log(request.body);
    note.push(request.body);
    response.send("note started");
})

app.get("/note",(request,response)=>{
    response.send(note);
})

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
})
