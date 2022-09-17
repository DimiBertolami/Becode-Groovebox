const context = new AudioContext(Tone.context)
const target = document.getElementById('target')
let counter = 0;
let reverse = true;


// ==============================================================================================
// compressor is the only node connnecting to the speakers
const compressor = new Tone.Compressor({
    ratio: 12,
    threshold: -24,
    release: 0.25,
    attack: 0.003,
    knee: 30
}).toDestination();

// all other effects connect to the compressor
const distortion = new Tone.Distortion({
    distortion: 0.9,
    oversample: "4x"
}).connect(compressor)
const pitchShift = new Tone.PitchShift({
    pitch: 0,
    windowSize: 0.1,
    delayTime: 0,
    feedback: 0
}).connect(compressor);
const chorus = new Tone.Chorus({
    frequency: 1.5,
    delayTime: 200,
    depth: 0.9,
    type: "square",
    spread: 360,
    wet: 1,
}).connect(compressor);
const phaser = new Tone.Phaser({
    frequency: 0.5,
    octaves: 3,
    stages: 10,
    Q: 10,
    baseFrequency: 350
}).connect(compressor);
const reverb = new Tone.Reverb({
    decay: 1.5,
    preDelay: 0.01
}).connect(compressor);
const feedbackDelay = new Tone.FeedbackDelay({
    delayTime: 0.25,
    maxDelay: 1
}).connect(compressor);
const pingPong = new Tone.PingPongDelay("4n", 0.6);
const soloChannel = new Tone.Solo();
soloChannel.connect(compressor)

//separate players
const kick  = new Tone.Player('samples/kick.mp3')
const snare = new Tone.Player('samples/snare.mp3')
const hihat = new Tone.Player('samples/hihat.mp3')
const clap  = new Tone.Player('samples/clap.mp3')
const crash = new Tone.Player('samples/crash.mp3')
const shaker= new Tone.Player('samples/shaker.mp3')
const tom1  = new Tone.Player('samples/tom1.mp3')
const tom2  = new Tone.Player('samples/tom2.mp3')
const tom3  = new Tone.Player('samples/tom3.mp3')
const rCrash= new Tone.Player('samples/crash.mp3')

//This is still the original keys player. I just separated the instruments so that I can connect them to their own channel/gainNode.
const keys = new Tone.Players({
    urls: {}
});
keys.add("kick", kick.buffer)
keys.add("snare", snare.buffer)
keys.add("hihat", hihat.buffer)
keys.add("clap", clap.buffer)
keys.add("crash", crash.buffer)
keys.add("rCrash", rCrash.buffer)
keys.add("shaker", shaker.buffer)
keys.add("tom1", tom1.buffer)
keys.add("tom2", tom2.buffer)

// rCrash.start(+0.1)
// connect drum players to effects (effects are already connected to destination)
routeAudio(rCrash, true)
routeAudio(kick)
routeAudio(snare)
routeAudio(hihat)
routeAudio(clap)
routeAudio(crash)
routeAudio(shaker)
routeAudio(tom1)
routeAudio(tom2)
routeAudio(tom3)
// ==============================================================================================


function routeAudio (p, bReverse = false) {
    if (bReverse) {
        console.log(p.reverse)
        p.reverse = true
    }
    p.connect(distortion)
    p.connect(chorus)
    p.connect(phaser)
    p.connect(reverb)
    p.connect(pitchShift)
    p.connect(feedbackDelay)
    return p
    // }
}

const microphoneMeter = new Tone.Meter();
const totalVolumeMeter = new Tone.Meter();
const mic = new Tone.UserMedia();
mic.open();
// connect mic to the meter
mic.connect(microphoneMeter);
keys.connect(totalVolumeMeter)
// target.appendChild(microphoneMeter)
// target.appendChild(totalVolumeMeter)

keys.add("tom3", tom3.buffer)

const play = (p) => p.start('+0.1').stop(+4);
const stop = (p) => p.stop(0);
const volumeUp = (p) => ++keys.player(p).volume.value;
const volumeDown = (p) => --p.volume.value;
showSomeHelpInConsole()

Tone.Transport.bpm.value = 120;
const SixTeenth_Note_Length = () => 0.25 * 60 / Tone.Transport.bpm.value

