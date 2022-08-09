// starting now with empty keys object.
const keys = new Tone.Players({
    urls: {},
}).toDestination();

const vol = new Tone.Volume(-12).toDestination()

// creating audio buffer first.
const bufferkICK = new Tone.ToneAudioBuffer("samples/kick.WAV", () => {
    console.log('Kick Buffer!');
});
const buffersNARE = new Tone.ToneAudioBuffer("samples/snare.WAV", () => {
    console.log('Snare buffer');
});

const bufferhIHAT = new Tone.ToneAudioBuffer("samples/hihat.WAV", () => {
    console.log('Hihat buffer');
});

const bufferClap1 = new Tone.ToneAudioBuffer("samples/Clap01.WAV", () => {
    console.log('Clap1 buffer');
});

const bufferClap2 = new Tone.ToneAudioBuffer("samples/Clap02.WAV", () => {
    console.log('Clap2 buffer');
});

const bufferClap3 = new Tone.ToneAudioBuffer("samples/Clap03.WAV", () => {
    console.log('Clap3 buffer');
});

//separate player for each sample
// const vol= new Tone.Volume(-12).toDestination()
const kick = new Tone.Player(bufferkICK).toDestination();
kick.connect(vol).toDestination()
kick.autoplay = true;

const snare = new Tone.Player(buffersNARE).toDestination();
snare.connect(vol).toDestination()
snare.autoplay = true;
// snare.reverse=true;

const hihat = new Tone.Player(bufferhIHAT).toDestination()
hihat.connect(vol).toDestination()
hihat.autoplay = true;

const Clap1 = new Tone.Player(bufferClap1).toDestination()
Clap1.connect(vol).toDestination()
Clap1.autoplay = true;

const Clap2 = new Tone.Player(bufferClap2).toDestination()
Clap2.connect(vol).toDestination()
Clap2.autoplay = true;

const Clap3 = new Tone.Player(bufferClap3).toDestination()
Clap3.connect(vol).toDestination()
Clap3.autoplay = true;


PlayerKick = keys.add('kick', bufferkICK);
PlayerKick.volume.value = 15;
PlayerSnare = keys.add('snare', buffersNARE);
PlayerSnare.volume.value = 0;
PlayerHihat = keys.add('hihat', bufferhIHAT);
PlayerHihat.volume.value = 0;
PlayerClap1 = keys.add('clap1', bufferClap1);
PlayerClap1.volume.value = 0;
PlayerClap2 = keys.add('clap2', bufferClap2);
PlayerClap2.volume.value = 0;
PlayerClap3 = keys.add('clap3', bufferClap3);
PlayerClap3.volume.value = 0;


// This is an object of sequence arrays, keeping track of each of the on/off positions of all the steps for each sample
const sequences = {
     kick:      [true, false, false, true, false, true, false, false, true, false, true, false, true, false, false, false],
    snare:      [false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false],
    clap1:      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    clap2:      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    clap3:      [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false],
    hihat:      [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
    // a1:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //    a2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //   as1:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //    b1:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //    c2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //   cs2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //    d2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //   ds2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //    e2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //    f2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //   fs2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //    g2:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false],
    //   gs1:      [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false]
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
        // stepElement.addEventListener("click", ( ev ) => {
        stepElement.addEventListener("click", function () {
            console.log("click", step, sampleName);

            // Toggle the element class to change the red light indicator
            stepElement.querySelector('.light').classList.toggle('active');

            // Toggle the sequence value for the instrument
            sequences[sampleName][step] = !sequences[sampleName][step];
            // console.log(sequences[sampleName][step]);

        }); //, {passive: true}
    })
})

// Play button click handler
document.querySelector(".play").addEventListener('click', function (){
    Tone.Transport.start();
    Tone.start();
    console.log('context started');
}); //, {passive: true}

// Stop button click handler
document.querySelector(".stop").addEventListener('click', function (){
    Tone.Transport.stop();
}); //, {passive: true}

// This thing just ticks away at equal intervals,
// allowing us to step in and program the samples to play at each one of those intervals
new Tone.Sequence((time, step) => {
    for (const instrument in sequences) {
        // console.log(sequences[instrument]);
        // sequences[instrument][step] && kick.start();
        if (sequences[instrument][step]){
            // this is now controlling taking in consideration time..
            keys.player(instrument).start(time);
        }//, 0);

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

}, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]).start();


Tone.Transport.bpm.value = 140;
// Tone.Transport.volume()


// Volume channel
level = document.getElementById('level').value;
let channel = new Tone.Channel(0).toDestination();
keys.connect(channel);