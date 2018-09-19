# Setzt einen Equalizer um. Erstellt dafür eine Website, die eine Audio Datei abspielt. Implementiert einen BiquadFilter, bei dem man Frequency, Type, Detune, Quality und Gain über Slider (siehe Aufgabe 6) einstellen kann.

Eine Live-Demo der Aufgabe findet ihr hier: https://jakobsudau.github.io/AVPRG/Aufgabe9/index.html

Tipp: Nutzt die BiquadFilterNode, das HTML select Element für das DropDown-Menü (siehe Aufgabe 7), das HTML Input Element von type=range für die Slider (siehe Aufgabe 6) und erstellt den Sound wie in Aufgabe 6.

Beispielcode: erstellt eine BiquadFilterNode
```
var context = new AudioContext();
var sound  = new Audio("path/to/your/sound.wav");
var source = context.createMediaElementSource(sound);
var filter = context.createBiquadFilter();
source.connect(filter);
filter.connect(context.destination);

filter.type = "lowpass";
filter.frequency.value = 500;
filter.detune.value = 30;
filter.Q.value = 1;
filter.gain.value = 25;

sound.play();
```