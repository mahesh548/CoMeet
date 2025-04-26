//TTS
let key2 = "9deef01144614bdb913f29e2f45f8b95";
let location2 = "westus";
let voice = "en-US-AvaMultilingualNeural";

async function startRecognition() {
  SPXKeyword.initialize({ speechKey: key2, speechRegion: location2 });
  const result = await SPXKeyword.recognizeSpeech();
  console.log(result);
  SPXKeyword.addListener("speechResult", (data) => {
    console.log(data);
  });
}

// import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
// import { v4 as uuidv4 } from 'uuid';

// //translation
// let key = "e00e0d5feea74c42a3bd2bfa06a42d80";
// let endpoint = "https://api.cognitive.microsofttranslator.com";
// let location = "southeastasia";

// //TTS
// let key2="9deef01144614bdb913f29e2f45f8b95";
// let location2="westus";
// let voice="en-US-AvaMultilingualNeural";

// let timeOut;

//  function startRecognition(fromLang,toLang){

//             const speechConfig = SpeechSDK.SpeechTranslationConfig.fromSubscription(key2, location2);
//             speechConfig.speechRecognitionLanguage = fromLang;
//             speechConfig.addTargetLanguage(toLang);

//             const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
//             const translator = new SpeechSDK.TranslationRecognizer(speechConfig, audioConfig);

//             translator.recognizing = (s, e) => {
//                 console.log(`Recognizing: ${e.result.text}`);
//             };

//             translator.recognized = (s, e) => {
//                 if (e.result.reason === SpeechSDK.ResultReason.TranslatedSpeech) {
//                     console.log(`Translation: ${e.result.translations.get(toLang)}`);
//                 }
//             };

//             translator.canceled = (s, e) => {
//                 console.error(`Canceled: ${e.reason}`);
//             };

//             translator.sessionStarted = (s, e) => {
//                 console.log("Session started");
//             };

//             translator.sessionStopped = (s, e) => {
//                 console.log("Session stopped");
//             };

//             translator.startContinuousRecognitionAsync();
// }

// function startRecognition(lang){
//     const opt={
//         language: lang,
//         maxResults: 2,
//         partialResults: true,
//         popup: false
//         }
//     if(SpeechRecognition.available()){
//         SpeechRecognition.requestPermissions();
//         SpeechRecognition.start(opt);

//         SpeechRecognition.addListener("partialResults", (data) => {
//             console.log(data.matches[0]);
//             });
//             SpeechRecognition.addListener("error",(data)=>{
//                 if(data.error=="No match"){
//                     setTimeout(()=>{
//                         SpeechRecognition.start(opt);
//                     },1000)
//                 }
//             })

//             SpeechRecognition.addListener("listeningState",(data)=>{
//                 if(data.status=="stopped"){
//                     setTimeout(()=>{

//                         SpeechRecognition.start(opt);
//                     },1000)
//                 }
//             })
//     }
// }

// function startRecognition(){

//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//         console.error('Speech Recognition API not supported in this browser.');
//         recognizedText.textContent = 'Speech Recognition API not supported in this browser.';
//         return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.continuous = true;
//     recognition.interimResults = true;
//     recognition.lang = 'hi-IN';

//     recognition.onresult = function (event) {
//         console.log(event)
//         let transcript = '';
//         for (let i = event.resultIndex; i < event.results.length; ++i) {
//             transcript += event.results[i][0].transcript;
//         }
//         /* recognizedText.textContent = transcript; */

//         console.log(transcript);
//         /* clearTimeout(timeOut);
//         timeOut=setTimeout(()=>{translate(transcript,"hi","en")},2000) */
//     };

//     recognition.onerror = function (event) {
//         console.error('Speech recognition error detected: ' + event.error);
//     };

//     recognition.onend = function () {
//         console.log('User Take Pause: restarting recognition...');
//         // recognition.start()
//     };

//     recognition.start();
//     console.log('Speech recognition started.');

// }
// startRecognition()

// async function translate(text,fr,to){
// const response=await fetch(`${endpoint}/translate?api-version=3.0&from=${fr}&to=${to}`, {
//     method: 'POST',
//     headers: {
//         'Ocp-Apim-Subscription-Key': key,
//         'Ocp-Apim-Subscription-Region': location,
//         'Content-Type': 'application/json',
//         'X-ClientTraceId': uuidv4().toString()
//     },
//     body: JSON.stringify([{
//         'text': text
//     }])
// })
// const data=await response.json()
// console.log(data)
// let textInput=data[0].translations[0].text;
// translatedText.innerText=textInput;
// synthesizeSpeech(textInput)
// }

function synthesizeSpeech(textInput) {
  const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(key2, location2);
  const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
  speechConfig.speechSynthesisVoiceName = voice;

  const synthesizer = new SpeechSDK.SpeechSynthesizer(
    speechConfig,
    audioConfig
  );

  synthesizer.speakTextAsync(
    textInput,
    function (result) {
      if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
      } else {
        console.error(
          "Speech synthesis canceled, " +
            result.errorDetails +
            "\nDid you set the speech resource key and region values?"
        );
      }
      synthesizer.close();
    },
    function (err) {
      console.trace("err - " + err);
      synthesizer.close();
    }
  );
}

window.startRecognition = startRecognition;
