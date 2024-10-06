const themeToggle = document.getElementById('theme-toggle');
const theme = document.getElementById('theme');
const black_logo = document.getElementById('black-logo');
const body = document.body;

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')) {
        theme.src = "images/icons/black-sun.png";
        black_logo.src = "images/by-logo.png";
    }else {
        theme.src = "images/icons/moon.png";
        black_logo.src = "images/yw-logo.png";
    }
});
