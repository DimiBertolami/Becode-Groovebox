let context = new Tone.Context()
// import * as Tone from 'tone'
// import {getContext} from "tone";
// let context = new AudioContext();
// let ToneAudioContext = new AudioContext();
// let Pizzicatocontext = Pizzicato.context;
// alert(getContext(ToneAudioContext))
let SwitchCounter=0;
let counter = 0;

let bkick   = new BufferFirst(  'samples/kick.mp3'  );
let bsnare  = new BufferFirst(  'samples/snare.mp3' );
let bhihat  = new BufferFirst(  'samples/hihat.mp3' );
let bclap   = new BufferFirst(  'samples/clap.mp3'  );
let bcrash  = new BufferFirst(  'samples/crash.mp3' );
let bshaker = new BufferFirst('samples/shaker.mp3'  );
let btom1   = new BufferFirst(  'samples/tom1.mp3'  );
let btom2   = new BufferFirst(  'samples/tom2.mp3'  );
let btom3   = new BufferFirst(  'samples/tom3.mp3'  );

//This is still the original keys player. I just separated the instruments so that I can connect them to their own channel.
const keys = new Tone.Players({
    urls: {
        kick: bkick,
        snare: bsnare,
        hihat: bhihat,
        clap: bclap,
        crash: bcrash,
        shaker: bshaker,
        tom1: btom1,
        tom2: btom2,
        tom3: btom3
    },
}).toDestination();
//Synth/piano notes
const bufferA1v16 = new Tone.ToneAudioBuffer("samples/piano/A1v16.mp3", () => {
    console.log('test');
});
const bufferA2v16 = new Tone.ToneAudioBuffer("samples/piano/A2v16.mp3", () => {
    console.log('test');
});
const bufferA3v16 = new Tone.ToneAudioBuffer("samples/piano/A3v16.mp3", () => {
    console.log('test');
});

const bufferA4v16 = new Tone.ToneAudioBuffer("samples/piano/A4v16.mp3", () => {
    console.log('test');
});
const bufferA5v16 = new Tone.ToneAudioBuffer("samples/piano/A5v16.mp3", () => {
    console.log('test');
});
const bufferA6v16 = new Tone.ToneAudioBuffer("samples/piano/A6v16.mp3", () => {
    console.log('test');
});
const bufferA7v16 = new Tone.ToneAudioBuffer("samples/piano/A7v16.mp3", () => {
    console.log('test');
});
const bufferC1v16 = new Tone.ToneAudioBuffer("samples/piano/C1v16.mp3", () => {
    console.log('test');
});
const bufferC2v16 = new Tone.ToneAudioBuffer("samples/piano/C2v16.mp3", () => {
    console.log('test');
});
const bufferC3v16 = new Tone.ToneAudioBuffer("samples/piano/C3v16.mp3", () => {
    console.log('test');
});
const bufferC4v16 = new Tone.ToneAudioBuffer("samples/piano/C4v16.mp3", () => {
    console.log('test');
});
const bufferC5v16 = new Tone.ToneAudioBuffer("samples/piano/C5v16.mp3", () => {
    console.log('test');
});
const bufferC6v16 = new Tone.ToneAudioBuffer("samples/piano/C6v16.mp3", () => {
    console.log('test');
});
const bufferC7v16 = new Tone.ToneAudioBuffer("samples/piano/C7v16.mp3", () => {
    console.log('test');

});
const bufferC8v16 = new Tone.ToneAudioBuffer("samples/piano/C8v16.mp3", () => {
    console.log('test');

});
const bufferDs1v16 = new Tone.ToneAudioBuffer("samples/piano/Ds1v16.mp3", () => {
    console.log('test');

});
const bufferDs2v16 = new Tone.ToneAudioBuffer("samples/piano/Ds2v16.mp3", () => {
    console.log('test');

});
const bufferDs3v16 = new Tone.ToneAudioBuffer("samples/piano/Ds3v16.mp3", () => {
    console.log('test');

});
const bufferDs4v16 = new Tone.ToneAudioBuffer("samples/piano/Ds4v16.mp3", () => {
    console.log('test');

});
const bufferDs5v16 = new Tone.ToneAudioBuffer("samples/piano/Ds5v16.mp3", () => {
    console.log('test');

});
const bufferDs6v16 = new Tone.ToneAudioBuffer("samples/piano/Ds6v16.mp3", () => {
    console.log('test');

});
const bufferDs7v16 = new Tone.ToneAudioBuffer("samples/piano/Ds7v16.mp3", () => {
    console.log('test');

});
const bufferFs1v16 = new Tone.ToneAudioBuffer("samples/piano/Fs1v16.mp3", () => {
    console.log('test');

});
const bufferFs2v16 = new Tone.ToneAudioBuffer("samples/piano/Fs2v16.mp3", () => {
    console.log('test');

});
const bufferFs3v16 = new Tone.ToneAudioBuffer("samples/piano/Fs3v16.mp3", () => {
    console.log('test');

});
const bufferFs4v16 = new Tone.ToneAudioBuffer("samples/piano/Fs4v16.mp3", () => {
    console.log('test');

});
const bufferFs5v16 = new Tone.ToneAudioBuffer("samples/piano/Fs5v16.mp3", () => {
    console.log('test');

});
const bufferFs6v16 = new Tone.ToneAudioBuffer("samples/piano/Fs6v16.mp3", () => {
    console.log('test');

});
const bufferFs7v16 = new Tone.ToneAudioBuffer("samples/piano/Fs7v16.mp3", () => {
    console.log('test');
});
bufferFs7v16.autoplay=true;

