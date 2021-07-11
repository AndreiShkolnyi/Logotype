/*VideoPlayer*/
let videoEl = document.getElementsByTagName('video')[0],
    playBtn = document.getElementById('playBtn'),
    playerText = document.getElementById('playerText');

playBtn.addEventListener('click', function () {
    if (videoEl.paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
}, false);

videoEl.addEventListener('play', function () {

    playBtn.classList.add('hide');
    playerText.classList.add('hide');
}, false);

videoEl.addEventListener('pause', function () {

    playBtn.classList.remove('hide');
    playerText.classList.remove('hide');
}, false);
/*VideoPlayer ~END~*/
