let counter = 0;
let SwitchCounter = 0;

const context = new AudioContext();
console.log(Tone.Transport.sampleTime);

// audioContext = new AudioContext();

// starting with empty keys object.
const keys = new Tone.Players({
    urls: {},
}).toDestination();


// creating audio buffers first.
const bufferkICK = new Tone.ToneAudioBuffer("samples/kick.WAV", () => {
});
const buffersNARE = new Tone.ToneAudioBuffer("samples/snare.WAV", () => {
});
const bufferhIHAT = new Tone.ToneAudioBuffer("samples/hihat.WAV", () => {
});
const bufferClap1 = new Tone.ToneAudioBuffer("samples/Clap01.WAV", () => {
});
const bufferClap2 = new Tone.ToneAudioBuffer("samples/Clap02.WAV", () => {
});
const bufferClap3 = new Tone.ToneAudioBuffer("samples/Clap03.WAV", () => {
});
const bufferA1v16 = new Tone.ToneAudioBuffer("samples/piano/A1v16.mp3", () => {
});
const bufferA2v16 = new Tone.ToneAudioBuffer("samples/piano/A2v16.mp3", () => {
});
const bufferA3v16 = new Tone.ToneAudioBuffer("samples/piano/A3v16.mp3", () => {
});

const bufferA4v16 = new Tone.ToneAudioBuffer("samples/piano/A4v16.mp3", () => {
});
const bufferA5v16 = new Tone.ToneAudioBuffer("samples/piano/A5v16.mp3", () => {
});
const bufferA6v16 = new Tone.ToneAudioBuffer("samples/piano/A6v16.mp3", () => {
});
const bufferA7v16 = new Tone.ToneAudioBuffer("samples/piano/A7v16.mp3", () => {
});
const bufferC1v16 = new Tone.ToneAudioBuffer("samples/piano/C1v16.mp3", () => {
});
const bufferC2v16 = new Tone.ToneAudioBuffer("samples/piano/C2v16.mp3", () => {
});
const bufferC3v16 = new Tone.ToneAudioBuffer("samples/piano/C3v16.mp3", () => {
});
const bufferC4v16 = new Tone.ToneAudioBuffer("samples/piano/C4v16.mp3", () => {
});
const bufferC5v16 = new Tone.ToneAudioBuffer("samples/piano/C5v16.mp3", () => {
});
const bufferC6v16 = new Tone.ToneAudioBuffer("samples/piano/C6v16.mp3", () => {
});
const bufferC7v16 = new Tone.ToneAudioBuffer("samples/piano/C7v16.mp3", () => {

});
const bufferC8v16 = new Tone.ToneAudioBuffer("samples/piano/C8v16.mp3", () => {

});
const bufferDs1v16 = new Tone.ToneAudioBuffer("samples/piano/Ds1v16.mp3", () => {

});
const bufferDs2v16 = new Tone.ToneAudioBuffer("samples/piano/Ds2v16.mp3", () => {

});
const bufferDs3v16 = new Tone.ToneAudioBuffer("samples/piano/Ds3v16.mp3", () => {

});
const bufferDs4v16 = new Tone.ToneAudioBuffer("samples/piano/Ds4v16.mp3", () => {

});
const bufferDs5v16 = new Tone.ToneAudioBuffer("samples/piano/Ds5v16.mp3", () => {

});
const bufferDs6v16 = new Tone.ToneAudioBuffer("samples/piano/Ds6v16.mp3", () => {

});
const bufferDs7v16 = new Tone.ToneAudioBuffer("samples/piano/Ds7v16.mp3", () => {

});
const bufferFs1v16 = new Tone.ToneAudioBuffer("samples/piano/Fs1v16.mp3", () => {

});
const bufferFs2v16 = new Tone.ToneAudioBuffer("samples/piano/Fs2v16.mp3", () => {

});
const bufferFs3v16 = new Tone.ToneAudioBuffer("samples/piano/Fs3v16.mp3", () => {

});
const bufferFs4v16 = new Tone.ToneAudioBuffer("samples/piano/Fs4v16.mp3", () => {

});
const bufferFs5v16 = new Tone.ToneAudioBuffer("samples/piano/Fs5v16.mp3", () => {

});
const bufferFs6v16 = new Tone.ToneAudioBuffer("samples/piano/Fs6v16.mp3", () => {

});
const bufferFs7v16 = new Tone.ToneAudioBuffer("samples/piano/Fs7v16.mp3", () => {

});


