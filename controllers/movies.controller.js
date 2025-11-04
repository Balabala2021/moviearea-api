import Movie from "../models/movie.model.js"

export const MovieIndex = (req, res) => {
   res.send("Get all movie lists")
};

export const MovieCreate = async (req, res) => {
   // id, title, desc

    // console.log(res.body);

    // Validate your data.
    const newMovie = new Movie({
          title: req.body.title,
          desc: req.body.desc,
       });

// Successful or error       
    try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
    } catch (error) {
      return res.status(400).json({message:error.message});
    }

    return res.json(req.body);

   //create the movie info
};

export const MovieUpdate = (req, res) => {
    res.send("Update a movie")
};

export const MovieDelete = (req, res) => {
    res.send("Deleting a movie")
};