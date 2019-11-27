const express    = require("express");
const path = require('path');
const port = process.env.PORT || 3000;
const app        = express();

app.use(express.static(__dirname + "./build"));

app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});//
//"start": "http-server -o"