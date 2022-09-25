// ========================================= Here begins the routing of the audio =====================================================
// Volume channel goes to speakers
let channel = new Tone.Channel().toDestination();

// compressor is the only node connnecting to the main channel
const compressor = new Tone.Compressor({
    attack: 0,
    context: Tone.context,
    knee: 40,
    ratio: 15,
    release: 0.3,
    threshold: -100,
}).connect(channel);

// all other effects connect to the compressor
const distortion = () => new Tone.Distortion({ distortion: 0.9, oversample: "4x"}).connect(compressor)
const mainDistortion = new Tone.Distortion({ distortion: 0.9, oversample: "4x"}).connect(compressor)
// mainDistortion.connect(compressor)

const pitchtuner = () => new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const pitchShift = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const chorus = new Tone.Chorus({ frequency: 1.5, delayTime: 200, depth: 0.9, type: "square", spread: 360, wet: 1 }).connect(mainDistortion);
const phaser = new Tone.Phaser({ frequency: 0.5, octaves: 3, stages: 10, Q: 10, baseFrequency: 350 }).connect(mainDistortion);
const reverb = new Tone.Reverb({context: Tone.context, decay: 1.5, preDelay: 0.01, wet: 1 }).connect(mainDistortion);
const feedbackDelay = new Tone.FeedbackDelay({ delayTime: 0.25, maxDelay: 1 }).connect(mainDistortion);
// const pingPong = new Tone.PingPongDelay("4n", 0.6);
// const soloChannel = new Tone.Solo();
// soloChannel.connect(compressor)

function setPlayer (p, bReverse = false) {
    if (bReverse) {
        p.reverse = true
        p.playbackRate = .5
        console.log('player ', p, 'reversed', p.reverse, 'playbackRate', p.playbackRate)
    }
    showSomeHelpInConsole('        ', p.name, p.value)
    // p.connect(pitchtuner())
    // p.connect(chorus)
    // p.connect(phaser)
    // p.connect(reverb)
    // p.connect(feedbackDelay)
    return p
    // }
}

//This is still the original keys player. I just separated the instruments so that I can connect them to their own channel/gainNode.
const keys = new Tone.Players({
    urls: {}
});

//separate distortion
const  distk  = new Tone.Distortion({ distortion: 0.3, oversample: "none"}).connect(compressor)
const distsn  = new Tone.Distortion({ distortion: 0.3, oversample: "none"}).connect(compressor)
const disthh  = new Tone.Distortion({ distortion: 0.3, oversample: "none"}).connect(compressor)
const distcl  = new Tone.Distortion({ distortion: 0.3, oversample: "none"}).connect(compressor)
const distcr  = new Tone.Distortion({ distortion: 0.3, oversample: "none"}).connect(compressor)
const distsh  = new Tone.Distortion({ distortion: 0.3, oversample: "none"}).connect(compressor)
const distt1  = new Tone.Distortion({ distortion: 0.3, oversample: "none"}).connect(compressor)
const distt2  = new Tone.Distortion({ distortion: 0.3, oversample: "none"}).connect(compressor)
const distt3  = new Tone.Distortion({ distortion: 0.3, oversample: "none"}).connect(compressor)
const distrc  = new Tone.Distortion({ distortion: 0.3, oversample: "none"}).connect(compressor)

//separate pitchTuners
const  pitchk  = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const pitchsn  = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const pitchhh  = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const pitchcl  = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const pitchcr  = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const pitchsh  = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const pitcht1  = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const pitcht2  = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const pitcht3  = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
const pitchrc  = new Tone.PitchShift({ pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }).connect(mainDistortion);
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


kick.name = 'kick'
snare.name = 'snare'
hihat.name = 'hihat'
clap.name = 'clap'
crash.name = 'crash'
shaker.name = 'shaker'
tom1.name = 'tom1'
tom2.name = 'tom2'
tom3.name = 'tom3'
rCrash.name = 'rCrash'


kick.connect(distk)
snare.connect(distsn)
hihat.connect(disthh)
clap.connect(distcl)
crash.connect(distcr)
shaker.connect(distsh)
tom1.connect(distt1)
tom2.connect(distt2)
tom3.connect(distt3)
rCrash.connect(distrc)

kick.connect(pitchk)
snare.connect(pitchsn)
hihat.connect(pitchhh)
clap.connect(pitchcl)
crash.connect(pitchcr)
shaker.connect(pitchsh)
tom1.connect(pitcht1)
tom2.connect(pitcht2)
tom3.connect(pitcht3)
rCrash.connect(pitchrc)

