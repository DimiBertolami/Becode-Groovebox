const {Tone} = require("./Tone");
let counter = 0;
let pcount = 0;
let context;
let bufferLoader;
let BUFFERS = {};
let VolumeMain = {};
let dry1, dry2, dry3;
let wet1, wet2, wet3;
let mainDry;
let mainWet;
let source1, source2, source3;
let lowpassFilter;
let waveShaper;
let panner;
let LowPFilter = {FREQ_MUL: 7000, QUAL_MUL: 30};
const SampleBufferURLs = {
    kick: 'samples/kick.mp3',
    snare: 'samples/snare.mp3',
    hihat: 'samples/hihat.mp3',
    clap: 'samples/clap.mp3',
    crash: 'samples/crash.mp3',
    shaker: 'samples/crash.mp3',
    tom1: 'samples/shaker.mp3',
    tom2: 'samples/tom1.mp3',
    tom3: 'samples/tom2.mp3',
    rCrash: 'samples/tom2.mp3',
}

function setupRoutingGraph() {
    context = new AudioContext();
    context.prototype.dataTypes.
    // Create the effects nodes.
    lowpassFilter = context.createBiquadFilter();
    waveShaper = context.createWaveShaper();
    panner = context.createPanner();
    compressor = context.createDynamicsCompressor();
    reverb = context.createConvolver();
    // var tuna = new Tuna(Tone.context);
    // var tuna2 = new Tuna(context);
    // Create main wet and dry.
    mainDry = context.createGain();
    mainWet = context.createGain();
    // Connect final compressor to final destination.
    compressor.connect(context.destination);
    // Connect main dry and wet to compressor.
    mainDry.connect(compressor);
    mainWet.connect(compressor);
    // Connect reverb to main wet.
    reverb.connect(mainWet);
    // Create a few sources.
    source1 = context.createBufferSource();
    source2 = context.createBufferSource();
    source3 = context.createOscillator();
    source1.buffer = manTalkingBuffer;
    source2.buffer = footstepsBuffer;
    source3.frequency.value = 440;
    // Connect source1
    dry1 = context.createGain();
    wet1 = context.createGain();
    source1.connect(lowpassFilter);
    lowpassFilter.connect(dry1);
    lowpassFilter.connect(wet1);
    dry1.connect(mainDry);
    wet1.connect(reverb);
    // Connect source2
    dry2 = context.createGain();
    wet2 = context.createGain();
    source2.connect(waveShaper);
    waveShaper.connect(dry2);
    waveShaper.connect(wet2);
    dry2.connect(mainDry);
    wet2.connect(reverb);
    // Connect source3
    dry3 = context.createGain();
    wet3 = context.createGain();
    source3.connect(panner);
    panner.connect(dry3);
    panner.connect(wet3);
    dry3.connect(mainDry);
    wet3.connect(reverb);
    // Start the sources now.
    source1.start(0);
    source2.start(0);
    source3.start(0);
    }

    function AudioWorker() {
        return {
            ac: () => new AudioContext(),
            getContext: () => self.context,
            newChannel: () => new Tone.Channel(),
            newGainNode: context => new GainNode(context),
            newBuffer: () => new Tone.Buffer(),
            TAudioB: url => new Tone.ToneAudioBuffer(url, () => {
                console.log(`${url}  loaded in to audio buffer`)
            }),
            newPlayer: (url) => new Tone.Player(url).sync().start(+0.5).stop(5),
            LowPFilter: () => {7000, 30},
            newDistortion: () => ac.createWaveShaper(),
            newReverb: (value = 2) => new Tone.Reverb({
                decay: value,
                preDelay: value / 6,
                wet: 1
            }),
            newChorus: (NormalRange = 0.7, Frequency = 2.3, delayTime = 0.5, spread = 270) => new Tone.Chorus({
                depth: NormalRange,
                feedback: NormalRange,
                wet: NormalRange,
                delayTime: delayTime,
                frequency: Frequency,
                spread: spread,
                type: "sine"
                // context : ac,
            }),
            newPitchShift: (feedback = 0.7, pitch = -12, delayTime = 0.5) => new Tone.PitchShift({
                delayTime: delayTime,
                feedback: parseInt(feedback),  //0 to 1
                pitch: pitch,  //-24 is decrease pitch by 2 octaves, 5 = up by a fifth note
                wet: 1,        //0 = no effect passthrough to 1 = 100% passthrough
                windowSize: 2, //in seconds
            })
        }

        const target = document.getElementById('target')


        const AudioFactory = new AudioWorker()
        // const ac = audioCTX;
        const ac = () => AudioWorker.ac()

        let MainGainNode = AudioFactory.newGainNode(ac)
        console.log(MainGainNode)
        // let LowPFilter = AudioFactory.LowPFilter();
        const MainChannel = MainGainNode.toDestination();
        // const FXmerger = (inputs) => ac.createChannelMerger(numberOfInputs = inputs)
        const BEATmerger = () => ac.createChannelMerger(10)

        const play = (p) => p.start('+1').stop(+4);
        const stop = (p) => p.stop(0);
        const volumeUp = (p) => ++p.volume.value;
        const volumeDown = (p) => --p.volume.value;
        const ToneAudioBuffer = url => AudioFactory.TAudioB(url);
        const cmFX = (player, buffer, effect, outputTo = BEATmerger(10)) => {
            console.log('player', player)
            console.log('buffy', buffer)
            console.log('out', outputTo)
            console.log('fx', effect)

            function playNode(buffer) {
                // return {
                //     buffSRC: ac.createBufferSource(),
                //     SRCBuff: buffer => source.buffer = buffer,
                //     player: AudioFactory.newPlayer(buffer),
                //     GainNodeCmFx: ac.createGain(),
                //     fx: effect,
                //     conSRC2Gain: source.connect(GainNodeCmFx),
                //     conSRC2FX: source.connect(fx),
                //     gain2SPKR: GainNodeCmFx.connect(ac.destination),
                //     fx2SPKR: fx.connect(ac.destination),
                //     play: source.start(+0.3),
                //     // console.log('GainNode', GainNodeCmFx)
                //     // player.connect(effect)
                //     // player.connect(GainNodeCmFx)
                //     keys.add(`${player}${pcount++}`, buffer),
                //     console.log('keys check it out', keys),
                //     // showSomeHelpInConsole(player,buffer.url)
            }
        }
    }

