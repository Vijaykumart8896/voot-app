const MovieSchema = require("../Model/Movie");
/* ---------!@HHTP GET METHOD!
 @AC
 @URL / movies/get-movie
--------------------------*/
let GetMovies = async (req, res) => {
  let moviesData = await MovieSchema.find({}).lean();
  res.render("movies/getMovies", { moviesData });
};

let GetMovie = async (req, res) => {
  res.render("movies/create-movies");
};

/* ---------!@HHTP POST METHOD!
 @AC
 @URL / movies/get-movie
--------------------------*/
let CreateMovie = async (req, res) => {
  try {
    let error=[]
    if(!req.body.movie_tiitle){
      error.push({text:"movie tittle is required"})
    }
    else if(!req.body.movie_duration){
      error.push({text:"movie duration  is required"})
    }
    else if(!req.body.movie_language){
      error.push({text:"movie language is required"})
    }
    else if(!req.body.movie_genre){
      error.push({text:"movie genre is required"})
    }
    else if(!req.body.movie_year){
      error.push({text:"movie year is required"})
    }
    else if(!req.body.movie_certification){
      error.push({text:"movie certification is required"})
    }
    if(error.length>0){
      res.render("movies/create-movies", {
        error,
      //  movie_tiitle:req.body.movie_tiitle,
      //  movie_duration:req.body.movie_duration,
      //  movie_language:req.body.movie_language,
      //  movie_genre:req.body.movie_genre,
      //  movie_year:req.body.movie_year,
      });
    }else{
      let {
        movie_tiitle,
        movie_duration,
        movie_language,
        movie_genre,
        movie_year,
        movie_certification,
        movie_description,
        movie_audio_language,
        movie_category,
      } = req.body;
      let movie_img = req.files[0];
      let movie_video = req.files[1];
      console.log(movie_img);
      console.log(movie_video);
      await new MovieSchema({
        movie_tiitle,
        movie_duration,
        movie_language,
        movie_genre,
        movie_year,
        movie_certification,
        movie_description,
        movie_audio_language,
        movie_category,
        movie_img,
        movie_video,
      }).save();
      req.flash("SUCCESS_MESSAGE", "successfully movie created");
      res.redirect("/movies/get-movies", 301, {});
  

    }
    
    // res.end("OK!!!!!!");
  } catch (error) {
    console.error(error);
  }
};

let GetMovieOBJ = async (req, res) => {
  let movie = await MovieSchema.findOne({ _id: req.params.id }).lean();
  res.render("movies/movie", { movie });
};

//todo ---Serach part
let SearchMovie=async(req, res)=>{
    let {movie_tiitle}=req.body;
   let moviesss= await MovieSchema.find({movie_tiitle:{$regex:movie_tiitle}}).lean();
  console.log(moviesss);
   res.render("home", {moviesss})
}


/* ---------!@HHTP PUT METHOD!
 @AC
 @URL / movies/get-movie
--------------------------*/

/* ---------!@HHTP DELETE METHOD!
 @AC
 @URL / movies/get-movie
 --------------------------*/

//  ! EXPORTING MODULES
module.exports = { GetMovies, GetMovie, CreateMovie, GetMovieOBJ, SearchMovie };