// console.log(keys)
keys.add(kick.name, kick.buffer)
keys.add(snare.name, snare.buffer)
keys.add(hihat.name, hihat.buffer)
keys.add(clap.name, clap.buffer)
keys.add(crash.name, crash.buffer)
keys.add(rCrash.name, rCrash.buffer)
keys.add(shaker.name, shaker.buffer)
keys.add(tom1.name, tom1.buffer)
keys.add(tom2.name, tom2.buffer)
keys.add(tom3.name, tom3.buffer)

//separate channels
const chan_kick  = new Tone.Channel()
const chan_snare = new Tone.Channel()
const chan_hihat = new Tone.Channel()
const chan_clap  = new Tone.Channel()
const chan_crash = new Tone.Channel()
const chan_shaker= new Tone.Channel()
const chan_tom1  = new Tone.Channel()
const chan_tom2  = new Tone.Channel()
const chan_tom3  = new Tone.Channel()
const chan_rCrash= new Tone.Channel()

kick.connect(chan_kick)
snare.connect(chan_snare)
hihat.connect(chan_hihat)
clap.connect(chan_clap)
crash.connect(chan_crash)
shaker.connect(chan_shaker)
tom1.connect(chan_tom1)
tom2.connect(chan_tom2)
tom3.connect(chan_tom3)
rCrash.connect(chan_rCrash)

keys.connect(pitchShift)
keys.connect(chorus)
keys.connect(phaser)
keys.connect(reverb)

pitchShift.connect(mainDistortion)
chorus.connect(mainDistortion)
phaser.connect(mainDistortion)
reverb.connect(mainDistortion)

setPlayer(rCrash, true)
setPlayer(kick)
setPlayer(snare)
setPlayer(hihat)
setPlayer(clap)
setPlayer(crash)
setPlayer(shaker)
setPlayer(tom1)
setPlayer(tom2)
setPlayer(tom3)
// =======================================  end audio routing =======================================================

let mute0 = document.getElementById('mute0')
let mute1 = document.getElementById('mute1')
let mute2 = document.getElementById('mute2')
let mute3 = document.getElementById('mute3')
let mute4 = document.getElementById('mute4')
let mute5 = document.getElementById('mute5')
let mute6 = document.getElementById('mute6')
let mute7 = document.getElementById('mute7')
let mute8 = document.getElementById('mute8')
let mute9 = document.getElementById('mute9')
let solo0 = document.getElementById('solo0')
let solo1 = document.getElementById('solo1')
let solo2 = document.getElementById('solo2')
let solo3 = document.getElementById('solo3')
let solo4 = document.getElementById('solo4')
let solo5 = document.getElementById('solo5')
let solo6 = document.getElementById('solo6')
let solo7 = document.getElementById('solo7')
let solo8 = document.getElementById('solo8')
let solo9 = document.getElementById('solo9')
let pan0 =  document.getElementById('pan0')
let pan1 =  document.getElementById('pan1')
let pan2 =  document.getElementById('pan2')
let pan3 =  document.getElementById('pan3')
let pan4 =  document.getElementById('pan4')
let pan5 =  document.getElementById('pan5')
let pan6 =  document.getElementById('pan6')
let pan7 =  document.getElementById('pan7')
let pan8 =  document.getElementById('pan8')
let pan9 =  document.getElementById('pan9')



function setListener(elementID, method, type, instrument){
    document.getElementById(elementID).addEventListener(type, ()=>{
        if(document.getElementById(elementID).checked){
            console.log(`${instrument} ${method}`)
            instrument.method=true
            // keys.player(`${instrument}`).method=true
        } else {
            console.log(`${instrument} un${method}`)
            instrument.method=false
            // keys.player(`${instrument}`).method=false
        }
    })
}

function showSomeHelpInConsole(sampleName, player) {
    fancylog('get', `${sampleName}`, `${player}.get()`)
    fancylog('play', `${sampleName}`, `play(${player})`)
    fancylog('stop', `${sampleName}`, `stop(${player})`)
    fancylog('stop loop', `${sampleName}`, `${player}.loop = false`)
    fancylog('volumeUp', `${sampleName}`, `volumeUp(${player})`)
    fancylog('volumeDown', `${sampleName}`, `volumeDown(${player})`)
}



