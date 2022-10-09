// const context = new AudioContext(Tone.context)
// const context = Pizzicato.context;
// const Tone_context = Tone.context
// console.log('pizzicato context:', context)
// console.log('tone context:', Tone_context)
// Tone.setContext(context)
// console.log('tone context:', Tone_context)
const target = document.getElementById('target')
// const { Note, Key } = window.Tonal;
const play = (p) => p.start('+0.1').stop(+4);
const stop = (p) => p.stop(0);
const volumeUp = (p) => ++keys.player(p).volume.value;
const volumeDown = (p) => --p.volume.value;
let counter = 0;
let reverse = true;

GUI_Builder()
const notes = {
    "C4": 261.63,
    "Db4": 277.18,
    "D4": 293.66,
    "Eb4": 311.13,
    "E4": 329.63,
    "F4": 349.23,
    "Gb4": 369.99,
    "G4": 392.00,
    "Ab4": 415.30,
    "A4": 440,
    "Bb4": 466.16,
    "B4": 493.88,
    "C5": 523.25
}

// NOTE SELECTS
const noteSelectsDiv = document.querySelector('#note-selects-div');

for (let i = 0; i <= 7; i++) {
    const select = document.createElement('select');
    select.id = `note ${i + 1}`;
    for (let j = 0; j < Object.keys(notes).length; j++) {
        const option = document.createElement('option');
        option.value = j;
        option.innerText = `${Object.keys(notes)[j]}`;
        select.appendChild(option);
        select.addEventListener('change', setCurrentNotes)
    }
    noteSelectsDiv.appendChild(select);
}

let currentNotes = [0, 3, 0, 7, 8, 7, 3, 2]
const noteSelects = document.querySelectorAll('select');
function setNoteSelects() {
    for (let i = 0; i < currentNotes.length; i++) {
        noteSelects[i].value = currentNotes[i];
    }
}

function setCurrentNotes() {
    for (let i = 0; i < noteSelects.length; i++) {
        currentNotes[i] = noteSelects[i].value;
    }
}

setNoteSelects();

Tone.Transport.bpm.value = 175;
const SixTeenth_Note_Length = () => 0.25 * 60 / Tone.Transport.bpm.value
// console.log('16th', SixTeenth_Note_Length())

// ----------------------------------------------------------------------------------------

// CONTEXT AND MASTER VOLUME
var AudioContext = window.AudioContext ||
    window.webkitAudioContext;

const context = new AudioContext();
const masterVolume = context.createGain();
masterVolume.connect(context.destination);
masterVolume.gain.value = 0.2

const volumeControl = document.querySelector('#volume-control');

volumeControl.addEventListener('input', function(){
    masterVolume.gain.value = this.value;
});

//WAVEFORM SELECT
const waveforms = document.getElementsByName('waveform');
let waveform = "sine";

function setWaveform() {
    for(var i = 0; i < waveforms.length; i++){
        if(waveforms[i].checked){
            waveform = waveforms[i].value;
        }
    }
}

waveforms.forEach((waveformInput) => {
    waveformInput.addEventListener('change', function() {
        setWaveform();
    });
});


// EFFECTS CONTROLS

// Envelope
let attackTime = 0.3;
let sustainLevel = 0.8;
let releaseTime = 0.3;
let noteLength = 1;

const attackControl = document.querySelector('#attack-control');
const releaseControl = document.querySelector('#release-control');
const noteLengthControl = document.querySelector('#note-length-control');

attackControl.addEventListener('input', function() {
    attackTime = Number(this.value);
});

releaseControl.addEventListener('input', function() {
    releaseTime = Number(this.value);
});

noteLengthControl.addEventListener('input', function() {
    noteLength = Number(this.value);
});

// Vibrato
let vibratoSpeed = 10;
let vibratoAmount = 0;
const vibratoAmountControl = document.querySelector('#vibrato-amount-control');
const vibratoSpeedControl= document.querySelector('#vibrato-speed-control');

vibratoAmountControl.addEventListener('input', function() {
    vibratoAmount = this.value;
})

