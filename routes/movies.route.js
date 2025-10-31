import express from "express";

const router = express.Router()

// /moveis / movies
// R - For Reading 
router.get('/', (req, res) => {
   res.send("Get all movie lists")
});

// C- For Creating movies
router.post('/', (req, res) => {
   res.send("Create a movie")
});

// U - For updating movies
router.put('/:id', (req, res) => {
    res.send("Update a movie")
});

// D - For Deleting movie
router.delete('/:id', (req, res) => {
    res.send("Deleting a movie")
});

export default router;