keys.add('A1v16', bufferA1v16);
keys.add('A2v16', bufferA2v16);
keys.add('A3v16', bufferA3v16);
keys.add('A4v16', bufferA4v16);
keys.add('A5v16', bufferA5v16);
keys.add('A6v16', bufferA6v16);
keys.add('A7v16', bufferA7v16);
keys.add('C1v16', bufferC1v16);
keys.add('C2v16', bufferC2v16);
keys.add('C3v16', bufferC3v16);
keys.add('C4v16', bufferC4v16);
keys.add('C5v16', bufferC5v16);
keys.add('C6v16', bufferC6v16);
keys.add('C7v16', bufferC7v16);
keys.add('C8v16', bufferC8v16);
keys.add('Ds1v16', bufferDs1v16);
keys.add('Ds2v16', bufferDs2v16);
keys.add('Ds3v16', bufferDs3v16);
keys.add('Ds4v16', bufferDs4v16);
keys.add('Ds5v16', bufferDs5v16);
keys.add('Ds6v16', bufferDs6v16);
keys.add('Ds7v16', bufferDs7v16);
keys.add('Fs1v16', bufferFs1v16);
keys.add('Fs2v16', bufferFs2v16);
keys.add('Fs3v16', bufferFs3v16);
keys.add('Fs4v16', bufferFs4v16);
keys.add('Fs5v16', bufferFs5v16);
keys.add('Fs6v16', bufferFs6v16);
keys.add('Fs7v16', bufferFs7v16);
GUI_Builder()

// This is an object of sequence arrays, keeping track of each of the on/off positions of all the steps for each sample
const sequences = {
       kick:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      snare:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      hihat:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
     shaker:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
       tom1:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
       tom2:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
       tom3:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferA1v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferA2v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferA3v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferA4v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferA5v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferA6v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferA7v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferC1v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferC2v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferC3v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferC4v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferC5v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferC6v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferC7v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
bufferC8v16:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
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
document.querySelector(".play").addEventListener('click', function () {
    Tone.Transport.start();
    Tone.start(0);
});

// Stop button click handler
document.querySelector(".stop").addEventListener('click', () =>{Tone.Transport.stop()});

// This thing just ticks away at equal intervals, allowing us to step in and program the samples to play at each one of those intervals
new Tone.Sequence((time, step) => {
    for (const instrument in sequences) {
        sequences[instrument][step] && keys.player(instrument).start()
    }
}, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]).start(0);

