// Create the AudioContext
var audioContext = new AudioContext();
audioContext.destination.channelCount = 8;
console.log(audioContext.destination.channelCount);

// Create an audio element. Feed into audio graph.
var sound = new Audio("sound.wav");
var mediaElementAudioSource = audioContext.createMediaElementSource(sound);

// Set room acoustics properties.
var dimensions = {width: 10.1, height: 10.1, depth: 25.1};

var materials = {
  left: 'brick-bare',
  right: 'curtain-heavy',
  front: 'marble',
  back: 'glass-thin',
  down: 'grass',
  up: 'transparent',
};

// Create a (3rd-order Ambisonic) ResonanceAudio scene with acoustics properties.
var resonanceAudioScene = new ResonanceAudio(audioContext, {
    ambisonicOrder: 1,
    dimensions: dimensions,
    materials: materials,
  });

// Send ResonanceAudio's binaural output to stereo out.
resonanceAudioScene.ambisonicOutput.connect(audioContext.destination);

// Create a Source, connect desired audio input to it.
var source = resonanceAudioScene.createSource();
mediaElementAudioSource.connect(source.input);

// The source position is relative to the origin
// (center of the room).
source.setPosition(1, 1, 25);

// Setting the listener position and orientations
//resonanceAudioScene.setListenerPosition(x, y, z);
//source.setOrientation(forward_x, forward_y, forward_z, up_x, up_y, up_z);
//resonanceAudioScene.setListenerOrientation(forward_x, forward_y, forward_z, up_x, up_y, up_z);

// Playback the audio.
sound.play();
