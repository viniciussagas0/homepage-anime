function playPause(video) {
    if(video.paused) {
        video.play();
    }
    else {
        video.pause();
        video.currentTime = 0;
        
    }
}
