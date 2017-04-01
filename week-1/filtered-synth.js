// get a handle to the browser audio system
 var audio_context = window.AudioContext || window.webkitAudioContext;

 // create an instance of the sound engine
 var con = new audio_context();

 // create a new oscillator
 var osc = con.createOscillator();
 // adjust the frequency and type of oscillator
 osc.type = 'sawtooth';
 var defaultNote = 500;
 osc.frequency.value = defaultNote;

 // create a biquad filter
 var filter = con.createBiquadFilter();
 // vary the cutoff of the filter
 filter.frequency.value = 250;

 // connect the oscillator the filter, then the filter to the output
 osc.connect(filter);
 filter.connect(con.destination);

 // start the oscillator
 // osc.start();

 function adjustFilter(mx, my){
   filter.frequency.value = mx * 10;
   filter.Q.value = my / 50;
 }

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
