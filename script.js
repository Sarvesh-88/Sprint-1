const themeBtn = document.getElementById('themeToggleBtn');
const body = document.body;


const savedTheme = localStorage.getItem('theme');


if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.innerText = 'Light Mode ';
}


themeBtn.addEventListener('click', () => {
    
    body.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        themeBtn.innerText = 'Light Mode ';
        localStorage.setItem('theme', 'dark'); 
    } else {
        themeBtn.innerText = 'Dark Mode ';
        localStorage.setItem('theme', 'light'); 
    }
});
