var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser')

var audio = require('./views/TTS_IBM')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var mydb;

app.post("/generateAudio", function (request, response) {
  
  var sentence = request.body.sentence;
  var voice = request.body.voice;
  console.log(sentence + ' - ' + voice)

  audio.VoiceTestIBM(voice,sentence, function (data) {console.log(data)
    if (data.success)
      response.send({
        success: true,
        statusCode: 200
      })
    else
    response.send({
      success: false,
      message: data.message
    })
  }); 
});

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
