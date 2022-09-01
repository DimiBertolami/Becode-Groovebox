const makeSynths = (count) => {

    // each synth can only play one note at a time.
    // for simplicity, we'll create one synth for each note available
    // this allows for easy polyphony (multiple notes playing at the same time)

    // Documentation for Tone.Synth can be found here:
    // https://tonejs.github.io/docs/r13/Synth
    //
    // Demo different oscillator settings here:
    // https://tonejs.github.io/examples/oscillator

    const synths = [];

    for (let i = 0; i < count; i++) {
        // I'm using an oscillator with a square wave and 8 partials
        // because I like how it sounds.
        //
        // You could simply write new Tone.Synth().toDestination() instead.
        // This would work just as well, but sound slightly different.
        //
        // Demo different oscillator settings here:
        // https://tonejs.github.io/examples/oscillator

        let synth = new Tone.Synth({ oscillator: { type: "square8" } }).toDestination();
        synths.push(synth);
    }

    return synths;
};

// an array of notes is passed in as the argument to allow for flexbility.
// const notes = ["F4", "Eb4", "C4", "Bb3", "Ab3", "F3"];

const makeGrid = (notes) => {
    // our "notation" will consist of an array with 6 sub arrays
    // each sub array corresponds to one row of our sequencer

    // declare the parent array to hold each row subarray
    const rows = [];

    for (const note of notes) {
        // declare the subarray
        const row = [];
        // each subarray contains multiple objects that have an assigned note
        // and a boolean to flag whether they are active.
        // each element in the subarray corresponds to one eighth note.
        for (let i = 0; i < 8; i++) {
            row.push({
                note: note,
                isActive: false
            });
        }
        rows.push(row);
    }

    // we now have 6 rows each containing 8 eighth notes
    return rows;
};
// grid is a global variable declared prior to the execution of makeSequencer()
//
const grid = makeGrid()

const makeSequencer = () => {
    // grab the top level div from the DOM
    const sequencer = document.getElementById("sequencer");

    // iterate through the grid
    grid.forEach((row, rowIndex) => {

        // create a parent div for each row
        const seqRow = document.createElement("div");
        seqRow.id = `rowIndex`;
        seqRow.className = "sequencer-row";

        // iterate through each note in the row
        row.forEach((note, noteIndex) => {

            // create a button for each note
            const button = document.createElement("button");
            button.className = "note"

            // handleNoteClick() to be defined in a little bit
            button.addEventListener("click", function(e) {
                handleNoteClick(rowIndex, noteIndex, e);
            });

            // append each note to the parent div
            seqRow.appendChild(button);
        });
        // append each row to the top level div
        sequencer.appendChild(seqRow);
    });
};
const handleNoteClick = (clickedRowIndex, clickedNoteIndex, e) => {
    // iterating through the grid
    grid.forEach((row, rowIndex) => {
        // iterate through each note in current row
        row.forEach((note, noteIndex) => {
            // toggle the note in the grid that corresponds to the clicked button.
            if (clickedRowIndex === rowIndex && clickedNoteIndex === noteIndex) {
                note.isActive = !note.isActive;

                // I'm using the classNames utility to make changing the button styling easier.
                // https://www.npmjs.com/package/classnames
                e.target.className = classNames(
                    "note",
                    { "note-is-active": !!note.isActive },
                    { "note-not-active": !note.isActive }
                );
            }
        });
    });
};
const configPlayButton = () => {
    // grab the button from the DOM
    const button = document.getElementById("play-button");

    button.addEventListener("click", (e) => {
        if (!started) {
            // Only exectued the first time the button is clicked
            // initializing Tone, setting the volume, and setting up the loop

            Tone.start();
            Tone.getDestination().volume.rampTo(-10, 0.001)
            configLoop();
            started = true;
        }

        // toggle Tone.Trasport and the flag variable.
        if (playing) {
            e.target.innerText = "Play";
            Tone.Transport.stop();
            playing = false;
        } else {
            e.target.innerText = "Stop";
            Tone.Transport.start();
            playing = true;
        }
    });
};