GUI_Builder()


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
            showSomeHelpInConsole(sampleName, sampleName, stepElement)
            // Toggle the element class to change the red light indicator
            stepElement.querySelector('.light').classList.toggle('active');

            // Toggle the sequence value for the instrument
            sequences[sampleName][step] = !sequences[sampleName][step];
        });
    })
})

function showSomeHelpInConsole(sampleName, player) {
    fancylog('get', `${sampleName}`, `${player}.get()`)
    fancylog('play', `${sampleName}`, `play(${player})`)
    fancylog('stop', `${sampleName}`, `stop(${player})`)
    fancylog('stop loop', `${sampleName}`, `${player}.loop = false`)
    fancylog('volumeUp', `${sampleName}`, `volumeUp(${player})`)
    fancylog('volumeDown', `${sampleName}`, `volumeDown(${player})`)
}

// Play button click handler
document.querySelector(".play").addEventListener('click', () => {
    Tone.Transport.start(+0.1)
    Tone.Transport.schedule((time) => {kick.start(time)}, +0.1);
    // Tone.start(+0.1);

});

// Stop button click handler
document.querySelector(".stop").addEventListener('click', () => {
    Tone.Transport.stop()
    // console.timeEnd("hasPlayed")
});

// This thing just ticks away at equal intervals, allowing us to step in and program the samples to play at each one of those intervals
new Tone.Sequence((time, step) => {
    for (const instrument in sequences) {
        // console.log(sequences[instrument][step], keys.player(instrument)._start(0.1) )
        sequences[instrument][step] && keys.player(instrument).start();
    }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).start(0);

// Volume channel
let channel = new Tone.Channel(10).toDestination();
keys.connect(channel);
// console.log('keys', keys)

function GUI_Builder() {
    drawButton('play')
    drawButton('stop')
    drawMasterSection()
    document.createElement('hr');
    drawDrumSection()
    drawSynthControls()
    drawPianoSampler()
}

function fancylog(msg1, msg2, msg3) {
    console.log(`%c${msg1}%c${msg2}%c${msg3}`,
        "color: blue; font-style: italic; background-color: yellow",
        "color: purple; font-style: italic; background-color: limegreen",
        "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow",
        `...`);
}

function ButtonGenerator() {
    let button = document.createElement('button')
    let buttonchild = document.createElement('div')
    buttonchild.setAttribute('class', 'light')
    button.appendChild(buttonchild)
    return button
}

function drawMasterSection() {

    let containerM = document.createElement('div');
    containerM.className = 'container';
    containerM.id = 'mastering';
    containerM.appendChild(createKnob('volume'));
    containerM.appendChild(createKnob('tempo'));
    containerM.appendChild(createKnob('distortion'));
    containerM.appendChild(createKnob('phazer'));
    containerM.appendChild(createKnob('chorus'));
    containerM.appendChild(createKnob('reverb'));
    target.appendChild(containerM)
    // return containerM;
    // document.body.appendChild(containerM);
}

function drawButton(name) {
    let x = document.createElement('div');
    x.className = "container"
    let btn = document.createElement('button')
    btn.className = name
    btn.textContent = name
    x.appendChild(btn)
    target.appendChild(x)
}

function setup(val, elementID) {

    // console.log(elementID)
    switch (elementID) {
        case 'masterVolume':
            keys.volume.value = val;
            // console.log(keys.volume.value)
            // console.log(`Mainchannel ${elementID} volume:`, MainGainNode.volume.value)
            break;
        case 'volume0':
            // console.log('for kick', kick, val)
            keys.player("kick").volume.value = val;
                // .volume.value = val;
            break;
        case 'volume1':
            keys.player("snare").volume.value = val;
            break;
        case 'volume2':
            keys.player("hihat").volume.value = val;
            break;
        case 'volume3':
            keys.player("clap").volume.value = val;
            break;
        case 'volume4':
            keys.player("crash").volume.value = val;
            break;
        case 'volume5':
            keys.player("shaker").volume.value = val;
            break;
        case 'volume6':
            keys.player("tom1").volume.value = val;
            break;
        case 'volume7':
            keys.player("tom2").volume.value = val;
            break;
        case 'volume8':
            keys.player("tom3").volume.value = val;
            break;
        case 'volume9':
            keys.player("rCrash").volume.value = val;
            keys.player("rCrash").reverse
            break;
        case 'tempo':
            // Beats per minute
            Tone.Transport.bpm.value = val;
            break;
        case 'distortion':
            //The parameter that is passed to the constructor is the amount of distortion (nominal range of 0-1)
            // console.log(this)
            keys.connect(distortion)
            keys.distortion.distortion = val;
            // distortion.distortion = val;
            // console.log('distortion level', distortion.distortion)
            break;
        case 'phazer':
            /*
            The phaser effect is created by splitting an audio signal into two paths.
            One path treats the signal with an all-pass filter, which preserves the amplitude of
            the original signal and alters the phase. The amount of change in phase depends on the
            frequency. When signals from the two paths are mixed, the frequencies that are out of
            phase will cancel each other out, creating the phaser's characteristic notches.
            Changing the mix ratio changes the depth of the notches
            */
            kick.connect(phaser.toDestination())
            keys.player('kick').set({
                frequency: val,
                octaves: val/3,
                baseFrequency: 1000
            });
            break;
        case 'chorus':
            /*
            */
            chorus.set({
                delayTime: 200,
                depth: 0.3
            })
            keys.player('kick').connect(chorus.toDestination())
            // console.log('chorus settings', chorus.get())

            break;
        case 'reverb':
            /*
            Simple convolution created with a decaying noise. Convolution uses impulse responses to record
            the reverberation of physical spaces and recreate them digitally.
            The amount of time it will reverberate for.
            wet 1 = 100% effected signal, 0 = 100% dry signal
            preDelay: in seconds
            decay: also seconds
            */
            // console.log('Reverb Settings', reverb.get())
            reverb.get()
            break;
        case 'pitch':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            keys.connect(pitchShift.toDestination())
            pitchShift.pitch = val;
            pitchShift.delayTime = 2;
            pitchShift.feedback = .6;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitchC0':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            keys.player('kick').connect(pitchShift.toDestination())
            // delayTime : Time
            // feedback : NormalRange
            // pitch : Interval
            // wet : NormalRange
            // windowSize : Seconds
            pitchShift.delayTime = val/30
            pitchShift.pitch = val;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitchC1':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            keys.player('snare').connect(pitchShift.toDestination())
            // delayTime : Time
            // feedback : NormalRange
            // pitch : Interval
            // wet : NormalRange
            // windowSize : Seconds
            pitchShift.delayTime = val/30
            pitchShift.pitch = val;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitchC2':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            keys.player('hihat').connect(pitchShift.toDestination())
            // delayTime : Time
            // feedback : NormalRange
            // pitch : Interval
            // wet : NormalRange
            // windowSize : Seconds
            pitchShift.delayTime = val/30
            pitchShift.pitch = val;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitchC3':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            keys.player('clap').connect(pitchShift.toDestination())
            // delayTime : Time
            // feedback : NormalRange
            // pitch : Interval
            // wet : NormalRange
            // windowSize : Seconds
            pitchShift.delayTime = val/30
            pitchShift.pitch = val;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitchC4':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            keys.player('crash').connect(pitchShift.toDestination())
            // delayTime : Time
            // feedback : NormalRange
            // pitch : Interval
            // wet : NormalRange
            // windowSize : Seconds
            pitchShift.delayTime = val/30
            pitchShift.pitch = val;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitchC5':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            keys.player('shaker').connect(pitchShift.toDestination())
            // delayTime : Time
            // feedback : NormalRange
            // pitch : Interval
            // wet : NormalRange
            // windowSize : Seconds
            pitchShift.delayTime = val/30
            pitchShift.pitch = val;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitchC6':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            keys.player('tom1').connect(pitchShift.toDestination())
            // delayTime : Time
            // feedback : NormalRange
            // pitch : Interval
            // wet : NormalRange
            // windowSize : Seconds
            pitchShift.delayTime = val/30
            pitchShift.pitch = val;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitchC7':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            keys.player('tom2').connect(pitchShift.toDestination())
            // delayTime : Time
            // feedback : NormalRange
            // pitch : Interval
            // wet : NormalRange
            // windowSize : Seconds
            pitchShift.delayTime = val/30
            pitchShift.pitch = val;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitchC8':
            keys.player('tom3').connect(pitchShift.toDestination())
            pitchShift.delayTime = val/30
            pitchShift.pitch = val;
            break;
        case 'pitchC9':
            keys.player('rCrash').connect(pitchShift.toDestination())
            pitchShift.delayTime = val/30
            pitchShift.pitch = val;
            break;
        case 'mute':
            if (document.getElementById('mute0').checked) {keys.player('kick').mute = true}
            if (document.getElementById('mute1').checked) {keys.player('snare').mute = true}
            if (document.getElementById('mute2').checked) {keys.player('hihat').mute = true}
            if (document.getElementById('mute3').checked) {keys.player('clap').mute = true}
            if (document.getElementById('mute4').checked) {keys.player('crash').mute = true}
            if (document.getElementById('mute5').checked) {keys.player('shaker').mute = true}
            if (document.getElementById('mute6').checked) {keys.player('tom1').mute = true}
            if (document.getElementById('mute7').checked) {keys.player('tom2').mute = true}
            if (document.getElementById('mute8').checked) {keys.player('tom3').mute = true}
            if (document.getElementById('mute9').checked) {keys.player('rCrash').mute = true}
            break;
        case 'solo':

            Mainchannel.solo(true);
            break;

        default:
            break;
    }

}

function drawDrumSection() {
    let containerD = document.createElement('div');
    containerD.id = 'drumz';
    containerD.appendChild(DrawGui('kick'))
    containerD.appendChild(DrawGui('snare'))
    containerD.appendChild(DrawGui('hihat'))
    containerD.appendChild(DrawGui('clap'))
    containerD.appendChild(DrawGui('crash'))
    containerD.appendChild(DrawGui('shaker'))
    containerD.appendChild(DrawGui('tom1'))
    containerD.appendChild(DrawGui('tom2'))
    containerD.appendChild(DrawGui('tom3'))
    containerD.appendChild(DrawGui('rCrash'))
    // document.body.appendChild(containerD);
    target.appendChild(containerD)
    // return containerD
}

function DrawGui(Name) {

    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    div1.setAttribute('class', 'container')
    div2.setAttribute('class', 'step-sequencer')
    div2.setAttribute('data-sampleName', Name)
    div1.textContent = Name;
    div1.value = Name;

    for (let i = 0; i < 16; i++) {
        div2.appendChild(ButtonGenerator())
    }
    let audioEl = document.createElement('audio')
    let aSrc = document.createElement('source')
    aSrc.setAttribute('src', `samples/${Name}.mp3`)
    aSrc.setAttribute('type', 'audio/mpeg')
    aSrc.setAttribute('id', `SRC${Name}`)
    audioEl.setAttribute('controls', '')
    audioEl.setAttribute('autoplay', false)
    audioEl.setAttribute('hidden', '')
    audioEl.appendChild(aSrc)
    div1.appendChild(audioEl)
    div1.appendChild(div2);
    div1.appendChild(channelStrip(`${Name}`))
    // target.appendChild(div1)
    return div1;
}

function channelStrip(value) {

    let containerC = document.createElement('div');
    containerC.id = `Channelstrip ${value}`;
    containerC.title = `Channelstrip ${value}`;
    containerC.className = 'container';
    containerC.appendChild(createKnob(`vol`))
    containerC.appendChild(createKnob(`dist`))
    containerC.appendChild(createKnob(`pitchC`))
    containerC.appendChild(createKnob(`pan`))
    containerC.appendChild(createKnob(`mute`))
    containerC.appendChild(createKnob(`solo`))
    counter++
    return containerC;
}

function createKnob(value) {
    // console.log(keys._buffers._buffers, source)
    let label = document.createElement('label')
    label.innerHTML = value
    let knob = document.createElement('input');
    label.appendChild(knob)
    switch (value) {
        case 'mute':
            knob.title = `mute ${counter}`; //id
            knob.id = `mute${counter}`;
            knob.setAttribute('data-diameter', '40');
            knob.setAttribute("type", "checkbox");
            knob.setAttribute("data-fgcolor", "#00ff00");
            knob.setAttribute("data-bgcolor", "#660000");
            knob.setAttribute('class', "input-switch");
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            knob.step = '1';
            knob.oninput = () => {
                keys.player("kick").mute = !knob.checked;
            }
            knob.onchange = () => {
                keys.player("kick").mute = !knob.checked;
            }
            return label
        case 'solo':
            knob.title = `solo ${counter}`; //id
            knob.id = `solo${counter}`;
            knob.setAttribute('data-diameter', '40');
            knob.setAttribute("type", "checkbox");
            knob.setAttribute("data-fgcolor", "#00ff00");
            knob.setAttribute("data-bgcolor", "#2040c0");
            knob.setAttribute('class', "input-switch");
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            knob.step = '1';
            // soloChannel.solo = true;
            keys.player('kick').connect(soloChannel.toDestination())
            // knob.checked = () =>{
            //     keys.player("kick").solo(true)
            // }
            return label
        case 'vol':
            knob.title = `volume${counter}`; //id
            knob.id = `volume${counter}`;
            knob.setAttribute('data-diameter', '40');
            knob.setAttribute("type", "range");
            knob.setAttribute("data-fgcolor", "#00ff00");
            knob.setAttribute('class', "input-knob");
            knob.value = '-40';
            knob.min = '-40';
            knob.max = '30';
            knob.step = '0.1';
            break;
        case 'dist':
            knob.title = `distortion${counter}`;
            knob.id = `distortion${counter}`;
            knob.setAttribute('data-diameter', '40');
            knob.setAttribute("type", "range");
            knob.setAttribute("data-fgcolor", "#00ff00");
            knob.setAttribute('class', "input-knob");
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            knob.step = '0.1';

            break;
        case 'pitchC':
            knob.setAttribute('data-diameter', '40');
            knob.setAttribute("type", "range");
            knob.setAttribute("data-fgcolor", "#00ff00");
            knob.setAttribute('class', "input-knob");
            knob.title = `pitchC${counter}`; //id
            knob.id = `pitchC${counter}`; //id
            knob.value = '0';
            knob.min = '-22';
            knob.max = '22';
            knob.step = '1';

            break;
        case 'pan':
            knob.setAttribute('data-diameter', '40');
            knob.setAttribute("type", "range");
            knob.setAttribute("data-fgcolor", "#00ff00");
            knob.setAttribute('class', "input-knob");
            knob.title = `pan${counter}`; //id
            knob.id = `pan${counter}`; //id
            knob.value = '0';
            knob.min = '-1';
            knob.max = '1';
            knob.step = '0.1';
            break;
        case 'volume':
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.title = `GRAND MASTER VOLUME`; //id
            knob.id = `masterVolume`; //id
            // knob.textContent = 'Volume';
            knob.value = '0';
            knob.min = '-60';
            knob.max = '0';
            knob.step = '0.01';

            break;

        case 'tempo':
            knob.setAttribute('data-diameter', '130');
            // knob.setAttribute('data-src', "./images/knob_70_white.png");
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99');
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.title = `tempo`; //id
            knob.id = `tempo`; //id
            knob.value = '160';
            knob.min = '0';
            knob.max = '320';
            knob.step = '1';
            break;

        case 'distortion':
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.title = `distortion`; //id
            knob.id = `distortion`; //id
            knob.step = '0.1';
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            break;

        case 'phazer':
            knob.title = `phazer`; //id
            knob.id = `phazer`; //id
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            break;

        case 'chorus':
            knob.title = `chorus`; //id
            knob.id = `chorus`; //id
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.value = '0.7';
            knob.min = '0';
            knob.max = '1';
            break;

        case 'reverb':
            knob.title = `reverb`; //id
            knob.id = `reverb`; //id
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            break;

        case 'cut/off':
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';

            break;
        case 'resonance':
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.step = 1;
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';

            break;
        case 'envelope/mod':
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.value = '0';
            knob.step = '0.01'
            knob.min = '0';
            knob.max = '1';

            break;
        case 'decay':
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.value = '0';
            knob.step= "1"
            knob.min = '0';
            knob.max = '1';

            break;
        case 'accent':
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.value = '0';
            knob.step = '0.01'
            knob.min = '0';
            knob.max = '1';

            break;
        case 'pitch':
            knob.title = `pitch shift controller`; //id
            knob.id = `pitch`; //id
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "./images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.value = '0';
            knob.min = '-23';
            knob.max = '23';
            knob.step = '0.1';

            break;
        case 'switch':
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute("type", "radio");
            // knob.setAttribute('class', "input-knob");
            knob.type = 'radio';
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            knob.setAttribute('data-sprites', '2');
            knob.setAttribute('data-diameter', '35');
            knob.className = 'input-switch';
            knob.setAttribute('data-src', '/images/switch_offon.png');

            break;
        case 'switchX':
            knob.setAttribute('data-diameter', '130');
            knob.type = 'radio';
            knob.value = '1';
            knob.min = '0';
            knob.max = '1';
            knob.setAttribute('data-sprites', '2');
            knob.setAttribute('data-diameter', '35');
            knob.className = 'input-switch';
            knob.setAttribute('data-src', '/images/switch_offon.png');
            knob.setAttribute("type", "radio");

            break;
    }

    knob.oninput = (ev) => {
        console.log(`%cvalue for %c${this.id} %c${this.value}`,
            "color: blue; font-style: italic; background-color: yellow;padding: 2px",
            "color: red; font-style: italic; background-color: yellow;padding: 2px",
            // "color:orange; font-style: italic; background-color: yellow;padding: 2px",
            "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow",
            `CSS in my console..${ev}`);
        setup(this.value, this.id)
    }

    knob.onchange = function () {
        console.log(`%cvalue for %c${this.id} %c${this.value}`,
            "color: blue; font-style: italic; background-color: yellow;padding: 2px",
            "color: red; font-style: italic; background-color: yellow;padding: 2px",
            // "color:orange; font-style: italic; background-color: yellow;padding: 2px",
            "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow",
            `CSS in my console..`);
        setup(this.value, this.id)
    }


    // document.body.appendChild(knob);

    target.appendChild(label)
    return label;
}

function drawSynthControls() {
    let containerS = document.createElement('div');
    containerS.id = 'Synth-controls';
    containerS.className = 'container';
    containerS.appendChild(createKnob('pitch'));
    containerS.appendChild(createKnob('cut/off'));
    containerS.appendChild(createKnob('resonance'));
    containerS.appendChild(createKnob('envelope/mod'));
    containerS.appendChild(createKnob('decay'));
    containerS.appendChild(createKnob('accent'));
    target.appendChild(containerS)
    // return containerS;
    // document.body.appendChild(containerS);

}

function createPlayer(value) {
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

    container1.appendChild(container2);
    target.appendChild(container1)
    // return container1;
}

function drawPianoSampler() {
    let containerP = document.createElement('div');
    containerP.id = 'piano-samples';
    // containerP.appendChild(createPlayer(value = "A1v16"));
    // containerP.appendChild(createPlayer(value = "A2v16"));
    // containerP.appendChild(createPlayer(value = "A3v16"));
    // containerP.appendChild(createPlayer(value = "A4v16"));
    // containerP.appendChild(createPlayer(value = "A5v16"));
    // containerP.appendChild(createPlayer(value = "A6v16"));
    // containerP.appendChild(createPlayer(value = "A7v16"));
    // containerP.appendChild(createPlayer(value = "C1v16"));
    // containerP.appendChild(createPlayer(value = "C2v16"));
    // containerP.appendChild(createPlayer(value = "C3v16"));
    // containerP.appendChild(createPlayer(value = "C4v16"));
    // containerP.appendChild(createPlayer(value = "C5v16"));
    // containerP.appendChild(createPlayer(value = "C6v16"));
    // containerP.appendChild(createPlayer(value = "C7v16"));
    // containerP.appendChild(createPlayer(value = "C8v16"));
    // containerP.appendChild(createPlayer(value = "Ds1v16"));
    // containerP.appendChild(createPlayer(value = "Ds2v16"));
    // containerP.appendChild(createPlayer(value = "Ds3v16"));
    // containerP.appendChild(createPlayer(value = "Ds4v16"));
    // containerP.appendChild(createPlayer(value = "Ds5v16"));
    // containerP.appendChild(createPlayer(value = "Ds6v16"));
    // containerP.appendChild(createPlayer(value = "Ds7v16"));
    // containerP.appendChild(createPlayer(value = "Fs1v16"));
    // containerP.appendChild(createPlayer(value = "Fs2v16"));
    // containerP.appendChild(createPlayer(value = "Fs3v16"));
    // containerP.appendChild(createPlayer(value = "Fs4v16"));
    // containerP.appendChild(createPlayer(value = "Fs5v16"));
    // containerP.appendChild(createPlayer(value = "Fs6v16"));
    // containerP.appendChild(createPlayer(value = "Fs7v16"));
    // document.body.appendChild(containerP);
    return containerP
    // keys.connect
}


//htmlElement.addEventListener("input", (ev) => { releaseTime = parseInt(ev.target.value, 10) }, false);
