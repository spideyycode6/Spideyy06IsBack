const express = require("express")
const app = express();
app.use(express.json());
const note = []

app.get("/",(req,resp)=>{
    resp.send(note);

});

app.post("/note",(req,resp)=>{
    note.push(req.body);
    console.log(note)
    resp.send("data created")
});

app.delete("/note/:index",(req,res)=>{
    delete note[req.params.index]
    res.send("data deleted");
});
app.patch("/note/:index",(req,res)  =>{
    note[req.params.index].desc = req.body.desc;
    res.send("Patch is Done!!")
})
module.exports = app;

