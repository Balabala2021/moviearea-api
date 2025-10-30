import express from "express";


const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
      res.json({msg: "Hello students!"});
});

// CRUD functionality of movies

// R - For Reading 
app.get('/movies', () => {

})

// C- For Creating movies
app.post('/movies', () => {

})

// U - For updating movies
app.put('/movies/:id', () => {

})

// D - For Deleting movie
app.delete('/movies/:id', () => {
    
})



app.listen(PORT, ()=> {
    console.log(`The server is running at http://localhost:${PORT}`);
});
