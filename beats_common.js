const template = Handlebars.compile(
    "<div class=\"beat\" id=\"{{id}}\">" +
    "<div class=\"speaker mdc-typography--overline\">{{speaker_name}}</div>" +
    "<button  class=\"mdc-button textleft\" onclick=\"{{click_action}}\">" +
    "<div class=\"mdc-button__ripple\"></div><span class=\"mdc-button__label\">{{translation}}</span>" +
    "</button>" +
    "</div>"
);

function addBeat(beat, host) {
    const phrase = beat["phrase"];
    const context = {
        "id": "sentence" + phrase,
        "speaker_name": beat["speaker"],
        "translation": beat["kana"],
        "click_action": `play(${phrase})`

    };
    host.insertAdjacentHTML('beforeend', template(context));
}

function addBeats(host) {
    beats.forEach(function (beat) {
        addBeat(beat, host)
    })
}