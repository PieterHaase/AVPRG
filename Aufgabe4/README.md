# Erstellt eine Drum Machine mit 4 Feldern, durch einen Mausklick auf das jeweilige Feld wird ein Sound abgespielt.

Eine Live-Demo der Aufgabe werdet ihr hier finden: https://jakobsudau.github.io/AVPRG/Aufgabe4/index.html

Tipp: Nutzt das HTML Div Element für die Felder, nutzt AudioBufferSourceNodes für die verschiedenen Sounds (Achtung: eine AudioBufferSourceNode kann nur einmal abgespielt werden!), sowie addEventListener()

Beispielcode: erstellt eine AudioBufferSourceNode
Achtung: XMLHttpRequest funktionieren nicht lokal, ihr müsst also entweder die Live-Preview Funktion in Brackets nutzen oder das Projekt bei GitHub Pages hochladen
```
var context = new AudioContext();

var request = new XMLHttpRequest();
request.open('GET',  "path/to/your/sound.wav", true);
request.responseType = 'arraybuffer';

request.onload = function () {
    var undecodedAudio = request.response;
    context.decodeAudioData(undecodedAudio, function (buffer) {
        
        var sourceBuffer = context.createBufferSource();
        sourceBuffer.buffer = buffer;
        sourceBuffer.connect(context.destination);
        
        sourceBuffer.start(context.currentTime);
    });
};

request.send();
```