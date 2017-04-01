var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();

var osc = con.createOscillator();
var harmonic = con.createOscillator();
var lfo = con.createOscillator();

var lfo_amp = con.createGain();
lfo_amp.gain.value = 200;

var defaultNote = 261.63;
var defaultHarmonic = 220;
osc.frequency.value = defaultNote;
// add a negative minor third harmonic
harmonic.frequency.value = defaultHarmonic;
lfo.frequency.value = 15;

lfo.connect(lfo_amp);
lfo_amp.connect(osc.frequency);
osc.connect(con.destination);
harmonic.connect(con.destination);

function handleMouseMove(mx, my){
  lfo.frequency.value = mx / 10;
  osc.frequency.value = my / 5;
}

// this function is called when the user
// presses a key on the keboard
// it receives the key they pressed as 'key'

function handleKeyPress(key){
  var note = null;
  var harmonic = null;
  console.log(key);
  switch (key) {
    case 'x':
        note = 293.66; // D
        harmonic = 246.94;
        break;
    case 'c':
        note = 329.63; // E
        harmonic = 277.18;
        break;
    case 'v':
        note = 349.23; // F
        harmonic = 293.66;
        break;
    case 'b':
        note = 392; // G
        harmonic = 329.63;
        break;
    case 'n':
        note = 440; // A
        harmonic = 369.99;
        break;
    case 'm':
        note = 493.88; // B
        harmonic = 415.30;
        break;
    case ',':
        note = 523.25; // C - next octave
        harmonic = 440;
        break;
    // Handle sharps
    case 's':
        note = 277.18; // C#
        harmonic = 233.08;
        break;
    case 'd':
        note = 311.13; // D#
        harmonic = 261.63;
        break;
    case 'g':
        note = 369.99; // F#
        harmonic = 311.13;
        break;
    case 'h':
        note = 415.30; // G#
        harmonic = 349.23;
        break;
    case 'j':
        note = 466.16; // A#
        harmonic = 392;
        break;
    default:
        // ignore any other key
        note = defaultNote;
        harmonic = defaultHarmonic;
  }
  osc.frequency.value = note;
  harmonic.frequency.value = harmonic;
}

function start(){
  osc.start();
  lfo.start();
  harmonic.start();
}

// Start the program
start();
