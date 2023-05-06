var audio = document.getElementById("podcast");
var audio1 = document.getElementById("podcast1");
var audio2 = document.getElementById("podcast2");
var audio3 = document.getElementById("podcast3");
var audio4 = document.getElementById("podcast4");
var audio5 = document.getElementById("podcast5");

var playPauseBtn = document.getElementById("play-pause");
var playPauseBtn1 = document.getElementById("play-pause1");
var playPauseBtn2 = document.getElementById("play-pause2");
var playPauseBtn3 = document.getElementById("play-pause3");
var playPauseBtn4 = document.getElementById("play-pause4");
var playPauseBtn5 = document.getElementById("play-pause5");
var playlistPlayPauseBtn = document.getElementById("play-pause-playlist");


playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<span class="material-icons"style="font-size: 84px;">pause_circle_outline</span>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<span class="material-icons"style="font-size: 84px;">play_circle_outline</span>';

    }
});

playPauseBtn1.addEventListener("click", function () {
    if (audio1.paused) {
        audio1.play();
        playPauseBtn1.innerHTML = '<span class="material-icons"style="font-size: 84px;">pause_circle_outline</span>';
    } else {
        audio1.pause();
        playPauseBtn1.innerHTML = '<span class="material-icons"style="font-size: 84px;">play_circle_outline</span>';

    }
});

playPauseBtn2.addEventListener("click", function () {
    if (audio2.paused) {
        audio2.play();
        playPauseBtn2.innerHTML = '<span class="material-icons"style="font-size: 84px;">pause_circle_outline</span>';
    } else {
        audio2.pause();
        playPauseBtn2.innerHTML = '<span class="material-icons"style="font-size: 84px;">play_circle_outline</span>';

    }
});

playPauseBtn3.addEventListener("click", function () {
    if (audio3.paused) {
        audio3.play();
        playPauseBtn3.innerHTML = '<span class="material-icons"style="font-size: 4rem;">pause_circle_outline</span>';
    } else {
        audio3.pause();
        playPauseBtn3.innerHTML = '<span class="material-icons"style="font-size: 4rem;">play_circle_outline</span>';

    }
});

playPauseBtn4.addEventListener("click", function () {
    if (audio4.paused) {
        audio4.play();
        playPauseBtn4.innerHTML = '<span class="material-icons"style="font-size: 4rem;">pause_circle_outline</span>';
    } else {
        audio4.pause();
        playPauseBtn4.innerHTML = '<span class="material-icons"style="font-size: 4rem;">play_circle_outline</span>';

    }
});

playPauseBtn5.addEventListener("click", function () {
    if (audio5.paused) {
        audio5.play();
        playPauseBtn5.innerHTML = '<span class="material-icons"style="font-size: 4rem;">pause_circle_outline</span>';
    } else {
        audio5.pause();
        playPauseBtn5.innerHTML = '<span class="material-icons"style="font-size: 4rem;">play_circle_outline</span>';

    }
});


// playlist play-pause icon control
playlistPlayPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playlistPlayPauseBtn.innerHTML = '<span class="material-icons"style="font-size: 2.3rem;position: relative;bottom: 18px;padding: 0 1rem;right: 15px;">pause_arrow</span>';
    } else {
        audio.pause();
        playlistPlayPauseBtn.innerHTML = '<span class="material-icons"style="font-size: 2.3rem;position: relative;bottom: 18px;padding: 0 1rem;right: 15px;">play_arrow</span>';
    }
});


// volume controls

