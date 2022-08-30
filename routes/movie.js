const express=require("express");
const {GetMovies, GetMovie, CreateMovie, GetMovieOBJ, SearchMovie}=require("../controller/movie-controller");
const router=express.Router();
let storage=require('../config/multer');
const multer = require("multer");
let upload=multer({storage})

router.route("/get-movies").get(GetMovies);
router.route("/create-movie").get(GetMovie);
router.post("/create-movie",upload.any(['movie_img','movie_video']),CreateMovie);
router.post("/search", SearchMovie)
router.route("/:id").get(GetMovieOBJ);



module.exports=router;