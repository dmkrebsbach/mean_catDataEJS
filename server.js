// Load express Module
var express = require("express");
// Invoke express and store the result in the variable app
var app = express();
// Set static folder for html and css files.
app.use(express.static(__dirname + "/static"));
// Set location for ejs views
app.set('views', __dirname + '/views');
// Set ejs views engine
app.set('view engine', 'ejs');

// Use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    response.render('index');
})

app.get("/sleepy", function(request, response){
    var cat_array = [
        {name: "Crotch Rocket", food: "Salmon", age: "1", sleep1: "Trash Can", sleep2: "Outside"}
    ];
    response.render('details', {cat: cat_array});
})

app.get("/scaredy", function(request, response){
    var cat_array = [
        {name: "Slim KarCrapshian", food: "Achonvies", age: "2", sleep1: "Owner's Face", sleep2: "Other Owner's Face"}
    ];
    response.render('details', {cat: cat_array});
})

app.get("/bashful", function(request, response){
    var cat_array = [
        {name: "Jackwagon", food: "Sardines", age: "3", sleep1: "Doghouse", sleep2: "Laundry Room"}
    ];
    response.render('details', {cat: cat_array});
})


// Tell express to listen on port 8000
app.listen(8000, function(){
    console.log("listening on port 8000");
})