// kickAudioBuffer = ToneAudioBuffer('samples/kick.mp3');

// const SYNTHmerger = () => ac.createChannelMerger({numbeOfInputs: 10})

    function makeDistortionCurve(amount) {
        const k = typeof amount === 'number' ? amount : 50;
        const n_samples = 44100;
        const curve = new Float32Array(n_samples);
        const deg = Math.PI / 180;

        for (let i = 0; i < n_samples; i++) {
            const x = i * 2 / n_samples - 1;
            curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
        }
        return curve;
    };

    function loadBuffers() {
        let names = [];
        let paths = [];
        for (let name in SampleBufferURLs) {
            let Buffpath = SampleBufferURLs[name];
            names.push(name);
            paths.push(Buffpath);
        }
        bufferLoader = new BufferLoader(context, paths, function (bufferList) {
            for (let i = 0; i < bufferList.length; i++) {
                let buffer = bufferList[i];
                let name = names[i];
                BUFFERS[name] = buffer;
            }
        })
        bufferLoader.load();
    }

    document.addEventListener('DOMContentLoaded', function () {
        try {
            // Fix up prefixing
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            context = new AudioContext();
        } catch (e) {
            document.createElement('h3').textContent = 'web audio API is not supported'
            alert("Web Audio API appears not to work on this computer or browser or os");
        }
        loadBuffers();
    });
// Start off by initializing a new context.
    context = new (window.AudioContext || window.webkitAudioContext)();

    if (!context.createGain)
        context.createGain = context.createGainNode;
    if (!context.createDelay)
        context.createDelay = context.createDelayNode;
    if (!context.createScriptProcessor)
        context.createScriptProcessor = context.createJavaScriptNode;


