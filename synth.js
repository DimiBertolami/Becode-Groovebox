// var osc = new Tone.OmniOscillator();
// osc.frequency.value = "C4";
// osc.start().stop("+8n");
//
// var env = new Tone.AmplitudeEnvelope();
// osc.connect(env);
// env.toDestination();
//
// osc.start();
// env.triggerAttack();
//
// const synth = new Tone.Synth();
// synth.toDestination();
// synth.triggerAttack("C4", '4n');
// synth.triggerRelease(time + 0.25);
// // synth.triggerAttackRelease("C4", 0.25, '4n');
// var seq = new Tone.Sequence(callback, ["C3", "Eb3", "F4", "Bb4"], "8n");
// const arp = new Tone.Pattern(function(time, note){
//     synth.triggerAttackRelease(note, 0.25);
// }, ["C4", "D4", "E4", "G4", "A4"],
//     "upDown");
// arp.pattern = 'upDown'
// // begin at the beginning
// pattern.start(0);
// Tone.Transport.start();


const synth = new Tone.PolySynth().toDestination();
const osc = new Tone.Oscillator('g2', "sawtooth").connect(filter); //osc .start(time, +.1, '4n');
const omniOsc = new Tone.OmniOscillator("C2", "pwm").connect(filter);

// set the attributes across all the voices using 'set'
synth.set({ detune: -1200 });
// play a chord
synth.triggerAttackRelease(["C4", "E4", "A4"], 1);

const meter = new Tone.Meter();
keys.connect(meter)
// setInterval(() => console.log(meter.getValue()), 300);