vibratoSpeedControl.addEventListener('input', function() {
    vibratoSpeed = this.value;
})

// Delay
const delayAmountControl = document.querySelector('#delay-amount-control');
const delayTimeControl= document.querySelector('#delay-time-control');
const feedbackControl= document.querySelector('#feedback-control');
const delay = context.createDelay();
const feedback = context.createGain();
const delayAmountGain = context.createGain();

delayAmountGain.connect(delay)
delay.connect(feedback)
feedback.connect(delay)
delay.connect(masterVolume)


delay.delayTime.value = 0;
delayAmountGain.gain.value = 0;
feedback.gain.value = 0;

delayAmountControl.addEventListener('input', function() {
    delayAmountGain.value = this.value;
})

delayTimeControl.addEventListener('input', function() {
    delay.delayTime.value = this.value;
})

feedbackControl.addEventListener('input', function() {
    feedback.gain.value = this.value;
})


//LOOP CONTROLS
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const tempoControl = document.querySelector('#tempo-control');
let tempo = Tone.Transport.bpm.value;
let currentNoteIndex = 0;
let isPlaying = false;

tempoControl.addEventListener('input', function() {
    tempo = Number(this.value);
}, false);

startButton.addEventListener('click', function() {
    if (!isPlaying){
        isPlaying = true;
        noteLoop();
    }
})

stopButton.addEventListener('click', function() {
    isPlaying = false;
})

function noteLoop() {
    const secondsPerBeat = 60.0 / tempo;
    if (isPlaying) {
        playCurrentNote();
        nextNote();
        window.setTimeout(function() {
            noteLoop();
        }, secondsPerBeat * 1000)
    };
}

function nextNote() {
    noteSelects[currentNoteIndex].style.background = "yellow";
    if (noteSelects[currentNoteIndex - 1]) {
        noteSelects[currentNoteIndex - 1].style.background = "white";
    } else {
        noteSelects[7].style.background = "white"
    }
    currentNoteIndex++;
    if (currentNoteIndex === 8) {
        currentNoteIndex = 0;
    }
}

function playCurrentNote() {
    const osc = context.createOscillator();
    const noteGain = context.createGain();
    noteGain.gain.setValueAtTime(0, 0);
    noteGain.gain.linearRampToValueAtTime(sustainLevel, context.currentTime + noteLength * attackTime);
    noteGain.gain.setValueAtTime(sustainLevel, context.currentTime + noteLength - noteLength * releaseTime);
    noteGain.gain.linearRampToValueAtTime(0, context.currentTime + noteLength);

    lfoGain = context.createGain();
    lfoGain.gain.setValueAtTime(vibratoAmount, 0);
    lfoGain.connect(osc.frequency)

    lfo = context.createOscillator();
    lfo.frequency.setValueAtTime(vibratoSpeed, 0);
    lfo.start(0);
    lfo.stop(context.currentTime + noteLength);
    lfo.connect(lfoGain);

    osc.type = waveform;
    osc.frequency.setValueAtTime(Object.values(notes)[`${currentNotes[currentNoteIndex]}`], 0);
    osc.start(0);
    osc.stop(context.currentTime + noteLength);
    osc.connect(noteGain);

    noteGain.connect(masterVolume);
    noteGain.connect(delay);
}
// ----------------------------------------------------------------------------------------



// This is an object of sequence arrays, keeping track of each of the on/off positions of all the steps for each sample
const sequences = {
    kick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    snare: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    hihat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    clap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    rCrash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    shaker: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    tom1: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    tom2: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    tom3: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    e2: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    g2: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
}

// Loops over all step sequencer rows ( each row represents a sample, indicated by its `data-sampleName` property
document.querySelectorAll(".step-sequencer").forEach((sampleSequencerElement) => {
    // Extract the sample name
    const sampleName = sampleSequencerElement.dataset.samplename;

    // Loop over each step for a sample, and wire a click event listener
    sampleSequencerElement.querySelectorAll("button").forEach((stepElement, step) => {
        stepElement.addEventListener("click", () => {
            console.log("click", step, sampleName)
            // Toggle the element class to change the red light indicator
            stepElement.querySelector('.light').classList.toggle('active');

            // Toggle the sequence value for the instrument
            sequences[sampleName][step] = !sequences[sampleName][step];
        });
    })
})