// Beats per minute
Tone.Transport.bpm.value = 120;

let nextNoteTime = context.currentTime;

function scheduler() {
//  This function counts in seconds. SetTimeout is just too inconsistent for web audio purposes...
//  So this logic is pretty straightforward. This function crawls up by increments of 0.1 second to see if the next
//  note should come up. It does so by checking if the next Note Time is same as the current timestamp that comes from
//  the web audio context, then the next note should play..
    if (nextNoteTime < context.currentTime + 0.1) {
        let secondsPerBeat = 60 / Tone.Transport.bpm.value;             // 0.5 seconds per beat by default. (60 / 120)
        let SixTeenth_Note_Length = secondsPerBeat / 4;  // this the length in seconds of a 16th note (0.125 second by default)
        nextNoteTime += SixTeenth_Note_Length;
        console.log(`Next Beat in ${SixTeenth_Note_Length} seconds`);
    }
}
//scheduler()
window.setInterval(scheduler(), 100);


// Volume channel
let channel = new Tone.Channel(0, 1).toDestination();
keys.connect(channel);

// But Dimi, I read the API also, why do you buffer it first when you can more easily just
// create the Tone.Player with the string value where to look for the sample?
//
// Well dear person reading through my code, I'm glad you ask! Yes you can more easily
// just say
// tone.player('mySample.mp3') but then you won't be able to reverse the buffer anymore..
//
// say what now?
//
// in techno and trance they played a trick with the sample of a crash cymbal which sounded really great
// tonejs can actually easily just take a buffer and flip it around.. You can't do this with a tone.player
// (or I haven't figured that part out just yet)
function BufferFirst(someMP3){
    //here's the buffer
    const buffer = new Tone.Buffer(someMP3);

    //singular player instead of 1 GOD player
    const player = new Tone.Player(buffer).toDestination();

    // individual channels for all the samples
    const channel = new Tone.Channel(0, 1);
    player.connect(channel).toDestination()

    return buffer
}

