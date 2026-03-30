
function toggleInit(){
// js/features/theme-persist.js

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 1. Run this IMMEDIATELY to prevent "flashing" white on refresh
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

// 2. Add the event listener for the button
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // Toggle the class
        body.classList.toggle('dark-mode');
        
        // Check if we just turned on dark mode
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}
};