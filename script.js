// Mobile nav bar toggle
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const bar1 = document.getElementById('bar1');

if (bar) {
    bar.addEventListener('click', () => nav.classList.add('active'));
}

if (bar1) {
    bar1.addEventListener('click', () => nav.classList.remove('active'));
}