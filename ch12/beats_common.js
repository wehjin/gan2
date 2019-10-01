function addBeat(beat, host) {
    let phrase = beat["phrase"];
    let id = "sentence" + phrase;
    let p = document.createElement("p");
    p.id = id;
    {
        let span = document.createElement("span");
        span.className = "speaker";
        span.appendChild(document.createTextNode(beat["speaker"] + ": "));
        p.appendChild(span);
    }
    {
        let trigger = document.createElement("button");
        trigger.href = "#" + id;
        trigger.onclick = function () {
            play(phrase)
        };
        trigger.appendChild(document.createTextNode(beat["kana"]));
        p.appendChild(trigger);
    }
    host.appendChild(p);
}

function addBeats(host) {
    beats.forEach(function (beat) {
        addBeat(beat, host)
    })
}