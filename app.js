const Express = require("express");
const BodyParser = require("body-parser");
const route = require('./routes/route');
const errorhandler = require('./controllers/errorhandler')
const cors = require('cors');
const jwt = require('./controllers/jwt.js');
var app = Express(); 
 
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true })); 
app.use(errorhandler)
app.use(cors());
app.use(jwt());
app.use('/',route)
 
app.listen(10888, () => {
    console.log('Server is ready with prot 10888.')
}); 