//separate player for each sample

const kick = new Tone.Player(bufferkICK).toDestination();
const snare = new Tone.Player(buffersNARE).toDestination();
const hihat = new Tone.Player(bufferhIHAT).toDestination()
const Clap1 = new Tone.Player(bufferClap1).toDestination()
const Clap2 = new Tone.Player(bufferClap2).toDestination()
const Clap3 = new Tone.Player(bufferClap3).toDestination()
const kvol = new Tone.Volume().toDestination()
kvol.volume.value = 20;
kick.connect(kvol).toDestination()
const svol = new Tone.Volume().toDestination()
svol.volume.value = 20;
snare.connect(svol).toDestination()
const hvol = new Tone.Volume().toDestination()
hvol.volume.value = 20;
hihat.connect(hvol).toDestination()
const c1vol = new Tone.Volume().toDestination()
c1vol.volume.value = 20;
Clap1.connect(c1vol).toDestination()
const c2vol = new Tone.Volume().toDestination()
c2vol.volume.value = 20;
Clap2.connect(c2vol).toDestination()
const c3vol = new Tone.Volume().toDestination()
c3vol.volume.value = 20;
Clap3.connect(c3vol).toDestination()

// kick.autoplay = true;



// const sgainNode = context.createGain();
// sgainNode.gain.value = .4;

// const hgainNode = context.createGain();
// hgainNode.gain.value = 0.5;

let hdist = new Tone.Distortion(.7).toDestination();

// const c1gainNode = context.createGain();
// c1gainNode.gain.value = 0.5;

const c2gainNode = context.createGain();
c2gainNode.gain.value = 0.5;

const c3gainNode = context.createGain();
c3gainNode.gain.value = 0.5;

keys.add('kick', bufferkICK);
keys.add('snare', buffersNARE);
keys.add('hihat', bufferhIHAT);
keys.add('Clap1', bufferClap1);
keys.add('Clap2', bufferClap2);
keys.add('Clap3', bufferClap3);
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
// console.log("keys:", keys)

