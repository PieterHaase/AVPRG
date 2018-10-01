# Erstellt euch euren eigenen Beat (z.B. “We Will Rock you”), der für zwei Takte spielt.

Eine Live-Demo der Aufgabe werdet ihr hier finden: https://jakobsudau.github.io/AVPRG/Aufgabe13/index.html

Nutzt dafür AudioSourceBufferNodes und Context.currenttime

Tipp: Nutzt die AudioSourceBufferNodes (Achtung, eine Node nur einmal nutzbar/startbar!), context.currentTime, sowie Variablen für bpm (beats per minute), 

Beispielcode: erstellt ein Array mit vier Audio Buffers der vier Drum Sounds
```
var audioBuffers = [];

for (let i = 0; i < 3; i++)
    getAudioData(i);
    
function getAudioData(i) {
    var audioBuffer;
    var request = new XMLHttpRequest();
    request.open('GET',  "path/to/folder/of/sound1,sound2,sound3,etc" + (i+1) + ".wav", true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
        var undecodedAudio = request.response;

        context.decodeAudioData(undecodedAudio, function (buffer) {
            audioBuffers[i] = buffer;
        });
    };
    request.send();
}
```

Beispielcode: Hilfsfunktion zum einfachen Abspielen von Sounds, Aufruf z.B. über playSound(audioBuffers[0], context.currentTime)
Achtung: zeitgleiches/zeitnahes Aufrufen der Funktion zu der getAudioData() Funktion kann zu Fehlern führen, da nicht gewährleistet werden kann, dass über die XMLHttpRequest bereits alle Daten geladen sind!
```
var context = new AudioContext();
// ...
function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(time);
}
```

Beispielcode: Variablen zur Berechnung der Zeitwerte
```
var tempo = 90; // BPM (beats per minute)
var eighthNoteTime = (60 / tempo) / 2;
```