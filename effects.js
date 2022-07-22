
function setDistortion(amount, out){
    const dist = new Tone.Distortion(amount).toDestination();
    console.log(`what the $@!* is a dist ${dist}`);
    let channel = out.connect(dist);
    console.log(channel);
    channel.triggerAttackRelease("A1", "1n");
}

function setKnob(e){
    console.log(`setknob function will display the received value and for now take action on tempo and level.. distortion will follow`);
    console.log(`knob: ${e.id}`,`value: ${e.value}`);
    switch (e.id){
        case "tempo":
            Tone.Transport.bpm.value = document.getElementById('tempo').value;
            console.log(`tempo: ${Tone.Transport.bpm.value}`);
            break;
        case "level":
            const vol = new Tone.Volume(-12).toDestination();
            const osc = new Tone.Oscillator().connect(vol).start();
            // Tone.Transport.volume.value = document.getElementById('level').value;
            // console.log(`level: ${Tone.Transport.volume.value}`);
            break;
        case 'distortion':
            let amount = e.value;
            amount = amount/50;
            console.log(`amount of distortion: ${amount}`);
            setDistortion(amount, keys.toDestination());
            // i think i cracked the distortion part! it should now send only between -1 and 1 !!! I will sleep better now!
            break;
        default:
        // console.log("knob " + e.id + " value " + e.value);
    }
}
function stopIt(){
    //   console.log('stopIt()');
    Tone.Transport.stop();
    Tone.Transport.cancel(0);
    //   if(piano) {
    //       piano.dispose();
    //       piano = null;
    //   }
}
function playIt(){
    Tone.Transport.start();
    Tone.start();
    // Tone.Transport.resume();
}
function updateTempo()  {
    return tempo;
}
