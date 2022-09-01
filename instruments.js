
function acid_synth() {
    this.instrumentName = "Acid Synth", this.machineName = "acid_synth", this.instrumentID = null, this.context = null, this.controls = [{
        label: "Waveform",
        type: "toggle",
        value: 0
    }, {label: "Tune", type: "knob", value: 64}, {label: "Cutoff", type: "knob", value: 64}, {
        label: "Resonance",
        type: "knob",
        value: 64
    }, {label: "Env.Mod", type: "knob", value: 64}, {label: "Decay", type: "knob", value: 64}, {
        label: "Accent",
        type: "knob",
        value: 64
    }], this.viewData = [], this.gain = null, this.osc = null, this.playing = !1, this.monophonic = !0, this.waveform = "sawtooth", this.detune = 0, this.volume = .4, this.volReleaseTime = .3, this.filterCount = 2, this.filterEnvMod = 2200, this.filterDecayTime = .18, this.minimumFilterDecayTime = .5, this.filterDecayAmount = 8e3, this.filterAccent = 100, this.filterCutoffTempStore = null, this.filterQTempStore = null, this.minimumResonance = -3.4, this.maxDecay = 10, this.previousSlide = !1, this.mixerChannel = 1, this.clockPulse = null, this.knobs = [], this.knobWidth = 90, this.lastKnob = null, this.pointerDown = !1, this.dragStart = 0, this.dragNew = 0, this.height = 180, this.verticalPos = 0, this.accentEnv = !1
}

function dr1() {
    this.drumMachine = !0, this.instrumentID = null, this.instrumentName = "DR1 Drummer", this.machineName = "dr1", this.noRandom = !0, this.context = null, this.sampleFolder = app.instrumentBasePath + "dr1/data/samples/", this.volume = 1, this.middleC = 60, this.octaveAdjustment = 0, this.sampleData = [], this.samplePaths = [], this.notes = [], this.mixerChannel = 3, this.height = 260, this.knobs = [], this.pads = [], this.pitch = [], this.decay = [], this.flashPads = !0, this.selectedKit = 1, this.sampleKits = [], this.drumGains = [], this.drumVeloc = [], this.drumLabels = [], this.defaultVelocity = .9, this.loadingComplete = !1, this.filter = null, this.beatDouble = !0, this.beatDoublePlayed = [], this.lcdContent = {}, this.mute = [], this.controls = [], this.viewData = {
        drumNames: [],
        controls: [],
        kitName: "loading..."
    }
}