// shim layer with setTimeout fallback
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    function BufferLoader(context, urlList, callback) {
        this.context = context;
        this.urlList = urlList;
        this.onload = callback;
        this.bufferList = new Array();
        this.loadCount = 0;
    }

    BufferLoader.prototype.loadBuffer = function (url, index) {
        // Load buffer asynchronously
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";

        let loader = this;

        request.onload = function () {
            // Asynchronously decode the audio file data in request.response
            loader.context.decodeAudioData(
                request.response,
                function (buffer) {
                    if (!buffer) {
                        alert('error decoding file data: ' + url);
                        return;
                    }
                    loader.bufferList[index] = buffer;
                    if (++loader.loadCount == loader.urlList.length)
                        loader.onload(loader.bufferList);
                },
                function (error) {
                    console.error('decodeAudioData error', error);
                }
            );
        }

        request.onerror = function () {
            alert('BufferLoader: XHR error');
        }

        request.send();
    };

    BufferLoader.prototype.load = function () {
        for (let i = 0; i < this.urlList.length; ++i)
            this.loadBuffer(this.urlList[i], i);
    }

    LowPFilter.changeFrequency = function (element) {
        // Clamp the frequency between the minimum value (40 Hz) and half of the
        // sampling rate.
        var minValue = 40;
        var maxValue = context.sampleRate / 2;
        // Logarithm (base 2) to compute how many octaves fall in the range.
        var numberOfOctaves = Math.log(maxValue / minValue) / Math.LN2;
        // Compute a multiplier from 0 to 1 based on an exponential scale.
        var multiplier = Math.pow(2, numberOfOctaves * (element.value - 1.0));
        // Get back to the frequency value between min and max.
        this.filter1.frequency.value = maxValue * multiplier;
    };

    LowPFilter.changeQuality = function (element) {
        this.filter1.Q.value = element.value * this.QUAL_MUL
    };

    LowPFilter.toggleFilter = function (element) {
        this.source.disconnect(0);
        this.filter1.disconnect(0);
        // Check if we want to enable the filter.
        if (element.checked) {
            // Connect through the filter.
            this.source.connect(this.filter1);
            this.filter1.connect(context.destination);
        } else {
            // Otherwise, connect directly.
            this.source.connect(context.destination);
        }
    };

    function Beat1() {
        this.isPlaying = false;
    };

    Beat1.prototype.play = function () {
        this.gainNode = context.createGain();
        this.source = context.createBufferSource();
        this.source.buffer = BUFFERS.Beat1;

        // Connect source to a gain node
        this.source.connect(this.gainNode);
        // Connect gain node to destination
        this.gainNode.connect(context.destination);
        // Start playback in a loop
        this.source.loop = true;
        this.source[this.source.start ? 'start' : 'noteOn'](0);
    };

    Beat1.prototype.changeVolume = function (element) {
        let volume = element.value;
        let fraction = parseInt(element.value) / parseInt(element.max);
        // Let's use an x*x curve (x-squared) since simple linear (x) does not
        // sound as good.
        this.gainNode.gain.value = fraction * fraction;
    };

    Beat1.prototype.stop = function () {
        this.source[this.source.stop ? 'stop' : 'noteOff'](0);
    };

    Beat1.prototype.toggle = function () {
        this.isPlaying ? this.stop() : this.play();
        this.isPlaying = !this.isPlaying;
    };

// ################################################################################################################################
    function Beat2() {
        this.isPlaying = false;
    };

    Beat2.prototype.play = function () {
        this.gainNode = context.createGain();
        this.source = context.createBufferSource();
        this.source.buffer = BUFFERS.Beat2;

        // Connect source to a gain node
        this.source.connect(this.gainNode);
        // Connect gain node to destination
        this.gainNode.connect(context.destination);
        // Start playback in a loop
        this.source.loop = true;
        this.source[this.source.start ? 'start' : 'noteOn'](0);
    };

    Beat2.prototype.changeVolume = function (element) {
        let volume = element.value;
        let fraction = parseInt(element.value) / parseInt(element.max);
        // Let's use an x*x curve (x-squared) since simple linear (x) does not
        // sound as good.
        this.gainNode.gain.value = fraction * fraction;
    };

    Beat2.prototype.stop = function () {
        this.source[this.source.stop ? 'stop' : 'noteOff'](0);
    };

    Beat2.prototype.toggle = function () {
        this.isPlaying ? this.stop() : this.play();
        this.isPlaying = !this.isPlaying;
    };

    function playSound(buffer) {
        let source = context.createBufferSource();
        source.buffer = buffer;
        let filter1 = context.createBiquadFilter();
        filter1.type = 0;
        filter1.frequency.value = 5000;
        let gainNode = context.createGain();
        source.connect(gainNode);
        source.connect(filter1);
        gainNode.connect(context.destination);
        filter1.connect(context.destination);
        source.start(0);
    }