var volumeSlider = document.getElementById("volumeSlider");
var muteButton = document.getElementById("muteButton");
var volumeBarContainer = document.querySelector(".volume-bar-container");
var previousVolume = audio.volume;
var previousVolume = audio1.volume;
var previousVolume = audio2.volume;
var previousVolume = audio3.volume;
var previousVolume = audio4.volume;
var previousVolume = audio5.volume;
if (volumeSlider) {
    volumeSlider.addEventListener("input", function () {
        if (audio) {
            audio.volume = volumeSlider.value / 100;
        }
        if (audio1) {
            audio1.volume = volumeSlider.value / 100;
        }
        if (audio2) {
            audio2.volume = volumeSlider.value / 100;
        }
        if (audio3) {
            audio3.volume = volumeSlider.value / 100;
        }
        if (audio4) {
            audio4.volume = volumeSlider.value / 100;
        }
        if (audio5) {
            audio5.volume = volumeSlider.value / 100;
        }
    });

    audio.addEventListener("volumechange", function () {
        if (volumeSlider) {
            volumeSlider.value = audio.volume * 100;
        }

    });
    audio1.addEventListener("volumechange", function () {
        if (volumeSlider) {
            volumeSlider.value = audio1.volume * 100;
        }

    });
    audio2.addEventListener("volumechange", function () {
        if (volumeSlider) {
            volumeSlider.value = audio2.volume * 100;
        }

    });
    audio3.addEventListener("volumechange", function () {
        if (volumeSlider) {
            volumeSlider.value = audio3.volume * 100;
        }

    });
    audio4.addEventListener("volumechange", function () {
        if (volumeSlider) {
            volumeSlider.value = audio4.volume * 100;
        }

    });
    audio5.addEventListener("volumechange", function () {
        if (volumeSlider) {
            volumeSlider.value = audio5.volume * 100;
        }

    });
}

if (muteButton) {
    muteButton.addEventListener("click", function () {
        if (audio.volume > 0) {
            previousVolume = audio.volume;
            audio.volume = 0;
            muteButton.innerHTML = '<span class="material-icons">volume_off</span>';
        } else {
            audio.volume = previousVolume;
            muteButton.innerHTML = '<span class="material-icons">volume_up</span>';
        }
        if (audio1.volume > 0) {
            previousVolume = audio1.volume;
            audio1.volume = 0;
            muteButton.innerHTML = '<span class="material-icons">volume_off</span>';
        } else {
            audio1.volume = previousVolume;
            muteButton.innerHTML = '<span class="material-icons">volume_up</span>';
        }
        if (audio2.volume > 0) {
            previousVolume = audio2.volume;
            audio2.volume = 0;
            muteButton.innerHTML = '<span class="material-icons">volume_off</span>';
        } else {
            audio2.volume = previousVolume;
            muteButton.innerHTML = '<span class="material-icons">volume_up</span>';
        }
        if (audio3.volume > 0) {
            previousVolume = audio3.volume;
            audio3.volume = 0;
            muteButton.innerHTML = '<span class="material-icons">volume_off</span>';
        } else {
            audio3.volume = previousVolume;
            muteButton.innerHTML = '<span class="material-icons">volume_up</span>';
        }
        if (audio4.volume > 0) {
            previousVolume = audio4.volume;
            audio4.volume = 0;
            muteButton.innerHTML = '<span class="material-icons">volume_off</span>';
        } else {
            audio4.volume = previousVolume;
            muteButton.innerHTML = '<span class="material-icons">volume_up</span>';
        }
        if (audio5.volume > 0) {
            previousVolume = audio5.volume;
            audio5.volume = 0;
            muteButton.innerHTML = '<span class="material-icons">volume_off</span>';
        } else {
            audio5.volume = previousVolume;
            muteButton.innerHTML = '<span class="material-icons">volume_up</span>';
        }
    });


    muteButton.addEventListener("mouseenter", function () {
        volumeBarContainer.classList.add("active");
    });

    volumeBarContainer.addEventListener("mouseleave", function () {
        volumeBarContainer.classList.remove("active");
    });
}


// progressbar control
var progressBar = document.getElementById("progressBar");
var progressBar1 = document.getElementById("progressBar");
var progressBar2 = document.getElementById("progressBar");
audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    var progress = (currentTime / duration) * 100;
    progressBar.value = progress;
});
audio1.addEventListener("timeupdate", function () {
    var currentTime1 = audio1.currentTime1;
    var duration1 = audio1.duration1;
    var progress1 = (currentTime1 / duration1) * 100;
    progressBar1.value = progress1;
});
audio2.addEventListener("timeupdate", function () {
    var currentTime2 = audio2.currentTime2;
    var duration2 = audio2.duration2;
    var progress2 = (currentTime2 / duration2) * 100;
    progressBar2.value = progress2;
});
