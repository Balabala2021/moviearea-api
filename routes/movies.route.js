import express from "express";
import {
    MovieIndex,
    MovieCreate,
    MovieDelete,
    MovieUpdate,
    MovieDetail,
} from '../controllers/movies.controller.js'

const router = express.Router();

// MVC

// /moveis / movies
// R - For Reading 
router.get('/', MovieIndex );

router.get("/:id",MovieDetail)

// C- For Creating movies
router.post('/', MovieCreate );

// U - For updating movies
router.put('/:id', MovieUpdate );

// D - For Deleting movie
router.delete('/:id', MovieDelete );

export default router;