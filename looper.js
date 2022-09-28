// const context = new AudioContext(Tone.context)
const target = document.getElementById('target')
// const { Note, Key } = window.Tonal;
const play = (p) => p.start('+0.1').stop(+4);
const stop = (p) => p.stop(0);
const volumeUp = (p) => ++keys.player(p).volume.value;
const volumeDown = (p) => --p.volume.value;

let counter = 0;
let reverse = true;

GUI_Builder()

Tone.Transport.bpm.value = 120;
const SixTeenth_Note_Length = () => 0.25 * 60 / Tone.Transport.bpm.value

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
    Tone.Transport.start('+0.01')
    Tone.start(0)
});

// Stop button click handler
document.querySelector(".stop").addEventListener('click', ()=> { Tone.Transport.stop(0) });

// This thing just ticks away at equal intervals, allowing us to step in and program the samples to play at each one of those intervals
new Tone.Sequence((time, step) => {
    for (const instrument in sequences) {
        // console.log('step ', step,  instrument, sequences[instrument][step] )
        if(sequences[instrument][step]){
            if (instrument=== 'rCrash') {
                keys.player(instrument).start(time, 0.01);
            } else {
                keys.player(instrument).start(time, 0.01, '4n');
            }
        }
    }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).start(0);

const AMSynth = new Tone.AMSynth().toDestination();
const duoSynth = new Tone.DuoSynth().toDestination();
const MonoSynth = new Tone.MonoSynth({
    oscillator: {
        type: "square"
    },
    envelope: {
        attack: 0.1
    }
}).toDestination();
const plucky = new Tone.PluckSynth().toDestination();
// create a new cheby
const cheby = new Tone.Chebyshev(50).toDestination();
// create a monosynth connected to our cheby
const synth = new Tone.MonoSynth().connect(cheby);

document.addEventListener('keydown', (event) => {
    let name = event.key;
    let code = event.code;
    switch (name){
        case 'a':
            console.log(Tonal.Chord.get("Cmin"))
            for (let i = 0; i < Tonal.Chord.get("Cmin").notes.length; i++) {
                // console.log(Tonal.Chord.get("Cmin").notes[i])
                let note = `${Tonal.Chord.get("Cmin").notes[i]}3`
                console.log(note)
                synth.triggerAttackRelease(`${note}`, 0.4);
                // plucky.triggerAttack(`${note}`, "1n");
            }
            break;
        case 'w':
            console.log(Tonal.Chord.get("C#min"))
            for (let i = 0; i < Tonal.Chord.get("C#min").notes.length; i++) { console.log(Tonal.Chord.get("C#min").notes[i]) }
            break;
        case 's':
            console.log(Tonal.Chord.get("Dmin"))
            for (let i = 0; i < Tonal.Chord.get("Dmin").notes.length; i++) { console.log(Tonal.Chord.get("Dmin").notes[i]) }
            break;
        case 'e':
            console.log(Tonal.Chord.get("D#min"))
            for (let i = 0; i < Tonal.Chord.get("D#min").notes.length; i++) { console.log(Tonal.Chord.get("D#min").notes[i]) }
            break;
        case 'd':
            console.log(Tonal.Chord.get("Emin"))
            for (let i = 0; i < Tonal.Chord.get("Emin").notes.length; i++) { console.log(Tonal.Chord.get("Emin").notes[i]) }
            break;
        case 'f':
            console.log(Tonal.Chord.get("Fmin"))
            for (let i = 0; i < Tonal.Chord.get("Fmin").notes.length; i++) { console.log(Tonal.Chord.get("Fmin").notes[i]) }
            break;
        case 't':
            console.log(Tonal.Chord.get("F#min"))
            for (let i = 0; i < Tonal.Chord.get("F#min").notes.length; i++) { console.log(Tonal.Chord.get("F#min").notes[i]) }
            break;
        case 'g':
            console.log(Tonal.Chord.get("Gmin"))
            for (let i = 0; i < Tonal.Chord.get("Gmin").notes.length; i++) { console.log(Tonal.Chord.get("Gmin").notes[i]) }
            break;
        case 'y':
            console.log(Tonal.Chord.get("G#min"))
            for (let i = 0; i < Tonal.Chord.get("G#min").notes.length; i++) { console.log(Tonal.Chord.get("G#min").notes[i]) }
            break;
        case 'h':
            console.log(Tonal.Chord.get("Amin"))
            for (let i = 0; i < Tonal.Chord.get("Amin").notes.length; i++) { console.log(Tonal.Chord.get("Amin").notes[i]) }
            break;
        case 'u':
            console.log(Tonal.Chord.get("A#min"))
            for (let i = 0; i < Tonal.Chord.get("A#min").notes.length; i++) { console.log(Tonal.Chord.get("A#min").notes[i]) }
            break;
        case 'j':
            console.log(Tonal.Chord.get("Bmin"))
            for (let i = 0; i < Tonal.Chord.get("Bmin").notes.length; i++) { console.log(Tonal.Chord.get("Bmin").notes[i]) }
            break;
        case 'k':
            console.log(Tonal.Chord.get("Cmin"))
            for (let i = 0; i < Tonal.Chord.get("Cmin").notes.length; i++) { console.log(Tonal.Chord.get("Cmin").notes[i]) }
            break;
        case 'o':
            console.log(Tonal.Chord.get("C#min"))
            for (let i = 0; i < Tonal.Chord.get("C#min").notes.length; i++) { console.log(Tonal.Chord.get("C#min").notes[i]) }
            break;
        case 'l':
            console.log(Tonal.Chord.get("Dmin"))
            for (let i = 0; i < Tonal.Chord.get("Dmin").notes.length; i++) { console.log(Tonal.Chord.get("Dmin").notes[i]) }
            break;
        case 'p':
            console.log(Tonal.Chord.get("D#min"))
            for (let i = 0; i < Tonal.Chord.get("D#min").notes.length; i++) { console.log(Tonal.Chord.get("D#min").notes[i]) }
            break;
        case ';':
            console.log(Tonal.Chord.get("Emin"))
            for (let i = 0; i < Tonal.Chord.get("Emin").notes.length; i++) { console.log(Tonal.Chord.get("Emin").notes[i]) }
            break;
    }
}, false);

// Add event listener on keypress
// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     console.log(`Key pressed ${name} \r\n Note: ${Note}  `);
// }, false);
document.getElementById('phaserQ').addEventListener('input', function (){
    phaser.q.value = document.getElementById('phaserQ').value;
})
document.getElementById('phaserFreq').addEventListener('input', function (){
    phaser.frequency.value = document.getElementById('phaserFreq').value;
})
document.getElementById('phaserOct').addEventListener('input', function (){
    phaser.octaves = document.getElementById('phaserOct').value;
})
document.getElementById('phaserStages').addEventListener('input', function (){
    phaser.stages = document.getElementById('phaserStages').value;
})
document.getElementById('phaserWet').addEventListener('input', function (){
    phaser.wet.value = document.getElementById('phaserWet').value;
})