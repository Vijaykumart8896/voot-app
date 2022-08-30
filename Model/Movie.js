const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  movie_tiitle: {
    type: String,

  },
  movie_duration: {
    type: String,
   
  },
  movie_language: {
    type: String,
    
  },
  movie_genre: {
    type: String,
   
  },
  movie_year: {
    type: String,
  
  },
  movie_certification: {
    type: String,
    
  },
  movie_description: {
    type: String,
    
  },
  movie_audio_language: {
    type: String,
    
  },
  movie_img: {
    type: [""],
    defualt:
      "https://images.macrumors.com/t/UuN-Ve7l8LD5YOEHkpb3e8o0P3E=/1600x/article-new/2018/07/movies-and-tv-microsoft-app.jpg",
  },
  movie_video: {
    type: [""],
    
  },
  movie_category: {
    type: String,
    
  },
});

module.exports = model("movies", MovieSchema);
