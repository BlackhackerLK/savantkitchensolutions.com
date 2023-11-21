// Function to close the banner
function closeBanner() {
    document.getElementById('responsiveBanner').style.display = 'none';
  }
  
  // Countdown timer
  let seconds = 3; // Set the duration in seconds
  function updateCountdown() {
    document.getElementById('countdown').innerText = seconds;
    if (seconds === 0) {
      closeBanner();
    } else {
      seconds--;
      setTimeout(updateCountdown, 1000);
    }
  }
  
  // Show the banner and start the countdown when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('responsiveBanner').style.display = 'block';
    updateCountdown();
  });
  