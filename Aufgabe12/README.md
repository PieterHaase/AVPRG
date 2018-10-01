# Erstellt eine Website, bei der man über einen Slider zwischen der Lautstärke des rechten und linken Stereo-Signals einer Audio Datei variieren kann. Über einen Button kann man die Stereokanäle vertauschen. 

Eine Live-Demo der Aufgabe werdet ihr hier findenr: https://jakobsudau.github.io/AVPRG/Aufgabe12/index.html

Tipp: Nutzt die ChannelSplitterNode, die ChannelMergerNode, die GainNode und das HTML Input Element von type=range für die Slider (siehe Aufgabe 6). Guckt euch dafür die AudioNode.connect Funktion genauer an: https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/connect

Beispielcode: erstellt eine ChannelSplitterNode und ChannelMergerNode
```
var context = new AudioContext();
var audio = new Audio("path/to/your/sound.wav");
var source = context.createMediaElementSource(audio);
var splitter = context.createChannelSplitter(2);
var merger = context.createChannelMerger(2);
var gainLeft = context.createGain();
var gainRight = context.createGain();

gainLeft.gain.value = 0.2;
gainRight.gain.value = 0.8;

source.connect(splitter);
splitter.connect(gainLeft, 0);
splitter.connect(gainRight, 1);
gainLeft.connect(merger, 0, 0);
gainRight.connect(merger, 0, 1);
merger.connect(context.destination);

audio.play();
```