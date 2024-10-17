// Show the loading animation
function showLoading() {
    document.querySelector('.loading-container').style.display = 'flex'; // Show the loading animation
}

// Hide the loading animation
function hideLoading() {
    document.querySelector('.loading-container').style.display = 'none'; // Hide the loading animation
}

// Example usage: Show loading on page load
window.addEventListener('load', () => {
    hideLoading(); // Hide loading when the page has fully loaded
});

// Simulate loading some content (for demonstration purposes)
function loadContent() {
    showLoading(); // Show loading when starting to load content

    // Simulating an asynchronous operation (like fetching data)
    setTimeout(() => {
        // Hide the loading animation after the content is loaded
        hideLoading();
    }, 3000); // Adjust time as needed
}

// Call loadContent() when you want to load your content
loadContent();
