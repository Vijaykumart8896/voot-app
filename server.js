const express=require("express");
const {engine}=require("express-handlebars")
const {PORT, MONGODB_URL, MONGODB_CLOUD_URL, NODE_ENV}=require("./config/index");
const GetRoute=require("./routes/movie");
const flash=require("connect-flash");
const session=require("express-session")
const {connect}=require("mongoose");
const handlebars=require("handlebars")
// const {SearchMovies}=require("./controller/movie-controller")
const app=express();

// todo-----middleware blocks starts here
//  Static path
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:true}))
// session midleware
app.use(session({
    secret:"vijay",
    resave:true, 
    saveUninitialized:true
}));
app.use(flash());

app.use(function (req, res, next){
     res.locals.SUCCESS_MESSAGE=req.flash("SUCCESS_MESSAGE");
     res.locals.ERROR_MESSAGE=req.flash("ERROR_MESSAGE");
     res.locals.INFO_MESSAGE=req.flash("INFO_MESSAGE");
     next();

})
//  Handlebar setup
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// todo------midleware blocks end here

// Basic home router 
app.get("/", (req, res)=>{
    res.render("home")
})


// FIXME: MOUNTING THE ROUTE;
app.use("/movies", GetRoute);

// TODO: TRIM STRING
handlebars.registerHelper("trimString", (str)=>{
    let string=[...str].splice(6).join("");
    return new handlebars.SafeString(string)
})

// TODO: starring server
let startServer = async ()=>{
    try { 
     // todo----database connection
     if(process.env.NODE_ENV==="developement"){
        await connect(MONGODB_URL);
        console.log("Local mongodb connected");
     }
     if(process.env.NODE_ENV==="production"){
        await connect(MONGODB_CLOUD_URL);
        console.log("Cloud database connected");
     }
        //  !----Port server
            app.listen(PORT, err=>{
            if(err)throw err;
            console.log(`Server is listening port number ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};
startServer();