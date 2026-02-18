// JavaScript for Freecash Lander

// Earning ticker messages
const tickerMessages = [
    "Sarah just earned £127.50!",
    "Mike earned £89.00 playing games!",
    "Emma earned £156.75 today!",
    "James earned £203.25 this week!",
    "Lisa earned £94.50 in 2 hours!"
];

let currentTickerIndex = 0;

// Function to rotate ticker messages
function rotateTicker() {
    const tickerElement = document.getElementById('tickerText');
    if (tickerElement) {
        // Fade out
        tickerElement.style.opacity = '0.3';
        
        setTimeout(() => {
            // Change text
            currentTickerIndex = (currentTickerIndex + 1) % tickerMessages.length;
            tickerElement.textContent = tickerMessages[currentTickerIndex];
            
            // Fade in
            tickerElement.style.opacity = '1';
        }, 1500);
    }
}

// Start ticker rotation
setInterval(rotateTicker, 3000);

// Handle download button clicks
function handleDownload() {
    // Replace with your actual affiliate link
    const affiliateLink = 'https://freecash.com/r/YOUR_AFFILIATE_CODE';
    
    // Track click event (optional)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'download_click', {
            'event_category': 'engagement',
            'event_label': 'freecash_download'
        });
    }
    
    // Open affiliate link in new tab
    window.open(affiliateLink, '_blank');
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize first ticker message
    const tickerElement = document.getElementById('tickerText');
    if (tickerElement) {
        tickerElement.textContent = tickerMessages[0];
    }
});
