// Example of animated quotes
const quotes = [
    "Believe in yourself!",
    "Stay positive, work hard, make it happen.",
    "The best way to predict the future is to create it.",
    "You are capable of amazing things."
];

document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    let quoteIndex = 0;

    function showNextQuote() {
        quoteElement.textContent = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }

    setInterval(showNextQuote, 5000);
    showNextQuote(); // Show the first quote immediately
});

// Example AJAX form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate form submission
    console.log(`Login with email: ${email} and password: ${password}`);

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
});
