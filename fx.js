// ========================================= Here begins the routing of the audio =====================================================
const recorder = new Tone.Recorder();
// Volume channel goes to speakers
let channel = new Tone.Channel().toDestination();
const compressor = new Tone.Compressor().connect(channel);
const mainDistortion = new Tone.Distortion({distortion: 0, oversample: "4x"})
// const lowpass = new Tone.BiquadFilter()
// lowpass.type = 'lowpass'
// console.log('lowpass', lowpass.get())
// lowpass.frequency.value = 440
// lowpass.q.value = 10
//
// const highpass = new Tone.BiquadFilter()
// highpass.hiPassVal = 200
// highpass.type = 'highpass'
// console.log('highpass', highpass.get())
// highpass.frequency.value = highpass.hiPassVal
// highpass.q.value = 0
//
// const bandpass = new Tone.BiquadFilter()
// bandpass.type = 'bandpass'
// bandpass.frequency.value = bandpass.hiPassVal
// bandpass.q.value = 0
//
// biquadFilter.connect(compressor)
// biquadFilter.hiPassFilter.connect(compressor)
// biquadFilter2.connect(compressor)

// types:
/*
"lowpass"
"highpass"
"bandpass"
"lowshelf"
"highshelf"
"peaking"
"notch"
"allpass"

 */
mainDistortion.connect(compressor)

const pitchShift = new Tone.PitchShift({pitch: 0, windowSize: 0.9, delayTime: 0, feedback: 0.7}).connect(mainDistortion);
const chorus = new Tone.Chorus().connect(compressor);
const phaser = new Tone.Phaser().connect(compressor);
const reverb = new Tone.Reverb().connect(compressor);
// const feedbackDelay = new Tone.FeedbackDelay().connect(compressor);
// const pingPong = new Tone.PingPongDelay("4n", 0.6);
// const soloChannel = new Tone.Solo();
// soloChannel.connect(compressor)

const filter = new Tone.FeedbackCombFilter()
filter.set({delayTime: '4n', resonance: 1})
filter.connect(compressor)
console.log('filter', filter.get())

function setPlayer(p, bReverse = false) {
    if (bReverse) {
        p.reverse = true
        p.playbackRate = 1
        console.log('player ', p, 'reversed', p.reverse, 'playbackRate', p.playbackRate)
    }
    showSomeHelpInConsole('        ', p.name, p.value)
    // p.connect(compressor)
    return p
    // }
}

//This is still the original keys player. I just separated the instruments so that I can connect them to their own channel/gainNode.
const keys = new Tone.Players({
    urls: {}
});
keys.connect(recorder)
// keys.connect(compressor)
//separate pitchTuners
const pitchk = new Tone.PitchShift({pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0})
const pitchsn = new Tone.PitchShift({pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0})
const pitchhh = new Tone.PitchShift({pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0})
const pitchcl = new Tone.PitchShift({pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0})
const pitchcr = new Tone.PitchShift({pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0})
const pitchsh = new Tone.PitchShift({pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0})
const pitcht1 = new Tone.PitchShift({pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0})
const pitcht2 = new Tone.PitchShift({pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0})
const pitcht3 = new Tone.PitchShift({pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0})
const pitchrc = new Tone.PitchShift({pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0})

//separate distortion
const distk = new Tone.Distortion({distortion: 0, oversample: "2x"}).connect(pitchk)
const distsn = new Tone.Distortion({distortion: 0, oversample: "2x"}).connect(pitchsn)
const disthh = new Tone.Distortion({distortion: 0, oversample: "2x"}).connect(pitchhh)
const distcl = new Tone.Distortion({distortion: 0, oversample: "2x"}).connect(pitchcl)
const distcr = new Tone.Distortion({distortion: 0, oversample: "2x"}).connect(pitchcr)
const distsh = new Tone.Distortion({distortion: 0, oversample: "2x"}).connect(pitchsh)
const distt1 = new Tone.Distortion({distortion: 0, oversample: "2x"}).connect(pitcht1)
const distt2 = new Tone.Distortion({distortion: 0, oversample: "2x"}).connect(pitcht2)
const distt3 = new Tone.Distortion({distortion: 0, oversample: "2x"}).connect(pitcht3)
const distrc = new Tone.Distortion({distortion: 0, oversample: "2x"}).connect(pitchrc)

