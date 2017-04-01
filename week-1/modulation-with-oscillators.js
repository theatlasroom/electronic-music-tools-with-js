var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();

// Create 2 oscillators, one for sound and one as a low frequency oscillator
var osc = con.createOscillator();
var lfo = con.createOscillator();
// create a gain unit
var lfo_amp = con.createGain();

lfo_amp.gain.value = 150;
osc.frequency.value = 200;
lfo.frequency.value = 10;

// connect the output of the LFO to the frequency input of our sound oscillator
// pass the lfo into the gain unit (increase the amplitude of the lfo)
lfo.connect(lfo_amp);
lfo_amp.connect(osc.frequency); // we pass the parameter that we want to connect to, in this case the frequency parameter
// connect the sound oscillator to our sound engine output
osc.connect(con.destination);

function start(){
  osc.start();
  lfo.start();
}

start();