//volume control
    VolumeMain.gainNode = null;

    VolumeMain.changeVolume = function (element) {
        let volume = element.value;
        let fraction = parseInt(element.value) / parseInt(element.max);
        gainNode.gain.value = fraction * fraction;
        console.log(gainNode.gain.value);      // Console log of gain value when slider is moved
    };


    distortion.curve = makeDistortionCurve(400);
    switch (distortion.oversample) {
        case 'none':
            distortion.oversample = '2x';
            break;
        case '2x':
            distortion.oversample = '4x';
            break;
        case '4x':
            distortion.oversample = 'none';
            break;
    }

// const MainDistortion = AudioFactory.newDistortion().toDestination();


    const PitchShift = AudioFactory.newPitchShift(0.3).toDestination();
    const MainChorus = AudioFactory.newChorus().toDestination();
    const MainPhaser = AudioFactory.newPhaser().toDestination();
    const MainReverb = AudioFactory.newReverb().toDestination();

    keys.fan(MainDistortion, PitchShift, MainChorus, MainPhaser, MainReverb)

//
// play and stop are self explanatory i suppose.. they start/stop a given player
//volumeUp with a player as parameter will increase the volume by 1
//volumeDown with a player as parameter will decrease the volume by 1
//create and merge distortion(or any other fx) on the specified player

// reverseCrash.volume.value += 3;
// reverseCrash.toDestination()
// reverseCrash.autostart = true;
// reverseCrash.loop = true;
// reverseCrash.loopEnd = 5;
// reverseCrash.loopStart = 0;
// reverseCrash.playbackRate = 6;
// reverseCrash.onload = () => play(reverseCrash);
// console.log(playerX.get());

//  let bkick = AudioFactory.newBuffer().set('samples/kick.mp3')
// let bsnare = AudioFactory.newBuffer().set('samples/snare.mp3')
// let bhihat = AudioFactory.newBuffer().set('samples/hihat.mp3')
//  let bclap = AudioFactory.newBuffer().set('samples/clap.mp3')
// let bcrash = AudioFactory.newBuffer().set('samples/crash.mp3')
//    let bRC = AudioFactory.newBuffer().set('samples/crash.mp3')
//let  shaker = AudioFactory.newBuffer().set('samples/shaker.mp3')
// let  btom1 = AudioFactory.newBuffer().set('samples/tom1.mp3')
// let  btom2 = AudioFactory.newBuffer().set('samples/tom2.mp3')
// let  btom3 = AudioFactory.newBuffer().set('samples/tom2.mp3')


    Tone.Transport.bpm.value = 120;
    const SixTeenth_Note_Length = () => 0.25 * 60 / Tone.Transport.bpm.value


// const kick = AudioFactory.newPlayer(bkick)
    const kick = cmFX('kick', ToneAudioBuffer('samples/kick.mp3'), AudioFactory.newDistortion())
    const snare = cmFX('snare', ToneAudioBuffer('samples/snare.mp3'), AudioFactory.newDistortion())
    const hihat = cmFX('hihat', ToneAudioBuffer('samples/hihat.mp3'), AudioFactory.newDistortion())
    const clap = cmFX('clap', ToneAudioBuffer('samples/clap.mp3'), AudioFactory.newDistortion())
    const crash = cmFX('crash', ToneAudioBuffer('samples/crash.mp3'), AudioFactory.newDistortion())
    const shaker = cmFX('shaker', ToneAudioBuffer('samples/shaker.mp3'), AudioFactory.newDistortion())
    const tom1 = cmFX('tom1', ToneAudioBuffer('samples/tom1.mp3'), AudioFactory.newDistortion())
    const tom2 = cmFX('tom2', ToneAudioBuffer('samples/tom2.mp3'), AudioFactory.newDistortion())
    const tom3 = cmFX('tom3', ToneAudioBuffer('samples/tom3.mp3'), AudioFactory.newDistortion())
    const rCrash = cmFX('rCrash', ToneAudioBuffer('samples/crash.mp3'), AudioFactory.newDistortion())
    rCrash.reverse = true;

