// Envelopes are use to vary something over time
// We will fade oscillators in and out
var audio_context = window.AudioContext || window.webkitAudioContext;
var con = new audio_context();

function playSynth(key){
  // create a gain node to control the output of each oscillator we create
  var amp = con.createGain();
  amp.gain.value = 0.05;
  // create an oscillator, connect it to the output
  var osc = con.createOscillator();
  osc.frequency.value = Math.random() * 500;
  osc.connect(amp);
  // change the type of the oscillator
  // osc.type = 'square';

  // get the current time from the audio context
  // this will return the num secs since we started running the program
  var now = con.currentTime;
  // ramp the amplitude to value 1 2s after we start
  amp.gain.linearRampToValueAtTime(0.2, now + 2);

  // back to 0 at 4 seconds
  amp.gain.linearRampToValueAtTime(0, now + 4);

  amp.connect(con.destination);
  osc.start();

  // the oscillator fades out at 4, so at 4.1 kill it to save some computing resources
  osc.stop(now + 4.1);

}
