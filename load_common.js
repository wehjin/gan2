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