var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1'); // first install this dependence with npm i watson-developer-cloud --s
var fs = require('fs');
// credentials provided by your service in https://console.bluemix.net/dashboard/apps/
var textToSpeech = new TextToSpeechV1({
  username: '015d2da1-fb94-4b89-86ec-c5213ba225dd',
  password: '7GEhOLhAH4zu',
  url: 'https://stream.watsonplatform.net/text-to-speech/api/'
});
var VoiceTestIBM = function (voice, text) {
    var params = {
        text: text,
        voice: voice, // Optional voice
        accept: 'audio/wav' // audio format
      };

    textToSpeech
    .synthesize(params, function(err, audio) {
    if (err) {
        console.log(err);
        return;
    }
    textToSpeech.repairWavHeader(audio);
    fs.writeFileSync('generatedAudio.mp3', audio);//output name of the file
    console.log('Audio generated!');
    });
}

exports.synthesizeText = function (voice, text) {
    VoiceTestIBM(voice, text);
}

