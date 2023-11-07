const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')


burger.addEventListener('click', () => {
    console.log('clicked');
    navbar.classList.toggle('open')
})