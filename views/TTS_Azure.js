/*const apiKey = '12140d6367c04f64984a42e7c17a022a' 
      //var voice = document.getElementById('sentence').value;
      async function synth(key, text, lang, gender, voice){
        const urlAuth = 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken'
        const auth = await axios.post(urlAuth, {}, {
          headers:{
            'Ocp-Apim-Subscription-Key': key
          }
        })
        const urlAudio = 'https://speech.platform.bing.com/synthesize'
        const xml = `
        <speak version='1.0' xml:lang='${lang}'>
            <voice xml:lang='${lang}' xml:gender='${gender}' name='Microsoft Server Speech Text to Speech Voice (${voice})'>"
            ${text}</voice></speak>
        `
        const audioData = await axios.post(urlAudio, xml, {
          responseType: 'blob',
          headers:{
            Authorization: 'Bearer '+auth.data,
            'Content-Type': 'application/ssml+xml',
            'X-Microsoft-OutputFormat': 'audio-16khz-32kbitrate-mono-mp3'
          }
        })
        const reader = new FileReader()
        reader.onload = () => {
          const container = document.getElementById('container')
          const audioTag = document.createElement('audio')
          audioTag.src = reader.result
          audioTag.autoplay = true
          audioTag.controls = true
          container.appendChild(audioTag)
        }
        reader.readAsDataURL(audioData.data)
        console.log(audioData)
        
      }
      
      synth(apiKey, 'Hello, how are you?','en-US','Male','en-US, BenjaminRUS')*/
      