const keys = new Tone.Players({
    urls: {
        kick:       "samples/kick.WAV",
        clap1:      "samples/Clap01.wav",
        clap2:      "samples/Clap02.wav",
        clap3:      "samples/Clap03.wav",
        big808:     "samples/Biiiig_808.wav",
        fly808:     "samples/Fly_08.wav",
        marie808:   "samples/Marie_808.wav",
        snare:      "samples/snare.WAV",
        hihat:      "samples/hihat.WAV",
        a1:         "samples/Casio_a1.mp3",
        a2:         "samples/Casio_a2.mp3"
    }
}).toDestination();
// This is an object of sequence arrays, keeping track of each of the on/off positions of all the steps for each sample
const sequences = {
    kick:       [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    clap1:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    clap2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    clap3:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    big808:     [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    fly808:     [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    marie808:   [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    snare:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    hihat:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    a1:         [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    a2:         [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false]
}

// Loops over all step sequencer rows ( each row represents a sample, indicated by its `data-sampleName` property
document.querySelectorAll(".step-sequencer").forEach((sampleSequencerElement) => {
    // Extract the sample name
    const sampleName = sampleSequencerElement.dataset.samplename;

    // Loop over each step for a sample, and wire a click event listener
    sampleSequencerElement.querySelectorAll("button").forEach((stepElement, step) => {
        stepElement.addEventListener("click", ( ev ) => {
            console.log("click", step, sampleName)

            // Toggle the element class to change the red light indicator
            stepElement.querySelector('.light').classList.toggle('active');

            // Toggle the sequence value for the instrument
            sequences[sampleName][step] = !sequences[sampleName][step];
        });
    })
})

// Play button click handler
document.querySelector(".play").addEventListener('click', ev => {
    Tone.Transport.start();
});

// Stop button click handler
document.querySelector(".stop").addEventListener('click', ev => {
    Tone.Transport.stop();
});

// This thing just ticks away at equal intervals, allowing us to step in and program the samples to play at each one of those intervals
new Tone.Sequence((time, step) => {
    for (const instrument in sequences) {
        sequences[instrument][step] && keys.player(instrument).start()
    }
}, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]).start(0);

// Beats per minute
// Tone.Transport.bpm.value = 120;
bpm = document.getElementById('tempo').value;
Tone.Transport.bpm.value = bpm && console.log("new bpm: " + bpm);

// Volume channel
let channel = new Tone.Channel(0, 12).toDestination();
let distortion = new Tone.Distortion(0.8).toDestination();
let fm = new Tone.FMSynth().connect(distortion);
fm.triggerAttackRelease("A1", "8n");
// let node = new Tone.Gain();
// console.log(node.numberOfInputs);
// keys.connect(distortion);
keys.connect(channel);

function createPlayer(){
    return new Tone.Player({
        url: "https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3",
        loop: true,
        autostart: true,
    })
}

function createDistortion(){
//create a distortion effect
    return new Tone.Distortion(0.9).toDestination();
}

function connectDistortion(){
    //connect a player to the distortion
    player.connect(distortion);
}

// player = createPlayer();
// distortion = createDistortion();
// player.connect(distortion);