//separate players
const kick = new Tone.Player('samples/kick.mp3')
const snare = new Tone.Player('samples/snare.mp3')
const hihat = new Tone.Player('samples/hihat.mp3')
const clap = new Tone.Player('samples/clap.mp3')
const crash = new Tone.Player('samples/crash.mp3')
const shaker = new Tone.Player('samples/shaker.mp3')
const tom1 = new Tone.Player('samples/tom1.mp3')
const tom2 = new Tone.Player('samples/tom2.mp3')
const tom3 = new Tone.Player('samples/tom3.mp3')
const rCrash = new Tone.Player('samples/crash.mp3')


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


// distk.connect(pitchk)
// distsn.connect(pitchsn)
// disthh.connect(pitchhh)
// distcl.connect(pitchcl)
// distcr.connect(pitchcr)
// shaker.connect(pitchsh)
// distt1.connect(pitcht1)
// distt2.connect(pitcht2)
// distt3.connect(pitcht3)
// distrc.connect(pitchrc)

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
// console.log(keys.player('kick'))
keys.player('kick').connect(distk)
keys.player('snare').connect(distsn)
keys.player('hihat').connect(disthh)
keys.player('clap').connect(distcl)
keys.player('crash').connect(distcr)
keys.player('shaker').connect(distsh)
keys.player('tom1').connect(distt1)
keys.player('tom2').connect(distt2)
keys.player('tom3').connect(distt3)
keys.player('rCrash').connect(distrc)
// console.log(keys)

//separate channels
const chan_kick = new Tone.Channel().connect(compressor)
const chan_snare = new Tone.Channel().connect(compressor)
const chan_hihat = new Tone.Channel().connect(compressor)
const chan_clap = new Tone.Channel().connect(compressor)
const chan_crash = new Tone.Channel().connect(compressor)
const chan_shaker = new Tone.Channel().connect(compressor)
const chan_tom1 = new Tone.Channel().connect(compressor)
const chan_tom2 = new Tone.Channel().connect(compressor)
const chan_tom3 = new Tone.Channel().connect(compressor)
const chan_rCrash = new Tone.Channel().connect(compressor)

pitchk.connect(chan_kick)
pitchsn.connect(chan_snare)
pitchhh.connect(chan_hihat)
pitchcl.connect(chan_clap)
pitchcr.connect(chan_crash)
pitchsh.connect(chan_shaker)
pitcht1.connect(chan_tom1)
pitcht2.connect(chan_tom2)
pitcht3.connect(chan_tom3)
pitchrc.connect(chan_rCrash)

// pitchShift.connect(mainDistortion)
// mainDistortion.connect(chorus)
chorus.connect(phaser)
phaser.connect(reverb)
reverb.connect(pitchShift)
keys.connect(chorus)


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

//compressor
document.getElementById('attack').oninput = function () {
    compressor.set({attack: document.getElementById('attack').value})
}
document.getElementById('knee').oninput = function () {
    compressor.set({knee: document.getElementById('knee').value})
}
document.getElementById('ratio').oninput = function () {
    compressor.set({ratio: document.getElementById('ratio').value})
}
document.getElementById('release').oninput = function () {
    compressor.set({release: document.getElementById('release').value})
}
document.getElementById('threshold').oninput = function () {
    compressor.set({threshold: document.getElementById('threshold').value})
}
document.getElementById('attack').onchange = function () {
    compressor.set({attack: document.getElementById('attack').value})
}
document.getElementById('knee').onchange = function () {
    compressor.set({knee: document.getElementById('knee').value})
}
document.getElementById('ratio').onchange = function () {
    compressor.set({ratio: document.getElementById('ratio').value})
}
document.getElementById('release').onchange = function () {
    compressor.set({release: document.getElementById('release').value})
}
document.getElementById('threshold').onchange = function () {
    compressor.set({threshold: document.getElementById('threshold').value})
}


