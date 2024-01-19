function playVideo() {
    var videoContainer = document.getElementById("videoContainer");
    var video = document.getElementById("myVideo");

    // Play the video
    video.play();

    // Set timeout to trigger fade-out, enlargement, and movement after 5 seconds
    setTimeout(function () {
        // Slowly change transparency over 1 second
        video.style.transition = "opacity 1s ease-out";
        video.style.opacity = 0;

        // Enlarge the video relatively quickly after the transparency changes
        video.addEventListener('transitionend', function () {
            video.style.transform = "scale(1.5)";
        }, { once: true });

        // Move the videoContainer 9000px to the right after the entire animation
        video.addEventListener('transitionend', function () {
            videoContainer.style.transform = "translateX(9000px)";
        }, { once: true });
    }, 2400); // 5000 milliseconds (5 seconds)
}