const Kick = new Tone.Player("samples/kick.WAV").toDestination();
Kick.volume.value = 40;
// Kick.reverse = true;
kick= Kick.toString();
kickSample = "samples/kick.WAV";
// console.log(kickSample);
 const Clap1 = new Tone.Player("samples/Clap01.wav").toDestination();
Clap1.volume.value = 10;
clap1= Clap1.toString();
clap1Sample = "samples/Clap01.wav";
const Clap2 = new Tone.Player("samples/Clap02.wav").toDestination();
Clap2.volume.value = 10;
clap2= Clap2.toString();
clap2Sample = "samples/Clap03.wav";
const Clap3 = new Tone.Player("samples/Clap03.wav").toDestination();
Clap3.volume.value = 10;
clap3= Clap3.toString();
clap3Sample = "samples/Clap03.wav";
const Snare = new Tone.Player("samples/snare.WAV").toDestination();
Snare.volume.value = 20;
snare= Snare.toString();
snareSample = "samples/snare.WAV";
const Hihat = new Tone.Player("samples/hihat.WAV").toDestination();
Hihat.volume.value = 30;
hihat= Hihat.toString();
hihatSample= "samples/hihat.WAV";

const keys = new Tone.Players({
    urls: {
        // The code started like this..
        // kick:       "samples/kick.WAV",
        // clap1:      "samples/Clap01.wav",
        // clap2:      "samples/Clap02.wav",
        // snare:      "samples/snare.WAV",
        // hihat:      "samples/hihat.WAV",
        // This works too.. Kick and kickSample are
        // now coming from a completely different object..
        // This also means that i can control individual
        // sequencer channels beter like plugging a volume knob into
        // the actual separate drum chanels separately, so next will
        // be distortion. The way it now sounds on my computer is like
        // my old nintendo is trying to emulate a distortion effect...
        // this will have to go through some form of measure certain
        // peaks and let application deal with reacting to incoming signals
        // a computer tends to respond faster than a human, or so I've heard..
        kick:       kickSample,
        clap1:      clap1Sample,
        clap2:      clap2Sample,
        clap3:      clap3Sample,
        snare:      snareSample,
        hihat:      hihatSample,
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
// keys.instrument
//player.autostart = true;
// player.playbackRate = 0.25;
// player.loop = true;
// player.reverse = true;








// keys.volume.value = 25;
// This is an object of sequence arrays, keeping track of each of the on/off positions of all the steps for each sample
const sequences = {
     kick:      [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
    snare:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    clap1:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    clap2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    clap3:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    hihat:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
       a1:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
       a2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
      as1:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
       b1:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
       c2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
      cs2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
       d2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
      ds2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
       e2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
       f2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
      fs2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
       g2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
      gs1:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false]
}
// keys.players.add('testAdd', "samples/Clap01.wav");
// console.log(keys)

// Loops over all step sequencer rows ( each row represents a sample, indicated by its `data-sampleName` property
document.querySelectorAll(".step-sequencer").forEach((sampleSequencerElement) => {
    // Extract the sample name
    const sampleName = sampleSequencerElement.dataset.samplename;
    // console.log(sampleSequencerElement)
    // console.log(`dataset ${sampleSequencerElement.dataset}`);

    // Loop over each step for a sample, and wire a click event listener
    sampleSequencerElement.querySelectorAll("button").forEach((stepElement, step) => {
        stepElement.addEventListener("click", ( ev ) => {
            console.log("click", step, sampleName);

            // Toggle the element class to change the red light indicator
            stepElement.querySelector('.light').classList.toggle('active');

            // Toggle the sequence value for the instrument
            sequences[sampleName][step] = !sequences[sampleName][step];
            // console.log(sequences[sampleName][step]);

        }, {passive: true});
    })
})

// Play button click handler
document.querySelector(".play").addEventListener('click', function (){
    Tone.Transport.start();
    Tone.start();
}, {passive: true});

// Stop button click handler
document.querySelector(".stop").addEventListener('click', function (){
    Tone.Transport.stop();
}, {passive: true});

// This thing just ticks away at equal intervals,
// allowing us to step in and program the samples to play at each one of those intervals
new Tone.Sequence((time, step) => {
    for (const instrument in sequences) {
        // console.log(sequences[instrument]);
        // sequences[instrument][step] && kick.start();
        if (sequences[instrument][step]){
            // kick.start();
            // clap1.start();
            // clap2.start();
            // clap3.start();
            // snare.start();
            // hihat.start();
            // this is now controlling
            keys.player(instrument).start()
        }

        // .player.start()
    }
    // This lights up the step (led) to show where in the 16 step loop we are..
    // switch (step){
    //     case 0:
    //         document.getElementById('led1').checked = true;
    //         document.getElementById('led17').checked = true;
    //         break;
    //     case 1:
    //         document.getElementById('led2').checked = true;
    //         document.getElementById('led18').checked = true;
    //         break;
    //     case 2:
    //         document.getElementById('led3').checked = true;
    //         document.getElementById('led19').checked = true;
    //         break;
    //     case 3:
    //         document.getElementById('led4').checked = true;
    //         document.getElementById('led20').checked = true;
    //         break;
    //     case 4:
    //         document.getElementById('led5').checked = true;
    //         document.getElementById('led21').checked = true;
    //         break;
    //     case 5:
    //         document.getElementById('led6').checked = true;
    //         document.getElementById('led22').checked = true;
    //         break;
    //     case 6:
    //         document.getElementById('led7').checked = true;
    //         document.getElementById('led23').checked = true;
    //         break;
    //     case 7:
    //         document.getElementById('led8').checked = true;
    //         document.getElementById('led24').checked = true;
    //         break;
    //     case 8:
    //         document.getElementById('led9').checked = true;
    //         document.getElementById('led25').checked = true;
    //         break;
    //     case 9:
    //         document.getElementById('led26').checked = true;
    //         break;
    //     case 10:
    //         document.getElementById('led11').checked = true;
    //         document.getElementById('led27').checked = true;
    //         break;
    //     case 11:
    //         document.getElementById('led12').checked = true;
    //         document.getElementById('led28').checked = true;
    //         break;
    //     case 12:
    //         document.getElementById('led13').checked = true;
    //         document.getElementById('led29').checked = true;
    //         break;
    //     case 13:
    //         document.getElementById('led14').checked = true;
    //         document.getElementById('led30').checked = true;
    //         break;
    //     case 14:
    //         document.getElementById('led15').checked = true;
    //         document.getElementById('led31').checked = true;
    //         break;
    //     case 15:
    //         document.getElementById('led16').checked = true;
    //         document.getElementById('led32').checked = true;
    //         break;
    // }

}, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]).start(0);


Tone.Transport.bpm.value = 140;
// Tone.Transport.volume()

function VolumeDrums(){
    Tone.kick.player.start();
    // console.log(kick.start);
    // clap1.player.start();
    // clap2.player.start();
    // clap3.player.start();
    // snare.player.start();
    // hihat.player.start();
}