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

document.addEventListener('keydown', (event) => {
    var name = event.key;
    switch (name){
        case 'a':
            console.log(Tonal.Chord.get("Cmin"))
            for (let i = 0; i < Tonal.Chord.get("Cmin").notes.length; i++) { console.log(Tonal.Chord.get("Cmin").notes[i]) }
            break;
        case 'w':
            console.log(Tonal.Chord.get("C#min"))
            break;
        case 's':
            console.log(Tonal.Chord.get("Dmin"))
            // console.log(Tonal.Scale.get("D minor").notes)
            break;
        case 'e':
            console.log(Tonal.Chord.get("D#min"))
            // console.log(Tonal.Scale.get("D# minor").notes)
            break;
        case 'd':
            console.log(Tonal.Chord.get("Emin"))
            // console.log(Tonal.Scale.get("E minor").notes)
            break;
        case 'f':
            console.log(Tonal.Chord.get("Fmin"))
            // console.log(Tonal.Scale.get("F minor").notes)
            break;
        case 't':
            console.log(Tonal.Chord.get("F#min"))
            // console.log(Tonal.Scale.get("F# minor").notes)
            break;
        case 'g':
            console.log(Tonal.Chord.get("Gmin"))
            // console.log(Tonal.Scale.get("G minor").notes)
            break;
        case 'y':
            console.log(Tonal.Chord.get("G#min"))
            // console.log(Tonal.Scale.get("G# minor").notes)
            break;
        case 'h':
            console.log(Tonal.Chord.get("Amin"))
            // console.log(Tonal.Scale.get("A minor").notes)
            break;
        case 'u':
            console.log(Tonal.Chord.get("A#min"))
            // console.log(Tonal.Scale.get("A# minor").notes)
            break;
        case 'j':
            console.log(Tonal.Chord.get("Bmin"))
            // console.log(Tonal.Scale.get("B minor").notes)
            break;
        case 'k':
            console.log(Tonal.Chord.get("Cmin"))
            // console.log(Tonal.Scale.get("C minor").notes)
            break;
        case 'o':
            console.log(Tonal.Chord.get("C#min"))
            // console.log(Tonal.Scale.get("C# minor").notes)
            break;
        case 'l':
            console.log(Tonal.Chord.get("Dmin"))
            // console.log(Tonal.Scale.get("D minor").notes)
            break;
        case 'p':
            console.log(Tonal.Chord.get("D#min"))
            // console.log(Tonal.Scale.get("D# minor").notes)
            break;
        case ';':
            console.log(Tonal.Chord.get("Emin"))
            // console.log(Tonal.Scale.get("E minor").notes)
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