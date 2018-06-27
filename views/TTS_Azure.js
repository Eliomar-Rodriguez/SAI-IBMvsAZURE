/*var request = require('request'),
    xmlbuilder = require('xmlbuilder'),
    wav = require('wav');//,
    Speaker = require('speaker');

exports.Synthesize = function Synthesize(){

    // Note: new unified SpeechService API key and issue token uri is per region
    // New unified SpeechService key
    // Free: https://azure.microsoft.com/en-us/try/cognitive-services/?api=speech-services
    // Paid: https://go.microsoft.com/fwlink/?LinkId=872236
    var apiKey = "a08906d5152a46869d2c43148ded968a";
    var ssml_doc = xmlbuilder.create('speak')
        .att('version', '1.0')
        .att('xml:lang', 'en-us')
        .ele('voice')
        .att('xml:lang', 'en-us')
        .att('xml:gender', 'Male')
        .att('name', 'Microsoft Server Speech Text to Speech Voice (en-US, BenjaminRUS)')
        .txt('This is a demo to call Microsoft text to speech service.')
        .end();
    var post_speak_data = ssml_doc.toString();

    request.post({
        url: 'https://westus.api.cognitive.microsoft.com/sts/v1.0/issueToken',
        headers: {
            'Ocp-Apim-Subscription-Key' : apiKey
        }
    }, function (err, resp, access_token) {
        if (err || resp.statusCode != 200) {
            console.log(err, resp.body);
        } else {
            try {
                request.post({
                    url: 'https://westus.tts.speech.microsoft.com/cognitiveservices/v1',
                    body: post_speak_data,
                    headers: {
                        'content-type' : 'application/ssml+xml',
                        'X-Microsoft-OutputFormat' : 'riff-24khz-16bit-mono-pcm',
                        'Authorization': 'Bearer ' + access_token,
                        'X-Search-AppId': '07D3234E49CE426DAA29772419F436CA',
                        'X-Search-ClientID': '1ECFAE91408841A480F00935DC390960',
                        'User-Agent': 'TTSNodeJS'
                    },
                    encoding: null
                }, function (err, resp, speak_data) {
                    if (err || resp.statusCode != 200) {
                        console.log(err, resp.body);
                    } else {
                        try {
                            var reader = new wav.Reader();
                            reader.on('format', function (format) {
                                console.log(format)
                                reader.pipe(new Speaker(format));
                            });
                            var Readable = require('stream').Readable;
                            var s = new Readable;
                            s.push(speak_data);
                            s.push(null);
                            s.pipe(reader);
                        } catch (e) {
                            console.log(e.message);
                        }
                    }
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    });
};*/