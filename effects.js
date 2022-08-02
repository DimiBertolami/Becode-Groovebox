// const context = new AudioContext();
// const audioElement = document.getElementById("track");
// context.createOscillator().rampTo(200,5);
// const source = context.createMediaElementSource('samples/kick.wav');


const sound = new Pizzicato.Sound();
// const analyser = Pizzicato.context.createAnalyser();
// sound.connect(analyser);
// new Tone.Volume(volume);
vol = new Tone.Volume(-12);
// console.log(Tone, vol,  sound);
// console.log(Tone.audio);
// console.log(Tone.volume());
// createSynth("C4");
// createSynth("E4");
// createSynth("A4");


function createSynth(noteX = 'c4') {
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease(noteX, '2n');
    // synth.stop("+0.5"); // stops the source 0.5 seconds from now
    document.getElementById("synthX").addEventListener("click", function () {
        if (Tone.Transport.state !== 'started') {
            Tone.Transport.start();
        } else {
            Tone.Transport.stop();
        }
    }, {passive: true});

}

function setPitch(object) {
    let value = document.getElementById('TONE1').value / 2;
    const pitchShift = new Tone.PitchShift().toDestination();
    object.connect(pitchShift).start().toDestination();
    // new Tone.Oscillator().connect(pitchShift).start().toDestination();
    pitchShift.pitch = value; // -24 = down two octaves
}

/*     lowGain (min: 0, max: 1, defaults to 0.6):
       midLowGain (min: 0, max: 1, defaults to 0.8):
       midHighGain (min: 0, max: 1, defaults to 0.5):
       highGain (min: 0, max: 1, defaults to 0.6):*/
function quadraFuzz(sound=new Pizzicato.Sound()) {
    // sound = new Pizzicato.Sound();
    let fuzzLevel = document.getElementById('phazer').value / 100;
    quadrafuzz = new Pizzicato.Effects.Quadrafuzz({
        lowGain: fuzzLevel,
        midLowGain: 0.8,
        midHighGain: fuzzLevel,
        highGain: 0.6,
    });

    sound.addEffect(quadrafuzz);
    sound.play();
}




function setDistortion(o) {
    console.log(o);
    switch (o){
        case Kick:
            amount=document.getElementById('KickDistortion').value / 10;
            // Kick.
            break;
        case snare:
            amount=document.getElementById('snareDistortion').value / 10;
            break;
        case clap1:
            amount=document.getElementById('Clap1Distortion').value / 10;
            break;
        case Clap2:
            amount=document.getElementById('Clap2Distortion').value / 10;
            break;
        case Clap3:
            amount=document.getElementById('Clap3Distortion').value / 10;
            break;
        case Hihat:
            amount=document.getElementById('HihatDistortion').value / 10;
            break;
    }
    const distortion = new Tone.Distortion(amount); //0.5
    // o.connect(distortion).start.toDestination();
    o.chain(distortion, Tone.toDestination);
}
//gain (min: 0, max: 1, defaults to 0.5): Amount of distortion applied.

/*      time (min: 0, max: 1, defaults to 0.45): Changes the small delay time applied to the copied signal.
        speed (min: 0, max: 1, defaults to 0.2): Changes the speed at which the flanging occurs.
        depth (min: 0, max: 1, defaults to 0.1): Changes the depth/intensity of the swirling effect.
        feedback (min: 0, max: 1, defaults to 0.1): Changes the volume of the delayed sound.
        mix (min: 0, max: 1, defaults to 0.5): Volume balance between the original audio and the effected output.
*/
function createFlanger() {
    flangerValue = document.getElementById('flanger').value / 100;
    // sound = new Pizzicato.Sound;
    let flanger = new Pizzicato.Effects.Flanger({
        time: 0.45,
        speed: flangerValue,
        depth: 0.5,
        feedback: flangerValue/2,
        mix: 0.5
    });
    sound.addEffect(flanger);
    sound.play();
}


/*      time (min: 0.0001, max: 10, defaults to 0.01): Duration of impulse, in seconds.
        decay (min: 0, max: 10, defaults to 0.01): The rate for the reflections of sound to fade away.
        reverse (boolean): Whether or not to reverse the impulse shape.
        mix (min: 0, max: 1, defaults to 0.5): Volume balance between the original audio and the effected output.
*/
function createReverb(value) {
    let ReverbTime = value / 100;
    // sound = new Pizzicato.Sound;
    reverb = new Pizzicato.Effects.Reverb({
        time: ReverbTime,
        decay: 4,
        reverse: true,
        mix: 0.5
    });
    sound.addEffect(reverb);
    sound.play();
}


function setKnob(e){
    // console.log(`setknob function will display the received value and for now take action on tempo and level.. distortion will follow`);
    // console.log(`knob: ${e.id}`,`value: ${e.value}`);
    switch (e.id){
        case "tempo":
            Tone.Transport.bpm.value = document.getElementById('tempo').value;
            // console.log(`tempo: ${Tone.Transport.bpm.value}`);
            break;
        case "level":
            const vol = new Tone.Volume(-12).toDestination();
            vol.mute = false;
            keys.connect(vol).start();
            // const osc = new Tone.Oscillator().connect(vol).start();
            // Tone.Transport.volume.value = document.getElementById('level').value;
            // console.log(`level: ${Tone.Transport.volume.value}`);
            break;
        case 'distortion':
            let amount = e.value;
            amount = amount/50;
            // console.log(`amount of distortion: ${amount}`);
            setDistortion(amount, keys.toDestination());
            // i think i cracked the distortion part! it should now send only between -1 and 1 !!! I will sleep better now!
            break;
        default:
        // console.log("knob " + e.id + " value " + e.value);
    }
}

function updateTempo()  {
    return Tone.Transport.bpm.value;
}
// 100000
// function setVolume(e) {
//     // console.log(`Volume set to ${e/12}`);
//     // volume = e/10; //
//     // const vol = new Tone.Volume(e).toDestination();
//     let vol = new Tone.Channel(e).toDestination();
//     vol.volume.value =  scaleValue(vol, [8, 0], [-60, +6]);
//     // const vol = new Tone.Volume (volume);
//     // console.log(vol.volume.value)
//     vol.mute = false;
//     // Tone.keys().connect(vol).start();
//
//     // keys.chain(vol, keys.toDestination());
// }

// reads value from elementID=tempo
function setTempo(e) {
    Tone.Transport.bpm.value = e.value;
    console.log(`tempo ${e.value}`);
}


function scaleValue(value, from, to) {
    let scale = (to[1] - to[0]) / (from[1] - from[0]);
    let capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
    return (capped * scale + to[0]);
}
function setVolume(e){
    keys.volume.value = e.value/10;
    console.log(`volume  ${e.value/10}`);
}

function setLevel1(e){
    Kick.volume.value = e.value;
}
function setLevel2(e){
    Snare.volume.value = e.value;
}
function setLevel3(e){
    Clap1.volume.value = e.value;
}
function setLevel4(e){
    Clap2.volume.value = e.value;
}
function setLevel5(e){
    Clap3.volume.value = e.value;
}
function setLevel6(e){
    Hihat.volume.value = e.value;
}
