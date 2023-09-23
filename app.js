const express = require("express");
const app = express();

app.set("view engine", "ejs");

const logger = function(req, res, next) {
    console.log("url: " + req.originalUrl);
    next();
}
app.use(logger);

app.get("/hello/:name", (req, res) =>{
    console.log("Hello " + req.params.name);
    res.send("Hello " + req.params.name);
})

app.get("/hello/:name", (req, res) =>{
    console.log("Hello " + req.params.name);
    res.send("Hello " + req.params.name);
})

app.get("/", (req,res) => {
    console.log("/");
    res.render("index")
})
app.listen(9000, (req,res)=>{
    console.log("Running...");
});
