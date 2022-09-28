// const context = new AudioContext(Tone.context)
const target = document.getElementById('target')
const { Note, Key } = window.Tonal;
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

const synth = new Tone.AMSynth().toDestination();
document.addEventListener('keydown', (event) => {
    var name = event.key;
    switch (name){
        case 'a':
            console.log(Tonal.Scale.get("C major").notes)
            synth.triggerAttackRelease("C2", "4n");
            break;
        case 'w':
            console.log(Tonal.Scale.get("C# major").notes)
            synth.triggerAttackRelease("C#2", "4n");
            break;
        case 's':
            console.log(Tonal.Scale.get("D major").notes)
            synth.triggerAttackRelease("D2", "4n");
            break;
        case 'e':
            console.log(Tonal.Scale.get("D# major").notes)
            synth.triggerAttackRelease("D#2", "4n");
            break;
        case 'd':
            console.log(Tonal.Scale.get("E major").notes)
            synth.triggerAttackRelease("E2", "4n");
            break;
        case 'f':
            console.log(Tonal.Scale.get("F major").notes)
            synth.triggerAttackRelease("F2", "4n");
            break;
        case 't':
            console.log(Tonal.Scale.get("F# major").notes)
            synth.triggerAttackRelease("F#2", "4n");
            break;
        case 'g':
            console.log(Tonal.Scale.get("G major").notes)
            synth.triggerAttackRelease("G2", "4n");
            break;
        case 'y':
            console.log(Tonal.Scale.get("G# major").notes)
            synth.triggerAttackRelease("G#2", "4n");
            break;
        case 'h':
            console.log(Tonal.Scale.get("A major").notes)
            synth.triggerAttackRelease("A3", "4n");
            break;
        case 'u':
            console.log(Tonal.Scale.get("A# major").notes)
            synth.triggerAttackRelease("A#3", "4n");
            break;
        case 'j':
            console.log(Tonal.Scale.get("B major").notes)
            synth.triggerAttackRelease("B3", "4n");
            break;
        case 'k':
            console.log(Tonal.Scale.get("C major").notes)
            synth.triggerAttackRelease("C3", "4n");
            break;
        case 'o':
            console.log(Tonal.Scale.get("C# major").notes)
            synth.triggerAttackRelease("C#3", "4n");
            break;
        case 'l':
            console.log(Tonal.Scale.get("D major").notes)
            synth.triggerAttackRelease("D3", "4n");
            break;
        case 'p':
            console.log(Tonal.Scale.get("D# major").notes)
            synth.triggerAttackRelease("D#3", "4n");
            break;
        case ';':
            console.log(Tonal.Scale.get("E major").notes)
            synth.triggerAttackRelease("E3", "4n");
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