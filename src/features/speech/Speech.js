import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import mute from './../../images/mute.png';
import Onn from './../../images/onn.png';

function Speech(props) {
    const commands = [
        {
            command:'reset',
            callback:({resetTranscript})=>resetTranscript()
        },
        {
            command:'open *',
            callback:(site)=>{
                window.open('https://'+site)
            }
        },
    ]
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({commands});

    

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
        <div className='container mt-5'>
            <h2>Speak and get text</h2>
            <p>Microphone: {listening ? <img src={Onn} width="30" height="30" alt="icon" /> : <img src={mute} width="30" height="30" alt="icon" />}</p>
            <button onClick={SpeechRecognition.startListening} className="btn btn-sm btn-success mr-2">Start</button>
            {/* <button onClick={SpeechRecognition.startListening({continuous:true,language:'en-IN'})} className="btn btn-sm btn-success mr-2">Start</button> */}
            <button onClick={SpeechRecognition.stopListening} className="btn btn-sm btn-info mr-2">Stop</button>
            <button onClick={resetTranscript} className="btn btn-sm btn-danger">Reset</button>
            <p style={{marginTop:"20px",fontFamily:"fantasy",letterSpacing:"0.7px",fontSize:"24px"}}>{transcript}</p>
        </div>
    );
}

export default Speech;