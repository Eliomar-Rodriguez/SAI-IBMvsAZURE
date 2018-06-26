var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

var speechToText = new SpeechToTextV1({
    username: 'e37d74b7-cc35-4b73-bb0d-1145dcac6c36',
    password: 'fsRBBsFbY3EY',
    url: 'https://stream.watsonplatform.net/speech-to-text/api/'
});

exports.textTestIBM = function () {
  var params = {
    audio: fs.createReadStream('./generatedAudio.wav'),
    content_type: 'audio/l16; rate=44100'
  };
  console.log('paso1')
  speechToText.recognize(params, function(err, res) {
    console.log('paso2')
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(res, null, 2));
    console.log('paso3')
  });
  console.log('paso4')
  fs.createReadStream('./generatedAudio.wav')
    .pipe(speechToText.createRecognizeStream({ content_type: 'audio/l16; rate=44100' }))
    .pipe(fs.createWriteStream('./transcription.txt'));
    console.log('paso5')
}