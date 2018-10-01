# Erstellt eine Website, die eine Audio Datei abspielt. Implementiert einen Compressor, bei dem man Threshold, Ratio, Knee, Attack und Release über Slider (siehe Aufgabe 6) einstellen kann.

Eine Live-Demo der Aufgabe werdet ihr hier finden: https://jakobsudau.github.io/AVPRG/Aufgabe8/index.html

Tipp: Nutzt die DynamicsCompressorNode, das HTML Input Element von type=range für die Slider (siehe Aufgabe 6) und erstellt den Sound wie in Aufgabe 6.

Beispielcode: erstellt eine ConvolverNode
```
var context = new AudioContext();
var sound = new Audio("path/to/your/sound.wav");
var source = context.createMediaElementSource(sound);
var compressor = context.createDynamicsCompressor();

source.connect(compressor);
compressor.connect(context.destination);

compressor.threshold.value = -70;
compressor.ratio.value = 12;
compressor.knee.value = 15;
compressor.attack.value = 0.16;
compressor.release.value = 0.55;

sound.play();
```