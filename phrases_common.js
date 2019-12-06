let player;

function initPlayer() {
    if (!player) {
        player = document.getElementById('player');
    }
}

function play(index, explicitStart, explicitEnd) {
    let startTime = explicitStart;
    let endTime = explicitEnd;
    if (index >= 0) {
        const phrase = phrases[index];
        startTime = phrase["start"];
        endTime = phrase["end"];
    }
    playTimes(startTime, endTime);
    initPlayer();
    player.pause();
    player.currentTime = startTime;
    player.ontimeupdate = function () {
        const time = player.currentTime;
        if (time > endTime) {
            player.pause();
            player.currentTime = startTime;
        }
    };
    player.play();
    console.log('play', index, startTime, endTime);
}

function playTimes(startTime, endTime) {
}

function playAll() {
    initPlayer();
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

let buttonText;

function toggleSpeed(id, slowRate) {
    initPlayer();
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
