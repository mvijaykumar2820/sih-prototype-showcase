// SIH Prototype Showcase JavaScript

// Function to load YouTube video
function loadYouTubeVideo() {
    const urlInput = document.getElementById('youtube-url');
    const videoFrame = document.getElementById('youtube-frame');
    const url = urlInput.value.trim();

    if (!url) {
        alert('Please enter a YouTube URL or video ID');
        return;
    }

    // Extract video ID from various YouTube URL formats
    let videoId = '';

    // Regular expression to match YouTube video ID
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);

    if (match && match[1]) {
        videoId = match[1];
    } else {
        // Assume the input is just a video ID
        if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
            videoId = url;
        } else {
            alert('Please enter a valid YouTube URL or video ID');
            return;
        }
    }

    // Set the video source
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;

    // Clear input after loading
    urlInput.value = '';

    // Show success message briefly
    const btn = document.querySelector('.video-controls button');
    const originalText = btn.textContent;
    btn.textContent = 'Loaded!';
    btn.style.background = '#ffffff';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '#222222';
    }, 1500);
}

// Allow Enter key to trigger video load
document.getElementById('youtube-url').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        loadYouTubeVideo();
    }
});