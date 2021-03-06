var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1'); // first install this dependence with npm i watson-developer-cloud --s
var fs = require('fs');
// credentials provided by your service in https://console.bluemix.net/dashboard/apps/
var textToSpeech = new TextToSpeechV1({
    username: '80127145-8b41-42dd-adff-3701f801316a',
    password: '2mBCyaDETadd',
    url: 'https://stream.watsonplatform.net/text-to-speech/api/'
});

exports.VoiceTestIBM = function (voice, text, callback) {
    try {
        var params = {
            text: text,
            voice: voice, // Optional voice
            accept: 'audio/wav' // audio format
          };
    
        textToSpeech
        .synthesize(params, function(err, audio) {
            if (err) {
                console.log(err);
                callback({
                    success: false,
                    statusCode: 400
                })
                return;
            }
            textToSpeech.repairWavHeader(audio);
            
            fs.writeFileSync('generatedAudio.wav', audio);//output name of the file           
            
            console.log('Audio generated!');
            callback({
                success: true
            })           
        });
    } catch (error) {
        callback({
            success: false,
            message: error
        })
    }
}