// Play button click handler
document.querySelector(".play").addEventListener('click', () => {
    recorder.start();
    Tone.Transport.start('+0.01')
    Tone.start(0)
});

// Stop button click handler
document.querySelector(".stop").addEventListener('click', async ()=> {
    // the recorded audio is returned as a blob
    const recording = await recorder.stop();
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(recording);
    const anchor = document.createElement("a");
    anchor.download = "recording.webm";
    anchor.href = url;
    anchor.click();
    Tone.Transport.stop(0)
});

// repeated event every 16th note
// Tone.Transport.scheduleRepeat((time) => {
//     use the callback time to schedule events
    // omniOsc.start(time).stop(time + 0.1);
// }, "16n");


// This thing just ticks away at equal intervals, allowing us to step in and program the samples to play at each one of those intervals
new Tone.Sequence((time, step) => {
    for (const instrument in sequences) {
        // console.log('step ', step,  instrument, sequences[instrument][step] )
        if(sequences[instrument][step]){
            if (instrument=== 'e2'){
                omniOsc.volume.value = -20
                omniOsc.start(time).stop(time + SixTeenth_Note_Length());
                return
            }
            // if (instrument=== 'g2'){
            //     osc.volume.value = -20
            //     osc.start(time).stop(time + SixTeenth_Note_Length());
            //     return;
            // }
            if (instrument=== 'rCrash') {
                keys.player(instrument).start(time, 0.01);
            } else {
                keys.player(instrument).start(time, 0.01, '4n');
            }
        } else {
            if (instrument==='e2'){
                omniOsc.stop(time+0.01)
            }
            // if (instrument==='g2'){
            //     osc.stop(time+0.01)
            // }
        }
    }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).start(+0.01);

// const AMSynth = new Tone.AMSynth().toDestination();
// const duoSynth = new Tone.DuoSynth().toDestination();
// const MonoSynth = new Tone.MonoSynth({
//     oscillator: {
//         type: "square"
//     },
//     envelope: {
//         attack: 0.1
//     }
// }).toDestination();
// const plucky = new Tone.PluckSynth().toDestination();
// // create a new cheby
// const cheby = new Tone.Chebyshev(50).toDestination();
// // create a monosynth connected to our cheby
// const synth = new Tone.MonoSynth().connect(cheby);
//
// document.addEventListener('keydown', (event) => {
//     let name = event.key;
//     let code = event.code;
//     switch (name){
//         case 'a':
//             console.log(Tonal.Chord.get("Cmin"))
//             for (let i = 0; i < Tonal.Chord.get("Cmin").notes.length; i++) {
//                 // console.log(Tonal.Chord.get("Cmin").notes[i])
//                 let note = `${Tonal.Chord.get("Cmin").notes[i]}3`
//                 console.log(note)
//                 synth.triggerAttackRelease(`${note}`, 0.4);
//                 // plucky.triggerAttack(`${note}`, "1n");
//             }
//             break;
//         case 'w':
//             console.log(Tonal.Chord.get("C#min"))
//             for (let i = 0; i < Tonal.Chord.get("C#min").notes.length; i++) { console.log(Tonal.Chord.get("C#min").notes[i]) }
//             break;
//         case 's':
//             console.log(Tonal.Chord.get("Dmin"))
//             for (let i = 0; i < Tonal.Chord.get("Dmin").notes.length; i++) { console.log(Tonal.Chord.get("Dmin").notes[i]) }
//             break;
//         case 'e':
//             console.log(Tonal.Chord.get("D#min"))
//             for (let i = 0; i < Tonal.Chord.get("D#min").notes.length; i++) { console.log(Tonal.Chord.get("D#min").notes[i]) }
//             break;
//         case 'd':
//             console.log(Tonal.Chord.get("Emin"))
//             for (let i = 0; i < Tonal.Chord.get("Emin").notes.length; i++) { console.log(Tonal.Chord.get("Emin").notes[i]) }
//             break;
//         case 'f':
//             console.log(Tonal.Chord.get("Fmin"))
//             for (let i = 0; i < Tonal.Chord.get("Fmin").notes.length; i++) { console.log(Tonal.Chord.get("Fmin").notes[i]) }
//             break;
//         case 't':
//             console.log(Tonal.Chord.get("F#min"))
//             for (let i = 0; i < Tonal.Chord.get("F#min").notes.length; i++) { console.log(Tonal.Chord.get("F#min").notes[i]) }
//             break;
//         case 'g':
//             console.log(Tonal.Chord.get("Gmin"))
//             for (let i = 0; i < Tonal.Chord.get("Gmin").notes.length; i++) { console.log(Tonal.Chord.get("Gmin").notes[i]) }
//             break;
//         case 'y':
//             console.log(Tonal.Chord.get("G#min"))
//             for (let i = 0; i < Tonal.Chord.get("G#min").notes.length; i++) { console.log(Tonal.Chord.get("G#min").notes[i]) }
//             break;
//         case 'h':
//             console.log(Tonal.Chord.get("Amin"))
//             for (let i = 0; i < Tonal.Chord.get("Amin").notes.length; i++) { console.log(Tonal.Chord.get("Amin").notes[i]) }
//             break;
//         case 'u':
//             console.log(Tonal.Chord.get("A#min"))
//             for (let i = 0; i < Tonal.Chord.get("A#min").notes.length; i++) { console.log(Tonal.Chord.get("A#min").notes[i]) }
//             break;
//         case 'j':
//             console.log(Tonal.Chord.get("Bmin"))
//             for (let i = 0; i < Tonal.Chord.get("Bmin").notes.length; i++) { console.log(Tonal.Chord.get("Bmin").notes[i]) }
//             break;
//         case 'k':
//             console.log(Tonal.Chord.get("Cmin"))
//             for (let i = 0; i < Tonal.Chord.get("Cmin").notes.length; i++) { console.log(Tonal.Chord.get("Cmin").notes[i]) }
//             break;
//         case 'o':
//             console.log(Tonal.Chord.get("C#min"))
//             for (let i = 0; i < Tonal.Chord.get("C#min").notes.length; i++) { console.log(Tonal.Chord.get("C#min").notes[i]) }
//             break;
//         case 'l':
//             console.log(Tonal.Chord.get("Dmin"))
//             for (let i = 0; i < Tonal.Chord.get("Dmin").notes.length; i++) { console.log(Tonal.Chord.get("Dmin").notes[i]) }
//             break;
//         case 'p':
//             console.log(Tonal.Chord.get("D#min"))
//             for (let i = 0; i < Tonal.Chord.get("D#min").notes.length; i++) { console.log(Tonal.Chord.get("D#min").notes[i]) }
//             break;
//         case ';':
//             console.log(Tonal.Chord.get("Emin"))
//             for (let i = 0; i < Tonal.Chord.get("Emin").notes.length; i++) { console.log(Tonal.Chord.get("Emin").notes[i]) }
//             break;
//     }
// }, false);

// Add event listener on keypress
// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     console.log(`Key pressed ${name} \r\n Note: ${Note}  `);
// }, false);
// document.getElementById('phaserQ').addEventListener('input', function (){
//     phaser.q.value = document.getElementById('phaserQ').value;
// })
// document.getElementById('phaserFreq').addEventListener('input', function (){
//     phaser.frequency.value = document.getElementById('phaserFreq').value;
// })
// document.getElementById('phaserOct').addEventListener('input', function (){
//     phaser.octaves.value = document.getElementById('phaserOct').value;
// })
// document.getElementById('phaserStages').addEventListener('input', function (){
//     phaser.stages.value = document.getElementById('phaserStages').value;
// })
// document.getElementById('phaserWet').addEventListener('input', function (){
//     phaser.wet.value = document.getElementById('phaserWet').value;
// })