this.templates = this.templates || {}, this.templates.instruments = this.templates.instruments || {}, this.templates.instruments.acid_synth = this.templates.instruments.acid_synth || {}, this.templates.instruments.acid_synth.view = Handlebars.template({
    1: function (t, n, r, e, l) {
        var a, i = null != n ? n : t.nullContext || {}, o = t.hooks.helperMissing, s = "function",
            d = t.escapeExpression;
        return "\t<style>\r\n\t\t\r\n\t\t/* Customise rack wrapper*/\r\n\t\t." + d(typeof (a = null != (a = r.machineName || (null != n ? n.machineName : n)) ? a : o) === s ? a.call(i, {
            name: "machineName",
            hash: {},
            data: l,
            loc: {start: {line: 5, column: 3}, end: {line: 5, column: 18}}
        }) : a) + "-wrapper .rack-main{\r\n\t\t\t/*\r\n\t\t\tbackground:#ccc;\r\n\t\t\tbackground:linear-gradient(to right, #c9cbcc 0%, #eff2f3 50%, #f1f4f5 51%, #c8cacb 100%);\r\n\t\t\t*/\r\n\t\t}\r\n\t\t." + d(typeof (a = null != (a = r.machineName || (null != n ? n.machineName : n)) ? a : o) === s ? a.call(i, {
            name: "machineName",
            hash: {},
            data: l,
            loc: {start: {line: 11, column: 3}, end: {line: 11, column: 18}}
        }) : a) + "-wrapper .wrapper-label{\r\n\t\t\t/*color:#333;*/\r\n\t\t\t/*border-bottom:0.1vw solid #111;*/\r\n\t\t}\r\n\t\t." + d(typeof (a = null != (a = r.machineName || (null != n ? n.machineName : n)) ? a : o) === s ? a.call(i, {
            name: "machineName",
            hash: {},
            data: l,
            loc: {start: {line: 15, column: 3}, end: {line: 15, column: 18}}
        }) : a) + "-wrapper .rack-mount.rack-mount-l{\r\n\t\t\tbackground:linear-gradient(to right, #444 0%, #676767 5%, #676767 92%, #ababab 95%, #444 100% );\r\n\t\t\t\r\n\t\t\t/*\r\n\t\t\tbackground:#c9cbcc;\r\n\t\t\tborder-radius:1vw 0 0 1vw;\r\n\t\t\tborder:0.1vw solid #666;\r\n\t\t\tborder-right:0;\r\n\t\t\t*/\r\n\r\n\t\t}\r\n\t\t." + d(typeof (a = null != (a = r.machineName || (null != n ? n.machineName : n)) ? a : o) === s ? a.call(i, {
            name: "machineName",
            hash: {},
            data: l,
            loc: {start: {line: 26, column: 3}, end: {line: 26, column: 18}}
        }) : a) + "-wrapper .rack-mount.rack-mount-r{\r\n\t\t\tbackground:linear-gradient(to left, #444 0%, #676767 5%, #676767 92%, #ababab 95%, #444 100% );\r\n\t\t}\r\n\t\t/*End rack customise*/\r\n\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 32, column: 3}, end: {line: 32, column: 13}}
        }) : a) + "{\r\n\t\t\tbackground:transparent;\r\n\t\t\tbackground:#ccc;\r\n\t\t\tbackground:linear-gradient(to right, #c9cbcc 0%, #eff2f3 50%, #f1f4f5 51%, #c8cacb 100%);\r\n\t\t\tpadding:0.5%;\r\n\t\t\tmin-height:9.9vw;\r\n\t\t\theight:12vw;\r\n\t\t\tborder-radius:0.2vw;\r\n\t\t\tfont-size:0.9vw;\r\n\t\t\t\r\n\t\t\t/*box-shadow: 0.2vw 0.2vw 0.3vw rgba(0,0,0,0.4);*/\r\n\t\t}\r\n\t\t\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 45, column: 3}, end: {line: 45, column: 13}}
        }) : a) + " > .control-row{\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\twidth:88%;\r\n\t\t\tmargin:0.1vw;\r\n\t\t\tpadding:0.4vw;\r\n\t\t\tmargin-top:3vw;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 54, column: 3}, end: {line: 54, column: 13}}
        }) : a) + " > .control-row .button1{\r\n\t\t\tbackground:linear-gradient(to bottom, #fff, #edf1fc 4%, #edf1fc 96%, #82898f 100%); \r\n\t\t\tbox-shadow:0 0.1vw 0.15vw 0.1vw rgba(0,0,0,0.2);\r\n\t\t\tborder:0.1vw solid rgba(0,0,0,0.6);\r\n\t\t\tpadding:0.6vw;\r\n\t\t\tdisplay:inline-block;\r\n\t\t\tcolor:#333;\r\n\t\t\tborder-radius:0.2vw;\r\n\t\t\tfont-size:0.9vw;\r\n\t\t\tcursor:pointer;\r\n\t\t\tmargin-left:0.5vw;\r\n\t\t\tposition:absolute;\r\n\t\t\tbottom:1.1vw;\r\n\t\t\tright:1vw;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 70, column: 3}, end: {line: 70, column: 13}}
        }) : a) + " > .control-row > .waveform-container{\r\n\t\t\twidth:8%;\r\n\t\t\t\r\n\t\t\tborder-right:0.1vw solid #666;\r\n\t\t\tpadding-right:1.4vw;\r\n\t\t\tposition:relative;\r\n\t\t\ttext-align:right;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 79, column: 3}, end: {line: 79, column: 13}}
        }) : a) + " > .control-row > .waveform-container > div > .icon{\r\n\t\t\twidth:1.2vw;\r\n\t\t\twidth:1vw;\r\n\t\t\topacity:0.60;\r\n\t    \timage-rendering: crisp-edges !important; /* Chrome */\r\n\t    \tmargin-bottom:0.3vw;\r\n\t\t}\r\n\r\n\t\t\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 89, column: 3}, end: {line: 89, column: 13}}
        }) : a) + " > .control-row > .waveform-container > .switch-outer{\r\n\t\t\t/*background:linear-gradient(to right, #a0a0a0, #b0b0b0 40%, #555 41%, #444 59%, #555 60% ,#b0b0b0 61%, #c0c0c0 100%);*/\r\n\t\t\tbackground:linear-gradient(to right, #a0a0a0, #b0b0b0 40%, #b0b0b0 61%, #a0a0a0 100%);\r\n\t\t\twidth:1.2vw;\r\n\t\t\theight:4.3vw;\r\n\t\t\tposition:relative;\r\n\t\t\ttop:0.10vw;\r\n\t\t\tpadding:1px;\r\n\t\t\tborder-top:0.15vw solid #999;\r\n\t\t\tborder-right:0.15vw solid #ccc;\r\n\t\t\tborder-bottom:0.15vw solid #eee;\r\n\t\t\tborder-left:0.15vw solid #ccc;\r\n\t\t\tborder-width:0.15vw;\r\n\t\t\tpadding:0;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 105, column: 3}, end: {line: 105, column: 13}}
        }) : a) + " > .control-row > .waveform-container > .switch-outer > .switch-inner{\r\n\t\t\twidth:100%;\r\n\t\t\theight:70%;\r\n\t\t\tbox-sizing:border-box;\r\n\t\t\tbackground:linear-gradient(to bottom, #666, #dde4e8 2%, #edf1fc 25%, #edf1fc 42%, #82898f 42.1%, #edf1fc 58%,  #c7cfd3 58.5%, #c7cfd3 95%, #999 100%);\r\n\t\t\tbox-shadow: 0 0.3vw .2vw .05vw rgba(0,0,0,0.50);\r\n\t\t\tposition:relative;\r\n\t\t\tz-index:2;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 115, column: 3}, end: {line: 115, column: 13}}
        }) : a) + " > .control-row > .waveform-container > .switch-outer > .switch-line{\r\n\t\t\tposition:absolute;\r\n\t\t\twidth:18%;\r\n\t\t\theight:80%;\r\n\t\t\tbackground:linear-gradient(to right, #666, #111 50%, #666 100%);\r\n\t\t\tleft:42%;\r\n\t\t\ttop:10%;\r\n\t\t\tz-index:1;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 125, column: 3}, end: {line: 125, column: 13}}
        }) : a) + " > .control-row > .waveform-container > .switch-outer > .top{\r\n\t\t\ttransform:translateY(-4%);\r\n\t\t\ttransition:0.15s;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 130, column: 3}, end: {line: 130, column: 13}}
        }) : a) + " > .control-row > .waveform-container > .switch-outer > .bottom{\r\n\t\t\ttransform:translateY(37%);\r\n\t\t\ttransition:0.15s;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 135, column: 3}, end: {line: 135, column: 13}}
        }) : a) + " > .control-row > .right-container{\r\n\t\t\t/*\r\n\t\t\tdisplay:flex;\r\n\t\t\tjustify-content:center;\r\n\t\t\t*/\r\n\t\t\ttext-align:center;\r\n\t\t\twidth:5%;\r\n\t\t\tborder-left:0.1vw solid #666;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 145, column: 3}, end: {line: 145, column: 13}}
        }) : a) + " > .control-row > .knob-container {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 149, column: 3}, end: {line: 149, column: 13}}
        }) : a) + " > .control-row > .knob-container > .label, ." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 149, column: 58}, end: {line: 149, column: 68}}
        }) : a) + " > .control-row > .waveform-container > .label{\r\n\t\t\tmargin-bottom:0.4vw;\r\n\t\t\ttext-align:center;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 154, column: 3}, end: {line: 154, column: 13}}
        }) : a) + " > .control-row > .knob-container > .bottom-label {\r\n\t\t\tdisplay:inline-block;\r\n\t\t\tposition:relative;\r\n\t\t\tbottom:0.4vw;\r\n\t\t\tfont-size:0.7vw;\r\n\t\t}\r\n\t\t\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 161, column: 3}, end: {line: 161, column: 13}}
        }) : a) + " > .control-row > .knob-container > .knob-outer {\r\n\t\t  position:relative;\r\n\t\t  width:4.8vw;\r\n\t\t  height:4.8vw;\r\n\t\t  border-radius:50%;  \r\n\t\t  /*background:linear-gradient(#b5b5b5,#F9F8F7);*/\r\n\t\t  background:linear-gradient(#aeb0b1, #f9fbfb);\r\n\t\t  top:0.2vw;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 171, column: 3}, end: {line: 171, column: 13}}
        }) : a) + " > .control-row > .knob-container >.knob-outer > .knob-main {\r\n\t\t  position:absolute;\r\n\t\t  left:0.4vw;\r\n\t\t  top:0.4vw;\r\n\t\t  bottom:0.4vw;\r\n\t\t  right:0.4vw;\r\n\t\t  border-radius:50%;\r\n\t\t  background:linear-gradient(90deg,#dde4e8, #dde4e8 10%, #c7cfd3 20%, #7e858a 30%, #82898f 31%, #edf1fc 32%, #edf1fc 34%, #edf1fc 66%, #82898f 67%, #7e858a 68%, #c7cfd3 75%, #dde4e8 80%);\r\n\t\t  backface-visibility:hidden;\r\n\t\t  box-shadow: 0px 0px .18vw .12vw rgba(0,0,0,0.80);\r\n\t\t  /*transition:1.5s;*/\r\n\t\t  transform: rotate(-135deg);\r\n\t\t  /*transform: rotate(0deg);*/\r\n\t\t  will-change:transform;\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 187, column: 3}, end: {line: 187, column: 13}}
        }) : a) + ' > .control-row >.knob-container > .knob-outer > .knob-main:before {\r\n\t\t  display:block;\r\n\t\t  content:"";\r\n\t\t  width:6%;\r\n\t\t  height:1.2vw;\r\n\t\t  background:red;\r\n\t\t  /*margin:0 auto;*/\r\n\t\t  left:46%;\r\n\t\t  position:absolute;\r\n\t\t  opacity:.8;\r\n\t\t  box-shadow:0 .25vw .1vw rgba(0,0,0,0.4) inset;\r\n\t\t}\r\n\r\n\t\t.' + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 200, column: 3}, end: {line: 200, column: 13}}
        }) : a) + " > .control-row > .knob-container > .knob-outer > .knob-line {\r\n\t\t\tposition:absolute;\r\n\t\t\ttransform-origin:bottom;\r\n\t\t\theight:55%;\r\n\t\t\ttop:-5%;\r\n\t\t\twidth:1px;\r\n\t\t\tbackground:#747576;\r\n\t\t\tleft:50%;\r\n\t\t\t-webkit-backface-visibility: hidden; /*Fix for weird chrome bug when waveform switch animates, it was adding padding to this!*/\r\n\t\t}\r\n\r\n\t\t." + d(typeof (a = null != (a = r.prefix || (null != n ? n.prefix : n)) ? a : o) === s ? a.call(i, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 211, column: 3}, end: {line: 211, column: 13}}
        }) : a) + " > .logo-row {\r\n\t\t\tposition:absolute;\r\n\t\t\tleft:0;\r\n\t\t\ttop:0;\r\n\t\t\theight:3.0vw;\r\n\t\t\tbackground:rgba(255,255,255,0.2);\r\n\t\t\tbackground:rgba(0,0,0,0.1);\r\n\t\t\tbackground:linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0.2) 5%, rgba(0,0,0,0.1) 92%, rgba(0,0,0,0.3) 100%);\r\n\t\t\twidth:100%;\r\n\t\t\tborder-radius: 0.2vw 0.2vw 0 0;\r\n\t\t}\r\n\r\n\r\n\t</style>\r\n"
    }, 3: function (t, n, r, e, l, a, i) {
        var o;
        return null != (o = (r.is_equal || n && n.is_equal || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, null != n ? n.type : n, "knob", {
            name: "is_equal",
            hash: {},
            fn: t.program(4, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 255, column: 3}, end: {line: 314, column: 16}}
        })) ? o : ""
    }, 4: function (t, n, r, e, l, a, i) {
        var o, s, d = null != n ? n : t.nullContext || {}, c = t.hooks.helperMissing, u = "function",
            p = t.escapeExpression, m = t.lambda;
        return '\r\n\t\t\t\t<div class="knob-container" data-control-id="' + p(typeof (s = null != (s = r.index || l && l.index) ? s : c) === u ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 257, column: 49}, end: {line: 257, column: 59}}
        }) : s) + '" style="">\r\n\t\t\t\t\t<div class="label">' + p(m(null != n ? n.label : n, n)) + '</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class="knob-outer">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\x3c!--Lines--\x3e\r\n\t\t\t\t\t\t<div class="knob-line" style="width:4px;margin-left:-2px;"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(-22.5deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(-45deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(-67.5deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(-90deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(-112.5deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(-135deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(22.5deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(45deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(67.5deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(90deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(112.5deg)"></div>\r\n\t\t\t\t\t\t<div class="knob-line" style="transform:rotate(135deg)"></div>\t\t\t\t\r\n\t\t\t\t\t\t\x3c!--/Lines--\x3e\r\n\r\n\t\t\t\t\t\t<div class="knob-main js-control-knob" \r\n\t\t\t\t\t\tdata-instrument-id="' + (null != (o = m(null != i[1] ? i[1].instrumentID : i[1], n)) ? o : "") + '" \r\n\t\t\t\t\t\tdata-control-id="' + p(typeof (s = null != (s = r.index || l && l.index) ? s : c) === u ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 280, column: 23}, end: {line: 280, column: 33}}
        }) : s) + '" \r\n\t\t\t\t\t\tdata-control-type="instrument"\r\n\t\t\t\t\t\tid=\'control_knob_' + p(m(null != i[1] ? i[1].instrumentID : i[1], n)) + "_" + p(typeof (s = null != (s = r.index || l && l.index) ? s : c) === u ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 282, column: 43}, end: {line: 282, column: 53}}
        }) : s) + '_instrument\'\r\n\t\t\t\t\t\t></div>\r\n\r\n\t\t\t\t\t\x3c!--Midi learn overlay--\x3e\r\n\t\t\t\t\t<div class="midi-learn-overlay js-midi-learn-overlay" data-instrument-id="' + p(m(null != i[1] ? i[1].instrumentID : i[1], n)) + '" data-control-id="' + p(typeof (s = null != (s = r.index || l && l.index) ? s : c) === u ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 286, column: 117}, end: {line: 286, column: 127}}
        }) : s) + '" data-control-type="instrument" data-instrument-count="' + p(m(null != i[1] ? i[1].instrumentCount : i[1], n)) + '" style="display:none;"></div>\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class="bottom-label" style="left:-.5vw;">\r\n' + (null != (o = (r.is_equal || n && n.is_equal || c).call(d, null != n ? n.label : n, "Tune", {
            name: "is_equal",
            hash: {},
            fn: t.program(5, l, 0, a, i),
            inverse: t.program(7, l, 0, a, i),
            data: l,
            loc: {start: {line: 292, column: 6}, end: {line: 296, column: 19}}
        })) ? o : "") + '\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="bottom-label" style="right:-2.2vw !important;">\r\n' + (null != (o = (r.is_equal || n && n.is_equal || c).call(d, null != n ? n.label : n, "Tune", {
            name: "is_equal",
            hash: {},
            fn: t.program(9, l, 0, a, i),
            inverse: t.program(11, l, 0, a, i),
            data: l,
            loc: {start: {line: 299, column: 6}, end: {line: 303, column: 19}}
        })) ? o : "") + '\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div style="text-align:center;display:none;">\r\n\t\t\t\t\t\t<div \r\n\t\t\t\t\t\tid="control_display_' + p(m(null != i[2] ? i[2].instrumentID : i[2], n)) + "_" + p(typeof (s = null != (s = r.index || l && l.index) ? s : c) === u ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 308, column: 49}, end: {line: 308, column: 59}}
        }) : s) + '"\r\n\t\t\t\t\t\tstyle="display:inline-block;background:#333;color:#eee;padding:1px;border-radius:4px;text-align:center;width:75%;" class="js-knob-val" data-control-id="' + p(typeof (s = null != (s = r.index || l && l.index) ? s : c) === u ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 309, column: 158}, end: {line: 309, column: 168}}
        }) : s) + '" data-instrument-id="' + p(m(null != i[2] ? i[2].instrumentID : i[2], n)) + '">0</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n'
    }, 5: function (t, n, r, e, l) {
        return "\t\t\t\t\t\t\t-12\r\n"
    }, 7: function (t, n, r, e, l) {
        return "\t\t\t\t\t\t\tmin\r\n"
    }, 9: function (t, n, r, e, l) {
        return "\t\t\t\t\t\t\t+12\r\n"
    }, 11: function (t, n, r, e, l) {
        return "\t\t\t\t\t\t\tmax\r\n"
    }, compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l, a, i) {
        var o, s, d = null != n ? n : t.nullContext || {}, c = t.hooks.helperMissing, u = "function";
        return (null != (o = (r.is_equal || n && n.is_equal || c).call(d, null != n ? n.cssLoaded : n, 0, {
            name: "is_equal",
            hash: {},
            fn: t.program(1, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 1, column: 0}, end: {line: 225, column: 13}}
        })) ? o : "") + '\r\n<div class="' + (null != (o = typeof (s = null != (s = r.prefix || (null != n ? n.prefix : n)) ? s : c) === u ? s.call(d, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 227, column: 12}, end: {line: 227, column: 24}}
        }) : s) ? o : "") + '">\r\n\r\n\t<div class="logo-row">\r\n\t\t<img src="instrument_data/acid_synth/data/logo.svg" style="width:12vw;position:absolute;right:0.5vw;top:0.8vw;opacity:0.6;">\r\n\t</div>\r\n\t\r\n\t<div class="control-row" data-instrument-id="' + (null != (o = typeof (s = null != (s = r.instrumentID || (null != n ? n.instrumentID : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentID",
            hash: {},
            data: l,
            loc: {start: {line: 233, column: 46}, end: {line: 233, column: 64}}
        }) : s) ? o : "") + '">\r\n\r\n\t\t<div class="waveform-container">\r\n\t\t\t<div class="label">Wave</div>\r\n\r\n\t\t\t\x3c!--Toggle switch--\x3e\r\n\t\t\t<div class="switch-outer js-toggle-switch" data-type="vertical" data-instrument-id="' + (null != (o = typeof (s = null != (s = r.instrumentID || (null != n ? n.instrumentID : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentID",
            hash: {},
            data: l,
            loc: {start: {line: 239, column: 87}, end: {line: 239, column: 105}}
        }) : s) ? o : "") + '" data-control-id="0" style="display:inline-block;">\r\n\t\t\t\t<div class="switch-line"></div>\r\n\t\t\t\t<div class="switch-inner top"></div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div style="display:inline-block;vertical-align:top;height:4.6vw;position:relative;padding-top:16px;;;">\r\n\t\t\t\t<img src="assets/icons/waveforms/sawtooth.svg" class="icon"><br>\r\n\t\t\t\t\x3c!--<span>Saw</span>--\x3e\r\n\t\t\t\t<img src="assets/icons/waveforms/square.svg" class="icon" style="padding-top:10px;">\r\n\t\t\t\t\x3c!--<span>Sqr</span>--\x3e\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\r\n' + (null != (o = r.each.call(d, null != n ? n.controls : n, {
            name: "each",
            hash: {},
            fn: t.program(3, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 254, column: 2}, end: {line: 315, column: 11}}
        })) ? o : "") + '\r\n\t\t<div class="step-container right-container">\r\n\t\t\t<div class="label" style="margin-bottom:0.6vw;"></div>\r\n\t\t\t<div class="button1 js-randomise-pattern" data-instrument-id="' + (null != (o = typeof (s = null != (s = r.instrumentID || (null != n ? n.instrumentID : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentID",
            hash: {},
            data: l,
            loc: {start: {line: 319, column: 65}, end: {line: 319, column: 83}}
        }) : s) ? o : "") + '">Randomize</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>'
    }, useData: !0, useDepths: !0
}), this.templates.instruments.dr1 = this.templates.instruments.dr1 || {}, this.templates.instruments.dr1.view = Handlebars.template({
    1: function (t, n, r, e, l) {
        var a, i, o = null != n ? n : t.nullContext || {}, s = t.hooks.helperMissing, d = "function",
            c = t.escapeExpression;
        return "\t<style>\r\n\t\t." + c(typeof (i = null != (i = r.machineName || (null != n ? n.machineName : n)) ? i : s) === d ? i.call(o, {
            name: "machineName",
            hash: {},
            data: l,
            loc: {start: {line: 3, column: 3}, end: {line: 3, column: 18}}
        }) : i) + "-wrapper .rack-main{\r\n\t\t\t/*background:#333;*/\r\n\t\t}\r\n\t\t." + (null != (a = typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 6, column: 3}, end: {line: 6, column: 15}}
        }) : i) ? a : "") + "{\r\n\t\t\theight:12.5vw;\r\n\t\t\tcolor:#777;\r\n\t\t\t/*background:linear-gradient(to right, #181a1b 0%, #1b2021 49%, #1b2021 50%, #181a1b 100%);*/\r\n\t\t\tbackground:linear-gradient(to right, #b6beb1 0%, #afb5ab 20%, #bcc1ba 50%, #c6ccc2 75%, #b9bfb5 100%);\r\n\t\t\t/*background:linear-gradient(to right, #2a2623 0%, #322f2a 50%, #292522 100%);*/\r\n\t\t\tbackground:linear-gradient(to bottom, #cac9ca 0%, #cecdcc 50%, #d0ccc9 100%);\r\n\t\t\tfont-size:0.9vw;\r\n\t\t\tposition:relative;\r\n\t\t\tborder-radius:0.2vw;\r\n\t\t\t\r\n\t\t\t/*\r\n\t\t\tbox-shadow: 0.2vw 0.2vw 0.3vw rgba(0,0,0,0.4);\r\n\t\t\t*/\r\n\t\t\t\r\n\t\t\t/*\r\n\t\t\tborder-left:0.6vw solid #999;\r\n\t\t\tborder-right:0.6vw solid #999;\r\n\t\t\t*/\r\n\r\n\t\t}\r\n\t\t." + (null != (a = typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 27, column: 3}, end: {line: 27, column: 15}}
        }) : i) ? a : "") + " > .drum-title-bar{\r\n\t\t\tbackground:#cf5c00;\r\n\t\t\tdisplay:none;\r\n\t\t\tposition:absolute;\r\n\t\t\ttop:0.5vw;\r\n\t\t\theight:1.3vw;\r\n\t\t\twidth:100%;\r\n\t\t\tz-index:2;\r\n\t\t}\r\n\t\t." + (null != (a = typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 36, column: 3}, end: {line: 36, column: 15}}
        }) : i) ? a : "") + " > .control-row{\r\n\t\t\tdisplay:flex;\r\n\t\t\t/*justify-content: space-between;*/\r\n\t\t\twidth:100%;\r\n\t\t\theight:calc(100% - 0.8vw);\r\n\t\t\tposition:relative;\r\n\t\t\ttop:0.4vw;\r\n\t\t\tleft:0.4vw;\r\n\t\t}\r\n\t\t." + (null != (a = typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 45, column: 3}, end: {line: 45, column: 15}}
        }) : i) ? a : "") + " > .control-row > .knob-container{\r\n\t\t\ttext-align:center;\r\n\t\t\twidth:7.6%;\r\n\t\t\tbackground:#444;\r\n\t\t\tbackground:#66635d;\r\n\t\t\tbackground:#b2b3b3;\r\n\t\t\tbackground:linear-gradient(to bottom, #b2b3b3 0%, #939393 100%);\r\n\t\t\tbackground:linear-gradient(to bottom, #b4b3b1 0%, #9c9c9b 100%);\r\n\t\t\tmargin-right:0.3vw;\r\n\t\t\tborder-radius:4px;\r\n\t\t\t/*height:100%;*/\r\n\t\t}\r\n\r\n\t\t." + (null != (a = typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 58, column: 3}, end: {line: 58, column: 15}}
        }) : i) ? a : "") + " > .control-row > .knob-container:last-child{\r\n\t\t\tborder-right:0;\r\n\t\t}\r\n\r\n\t\t." + (null != (a = typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 62, column: 3}, end: {line: 62, column: 15}}
        }) : i) ? a : "") + " > .control-row > .knob-container > .drum-title{\r\n\t\t\tcolor:#fff;\r\n\t\t\tfont-weight:normal;\r\n\t\t\twidth:95%;\r\n\t\t\tdisplay:inline-block;\r\n\t\t\tposition:relative;\r\n\t\t\tz-index:3;\r\n\t\t\theight:1.1vw;\r\n\t\t\tpadding-top:0.2vw;\r\n\t\t\tbackground:#cf5c00;\r\n\t\t\twidth:100%;\r\n\t\t\tborder-radius:4px 4px 0 0;\r\n\t\t}\r\n\r\n\t\t." + (null != (a = typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 76, column: 3}, end: {line: 76, column: 15}}
        }) : i) ? a : "") + " > .control-row > .knob-container > .label{\r\n\t\t\tmargin-top:0.2vw;\r\n\t\t\tcolor:#666;\r\n\t\t}\r\n\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 82, column: 3}, end: {line: 82, column: 13}}
        }) : i) + " > .control-row > .knob-container > .knob-outer {\r\n\t\t  display:inline-block;\r\n\t\t  position:relative;\r\n\t\t  width:2.1vw;\r\n\t\t  height:2.1vw;\r\n\t\t  border-radius:50%;  \r\n\t\t  /*background:linear-gradient(#b5b5b5,#F9F8F7);*/\r\n\t\t  background:linear-gradient(#313537, #222);\r\n\t\t  background:linear-gradient(to bottom, #666 0%, #333 20%, #333 90%, #222 100%);\r\n\t\t  top:0.1vw;\r\n\t\t  box-shadow: 0vw 0.1vw 0.1vw rgba(0,0,0,0.3);\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 95, column: 3}, end: {line: 95, column: 13}}
        }) : i) + " > .control-row > .knob-container >.knob-outer > .knob-main {\r\n\t\t  position:absolute;\r\n\t\t  left:0.15vw;\r\n\t\t  top:0.15vw;\r\n\t\t  bottom:0.15vw;\r\n\t\t  right:0.15vw;\r\n\t\t  border-radius:50%;\r\n\t\t  background:#2a2d2f;\r\n\r\n\t\t  backface-visibility:hidden;\r\n\t\t  /*transition:1.5s;*/\r\n\t\t  transform: rotate(-135deg);\r\n\t\t  /*transform: rotate(0deg);*/\r\n\r\n\t\t  will-change:transform;\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 112, column: 3}, end: {line: 112, column: 13}}
        }) : i) + ' > .control-row >.knob-container > .knob-outer > .knob-main:before {\r\n\t\t  display:block;\r\n\t\t  content:"";\r\n\t\t  width:10%;\r\n\t\t  height:0.8vw;\r\n\t\t  background:#e78615;\r\n\t\t  /*margin:0 auto;*/\r\n\t\t  left:46%;\r\n\t\t  position:absolute;\r\n\t\t  opacity:1;\r\n\t\t  box-shadow:0 .25vw .1vw rgba(0,0,0,0.4) inset;\r\n\t\t}\r\n\r\n\t\t.' + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 125, column: 3}, end: {line: 125, column: 13}}
        }) : i) + " > .control-row > .knob-container > .knob-outer > .knob-line {\r\n\t\t\tposition:absolute;\r\n\t\t\ttransform-origin:bottom;\r\n\t\t\theight:55%;\r\n\t\t\ttop:-5%;\r\n\t\t\twidth:1px;\r\n\t\t\tbackground:#747576;\r\n\t\t\tleft:50%;\r\n\t\t\t-webkit-backface-visibility: hidden; /*Fix for weird chrome bug when waveform switch animates, it was adding padding to this!*/\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 136, column: 3}, end: {line: 136, column: 13}}
        }) : i) + " > .control-row > .knob-container > .mute-container{\r\n\t\t\twidth:100%;\r\n\t\t\tdisplay:flex;\r\n\t\t\tjustify-content:center;\r\n\t\t\tmargin-top:0.2vw;\r\n\t\t\tposition:relative;\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 144, column: 3}, end: {line: 144, column: 13}}
        }) : i) + " > .control-row > .knob-container > .mute-container > .drum-mute{\r\n\t\t\twidth:80%;\r\n\t\t\tbackground:#ddd;\r\n\t\t\tborder-radius:3px;\r\n\t\t\tposition:relative;\r\n\t\t\tborder:0.1vw solid #aaa;\r\n\t\t\tbox-sizing:border-box;\r\n\t\t\tbox-shadow: 0.0vw 0.1vw 0.1vw rgba(1,0,0,0.4);\r\n\t\t\tcolor:#888;\r\n\t\t\tfont-size:0.8vw;\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 156, column: 3}, end: {line: 156, column: 13}}
        }) : i) + " .drum-mute-active{\r\n\t\t\tbackground:#bd191c !important;\r\n\t\t\tbackground:#a23436 !important;\r\n\t\t\tborder:0.1vw solid #a23436 !important;\r\n\t\t\tcolor:#eee !important;\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 163, column: 3}, end: {line: 163, column: 13}}
        }) : i) + " > .control-row > .knob-container > .drum-pad-outer{\r\n\t\t\twidth:80%;\r\n\t\t\theight:0;\r\n\t\t\tpadding-bottom:52%;\r\n\t\t\tbackground:linear-gradient(to bottom, #555 0%, #333 10%, #333 90%, #222 100%);\r\n\t\t\tborder-radius:0.2vw;\r\n\t\t\tposition:relative;\r\n\t\t\tdisplay:inline-block;\r\n\t\t\tbox-shadow: 0.0vw 0.1vw 0.2vw rgba(1,0,0,0.5);\r\n\t\t\tmargin-top:0.3vw;\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 175, column: 3}, end: {line: 175, column: 13}}
        }) : i) + " > .control-row > .knob-container > .pad-pushed{\r\n\t\t\tbackground:linear-gradient(to bottom, #333 0%, #2d2d2d 10%, #2d2d2d 90%, #111 100%);\r\n\t\t\tbox-shadow: 0vw 0.1vw 0.4vw rgba(0,0,0,0.1);\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 180, column: 3}, end: {line: 180, column: 13}}
        }) : i) + " > .control-row > .kit-container{\r\n\t\t\twidth:16.0%;\r\n\t\t\t\r\n\t\t\ttop:0;\r\n\t\t}\t\t\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 186, column: 3}, end: {line: 186, column: 13}}
        }) : i) + " > .control-row > .kit-container > .kit-selector{\r\n\t\t\tbackground:red;\r\n\t\t\tpadding:0.5vw 0.3vw;\r\n\t\t\tpadding-bottom:0.6vw;\r\n\t\t\tdisplay:flex;\r\n\t\t\theight:2vw;\r\n\t\t\twidth:100%;\r\n\t\t\tbackground:#adaeae;\r\n\t\t\tborder-radius:0 0 4px 4px;\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 197, column: 3}, end: {line: 197, column: 13}}
        }) : i) + " > .control-row > .kit-container > .kit-selector > .button1{\r\n\t\t\twidth:20%;\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 201, column: 3}, end: {line: 201, column: 13}}
        }) : i) + " > .control-row > .kit-container > .kit-selector > .screen{\r\n\t\t\twidth:80%;\r\n\t\t\tbackground:linear-gradient(to right, #333, #87a600 1%, #85b603 5%, #85b603 95%, #87a600 100%);\r\n\t\t\tbackground:linear-gradient(to right, #0da1cf 0%, #0fb4e7 5%, #0fb4e7 95%, #0da1cf 100%);\r\n\t\t\tcolor:#0a4c61;\r\n\t\t\tcolor:#bef0ff;\r\n\t\t\tdisplay:flex;\r\n\t\t\talign-items:center;\r\n\t\t\tjustify-content:center;\r\n\t\t\theight:100%;\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 213, column: 3}, end: {line: 213, column: 13}}
        }) : i) + " .button1{\r\n\t\t\tdisplay:flex;\r\n\t\t\talign-items:center;\r\n\t\t\tjustify-content:center;\r\n\t\t\tbackground:linear-gradient(to bottom, #fff, #edf1fc 4%, #edf1fc 96%, #edf1fc 100%); \r\n\t\t\theight:100%;\r\n\t\t\t\r\n\t\t\tcursor:pointer;\r\n\t\t\tbox-shadow: 0.0vw 0.1vw 0.2vw rgba(1,0,0,0.1);\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 224, column: 3}, end: {line: 224, column: 13}}
        }) : i) + " .radius-left{\r\n\t\t\tborder-radius:0.2vw 0 0 0.2vw;\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 228, column: 3}, end: {line: 228, column: 13}}
        }) : i) + " .radius-right{\r\n\t\t\tborder-radius:0 0.2vw 0.2vw 0;\r\n\t\t}\r\n\r\n\t\t." + c(typeof (i = null != (i = r.prefix || (null != n ? n.prefix : n)) ? i : s) === d ? i.call(o, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 232, column: 3}, end: {line: 232, column: 13}}
        }) : i) + " .kit-select-label{\r\n\t\t\tbackground:#4189a8;\r\n\t\t\tcolor:white;\r\n\t\t\twidth:100%;\r\n\t\t\tborder-radius:4px 4px 0 0;\r\n\t\t\tpadding: 0.2vw 0.3vw;\r\n\t\t}\r\n\r\n\t\t\r\n\r\n\t</style>\r\n"
    }, 3: function (t, n, r, e, l, a, i) {
        var o, s, d = null != n ? n : t.nullContext || {}, c = t.escapeExpression, u = t.lambda,
            p = t.hooks.helperMissing, m = "function";
        return '\t\t\t\r\n\t\t\t<div class="knob-container">\r\n\t\t\t\t<div class="drum-title js-drum-title">' + c(r.lookup.call(d, null != (o = null != i[1] ? i[1].viewData : i[1]) ? o.drumNames : o, l && l.index, {
            name: "lookup",
            hash: {},
            data: l,
            loc: {start: {line: 253, column: 42}, end: {line: 253, column: 81}}
        })) + "</div>\r\n\t\t\t\t\r\n" + (null != (o = r.each.call(d, n, {
            name: "each",
            hash: {},
            fn: t.program(4, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 255, column: 4}, end: {line: 275, column: 13}}
        })) ? o : "") + '\r\n\t\t\t\t<div class="mute-container">\r\n\t\t\t\t\t\x3c!--Midi learn overlay--\x3e\r\n\t\t\t\t\t<div class="midi-learn-overlay js-midi-learn-overlay" data-control-type="instrument" data-type="drum-mute" data-instrument-id="' + c(u(null != i[1] ? i[1].instrumentID : i[1], n)) + '" data-control-id="' + c(typeof (s = null != (s = r.index || l && l.index) ? s : p) === m ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 279, column: 170}, end: {line: 279, column: 180}}
        }) : s) + '" data-instrument-count="' + c(u(null != i[1] ? i[1].instrumentCount : i[1], n)) + '" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%;"></div>\r\n\t\t\t\t\t<div class="drum-mute js-control-pad btn" data-instrument-id="' + (null != (o = u(null != i[1] ? i[1].instrumentID : i[1], n)) ? o : "") + '" data-control-id="' + c(typeof (s = null != (s = r.index || l && l.index) ? s : p) === m ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 280, column: 107}, end: {line: 280, column: 117}}
        }) : s) + '" data-type="drum-mute" id="' + (null != (o = u(null != i[1] ? i[1].instrumentID : i[1], n)) ? o : "") + "_mute_" + c(typeof (s = null != (s = r.index || l && l.index) ? s : p) === m ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 280, column: 172}, end: {line: 280, column: 182}}
        }) : s) + '">MUTE\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="drum-pad-outer js-control-pad" data-instrument-id="' + (null != (o = u(null != i[1] ? i[1].instrumentID : i[1], n)) ? o : "") + '" data-control-id="' + c(typeof (s = null != (s = r.index || l && l.index) ? s : p) === m ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 284, column: 107}, end: {line: 284, column: 117}}
        }) : s) + '" data-type="drum-trigger"></div>\r\n\r\n\t\t\t</div>\r\n\r\n'
    }, 4: function (t, n, r, e, l, a, i) {
        var o;
        return "\r\n" + (null != (o = (r.is_equal || n && n.is_equal || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, null != n ? n.label : n, "Decay", {
            name: "is_equal",
            hash: {},
            fn: t.program(5, l, 0, a, i),
            inverse: t.program(7, l, 0, a, i),
            data: l,
            loc: {start: {line: 257, column: 5}, end: {line: 273, column: 18}}
        })) ? o : "") + "\r\n"
    }, 5: function (t, n, r, e, l) {
        return "\r\n"
    }, 7: function (t, n, r, e, l, a, i) {
        var o, s = t.lambda, d = t.escapeExpression;
        return '\t\t\t\t\t<div class="label">' + d(s(null != n ? n.label : n, n)) + '</div>\r\n\t\t\t\t\t<div class="knob-outer">\t\t\t\t\t\r\n\t\t\t\t\t\t<div class="knob-main js-control-knob" \r\n\t\t\t\t\t\tdata-instrument-id="' + (null != (o = s(null != i[2] ? i[2].instrumentID : i[2], n)) ? o : "") + '" \r\n\t\t\t\t\t\tdata-control-id="' + d(s(null != n ? n.id : n, n)) + '" \r\n\t\t\t\t\t\tdata-control-type="instrument"\r\n\t\t\t\t\t\tid=\'control_knob_' + (null != (o = s(null != i[2] ? i[2].instrumentID : i[2], n)) ? o : "") + "_" + d(s(null != n ? n.id : n, n)) + '_instrument\'\r\n\t\t\t\t\t\t></div>\r\n\r\n\t\t\t\t\t\x3c!--Midi learn overlay--\x3e\r\n\t\t\t\t\t<div class="midi-learn-overlay js-midi-learn-overlay" data-control-type="instrument" data-instrument-id="' + d(s(null != i[2] ? i[2].instrumentID : i[2], n)) + '" data-control-id="' + d(s(null != n ? n.id : n, n)) + '" data-instrument-count="' + d(s(null != i[2] ? i[2].instrumentCount : i[2], n)) + '" style="display:none;"></div>\r\n\r\n\t\t\t\t\t</div>\r\n'
    }, compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l, a, i) {
        var o, s, d = null != n ? n : t.nullContext || {}, c = t.hooks.helperMissing;
        return (null != (o = (r.is_equal || n && n.is_equal || c).call(d, null != n ? n.cssLoaded : n, 0, {
            name: "is_equal",
            hash: {},
            fn: t.program(1, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 1, column: 0}, end: {line: 243, column: 13}}
        })) ? o : "") + '\r\n<div class="' + (null != (o = "function" == typeof (s = null != (s = r.prefix || (null != n ? n.prefix : n)) ? s : c) ? s.call(d, {
            name: "prefix",
            hash: {},
            data: l,
            loc: {start: {line: 245, column: 12}, end: {line: 245, column: 24}}
        }) : s) ? o : "") + '">\r\n\r\n\t<div class="drum-title-bar">&nbsp;</div>\r\n\t\r\n\t<div class="control-row" style="">\r\n' + (null != (o = r.each.call(d, null != (o = null != n ? n.viewData : n) ? o.controls : o, {
            name: "each",
            hash: {},
            fn: t.program(3, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 250, column: 2}, end: {line: 288, column: 11}}
        })) ? o : "") + '\r\n\t\t<div class="kit-container">\r\n\t\t\t<div class="kit-select-label">Kit Select</div>\r\n\t\t\t<div class="kit-selector">\r\n\t\t\t\t<div class="button1 radius-left js-control-button" data-control-id="0">&#9668;</div>\r\n\t\t\t\t<div class="screen js-drum-screen">' + t.escapeExpression(t.lambda(null != (o = null != n ? n.viewData : n) ? o.kitName : o, n)) + '</div>\r\n\t\t\t\t<div class="button1 radius-right js-control-button" data-control-id="1">&#9658;</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div style="position:absolute;bottom:0;right:1vw;">\r\n\t\t\t<img src="instrument_data/dr1/data/logo.svg" style="width:8vw">\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>'
    }, useData: !0, useDepths: !0
}), this.templates.about = Handlebars.template({
    compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l) {
        return '<style>\r\n\t.screen-about{\r\n\t\theight:100%;\r\n\t\tbackground:#ccc;\r\n\t}\r\n\t.about-inner{\r\n\t\tpadding:16px;\r\n\t}\r\n\t.about-inner hr {\r\n\t\tmargin: 0.9vw 0;\r\n\t}\r\n\t.about-inner > h1{\r\n\t\tfont-size: 2vw;\r\n\t\tmargin-bottom:0.5vw;\r\n\t}\r\n\t.about-inner > h2{\r\n\t\tfont-size:1.5vw;\r\n\t}\r\n\t.about-inner > .credits-list{\r\n\t\tline-height:2vw;\r\n\t\tmargin-top:0.5vw;\r\n\t}\r\n</style>\r\n\r\n<div class="screen-about">\r\n\t<div class="about-inner">\r\n\t\t<h1>Acid Machine 2</h1>\r\n\t\tErrozero 2016 - 2018\r\n\t\t<hr>\r\n\t\t<h2>Credits</h2>\r\n\t\t<div class="credits-list">\r\n\t\t\t<p>Code, design and concept by <a href="http://www.errozero.co.uk" target="_blank">Errozero</a></p>\r\n\t\t\t<p>FX units use the <a href="https://github.com/Theodeus/tuna" target="_blank">Tuna JS</a> library</p>\r\n\t\t\t<p>Reverb effect impulse response by <a href="http://www.echothief.com" target="_blank">Echo Thief</a></p>\r\n\t\t</div>\r\n\t\t<hr>\r\n\t\t<a href="https://www.errozero.co.uk/privacy-policy">Privacy Policy</a>\r\n\t</div>\r\n</div>'
    }, useData: !0
}), this.templates.editor = Handlebars.template({
    1: function (t, n, r, e, l) {
        var a = t.escapeExpression;
        return '\t\t\t\t\t\t<div class="btn btn-ptn-select js-pr-pattern-select" data-pattern-id="' + a(t.lambda(n, n)) + '">' + a((r.plusOne || n && n.plusOne || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, n, {
            name: "plusOne",
            hash: {},
            data: l,
            loc: {start: {line: 330, column: 86}, end: {line: 330, column: 102}}
        })) + "</div>\r\n"
    }, 3: function (t, n, r, e, l) {
        var a;
        return null != (a = (r.is_equal || n && n.is_equal || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, n, 2, {
            name: "is_equal",
            hash: {},
            fn: t.program(4, l, 0),
            inverse: t.program(6, l, 0),
            data: l,
            loc: {start: {line: 350, column: 6}, end: {line: 354, column: 19}}
        })) ? a : ""
    }, 4: function (t, n, r, e, l) {
        return "\t\t\t\t\t\t\t\r\n"
    }, 6: function (t, n, r, e, l) {
        var a = null != n ? n : t.nullContext || {}, i = t.hooks.helperMissing, o = t.escapeExpression;
        return '\t\t\t\t\t\t\t<div class="btn btn-ptn-select js-ptn-length" data-pattern-length="' + o((r.plusOne || n && n.plusOne || i).call(a, n, {
            name: "plusOne",
            hash: {},
            data: l,
            loc: {start: {line: 353, column: 74}, end: {line: 353, column: 90}}
        })) + '">' + o((r.plusOne || n && n.plusOne || i).call(a, n, {
            name: "plusOne",
            hash: {},
            data: l,
            loc: {start: {line: 353, column: 92}, end: {line: 353, column: 108}}
        })) + "</div>\r\n"
    }, 8: function (t, n, r, e, l) {
        return '\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class="pr-pos-light">' + t.escapeExpression((r.plusOne || n && n.plusOne || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, n, {
            name: "plusOne",
            hash: {},
            data: l,
            loc: {start: {line: 410, column: 33}, end: {line: 410, column: 49}}
        })) + "</div>\r\n\t\t\t\t\t\t</td>\r\n"
    }, 10: function (t, n, r, e, l) {
        return '\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td style="width:100%;" class="js-piano-roll-key" data-id="' + t.escapeExpression(t.lambda(n, n)) + '"></td>\r\n\t\t\t\t\t</tr>\r\n'
    }, 12: function (t, n, r, e, l, a, i) {
        var o;
        return "\t\t\t\t\t\t<tr>\r\n" + (null != (o = (r.simpleLoop || n && n.simpleLoop || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, null != i[1] ? i[1].patternLength : i[1], {
            name: "simpleLoop",
            hash: {},
            fn: t.program(13, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 436, column: 7}, end: {line: 438, column: 22}}
        })) ? o : "") + "\t\t\t\t\t\t</tr>\r\n"
    }, 13: function (t, n, r, e, l, a, i) {
        var o = t.lambda, s = t.escapeExpression;
        return '\t\t\t\t\t\t\t\t<td data-row-id="' + s(o(i[1], n)) + '" data-col-id="' + s(o(n, n)) + '"></td>\r\n'
    }, 15: function (t, n, r, e, l) {
        var a = t.escapeExpression;
        return '\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<div class="pr-pos-light" data-col-id="' + a(t.lambda(n, n)) + '" >' + a((r.plusOne || n && n.plusOne || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, n, {
            name: "plusOne",
            hash: {},
            data: l,
            loc: {start: {line: 455, column: 58}, end: {line: 455, column: 74}}
        })) + "</div>\r\n\t\t\t\t\t\t\t</td>\r\n"
    }, 17: function (t, n, r, e, l) {
        var a = t.lambda, i = t.escapeExpression;
        return '\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<div class="pr-button" data-col-id="' + i(a(n, n)) + '" data-type="accent">A</div>\r\n\t\t\t\t\t\t\t\t\t<div class="pr-button" data-col-id="' + i(a(n, n)) + '" data-type="slide">S</div>\r\n\t\t\t\t\t\t\t\t\t<div class="pr-button" data-col-id="' + i(a(n, n)) + '" data-type="octUp">&#9650;</div>\r\n\t\t\t\t\t\t\t\t\t<div class="pr-button" data-col-id="' + i(a(n, n)) + '" data-type="octDown">&#9660;</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n'
    }, 19: function (t, n, r, e, l) {
        var a = t.lambda, i = t.escapeExpression;
        return '\t\t\t\t\t\t\t\t<td data-col-id="' + i(a(n, n)) + '">\r\n\t\t\t\t\t\t\t\t\t<div class="js-velocity-level" data-col-id="' + i(a(n, n)) + '"></div>\r\n\t\t\t\t\t\t\t\t</td>\r\n'
    }, compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l, a, i) {
        var o, s = null != n ? n : t.nullContext || {}, d = t.hooks.helperMissing;
        return '<style>\r\n\t.screen-editor{\r\n\t\theight:100%;\r\n\t\toverflow-y:hidden;\r\n\t}\r\n\r\n\t/*Top Bar*/\r\n\t.screen-editor .editor-top-bar{\r\n\t\tbackground:#ccc;\r\n\t\theight:10%;\r\n\t\tpadding:0.5%;\r\n\t}\r\n\r\n\t.screen-editor > .editor-top-bar > .group{\r\n\t\tdisplay:inline-block;\r\n\t\tvertical-align:top;\r\n\t\theight:99%;\r\n\t\t/*background:rgba(0,0,0,0.1);*/\r\n\t\tborder-right:1px solid rgba(0,0,0,0.2);\r\n\t\tpadding-right:1.2vw;\r\n\t\tmargin-left:1vw;\r\n\t}\r\n\r\n\t.screen-editor > .editor-top-bar > .group > label{\r\n\t\tdisplay:block;\r\n\t\theight:24%;\r\n\t\tfont-size:1vw;\r\n\t}\r\n\r\n\t.screen-editor > .editor-top-bar > .group > .button-group{\r\n\t\tdisplay:inline-block;\r\n\t\tvertical-align:top;\r\n\t\theight:76%;\r\n\t}\r\n\r\n\t.editor-top-bar .btn {\r\n\t\tbackground:#eee;\r\n\t}\r\n\r\n\t.editor-top-bar .btn-ptn-select{\r\n\t\tmargin-right:0.2vw;\r\n\t\twidth:2.2vw;\r\n\t\theight:94%;\r\n\t}\r\n\r\n\t.editor-top-bar .btn-shift-y{\r\n\t\tfont-size:0.9vw;\r\n\t\tpadding:0;\r\n\t}\r\n\r\n\t.editor-top-bar .btn-shift-x{\r\n\t\tfont-size:1.1vw;\r\n\t\tpadding:0;\r\n\t}\r\n\r\n\t.editor-top-bar .muted{\r\n\t\tcolor:#888;\r\n\t}\r\n\r\n\t.editor-top-bar .btn-top-bar{\r\n\t\tmin-height:46%;\r\n\t\tpadding: 0 1vw;\r\n\t\theight:94%;\r\n\t}\r\n\r\n\t#pr-instrument-selector{\r\n\t\tborder:0;\r\n\t\theight:50%;\r\n\t\twidth:10vw;\r\n\t\tbackground:#eee;\r\n\t}\r\n\r\n\r\n\t/*Main container (Under top bar)*/\r\n\t.screen-editor > .pr-main{\r\n\t\theight:88%;\r\n\t\twidth:100%;\r\n\t\tpadding:0;\r\n\t}\r\n\r\n\t\r\n\t/*Row 1*/\r\n\t.screen-editor > .pr-main > .pr-row-1{\r\n\t\tdisplay:flex;\r\n\t\theight:70%;\r\n\t\twidth:100%;\r\n\t\tpadding:0;\r\n\t\tbackground:#ccc;\r\n\t}\r\n\r\n\r\n\t/*KEYS*/\r\n\t.screen-editor > .pr-main > .pr-row-1 > #pr-keys {\r\n\t\theight:100%;\r\n\t\twidth:8%;\r\n\t\tpadding:0;\r\n\t}\r\n\t.screen-editor > .pr-main > .pr-row-1 > #pr-keys tr td{\r\n\t\tvertical-align:middle;\r\n\t\tpadding-left:4%;\r\n\t\tline-height:0;\r\n\t\tpadding-bottom:8px;\r\n\t}\r\n\t.screen-editor > .pr-main >.pr-row-1 > #pr-keys .drum-label {\r\n\t\tborder:1px solid rgba(0,0,0,0.5);\r\n\t}\r\n\r\n\t/*Main Grid*/\r\n\t.screen-editor > .pr-main > .pr-row-1 > .pr-grid-container {\r\n\t\tposition:relative;\r\n\t\twidth:92%;\r\n\t\theight:100%;\r\n\t\tbackground:linear-gradient(to bottom, #1f5d81, #2071a1 40%, #2071a1 60%, #1f5d81 100%);\r\n\t\tpadding:0;\r\n\t\toverflow-y:hidden;\r\n\t\toverflow-x:auto;\r\n\t}\r\n\t.screen-editor > .pr-main > .pr-row-1 > .pr-grid-container > #pr-grid {\r\n\t\theight:100%;\r\n\t\twidth:100%;\r\n\t\ttable-layout: fixed;\r\n\t\tposition:relative;\r\n\t\tz-index:2;\r\n\t}\r\n\t#pr-grid tr td {\r\n\t\tborder:1px solid #8ab2c8;\r\n\t\tcolor:white;\r\n\t\tfont-weight:bold;\r\n\t\tvertical-align: bottom;\r\n\t\tpadding-bottom:8px;\t\t\r\n\t\tline-height:0;\r\n\t}\r\n\t#pr-grid tr td:first-child{\r\n\t\tborder-left:0 !important;\r\n\t}\r\n\t#pr-grid tr td:last-child{\r\n\t\tborder-right:0 !important;\r\n\t}\r\n\t.note-active{\r\n\t\tbackground:#8cc6fe;\r\n\t\tbackground:#0fb4e7;\r\n\t\tborder: 1px solid #1e65ac;\r\n\t\t/*outline:2px solid white;*/\r\n\t}\r\n\t.screen-editor > .pr-main > .pr-row-1 > .pr-grid-container > .pr-pos-highlight {\r\n\t\tposition:absolute;\r\n\t\tbackground:white;\r\n\t\topacity:0.2;\r\n\t\theight:100%;\r\n\t\t/*width:6.25%; /* 100 / 16 */*/\r\n\t\tleft:0;\r\n\t\tz-index:0;\r\n\t}\r\n\r\n\r\n\t/*Row 2*/\r\n\t.screen-editor > .pr-main > .pr-row-2{\r\n\t\tbackground:#ccc;\r\n\t\tbackground:#1f5d81;\r\n\t\tdisplay:flex;\r\n\t\theight:20%;\r\n\t\twidth:100%;\r\n\t\tpadding:0;\r\n\t\tpadding-bottom:2.5vh;\r\n\t}\r\n\r\n\t.screen-editor > .pr-main > .pr-row-2 > #pr-bottom-container{\r\n\t\twidth:92%;\r\n\t}\r\n\r\n\t.screen-editor > .pr-main > .pr-row-2 > #pr-bottom-container > table{\r\n\t\twidth:100%;\r\n\t\theight:100%;\r\n\t\ttable-layout:fixed;\r\n\t}\r\n\r\n\t.screen-editor > .pr-main > .pr-row-2 > .spacer{\r\n\t\tmargin-top:1vh;\r\n\t\twidth:8%;\r\n\t\theight:100%;\r\n\t\tcolor:#999;\r\n\t}\r\n\r\n\t.screen-editor > .pr-main > .pr-row-2 > .spacer div{\r\n\t\tpadding-left:0.5vh;\r\n\t\tline-height:2.2vh;\r\n\t\tmargin-top:-0.3vh;\r\n\t}\r\n\r\n\t.screen-editor > .pr-main > .pr-row-2 > #pr-bottom-container > #pr-velocity{\r\n\t\tmargin-top:1vh;\r\n\t\tcolor:white;\r\n\t}\r\n\r\n\t.screen-editor > .pr-main > .pr-row-2 > #pr-bottom-container > #pr-velocity tr td {\r\n\t\tposition:relative;\t\r\n\t\tborder:1px solid rgba(255,255,255,0.4);\r\n\t}\r\n\r\n\r\n\t/*\r\n\t.screen-editor > .pr-main > .pr-row-2 > #pr-bottom-container > #pr-velocity div {\r\n\t\tbackground:transparent;\r\n\t\theight:90%;\r\n\t\twidth:84%;\r\n\t\tborder-top:0.1vh solid #0fb4e7;\r\n\t\tborder-left:0.6vh solid #0fb4e7;\r\n\t\tposition:absolute;\r\n\t\tbottom:0;\r\n\t\tleft:-0.3vh;\r\n\t\tbackground:rgba(255,255,255,0.1);\r\n\t}\r\n\t.screen-editor > .pr-main > .pr-row-2 > #pr-bottom-container > #pr-velocity div::before {\r\n\t\tcontent: \'\';\r\n\t\tbackground:#111;\r\n\t\tborder:0.3vh solid #0fb4e7;\r\n\t\twidth:1.0vh;\r\n\t\theight:1.0vh;\r\n\t\tposition:absolute;\r\n\t\tleft:-0.95vh;\r\n\t\ttop:-0.7vh;\r\n\t\tborder-radius:100%;\r\n\t}\r\n\t*/\r\n\r\n\t.screen-editor > .pr-main > .pr-row-2 > #pr-bottom-container > #pr-velocity div {\r\n\t\theight:90%;\r\n\t\twidth:100%;\r\n\t\tborder-top:0.3vh solid #0fb4e7;\r\n\t\tposition:absolute;\r\n\t\tbottom:0;\r\n\t\tbackground:rgba(50,50,255,0.1);\r\n\r\n\t\tbackground:rgba(15, 180, 231, 0.2);\r\n\t}\r\n\r\n\r\n\t/*Bottom Buttons*/\r\n\t.screen-editor > .pr-main > .pr-row-2 > #pr-bottom-container > #pr-buttons tr td {\r\n\t\t\r\n\t}\r\n\r\n\t.screen-editor > .pr-main > .pr-pos-row{\r\n\t\tbackground:#444;\r\n\t\tdisplay:flex;\r\n\t\twidth:100%;\r\n\t}\r\n\r\n\t.screen-editor > .pr-main > .pr-pos-row > .spacer {\r\n\t\twidth:8%;\r\n\t\t/*height:100%;*/\r\n\t}\r\n\r\n\t.pr-lights{\r\n\t\twidth:92%;\r\n\t\t/*height:100%;*/\r\n\t\ttable-layout:fixed;\r\n\t\ttext-align:center;\r\n\t\tcolor:#ccc;\r\n\t}\r\n\r\n\t.pr-pos-light{\r\n\t\t/*margin:auto;*/\r\n\t\twidth:100%;\r\n\t\ttext-align:center;\r\n\t\tfont-size:0.8vw;\r\n\t\tpadding:0;\r\n\t}\r\n\r\n\t.pr-pos-light-on{\r\n\t\tbackground:#197C9A;\r\n\t}\r\n\t\r\n\r\n\r\n\r\n\t.pr-button {\r\n\t\tdisplay:flex;\r\n\t\talign-items:center;\r\n\t\tjustify-content:center;\r\n\t\twidth:80%;\r\n\t\theight:20%;\r\n\t\tbackground:#eee;\t\r\n\t\tbox-sizing:border-box;\r\n\t\tposition:relative;\r\n\t\tleft:50%;\r\n\t\ttransform:translateX(-50%);\r\n\t\tmargin-top:1vh;\r\n\t\tborder-radius:0.2vw;\r\n\t\t\r\n\t}\r\n\t.pr-button-active{\r\n\t\tbackground:#0fb4e7 !important;\r\n\t\tcolor:white;\r\n\t}\r\n\r\n\t.length-button-active{\r\n\t\tbackground:#0fb4e7 !important;\r\n\t\tcolor:white;\t\r\n\t}\r\n\r\n\t.screen-editor .button-flash{\r\n\t\tbackground:red;\r\n\t}\r\n\r\n\t#pr-pos-marker{\r\n\t\tbackground:red;\r\n\t}\r\n\r\n</style>\r\n\r\n<div class="screen-editor">\r\n\t<div class="editor-top-bar">\r\n\r\n\t\t<div class="group" style="margin-left:0 !important;">\r\n\t\t\t<label>Instrument</label>\r\n\t\t\t<div class="button-group">\r\n\t\t\t\t<select id="pr-instrument-selector">\r\n\t\t\t\t\t<option></option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t\x3c!--Pattern Select Buttons--\x3e\r\n\t\t<div class="group">\r\n\t\t\t<label>Pattern Select</label>\r\n\t\t\t<div class="button-group">\r\n\t\t\t\t<div class="height-50 flex">\r\n' + (null != (o = (r.simpleLoop || n && n.simpleLoop || d).call(s, 8, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(1, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 329, column: 5}, end: {line: 331, column: 20}}
        })) ? o : "") + '\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="height-50 flex">\r\n\t\t\t\t\t<div class="btn btn-ptn-select js-pr-bank-select" data-bank-id="0">A</div>\r\n\t\t\t\t\t<div class="btn btn-ptn-select js-pr-bank-select" data-bank-id="1">B</div>\r\n\t\t\t\t\t<div class="btn btn-ptn-select js-pr-bank-select" data-bank-id="2">C</div>\r\n\t\t\t\t\t<div class="btn btn-ptn-select js-pr-bank-select" data-bank-id="3">D</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\x3c!--End Pattern Select Buttons--\x3e\r\n\r\n\t\t<div class="group">\r\n\t\t\t<label>Length <span class="muted">(Bars)</span></label>\r\n\t\t\t<div class="button-group">\r\n\t\t\t\t<div class="height-50 flex">\r\n' + (null != (o = (r.simpleLoop || n && n.simpleLoop || d).call(s, 3, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(3, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 349, column: 5}, end: {line: 355, column: 20}}
        })) ? o : "") + '\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="group">\r\n\t\t\t<label>Notes</label>\r\n\t\t\t<div class="button-group">\r\n\t\t\t\t<div class="height-50">\r\n\t\t\t\t\t<div class="btn btn-top-bar js-pr-randomise">Randomise</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="height-50">\r\n\t\t\t\t\t<div class="btn btn-top-bar js-pr-clear">Clear</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="group">\r\n\t\t\t<label>Shift</label>\r\n\t\t\t<div class="button-group">\r\n\t\t\t\t<div class="height-50 flex">\r\n\t\t\t\t\t<div class="btn btn-ptn-select btn-shift-x js-ptn-shift" data-direction="left">&#9668;</div>\r\n\t\t\t\t\t<div class="btn btn-ptn-select btn-shift-x js-ptn-shift" data-direction="right">&#9658;</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="height-50 flex">\r\n\t\t\t\t\t<div class="btn btn-ptn-select btn-shift-y js-ptn-shift" data-direction="up">&#9650;</div>\r\n\t\t\t\t\t<div class="btn btn-ptn-select btn-shift-y js-ptn-shift" data-direction="down">&#9660;</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="group">\r\n\t\t\t<label>Clipboard</label>\r\n\t\t\t<div class="button-group">\r\n\t\t\t\t<div class="height-50">\r\n\t\t\t\t\t<div class="btn btn-top-bar js-clipboard" data-type="copy">Copy Ptn</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="height-50 flex">\r\n\t\t\t\t\t<div class="btn btn-top-bar js-clipboard" data-type="paste">Paste Ptn</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t\x3c!--End editor top--\x3e\r\n\r\n\t<div class="pr-main">\r\n\r\n\t\t<div class="pr-pos-row">\r\n\t\t\t<div class="spacer"></div>\r\n\t\t\t<table class="pr-lights" id="pr-lights">\r\n\t\t\t\t<tr>\r\n' + (null != (o = (r.simpleLoop || n && n.simpleLoop || d).call(s, null != n ? n.patternLength : n, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(8, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 408, column: 5}, end: {line: 412, column: 20}}
        })) ? o : "") + '\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t\r\n\t\t\x3c!--Row 1--\x3e\r\n\t\t<div class="pr-row-1">\r\n\t\t\t\r\n\t\t\t<table id="pr-keys">\r\n' + (null != (o = (r.simpleLoopInverse || n && n.simpleLoopInverse || d).call(s, 13, {
            name: "simpleLoopInverse",
            hash: {},
            fn: t.program(10, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 421, column: 4}, end: {line: 425, column: 26}}
        })) ? o : "") + '\t\t\t</table>\r\n\r\n\t\t\t<div class="pr-grid-container">\r\n\t\t\t\t\r\n\t\t\t\t\x3c!--Position indicator--\x3e\r\n\t\t\t\t\x3c!--<div class="pr-pos-highlight"></div>--\x3e\r\n\r\n\t\t\t\t<table id="pr-grid">\r\n' + (null != (o = (r.simpleLoopInverse || n && n.simpleLoopInverse || d).call(s, 13, {
            name: "simpleLoopInverse",
            hash: {},
            fn: t.program(12, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 434, column: 5}, end: {line: 440, column: 27}}
        })) ? o : "") + '\t\t\t\t</table>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t\x3c!--End Row 1--\x3e\r\n\r\n\r\n\t\t\t<div class="pr-pos-row">\r\n\t\t\t\t<div class="spacer"></div>\r\n\t\t\t\t<table class="pr-lights">\r\n\t\t\t\t\t<tr>\r\n' + (null != (o = (r.simpleLoop || n && n.simpleLoop || d).call(s, null != n ? n.patternLength : n, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(15, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 453, column: 6}, end: {line: 457, column: 21}}
        })) ? o : "") + '\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\r\n\t\t\r\n\r\n\t\t\x3c!--Row 2--\x3e\r\n\t\t\t<div class="pr-row-2">\r\n\t\t\t\t<div class="spacer"><div class="js-velocity-title"></div></div>\r\n\t\t\t\t\r\n\t\t\t\t<div id="pr-bottom-container">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<table id="pr-buttons">\r\n\t\t\t\t\t\t<tr>\r\n' + (null != (o = (r.simpleLoop || n && n.simpleLoop || d).call(s, null != n ? n.patternLength : n, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(17, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 472, column: 7}, end: {line: 479, column: 22}}
        })) ? o : "") + '\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t<table id="pr-velocity">\r\n\t\t\t\t\t\t<tr>\r\n' + (null != (o = (r.simpleLoop || n && n.simpleLoop || d).call(s, null != n ? n.patternLength : n, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(19, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 485, column: 7}, end: {line: 489, column: 22}}
        })) ? o : "") + "\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\t\t\t\t\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\x3c!--End Row 2..--\x3e\r\n\t</div>\r\n\r\n\r\n</div>"
    }, useData: !0, useDepths: !0
}), this.templates.fx_unit = Handlebars.template({
    1: function (t, n, r, e, l, a, i) {
        var o;
        return null != (o = (r.is_equal || n && n.is_equal || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, null != n ? n.type : n, "knob", {
            name: "is_equal",
            hash: {},
            fn: t.program(2, l, 0, a, i),
            inverse: t.program(4, l, 0, a, i),
            data: l,
            loc: {start: {line: 20, column: 5}, end: {line: 34, column: 18}}
        })) ? o : ""
    }, 2: function (t, n, r, e, l, a, i) {
        var o, s, d = t.lambda, c = t.escapeExpression, u = null != n ? n : t.nullContext || {},
            p = t.hooks.helperMissing, m = "function";
        return '\t\t\t\t\t\t<div class="knob-container" data-control-id="" style="">\r\n\t\t\t\t\t\t\t<div class="label">' + c(d(null != n ? n.label : n, n)) + '</div>\r\n\t\t\t\t\t\t\t<div class="knob-outer">\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div \r\n\t\t\t\t\t\t\t\tclass="knob-main js-control-knob" \r\n\t\t\t\t\t\t\t\tdata-control-id="' + c(typeof (s = null != (s = r.index || l && l.index) ? s : p) === m ? s.call(u, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 26, column: 25}, end: {line: 26, column: 35}}
        }) : s) + '" \r\n\t\t\t\t\t\t\t\tdata-control-type="fx" \r\n\t\t\t\t\t\t\t\tdata-fx-id="' + (null != (o = d(null != i[1] ? i[1].fxID : i[1], n)) ? o : "") + '"\r\n\t\t\t\t\t\t\t\tid="control_fx_' + (null != (o = d(null != i[1] ? i[1].fxID : i[1], n)) ? o : "") + "_" + c(typeof (s = null != (s = r.index || l && l.index) ? s : p) === m ? s.call(u, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 29, column: 37}, end: {line: 29, column: 47}}
        }) : s) + '"\r\n\t\t\t\t\t\t\t\t></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n'
    }, 4: function (t, n, r, e, l) {
        return ""
    }, compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l, a, i) {
        var o, s, d = null != n ? n : t.nullContext || {}, c = t.hooks.helperMissing, u = "function",
            p = t.escapeExpression;
        return '<div class="fx-wrapper js-fx-wrapper" data-mixer-channel="' + p(typeof (s = null != (s = r.mixerChannel || (null != n ? n.mixerChannel : n)) ? s : c) === u ? s.call(d, {
            name: "mixerChannel",
            hash: {},
            data: l,
            loc: {start: {line: 1, column: 58}, end: {line: 1, column: 74}}
        }) : s) + '" data-mixer-slot="' + p(typeof (s = null != (s = r.mixerSlot || (null != n ? n.mixerSlot : n)) ? s : c) === u ? s.call(d, {
            name: "mixerSlot",
            hash: {},
            data: l,
            loc: {start: {line: 1, column: 93}, end: {line: 1, column: 106}}
        }) : s) + '">\r\n\t\r\n\r\n\r\n\t<div class="fx-wrapper-title ' + p(typeof (s = null != (s = r.cssClass || (null != n ? n.cssClass : n)) ? s : c) === u ? s.call(d, {
            name: "cssClass",
            hash: {},
            data: l,
            loc: {start: {line: 5, column: 30}, end: {line: 5, column: 42}}
        }) : s) + '">\r\n\t\t<span>' + p(typeof (s = null != (s = r.fxName || (null != n ? n.fxName : n)) ? s : c) === u ? s.call(d, {
            name: "fxName",
            hash: {},
            data: l,
            loc: {start: {line: 6, column: 8}, end: {line: 6, column: 18}}
        }) : s) + '</span>\r\n\t\t<button class="btn btn-fx-del js-delete-fx" data-mixer-channel="' + p(typeof (s = null != (s = r.mixerChannel || (null != n ? n.mixerChannel : n)) ? s : c) === u ? s.call(d, {
            name: "mixerChannel",
            hash: {},
            data: l,
            loc: {start: {line: 7, column: 66}, end: {line: 7, column: 82}}
        }) : s) + '" data-mixer-slot="' + p(typeof (s = null != (s = r.mixerSlot || (null != n ? n.mixerSlot : n)) ? s : c) === u ? s.call(d, {
            name: "mixerSlot",
            hash: {},
            data: l,
            loc: {start: {line: 7, column: 101}, end: {line: 7, column: 114}}
        }) : s) + '">X</button>\r\n\t\t<div class="fx-gradient-2"></div>\r\n\t</div>\r\n\r\n\t<div class="fx-wrapper-inner">\r\n\r\n\t\t<div class="fx-unit">\r\n\t\t\t\r\n\t\t\t<div class="fx-gradient-2"></div>\r\n\r\n\t\t\t<div class="control-row">\r\n\r\n' + (null != (o = r.each.call(d, null != n ? n.controls : n, {
            name: "each",
            hash: {},
            fn: t.program(1, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 19, column: 4}, end: {line: 35, column: 13}}
        })) ? o : "") + '\r\n\t\t\t\t<div class="button-bypass js-control-button js-fx-bypass btn-pattern-on" data-control-id="0" data-fx-id="' + p(typeof (s = null != (s = r.fxID || (null != n ? n.fxID : n)) ? s : c) === u ? s.call(d, {
            name: "fxID",
            hash: {},
            data: l,
            loc: {start: {line: 37, column: 109}, end: {line: 37, column: 117}}
        }) : s) + '">ON</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="fx-loading-container js-fx-loading" data-fx-id="' + p(typeof (s = null != (s = r.fxID || (null != n ? n.fxID : n)) ? s : c) === u ? s.call(d, {
            name: "fxID",
            hash: {},
            data: l,
            loc: {start: {line: 41, column: 63}, end: {line: 41, column: 71}}
        }) : s) + '">\r\n\t\t\t\t<div class="fx-loading">Loading...</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\t\t\r\n\r\n\t</div>\r\n\r\n\t<div class="fx-gradient"></div>\r\n\r\n</div>'
    }, useData: !0, useDepths: !0
}), this.templates.index = Handlebars.template({
    1: function (t, n, r, e, l) {
        return "\t\t\t\t\tplusOne " + t.escapeExpression(t.lambda(n, n)) + "\r\n"
    }, compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l) {
        var a;
        return '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset="UTF-8">\r\n\t<title>Acid Machine 2</title>\r\n\t<link rel="stylesheet" type="text/css" href="css/reset.css">\r\n\t<link rel="stylesheet" type="text/css" href="css/style.css">\r\n\t<link rel="stylesheet" type="text/css" href="css/instrument_wrapper.css">\r\n\t<link rel="stylesheet" type="text/css" href="css/fx_wrapper.css">\r\n\t<link rel="stylesheet" type="text/css" href="css/fx_units.css">\r\n\t<link rel="stylesheet" type="text/css" href="css/sequencer.css">\r\n\t\r\n</head>\r\n<body oncontextmenu="return false;">\r\n\x3c!--<body>--\x3e\r\n\t\r\n\t\x3c!--Loading screen--\x3e\r\n\t<div class="loading-container">\r\n\t\t<div class="loading-bar-background">\r\n\t\t\t<div class="loading-bar-inner" id="main-loading-bar"></div>\r\n\t\t\t<div id="loading-text">LOADING</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t\x3c!--Main--\x3e\r\n\t<div class="main-container" style="display:none">\r\n\r\n\t\t<div class="top-bar">\r\n\t\t\t<div class="btn btn-transport js-transport" data-name="play">Play</div>\r\n\t\t\t<div class="btn btn-transport js-transport transport-spacing" data-name="stop">Stop</div>\r\n\r\n\t\t\t<div class="btn btn-transport js-file-button" data-name="load" data-type="load">Load</div>\r\n\t\t\t<div class="btn btn-transport js-file-button" data-name="import" data-type="rb"><input class="js-file-reader file-reader-input" data-type="rb" type="file">Import RB</div>\r\n\t\t\t<div class="btn btn-transport js-file-button" data-name="import" data-type="abl"><input class="js-file-reader file-reader-input" data-type="abl" type="file">Import ABL</div>\r\n\t\t\t<div class="btn btn-transport js-file-button" data-name="save" data-type="save">Save</div>\r\n\t\t\t<div class="btn btn-transport js-file-button transport-spacing" data-name="new">New</div>\r\n\r\n\t\t\t<div class="btn btn-transport js-transport" data-name="mode" data-value="0" style="width:8vw;background:#777;color:white;">Pattern Mode</div>\r\n\t\t\t<div class="btn btn-transport js-midi-learn-toggle transport-spacing">MIDI Learn</div>\r\n\r\n\t\t\t<div class="btn btn-transport js-toggle-wav transport-spacing" data-name="record_wav">Rec. Wav</div>\r\n\r\n\t\t\t<div style="position:absolute;right:0;display:flex;top:0.75vw;">\r\n\t\t\t\t<div style="padding-right:0.5vw;padding-left:0.5vw;padding-top:0.3vw;background:#666;color:white;">Tempo</div>\r\n\t\t\t\t<input type="number" value="0" class="js-tempo" min="20" max="500" style="height:2vh;background:#222;color:red;border:0;font-weight:bold;font-size:1.1em;padding:0.2vw;padding-top:0.3vw;outline:0;">\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class="top-bar2">\r\n\t\t\t<div class="btn btn-tab js-tab-change" data-tab="instruments">Instruments</div>\r\n\t\t\t<div class="btn btn-tab js-tab-change" data-tab="editor">Editor</div>\r\n\t\t\t<div class="btn btn-tab js-tab-change" data-tab="sequencer">Sequencer</div>\r\n\t\t\t<div class="btn btn-tab js-tab-change" data-tab="options">Options</div>\r\n\t\t\t<div class="btn btn-tab js-buy-app buy-button" data-tab="options" style="display:none;">Buy App</div>\r\n\r\n\t\t\t\r\n\t\t\t<div class="am2-logo-container">\r\n\t\t\t\t<img src="assets/images/am2logo.svg" class="am2-logo">\r\n\t\t\t\t<div class="social-share-container">\r\n\t\t\t\t  <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.errozero.co.uk%2Facid-machine&t=Acid%20Machine%202" title="Share on Facebook" target="_blank"><img alt="Share on Facebook" src="assets/icons/social/fb.svg"></a>\x3c!--\r\n\t\t\t\t  --\x3e<a href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fwww.errozero.co.uk%2Facid-machine&text=Acid in your browser... Acid%20Machine%202:%20http%3A%2F%2Fwww.errozero.co.uk%2Facid-machine %23acidmachine&via=errozerodesign" target="_blank" title="Tweet"><img alt="Tweet" src="assets/icons/social/twitter.svg"></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t\x3c!--Screens--\x3e\r\n\t\t<div id="main-instrument-area" class="screen-container js-screen" data-screen-name="instruments"></div>\r\n\t\t<div class="screen-container js-screen hide" data-screen-name="editor" style="padding:0;margin:0;"></div>\r\n\t\t<div class="screen-container js-screen hide" data-screen-name="sequencer"></div>\r\n\t\t<div class="screen-container js-screen hide" data-screen-name="mixer"></div>\r\n\t\t<div class="screen-container js-screen hide" data-screen-name="options"></div>\r\n\r\n\r\n\t</div>\r\n\r\n\r\n\t<div id="pr-window">\r\n\t\t<div id="pr-title">Pattern Editor</div>\r\n\t\t<div id="pr-main"></div>\r\n\t</div>\r\n\r\n\t\x3c!--\r\n\t<div id="fx-selector-overlay" style="display:none">\r\n\t\t\r\n\t</div>--\x3e\r\n\r\n\t<div id="dark-overlay" style="display:none;">\r\n\t\t\r\n\t\t\x3c!--Save box--\x3e\r\n\t\t<div id="save-box" style="display:none;" class="overlay-box">\r\n\t\t\t<h1>Save File</h1>\r\n\t\t\t\r\n\t\t\t<div id="save-filename-container">\r\n\t\t\t\t<label>Filename</label><br>\r\n\t\t\t\t<input type="text" value="Untitled" id="save-filename">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id="save-buttons">\r\n\t\t\t\t<button class="js-dialogue-button" data-name="cancel" id="btn-cancel">Cancel</button>\r\n\t\t\t\t<button data-type="song" class="js-dialogue-button" data-name="save" id="btn-save" data->Save</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t\x3c!--FX selector--\x3e\r\n\t\t<div id="fx-selector" class="overlay-box" style="display:none;">\r\n\t\t\t<input type="hidden" id="fx-selector-channel" val="">\r\n\t\t\t<input type="hidden" id="fx-selector-slot" val="">\r\n\r\n\r\n\r\n\t\t\t<div>\r\n\t\t\t\t<div class="fx-selector-option js-fx-select" data-id="0">Distortion</div>\r\n\t\t\t\t<div class="fx-selector-option js-fx-select" data-id="5">Delay</div>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<div class="fx-selector-option js-fx-select" data-id="2">Chorus</div>\r\n\t\t\t\t<div class="fx-selector-option js-fx-select" data-id="3">Filter</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\r\n\r\n\t\t\x3c!--SEQ Pattern selector--\x3e\r\n\t\t<div id="seq-pattern-selector" class="overlay-box" style="display:none;">\r\n\t\t\t<div>\r\n\t\t\t\tBanks\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n' + (null != (a = (r.simpleLoop || n && n.simpleLoop || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, 8, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(1, l, 0),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 132, column: 4}, end: {line: 134, column: 19}}
        })) ? a : "") + '\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t</div>\r\n\r\n\r\n\x3c!--Electron Fix--\x3e\r\n<script>if (typeof module === \'object\') {window.module = module; module = undefined;}<\/script>\r\n\r\n<script src="js/vendor/jquery-2.2.3.min.js"><\/script>\r\n<script src="js/vendor/handlebars-v3.0.3.min.js"><\/script>\r\n<script src="js/vendor/recorderjs/recorder.js"><\/script>\r\n\r\n\x3c!--Stuff--\x3e\r\n<script src="js/vendor/tuna.min.js"><\/script>\r\n<script src="js/midiFrequency.js"><\/script>\r\n<script src="js/waveforms.js"><\/script>\r\n<script src="js/scales.js"><\/script>\r\n\r\n<script src="js/song.js"><\/script>\r\n<script src="js/ui.js"><\/script>\r\n\r\n<script src="js/rebirth_importer.js"><\/script>\r\n<script src="js/abl_importer.js"><\/script>\r\n\r\n<script src="js/app.js"><\/script>\r\n<script src="js/mixer.js"><\/script>\r\n<script src="js/editor.js"><\/script>\r\n<script src="js/sequencer.js"><\/script>\r\n<script src="js/options.js"><\/script>\r\n\r\n<script src="js/fx_unit.js"><\/script>\r\n\r\n<script src="js/clipboard.js"><\/script>\r\n\r\n<script src="js/midi.js"><\/script>\r\n\r\n\t\r\n\r\n</body>\r\n</html>'
    }, useData: !0
}), this.templates.instrument_wrapper = Handlebars.template({
    1: function (t, n, r, e, l, a, i) {
        var o = t.lambda, s = t.escapeExpression;
        return '<div class="btn btn-pattern-select js-pattern-select" data-pattern-id="' + s(o(n, n)) + '" data-handle-id="' + s(o(n, n)) + '" data-instrument-id="' + s(o(null != i[1] ? i[1].instrumentID : i[1], n)) + '"><span>' + s((r.plusOne || n && n.plusOne || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, n, {
            name: "plusOne",
            hash: {},
            data: l,
            loc: {start: {line: 21, column: 175}, end: {line: 21, column: 191}}
        })) + "</span></div>"
    }, 3: function (t, n, r, e, l, a, i) {
        var o, s = t.escapeExpression, d = t.lambda;
        return '<div class="btn btn-pattern-select btn-bank-select js-bank-select" data-bank-id="' + s("function" == typeof (o = null != (o = r.index || l && l.index) ? o : t.hooks.helperMissing) ? o.call(null != n ? n : t.nullContext || {}, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 23, column: 100}, end: {line: 23, column: 110}}
        }) : o) + '" data-instrument-id="' + s(d(null != i[1] ? i[1].instrumentID : i[1], n)) + '"><span>' + s(d(n, n)) + "</span></div>"
    }, 5: function (t, n, r, e, l, a, i) {
        var o = t.escapeExpression;
        return '\t\t\t\t\t<div class="insert-fx">\r\n\t\t\t\t\t\t<div class="no-fx js-add-fx" data-mixer-channel="' + o(t.lambda(null != i[1] ? i[1].mixerChannel : i[1], n)) + '" data-mixer-slot="' + o((r.plusOne || n && n.plusOne || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, n, {
            name: "plusOne",
            hash: {},
            data: l,
            loc: {start: {line: 46, column: 93}, end: {line: 46, column: 109}}
        })) + '">\r\n\t\t\t\t\t\t\t<div class="tooltip" data-tooltip="Add FX">+</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n'
    }, compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l, a, i) {
        var o, s, d = null != n ? n : t.nullContext || {}, c = t.hooks.helperMissing, u = "function",
            p = t.escapeExpression;
        return '<div id="' + p(typeof (s = null != (s = r.instrumentID || (null != n ? n.instrumentID : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentID",
            hash: {},
            data: l,
            loc: {start: {line: 1, column: 9}, end: {line: 1, column: 25}}
        }) : s) + '" class="instrument-wrapper noselect ' + p(typeof (s = null != (s = r.machineName || (null != n ? n.machineName : n)) ? s : c) === u ? s.call(d, {
            name: "machineName",
            hash: {},
            data: l,
            loc: {start: {line: 1, column: 62}, end: {line: 1, column: 77}}
        }) : s) + '-wrapper">\r\n\t\r\n\t<div class="rack-mount rack-mount-l">\r\n\t\t<div class="rack-screw-hole screw-top"></div>\r\n\t\t<div class="rack-screw screw-top" style="transform: rotate(45deg);"></div>\r\n\t\t<div class="rack-screw-hole screw-bottom"></div>\r\n\t\t<div class="rack-screw screw-bottom" style="transform: rotate(-45deg);"></div>\r\n\r\n\t\t<div class="instrument-side-label">' + p(typeof (s = null != (s = r.instrumentName || (null != n ? n.instrumentName : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentName",
            hash: {},
            data: l,
            loc: {start: {line: 9, column: 37}, end: {line: 9, column: 55}}
        }) : s) + '</div>\r\n\r\n\t</div>\r\n\t\r\n\t<div class="rack-main">\r\n\t\t\r\n\t\t\x3c!--Pattern Select--\x3e\r\n\t\t<div class="pattern-select-container">\r\n\t\t\t\r\n\t\t\t<div class="wrapper-label">Pattern</div>\r\n\r\n\t\t\t<div class="pattern-select-bg">\r\n\t\t\t\t' + (null != (o = (r.simpleLoop || n && n.simpleLoop || c).call(d, 8, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(1, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 21, column: 4}, end: {line: 21, column: 219}}
        })) ? o : "") + "\r\n\t\t\t\t\r\n\t\t\t\t" + (null != (o = r.each.call(d, null != n ? n.banks : n, {
            name: "each",
            hash: {},
            fn: t.program(3, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 23, column: 4}, end: {line: 23, column: 189}}
        })) ? o : "") + '\r\n\t\t\t\t\r\n\t\t\t\t<div class="btn btn-pattern-select js-tab-change" style="background:#444;color:white;width:50%;" data-instrument-id="' + p(typeof (s = null != (s = r.instrumentID || (null != n ? n.instrumentID : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentID",
            hash: {},
            data: l,
            loc: {start: {line: 25, column: 121}, end: {line: 25, column: 137}}
        }) : s) + '" data-tab="editor"><span>Editor</span></div>\x3c!--\r\n\t\t\t\t--\x3e<div class="btn btn-pattern-select js-mute-instrument tooltip" style="background:#666;color:white;width:50%;" data-instrument-id="' + p(typeof (s = null != (s = r.instrumentID || (null != n ? n.instrumentID : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentID",
            hash: {},
            data: l,
            loc: {start: {line: 26, column: 137}, end: {line: 26, column: 153}}
        }) : s) + '" data-tooltip="Mute"><span>Mute</span></div>\x3c!--\r\n\t\t\t\t--\x3e<div class="btn btn-pattern-select js-solo-instrument tooltip" style="background:#666;color:white;display:none;" data-instrument-id="' + p(typeof (s = null != (s = r.instrumentID || (null != n ? n.instrumentID : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentID",
            hash: {},
            data: l,
            loc: {start: {line: 27, column: 140}, end: {line: 27, column: 156}}
        }) : s) + '" data-tooltip="Solo"><span>S</span></div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t\x3c!--End Pattern Select--\x3e\r\n\r\n\t\t<div class="instrument-container">\r\n\t\t\t\x3c!--<div class="wrapper-label">' + p(typeof (s = null != (s = r.instrumentName || (null != n ? n.instrumentName : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentName",
            hash: {},
            data: l,
            loc: {start: {line: 34, column: 34}, end: {line: 34, column: 52}}
        }) : s) + '</div>--\x3e\r\n\t\t\t\r\n\t\t\t\x3c!--<div style="background:linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);width:10px;height:100%;position:absolute;top:0;left:0;"></div>--\x3e\r\n\r\n\t\t\t' + (null != (o = typeof (s = null != (s = r.instrumentHtml || (null != n ? n.instrumentHtml : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentHtml",
            hash: {},
            data: l,
            loc: {start: {line: 38, column: 3}, end: {line: 38, column: 23}}
        }) : s) ? o : "") + '\r\n\t\t</div>\r\n\r\n\t\t<div class="fx-container">\r\n\t\t\t<div class="wrapper-label">FX Units</div>\r\n\t\t\t<div class="insert-fx-container">\r\n' + (null != (o = (r.simpleLoop || n && n.simpleLoop || c).call(d, 2, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(5, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 44, column: 4}, end: {line: 50, column: 19}}
        })) ? o : "") + '\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="mix-container">\r\n\t\t\t<div class="wrapper-label">Mix</div>\r\n\t\t\t<div class="volume-container js-control-knob js-volume-container" data-mixer-channel="' + p(typeof (s = null != (s = r.mixerChannel || (null != n ? n.mixerChannel : n)) ? s : c) === u ? s.call(d, {
            name: "mixerChannel",
            hash: {},
            data: l,
            loc: {start: {line: 56, column: 89}, end: {line: 56, column: 105}}
        }) : s) + '" data-control-id="0" data-control-type="mixer" style="display:inline-block">\r\n\t\t\t\t<div class="slider-outer"></div>\r\n\t\t\t\t<div class="slider-inner"></div>\r\n\t\t\t\t<div class="slider-knob"></div>\r\n\r\n\t\t\t\t\x3c!--Midi learn overlay--\x3e\r\n\t\t\t\t<div class="midi-learn-overlay js-midi-learn-overlay" data-control-id="0" data-mixer-channel="' + p(typeof (s = null != (s = r.mixerChannel || (null != n ? n.mixerChannel : n)) ? s : c) === u ? s.call(d, {
            name: "mixerChannel",
            hash: {},
            data: l,
            loc: {start: {line: 62, column: 98}, end: {line: 62, column: 114}}
        }) : s) + '" data-control-type="mixer" style="display:none;"></div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t\r\n\t\t\t<div class="js-channel-meter channel-meter-outer" data-channel-id="' + p(typeof (s = null != (s = r.mixerChannel || (null != n ? n.mixerChannel : n)) ? s : c) === u ? s.call(d, {
            name: "mixerChannel",
            hash: {},
            data: l,
            loc: {start: {line: 67, column: 70}, end: {line: 67, column: 86}}
        }) : s) + '" style="">\r\n\t\t\t\t<div class="js-channel-meter-inner channel-meter-inner"></div>\r\n\t\t\t</div>\r\n\t\t\r\n\r\n\t\t</div>\r\n\r\n\t\t\x3c!--Midi learn overlay--\x3e\r\n\t\t\x3c!--<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.2);z-index:10;"></div>--\x3e\r\n\r\n\t</div>\r\n\r\n\t<div class="rack-mount rack-mount-r">\r\n\t\t<div class="rack-screw-hole screw-top"></div>\r\n\t\t<div class="rack-screw screw-top" style="transform: rotate(-45deg);"></div>\r\n\r\n\t\t<div class="rack-screw-hole screw-bottom"></div>\r\n\t\t<div class="rack-screw screw-bottom" style="transform: rotate(45deg);"></div>\r\n\t</div>\r\n\r\n</div>'
    }, useData: !0, useDepths: !0
}), this.templates.mixer = Handlebars.template({
    compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l) {
        return '<style>\r\n\t.screen-mixer{\r\n\t\theight:100%;\r\n\t\tbackground:#ccc;\r\n\t}\r\n</style>\r\n\r\n<div class="screen-mixer">\r\n\tMixer\r\n</div>'
    }, useData: !0
}), this.templates.options = Handlebars.template({
    1: function (t, n, r, e, l) {
        var a, i = t.lambda, o = t.escapeExpression;
        return '\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td><div class="btn opt-btn-midi js-midi-enable ' + (null != (a = (r.is_equal || n && n.is_equal || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, null != n ? n.enabled : n, 1, {
            name: "is_equal",
            hash: {},
            fn: t.program(2, l, 0),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 95, column: 56}, end: {line: 95, column: 119}}
        })) ? a : "") + '" data-device-id="' + o(i(null != n ? n.id : n, n)) + '">Enable</div></td>\r\n\t\t\t\t\t\t\t\t<td>' + o(i(null != n ? n.name : n, n)) + "</td>\r\n\t\t\t\t\t\t\t</tr>\r\n"
    }, 2: function (t, n, r, e, l) {
        return " btn-transport-active "
    }, 4: function (t, n, r, e, l, a, i) {
        var o, s, d = null != n ? n : t.nullContext || {}, c = t.hooks.helperMissing, u = t.escapeExpression;
        return '\t\t\t\t\t\t\t\t<option value="' + u("function" == typeof (s = null != (s = r.index || l && l.index) ? s : c) ? s.call(d, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 120, column: 23}, end: {line: 120, column: 33}}
        }) : s) + '" ' + (null != (o = (r.is_equal || n && n.is_equal || c).call(d, null != (o = null != i[1] ? i[1].currentOptions : i[1]) ? o.scale : o, l && l.index, {
            name: "is_equal",
            hash: {},
            fn: t.program(5, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 120, column: 35}, end: {line: 120, column: 102}}
        })) ? o : "") + ">" + u(t.lambda(null != n ? n.name : n, n)) + "</option>\r\n"
    }, 5: function (t, n, r, e, l) {
        return " selected "
    }, 7: function (t, n, r, e, l, a, i) {
        var o, s = t.lambda, d = t.escapeExpression;
        return '\t\t\t\t\t\t\t\t<option value="' + d(s(n, n)) + '" ' + (null != (o = (r.is_equal || n && n.is_equal || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, null != (o = null != i[1] ? i[1].currentOptions : i[1]) ? o.splitNum : o, n, {
            name: "is_equal",
            hash: {},
            fn: t.program(5, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 129, column: 33}, end: {line: 129, column: 101}}
        })) ? o : "") + ">" + d(s(n, n)) + " Bars</option>\r\n"
    }, 9: function (t, n, r, e, l, a, i) {
        var o, s = t.lambda, d = t.escapeExpression;
        return '\t\t\t\t\t\t\t\t<option value="' + d(s(n, n)) + '" ' + (null != (o = (r.is_equal || n && n.is_equal || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, null != (o = null != i[1] ? i[1].currentOptions : i[1]) ? o.empty : o, n, {
            name: "is_equal",
            hash: {},
            fn: t.program(5, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 138, column: 33}, end: {line: 138, column: 98}}
        })) ? o : "") + ">" + d(s(n, n)) + "</option>\r\n"
    }, compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l, a, i) {
        var o, s = null != n ? n : t.nullContext || {};
        return '<style>\r\n\t.screen-options{\r\n\t\theight:100%;\r\n\t\tbackground:#ccc;\r\n\t}\r\n\t.options-inner{\r\n\t\tpadding:0.5vw;\r\n\t\tdisplay:flex;\r\n\t\tjustify-content:center;\r\n\t}\r\n\t.screen-options > .options-inner h1{\r\n\t\tfont-size:1.4vw;\r\n\t\tmargin-bottom:0.5vw;\r\n\t}\r\n\r\n\t.opt-panel{\r\n\t\tbackground:#aaa;\r\n\t\twidth:48vw;\r\n\t\theight:30vw;\r\n\t\tmargin:0.5vw;\r\n\t}\r\n\t.opt-panel > h2{\r\n\t\tbackground:#333;\r\n\t\tcolor:#fff;\r\n\t\tpadding:0.5vw;\r\n\t\tfont-size:1vw;\r\n\t\tmargin-bottom: 0.5vw;\r\n\t}\r\n\t.opt-panel > div{\r\n\t\tpadding:0.5vw;\r\n\t}\r\n\t.opt-panel > div > h2{\r\n\t\tbackground:#ddd;\r\n\t\tdisplay:inline-block;\r\n\t\tpadding:0.5vw;\r\n\t}\r\n\t.opt-panel > div > div{\r\n\t\tpadding: 0.5vw;\r\n\t\tborder:0.5vw solid #ddd;\r\n\t\tbackground:#999;\r\n\t\tmin-height:10vw;\r\n\t}\r\n\t.options-midi-list-container{\r\n\t\theight:10vw;\r\n\t\toverflow-y:auto;\r\n\t}\r\n\t.options-midi-list{\r\n\t\twidth:100%;\r\n\t}\r\n\t.options-midi-list td{\r\n\t\theight:1.4vw;\r\n\t\tpadding:0.5vw 0;\r\n\t}\r\n\t.options-midi-list td:first-child{\r\n\t\twidth:12%;\r\n\t}\r\n\t.options-midi-list tr{\r\n\t\tborder-bottom:1px solid #ccc;\r\n\t}\r\n\t.options-midi-list tr:last-child{\r\n\t\tborder-bottom: 0;\t\r\n\t}\r\n\r\n\t.opt-btn-midi{\r\n\t\tbackground:#eee;\r\n\t\tmargin-right:8%;\r\n\t\tpadding:0.4vw;\r\n\t\tmax-width:12vw;\r\n\t}\r\n\r\n\t.opt-panel select{\r\n\t\tpadding:0.2vw;\r\n\t}\r\n\r\n\t.screen-options select{\r\n\t\twidth:8vw;\r\n\t}\r\n\r\n</style>\r\n\r\n<div class="screen-options">\r\n\t<div class="options-inner">\r\n\r\n\t\t\r\n\r\n\t\t<div class="opt-panel">\r\n\t\t\t<h2 style="">System Settings</h2>\r\n\t\t\t<div>\r\n\t\t\t\t<h2>MIDI Devices</h2><br>\r\n\t\t\t\t<div class="options-midi-list-container">\r\n\t\t\t\t\t<table class="options-midi-list">\r\n\t\t\t\t\t\t\r\n' + (null != (o = r.each.call(s, null != n ? n.midiDevices : n, {
            name: "each",
            hash: {},
            fn: t.program(1, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 93, column: 6}, end: {line: 98, column: 15}}
        })) ? o : "") + '\t\t\t\t\t\t\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class="btn opt-btn-midi js-midi-clear-mappings">Clear MIDI Mappings</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class="opt-panel">\r\n\t\t\t\r\n\t\t\t<h2 style="">General Settings</h2>\r\n\t\t\t<div>\r\n\t\t\t\t<h2>Randomiser</h2><br>\r\n\t\t\t\t<div>\r\n\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label>Scale</label><br>\r\n\t\t\t\t\t\t<select class="js-random-option" data-name="randScale">\r\n' + (null != (o = r.each.call(s, null != n ? n.scales : n, {
            name: "each",
            hash: {},
            fn: t.program(4, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 119, column: 7}, end: {line: 121, column: 16}}
        })) ? o : "") + '\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label>Ptn Division</label><br>\r\n\t\t\t\t\t\t<select class="js-random-option" data-name="randSplitNum">\t\r\n' + (null != (o = r.each.call(s, null != n ? n.splitNumOptions : n, {
            name: "each",
            hash: {},
            fn: t.program(7, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 128, column: 7}, end: {line: 130, column: 16}}
        })) ? o : "") + '\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label>Empty Possibility</label><br>\r\n\t\t\t\t\t\t<select class="js-random-option" data-name="randEmpty">\t\r\n' + (null != (o = r.each.call(s, null != n ? n.emptyNoteOptions : n, {
            name: "each",
            hash: {},
            fn: t.program(9, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 137, column: 7}, end: {line: 139, column: 16}}
        })) ? o : "") + "\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n"
    }, useData: !0, useDepths: !0
}), this.templates.sequencer = Handlebars.template({
    1: function (t, n, r, e, l, a, i) {
        var o, s, d = null != n ? n : t.nullContext || {}, c = t.hooks.helperMissing, u = "function",
            p = t.escapeExpression;
        return '\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t<td style="width:40%;padding-left:0.4vw;">\r\n\t\t\t\t\t\t\t' + p(typeof (s = null != (s = r.instrumentName || (null != n ? n.instrumentName : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentName",
            hash: {},
            data: l,
            loc: {start: {line: 157, column: 7}, end: {line: 157, column: 25}}
        }) : s) + '\r\n\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t<td style="width:60%;padding-right:0.4vw;">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<select class="js-seq-ptn-select" data-instrument-id="' + p(typeof (s = null != (s = r.instrumentID || (null != n ? n.instrumentID : n)) ? s : c) === u ? s.call(d, {
            name: "instrumentID",
            hash: {},
            data: l,
            loc: {start: {line: 162, column: 61}, end: {line: 162, column: 77}}
        }) : s) + '" style="display:none;">\r\n' + (null != (o = (r.simpleLoop || n && n.simpleLoop || c).call(d, 4, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(2, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 163, column: 8}, end: {line: 173, column: 23}}
        })) ? o : "") + "\t\t\t\t\t\t\t</select>\r\n\r\n\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t" + (null != (o = (r.simpleLoop || n && n.simpleLoop || c).call(d, 8, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(12, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 178, column: 8}, end: {line: 178, column: 237}}
        })) ? o : "") + "\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t" + (null != (o = r.each.call(d, null != i[1] ? i[1].banks : i[1], {
            name: "each",
            hash: {},
            fn: t.program(14, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 180, column: 8}, end: {line: 180, column: 241}}
        })) ? o : "") + "\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n"
    }, 2: function (t, n, r, e, l, a, i) {
        var o;
        return null != (o = (r.simpleLoop || n && n.simpleLoop || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, 8, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(3, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 164, column: 9}, end: {line: 172, column: 24}}
        })) ? o : ""
    }, 3: function (t, n, r, e, l, a, i) {
        var o, s = t.lambda, d = t.escapeExpression, c = null != n ? n : t.nullContext || {}, u = t.hooks.helperMissing;
        return '\t\t\t\t\t\t\t\t\t\t<option value="' + d(s(i[1], n)) + "_" + d(s(n, n)) + '">\r\n\t\t\t\t\t\t\t\t\t\t\t' + (null != (o = (r.is_equal || n && n.is_equal || u).call(c, i[1], 0, {
            name: "is_equal",
            hash: {},
            fn: t.program(4, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 166, column: 11}, end: {line: 166, column: 48}}
        })) ? o : "") + "\r\n\t\t\t\t\t\t\t\t\t\t\t" + (null != (o = (r.is_equal || n && n.is_equal || u).call(c, i[1], 1, {
            name: "is_equal",
            hash: {},
            fn: t.program(6, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 167, column: 11}, end: {line: 167, column: 48}}
        })) ? o : "") + "\r\n\t\t\t\t\t\t\t\t\t\t\t" + (null != (o = (r.is_equal || n && n.is_equal || u).call(c, i[1], 2, {
            name: "is_equal",
            hash: {},
            fn: t.program(8, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 168, column: 11}, end: {line: 168, column: 48}}
        })) ? o : "") + "\r\n\t\t\t\t\t\t\t\t\t\t\t" + (null != (o = (r.is_equal || n && n.is_equal || u).call(c, i[1], 3, {
            name: "is_equal",
            hash: {},
            fn: t.program(10, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 169, column: 11}, end: {line: 169, column: 48}}
        })) ? o : "") + "\r\n\t\t\t\t\t\t\t\t\t\t\t" + d((r.plusOne || n && n.plusOne || u).call(c, n, {
            name: "plusOne",
            hash: {},
            data: l,
            loc: {start: {line: 170, column: 11}, end: {line: 170, column: 27}}
        })) + "\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n"
    }, 4: function (t, n, r, e, l) {
        return "A"
    }, 6: function (t, n, r, e, l) {
        return "B"
    }, 8: function (t, n, r, e, l) {
        return "C"
    }, 10: function (t, n, r, e, l) {
        return "D"
    }, 12: function (t, n, r, e, l, a, i) {
        var o = t.lambda, s = t.escapeExpression;
        return '<div class="btn btn-pattern-select js-seq-pattern-select" style="color:#111;border-bottom:0;" data-pattern-id="' + s(o(n, n)) + '" data-instrument-id="' + s(o(null != i[1] ? i[1].instrumentID : i[1], n)) + '"><span>' + s((r.plusOne || n && n.plusOne || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, n, {
            name: "plusOne",
            hash: {},
            data: l,
            loc: {start: {line: 178, column: 193}, end: {line: 178, column: 209}}
        })) + "</span></div>"
    }, 14: function (t, n, r, e, l, a, i) {
        var o, s = t.escapeExpression, d = t.lambda;
        return '<div class="btn btn-pattern-select btn-bank-select js-seq-bank-select" style="margin-bottom:0;border-bottom:0;" data-bank-id="' + s("function" == typeof (o = null != (o = r.index || l && l.index) ? o : t.hooks.helperMissing) ? o.call(null != n ? n : t.nullContext || {}, {
            name: "index",
            hash: {},
            data: l,
            loc: {start: {line: 180, column: 152}, end: {line: 180, column: 162}}
        }) : o) + '" data-instrument-id="' + s(d(null != i[1] ? i[1].instrumentID : i[1], n)) + '"><span>' + s(d(n, n)) + "</span></div>"
    }, 16: function (t, n, r, e, l) {
        return '\t\t\t\t\t\t<td style="position:relative;" class="js-seq-number-cell">\r\n\t\t\t\t\t\t\t<div class="seq-pos-marker" id="seq-pos-marker"></div>\r\n\t\t\t\t\t\t\t' + t.escapeExpression((r.plusOne || n && n.plusOne || t.hooks.helperMissing).call(null != n ? n : t.nullContext || {}, n, {
            name: "plusOne",
            hash: {},
            data: l,
            loc: {start: {line: 200, column: 7}, end: {line: 200, column: 23}}
        })) + "\r\n\t\t\t\t\t\t</td>\r\n"
    }, 18: function (t, n, r, e, l, a, i) {
        var o, s, d = null != n ? n : t.nullContext || {}, c = t.hooks.helperMissing;
        return '\t\t\t\t\t<tr data-instrument-id="' + t.escapeExpression("function" == typeof (s = null != (s = r.instrumentID || (null != n ? n.instrumentID : n)) ? s : c) ? s.call(d, {
            name: "instrumentID",
            hash: {},
            data: l,
            loc: {start: {line: 213, column: 29}, end: {line: 213, column: 45}}
        }) : s) + '">\r\n' + (null != (o = (r.simpleLoop || n && n.simpleLoop || c).call(d, null != i[1] ? i[1].songBars : i[1], {
            name: "simpleLoop",
            hash: {},
            fn: t.program(19, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 214, column: 6}, end: {line: 216, column: 21}}
        })) ? o : "") + "\t\t\t\t\t</tr>\r\n"
    }, 19: function (t, n, r, e, l) {
        return "\t\t\t\t\t\t\t<td data-background=''></td>\r\n"
    }, compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l, a, i) {
        var o, s, d = null != n ? n : t.nullContext || {}, c = t.hooks.helperMissing, u = "function",
            p = t.escapeExpression;
        return "<style>\r\n\t.screen-sequencer{\r\n\t\theight:100%;\r\n\t\tbackground:#ccc;\r\n\t}\r\n\r\n\t.seq-toolbar{\r\n\t\tdisplay:flex;\r\n\t\theight:5%;\r\n\t\twidth:99%;\r\n\t\tpadding:0.5%;\r\n\t\tbackground:#ccc;\r\n\t\talign-items:center;\r\n\t\tcolor: #333;\r\n\t}\r\n\r\n\t.song-mode-msg{\r\n\t\tbackground:#ffa500;\r\n\t\tpadding: 0.4vw;\r\n\t\ttransition: all 0.2s;\r\n\t}\r\n\r\n\t.seq-container{\r\n\t\tdisplay:flex;\r\n\t\twidth:100%;\r\n\t}\r\n\r\n\t.seq-label-container{\r\n\t\twidth:17%;\r\n\t}\r\n\t.seq-label-container > .label-table{\r\n\t\twidth:100%;\r\n\t\tbackground:linear-gradient(to right, #3a4149 0%, #293038 100%);\r\n\t}\r\n\t.seq-label-container > .label-table td{\r\n\t\toverflow:hidden;\r\n\t\theight:7.5vw;\r\n\t\tborder-bottom:1px solid white;\r\n\t\tcolor:white;\r\n\t}\r\n\r\n\t.seq-tables-container{\r\n\t\tposition:relative;\r\n\t\twidth:90%;\r\n\t\toverflow-x:auto;\r\n\t\tbackground:linear-gradient(to bottom, #1f5d81, #2071a1 40%, #2071a1 60%, #1f5d81 100%);\r\n\t}\r\n\r\n\t.seq-labels-header{\r\n\t\tbackground:linear-gradient(to right, #293038 0%, #293038 100%);\r\n\t\theight:1.8vw;\r\n\t\tpadding:0.1vw;\r\n\t\tcolor:white;\r\n\t}\r\n\r\n\t.seq-table{\r\n\t\twidth:" + p(typeof (s = null != (s = r.tableWidth || (null != n ? n.tableWidth : n)) ? s : c) === u ? s.call(d, {
            name: "tableWidth",
            hash: {},
            data: l,
            loc: {start: {line: 57, column: 8}, end: {line: 57, column: 22}}
        }) : s) + "vw;\r\n\t\tposition:relative;\r\n\t\ttable-layout:fixed;\r\n\t}\r\n\t.seq-table tr{\r\n\t\theight:100%;\r\n\t\tposition:relative;\r\n\t}\r\n\t.seq-table td{\r\n\t\theight:100%;\r\n\t\t\r\n\t\tposition:relative;\r\n\t\twidth:" + p(typeof (s = null != (s = r.cellWidth || (null != n ? n.cellWidth : n)) ? s : c) === u ? s.call(d, {
            name: "cellWidth",
            hash: {},
            data: l,
            loc: {start: {line: 69, column: 8}, end: {line: 69, column: 21}}
        }) : s) + "vw !important;\r\n\t\theight:7.5vw;\r\n\t\tborder-bottom:1px solid white;\r\n\t\tcolor:white;\r\n\t}\r\n\r\n\t.seq-block{\r\n\t\ttop:0;\r\n\t\t/*background:linear-gradient(0deg, #111 0%, #222 28%, #333 78%, #111 100%);*/\r\n\t\tbackground:linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 28%, rgba(0,0,0,0.5) 78%, rgba(0,0,0,0.7) 100%);\r\n\t\tbox-sizing:border-box;\r\n\t\theight:100%;\r\n\t\tfont-size:2vw;\r\n\t\tdisplay:flex;\r\n\t\talign-items:center;\r\n\t\tjustify-content:center;\r\n\t\tposition:absolute;\r\n\t\tborder-right:1px solid #549bc3;\r\n\t\tz-index:100;\r\n\t\t/*border-radius:5%;*/\r\n\t}\r\n\r\n\t.seq-table-numbers{\r\n\t\t/*background:linear-gradient(to bottom, #111 0%, #333 100%);*/\r\n\t\tbackground:linear-gradient(to right, #293038 0%, #293038 100%);\r\n\t\theight:2vw;\r\n\t\ttable-layout:fixed;\r\n\t\twidth:" + p(typeof (s = null != (s = r.tableWidth || (null != n ? n.tableWidth : n)) ? s : c) === u ? s.call(d, {
            name: "tableWidth",
            hash: {},
            data: l,
            loc: {start: {line: 96, column: 8}, end: {line: 96, column: 22}}
        }) : s) + "vw;\r\n\t\tposition:relative;\r\n\t}\r\n\t.seq-table-numbers td{\r\n\t\tcolor:#ccc;\r\n\t\twidth:" + p(typeof (s = null != (s = r.cellWidth || (null != n ? n.cellWidth : n)) ? s : c) === u ? s.call(d, {
            name: "cellWidth",
            hash: {},
            data: l,
            loc: {start: {line: 101, column: 8}, end: {line: 101, column: 21}}
        }) : s) + 'vw !important;\r\n\t\tfont-size:0.8vw;\r\n\t}\r\n\t.seq-pos-marker{\r\n\t\tbackground:#ffa500;\r\n\t\ttransform:rotate(45deg);\r\n\t\twidth:1vw;\r\n\t\theight:1vw;\r\n\t\tposition:absolute;\r\n\t\ttop:-0.5vw;\r\n\t\tdisplay:none;\r\n\t\tleft:-0.55vw;\r\n\t}\r\n\r\n\t.seq-pos-marker-2{\r\n\t\tposition:absolute;\r\n\t\ttop:-0.5vw;\r\n\t\tleft:-0.55vw;\r\n\t}\r\n\t.seq-pos-marker-inner{\r\n\t\tbackground:#ffa500;\r\n\t\ttransform:rotate(45deg);\r\n\t\twidth:1vw;\r\n\t\theight:1vw;\r\n\t}\r\n\r\n\t.seq-loop-highlight{\r\n\t\tbackground: #63445a !important;\r\n\t}\r\n\r\n</style>\r\n\r\n\r\n\r\n<div class="screen-sequencer">\r\n\r\n\t<div class="seq-toolbar">\r\n\t\t\r\n\t\t<div class="song-mode-msg js-song-mode-msg" style="">Enable Song mode to use the sequencer</div>\r\n\r\n\t</div>\r\n\t\r\n\t<div class="seq-container">\r\n\t\t\r\n\t\t\x3c!--Labels--\x3e\r\n\t\t<div class="seq-label-container">\r\n\r\n\t\t\t<div class="seq-labels-header">\r\n\t\t\t\t\x3c!--Headers Here--\x3e\r\n\t\t\t</div>\r\n\r\n\t\t\t<table class="label-table">\r\n' + (null != (o = r.each.call(d, null != n ? n.instruments : n, {
            name: "each",
            hash: {},
            fn: t.program(1, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 153, column: 4}, end: {line: 185, column: 13}}
        })) ? o : "") + '\t\t\t</table>\r\n\t\t</div>\r\n\r\n\r\n\t\t\x3c!--Seq Blocks--\x3e\r\n\t\t<div class="seq-tables-container">\r\n\r\n\t\t\t\r\n\r\n\t\t\t<table class="seq-table-numbers js-seq-numbers" id="seq-numbers">\r\n\t\t\t\t<tr>\r\n' + (null != (o = (r.simpleLoop || n && n.simpleLoop || c).call(d, null != n ? n.songBars : n, {
            name: "simpleLoop",
            hash: {},
            fn: t.program(16, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 197, column: 5}, end: {line: 202, column: 20}}
        })) ? o : "") + '\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\r\n\t\t\t<div class="seq-pos-marker-2" id="seq-pos-marker-2">\r\n\t\t\t\t<div class="seq-pos-marker-inner"></div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<table class="seq-table js-seq-table" id="seq-table">\r\n\r\n' + (null != (o = r.each.call(d, null != n ? n.instruments : n, {
            name: "each",
            hash: {},
            fn: t.program(18, l, 0, a, i),
            inverse: t.noop,
            data: l,
            loc: {start: {line: 212, column: 4}, end: {line: 218, column: 13}}
        })) ? o : "") + "\t\t\t</table>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t\r\n</div>"
    }, useData: !0, useDepths: !0
}), this.templates.test = Handlebars.template({
    compiler: [8, ">= 4.3.0"], main: function (t, n, r, e, l) {
        var a;
        return "<div>\r\n    Hey " + t.escapeExpression("function" == typeof (a = null != (a = r.name || (null != n ? n.name : n)) ? a : t.hooks.helperMissing) ? a.call(null != n ? n : t.nullContext || {}, {
            name: "name",
            hash: {},
            data: l,
            loc: {start: {line: 2, column: 8}, end: {line: 2, column: 16}}
        }) : a) + ", this is the test template\r\n</div>"
    }, useData: !0
});