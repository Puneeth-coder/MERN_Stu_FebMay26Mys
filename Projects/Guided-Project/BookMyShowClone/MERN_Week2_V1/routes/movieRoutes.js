// Handles requests related movies
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {
    getHome,
    getAllMovies,
    getMoviesById,
    addMovie,
    updateMovie,
    deleteMovie
} = require("../controllers/movieController");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/",getHome);
// this base url "/" do request for home page 
router.get("/movies",getAllMovies);
// "/movies" get request for all movies
router.get("/movies/:id",getMoviesById);
//  "/movies/:id" is get request for movie id

router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
// "/movies" is a post request to create a new movie 
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
// "/movies/:id" is a requests to update a multiple or a single movie details
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deleteMovie);
// "/movies/id" is a request to delete a movie 

module.exports = router;