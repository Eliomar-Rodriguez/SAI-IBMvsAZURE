var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1'); // first install this dependence with npm i watson-developer-cloud --s
var fs = require('fs');
// credentials provided by your service in https://console.bluemix.net/dashboard/apps/
var textToSpeech = new TextToSpeechV1({
  username: '28d59560-13de-4e21-aa34-bd1baad3b73f',
  password: '4bkqDzWoMTNA',
  url: 'https://stream.watsonplatform.net/text-to-speech/api/'
});
var VoiceTestIBM = function (audioName, voice) {
    var params = {
        text: "I have been assigned to handle your order status request."+
        "I am sorry to inform you that the items you requested are backordered. We apologize for the inconvenience."+
        "We don't know when the items will become available. Maybe next week, but we are not sure at this time."+
        "But because we want you to be a satisfied customer, we are giving you a 50% discount on your order!",
        voice: voice, // Optional voice
        accept: 'audio/wav' // audio format
      };//kkd

    textToSpeech
    .synthesize(params, function(err, audio) {
    if (err) {
        console.log(err);
        return;
    }
    textToSpeech.repairWavHeader(audio);
    fs.writeFileSync(audioName, audio);//output name of the file
    console.log(audioName+' generated!');
    });
}

var VoiceStructuredTestIBM = function (audioName, voice) {
    var params = {
        text: "<speak>I have been assigned to handle your order status request."+
        "<express-as type=\"Apology\">I am sorry to inform you that the items you requested are backordered. We apologize for the inconvenience</express-as>"+
        "<express-as type=\"Uncertainty\">We don't know when the items will become available. Maybe next week, but we are not sure at this time</express-as>"+
        "<express-as type=\"GoodNews\">But because we want you to be a satisfied customer, we are giving you a 50% discount on your order! </express-as>"+
        "</speak>",
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
    fs.writeFileSync(audioName, audio);//output name of the file
    console.log(audioName+' generated!');
    });
}

var VoiceTestAZURE = function(){

}
exports.synthesizeText = function (text) {   
    VoiceTestIBM('KateVoiceTestIBM.mp3', 'en-GB_KateVoice');// good
    VoiceTestIBM('AllisonVoiceTestIBM.mp3', 'en-US_AllisonVoice'); // good
    VoiceTestIBM('LisaVoiceTestIBM.mp3', 'en-US_LisaVoice'); // good
    VoiceTestIBM('MichaelVoiceTestIBM.mp3', 'en-US_MichaelVoice'); // good

    VoiceStructuredTestIBM('AllisonVoiceStructuredTestIBM.mp3', 'en-US_AllisonVoice');// good
}

