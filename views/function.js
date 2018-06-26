var generateAudio = function () {
    var sentence = document.getElementById('sentence').value;
    var voice = $('#selectedVoice').val();
    console.log(sentence + ' - ' + voice)
    if (sentence.length > 0) {
        $.ajax({
            method: "POST",
            url: "./api/visitors",
            contentType: "application/json",
            data: JSON.stringify({
                sentence: sentence,
                voice: voice
            })
        })
        .done(function(data) {
            console.log(data)
        });
    }
}