//This is still the original keys player. I just separated the instruments so that I can connect them to their own channel/gainNode.
    const keys = new Tone.Players({
        urls: {
            kick: 'samples/kick.mp3',
            snare: 'samples/snare.mp3',
            hihat: 'samples/hihat.mp3',
            clap: 'samples/clap.mp3',
            crash: 'samples/crash.mp3',
            shaker: 'samples/shaker.mp3',
            tom1: 'samples/tom1.mp3',
            tom2: 'samples/tom2.mp3',
            tom3: 'samples/tom3.mp3',
            rCrash: 'samples/crash.mp3'
        }
    });

// keys.add("snare", bsnare)
// keys.add("hihat", bhihat)
// keys.add("clap", bclap)
// keys.add("crash", bcrash)
// keys.add("RC", bRC)
// keys.add("shaker", bshaker)
// keys.add("tom1", btom1)
// keys.add("tom2", btom2)
// keys.add("tom3", btom3)
    console.log('keys', keys)
    GUI_Builder()


// This is an object of sequence arrays, keeping track of each of the on/off positions of all the steps for each sample
    const sequences = {
        kick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        snare: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        hihat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        clap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        rcrash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
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
                console.log("click", step, sampleName)
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
        Tone.start(0);
        Tone.Transport.scheduleRepeat(function (time) {
            //do something with the time
            console.log(`%ctime %c${time * SixTeenth_Note_Length} %c${time}`,
                "color: blue; font-style: italic; font-size: large; background-color: yellow;padding: 2px; border: 1mm ridge rgba(111, 220, 50, .6);",
                "color: yellow; font-style: italic; font-size: large; background-color: blue;padding: 2px; border: 1mm ridge rgba(11, 220, 50, .6);",
                "color: yellow; font-style: italic; font-size: large; background-color: fuchsia;padding: 2px; border: 2mm ridge rgba(211, 220, 50, .6);");

        }, "1n");
    });

// Stop button click handler
    document.querySelector(".stop").addEventListener('click', () => {
        Tone.Transport.stop()
        // console.timeEnd("hasPlayed")
    });

