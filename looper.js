

const keys = new Tone.Players({
    urls: {
        kick:       "samples/kick.WAV",
        clap1:      "samples/Clap01.wav",
        clap2:      "samples/Clap02.wav",
        snare:      "samples/snare.WAV",
        hihat:      "samples/hihat.WAV",
        a1:         "samples/Casio_a1.mp3",
        a2:         "samples/Casio_a2.mp3",
        as1:         "samples/casio_As1.mp3",
        b1:         "samples/Casio_B1.mp3",
        c2:         "samples/Casio_C2.mp3",
        cs2:         "samples/Casio_Cs2.mp3",
        d2:         "samples/Casio_D2.mp3",
        ds2:         "samples/Casio_Ds2.mp3",
        e2:         "samples/Casio_E2.mp3",
        f2:         "samples/Casio_F2.mp3",
        fs2:         "samples/Casio_Fs2.mp3",
        g2:         "samples/Casio_G2.mp3",
        gs1:         "samples/Casio_Gs1.mp3"
    }
}).toDestination();
// This is an object of sequence arrays, keeping track of each of the on/off positions of all the steps for each sample
const sequences = {
     kick:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    clap1:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    clap2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    snare:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
    hihat:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
       a1:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
       a2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
      as1:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
       b1:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
       c2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
      cs2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
       d2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
      ds2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
       e2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
       f2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
      fs2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
       g2:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false],
      gs1:      [false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false]
}

// Loops over all step sequencer rows ( each row represents a sample, indicated by its `data-sampleName` property
document.querySelectorAll(".step-sequencer").forEach((sampleSequencerElement) => {
    // Extract the sample name
    const sampleName = sampleSequencerElement.dataset.samplename;

    // Loop over each step for a sample, and wire a click event listener
    sampleSequencerElement.querySelectorAll("button").forEach((stepElement, step) => {
        stepElement.addEventListener("click", ( ev ) => {
            console.log("click", step, sampleName);

            // Toggle the element class to change the red light indicator
            stepElement.querySelector('.light').classList.toggle('active');

            // Toggle the sequence value for the instrument
            sequences[sampleName][step] = !sequences[sampleName][step];
        });
    })
})

// Play button click handler
document.querySelector(".play").addEventListener('click', function (){
    // Tone.Transport.start();
    Tone.start();
});

// Stop button click handler
document.querySelector(".stopButton").addEventListener('click', function (){
    Tone.Transport.stop();
});

// This thing just ticks away at equal intervals, allowing us to step in and program the samples to play at each one of those intervals
new Tone.Sequence((time, step) => {
    for (const instrument in sequences) {
        sequences[instrument][step] && keys.player(instrument).start()
        document.getElementById
    }
}, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]).start(0);


Tone.Transport.bpm.value = 120;

