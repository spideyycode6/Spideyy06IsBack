const mongooes = require('mongoose');


const noteSchema = new mongooes.Schema({
    title: String,
    description: String,
});


const noteModel =  mongooes.model("note",noteSchema);


module.exports = noteModel;