function createKnob(value, counter=0, SwitchCounter=0) {

    let knob = document.createElement('input');
    knob.type = 'range';
    knob.className = 'input-knob';

    if (value==='vol'){
        knob.title=`volume${counter}`; //id
        knob.id=`volume${counter}`; //id
        knob.setAttribute('data-diameter', '40');
        knob.value = '8';
        knob.min = '0';
        knob.max = '10';
        knob.step = '0.1';
    }

    if (value==='pitchC'){
        knob.setAttribute('data-diameter', '40');
        knob.title=`pitchC${counter}`; //id
        knob.id=`pitchC${counter}`; //id
        knob.value = '0';
        knob.min = '-24';
        knob.max = '24';
        knob.step = '0.1';

    }

    if (value==='pan'){
        knob.setAttribute('data-diameter', '40');
        knob.title=`pan${counter}`; //id
        knob.id=`pan${counter}`; //id
        knob.value = '0';
        knob.min = '-10';
        knob.max = '10';
        knob.step = '0.1';

    }

    if (value==='volume') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.title=`GRAND MASTER VOLUME`; //id
        knob.id=`masterVolume`; //id
        knob.value = '99';
        knob.min = '-60';
        knob.max = '0';
        knob.step = '0.01';
    }

    if (value==='tempo') {
        knob.setAttribute('data-diameter', '130');
        // knob.setAttribute('data-src', "./images/knob_70_white.png");
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99');
        knob.title=`tempo`; //id
        knob.id=`tempo`; //id
        knob.value = '120';
        knob.min = '40';
        knob.max = '215';
        knob.step = '1';
    }

    if (value==='distortion') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.title=`distortion`; //id
        knob.id=`distortion`; //id
        knob.step = '0.01';
        knob.value = '0.8';
        knob.min = '0';
        knob.max = '1';
    }

    if (value==='phazer') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.value = '85';
        knob.min = '40';
        knob.max = '200';
    }

    if (value==='flanger') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.value = '85';
        knob.min = '40';
        knob.max = '200';
    }
    if (value==='reverb') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.value = '85';
        knob.min = '40';
        knob.max = '200';
    }
    if (value==='cut/off') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.value = '0';
        knob.min = '0';
        knob.max = '100';
    }
    if (value==='resonance') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.step = 1;
        knob.value = '0';
        knob.min = '0';
        knob.max = '101';
    }
    if (value==='envelope/mod') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.value = '85';
        knob.min = '40';
        knob.max = '200';
    }
    if (value==='decay') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.value = '85';
        knob.min = '40';
        knob.max = '200';
    }
    if (value==='accent') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.value = '85';
        knob.min = '40';
        knob.max = '200';
    }

    if (value==='pitch') {
        knob.setAttribute('data-diameter', '130');
        knob.setAttribute('data-src', "./images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '99')
        knob.value = '0';
        knob.min = '-23';
        knob.max = '23';
        knob.step = '0.01'
    }
    if (value==='switch'){
        knob.setAttribute('data-diameter', '130');
        knob.type = 'radio';
        knob.value = '0';
        knob.min = '0';
        knob.max = '1';
        knob.setAttribute('data-sprites', '2');
        knob.setAttribute('data-diameter', '35');
        knob.className = 'input-switch';
        knob.setAttribute('data-src', '/images/switch_offon.png');
    }
    if (value==='switchX'){
        knob.setAttribute('data-diameter', '130');
        knob.type = 'radio';
        knob.value = '1';
        knob.min = '0';
        knob.max = '1';
        knob.setAttribute('data-sprites', '2');
        knob.setAttribute('data-diameter', '35');
        knob.className = 'input-switch';
        knob.setAttribute('data-src', '/images/switch_offon.png');
    }

    knob.oninput = function (){
        console.log(`%cCheck %cthis %cout %c${this.value}`,
            "color: yellow; font-style: italic; background-color: purple;padding: 2px",
            "color: yellow; font-style: italic; background-color: red;padding: 2px",
            "color:yellow; font-style: italic; background-color: orange;padding: 2px",
            "color: yellow; font-style: italic; background-color: blue;padding: 2px",
            `${this.id}`);
        setup(this.value, this.id)
    }

    knob.onchange = function (id){
        // console.log(knob.id)
        console.log(`%cCheck %cthis %cout %c${this.value}`,
            "color: purple; font-style: italic; background-color: yellow;padding: 2px",
            "color: red; font-style: italic; background-color: yellow;padding: 2px",
            "color:orange; font-style: italic; background-color: yellow;padding: 2px",
            "color: yellow; font-style: italic; background-color: blue;padding: 2px",
            `${this.id}`);
        setup(this.value, this.id)
    }

    document.body.appendChild(knob);
    counter++
    ++SwitchCounter;
    return knob;
}

function ButtonGenerator(){
    let button = document.createElement('button')
    let buttonchild = document.createElement('div')
    buttonchild.setAttribute('class', 'light')
    button.appendChild(buttonchild)
    return button
}

function DrawGui(Name){
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    div1.setAttribute('class', 'container')
    div2.setAttribute('class', 'step-sequencer')
    div2.setAttribute('data-sampleName', Name)

    for (let i = 0; i < 16 ; i++) {div2.appendChild(ButtonGenerator())}
    div1.appendChild(div2);
    div1.appendChild(channelStrip(`${Name}`))

    document.body.appendChild(div1);
}

function drawMasterSection(){
    let containerM = document.createElement('div');
    containerM.className = 'container';
    containerM.id = 'mastering';
    containerM.appendChild(createKnob('volume'));
    containerM.appendChild(createKnob('tempo'));
    containerM.appendChild(createKnob('distortion'));
    containerM.appendChild(createKnob('phazer'));
    containerM.appendChild(createKnob('flanger'));
    containerM.appendChild(createKnob('reverb'));
    document.body.appendChild(containerM);
}

