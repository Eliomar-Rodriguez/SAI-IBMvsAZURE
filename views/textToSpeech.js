var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1'); // first install this dependence with npm i watson-developer-cloud --s
var fs = require('fs');
var speechToText = require('../speechToText')
// credentials provided by your service in https://console.bluemix.net/dashboard/apps/
var textToSpeech = new TextToSpeechV1({
    username: '2bde827f-9cc5-4f46-ab90-e195b44684a9',
    password: '1zssWAww85eo',
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
    fs.writeFileSync('generatedAudio.wav', audio);//output name of the file
    console.log('Audio generated!');
    speechToText.textTestIBM();
    });
}

exports.synthesizeText = function (voice, text) {
    VoiceTestIBM(voice, text);
}

