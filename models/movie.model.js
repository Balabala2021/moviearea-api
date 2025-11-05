import { Schema, model } from "mongoose";


const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
});

//create your model

const Movie = model("Movie", movieSchema)

export default Movie;