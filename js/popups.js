// Add a script to show the popup on responsive views
window.addEventListener('resize', function () {
    var popup = document.getElementById('languagePopup');
    if (window.innerWidth <= 768) { // Adjust this value based on your desired responsive breakpoint
        popup.style.display = 'block';
        setTimeout(function () {
            popup.style.display = 'none';
        }, 3000); // Hide the popup after 3000 seconds
    } else {
        popup.style.display = 'none';
    }
});