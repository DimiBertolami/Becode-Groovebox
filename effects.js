let amount = document.getElementById('distortion').value;
setDistortion(amount, out);

function setDistortion(amount, out=0){
    const dist = new Tone.Distortion(amount).toDestination();
    if (!out===0){
        const fm = new Tone.FMSynth().connect(dist);
        fm.triggerAttackRelease("A1", "8n");
    } else {
        out.connect(dist);
        out.triggerAttackRelease("A1", "8n");
    }
}
