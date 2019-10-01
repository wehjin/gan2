const player = document.getElementById('player');

function play(index) {
    let phrase = phrases[index];
    let startTime = phrase["start"];
    let endTime = phrase["end"];
    player.pause();
    player.currentTime = startTime;
    player.ontimeupdate = function () {
        let time = player.currentTime;
        if (time > endTime) {
            player.pause();
            player.currentTime = startTime;
        }
    };
    player.play();
    console.log('play', index);
}

function playAll() {
    if (player.ontimeupdate != null) {
        player.pause();
        player.ontimeupdate = null;
        player.currentTime = 0;
        player.play();
    } else {
        if (player.paused) {
            player.play()
        } else {
            player.pause()
        }
    }
}

var buttonText;

function toggleSpeed(id, slowRate) {
    let button = document.getElementById(id);
    if (player.playbackRate >= 1.0) {
        player.playbackRate = slowRate;
        buttonText = button.innerText;
        button.innerText = "Return To Full Speed";
    } else {
        player.playbackRate = 1.0;
        button.innerText = buttonText;
    }
}
