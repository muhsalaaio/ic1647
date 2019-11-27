var express    = require("express");
var app        = express();

var port = process.env.PORT || 3000;

app.use(express.static("./"));

app.get("/", function(req, res) {
    res.sendFile("./index.html"); 
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});//
//"start": "http-server -o"