function fancylog(msg1, msg2, msg3) {
    console.log(`%c${msg1}%c${msg2}%c${msg3}`,
        "color: blue; font-style: italic; background-color: yellow",
        "color: purple; font-style: italic; background-color: limegreen",
        "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow",
        `...`);
}


function GUI_Builder() {
     drawButton('play')
     drawButton('stop')
     drawMasterSection()
     // document.createElement('hr');
     drawDrumSection()
     drawSynthControls()

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
    containerM.appendChild(createKnob('phaser'));
    containerM.appendChild(createKnob('chorus'));
    containerM.appendChild(createKnob('reverb'));
    containerM.appendChild(createKnob('vumeter'));
    target.appendChild(containerM)
    // return containerM;
    // document.body.appendChild(containerM);
}

function drawButton(name) {
    let x = document.createElement('span');
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
            document.getElementById('VolumeDisplay').textContent = val;
            document.getElementById('VolumeDisplay').title = 'grand volume (in decibel)'
            keys.volume.value = val;
            // console.log(`Mainchannel ${elementID} volume:`, MainGainNode.volume.value)
            break;
        case 'tempo':
            // Beats per minute
            document.getElementById('BPMDisplay').textContent = val;
            Tone.Transport.bpm.value = val;
            break;
        case 'volume0':
            keys.player("kick").volume.value = val;
            console.log('kick volume', keys.player("kick").volume.value)
            break;
        case 'volume1':
            keys.player("snare").volume.value = val;
            console.log('snare volume', keys.player("snare").volume.value)
            break;
        case 'volume2':
            keys.player("hihat").volume.value = val;
            console.log('hihat volume', keys.player("hihat").volume.value)
            break;
        case 'volume3':
            keys.player("clap").volume.value = val;
            console.log('clap volume', keys.player("clap").volume.value)
            break;
        case 'volume4':
            keys.player("crash").volume.value = val;
            console.log('crash volume', keys.player("crash").volume.value)
            break;
        case 'volume5':
            keys.player("shaker").volume.value = val;
            console.log('shaker volume', keys.player("shaker").volume.value)
            break;
        case 'volume6':
            keys.player("tom1").volume.value = val;
            console.log('tom1 volume', keys.player("tom1").volume.value)
            break;
        case 'volume7':
            keys.player("tom2").volume.value = val;
            console.log('tom2 volume', keys.player("tom2").volume.value)
            break;
        case 'volume8':
            keys.player("tom3").volume.value = val;
            console.log('tom3 volume', keys.player("tom3").volume.value)
            break;
        case 'volume9':
            keys.player("rCrash").volume.value = val;
            console.log('reverse crash volume', keys.player("rCrash").volume.value)
            break;
        case 'distortion':
            document.getElementById('Disortiondisplay').textContent = val;
            //amount of distortion (nominal range of 0-1)
            mainDistortion.distortion = val;
            mainDistortion.oversample = 'none'
            mainDistortion.wet = 1
            console.log('main distortion level', mainDistortion.distortion)

            break;
        case 'distortion0':
            distk.distortion = val;
            distk.oversample = '4x';
            distk.wet.value = '1';
            console.log('distortion kick', distk.distortion)
            break;
        case 'distortion1':
            distsn.distortion = val;
            distsn.oversample = '4x';
            distsn.wet.value = '1';
            console.log('distortion snare', distsn.distortion)
            break;
        case 'distortion2':
            disthh.distortion = val;
            disthh.oversample = '4x';
            disthh.wet.value = '1';
            console.log('distortion hihat', disthh.distortion)
            break;
        case 'distortion3':
            distcl.distortion = val;
            distcl.oversample = '4x';
            distcl.wet.value = '1';
            console.log('distortion clap', distcl.distortion)
            break;
        case 'distortion4':
            distcr.distortion = val;
            distcr.oversample = '4x';
            distcr.wet.value = '1';
            console.log('distortion crash', distcr.distortion)
            break;
        case 'distortion5':
            distsh.distortion = val;
            distsh.oversample = '4x';
            distsh.wet.value = '1';
            console.log('distortion shaker', distsh.distortion)
            break;
        case 'distortion6':
            distt1.distortion = val;
            distt1.oversample = '4x';
            distt1.wet.value = '1';
            console.log('distortion tom1', distt1.distortion)
            break;
        case 'distortion7':
            distt2.distortion = val;
            distt2.oversample = '4x';
            distt2.wet.value = '1';
            console.log('distortion tom2', distt2.distortion)
            break;
        case 'distortion8':
            distt3.distortion = val;
            distt3.oversample = '4x';
            distt3.wet.value = '1';
            console.log('distortion tom3', distt3.distortion)
            break;
        case 'distortion9':
            distrc.distortion = val;
            distrc.oversample = '4x';
            distrc.wet.value = '1';
            console.log('distortion reverse crash', distrc.distortion)
            break;
        case 'pitch':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            pitchShift.pitch = val;
            pitchShift.delayTime = val/12;
            pitchShift.feedback = val/40;
            break;
        case 'pitch0':
            pitchk.pitch = val;
            pitchk.delayTime = val/12;
            pitchk.feedback = val/40;
            break;
        case 'pitch1':
            pitchsn.pitch = val;
            pitchsn.delayTime = val/12
            pitchsn.pitch = val/40;
            break;
        case 'pitch2':
            pitchhh.pitch = val;
            pitchhh.delayTime = val/12
            pitchhh.pitch = val/40;
            break;
        case 'pitch3':
            pitchcl.pitch = val;
            pitchcl.delayTime = val/12
            pitchcl.pitch = val/40;
            break;
        case 'pitch4':
            pitchcr.pitch = val;
            pitchcr.delayTime = val/12
            pitchcr.pitch = val/40;
            break;
        case 'pitch5':
            pitchsh.pitch = val;
            pitchsh.delayTime = val/12
            pitchsh.pitch = val/40;
            break;
        case 'pitch6':
            pitcht1.pitch = val;
            pitcht1.delayTime = val/12
            pitcht1.pitch = val/40;
            break;
        case 'pitch7':
            pitcht2.pitch = val;
            pitcht2.delayTime = val/12
            pitcht2.pitch = val/40;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitch8':
            pitcht3.pitch = val;
            pitcht3.delayTime = val/12
            pitcht3.pitch = val/40;
            break;
        case 'pitch9':
            pitchrc.pitch = val;
            pitchrc.delayTime = val/12
            pitchrc.pitch = val/40;
            break;
        case 'mute0':
            keys.player('kick').mute = !!document.getElementById('mute0').checked;
            break;
        case 'mute1':
            keys.player('snare').mute = !!document.getElementById('mute1').checked;
            break;
        case 'mute2':
            keys.player('hihat').mute = !!document.getElementById('mute2').checked;
            break;
        case 'mute3':
            keys.player('clap').mute = !!document.getElementById('mute4').checked;
            break;
        case 'mute4':
            keys.player('crash').mute = !!document.getElementById('mute3').checked;
            break;
        case 'mute5':
            keys.player('shaker').mute = !!document.getElementById('mute5').checked;
            break;
        case 'mute6':
            keys.player('tom1').mute = !!document.getElementById('mute6').checked;
            break;
        case 'mute7':
            keys.player('tom2').mute = !!document.getElementById('mute7').checked;
            break;
        case 'mute8':
            keys.player('tom3').mute = !!document.getElementById('mute8').checked;
            break;
        case 'mute9':
            keys.player('rCrash').mute = !!document.getElementById('mute9').checked;
            break;
        case 'solo0':
            chan_kick.solo = document.getElementById('solo0').value === 'on';
            break;
        case 'solo1':
            chan_snare.solo = !!document.getElementById('solo1').checked;
            break;
        case 'solo2':
            chan_hihat.solo = !!document.getElementById('solo2').checked;
            break;
        case 'solo3':
            chan_clap.solo = !!document.getElementById('solo3').checked;
            break;
        case 'solo4':
            chan_crash.solo = !!document.getElementById('solo4').checked;
            break;
        case 'solo5':
            chan_shaker.solo = !!document.getElementById('solo5').checked;
            break;
        case 'solo6':
            chan_tom1.solo = !!document.getElementById('solo6').checked;
            break;
        case 'solo7':
            chan_tom2.solo = !!document.getElementById('solo7').checked;
            break;
        case 'solo8':
            chan_tom3.solo = !!document.getElementById('solo8').checked;
            break;
        case 'solo9':
            chan_rCrash.solo = !!document.getElementById('solo9').checked;
            break;
        case 'pan0':
            channel_kick.pan=val
            break;
        case 'pan1':
            channel_snare.pan=val
            break;
        case 'pan2':
            channel_hihat.pan=val
            break;
        case 'pan3':
            channel_clap.pan=val
            break;
        case 'pan4':
            channel_crash.pan=val
            break;
        case 'pan5':
            channel_shaker.pan=val
            break;
        case 'pan6':
            channel_tom1.pan=val
            break;
        case 'pan7':
            channel_tom2.pan=val
            break;
        case 'pan8':
            channel_tom3.pan=val
            break;
        case 'pan9':
            channel_rCrash.pan=val
            break;
        case 'phaser':
            /*
            The phaser effect is created by splitting an audio signal into two paths.
            One path treats the signal with an all-pass filter, which preserves the amplitude of
            the original signal and alters the phase. The amount of change in phase depends on the
            frequency. When signals from the two paths are mixed, the frequencies that are out of
            phase will cancel each other out, creating the phaser's characteristic notches.
            Changing the mix ratio changes the depth of the notches
            */
            document.getElementById('Phaserdisplay').textContent = val;
            phaser.set({
                frequency: val,
                octaves: 3,
                baseFrequency: val*200,
                stages: 40,
                Q: 100,
    });
            break;
        case 'chorus':
            /*
            */
            document.getElementById('Chorusdisplay').textContent = val;
            chorus.set({
                delayTime: val*350,
                depth: val,
                type: "square",
                spread: 360,
                wet: 1,
                frequency: val/2
            })
            // keys.player('kick').connect(chorus.toDestination())
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
            document.getElementById('Reverbdisplay').textContent = val;
            reverb.set({
                decay: val *2,
                preDelay: val/5,
                wet: 1})
            break;

        default:
            break;
    }
}