function  drawButton(name){
    let x= document.createElement('div');
    x.className="container"
    let btn = document.createElement('button')
    btn.className=name
    btn.textContent=name
    x.appendChild(btn)
    document.body.appendChild(x)
}
function checkoutMyFancyLogger(){
    console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
    console.log("Multiple styles: %cred %corange", "color: red", "color: orange", "Additional unformatted message");
}

function createPlayer(value) {
    // console.log(value)
    let container1 = document.createElement('div');
    container1.className = "container";
    container1.innerHTML = value;
    container1.value = value;

    container1.appendChild(createKnob('switch'));
    container1.appendChild(createKnob('switch'));
    container1.appendChild(createKnob('switchX'));

    let container2 = document.createElement('div');
    container2.className = "step-sequencer";
    container2.setAttribute("data-sampleName", value);

    for (let i = 0; i < 16; i++) {
        let button = document.createElement('button');
        let light = document.createElement('div');
        light.className = "light";
        button.appendChild(light);
        container2.appendChild(button);
    }
    let level = document.createElement('input');
    level.type = 'range';
    level.className = 'input-knob';
    level.setAttribute('data-diameter', '40');
    level.setAttribute('data-src', "./images/707_tempo.png");
    level.value = '100';
    level.min = '0';
    level.max = '100';
    level.setAttribute('data-sprites', '99');

    let pitch = document.createElement('input');
    pitch.type = 'range';
    pitch.className = 'input-knob';
    pitch.setAttribute('data-diameter', '40');
    pitch.setAttribute('data-src', "./images/808_Voulme_Knob.png");
    pitch.value = '0';
    pitch.min = '-23';
    pitch.max = '23';
    pitch.setAttribute('data-sprites', '99');

    let distortion = document.createElement('input');
    distortion.type = 'range';
    distortion.className = 'input-knob';
    distortion.setAttribute('data-diameter', '40');
    distortion.setAttribute('data-src', "images/808_Voulme_Knob.png");
    distortion.setAttribute('data-sprites', '101');
    // distortion.setAttribute('step', '0.01');
    distortion.value = '0';
    distortion.min = '0';
    distortion.max = '100';

    container2.appendChild(level);
    container2.appendChild(pitch);
    container2.appendChild(distortion);
    container1.appendChild(container2);
    document.body.appendChild(container1);
    counter++
    return container1;

}
//effect, elementID
function setup(val, elementID){
    // !  the effect connects directly to the speakers ( toDestination )
    switch (elementID) {
        case 'volume':
            Tone.volume.value = val;
            break;
        case 'tempo':
            // Beats per minute
            Tone.Transport.bpm.value = val;
            break;
        case 'pitch':
            console.log("pitchshifter here we come!")
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            // const pitchShift = new Tone.PitchShift(0.5).toDestination();
            // effect=pitchShift
            break;
        case 'distortion':
            //The parameter that is passed to the constructor is the amount of distortion (nominal range of 0-1)
            // console.log(document.getElementById('distortion0').value)
            // const distortion = new Tone.Distortion(document.getElementById('distortion0').value).toDestination();
            // effect=distortion
            break;
        // case 'phazer':
        /*
        The phaser effect is created by splitting an audio signal into two paths.
        One path treats the signal with an all-pass filter, which preserves the amplitude of
        the original signal and alters the phase. The amount of change in phase depends on the
        frequency. When signals from the two paths are mixed, the frequencies that are out of
        phase will cancel each other out, creating the phaser's characteristic notches.
        Changing the mix ratio changes the depth of the notches
        */
        // const phaser = new Tone.Phaser({frequency: 15,octaves: 5,baseFrequency: 1000}).toDestination();
        // effect=phaser
        // break;
        // case 'flanger':
        /*
        The flanger effect is basically a phaser except for the filter in the all-pass section
        which is replaced by a delay line.
        */
        // const flanger = new Tone.Phaser({frequency: 15,octaves: 5,baseFrequency: 1000}).toDestination();
        // effect=flanger
        // break;
        // case 'reverb':
        /*
        Simple convolution created with a decaying noise. Convolution uses impulse responses to record
        the reverberation of physical spaces and recreate them digitally.
        The amount of time it will reverberate for.
        */
        // const reverb = new Tone.Reverb ({decay: 2}).toDestination();
        // effect=reverb
        // break;
        default:
            break;
    }

}

