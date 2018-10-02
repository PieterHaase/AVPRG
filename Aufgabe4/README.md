# Erstellt eine Drum Machine mit 4 Feldern, durch einen Mausklick auf das jeweilige Feld wird ein Sound abgespielt.

Eine Live-Demo der Aufgabe werdet ihr hier finden: https://jakobsudau.github.io/AVPRG/Aufgabe4/index.html

Tipp: Nutzt das HTML Div Element (oder Buttons) für die Felder, addEventListener() und nutzt das HTML5 Audio Element für die verschiedenen Sounds

Beispielcode: erstellt ein Audio Element, GainNode, verbindet diese und spielt den Sound ab

```
var context = new AudioContext(),
    sound = new Audio(“sounds/sound1.wav”),
    soundNode = context.createMediaElementSource(source);
    gainNode = context.createGain();

gainNode.gain.value = 0.8;

soundNode.connect(gainNode);
gainNode.connect(context.destination);

sound.play();
```