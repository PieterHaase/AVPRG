# OpenCV -> Web Audio Connection

## In eurem Projekt sollen OpenCV und Web Audio miteinander kommunizieren. Dies wollen wir über eine MIDI Schnittstelle erreichen. Wie ihr in der Web Audio API MIDI Signale empfangt und weiterverarbeitet, habt ihr bereits gelernt (Aufgabe 14a-c).

Beispielcode: Web MIDI API, ruft die Funktionen startNote(note, velocity) und stopNote(note, velocity), ... auf
```
// ask if MIDI is available in browser
if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({sysex: false}).then(function(midiAccess) {
        midi = midiAccess;
        var inputs = midi.inputs.values();
        // loop through all inputs
        for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
            // listen for midi messages
            input.value.onmidimessage = onMIDIMessage;
        }
    });
} else {
    alert("No MIDI support in your browser.");
}

function onMIDIMessage(event) {
    // event.data is an array
    // event.data[0] = on (144) / off (128) / controlChange (176)  / pitchBend (224) / ...
    // event.data[1] = midi note
    // event.data[2] = velocity

    switch(event.data[0]) {
        case 144:
            // your function startNote(note, velocity)...
            startNote(event.data[1], event.data[2]);
            break;
        case 128:
            // your function stopNote(note, velocity)...
            stopNote(event.data[1], event.data[2]);
            break;
        case 176:
            // your function controlChange(controllerNr, value)...
            controlChange(event.data[1], event.data[2]);
            break;
        case 224:
            // your function pitchBend(LSB, HSB)...
            pitchBend(event.data[1], event.data[2]);
            break;
    }
}
```

## Wie ihr aus eurem Qt-openVC Projekt MIDI Signale sendet, erfahrt ihr bei Plaß und in seinem Qt-MIDI Beispielprojekt.

Anschließend müssen die MIDI Signale, welche von den Qt-openCV-MIDI Projekt kommen, im Bertiebssystem auf auf den richtigen MIDI Port geroutet werden, damit wir anschließend die MIDI Signale in Chrome in unserem Web Audio Projekt erhalten.

Anleitung Windows:
1. Downloade und installiere das virtuelle MIDI-Port Programm [LoopBe1](http://www.nerds.de/data/setuploopbe1.exe)
2. Baue und öffne das Qt-MIDI Programm von Plaß und wähle als MIDI-Output "LoopBe1"
3. Öffne dein Web Audio & MIDI Projekt in Chrome

Anleitung Mac:
1. Öffne das Systemprogramm "Audio-MIDI-Setup" und öffne darin das MIDI Studio (Fenster->Zeige MIDI Studio / cmd + 2)
2. Klicke auf das Symbol "IAC Driver" und anschließend auf das i-Symbol (Information) in der Symbolleiste
3. Klicke auf das "+"-Symbol im neuen Fenster unter "Ports" um einen virtuellen MIDI Port hinzuzufügen (und benenne diesen z.B. "Web MIDI")
2. Baue und öffne das Qt-MIDI Programm von Plaß und wähle als MIDI-Output "Web MIDI" (den Namen des eben erstellen Ports)
3. Öffne dein Web Audio & MIDI Projekt in Chrome