function drawDrumSection() {
    let containerD = document.createElement('div');
    // containerD.style = 'border: 1px solid gold'
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
    div2.style = 'border: 1px dashed grey; border-radius: 10px'
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
// name as input (kick, snare etc..)
function channelStrip(value) {

    let containerC = document.createElement('div');
    containerC.id = `Channelstrip ${value}`;
    containerC.title = `Channelstrip ${value}`;
    containerC.className = 'container';
    containerC.appendChild(createKnob(`vol`))
    containerC.appendChild(createKnob(`dist`))
    containerC.appendChild(createKnob(`tune`))
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
    label.style = 'border: 2px dotted grey; border-radius:15px'

    let knob = document.createElement('input');
    label.appendChild(knob)
    switch (value) {
        case 'vumeter':
            knob.title = `VU Meter`; //id
            knob.id = `VU_Meter`;
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/vuMeter01-31.png");
            knob.setAttribute('data-sprites', '31')
            knob.setAttribute("type", "range");
            knob.setAttribute('hidden', true)
            knob.value = '0';
            knob.min = '-20';
            knob.max = '5';
            knob.step = '0.1';
            knob.setAttribute('class', "input-switch");
            knob.style= 'opacity:10%'
            break;
        case 'mute':
            knob.title = `mute ${counter}`; //id
            knob.id = `mute${counter}`;
            knob.setAttribute('data-diameter', '40');
            knob.setAttribute("type", "checkbox");
            knob.setAttribute("data-fgcolor", "#00ff00");
            knob.setAttribute("data-bgcolor", "#660000");
            knob.setAttribute('class', "input-switch");
            // knob.min = '0';
            // knob.max = '1';
            // knob.step = '1';
            knob.checked = false
            knob.oninput = function () {
                console.log(`%cvalue for %c${this.id} %c${this.value}`,
                    "color: blue; font-style: italic; background-color: yellow;padding: 2px",
                    "color: red; font-style: italic; background-color: yellow;padding: 2px",
                    // "color:orange; font-style: italic; background-color: yellow;padding: 2px",
                    "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow");
                setup(this.checked, this.id)
            }
            knob.onchange = function () {
                console.log(`%cvalue for %c${this.id} %c${this.value}`,
                    "color: blue; font-style: italic; background-color: yellow;padding: 2px",
                    "color: red; font-style: italic; background-color: yellow;padding: 2px",
                    // "color:orange; font-style: italic; background-color: yellow;padding: 2px",
                    "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow");
                setup(this.checked, this.id)
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
            // knob.value = '0';
            // knob.min = '0';
            // knob.max = '1';
            // knob.step = '1';
            knob.checked = false
            knob.oninput = function () {
                console.log(`%cvalue for %c${this.id} %c${this.value}`,
                    "color: blue; font-style: italic; background-color: yellow;padding: 2px",
                    "color: red; font-style: italic; background-color: yellow;padding: 2px",
                    // "color:orange; font-style: italic; background-color: yellow;padding: 2px",
                    "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow");
                setup(this.checked, this.id)
            }
            knob.onchange = function () {
                console.log(`%cvalue for %c${this.id} %c${this.value}`,
                    "color: blue; font-style: italic; background-color: yellow;padding: 2px",
                    "color: red; font-style: italic; background-color: yellow;padding: 2px",
                    // "color:orange; font-style: italic; background-color: yellow;padding: 2px",
                    "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow");
                setup(this.checked, this.id)
            }
            return label
        case 'vol':
            knob.title = `volume${counter}`; //id
            knob.id = `volume${counter}`;
            knob.setAttribute('data-diameter', '40');
            knob.setAttribute("type", "range");
            knob.setAttribute("data-fgcolor", "#00ff00");
            knob.setAttribute('class', "input-knob");
            knob.value = '-60';
            knob.min = '-60';
            knob.max = '40';
            knob.step = '1';
            break;
        case 'distortion':
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/blauw.png");
            knob.setAttribute('data-sprites', '100')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.title = `distortion`; //id
            knob.id = `distortion`; //id
            knob.step = '0.01';
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            // led display
            let Disortiondisplay = document.createElement('div')
            Disortiondisplay.setAttribute('id', 'Disortiondisplay')
            Disortiondisplay.style="background-color: darkblue; " +
                "padding: 3px;border: 1px solid gold; " +
                "font-size: large; font-weight: bold; " +
                "font-family: 'The Led Display St', sans-serif; " +
                "color: gold; width: 45px; height: 25px"
            Disortiondisplay.textContent = ''
            label.appendChild(Disortiondisplay)
            break;
        case 'phaser':
            knob.title = `phaser`; //id
            knob.id = `phaser`; //id
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/blauw.png");
            knob.setAttribute('data-sprites', '100')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            knob.step = '0.01'
            // led display
            let Phaserdisplay = document.createElement('div')
            Phaserdisplay.setAttribute('id', 'Phaserdisplay')
            Phaserdisplay.style="background-color: darkblue; " +
                "padding: 3px;border: 1px solid gold; " +
                "font-size: large; font-weight: bold; " +
                "font-family: 'The Led Display St', sans-serif; " +
                "color: gold; width: 45px; height: 25px"
            Phaserdisplay.textContent = ''
            label.appendChild(Phaserdisplay)
            break;
        case 'chorus':
            knob.title = `chorus`; //id
            knob.id = `chorus`; //id
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/blauw.png");
            knob.setAttribute('data-sprites', '100')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.step = '0.01'
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            // led display
            let Chorusdisplay = document.createElement('div')
            Chorusdisplay.setAttribute('id', 'Chorusdisplay')
            Chorusdisplay.style="background-color: darkblue; " +
                "padding: 3px;border: 1px solid gold; " +
                "font-size: large; font-weight: bold; " +
                "font-family: 'The Led Display St', sans-serif; " +
                "color: gold; width: 45px; height: 25px"
            Chorusdisplay.textContent = ''
            label.appendChild(Chorusdisplay)
            break;
        case 'reverb':
            knob.title = `reverb`; //id
            knob.id = `reverb`; //id
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/blauw.png");
            knob.setAttribute('data-sprites', '100')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.step = '0.01'
            knob.value = '0';
            knob.min = '0';
            knob.max = '1';
            // led display
            let Reverbdisplay = document.createElement('div')
            Reverbdisplay.setAttribute('id', 'Reverbdisplay')
            Reverbdisplay.style="background-color: darkblue; " +
                "padding: 3px;border: 1px solid gold; " +
                "font-size: large; font-weight: bold; " +
                "font-family: 'The Led Display St', sans-serif; " +
                "color: gold; width: 45px; height: 25px"
            Reverbdisplay.textContent = ''
            label.appendChild(Reverbdisplay)
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
        case 'tune':
            knob.setAttribute('data-diameter', '40');
            knob.setAttribute("type", "range");
            knob.setAttribute("data-fgcolor", "#00ff00");
            knob.setAttribute('class', "input-knob");
            knob.title = `pitch${counter}`; //id
            knob.id = `pitch${counter}`; //id
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
            knob.title = `pan${counter}`;
            knob.id = `pan${counter}`; //id
            knob.value = '0';
            knob.min = '-1';
            knob.max = '1';
            knob.step = '0.01';
            break;
        case 'volume':
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/blauw.png");
            knob.setAttribute('data-sprites', '100')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.title = `GRAND MASTER VOLUME`;
            knob.id = `masterVolume`;
            knob.value = '0';
            knob.min = '-60';
            knob.max = '0';
            knob.step = '0.01';
            // led display
            let voldisplay = document.createElement('div')
            voldisplay.setAttribute('id', 'VolumeDisplay')
            voldisplay.style="background-color: darkblue; " +
                "padding: 3px;border: 1px solid gold; " +
                "font-size: large; font-weight: bold; " +
                "font-family: 'The Led Display St', sans-serif; " +
                "color: gold; width: 60px; height: 25px"

            voldisplay.textContent = ''
            label.appendChild(voldisplay)

            break;
        case 'tempo':
            knob.setAttribute('data-diameter', '130');
            // knob.setAttribute('data-src', "./images/knob_70_white.png");
            knob.setAttribute('data-src', "images/blauw.png");
            knob.setAttribute('data-sprites', '100');
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.title = `tempo`; //id
            knob.id = `tempo`; //id
            knob.value = '175';
            knob.min = '85';
            knob.max = '220';
            knob.step = '1';
            // led display
            let BPMdisplay = document.createElement('div')
            BPMdisplay.setAttribute('id', 'BPMDisplay')
            BPMdisplay.style="background-color: darkblue; " +
                             "padding: 3px;border: 1px solid gold; " +
                             "font-size: large; font-weight: bold; " +
                             "font-family: 'The Led Display St', sans-serif; " +
                             "color: gold; width: 45px; height: 25px"
            BPMdisplay.textContent = ''
            label.appendChild(BPMdisplay)
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
            knob.step = '0.01'
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
            knob.step = '0.01'
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
            knob.step = '0.01'
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
            knob.step = '0.01'
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
            knob.step = '0.01'
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
            knob.step = '0.01'
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
            knob.step = '0.01'
            knob.setAttribute('data-sprites', '2');
            knob.setAttribute('data-diameter', '35');
            knob.className = 'input-switch';
            knob.setAttribute('data-src', '/images/switch_offon.png');
            knob.setAttribute("type", "radio");
            break;
    }

    knob.oninput = function () {
        console.log(`%cvalue for %c${this.id} %c${this.value}`,
            "color: blue; font-style: italic; background-color: yellow;padding: 2px",
            "color: red; font-style: italic; background-color: yellow;padding: 2px",
            // "color:orange; font-style: italic; background-color: yellow;padding: 2px",
            "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow");
        setup(this.value, this.id)
    }

    knob.onchange = function () {
        console.log(`%cvalue for %c${this.id} %c${this.value}`,
            "color: blue; font-style: italic; background-color: yellow;padding: 2px",
            "color: red; font-style: italic; background-color: yellow;padding: 2px",
            // "color:orange; font-style: italic; background-color: yellow;padding: 2px",
            "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow");
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

}



function createEventlisteners(){
    // mute0.addEventListener('change', ()=>{
    //     if(document.getElementById('mute0').checked){
    //         console.log('kick muted')
    //         keys.player('kick').muted=true
    //     } else {
    //         keys.player('kick').muted=false
    //         console.log('kick unmuted')
    //     }
    // })
    // mute1.addEventListener('change', ()=>{
    //     if(mute1.checked){
    //         keys.player('snare').mute=true
    //         console.log('snare muted')
    //     } else {
    //         keys.player('snare').mute=false
    //         console.log('snare unmuted')
    //     }
    //
    // })
    // mute2.addEventListener('change', ()=>{
    //     if(mute2.checked){
    //         keys.player('hihat').mute=true
    //         console.log('hihat muted')
    //     } else {
    //         keys.player('hihat').mute=false
    //         console.log('hihat unmuted')
    //     }
    //
    // })
    // mute3.addEventListener('change', ()=>{
    //     if(mute3.checked){
    //         keys.player('clap').mute=true
    //         console.log('clap muted')
    //     } else {
    //         keys.player('clap').mute=false
    //         console.log('clap unmuted')
    //     }
    //
    // })
    // mute4.addEventListener('change', ()=>{
    //     if(mute4.checked){
    //         keys.player('crash').mute=true
    //         console.log('crash muted')
    //     } else {
    //         keys.player('crash').mute=false
    //         console.log('crash unmuted')
    //     }
    //
    // })
    // mute5.addEventListener('change', ()=>{
    //     if(mute5.checked){
    //         keys.player('shaker').mute=true
    //         console.log('shaker muted')
    //     } else {
    //         keys.player('shaker').mute=false
    //         console.log('shaker unmuted')
    //     }
    //
    // })
    // mute6.addEventListener('change', ()=>{
    //     if(mute6.checked){
    //         keys.player('tom1').mute=true
    //         console.log('tom1 muted')
    //     } else {
    //         keys.player('tom1').mute=false
    //         console.log('tom1 unmuted')
    //     }
    //
    // })
    // mute7.addEventListener('change', ()=>{
    //     if(mute7.checked){
    //         keys.player('tom2').mute=true
    //         console.log('tom2 muted')
    //     } else {
    //         keys.player('tom2').mute=false
    //         console.log('tom2 unmuted')
    //     }
    //
    // })
    // mute8.addEventListener('change', ()=>{
    //     if(mute8.checked){
    //         keys.player('tom3').mute=true
    //         console.log('tom3 muted')
    //     } else {
    //         keys.player('tom3').mute=false
    //         console.log('tom3 unmuted')
    //     }
    //
    // })
    // mute9.addEventListener('change', ()=>{
    //     if(mute9.checked){
    //         keys.player('rCrash').mute=true
    //         console.log('reverse crash muted')
    //     } else {
    //         keys.player('rCrash').mute=false
    //         console.log('reverse crash unmuted')
    //     }
    // })

    // document.getElementById('solo0').addEventListener('change', ()=>{
    //     if(document.getElementById('solo0').checked){
    //         chan_kick.solo=true
    //         console.log('kick solo')
    //     } else {
    //         chan_kick.solo=false
    //         console.log('unsolo')
    //     }
    // })
    // solo1.addEventListener('change', ()=>{
    //     if(solo1.checked){
    //         keys.player('snare').solo=true
    //         console.log('snare solo')
    //     } else {
    //         keys.player('snare').solo=false
    //         console.log('snare unsolo')
    //     }
    //
    // })
    // solo2.addEventListener('change', ()=>{
    //     if(solo2.checked){
    //         keys.player('hihat').solo=true
    //         console.log('hihat solo')
    //     } else {
    //         keys.player('hihat').solo=false
    //         console.log('hihat unsolo')
    //     }
    //
    // })
    // solo3.addEventListener('change', ()=>{
    //     if(solo3.checked){
    //         keys.player('clap').solo=true
    //         console.log('clap solo')
    //     } else {
    //         keys.player('clap').solo=false
    //         console.log('clap unsolo')
    //     }
    //
    // })
    // solo4.addEventListener('change', ()=>{
    //     if(solo4.checked){
    //         keys.player('crash').solo=true
    //         console.log('crash solo')
    //     } else {
    //         keys.player('crash').solo=false
    //         console.log('crash unsolo')
    //     }
    //
    // })
    // solo5.addEventListener('change', ()=>{
    //     if(solo5.checked){
    //         keys.player('shaker').solo=true
    //         console.log('shaker solo')
    //     } else {
    //         keys.player('shaker').solo=false
    //         console.log('shaker unsolo')
    //     }
    //
    // })
    // solo6.addEventListener('change', ()=>{
    //     if(solo6.checked){
    //         keys.player('tom1').solo=true
    //         console.log('tom1 solo')
    //     } else {
    //         keys.player('tom1').solo=false
    //         console.log('tom1 unsolo')
    //     }
    //
    // })
    // solo7.addEventListener('change', ()=>{
    //     if(solo7.checked){
    //         keys.player('tom2').solo=true
    //         console.log('tom2 solo')
    //     } else {
    //         keys.player('tom2').solo=false
    //         console.log('tom2 unsolo')
    //     }
    //
    // })
    // solo8.addEventListener('change', ()=>{
    //     if(solo8.checked){
    //         keys.player('tom3').solo=true
    //         console.log('tom3 solo')
    //     } else {
    //         keys.player('tom3').solo=false
    //         console.log('tom3 unsolo')
    //     }
    //
    // })
    // solo9.addEventListener('change', ()=>{
    //     if(solo9.checked){
    //         keys.player('rCrash').solo=true
    //         console.log('reverse crash solo')
    //     } else {
    //         keys.player('rCrash').solo=false
    //         console.log('reverse crash unsolo')
    //     }
    // })
    //
}
