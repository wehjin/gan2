function beginShadowLoad() {
    function showLoading() {
        document.getElementById("loading").style.display = "block";
        document.getElementById("content").style.display = "none";
        document.getElementById("playbox").style.visibility = "hidden";
    }

    function showContent() {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.getElementById("playbox").style.visibility = "visible";
    }

    showLoading();
    addBeats(document.getElementById("beats"));
    const aud = document.getElementById("player");
    aud.onerror = function () {
        alert("The audio file is not available. Please try again later.");
        document.getElementById("loadingTitle").innerText = "Not Available";
        document.getElementById("loadingSubtitle").innerText = "";
    };
    aud.oncanplaythrough = showContent;
    if (aud.readyState > 3) {
        showContent();
    }
}

function render(context) {
    window.document.title = `Dialog ${context.number} [ Lesson ${context.lesson}]`;
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const source = this.responseText;
            console.log(`Source: ${source}`);
            const template = Handlebars.compile(source);
            const html = template(context);
            document.body.insertAdjacentHTML('beforeend', html);
            beginShadowLoad();
        }
    };
    request.open("GET", "../../dialog_template.html", true);
    request.send();
}
