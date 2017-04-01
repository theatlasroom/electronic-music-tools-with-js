// get a handle to the browser audio system
var audio_context = window.AudioContext || window.webkitAudioContext;

// create an instance of the sound engine
var con = new audio_context();

// create a new oscillator
var osc = con.createOscillator();

// tell the oscillator to connect to the audio output
osc.connect(con.destination);

// adjust the frequency
var defaultNote = 500;
osc.frequency.value = defaultNote;
// start the oscillator

osc.start();

function setNote(key){
  var note = null;
  switch (key) {
    case 'z':
        note = 261.63;
        break;
    case 'x':
        note = 293.66;
        break;
    case 'c':
        note = 329.63;
        break;
    case 'v':
        note = 349.23;
        break;
    default:
        note = defaultNote;
  }
  osc.frequency.value = note;
}
