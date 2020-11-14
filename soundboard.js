function playR2() {
    var box = document.getElementById("r2Box");
    var audio = document.getElementById("r2Audio")

    audio.play();
    box.style.background = "green";
}

function playChewbacca() {
    var box = document.getElementById("chewieBox");
    var audio = document.getElementById("chewieAudio");

    audio.play();
    box.style.background = "green";
}

function playLightsaber() {
    var box = document.getElementById("lightsaberBox");
    var audio = document.getElementById("lightsaberAudio");

    audio.play();
    box.style.background = "green";
}

function resetBackground(box) {
    var parent = document.getElementById(box.id).parentNode;
    parent.style.background = "white";
}