// This is an object of sequence arrays, keeping track of each of the on/off positions of all the steps for each sample
const sequences = {
    kick:   [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    snare:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    clap1:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    clap2:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    clap3:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    hihat:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    A1v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    A2v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    A3v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    A4v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    A5v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    A6v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    A7v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    C1v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    C2v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    C3v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    C4v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    C5v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    C6v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    C7v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    C8v16:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Ds1v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Ds2v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Ds3v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Ds4v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Ds5v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Ds6v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Ds7v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Fs1v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Fs2v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Fs3v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Fs4v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Fs5v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Fs6v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    Fs7v16: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
}


// Loops over all step sequencer rows ( each row represents a sample, indicated by its `data-sampleName` property
document.querySelectorAll(".step-sequencer").forEach((sampleSequencerElement) => {
    // Extract the sample name
    const sampleName = sampleSequencerElement.dataset.samplename;


    // Loop over each step for a sample, and wire a click event listener
    sampleSequencerElement.querySelectorAll("button").forEach((stepElement, step) => {
        // stepElement.addEventListener("click", ( ev ) => {
        stepElement.addEventListener("click", function () {
            // console.log("click", step, sampleName);

            // Toggle the element class to change the red light indicator
            stepElement.querySelector('.light').classList.toggle('active');

            // Toggle the sequence value for the instrument
            sequences[sampleName][step] = !sequences[sampleName][step];
            // console.log(sequences[sampleName][step]);

        }); //, {passive: true}
    })
})

// Play button click handler
document.querySelector(".play").addEventListener('click', () => {
    console.log('clicked')
    Tone.Transport.start();
    Tone.start;
});

// Stop button click handler
document.querySelector(".stop").addEventListener('click', () =>{
    Tone.Transport.stop();
})
// const now = new Tone.now();
// This thing just ticks away at equal intervals,
// allowing us to step in and program the samples to play at each one of those intervals
new Tone.Sequence((time, step) => {
    for (const instrument in sequences) {
        // if (sequences[instrument][step]) {
            sequences[instrument][step] && keys.player(instrument).start()
            // this is now controlling taking in consideration time..
            // keys.player(instrument).start("4n", 0, "16t");
            // keys.player(instrument).start();
        // }//, 0)
    }

}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).start(0);


Tone.Transport.bpm.value = 120;
// Tone.Transport.volume()


// Volume channel
let channel = new Tone.Channel(10).toDestination();
keys.connect(channel);
// channel.volume.value = 0;





function createPlayer(value) {
    // console.log(value)
    let container1 = document.createElement('div');
    container1.className = "container";
    container1.innerHTML = value;

    container1.appendChild(createKnob('switch'));
    container1.appendChild(createKnob('switch'));
    container1.appendChild(createKnob('switch'));


    let container2 = document.createElement('div');
    container2.className = "step-sequencer";
    container2.setAttribute("data-sampleName", value);
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    let button3 = document.createElement('button');
    let button4 = document.createElement('button');
    let button5 = document.createElement('button');
    let button6 = document.createElement('button');
    let button7 = document.createElement('button');
    let button8 = document.createElement('button');
    let button9 = document.createElement('button');
    let button10 = document.createElement('button');
    let button11 = document.createElement('button');
    let button12 = document.createElement('button');
    let button13 = document.createElement('button');
    let button14 = document.createElement('button');
    let button15 = document.createElement('button');
    let button16 = document.createElement('button');
    let light1 = document.createElement('div');
    let light2 = document.createElement('div');
    let light3 = document.createElement('div');
    let light4 = document.createElement('div');
    let light5 = document.createElement('div');
    let light6 = document.createElement('div');
    let light7 = document.createElement('div');
    let light8 = document.createElement('div');
    let light9 = document.createElement('div');
    let light10 = document.createElement('div');
    let light11 = document.createElement('div');
    let light12 = document.createElement('div');
    let light13 = document.createElement('div');
    let light14 = document.createElement('div');
    let light15 = document.createElement('div');
    let light16 = document.createElement('div');

    light1.className = "light";
    light2.className = "light";
    light3.className = "light";
    light4.className = "light";
    light5.className = "light";
    light6.className = "light";
    light7.className = "light";
    light8.className = "light";
    light9.className = "light";
    light10.className = "light";
    light11.className = "light";
    light12.className = "light";
    light13.className = "light";
    light14.className = "light";
    light15.className = "light";
    light16.className = "light";
    button1.appendChild(light1);
    button2.appendChild(light2);
    button3.appendChild(light3);
    button4.appendChild(light4);
    button5.appendChild(light5);
    button6.appendChild(light6);
    button7.appendChild(light7);
    button8.appendChild(light8);
    button9.appendChild(light9);
    button10.appendChild(light10);
    button11.appendChild(light11);
    button12.appendChild(light12);
    button13.appendChild(light13);
    button14.appendChild(light14);
    button15.appendChild(light15);
    button16.appendChild(light16);
    container2.appendChild(button1);
    container2.appendChild(button2);
    container2.appendChild(button3);
    container2.appendChild(button4);
    container2.appendChild(button5);
    container2.appendChild(button6);
    container2.appendChild(button7);
    container2.appendChild(button8);
    container2.appendChild(button9);
    container2.appendChild(button10);
    container2.appendChild(button11);
    container2.appendChild(button12);
    container2.appendChild(button13);
    container2.appendChild(button14);
    container2.appendChild(button15);
    container2.appendChild(button16);
    let level = document.createElement('input');
    level.type = 'range';
    level.className = 'input-knob';
    level.setAttribute('data-diameter', '40');
    level.setAttribute('data-src', "./images/Casio_Multicolour.png");
    level.value = '0';
    level.min = '0';
    level.max = '100';
    level.setAttribute('data-sprites', '99');
    level.title = `${value} volume`;
    level.id = `level${counter}`;
    // console.log(level.id)
    level.oninput = function (){

        setup('level', level.id);
        // counter++
    }
    level.onchange = function (){
        console.log(level.id, document.getElementById(level.id).value)
        // setup(value);
    }

    // level.oninput = `setup(this)`;
    // level.onchange = `setup(this)`;

    let pitch = document.createElement('input');
    pitch.type = 'range';
    pitch.className = 'input-knob';
    pitch.setAttribute('data-diameter', '40');
    pitch.setAttribute('data-src', "./images/Casio_Multicolour.png");
    pitch.value = '0';
    pitch.min = '-23';
    pitch.max = '23';
    pitch.setAttribute('data-sprites', '99');
    pitch.title = `${value} pitch`;
    pitch.id = `pitch${counter}`;
    pitch.oninput = function (){
        setup('pitchshift', pitch.id);
        // counter++
    }
    pitch.onchange = function (){
        console.log(pitch.id)
        console.log(document.getElementById(pitch.id).value)
    }

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
    distortion.title = `${value} distortion`;
    let id = `distortion${counter}`;
    distortion.id = id;
    distortion.oninput = function (){
        setup('distortion', distortion.id);
    }
    distortion.onchange = function (){
        console.log(distortion.id)
        console.log(document.getElementById(distortion.id).value)
    }
    container2.appendChild(level);
    container2.appendChild(pitch);
    container2.appendChild(distortion);
    container1.appendChild(container2);
    document.body.appendChild(container1);
    counter++
    return container1;

}

function createKnob(value) {
    let container1 = document.createElement('div');
    container1.id = 'synthKnobs';
    container1.innerHTML = 'test'
    let knob = document.createElement('input');
    knob.type = 'range';
    knob.className = 'input-knob';
    knob.setAttribute('data-diameter', '100');
    // knob.setAttribute('data-src', "./images/Casio_Multicolour.png");
    if (value==='volume') {
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '101')
        knob.value = '100';
        knob.min = '0';
        knob.max = '100';
    }
    if (value==='tempo') {
        // knob.setAttribute('data-src', "./images/knob_70_white.png");
        knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '101')

        knob.value = '85';
        knob.min = '40';
        knob.max = '200';
    }
    if (value==='pitch') {
        knob.setAttribute('data-src', "./images/808_Voulme_Knob.png");
        knob.setAttribute('data-sprites', '101')
        knob.value = '0';
        knob.min = '-23';
        knob.max = '23';
        knob.step = '0.001'
    }
    if (value==='switch'){
        knob.type = 'radio';
        knob.value = '0';
        knob.min = '0';
        knob.max = '1';
        knob.setAttribute('data-sprites', '2');
        knob.setAttribute('data-diameter', '35');
        knob.name= `group${SwitchCounter}`;
        knob.id = `switch${SwitchCounter}`;
        knob.className = 'input-switch';
        knob.setAttribute('data-src', '/images/switch_offon.png');
        // knob.setAttribute('data-src', "./images/knob_70_white.png");
        // knob.setAttribute('data-diameter', '80');
    }
        knob.value = '0';
        knob.min = '0';
        knob.max = '100';
    knob.setAttribute('data-sprites', '99');
    knob.title = `${value}`;
    knob.id = `${value}${counter}`;
    document.getElementById('target').appendChild(knob);
    knob.oninput = function (){
        setup(value, knob.id)
    }
    knob.onchange = function (){
        console.log(knob.id)
        console.log(document.getElementById(knob.id).value)
    }
