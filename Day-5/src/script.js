// Import Express framework
const express = require("express");

// Create an Express application instance
const app = express();

// Middleware: Parse incoming JSON request bodies
// This allows us to access req.body in our routes
app.use(express.json());

// In-memory storage for notes
// Each note is stored as an object in this array
const notes = []

// CREATE: POST endpoint to add a new note
// Route: /notes
// Request body should contain note data (e.g., { "title": "My note" })
app.post('/notes',(req,res)=>{
    // Add the incoming note data to the notes array
    notes.push(req.body);
    // Return success response with status code 201 (Created)
    res.status(201).json("note is created successfully");
});

// READ: GET endpoint to fetch all notes
// Route: /notes
// Returns all notes stored in the notes array
app.get('/notes',(req,res)=>{
    // Send all notes as a JSON object
    res.send({
        notes:notes
    });
    // Set HTTP status code to 200 (OK)
    res.status(200).json("data fatched!!")

})

// UPDATE: PATCH endpoint to modify a specific note
// Route: /notes/:index (where :index is the array index of the note)
// Request body should contain updated note data
app.patch("/notes/:index",(req,res)=>{
    // Access the index from URL parameters (req.params.index)
    // Update only the title property of the note at that index
    notes[req.params.index].title = req.body.title;
    // Return success response with status code 200 (OK)
    res.status(200).json("updated successfully!!")
});

// DELETE: DELETE endpoint to remove a specific note
// Route: /notes/:index (where :index is the array index of the note)
app.delete("/notes/:index",(req,res)=>{
    // Remove the note at the specified index
    delete notes[req.params.index];
    // Return success response with status code 204 (No Content)
    res.status(204).json("Data deleted!!")
})

// Export the app module so it can be used in server.js
module.exports = app;