//your code here
// script.js

// Example: Add a click event to all columns
document.querySelectorAll('.custom-col').forEach((column) => {
    column.addEventListener('click', () => {
        alert(`You clicked on: ${column.textContent}`);
    });
});

// Example: Change background color of Row 1 Column 1 on page load
document.addEventListener('DOMContentLoaded', () => {
    const row1Col1 = document.querySelector('.row1-col1');
    row1Col1.style.backgroundColor = 'dark green'; // Change to a new color
});
