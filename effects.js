/*
//TunaJS will now be used to test effects..
const context = new AudioContext();
const tuna = new Tuna(context);

// create new node
let overdrive = new tuna.Overdrive({
    outputGain: -9.154,           //-42 to 0 in dB
    drive: 0.197,                 //0 to 1
    curveAmount: 0.979,           //0 to 1
    algorithmIndex: 0,            //0 to 5, selects one of the drive algorithms
    bypass: 0
});

let chorus = new tuna.Chorus({
    rate: 1.5,         //0.01 to 8+
    feedback: 0.4,     //0 to 1+
    depth: 0.7,        //0 to 1
    delay: 0.0045,     //0 to 1
    bypass: 0          //the value 1 starts the effect as bypassed, 0 or 1
});

let delay = new tuna.Delay({
    feedback: 0.45,    //0 to 1+
    delayTime: 100,    //1 to 10000 milliseconds
    wetLevel: 0.5,     //0 to 1+
    dryLevel: 1,       //0 to 1+
    cutoff: 20000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
    bypass: 0
});

let phaser = new tuna.Phaser({
    rate: 0.1,                     //0.01 to 8 is a decent range, but higher values are possible
    depth: 0.6,                    //0 to 1
    feedback: 0.7,                 //0 to 1+
    stereoPhase: 40,               //0 to 180
    baseModulationFrequency: 700,  //500 to 1500
    bypass: 0
});

let compressor = new tuna.Compressor({
    threshold: -20,    //-100 to 0
    makeupGain: 1,     //0 and up (in decibels)
    attack: 1,         //0 to 1000
    release: 250,      //0 to 3000
    ratio: 4,          //1 to 20
    knee: 5,           //0 to 40
    automakeup: false, //true/false
    bypass: 0
});

let convolver = new tuna.Convolver({
    highCut: 22050,                         //20 to 22050
    lowCut: 20,                             //20 to 22050
    dryLevel: 1,                            //0 to 1+
    wetLevel: 1,                            //0 to 1+
    level: 1,                               //0 to 1+, adjusts total output of both wet and dry
    impulse: "impulses/impulse_rev.wav",    //the path to your impulse response
    bypass: 0
});

let filter = new tuna.Filter({
    frequency: 800,         //20 to 22050
    Q: 1,                   //0.001 to 100
    gain: 0,                //-40 to 40 (in decibels)
    filterType: "lowpass",  //lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass
    bypass: 0
});

let tremolo = new tuna.Tremolo({
    intensity: 0.3,    //0 to 1
    rate: 5,           //0.001 to 8
    stereoPhase: 0,    //0 to 180
    bypass: 0
});

let wahwah = new tuna.WahWah({
    automode: true,                  //true/false
    baseFrequency: 0.153,            //0 to 1
    excursionOctaves: 3.3,           //1 to 6
    sweep: 0.35,                     //0 to 1
    resonance: 19,                   //1 to 100
    sensitivity: -0.5,               //-1 to 1
    bypass: 0
});

let bitcrusher = new tuna.Bitcrusher({
    bits: 4,          //1 to 16
    normfreq: 0.1,    //0 to 1
    bufferSize: 4096  //256 to 16384
});

let moog = new tuna.MoogFilter({
    cutoff: 0.065,    //0 to 1
    resonance: 3.5,   //0 to 4
    bufferSize: 4096  //256 to 16384
});

let pingPongDelay = new tuna.PingPongDelay({
    wetLevel: 0.5,       //0 to 1
    feedback: 0.3,       //0 to 1
    delayTimeLeft: 200,  //1 to 10000 (milliseconds)
    delayTimeRight: 400  //1 to 10000 (milliseconds)
});

let panner = new tuna.Panner({
    pan: 0 // -1 (left) to 1 (right)
});

let gain = new tuna.Gain({
    gain: 1 // 0 and up
});

// Create regular Web Audio nodes
let input = context.createGain();
let output = context.createGain();

// Use the Tuna node just like regular nodes
input.connect(overdrive);
overdrive.connect(output);

*/


function changeEventHandler(e) {
    // let count=0;
    console.log('volume', e.value);
    // PlayerKick.volume.value = e.value;
    keys.volume.value = e.value;
}

function inputEventHandler(e) {
    console.log('volume', e.value);
    // PlayerKick.volume.value = e.value;
    keys.volume.value = e.value;
}

function changeEventHandlerTempo(e) {
    console.log('tempo', e.value);
    // keys.volume.value = e.value;
    Tone.Transport.bpm.value = e.value;
}

function inputEventHandlerTempo(e) {
    console.log('tempo', e.value);
    // keys.volume.value = e.value;
    Tone.Transport.bpm.value = e.value;
}

function changeEventHandlerDistortion(e) {
    console.log('Distortion', e.value);
    // keys.volume.value = e.value;
    // Tone.Transport.bpm.value = e.value;
    let filter = new Tone.AutoFilter(4).start();
    let dist = new Tone.Distortion(e.value).toDestination();
    keys.chain(filter, dist, Tone.Destination);
}

function inputEventHandlerDistortion(e) {
    console.log('Distortion', e.value);
    let filter = new Tone.AutoFilter(4).start();
    let dist = new Tone.Distortion(e.value).toDestination();
    keys.chain(filter, dist, Tone.Destination);
}

function inputEventHandlerKickLevel(e) {
    // let vol = new Tone.Volume(e.value).toDestination()
    // kick.connect(vol).toDestination()
    PlayerKick.volume.value = e.value;
}

function changeEventHandlerKickLevel(e) {
    // let vol = new Tone.Volume(e.value).toDestination()
    // kick.connect(vol).start().toDestination()
    console.log(`kick level: ${e.value}`);
    PlayerKick.autoplay = true;/**/
    PlayerKick.volume.value = e.value;
}