// This thing just ticks away at equal intervals, allowing us to step in and program the samples to play at each one of those intervals
    new Tone.Sequence((time, step) => {
        for (const instrument in sequences) {
            sequences[instrument][step] && instrument.start();
        }
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).start();


// console.log('keys', keys)

    function GUI_Builder() {
        drawButton('play')
        drawButton('stop')
        target.appendChild(drawMasterSection())
        target.appendChild(document.createElement('hr'));
        target.appendChild(drawDrumSection())
        target.appendChild(drawSynthControls())
        target.appendChild(drawPianoSampler())
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
        return containerM;
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
        console.log(elementID)
        switch (elementID) {
            case 'masterVolume':
                Mainchannel.volume.value = val;
                console.log(`Mainchannel ${elementID} volume:`, MainGainNode.volume.value)
                break;
            case 'volume0':
                kick.volume.value = val;
                break;
            case 'volume1':
                snare.volume.value = val;
                break;
            case 'volume2':
                hihat.volume.value = val;
                break;
            case 'volume3':
                clap.volume.value = val;
                break;
            case 'volume4':
                crash.volume.value = val;
                break;
            case 'volume5':
                shaker.volume.value = val;
                break;
            case 'volume6':
                tom1.volume.value = val;
                break;
            case 'volume7':
                tom2.volume.value = val;
                break;
            case 'volume8':
                tom3.volume.value = val;
                break;
            case 'tempo':
                // Beats per minute
                Tone.Transport.bpm.value = val;
                break;
            case 'distortion':
                //The parameter that is passed to the constructor is the amount of distortion (nominal range of 0-1)
                distortion.distortion = val;
                console.log('distortion level', distortion.distortion)
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
                break;
            case 'chorus':
                /*
                */
                const chorus = new Tone.Chorus(4, 2.5, 0.5);
                console.log('chorus settings', chorus.get())

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
                console.log('Reverb Settings', reverb.get())
                reverb.get()
                break;
            case 'pitch':
                /*
                PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
                speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
                */
                pitchShift.pitch = val;
                console.log('pitch', pitchShift.pitch);
                break;
            case 'mute':
                /*
                PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by
                speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave.
                */
                Mainchannel.mute(true);
                // Mainchannel.receive(reverb)
                // const pitchShift = new Tone.PitchShift();
                // keys.connect(pitchShift);
                // pitchShift.pitch = val;
                console.log('pitch', pitchShift.pitch);
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
        containerD.appendChild(DrawGui('bRC'))
        containerD.appendChild(DrawGui('shaker'))
        containerD.appendChild(DrawGui('tom1'))
        containerD.appendChild(DrawGui('tom2'))
        containerD.appendChild(DrawGui('tom3'))
        // document.body.appendChild(containerD);
        return containerD
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
        div1.appendChild(div2);
        div1.appendChild(channelStrip(`${Name}`))
        target.appendChild(div1)
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
        let knob = document.createElement('input');
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

                break;
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

                break;
            case 'vol':
                knob.title = `volume${counter}`; //id
                knob.id = `volume${counter}`;
                knob.setAttribute('data-diameter', '40');
                knob.setAttribute("type", "range");
                knob.setAttribute("data-fgcolor", "#00ff00");
                knob.setAttribute('class', "input-knob");
                knob.value = '0';
                knob.min = '0';
                knob.max = '1';
                knob.step = '0.01';
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
            case 'pitchC':
                knob.setAttribute('data-diameter', '40');
                knob.setAttribute("type", "range");
                knob.setAttribute("data-fgcolor", "#00ff00");
                knob.setAttribute('class', "input-knob");
                knob.title = `pitchC${counter}`; //id
                knob.id = `pitchC${counter}`; //id
                knob.value = '0';
                knob.min = '-48';
                knob.max = '48';
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
                knob.value = '99';
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
                knob.value = '120';
                knob.min = '40';
                knob.max = '215';
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
                knob.step = '0.01';
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
                knob.max = '100';
                break;

            case 'chorus':
                knob.title = `chorus`; //id
                knob.id = `chorus`; //id
                knob.setAttribute('data-diameter', '130');
                knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
                knob.setAttribute('data-sprites', '99')
                knob.setAttribute("type", "range");
                knob.setAttribute('class', "input-knob");
                knob.value = '0';
                knob.min = '0';
                knob.max = '100';
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
                knob.max = '100';
                break;

            case 'cut/off':
                knob.setAttribute('data-diameter', '130');
                knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
                knob.setAttribute('data-sprites', '99')
                knob.setAttribute("type", "range");
                knob.setAttribute('class', "input-knob");
                knob.value = '0';
                knob.min = '0';
                knob.max = '100';

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
                knob.max = '101';

                break;
            case 'envelope/mod':
                knob.setAttribute('data-diameter', '130');
                knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
                knob.setAttribute('data-sprites', '99')
                knob.setAttribute("type", "range");
                knob.setAttribute('class', "input-knob");
                knob.value = '85';
                knob.min = '40';
                knob.max = '200';

                break;
            case 'decay':
                knob.setAttribute('data-diameter', '130');
                knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
                knob.setAttribute('data-sprites', '99')
                knob.setAttribute("type", "range");
                knob.setAttribute('class', "input-knob");
                knob.value = '85';
                knob.min = '40';
                knob.max = '200';

                break;
            case 'accent':
                knob.setAttribute('data-diameter', '130');
                knob.setAttribute('data-src', "images/808_Voulme_Knob.png");
                knob.setAttribute('data-sprites', '99')
                knob.setAttribute("type", "range");
                knob.setAttribute('class', "input-knob");
                knob.value = '85';
                knob.min = '40';
                knob.max = '200';

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
                knob.step = '0.5';

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

        return knob;
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
        return containerS;
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
        return container1;
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
