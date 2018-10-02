var context = new AudioContext();
var drumpads = document.getElementsByClassName("drumpad");
var source1, source2, source3, source4;
var sourceBuffers = [source1, source2, source3, source4];

for (let i = 0; i < drumpads.length; i++) {
    getData(i);
    drumpads[i].addEventListener("mousedown", function (e) {playSound(i)});
}

function getData(i) {
    var request = new XMLHttpRequest();
    request.open('GET',  "sounds/sound" + (i + 1) + ".wav", true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
        var undecodedAudio = request.response;

        context.decodeAudioData(undecodedAudio, function (buffer) {
            sourceBuffers[i] = context.createBufferSource();
            sourceBuffers[i].buffer = buffer;
            sourceBuffers[i].connect(context.destination);
        });
    };
    request.send();
}

function playSound(i) {
    getData(i);
    sourceBuffers[i].start(0);
}