function inputEventHandlerSnareLevel(e) {
    console.log(`snare level: ${e.value}`);
    PlayerSnare.volume.value = e.value;
}

function changeEventHandlerSnareLevel(e) {
    console.log(`snare level: ${e.value}`);
    PlayerSnare.autoplay = true;/**/
    PlayerSnare.volume.value = e.value;
}

function inputEventHandlerHihatLevel(e) {
    console.log(`hihat level: ${e.value}`);
    PlayerHihat.volume.value = e.value;
}

function changeEventHandlerHihatLevel(e) {
    console.log(`hihat level: ${e.value}`);
    PlayerHihat.autoplay = true;/**/
    PlayerHihat.volume.value = e.value;
}
function inputEventHandlerClap1Level(e) {
    console.log(`clap 1 level: ${e.value}`);
    PlayerClap1.volume.value = e.value;
}

function changeEventHandlerClap1Level(e) {
    console.log(`clap 1 level: ${e.value}`);
    PlayerClap1.autoplay = true;/**/
    PlayerClap1.volume.value = e.value;
}
function inputEventHandlerClap2Level(e) {
    console.log(`clap 2 level: ${e.value}`);
    PlayerClap2.volume.value = e.value;
}

function changeEventHandlerClap2Level(e) {
    console.log(`clap 2 level: ${e.value}`);
    PlayerClap2.autoplay = true;/**/
    PlayerClap2.volume.value = e.value;
}
function inputEventHandlerClap3Level(e) {
    console.log(`clap 3 level: ${e.value}`);
    PlayerClap3.volume.value = e.value;
}

function changeEventHandlerClap3Level(e) {
    console.log(`clap 3 level: ${e.value}`);
    PlayerClap3.autoplay = true;/**/
    PlayerClap3.volume.value = e.value;
}

// const distortion = new Pizzicato.Effects.Distortion({
//     gain: 0.4
// });
function quadrafuzzer(e){
    // const quadrafuzz = new Pizzicato.Effects.Quadrafuzz({
    //     lowGain: 0.6,
    //     midLowGain: 0.8,
    //     midHighGain: 0.5,
    //     highGain: 0.6,
    //     mix: 1.0
    // });
    //
    // PlayerKick.connect(quadrafuzz);
    // sound.play();
    console.log(e.value);
}

function inputEventHandlerHihatPitch(){

}
function changeEventHandlerHihatPitch(){

}
function inputEventHandlerKickPitch(){

}
function changeEventHandlerKickPitch(){

}
function inputEventHandlerSnarePitch(){

}
function changeEventHandlerSnarePitch(){

}
function inputEventHandlerClap1Pitch(){

}
function changeEventHandlerClap1Pitch(){

}
function inputEventHandlerClap2Pitch(){

}
function changeEventHandlerClap2Pitch(){

}
function inputEventHandlerClap3Pitch(){

}
function changeEventHandlerClap3Pitch(){

}
function inputEventHandlerHihatDistortion(e){
    console.log('Distortion', e.value);

    // i believe I read somewhere there are 5 filters
    let filter = new Tone.AutoFilter(4).start();

    // the second parameter is the oversample..  can be “none”, “2x” or “4x”...
    let dist = new Tone.Distortion(e.value, "4x").toDestination();
    keys.chain(filter, dist, Tone.Destination);

    // let distortion = new Pizzicato.Effects.Distortion({
    //     gain: e.value // 0.4
    // });
    //
    // Sound.addEffect(distortion);
    // Sound.play();
}
function changeEventHandlerHihatDistortion(e){
    console.log('Distortion', e.value);
    // i believe I read somewhere there are 5 filters
    let filter = new Tone.AutoFilter(2).start();
    let dist = new Tone.Distortion(e.value).toDestination();
    // hihat.connect(dist);
    // hihat.connect(filter);

    keys.chain(filter, dist, Tone.Destination);
}

function inputEventHandlerKickDistortion(e){
}
function changeEventHandlerKickDistortion(e){
}

function inputEventHandlerSnareDistortion(e){
}
function changeEventHandlerSnareDistortion(e){
}

function inputEventHandlerClap1Distortion(e){
}
function changeEventHandlerClap1Distortion(e){
}
function inputEventHandlerClap2Distortion(e){
}
function changeEventHandlerClap2Distortion(e){
}
function inputEventHandlerClap3Distortion(e){
}
function changeEventHandlerClap3Distortion(e){
}
function FlangerEffect(e){
    console.log(e.value);
}
function Reverberator(e){
    let JCReverb = new Tone.JCReverb ( [ e.value ] ).connect(keys.toDestination());;
    JCReverb.autoplay = true;
    console.log(e.value);
}

// Tone.OmniOscillator aggregates Tone.Oscillator,
//                                Tone.PulseOscillator,
//                                Tone.PWMOscillator,
//                                Tone.FMOscillator,
//                                Tone.AMOscillator, and
//                                Tone.FatOscillator into one class.
// The oscillator class can be changed by setting the type.
//
//          omniOsc.type = "pwm" will set it to the Tone.PWMOscillator.
//
//          Prefixing any of the basic types (“sine”, “square4”, etc.)
//          with “fm”, “am”, or “fat” will use the FMOscillator,
//          AMOscillator or FatOscillator respectively.
//
//          For example: omniOsc.type = "fatsawtooth" will create set the oscillator
//          to a FatOscillator of type “sawtooth”.

// new Tone.OmniOscillator ({
//     frequency : 440,
//     detune : 0,
//     type : sine,
//     phase : 0
// })
