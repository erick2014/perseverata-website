const express = require('express');

// http://expressjs.com/en/4x/api.html
const app = express();
const port = process.env.PORT || 8000;

const indexFile = __dirname + '/index.html';

//enable dist and public folders as public for build and assets
app.use("/dist",express.static(__dirname + '/dist'));
app.use("/public",express.static(__dirname + '/public'));

app.get('*', function (request, response) {
  response.sendFile(indexFile, function (error) {
    if (error) {
      console.log(error);
    }
  });
});
app.listen(port);
console.log("Listening at http://localhost:" + port);