++SwitchCounter;
    return knob;
}

function init() {
    console.log('starting...')
    let target = document.getElementById('target');
    let containerM = document.createElement('div');
    containerM.className = 'container';
    containerM.id = 'mastering';
    containerM.appendChild(createKnob('volume'));
    containerM.appendChild(createKnob('tempo'));
    containerM.appendChild(createKnob('distortion'));
    containerM.appendChild(createKnob('phazer'));
    containerM.appendChild(createKnob('flanger'));
    containerM.appendChild(createKnob('reverb'));
    target.appendChild(containerM);
    let containerD = document.createElement('div');
    containerD.id = 'drumz';
    SwitchCounter++

    containerD.appendChild(createPlayer(value = "kick"));
    containerD.appendChild(createPlayer(value = "snare"));
    containerD.appendChild(createPlayer(value = "hihat"));
    containerD.appendChild(createPlayer(value = "clap1"));
    containerD.appendChild(createPlayer(value = "clap2"));
    containerD.appendChild(createPlayer(value = "clap3"));
    target.appendChild(containerD);
    target.appendChild(document.createElement('hr'));
    let containerS = document.createElement('div');
    containerS.id = 'Synth-controls';
    containerS.className = 'container';
    containerS.appendChild(createKnob('pitch'));
    containerS.appendChild(createKnob('cut/off'));
    containerS.appendChild(createKnob('resonance'));
    containerS.appendChild(createKnob('envelope/mod'));
    containerS.appendChild(createKnob('decay'));
    containerS.appendChild(createKnob('accent'));
    target.appendChild(containerS);
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
    target.appendChild(containerP);
}

window.addEventListener("load", init);

