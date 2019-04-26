const Express = require("express");
const BodyParser = require("body-parser");
 

 
var app = Express(); 
 
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true })); 
 
var database, collection; 
 
app.listen(10888, () => {console.log("123")
});