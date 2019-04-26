const Express = require("express");
const BodyParser = require("body-parser");
const route = require('./routes/route');
const errorhandler = require(controllers/errorhandler)
var app = Express(); 
 
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true })); 
app.use(errorhandler)
app.use('/',route)
 
app.listen(10888, () => {
    console.log('Server is ready with prot 10888.')
}); 