acid_synth.prototype.init = function () {
    this.context = app.context, this.clockPulse = app.stepSpeed / 1e3 / 6, this.slideTime = this.clockPulse, this.gainNode = this.context.createGain(), this.gainNode.gain.value = 0, this.gateNode = this.context.createGain(), this.gateNode.gain.value = 0;
    for (var t = 1; t <= this.filterCount; t++) this["filter" + t] = this.context.createBiquadFilter(), this["filter" + t].type = "lowpass", this["filter" + t].frequency.value = 9e3, this["filter" + t].Q.value = 0;
    this.hiPassVal = 200, this.hiPassFilter = this.context.createBiquadFilter(), this.hiPassFilter.type = "highpass", this.hiPassFilter.frequency.value = this.hiPassVal, this.hiPassFilter.Q.value = 0, this.hiPassFilter2 = this.context.createBiquadFilter(), this.hiPassFilter2.type = "highpass", this.hiPassFilter2.frequency.value = this.hiPassVal, this.hiPassFilter2.Q.value = 0, this.filterCutoffTempStore = this.filter1.frequency.value, this.osc = this.context.createOscillator(), this.osc.type = "sawtooth", this.initControlValues(), this.osc.start(this.context.currentTime), this.connectNodes();
    var e = this;
    $(document).on("click", ".js-toggle-hipass", function () {
        $(this).data("instrument-id") == e.instrumentID && (0 < e.hiPassFilter.frequency.value ? (e.hiPassFilter.frequency.value = 0, e.hiPassFilter2.frequency.value = 0, $(this).removeClass("btn-transport-active")) : (e.hiPassFilter.frequency.value = e.hiPassVal, e.hiPassFilter.frequency.value = e.hiPassVal, $(this).addClass("btn-transport-active")))
    })
}, acid_synth.prototype.initControlValues = function () {
    for (var t = 0; t < this.controls.length; t++) this.setControlValue(t, this.controls[t].value)
}, acid_synth.prototype.setLastKnob = function (t) {
    this.lastKnob = t.params.id, app.lastInstrument = this.instrumentID
}, acid_synth.prototype.setControlValue = function (t, e) {
    switch (this.controls[t].value = e, t) {
        case 0:
            if (this.waveform = 0 < e ? "square" : "sawtooth", "square" == this.waveform) {
                var i = new Float32Array(waveforms.square303.real), s = new Float32Array(waveforms.square303.imag),
                    a = this.context.createPeriodicWave(i, s);
                this.osc.setPeriodicWave(a), this.volume = .6
            } else this.volume = .6, this.osc.type = this.waveform;
            break;
        case 1:
            63 == e || 64 == e ? e = 0 : e < 63 ? e = -Math.abs(63 - e) : e -= 64, e = e / 63 * 100, e = Math.floor(12 * e), null !== this.osc && (this.osc.detune.value = e), this.detune = e;
            break;
        case 2:
            e = e / 127 * 900, e *= 1.9, e += 200;
            for (var n = 1; n <= this.filterCount; n++) this["filter" + n].detune.setValueAtTime(e / 2, this.context.currentTime + 1e-4);
            var l = (1530 - (this.filterCutoffTempStore = e)) / 100;
            (o = this.filterQTempStore - l) < this.minimumResonance && (o = this.minimumResonance), this.filterQNewTempStore = o, this.filter2.Q.value = o;
            break;
        case 3:
            var o;
            e = e / 127 * 31.8, (o = (e += this.minimumResonance) - (l = (1530 - this.filterCutoffTempStore) / 100)) < this.minimumResonance && (o = this.minimumResonance), this.filter2.Q.value = o, this.filterQTempStore = e, this.filterQNewTempStore = o;
            break;
        case 4:
            e = e / 127 * 76, e += 4, this.filterEnvMod = e;
            break;
        case 5:
            e = e / 127 * 100, e *= .015, e += .14, this.filterDecayTime = e;
            break;
        case 6:
            e = e / 127 * 100, this.filterAccent = e
    }
}, acid_synth.prototype.changeMixerChannel = function (t) {
    this.playing ? (this.gainNode.disconnect(mixer.channels[this.mixerChannel].input), this.mixerChannel = t, this.connectNodes()) : this.mixerChannel = t
}, acid_synth.prototype.connectNodes = function () {
    this.osc.connect(this.hiPassFilter), this.hiPassFilter.connect(this.filter1), this.hiPassFilter.frequency.value = 50;
    for (var t = 1; t < this.filterCount; t++) {
        var e = t + 1;
        this["filter" + t].connect(this["filter" + e])
    }
    this["filter" + this.filterCount].connect(this.gainNode), this.gainNode.connect(this.gateNode), this.gateNode.connect(mixer.channels[this.mixerChannel].input)
}, acid_synth.prototype.playStep = function (h, r) {
    var t, e, i, s, c = this;
    if (this.clockPulse = app.stepSpeed / 1e3 / 6, null === h.val) return c.previousSlide && a(r), void (this.previousSlide = !1);

    function a(t) {
        c.gateNode.gain.setValueAtTime(.5, t), c.gateNode.gain.setTargetAtTime(0, t, c.clockPulse / 2)
    }

    this.osc.type = this.waveform, function () {
        c.osc.detune.value = c.detune;
        var t = h.val;
        h.octUp ? t += 12 : h.octDown && (t -= 12);
        var e = midiFrequency.get(t);
        c.previousSlide ? (c.osc.frequency.setValueAtTime(c.osc.frequency.value, r), c.osc.frequency.linearRampToValueAtTime(e, r + c.slideTime)) : c.osc.frequency.setValueAtTime(e, r)
    }(), e = .001, i = 3 * c.clockPulse, s = c.volume, h.accent && (s += c.filterAccent / 100 * .3), c.previousSlide || (t = r, c.gateNode.gain.setValueAtTime(0, t), c.gateNode.gain.linearRampToValueAtTime(.5, t + .002), c.gainNode.gain.cancelScheduledValues(r), c.gainNode.gain.setValueAtTime(c.gainNode.gain.value, r), c.gainNode.gain.linearRampToValueAtTime(0, r + e), c.gainNode.gain.linearRampToValueAtTime(s, r + e + e)), (!c.previousSlide && h.slide || !h.slide) && c.gainNode.gain.exponentialRampToValueAtTime(.001, r + 8.4), h.slide || a(r + i), function () {
        if (!c.previousSlide) {
            var t = c.filterEnvMod, e = 10 * (c.filterCutoffTempStore / 200 + 3), i = c.filterCutoffTempStore + t * e,
                s = c.filterCutoffTempStore;
            if (h.accent) {
                var a = c.filterAccent / 100;
                i = c.filterCutoffTempStore + 698 * a + t * e, s += 198 * a;
                var n = .06 * a;
                n -= a * (t / 80 * .06);
                for (var l = (n += 1e-4) + 1e-4, o = 1; o <= c.filterCount; o++) c["filter" + o].frequency.cancelScheduledValues(r), c["filter" + o].frequency.setValueAtTime(s, r), c["filter" + o].frequency.setTargetAtTime(i, r, n), c["filter" + o].frequency.setTargetAtTime(s, r + l, .15);
                c.filter2.Q.setValueAtTime(c.filterQNewTempStore + 1, r)
            } else {
                for (o = 1; o <= c.filterCount; o++) c["filter" + o].frequency.cancelScheduledValues(r), c["filter" + o].frequency.setValueAtTime(i, r), c["filter" + o].frequency.exponentialRampToValueAtTime(s, r + c.filterDecayTime);
                c.filter2.Q.setValueAtTime(c.filterQNewTempStore, r)
            }
        }
    }(), h.slide ? this.previousSlide = !0 : this.previousSlide = !1
}, acid_synth.prototype.stopAll = function () {
    this.previousSlide = !1, this.gainNode.gain.cancelScheduledValues(app.context.currentTime), this.gainNode.gain.setValueAtTime(0, app.context.currentTime), this.gateNode.gain.linearRampToValueAtTime(0, app.context.currentTime + .001), this.playing = !1
}, dr1.prototype.init = function () {
    this.context = app.context, this.gainNode = this.context.createGain();
    for (var t = this.gainNode.gain.value = 0; t < 10; t++) this.drumGains[t] = this.context.createGain(), this.drumGains[t].gain.value = .9;
    var e, i, s;
    this.sampleKits.push({
        name: "909 Kit",
        path: "909",
        labels: ["kick", "snare", "l.tom", "m.tom", "h.tom", "rim", "clap", "c.hat", "o.hat", "crash"]
    }), this.sampleKits.push({
        name: "808 Kit",
        path: "808",
        labels: ["kick", "snare", "l.tom", "m.tom", "c.bell", "rim", "clap", "c.hat", "o.hat", "crash"]
    }), this.sampleKits.push({
        name: "DD8 Kit",
        path: "dd8",
        labels: ["kick", "snare", "tom1", "perc1", "perc2", "Rim", "dog", "hihat", "ride", "crash"]
    }), app.appVersion && (this.sampleKits.push({
        name: "707 Kit",
        path: "707",
        labels: ["kick", "snare", "l.tom", "m.tom", "h.tom", "rim", "clap", "c.hat", "o.hat", "crash"]
    }), this.sampleKits.push({
        name: "MT32 Kit",
        path: "mt32",
        labels: ["kick", "snare", "l.cong", "h.cong", "clave", "quij", "clap", "c.hat", "cabasa", "whistl"]
    }));
    for (t = 0; t < this.sampleKits[this.selectedKit].labels.length; t++) {
        i = [{
            label: "Vol",
            type: "knob",
            value: 110,
            description: (e = this.sampleKits[this.selectedKit].labels[t]) + " Vol",
            id: s = 3 * t,
            faster: !0
        }, {
            label: "Decay",
            type: "knob",
            value: 127,
            description: e + " Decay",
            id: s + 1,
            faster: !0
        }, {label: "Pitch", type: "knob", value: 64, description: e + " Pitch", id: s + 2, faster: !0}];
        for (var a = 0; a < i.length; a++) this.controls.push(i[a]);
        this.viewData.controls.push(i), this.viewData.drumNames.push(this.sampleKits[this.selectedKit].labels[t].toUpperCase()), this.mute.push(0)
    }
    this.viewData.kitName = this.sampleKits[this.selectedKit].name, this.filter = this.context.createBiquadFilter(), this.filter.type = "lowpass", this.filter.frequency.value = 22050, this.filter.Q.value = 4, this.filter.gain.value = 500, this.loadSamples(), this.initControlValues()
}, dr1.prototype.initControlValues = function () {
    for (var t = 0; t < this.controls.length; t++) this.setControlValue(t, this.controls[t].value)
}, dr1.prototype.toggleMute = function (t) {
    0 < this.mute[t] ? this.mute[t] = 0 : this.mute[t] = 1
}, dr1.prototype.padPush = function (t) {
    t.val = t.val + 36, this.playStep(t)
}, dr1.prototype.changeKit = function (t) {
    t > this.sampleKits.length - 1 ? t = 0 : t < 0 && (t = this.sampleKits.length - 1), this.selectedKit = t, this.loadingComplete = !1, this.updateLcd(), this.loadSamples();
    var e = $("#" + this.instrumentID).find(".js-drum-title"), i = 0, s = this;
    e.each(function () {
        $(this).html(s.sampleKits[s.selectedKit].labels[i].toUpperCase()), i++
    })
}, dr1.prototype.updateLcd = function () {
    var t = this.loadingComplete ? "" : " (L)";
    $("#" + this.instrumentID).find(".js-drum-screen").html(this.sampleKits[this.selectedKit].name + t)
}, dr1.prototype.loadSamples = function () {
    var s = this, a = 0;
    this.loadingComplete = !1, loadSample = function (e) {
        s.sampleData[e];
        var t = new XMLHttpRequest, i = s.sampleFolder + s.sampleKits[s.selectedKit].path + "/" + e + ".wav";
        t.open("GET", i, !0), t.responseType = "arraybuffer", t.onload = function () {
            s.context.decodeAudioData(t.response, function (t) {
                s.sampleData[e] = t, 9 < ++a && (s.loadingComplete = !0, s.updateLcd())
            })
        }, t.send()
    };
    for (var t = 0; t < 10; t++) loadSample(t)
}, dr1.prototype.connectNodes = function (t, e) {
    this.drumVeloc[t] = this.context.createGain(), this.notes[t].connect(this.drumVeloc[t]), this.drumVeloc[t].connect(this.drumGains[e]), this.drumGains[e].connect(this.gainNode), this.gainNode.connect(this.filter), this.filter.connect(mixer.channels[this.mixerChannel].input)
}, dr1.prototype.playStep = function (t, e) {
    if (t && this.loadingComplete) {
        var i = t.val;
        if (this.playing, t.instant && (e = 0), i) {
            var s = e + "-" + i, a = i - 36;
            if (this.mute[a]) return;
            if (a > this.sampleData.length - 1) return;
            0 < this.octaveAdjustment ? i += 12 * this.octaveAdjustment : this.octaveAdjustment < 0 && (i -= 12 * Math.abs(this.octaveAdjustment));
            var n = 1;
            if (this.pitch[i] && (n = this.pitch[i]), null != t.veloc) var l = t.veloc / 127; else l = this.defaultVelocity / 127;
            this.gainNode.gain.value = this.volume, this.notes[s] = this.context.createBufferSource(), this.notes[s].buffer = this.sampleData[a], this.notes[s].detune.value = -100, this.notes[s].playbackRate.value = n, this.connectNodes(s, a), this.drumVeloc[s].gain.value = l, this.notes[s].start(e), delete this.notes[s], this.playing = !0
        }
    }
}, dr1.prototype.button = function (t) {
    switch (t) {
        case 0:
            this.changeKit(this.selectedKit - 1);
            break;
        case 1:
            this.changeKit(this.selectedKit + 1)
    }
}, dr1.prototype.setControlValue = function (t, e) {
    this.controls[t].value = e;
    var i = Math.floor(t / 3) + 36;
    e /= 127;
    var s = t - 3 * Math.floor(t / 3);
    0 === s ? (i -= 36, this.drumGains[i].gain.value = e) : 1 == s ? (e /= 2, e += .01, this.decay[i] = e) : (49 < (e *= 100) && e < 51 ? e = 0 : e < 50 ? (e = 50 - e, e -= 2 * e) : e -= 50, e /= 150, e += 1, this.pitch[i] = e)
}, dr1.prototype.stopAll = function (t) {
};