// =======================================  end audio routing =======================================================

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
    // drawPianoSampler()
    createPlayer('e2')
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
    // containerM.appendChild(createKnob('vumeter'));
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
    btn.id = name
    x.appendChild(btn)
    target.appendChild(x)
}

function setup(val, elementID) {

    // console.log(elementID)
    switch (elementID) {
        case 'masterVolume':
            document.getElementById('VolumeDisplay').textContent = val;
            document.getElementById('VolumeDisplay').title = 'grand volume (in decibel)'
            channel.volume.value = val;
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
            mainDistortion.oversample = '2x'
            mainDistortion.wet = 1
            console.log('main distortion level', mainDistortion.distortion)
            break;
        case 'distortion0':
            distk.distortion = val;
            distk.oversample = 'none';
            distk.wet = '1';
            console.log('distortion kick', distk.distortion)
            break;
        case 'distortion1':
            distsn.distortion = val;
            distsn.oversample = 'none';
            distsn.wet = '1';
            console.log('distortion snare', distsn.distortion)
            break;
        case 'distortion2':
            disthh.distortion = val;
            disthh.oversample = 'none';
            disthh.wet = '1';
            console.log('distortion hihat', disthh.distortion)
            break;
        case 'distortion3':
            distcl.distortion = val;
            distcl.oversample = 'none';
            distcl.wet = '1';
            console.log('distortion clap', distcl.distortion)
            break;
        case 'distortion4':
            distcr.distortion = val;
            distcr.oversample = 'none';
            distcr.wet = '1';
            console.log('distortion crash', distcr.distortion)
            break;
        case 'distortion5':
            distsh.distortion = val;
            distsh.oversample = 'none';
            distsh.wet = '1';
            console.log('distortion shaker', distsh.distortion)
            break;
        case 'distortion6':
            distt1.distortion = val;
            distt1.oversample = 'none';
            distt1.wet = '1';
            console.log('distortion tom1', distt1.distortion)
            break;
        case 'distortion7':
            distt2.distortion = val;
            distt2.oversample = 'none';
            distt2.wet = '1';
            console.log('distortion tom2', distt2.distortion)
            break;
        case 'distortion8':
            distt3.distortion = val;
            distt3.oversample = 'none';
            distt3.wet = '1';
            console.log('distortion tom3', distt3.distortion)
            break;
        case 'distortion9':
            distrc.distortion = val;
            distrc.oversample = 'none';
            distrc.wet = '1';
            console.log('distortion reverse crash', distrc.distortion)
            break;
        case 'pitch':
            /*
            PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
            speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
            */
            omniOsc.detune.value = val;
            // pitchShift.delayTime = val/12;
            // pitchShift.feedback = val/40;
            break;
        case 'pitch0':
            pitchk.pitch = val;
            // pitchk.delayTime = .6;
            // pitchk.feedback = .9;
            break;
        case 'pitch1':
            pitchsn.pitch = val;
            // pitchsn.delayTime = .6
            // pitchsn.feedback = .9;
            break;
        case 'pitch2':
            pitchhh.pitch = val;
            // pitchhh.delayTime = .6
            // pitchhh.feedback = .9;
            break;
        case 'pitch3':
            pitchcl.pitch = val;
            // pitchcl.delayTime = .6
            // pitchcl.feedback = .9;
            break;
        case 'pitch4':
            pitchcr.pitch = val;
            // pitchcr.delayTime = .6
            // pitchcr.feedback = .9;
            break;
        case 'pitch5':
            pitchsh.pitch = val;
            // pitchsh.delayTime = .6
            // pitchsh.feedback = .9;
            break;
        case 'pitch6':
            pitcht1.pitch = val;
            // pitcht1.delayTime = .6
            // pitcht1.feedback =.9;
            break;
        case 'pitch7':
            pitcht2.pitch = val;
            // pitcht2.delayTime = .6
            // pitcht2.feedback = .9;
            // console.log('pitch', pitchShift.pitch);
            break;
        case 'pitch8':
            pitcht3.pitch = val;
            // pitcht3.delayTime = .6
            // pitcht3.feedback = .9;
            break;
        case 'pitch9':
            pitchrc.pitch = val;
            // pitchrc.delayTime = .6
            // pitchrc.feedback = .9;
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
            chan_kick.connect(Tone.Destination)
            // chan_kick.solo = !!
                if(document.getElementById('solo0').checked === true) {
                    chan_kick.solo = true
                } else {
                    chan_kick.solo = false
                }
            break;
        case 'solo1':
            chan_snare.connect(Tone.Destination)
            if (document.getElementById('solo1').checked ===true) {
                chan_snare.solo = true
            } else {
                chan_snare.solo = false
            }
            // chan_snare.solo = !!document.getElementById('solo1').checked;
            break;
        case 'solo2':
            chan_hihat.connect(Tone.Destination)
            // chan_hihat.solo = !!
                if(document.getElementById('solo2').checked ===true) {
                    chan_hihat.solo = true
                } else {
                    chan_hihat.solo = false
                }
            break;
        case 'solo3':
            chan_clap.connect(Tone.Destination)
            if (document.getElementById('solo3').checked === true){
                chan_clap.solo = true
            } else {
                chan_clap.solo = false
            }
            // chan_clap.solo = !!document.getElementById('solo3').checked;
            break;
        case 'solo4':
            chan_crash.connect(Tone.Destination)
            if (document.getElementById('solo4').checked ===true) {
                chan_crash.solo = true
            } else {
                chan_crash.solo = false
            }
            // chan_crash.solo = !!document.getElementById('solo4').checked;
            break;
        case 'solo5':
            chan_shaker.connect(Tone.Destination)
            if (document.getElementById('solo5').checked ===true) {
                chan_shaker.solo = true
            }else {
                chan_shaker.solo = false
            }
            // chan_shaker.solo = !!document.getElementById('solo5').checked;
            break;
        case 'solo6':
            chan_tom1.connect(Tone.Destination)
            if (document.getElementById('solo6').checked ===true) {
                chan_tom1.solo = true
            } else {
                chan_tom1.solo = false
            }
            // chan_tom1.solo = !!document.getElementById('solo6').checked;
            break;
        case 'solo7':
            chan_tom2.connect(Tone.Destination)
            if (document.getElementById('solo7').checked ===true) {
                chan_tom2.solo = true
            } else {
                chan_tom2.solo = false
            }
            // chan_tom2.solo = !!document.getElementById('solo7').checked;
            break;
        case 'solo8':
            chan_tom3.connect(Tone.Destination)
            if (document.getElementById('solo8').checked ===true) {
                chan_tom3.solo = true
            } else {
                chan_tom3.solo = false
            }
            // chan_tom3.solo = !!document.getElementById('solo8').checked;
            break;
        case 'solo9':
            chan_rCrash.connect(Tone.Destination)
            if (document.getElementById('solo9').checked ===true) {
                chan_rCrash.solo = true
            } else {
                chan_rCrash.solo = false
            }
            // chan_rCrash.solo = !!document.getElementById('solo9').checked;
            break;
        case 'pan0':
            chan_kick.pan.value = val
            break;
        case 'pan1':
            chan_snare.pan.value = val
            break;
        case 'pan2':
            chan_hihat.pan.value = val
            break;
        case 'pan3':
            chan_clap.pan.value = val
            break;
        case 'pan4':
            chan_crash.pan.value = val
            break;
        case 'pan5':
            chan_shaker.pan.value = val
            break;
        case 'pan6':
            chan_tom1.pan.value = val
            break;
        case 'pan7':
            chan_tom2.pan.value = val
            break;
        case 'pan8':
            chan_tom3.pan.value = val
            break;
        case 'pan9':
            chan_rCrash.pan.value = val
            break;
        case 'phaser':
            document.getElementById('Phaserdisplay').textContent = val;
            phaser.set({ frequency: val });
            break;
        case 'chorus':
            document.getElementById('Chorusdisplay').textContent = val;
            chorus.set({ depth: val })
            break;
        case 'reverb':
            document.getElementById('Reverbdisplay').textContent = val;
            // reverb.get()
            reverb.set({
                decay: val,
                preDelay: val / 5,
                wet: 1
            })
            break;
        case 'cutoff':
            console.log('cutoff', omniOsc.phase.value)
            omniOsc.phase.value = val;
            break;
        case 'resonance':
            console.log('resonance', filter.resonance.value)
            filter.resonance.value = val;
            break;
        case 'envmod':
            console.log('envmod', omniOsc.modulationFrequency.value)
            // omniOsc.modulationFrequency.value = val;
            omniOsc.modulationFrequency = val;
            break;
        case 'decay':
            console.log('decay', filter.delayTime.value)
            filter.delayTime.value = val
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
            knob.style = 'opacity:10%'
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
            target.appendChild(label)
            knob.onchange = function () {
                console.log(`%cvalue for %c${this.id} %cchecked ${this.checked}`,
                    "color: blue; font-style: italic; background-color: yellow;padding: 2px",
                    "color: red; font-style: italic; background-color: yellow;padding: 2px",
                    // "color:orange; font-style: italic; background-color: yellow;padding: 2px",
                    "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow");
                setup(this.checked, this.id)
            }
            knob.oninput = function () {
                console.log(`%cvalue for %c${this.id} %cchecked ${this.checked}`,
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
            target.appendChild(label)
            knob.oninput = function () {
                console.log(`%cvalue for %c${this.id} %cchecked ${this.checked}`,
                    "color: blue; font-style: italic; background-color: yellow;padding: 2px",
                    "color: red; font-style: italic; background-color: yellow;padding: 2px",
                    // "color:orange; font-style: italic; background-color: yellow;padding: 2px",
                    "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 3px solid yellow");
                setup(this.checked, this.id)
            }
            knob.onchange = function () {
                console.log(`%cvalue for %c${this.id} %cchecked ${this.checked}`,
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
            knob.min = '0';
            knob.max = '10';
            knob.step = '0.01';
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
            Disortiondisplay.style = "background-color: darkblue; " +
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
            Phaserdisplay.style = "background-color: darkblue; " +
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
            Chorusdisplay.style = "background-color: darkblue; " +
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
            knob.value = '0.01';
            knob.min = '0.01';
            knob.max = '2';
            // led display
            let Reverbdisplay = document.createElement('div')
            Reverbdisplay.setAttribute('id', 'Reverbdisplay')
            Reverbdisplay.style = "background-color: darkblue; " +
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
            knob.step = '0.01';
            break;
        case 'tune':
            knob.setAttribute('data-diameter', '40');
            knob.setAttribute("type", "range");
            knob.setAttribute("data-fgcolor", "#00ff00");
            knob.setAttribute('class', "input-knob");
            knob.title = `pitch${counter}`; //id
            knob.id = `pitch${counter}`; //id
            knob.value = '0';
            knob.min = '-12';
            knob.max = '12';
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
            voldisplay.style = "background-color: darkblue; " +
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
            BPMdisplay.style = "background-color: darkblue; " +
                "padding: 3px;border: 1px solid gold; " +
                "font-size: large; font-weight: bold; " +
                "font-family: 'The Led Display St', sans-serif; " +
                "color: gold; width: 45px; height: 25px"
            BPMdisplay.textContent = ''
            label.appendChild(BPMdisplay)
            break;
        case 'cut/off':
            knob.title = 'cutoff'
            knob.id = 'cutoff'
            knob.setAttribute('data-diameter', '130');
            knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
            knob.setAttribute('data-sprites', '99')
            knob.setAttribute("type", "range");
            knob.setAttribute('class', "input-knob");
            knob.value = '0';
            knob.min = '0';
            knob.max = '360';
            knob.step = '1'
            break;
        case 'resonance':
            knob.title= 'resonance'
            knob.id= 'resonance'
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
            knob.title = 'envmod'
            knob.id = 'envmod'
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
            knob.title = 'decay'
            knob.id = 'decay'
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
            knob.min = '-1200';
            knob.max = '1200';
            knob.step = '1';
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
        if(value==='e2'){
            light.className = "light active";
            // console.log('e2')
        }
    }

    container1.appendChild(container2);
    target.appendChild(container1)
    // return container1;
}

