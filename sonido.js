const playPauseBTN = document.getElementById('playPauseBTN');
        const audio = document.getElementById('audio');
        let isPlaying = false;

        function playPause() {
            if (isPlaying) {
                audio.pause();
                playPauseBTN.innerHTML = "Play &#9658;";
            } else {
                audio.play();
                playPauseBTN.innerHTML = "Pause &#9208;";
            }
            isPlaying = !isPlaying;
        }

        audio.onended = function() {
            playPauseBTN.innerHTML = "Play &#9658;";
            isPlaying = false;
        }

        function stopAudio() {
            audio.pause();
            audio.currentTime = 0;
            playPauseBTN.innerHTML = "Play &#9658;";
            isPlaying = false;
        }