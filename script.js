// SIH Prototype Showcase JavaScript

// Function to copy link to clipboard
function copyLink(elementId) {
    const linkElement = document.getElementById(elementId);
    const linkText = linkElement.textContent;

    navigator.clipboard.writeText(linkText).then(() => {
        // Show temporary feedback
        const originalText = linkElement.innerHTML;
        linkElement.innerHTML = '<span style="color: #10b981;">Copied!</span>';
        setTimeout(() => {
            linkElement.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy link. Please try again.');
    });
}

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
    btn.style.background = '#10b981';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '#6366f1';
    }, 1500);
}

// Allow Enter key to trigger video load
document.getElementById('youtube-url').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        loadYouTubeVideo();
    }
});

// Initialize with empty states
document.addEventListener('DOMContentLoaded', function() {
    // Set placeholder text for prototype link
    const prototypeLink = document.getElementById('prototype-link');
    prototypeLink.textContent = 'https://your-prototype-link-here.com';
    prototypeLink.href = '#';

    // Add some interactivity to the link box
    prototypeLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.textContent !== 'https://your-prototype-link-here.com') {
            // If it's a real link, we could open it, but for now just copy
            copyLink('prototype-link');
        }
    });
});