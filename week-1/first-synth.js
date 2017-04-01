// get a handle to the browser audio system
var audio_context = window.AudioContext || window.webkitAudioContext;

// create an instance of the sound engine
var con = new audio_context();

// create a new oscillator
var osc = con.createOscillator();

// tell the oscillator to connect to the audio output
osc.connect(con.destination);

// start the oscillator
osc.start();