function drawDrumSection(){
    let containerD = document.createElement('div');
    containerD.id = 'drumz';
    DrawGui('kick')
    DrawGui('snare')
    DrawGui('hihat')
    DrawGui('clap')
    DrawGui('crash')
    DrawGui('shaker')
    DrawGui('tom1')
    DrawGui('tom2')
    DrawGui('tom3')
}

function channelStrip(value){
    let containerC = document.createElement('div');
    containerC.id = `Channelstrip ${value}`;
    containerC.title = `Channelstrip ${value}`;
    containerC.className = 'container';
    containerC.appendChild(createKnob(`vol`))
    containerC.appendChild(createKnob(`pitchC`))
    containerC.appendChild(createKnob(`pan`))
    return containerC;
}
function drawSynthControls(){
    let containerS = document.createElement('div');
    containerS.id = 'Synth-controls';
    containerS.className = 'container';
    containerS.appendChild(createKnob('pitch'));
    containerS.appendChild(createKnob('cut/off'));
    containerS.appendChild(createKnob('resonance'));
    containerS.appendChild(createKnob('envelope/mod'));
    containerS.appendChild(createKnob('decay'));
    containerS.appendChild(createKnob('accent'));
    document.body.appendChild(containerS);
}

function drawPianoSampler(){
    let containerP = document.createElement('div');
    containerP.id = 'piano-samples';
    containerP.appendChild(createPlayer(value = "A1v16"));
    containerP.appendChild(createPlayer(value = "A2v16"));
    containerP.appendChild(createPlayer(value = "A3v16"));
    containerP.appendChild(createPlayer(value = "A4v16"));
    containerP.appendChild(createPlayer(value = "A5v16"));
    containerP.appendChild(createPlayer(value = "A6v16"));
    containerP.appendChild(createPlayer(value = "A7v16"));
    containerP.appendChild(createPlayer(value = "C1v16"));
    containerP.appendChild(createPlayer(value = "C2v16"));
    containerP.appendChild(createPlayer(value = "C3v16"));
    containerP.appendChild(createPlayer(value = "C4v16"));
    containerP.appendChild(createPlayer(value = "C5v16"));
    containerP.appendChild(createPlayer(value = "C6v16"));
    containerP.appendChild(createPlayer(value = "C7v16"));
    containerP.appendChild(createPlayer(value = "C8v16"));
    containerP.appendChild(createPlayer(value = "Ds1v16"));
    containerP.appendChild(createPlayer(value = "Ds2v16"));
    containerP.appendChild(createPlayer(value = "Ds3v16"));
    containerP.appendChild(createPlayer(value = "Ds4v16"));
    containerP.appendChild(createPlayer(value = "Ds5v16"));
    containerP.appendChild(createPlayer(value = "Ds6v16"));
    containerP.appendChild(createPlayer(value = "Ds7v16"));
    containerP.appendChild(createPlayer(value = "Fs1v16"));
    containerP.appendChild(createPlayer(value = "Fs2v16"));
    containerP.appendChild(createPlayer(value = "Fs3v16"));
    containerP.appendChild(createPlayer(value = "Fs4v16"));
    containerP.appendChild(createPlayer(value = "Fs5v16"));
    containerP.appendChild(createPlayer(value = "Fs6v16"));
    containerP.appendChild(createPlayer(value = "Fs7v16"));
    document.body.appendChild(containerP);
    // keys.connect
}

function GUI_Builder(){
    drawButton('play')
    drawButton('stop')
    drawMasterSection()
    drawDrumSection()
    drawSynthControls()
    drawPianoSampler()
}
