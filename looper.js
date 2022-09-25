// const context = new AudioContext(Tone.context)
const target = document.getElementById('target')

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
            // console.log("click", step, sampleName)
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
                // instrument.start(time,  0.01)
            } else {
                keys.player(instrument).start(time, 0.01, '4n');
                // instrument.start(time, 0.01, '4n')
            }
        } //&& instrument.start(time, 0.1, '4n');
    }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).start(0);

// console.log('keys', keys)


setListener('mute0', 'mute','change', 'kick')
setListener('mute0','mute', 'input', 'kick')

setListener('mute1', 'mute', 'change', 'snare')
setListener('mute1', 'mute', 'input', 'snare')

setListener('mute2', 'mute', 'change', 'hihat')
setListener('mute2', 'mute', 'input', 'hihat')

setListener('mute3', 'mute', 'change', 'clap')
setListener('mute3', 'mute', 'input', 'clap')

setListener('mute4', 'mute', 'change', 'crash')
setListener('mute4', 'mute', 'input', 'crash')

setListener('mute5', 'mute', 'change', 'shaker')
setListener('mute5', 'mute', 'input', 'shaker')

setListener('mute6', 'mute', 'change', 'tom1')
setListener('mute6', 'mute', 'input', 'tom1')

setListener('mute7', 'mute', 'change', 'tom2')
setListener('mute7', 'mute', 'input', 'tom2')

setListener('mute8', 'mute', 'change', 'tom3')
setListener('mute8', 'mute', 'input', 'tom3')

setListener('mute9', 'mute', 'change', 'rCrash')
setListener('mute9', 'mute', 'input', 'rCrash')


setListener('solo0', 'solo','change', 'kick')
setListener('solo0','solo', 'input', 'kick')

setListener('solo1', 'solo', 'change', 'snare')
setListener('solo1', 'solo', 'input', 'snare')

setListener('solo2', 'solo', 'change', 'hihat')
setListener('solo2', 'solo', 'input', 'hihat')

setListener('solo3', 'solo', 'change', 'clap')
setListener('solo3', 'solo', 'input', 'clap')

setListener('solo4', 'solo', 'change', 'crash')
setListener('solo4', 'solo', 'input', 'crash')

setListener('solo5', 'solo', 'change', 'shaker')
setListener('solo5', 'solo', 'input', 'shaker')

setListener('solo6', 'solo', 'change', 'tom1')
setListener('solo6', 'solo', 'input', 'tom1')

setListener('solo7', 'solo', 'change', 'tom2')
setListener('solo7', 'solo', 'input', 'tom2')

setListener('solo8', 'solo', 'change', 'tom3')
setListener('solo8', 'solo', 'input', 'tom3')

setListener('solo9', 'solo', 'change', 'rCrash')
setListener('solo9', 'solo', 'input', 'rCrash')

// document.getElementById('mute0').addEventListener('change', ()=>{
//     if(document.getElementById('mute0').checked){
//         console.log('kick muted')
//         keys.player('kick').muted=true
//     } else {
//         keys.player('kick').muted=false
//         console.log('kick unmuted')
    // }
// })
// document.getElementById('mute0').addEventListener('input', ()=>{
//     if(document.getElementById('mute0').checked){
//         console.log('kick muted')
        // keys.player('kick').muted=true
    // } else {
    //     keys.player('kick').muted=false
    //     console.log('kick unmuted')
    // }
// })

createEventlisteners()

