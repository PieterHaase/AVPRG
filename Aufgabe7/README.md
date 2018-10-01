# Erstellt eine Website, die eine kurze Audiodatei mit Reverb abspielt. Über ein Dropdown-Menü kann man zwischen 4 verschiedenen Reverb Einstellungen auswählen.

Eine Live-Demo der Aufgabe werdet ihr hier finden: https://jakobsudau.github.io/AVPRG/Aufgabe7/index.html

Tipp: Nutzt die ConvolverNode, das HTML select Element für das DropDown-Menü und erstellt den Sound wie in Aufgabe 6. die Impuse Response File muss über einen XMLHttpRequest in einen Buffer geladen werden.

Beispielcode: erstellt eine ConvolverNode, lädt die Impulse Response File über einen XMLHttpRequest (wie bei der AudioBufferSourceNode)
```
var context = new AudioContext();
var sound = new Audio("path/to/your/sound.wav");
var source = context.createMediaElementSource(sound);
var convolver = context.createConvolver();

source.connect(convolver);
convolver.connect(context.destination);

var request = new XMLHttpRequest();
request.open("GET",  "path/to/your/impulseResponse.wav", true);
request.responseType = "arraybuffer";

request.onload = function () {
     var undecodedAudio = request.response;
     context.decodeAudioData(undecodedAudio, function (buffer) {
          convolver.buffer = buffer;
          convolver.normalize = true;
     });
};
request.send();
sound.play();
```